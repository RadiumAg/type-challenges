declare function Currying<T extends (...args: any) => any>(fn: T): Return<T>

type Return<T extends (...args: any) => any> = T extends (
  ...args: [infer R, ...infer O]
) => infer TR
  ? (
      arg: R
    ) => O extends []
      ? TR
      : Return<(...args: O) => (TR)>
  : never

