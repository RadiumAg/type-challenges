type Length<T> = T extends { length: infer R } ? R : never
