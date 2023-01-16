import { Configuration, OpenAIApi } from 'openai'
import { cleanCode, getContentString, getDefaultCreateOptions } from './utils'

/**
 * Options for getting a 