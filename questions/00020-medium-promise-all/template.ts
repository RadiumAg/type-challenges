declare function PromiseAll< T extends readonly unknown[] | []>(values: T): { -readonly [P in keyof T]: Awaited<T[P]>; }
