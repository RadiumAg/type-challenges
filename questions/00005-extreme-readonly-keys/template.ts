import type { Equal } from '@type-challenges/utils'

declare global {
 type GetReadonlyKeys<T> = {
   [K in keyof Required<T>]: Equal<{ [F in K]: T[F] }, { -readonly [F in K]: T[F] }> extends true ? never : K
 }[keyof T]
}

type c = Equal<{ a?: string }, { a?: string }>
type d = { [key in keyof { a?: string }]: key }

