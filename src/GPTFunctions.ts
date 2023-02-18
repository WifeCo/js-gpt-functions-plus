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
     * A description of the function being call