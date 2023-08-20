type Last<T extends any[]> = T extends [...args:any[], infer R] ? R : never
