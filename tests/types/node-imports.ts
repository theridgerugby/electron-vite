import 'electron-vite/node'
import raw from './fixtures/text.txt?raw'

export const text: string = raw

// @ts-expect-error Raw imports return strings, not Node.js buffers.
export const buffer: Buffer = raw
