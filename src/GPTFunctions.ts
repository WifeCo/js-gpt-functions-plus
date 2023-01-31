import { Configuration, OpenAIApi } from 'openai'
import { cleanCode, getContentString, getDefaultCreateOptions } from './utils'

/**
 * Options for getting a result from the OpenAI API
 * @template T The type of the function
 */
export type ResOptions<T> = {
  