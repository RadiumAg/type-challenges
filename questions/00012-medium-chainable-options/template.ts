type Chainable<P = undefined> = {
  option<T extends string, V = undefined>(
    key: T,
    value: V
  ): Chainable<
    V extends undefined
      ? undefined
      : ProcessValue<P extends undefined ? undefined : Omit<P, T>> & {
        [key in T]: V
      }
  > &
  ProcessValue<V extends undefined ? P : undefined>

  get(): P
}

type ProcessValue<V = undefined> = V extends undefined
  ? { [key in never]: never }
  : V
