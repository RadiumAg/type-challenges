type DeepReadonly<T> = { +readonly [key in keyof T]: Transverse<T[key]> }

type AnyFunc = (...args: any[]) => any

type Transverse<T> = T extends Record<string, any> ? T extends AnyFunc ? T : DeepReadonly<T> : T
