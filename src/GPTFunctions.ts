import { Configuration, OpenAIApi } from 'openai'
import { cleanCode, getContentString, getDefaultCreateOptions } from './utils'

/**
 * Options for getting a result from the OpenAI API
 * @template T The type of the function
 */
export type ResOptions<T> = {
    /**
     * Rough type of the function
     * @example (number, number) => number
     */
    func: string
    /**
     * The arguments for the function
     * @example ["4", "5"]
     */
    args: Array<string>
    /**
     * A description of the function being called
     */
    desc: string
    /**
     * The name of the OpenAI API model to use
     * @default 'gpt-3.5-turbo'
     */
    model?: string
    /**
     * A function to post-process the API response
     */
    postProcess?: (response: unknown) => T
}

/**
 * Options for creating a function using the OpenAI API
 * @template T The type of the function
 */
export type CreateFucntionOptions<T> = {
    /**
     * Rough type of the function
     */
    func: string
    /**
     * Description of the function being defined
     */
    desc: string
    /**
     * The name of the OpenAI API model to use
     * @default 'gpt-3.5-turbo'
     */
    model?: string
    /**
     * A function to evaluate the function definition
     * @default Function (Function constructor)
     */
    evaluate?: (...args: string[]) => T
}

export class GPTFunctions {
    private openai: OpenAIApi

    public constructor(apiKey: string) {
        const config = new Configuration({
            apiKey
        })
        this.openai = new OpenAIApi(config)
    }

    /**
     *  Generate the result of calling a function
     *  @param {ResOptions} options - The options for generating the result.
     *  @returns {Promise<T>} - A promise that resolves to the result of calling the function.
     *  @template T
     */
    public getResult = async <T = 'string'>({
        func,
        args,
        desc,
        model = 'gpt-3.5-turbo',
        postProcess = (res: unknown) => res as T
    }: ResOptions<T>): Promise<T> => {
        const response = await this.openai.createChatCompletion({
            model,
            messages: [
                {
                    role: 'system',
                    content: getContentString(func, desc)
                },
                {
           