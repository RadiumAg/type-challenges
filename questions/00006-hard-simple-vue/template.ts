declare function SimpleVue<
  D extends () => any,
  M extends Record<string, any>,
  C extends Record<string, any>,
>(options: Options<D, M, C>): any

type Options<
  D extends () => any,
  M extends Record<string, any>,
  C extends Record<string, any>,
> = {
  data: D & ThisType<ReturnType<D> & Computed<C> & M>
  computed: C & ThisType<ReturnType<D> & Computed<C> & M>
  methods: M & ThisType<ReturnType<D> & Computed<C> & M>
}

type Computed<C extends Record<string, any>> = {
  [key in keyof C]: ReturnType<C[key]>
}
