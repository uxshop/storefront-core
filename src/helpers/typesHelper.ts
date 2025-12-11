export type ToBooleanRecursive<T> = {
  [K in keyof T]: T[K] extends (infer U)[]
    ? ToBooleanRecursive<U> // handle arrays recursively
    : T[K] extends object
    ? ToBooleanRecursive<T[K]> // recurse for objects
    : boolean | undefined // primitive values become boolean
}
