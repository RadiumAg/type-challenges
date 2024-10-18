declare function SimpleVue<O, C extends { [key: string]: () => any }, M>(options: {
  data: () => O
  computed: ThisType<O> & C
  methods: ThisType<O & { [key in keyof C]: ReturnType<C[key]> } & M > & M
}): M & C & O
