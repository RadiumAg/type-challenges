type GetReadonlyKeys<T extends Record<string, any>> = { [key in keyof T]: { key: T[key] } extends { readonly [key: string]: any } ? T[key] : never }
