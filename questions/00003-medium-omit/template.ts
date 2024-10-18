type MyOmit<T, K extends keyof T> = Pick<T, MyExclude<keyof T, K>>

