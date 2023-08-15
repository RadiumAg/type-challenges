type TupleToObject<T extends readonly any[]> = T extends readonly (infer R)[] ? { [key in R]: key } : never
