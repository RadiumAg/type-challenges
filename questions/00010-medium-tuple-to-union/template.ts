type TupleToUnion<T> = T extends (infer R)[] ? R : never

