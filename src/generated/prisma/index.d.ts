
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model preorder
 * 
 */
export type preorder = $Result.DefaultSelection<Prisma.$preorderPayload>
/**
 * Model paket
 * 
 */
export type paket = $Result.DefaultSelection<Prisma.$paketPayload>
/**
 * Model customer
 * 
 */
export type customer = $Result.DefaultSelection<Prisma.$customerPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Preorders
 * const preorders = await prisma.preorder.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Preorders
   * const preorders = await prisma.preorder.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.preorder`: Exposes CRUD operations for the **preorder** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Preorders
    * const preorders = await prisma.preorder.findMany()
    * ```
    */
  get preorder(): Prisma.preorderDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.paket`: Exposes CRUD operations for the **paket** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Pakets
    * const pakets = await prisma.paket.findMany()
    * ```
    */
  get paket(): Prisma.paketDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.customer`: Exposes CRUD operations for the **customer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Customers
    * const customers = await prisma.customer.findMany()
    * ```
    */
  get customer(): Prisma.customerDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.9.0
   * Query Engine version: 81e4af48011447c3cc503a190e86995b66d2a28e
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    preorder: 'preorder',
    paket: 'paket',
    customer: 'customer'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "preorder" | "paket" | "customer"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      preorder: {
        payload: Prisma.$preorderPayload<ExtArgs>
        fields: Prisma.preorderFieldRefs
        operations: {
          findUnique: {
            args: Prisma.preorderFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$preorderPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.preorderFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$preorderPayload>
          }
          findFirst: {
            args: Prisma.preorderFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$preorderPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.preorderFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$preorderPayload>
          }
          findMany: {
            args: Prisma.preorderFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$preorderPayload>[]
          }
          create: {
            args: Prisma.preorderCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$preorderPayload>
          }
          createMany: {
            args: Prisma.preorderCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.preorderCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$preorderPayload>[]
          }
          delete: {
            args: Prisma.preorderDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$preorderPayload>
          }
          update: {
            args: Prisma.preorderUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$preorderPayload>
          }
          deleteMany: {
            args: Prisma.preorderDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.preorderUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.preorderUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$preorderPayload>[]
          }
          upsert: {
            args: Prisma.preorderUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$preorderPayload>
          }
          aggregate: {
            args: Prisma.PreorderAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePreorder>
          }
          groupBy: {
            args: Prisma.preorderGroupByArgs<ExtArgs>
            result: $Utils.Optional<PreorderGroupByOutputType>[]
          }
          count: {
            args: Prisma.preorderCountArgs<ExtArgs>
            result: $Utils.Optional<PreorderCountAggregateOutputType> | number
          }
        }
      }
      paket: {
        payload: Prisma.$paketPayload<ExtArgs>
        fields: Prisma.paketFieldRefs
        operations: {
          findUnique: {
            args: Prisma.paketFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$paketPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.paketFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$paketPayload>
          }
          findFirst: {
            args: Prisma.paketFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$paketPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.paketFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$paketPayload>
          }
          findMany: {
            args: Prisma.paketFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$paketPayload>[]
          }
          create: {
            args: Prisma.paketCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$paketPayload>
          }
          createMany: {
            args: Prisma.paketCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.paketCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$paketPayload>[]
          }
          delete: {
            args: Prisma.paketDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$paketPayload>
          }
          update: {
            args: Prisma.paketUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$paketPayload>
          }
          deleteMany: {
            args: Prisma.paketDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.paketUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.paketUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$paketPayload>[]
          }
          upsert: {
            args: Prisma.paketUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$paketPayload>
          }
          aggregate: {
            args: Prisma.PaketAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePaket>
          }
          groupBy: {
            args: Prisma.paketGroupByArgs<ExtArgs>
            result: $Utils.Optional<PaketGroupByOutputType>[]
          }
          count: {
            args: Prisma.paketCountArgs<ExtArgs>
            result: $Utils.Optional<PaketCountAggregateOutputType> | number
          }
        }
      }
      customer: {
        payload: Prisma.$customerPayload<ExtArgs>
        fields: Prisma.customerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.customerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$customerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.customerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$customerPayload>
          }
          findFirst: {
            args: Prisma.customerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$customerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.customerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$customerPayload>
          }
          findMany: {
            args: Prisma.customerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$customerPayload>[]
          }
          create: {
            args: Prisma.customerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$customerPayload>
          }
          createMany: {
            args: Prisma.customerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.customerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$customerPayload>[]
          }
          delete: {
            args: Prisma.customerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$customerPayload>
          }
          update: {
            args: Prisma.customerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$customerPayload>
          }
          deleteMany: {
            args: Prisma.customerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.customerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.customerUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$customerPayload>[]
          }
          upsert: {
            args: Prisma.customerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$customerPayload>
          }
          aggregate: {
            args: Prisma.CustomerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCustomer>
          }
          groupBy: {
            args: Prisma.customerGroupByArgs<ExtArgs>
            result: $Utils.Optional<CustomerGroupByOutputType>[]
          }
          count: {
            args: Prisma.customerCountArgs<ExtArgs>
            result: $Utils.Optional<CustomerCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    preorder?: preorderOmit
    paket?: paketOmit
    customer?: customerOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type PaketCountOutputType
   */

  export type PaketCountOutputType = {
    preorders: number
  }

  export type PaketCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    preorders?: boolean | PaketCountOutputTypeCountPreordersArgs
  }

  // Custom InputTypes
  /**
   * PaketCountOutputType without action
   */
  export type PaketCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaketCountOutputType
     */
    select?: PaketCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PaketCountOutputType without action
   */
  export type PaketCountOutputTypeCountPreordersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: preorderWhereInput
  }


  /**
   * Models
   */

  /**
   * Model preorder
   */

  export type AggregatePreorder = {
    _count: PreorderCountAggregateOutputType | null
    _avg: PreorderAvgAggregateOutputType | null
    _sum: PreorderSumAggregateOutputType | null
    _min: PreorderMinAggregateOutputType | null
    _max: PreorderMaxAggregateOutputType | null
  }

  export type PreorderAvgAggregateOutputType = {
    id: number | null
    selected_package: number | null
    qty: number | null
  }

  export type PreorderSumAggregateOutputType = {
    id: number | null
    selected_package: number | null
    qty: number | null
  }

  export type PreorderMinAggregateOutputType = {
    id: number | null
    order_date: Date | null
    order_by: string | null
    selected_package: number | null
    qty: number | null
    is_paid: boolean | null
  }

  export type PreorderMaxAggregateOutputType = {
    id: number | null
    order_date: Date | null
    order_by: string | null
    selected_package: number | null
    qty: number | null
    is_paid: boolean | null
  }

  export type PreorderCountAggregateOutputType = {
    id: number
    order_date: number
    order_by: number
    selected_package: number
    qty: number
    is_paid: number
    _all: number
  }


  export type PreorderAvgAggregateInputType = {
    id?: true
    selected_package?: true
    qty?: true
  }

  export type PreorderSumAggregateInputType = {
    id?: true
    selected_package?: true
    qty?: true
  }

  export type PreorderMinAggregateInputType = {
    id?: true
    order_date?: true
    order_by?: true
    selected_package?: true
    qty?: true
    is_paid?: true
  }

  export type PreorderMaxAggregateInputType = {
    id?: true
    order_date?: true
    order_by?: true
    selected_package?: true
    qty?: true
    is_paid?: true
  }

  export type PreorderCountAggregateInputType = {
    id?: true
    order_date?: true
    order_by?: true
    selected_package?: true
    qty?: true
    is_paid?: true
    _all?: true
  }

  export type PreorderAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which preorder to aggregate.
     */
    where?: preorderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of preorders to fetch.
     */
    orderBy?: preorderOrderByWithRelationInput | preorderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: preorderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` preorders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` preorders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned preorders
    **/
    _count?: true | PreorderCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PreorderAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PreorderSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PreorderMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PreorderMaxAggregateInputType
  }

  export type GetPreorderAggregateType<T extends PreorderAggregateArgs> = {
        [P in keyof T & keyof AggregatePreorder]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePreorder[P]>
      : GetScalarType<T[P], AggregatePreorder[P]>
  }




  export type preorderGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: preorderWhereInput
    orderBy?: preorderOrderByWithAggregationInput | preorderOrderByWithAggregationInput[]
    by: PreorderScalarFieldEnum[] | PreorderScalarFieldEnum
    having?: preorderScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PreorderCountAggregateInputType | true
    _avg?: PreorderAvgAggregateInputType
    _sum?: PreorderSumAggregateInputType
    _min?: PreorderMinAggregateInputType
    _max?: PreorderMaxAggregateInputType
  }

  export type PreorderGroupByOutputType = {
    id: number
    order_date: Date
    order_by: string
    selected_package: number
    qty: number
    is_paid: boolean
    _count: PreorderCountAggregateOutputType | null
    _avg: PreorderAvgAggregateOutputType | null
    _sum: PreorderSumAggregateOutputType | null
    _min: PreorderMinAggregateOutputType | null
    _max: PreorderMaxAggregateOutputType | null
  }

  type GetPreorderGroupByPayload<T extends preorderGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PreorderGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PreorderGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PreorderGroupByOutputType[P]>
            : GetScalarType<T[P], PreorderGroupByOutputType[P]>
        }
      >
    >


  export type preorderSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    order_date?: boolean
    order_by?: boolean
    selected_package?: boolean
    qty?: boolean
    is_paid?: boolean
    paket?: boolean | paketDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["preorder"]>

  export type preorderSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    order_date?: boolean
    order_by?: boolean
    selected_package?: boolean
    qty?: boolean
    is_paid?: boolean
    paket?: boolean | paketDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["preorder"]>

  export type preorderSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    order_date?: boolean
    order_by?: boolean
    selected_package?: boolean
    qty?: boolean
    is_paid?: boolean
    paket?: boolean | paketDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["preorder"]>

  export type preorderSelectScalar = {
    id?: boolean
    order_date?: boolean
    order_by?: boolean
    selected_package?: boolean
    qty?: boolean
    is_paid?: boolean
  }

  export type preorderOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "order_date" | "order_by" | "selected_package" | "qty" | "is_paid", ExtArgs["result"]["preorder"]>
  export type preorderInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    paket?: boolean | paketDefaultArgs<ExtArgs>
  }
  export type preorderIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    paket?: boolean | paketDefaultArgs<ExtArgs>
  }
  export type preorderIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    paket?: boolean | paketDefaultArgs<ExtArgs>
  }

  export type $preorderPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "preorder"
    objects: {
      paket: Prisma.$paketPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      order_date: Date
      order_by: string
      selected_package: number
      qty: number
      is_paid: boolean
    }, ExtArgs["result"]["preorder"]>
    composites: {}
  }

  type preorderGetPayload<S extends boolean | null | undefined | preorderDefaultArgs> = $Result.GetResult<Prisma.$preorderPayload, S>

  type preorderCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<preorderFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PreorderCountAggregateInputType | true
    }

  export interface preorderDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['preorder'], meta: { name: 'preorder' } }
    /**
     * Find zero or one Preorder that matches the filter.
     * @param {preorderFindUniqueArgs} args - Arguments to find a Preorder
     * @example
     * // Get one Preorder
     * const preorder = await prisma.preorder.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends preorderFindUniqueArgs>(args: SelectSubset<T, preorderFindUniqueArgs<ExtArgs>>): Prisma__preorderClient<$Result.GetResult<Prisma.$preorderPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Preorder that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {preorderFindUniqueOrThrowArgs} args - Arguments to find a Preorder
     * @example
     * // Get one Preorder
     * const preorder = await prisma.preorder.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends preorderFindUniqueOrThrowArgs>(args: SelectSubset<T, preorderFindUniqueOrThrowArgs<ExtArgs>>): Prisma__preorderClient<$Result.GetResult<Prisma.$preorderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Preorder that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {preorderFindFirstArgs} args - Arguments to find a Preorder
     * @example
     * // Get one Preorder
     * const preorder = await prisma.preorder.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends preorderFindFirstArgs>(args?: SelectSubset<T, preorderFindFirstArgs<ExtArgs>>): Prisma__preorderClient<$Result.GetResult<Prisma.$preorderPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Preorder that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {preorderFindFirstOrThrowArgs} args - Arguments to find a Preorder
     * @example
     * // Get one Preorder
     * const preorder = await prisma.preorder.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends preorderFindFirstOrThrowArgs>(args?: SelectSubset<T, preorderFindFirstOrThrowArgs<ExtArgs>>): Prisma__preorderClient<$Result.GetResult<Prisma.$preorderPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Preorders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {preorderFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Preorders
     * const preorders = await prisma.preorder.findMany()
     * 
     * // Get first 10 Preorders
     * const preorders = await prisma.preorder.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const preorderWithIdOnly = await prisma.preorder.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends preorderFindManyArgs>(args?: SelectSubset<T, preorderFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$preorderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Preorder.
     * @param {preorderCreateArgs} args - Arguments to create a Preorder.
     * @example
     * // Create one Preorder
     * const Preorder = await prisma.preorder.create({
     *   data: {
     *     // ... data to create a Preorder
     *   }
     * })
     * 
     */
    create<T extends preorderCreateArgs>(args: SelectSubset<T, preorderCreateArgs<ExtArgs>>): Prisma__preorderClient<$Result.GetResult<Prisma.$preorderPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Preorders.
     * @param {preorderCreateManyArgs} args - Arguments to create many Preorders.
     * @example
     * // Create many Preorders
     * const preorder = await prisma.preorder.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends preorderCreateManyArgs>(args?: SelectSubset<T, preorderCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Preorders and returns the data saved in the database.
     * @param {preorderCreateManyAndReturnArgs} args - Arguments to create many Preorders.
     * @example
     * // Create many Preorders
     * const preorder = await prisma.preorder.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Preorders and only return the `id`
     * const preorderWithIdOnly = await prisma.preorder.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends preorderCreateManyAndReturnArgs>(args?: SelectSubset<T, preorderCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$preorderPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Preorder.
     * @param {preorderDeleteArgs} args - Arguments to delete one Preorder.
     * @example
     * // Delete one Preorder
     * const Preorder = await prisma.preorder.delete({
     *   where: {
     *     // ... filter to delete one Preorder
     *   }
     * })
     * 
     */
    delete<T extends preorderDeleteArgs>(args: SelectSubset<T, preorderDeleteArgs<ExtArgs>>): Prisma__preorderClient<$Result.GetResult<Prisma.$preorderPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Preorder.
     * @param {preorderUpdateArgs} args - Arguments to update one Preorder.
     * @example
     * // Update one Preorder
     * const preorder = await prisma.preorder.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends preorderUpdateArgs>(args: SelectSubset<T, preorderUpdateArgs<ExtArgs>>): Prisma__preorderClient<$Result.GetResult<Prisma.$preorderPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Preorders.
     * @param {preorderDeleteManyArgs} args - Arguments to filter Preorders to delete.
     * @example
     * // Delete a few Preorders
     * const { count } = await prisma.preorder.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends preorderDeleteManyArgs>(args?: SelectSubset<T, preorderDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Preorders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {preorderUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Preorders
     * const preorder = await prisma.preorder.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends preorderUpdateManyArgs>(args: SelectSubset<T, preorderUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Preorders and returns the data updated in the database.
     * @param {preorderUpdateManyAndReturnArgs} args - Arguments to update many Preorders.
     * @example
     * // Update many Preorders
     * const preorder = await prisma.preorder.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Preorders and only return the `id`
     * const preorderWithIdOnly = await prisma.preorder.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends preorderUpdateManyAndReturnArgs>(args: SelectSubset<T, preorderUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$preorderPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Preorder.
     * @param {preorderUpsertArgs} args - Arguments to update or create a Preorder.
     * @example
     * // Update or create a Preorder
     * const preorder = await prisma.preorder.upsert({
     *   create: {
     *     // ... data to create a Preorder
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Preorder we want to update
     *   }
     * })
     */
    upsert<T extends preorderUpsertArgs>(args: SelectSubset<T, preorderUpsertArgs<ExtArgs>>): Prisma__preorderClient<$Result.GetResult<Prisma.$preorderPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Preorders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {preorderCountArgs} args - Arguments to filter Preorders to count.
     * @example
     * // Count the number of Preorders
     * const count = await prisma.preorder.count({
     *   where: {
     *     // ... the filter for the Preorders we want to count
     *   }
     * })
    **/
    count<T extends preorderCountArgs>(
      args?: Subset<T, preorderCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PreorderCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Preorder.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PreorderAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PreorderAggregateArgs>(args: Subset<T, PreorderAggregateArgs>): Prisma.PrismaPromise<GetPreorderAggregateType<T>>

    /**
     * Group by Preorder.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {preorderGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends preorderGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: preorderGroupByArgs['orderBy'] }
        : { orderBy?: preorderGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, preorderGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPreorderGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the preorder model
   */
  readonly fields: preorderFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for preorder.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__preorderClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    paket<T extends paketDefaultArgs<ExtArgs> = {}>(args?: Subset<T, paketDefaultArgs<ExtArgs>>): Prisma__paketClient<$Result.GetResult<Prisma.$paketPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the preorder model
   */
  interface preorderFieldRefs {
    readonly id: FieldRef<"preorder", 'Int'>
    readonly order_date: FieldRef<"preorder", 'DateTime'>
    readonly order_by: FieldRef<"preorder", 'String'>
    readonly selected_package: FieldRef<"preorder", 'Int'>
    readonly qty: FieldRef<"preorder", 'Int'>
    readonly is_paid: FieldRef<"preorder", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * preorder findUnique
   */
  export type preorderFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the preorder
     */
    select?: preorderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the preorder
     */
    omit?: preorderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: preorderInclude<ExtArgs> | null
    /**
     * Filter, which preorder to fetch.
     */
    where: preorderWhereUniqueInput
  }

  /**
   * preorder findUniqueOrThrow
   */
  export type preorderFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the preorder
     */
    select?: preorderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the preorder
     */
    omit?: preorderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: preorderInclude<ExtArgs> | null
    /**
     * Filter, which preorder to fetch.
     */
    where: preorderWhereUniqueInput
  }

  /**
   * preorder findFirst
   */
  export type preorderFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the preorder
     */
    select?: preorderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the preorder
     */
    omit?: preorderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: preorderInclude<ExtArgs> | null
    /**
     * Filter, which preorder to fetch.
     */
    where?: preorderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of preorders to fetch.
     */
    orderBy?: preorderOrderByWithRelationInput | preorderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for preorders.
     */
    cursor?: preorderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` preorders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` preorders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of preorders.
     */
    distinct?: PreorderScalarFieldEnum | PreorderScalarFieldEnum[]
  }

  /**
   * preorder findFirstOrThrow
   */
  export type preorderFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the preorder
     */
    select?: preorderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the preorder
     */
    omit?: preorderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: preorderInclude<ExtArgs> | null
    /**
     * Filter, which preorder to fetch.
     */
    where?: preorderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of preorders to fetch.
     */
    orderBy?: preorderOrderByWithRelationInput | preorderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for preorders.
     */
    cursor?: preorderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` preorders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` preorders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of preorders.
     */
    distinct?: PreorderScalarFieldEnum | PreorderScalarFieldEnum[]
  }

  /**
   * preorder findMany
   */
  export type preorderFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the preorder
     */
    select?: preorderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the preorder
     */
    omit?: preorderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: preorderInclude<ExtArgs> | null
    /**
     * Filter, which preorders to fetch.
     */
    where?: preorderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of preorders to fetch.
     */
    orderBy?: preorderOrderByWithRelationInput | preorderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing preorders.
     */
    cursor?: preorderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` preorders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` preorders.
     */
    skip?: number
    distinct?: PreorderScalarFieldEnum | PreorderScalarFieldEnum[]
  }

  /**
   * preorder create
   */
  export type preorderCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the preorder
     */
    select?: preorderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the preorder
     */
    omit?: preorderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: preorderInclude<ExtArgs> | null
    /**
     * The data needed to create a preorder.
     */
    data: XOR<preorderCreateInput, preorderUncheckedCreateInput>
  }

  /**
   * preorder createMany
   */
  export type preorderCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many preorders.
     */
    data: preorderCreateManyInput | preorderCreateManyInput[]
  }

  /**
   * preorder createManyAndReturn
   */
  export type preorderCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the preorder
     */
    select?: preorderSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the preorder
     */
    omit?: preorderOmit<ExtArgs> | null
    /**
     * The data used to create many preorders.
     */
    data: preorderCreateManyInput | preorderCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: preorderIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * preorder update
   */
  export type preorderUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the preorder
     */
    select?: preorderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the preorder
     */
    omit?: preorderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: preorderInclude<ExtArgs> | null
    /**
     * The data needed to update a preorder.
     */
    data: XOR<preorderUpdateInput, preorderUncheckedUpdateInput>
    /**
     * Choose, which preorder to update.
     */
    where: preorderWhereUniqueInput
  }

  /**
   * preorder updateMany
   */
  export type preorderUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update preorders.
     */
    data: XOR<preorderUpdateManyMutationInput, preorderUncheckedUpdateManyInput>
    /**
     * Filter which preorders to update
     */
    where?: preorderWhereInput
    /**
     * Limit how many preorders to update.
     */
    limit?: number
  }

  /**
   * preorder updateManyAndReturn
   */
  export type preorderUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the preorder
     */
    select?: preorderSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the preorder
     */
    omit?: preorderOmit<ExtArgs> | null
    /**
     * The data used to update preorders.
     */
    data: XOR<preorderUpdateManyMutationInput, preorderUncheckedUpdateManyInput>
    /**
     * Filter which preorders to update
     */
    where?: preorderWhereInput
    /**
     * Limit how many preorders to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: preorderIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * preorder upsert
   */
  export type preorderUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the preorder
     */
    select?: preorderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the preorder
     */
    omit?: preorderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: preorderInclude<ExtArgs> | null
    /**
     * The filter to search for the preorder to update in case it exists.
     */
    where: preorderWhereUniqueInput
    /**
     * In case the preorder found by the `where` argument doesn't exist, create a new preorder with this data.
     */
    create: XOR<preorderCreateInput, preorderUncheckedCreateInput>
    /**
     * In case the preorder was found with the provided `where` argument, update it with this data.
     */
    update: XOR<preorderUpdateInput, preorderUncheckedUpdateInput>
  }

  /**
   * preorder delete
   */
  export type preorderDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the preorder
     */
    select?: preorderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the preorder
     */
    omit?: preorderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: preorderInclude<ExtArgs> | null
    /**
     * Filter which preorder to delete.
     */
    where: preorderWhereUniqueInput
  }

  /**
   * preorder deleteMany
   */
  export type preorderDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which preorders to delete
     */
    where?: preorderWhereInput
    /**
     * Limit how many preorders to delete.
     */
    limit?: number
  }

  /**
   * preorder without action
   */
  export type preorderDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the preorder
     */
    select?: preorderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the preorder
     */
    omit?: preorderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: preorderInclude<ExtArgs> | null
  }


  /**
   * Model paket
   */

  export type AggregatePaket = {
    _count: PaketCountAggregateOutputType | null
    _avg: PaketAvgAggregateOutputType | null
    _sum: PaketSumAggregateOutputType | null
    _min: PaketMinAggregateOutputType | null
    _max: PaketMaxAggregateOutputType | null
  }

  export type PaketAvgAggregateOutputType = {
    id: number | null
  }

  export type PaketSumAggregateOutputType = {
    id: number | null
  }

  export type PaketMinAggregateOutputType = {
    id: number | null
    kode: string | null
    nama: string | null
    deskripsi: string | null
  }

  export type PaketMaxAggregateOutputType = {
    id: number | null
    kode: string | null
    nama: string | null
    deskripsi: string | null
  }

  export type PaketCountAggregateOutputType = {
    id: number
    kode: number
    nama: number
    deskripsi: number
    _all: number
  }


  export type PaketAvgAggregateInputType = {
    id?: true
  }

  export type PaketSumAggregateInputType = {
    id?: true
  }

  export type PaketMinAggregateInputType = {
    id?: true
    kode?: true
    nama?: true
    deskripsi?: true
  }

  export type PaketMaxAggregateInputType = {
    id?: true
    kode?: true
    nama?: true
    deskripsi?: true
  }

  export type PaketCountAggregateInputType = {
    id?: true
    kode?: true
    nama?: true
    deskripsi?: true
    _all?: true
  }

  export type PaketAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which paket to aggregate.
     */
    where?: paketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pakets to fetch.
     */
    orderBy?: paketOrderByWithRelationInput | paketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: paketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pakets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pakets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned pakets
    **/
    _count?: true | PaketCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PaketAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PaketSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PaketMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PaketMaxAggregateInputType
  }

  export type GetPaketAggregateType<T extends PaketAggregateArgs> = {
        [P in keyof T & keyof AggregatePaket]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePaket[P]>
      : GetScalarType<T[P], AggregatePaket[P]>
  }




  export type paketGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: paketWhereInput
    orderBy?: paketOrderByWithAggregationInput | paketOrderByWithAggregationInput[]
    by: PaketScalarFieldEnum[] | PaketScalarFieldEnum
    having?: paketScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PaketCountAggregateInputType | true
    _avg?: PaketAvgAggregateInputType
    _sum?: PaketSumAggregateInputType
    _min?: PaketMinAggregateInputType
    _max?: PaketMaxAggregateInputType
  }

  export type PaketGroupByOutputType = {
    id: number
    kode: string
    nama: string
    deskripsi: string
    _count: PaketCountAggregateOutputType | null
    _avg: PaketAvgAggregateOutputType | null
    _sum: PaketSumAggregateOutputType | null
    _min: PaketMinAggregateOutputType | null
    _max: PaketMaxAggregateOutputType | null
  }

  type GetPaketGroupByPayload<T extends paketGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PaketGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PaketGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PaketGroupByOutputType[P]>
            : GetScalarType<T[P], PaketGroupByOutputType[P]>
        }
      >
    >


  export type paketSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    kode?: boolean
    nama?: boolean
    deskripsi?: boolean
    preorders?: boolean | paket$preordersArgs<ExtArgs>
    _count?: boolean | PaketCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["paket"]>

  export type paketSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    kode?: boolean
    nama?: boolean
    deskripsi?: boolean
  }, ExtArgs["result"]["paket"]>

  export type paketSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    kode?: boolean
    nama?: boolean
    deskripsi?: boolean
  }, ExtArgs["result"]["paket"]>

  export type paketSelectScalar = {
    id?: boolean
    kode?: boolean
    nama?: boolean
    deskripsi?: boolean
  }

  export type paketOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "kode" | "nama" | "deskripsi", ExtArgs["result"]["paket"]>
  export type paketInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    preorders?: boolean | paket$preordersArgs<ExtArgs>
    _count?: boolean | PaketCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type paketIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type paketIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $paketPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "paket"
    objects: {
      preorders: Prisma.$preorderPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      kode: string
      nama: string
      deskripsi: string
    }, ExtArgs["result"]["paket"]>
    composites: {}
  }

  type paketGetPayload<S extends boolean | null | undefined | paketDefaultArgs> = $Result.GetResult<Prisma.$paketPayload, S>

  type paketCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<paketFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PaketCountAggregateInputType | true
    }

  export interface paketDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['paket'], meta: { name: 'paket' } }
    /**
     * Find zero or one Paket that matches the filter.
     * @param {paketFindUniqueArgs} args - Arguments to find a Paket
     * @example
     * // Get one Paket
     * const paket = await prisma.paket.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends paketFindUniqueArgs>(args: SelectSubset<T, paketFindUniqueArgs<ExtArgs>>): Prisma__paketClient<$Result.GetResult<Prisma.$paketPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Paket that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {paketFindUniqueOrThrowArgs} args - Arguments to find a Paket
     * @example
     * // Get one Paket
     * const paket = await prisma.paket.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends paketFindUniqueOrThrowArgs>(args: SelectSubset<T, paketFindUniqueOrThrowArgs<ExtArgs>>): Prisma__paketClient<$Result.GetResult<Prisma.$paketPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Paket that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {paketFindFirstArgs} args - Arguments to find a Paket
     * @example
     * // Get one Paket
     * const paket = await prisma.paket.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends paketFindFirstArgs>(args?: SelectSubset<T, paketFindFirstArgs<ExtArgs>>): Prisma__paketClient<$Result.GetResult<Prisma.$paketPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Paket that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {paketFindFirstOrThrowArgs} args - Arguments to find a Paket
     * @example
     * // Get one Paket
     * const paket = await prisma.paket.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends paketFindFirstOrThrowArgs>(args?: SelectSubset<T, paketFindFirstOrThrowArgs<ExtArgs>>): Prisma__paketClient<$Result.GetResult<Prisma.$paketPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Pakets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {paketFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Pakets
     * const pakets = await prisma.paket.findMany()
     * 
     * // Get first 10 Pakets
     * const pakets = await prisma.paket.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const paketWithIdOnly = await prisma.paket.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends paketFindManyArgs>(args?: SelectSubset<T, paketFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$paketPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Paket.
     * @param {paketCreateArgs} args - Arguments to create a Paket.
     * @example
     * // Create one Paket
     * const Paket = await prisma.paket.create({
     *   data: {
     *     // ... data to create a Paket
     *   }
     * })
     * 
     */
    create<T extends paketCreateArgs>(args: SelectSubset<T, paketCreateArgs<ExtArgs>>): Prisma__paketClient<$Result.GetResult<Prisma.$paketPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Pakets.
     * @param {paketCreateManyArgs} args - Arguments to create many Pakets.
     * @example
     * // Create many Pakets
     * const paket = await prisma.paket.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends paketCreateManyArgs>(args?: SelectSubset<T, paketCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Pakets and returns the data saved in the database.
     * @param {paketCreateManyAndReturnArgs} args - Arguments to create many Pakets.
     * @example
     * // Create many Pakets
     * const paket = await prisma.paket.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Pakets and only return the `id`
     * const paketWithIdOnly = await prisma.paket.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends paketCreateManyAndReturnArgs>(args?: SelectSubset<T, paketCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$paketPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Paket.
     * @param {paketDeleteArgs} args - Arguments to delete one Paket.
     * @example
     * // Delete one Paket
     * const Paket = await prisma.paket.delete({
     *   where: {
     *     // ... filter to delete one Paket
     *   }
     * })
     * 
     */
    delete<T extends paketDeleteArgs>(args: SelectSubset<T, paketDeleteArgs<ExtArgs>>): Prisma__paketClient<$Result.GetResult<Prisma.$paketPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Paket.
     * @param {paketUpdateArgs} args - Arguments to update one Paket.
     * @example
     * // Update one Paket
     * const paket = await prisma.paket.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends paketUpdateArgs>(args: SelectSubset<T, paketUpdateArgs<ExtArgs>>): Prisma__paketClient<$Result.GetResult<Prisma.$paketPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Pakets.
     * @param {paketDeleteManyArgs} args - Arguments to filter Pakets to delete.
     * @example
     * // Delete a few Pakets
     * const { count } = await prisma.paket.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends paketDeleteManyArgs>(args?: SelectSubset<T, paketDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pakets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {paketUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Pakets
     * const paket = await prisma.paket.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends paketUpdateManyArgs>(args: SelectSubset<T, paketUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pakets and returns the data updated in the database.
     * @param {paketUpdateManyAndReturnArgs} args - Arguments to update many Pakets.
     * @example
     * // Update many Pakets
     * const paket = await prisma.paket.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Pakets and only return the `id`
     * const paketWithIdOnly = await prisma.paket.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends paketUpdateManyAndReturnArgs>(args: SelectSubset<T, paketUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$paketPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Paket.
     * @param {paketUpsertArgs} args - Arguments to update or create a Paket.
     * @example
     * // Update or create a Paket
     * const paket = await prisma.paket.upsert({
     *   create: {
     *     // ... data to create a Paket
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Paket we want to update
     *   }
     * })
     */
    upsert<T extends paketUpsertArgs>(args: SelectSubset<T, paketUpsertArgs<ExtArgs>>): Prisma__paketClient<$Result.GetResult<Prisma.$paketPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Pakets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {paketCountArgs} args - Arguments to filter Pakets to count.
     * @example
     * // Count the number of Pakets
     * const count = await prisma.paket.count({
     *   where: {
     *     // ... the filter for the Pakets we want to count
     *   }
     * })
    **/
    count<T extends paketCountArgs>(
      args?: Subset<T, paketCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PaketCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Paket.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaketAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PaketAggregateArgs>(args: Subset<T, PaketAggregateArgs>): Prisma.PrismaPromise<GetPaketAggregateType<T>>

    /**
     * Group by Paket.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {paketGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends paketGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: paketGroupByArgs['orderBy'] }
        : { orderBy?: paketGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, paketGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPaketGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the paket model
   */
  readonly fields: paketFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for paket.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__paketClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    preorders<T extends paket$preordersArgs<ExtArgs> = {}>(args?: Subset<T, paket$preordersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$preorderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the paket model
   */
  interface paketFieldRefs {
    readonly id: FieldRef<"paket", 'Int'>
    readonly kode: FieldRef<"paket", 'String'>
    readonly nama: FieldRef<"paket", 'String'>
    readonly deskripsi: FieldRef<"paket", 'String'>
  }
    

  // Custom InputTypes
  /**
   * paket findUnique
   */
  export type paketFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the paket
     */
    select?: paketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the paket
     */
    omit?: paketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paketInclude<ExtArgs> | null
    /**
     * Filter, which paket to fetch.
     */
    where: paketWhereUniqueInput
  }

  /**
   * paket findUniqueOrThrow
   */
  export type paketFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the paket
     */
    select?: paketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the paket
     */
    omit?: paketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paketInclude<ExtArgs> | null
    /**
     * Filter, which paket to fetch.
     */
    where: paketWhereUniqueInput
  }

  /**
   * paket findFirst
   */
  export type paketFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the paket
     */
    select?: paketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the paket
     */
    omit?: paketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paketInclude<ExtArgs> | null
    /**
     * Filter, which paket to fetch.
     */
    where?: paketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pakets to fetch.
     */
    orderBy?: paketOrderByWithRelationInput | paketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for pakets.
     */
    cursor?: paketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pakets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pakets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of pakets.
     */
    distinct?: PaketScalarFieldEnum | PaketScalarFieldEnum[]
  }

  /**
   * paket findFirstOrThrow
   */
  export type paketFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the paket
     */
    select?: paketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the paket
     */
    omit?: paketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paketInclude<ExtArgs> | null
    /**
     * Filter, which paket to fetch.
     */
    where?: paketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pakets to fetch.
     */
    orderBy?: paketOrderByWithRelationInput | paketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for pakets.
     */
    cursor?: paketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pakets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pakets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of pakets.
     */
    distinct?: PaketScalarFieldEnum | PaketScalarFieldEnum[]
  }

  /**
   * paket findMany
   */
  export type paketFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the paket
     */
    select?: paketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the paket
     */
    omit?: paketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paketInclude<ExtArgs> | null
    /**
     * Filter, which pakets to fetch.
     */
    where?: paketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pakets to fetch.
     */
    orderBy?: paketOrderByWithRelationInput | paketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing pakets.
     */
    cursor?: paketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pakets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pakets.
     */
    skip?: number
    distinct?: PaketScalarFieldEnum | PaketScalarFieldEnum[]
  }

  /**
   * paket create
   */
  export type paketCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the paket
     */
    select?: paketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the paket
     */
    omit?: paketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paketInclude<ExtArgs> | null
    /**
     * The data needed to create a paket.
     */
    data: XOR<paketCreateInput, paketUncheckedCreateInput>
  }

  /**
   * paket createMany
   */
  export type paketCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many pakets.
     */
    data: paketCreateManyInput | paketCreateManyInput[]
  }

  /**
   * paket createManyAndReturn
   */
  export type paketCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the paket
     */
    select?: paketSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the paket
     */
    omit?: paketOmit<ExtArgs> | null
    /**
     * The data used to create many pakets.
     */
    data: paketCreateManyInput | paketCreateManyInput[]
  }

  /**
   * paket update
   */
  export type paketUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the paket
     */
    select?: paketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the paket
     */
    omit?: paketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paketInclude<ExtArgs> | null
    /**
     * The data needed to update a paket.
     */
    data: XOR<paketUpdateInput, paketUncheckedUpdateInput>
    /**
     * Choose, which paket to update.
     */
    where: paketWhereUniqueInput
  }

  /**
   * paket updateMany
   */
  export type paketUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update pakets.
     */
    data: XOR<paketUpdateManyMutationInput, paketUncheckedUpdateManyInput>
    /**
     * Filter which pakets to update
     */
    where?: paketWhereInput
    /**
     * Limit how many pakets to update.
     */
    limit?: number
  }

  /**
   * paket updateManyAndReturn
   */
  export type paketUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the paket
     */
    select?: paketSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the paket
     */
    omit?: paketOmit<ExtArgs> | null
    /**
     * The data used to update pakets.
     */
    data: XOR<paketUpdateManyMutationInput, paketUncheckedUpdateManyInput>
    /**
     * Filter which pakets to update
     */
    where?: paketWhereInput
    /**
     * Limit how many pakets to update.
     */
    limit?: number
  }

  /**
   * paket upsert
   */
  export type paketUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the paket
     */
    select?: paketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the paket
     */
    omit?: paketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paketInclude<ExtArgs> | null
    /**
     * The filter to search for the paket to update in case it exists.
     */
    where: paketWhereUniqueInput
    /**
     * In case the paket found by the `where` argument doesn't exist, create a new paket with this data.
     */
    create: XOR<paketCreateInput, paketUncheckedCreateInput>
    /**
     * In case the paket was found with the provided `where` argument, update it with this data.
     */
    update: XOR<paketUpdateInput, paketUncheckedUpdateInput>
  }

  /**
   * paket delete
   */
  export type paketDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the paket
     */
    select?: paketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the paket
     */
    omit?: paketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paketInclude<ExtArgs> | null
    /**
     * Filter which paket to delete.
     */
    where: paketWhereUniqueInput
  }

  /**
   * paket deleteMany
   */
  export type paketDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which pakets to delete
     */
    where?: paketWhereInput
    /**
     * Limit how many pakets to delete.
     */
    limit?: number
  }

  /**
   * paket.preorders
   */
  export type paket$preordersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the preorder
     */
    select?: preorderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the preorder
     */
    omit?: preorderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: preorderInclude<ExtArgs> | null
    where?: preorderWhereInput
    orderBy?: preorderOrderByWithRelationInput | preorderOrderByWithRelationInput[]
    cursor?: preorderWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PreorderScalarFieldEnum | PreorderScalarFieldEnum[]
  }

  /**
   * paket without action
   */
  export type paketDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the paket
     */
    select?: paketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the paket
     */
    omit?: paketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paketInclude<ExtArgs> | null
  }


  /**
   * Model customer
   */

  export type AggregateCustomer = {
    _count: CustomerCountAggregateOutputType | null
    _avg: CustomerAvgAggregateOutputType | null
    _sum: CustomerSumAggregateOutputType | null
    _min: CustomerMinAggregateOutputType | null
    _max: CustomerMaxAggregateOutputType | null
  }

  export type CustomerAvgAggregateOutputType = {
    id: number | null
  }

  export type CustomerSumAggregateOutputType = {
    id: number | null
  }

  export type CustomerMinAggregateOutputType = {
    id: number | null
    kode: string | null
    nama: string | null
    deskripsi: string | null
    createAt: Date | null
  }

  export type CustomerMaxAggregateOutputType = {
    id: number | null
    kode: string | null
    nama: string | null
    deskripsi: string | null
    createAt: Date | null
  }

  export type CustomerCountAggregateOutputType = {
    id: number
    kode: number
    nama: number
    deskripsi: number
    createAt: number
    _all: number
  }


  export type CustomerAvgAggregateInputType = {
    id?: true
  }

  export type CustomerSumAggregateInputType = {
    id?: true
  }

  export type CustomerMinAggregateInputType = {
    id?: true
    kode?: true
    nama?: true
    deskripsi?: true
    createAt?: true
  }

  export type CustomerMaxAggregateInputType = {
    id?: true
    kode?: true
    nama?: true
    deskripsi?: true
    createAt?: true
  }

  export type CustomerCountAggregateInputType = {
    id?: true
    kode?: true
    nama?: true
    deskripsi?: true
    createAt?: true
    _all?: true
  }

  export type CustomerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which customer to aggregate.
     */
    where?: customerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of customers to fetch.
     */
    orderBy?: customerOrderByWithRelationInput | customerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: customerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned customers
    **/
    _count?: true | CustomerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CustomerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CustomerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CustomerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CustomerMaxAggregateInputType
  }

  export type GetCustomerAggregateType<T extends CustomerAggregateArgs> = {
        [P in keyof T & keyof AggregateCustomer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCustomer[P]>
      : GetScalarType<T[P], AggregateCustomer[P]>
  }




  export type customerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: customerWhereInput
    orderBy?: customerOrderByWithAggregationInput | customerOrderByWithAggregationInput[]
    by: CustomerScalarFieldEnum[] | CustomerScalarFieldEnum
    having?: customerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CustomerCountAggregateInputType | true
    _avg?: CustomerAvgAggregateInputType
    _sum?: CustomerSumAggregateInputType
    _min?: CustomerMinAggregateInputType
    _max?: CustomerMaxAggregateInputType
  }

  export type CustomerGroupByOutputType = {
    id: number
    kode: string
    nama: string
    deskripsi: string
    createAt: Date
    _count: CustomerCountAggregateOutputType | null
    _avg: CustomerAvgAggregateOutputType | null
    _sum: CustomerSumAggregateOutputType | null
    _min: CustomerMinAggregateOutputType | null
    _max: CustomerMaxAggregateOutputType | null
  }

  type GetCustomerGroupByPayload<T extends customerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CustomerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CustomerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CustomerGroupByOutputType[P]>
            : GetScalarType<T[P], CustomerGroupByOutputType[P]>
        }
      >
    >


  export type customerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    kode?: boolean
    nama?: boolean
    deskripsi?: boolean
    createAt?: boolean
  }, ExtArgs["result"]["customer"]>

  export type customerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    kode?: boolean
    nama?: boolean
    deskripsi?: boolean
    createAt?: boolean
  }, ExtArgs["result"]["customer"]>

  export type customerSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    kode?: boolean
    nama?: boolean
    deskripsi?: boolean
    createAt?: boolean
  }, ExtArgs["result"]["customer"]>

  export type customerSelectScalar = {
    id?: boolean
    kode?: boolean
    nama?: boolean
    deskripsi?: boolean
    createAt?: boolean
  }

  export type customerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "kode" | "nama" | "deskripsi" | "createAt", ExtArgs["result"]["customer"]>

  export type $customerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "customer"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      kode: string
      nama: string
      deskripsi: string
      createAt: Date
    }, ExtArgs["result"]["customer"]>
    composites: {}
  }

  type customerGetPayload<S extends boolean | null | undefined | customerDefaultArgs> = $Result.GetResult<Prisma.$customerPayload, S>

  type customerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<customerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CustomerCountAggregateInputType | true
    }

  export interface customerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['customer'], meta: { name: 'customer' } }
    /**
     * Find zero or one Customer that matches the filter.
     * @param {customerFindUniqueArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends customerFindUniqueArgs>(args: SelectSubset<T, customerFindUniqueArgs<ExtArgs>>): Prisma__customerClient<$Result.GetResult<Prisma.$customerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Customer that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {customerFindUniqueOrThrowArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends customerFindUniqueOrThrowArgs>(args: SelectSubset<T, customerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__customerClient<$Result.GetResult<Prisma.$customerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Customer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {customerFindFirstArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends customerFindFirstArgs>(args?: SelectSubset<T, customerFindFirstArgs<ExtArgs>>): Prisma__customerClient<$Result.GetResult<Prisma.$customerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Customer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {customerFindFirstOrThrowArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends customerFindFirstOrThrowArgs>(args?: SelectSubset<T, customerFindFirstOrThrowArgs<ExtArgs>>): Prisma__customerClient<$Result.GetResult<Prisma.$customerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Customers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {customerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Customers
     * const customers = await prisma.customer.findMany()
     * 
     * // Get first 10 Customers
     * const customers = await prisma.customer.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const customerWithIdOnly = await prisma.customer.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends customerFindManyArgs>(args?: SelectSubset<T, customerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$customerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Customer.
     * @param {customerCreateArgs} args - Arguments to create a Customer.
     * @example
     * // Create one Customer
     * const Customer = await prisma.customer.create({
     *   data: {
     *     // ... data to create a Customer
     *   }
     * })
     * 
     */
    create<T extends customerCreateArgs>(args: SelectSubset<T, customerCreateArgs<ExtArgs>>): Prisma__customerClient<$Result.GetResult<Prisma.$customerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Customers.
     * @param {customerCreateManyArgs} args - Arguments to create many Customers.
     * @example
     * // Create many Customers
     * const customer = await prisma.customer.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends customerCreateManyArgs>(args?: SelectSubset<T, customerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Customers and returns the data saved in the database.
     * @param {customerCreateManyAndReturnArgs} args - Arguments to create many Customers.
     * @example
     * // Create many Customers
     * const customer = await prisma.customer.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Customers and only return the `id`
     * const customerWithIdOnly = await prisma.customer.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends customerCreateManyAndReturnArgs>(args?: SelectSubset<T, customerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$customerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Customer.
     * @param {customerDeleteArgs} args - Arguments to delete one Customer.
     * @example
     * // Delete one Customer
     * const Customer = await prisma.customer.delete({
     *   where: {
     *     // ... filter to delete one Customer
     *   }
     * })
     * 
     */
    delete<T extends customerDeleteArgs>(args: SelectSubset<T, customerDeleteArgs<ExtArgs>>): Prisma__customerClient<$Result.GetResult<Prisma.$customerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Customer.
     * @param {customerUpdateArgs} args - Arguments to update one Customer.
     * @example
     * // Update one Customer
     * const customer = await prisma.customer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends customerUpdateArgs>(args: SelectSubset<T, customerUpdateArgs<ExtArgs>>): Prisma__customerClient<$Result.GetResult<Prisma.$customerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Customers.
     * @param {customerDeleteManyArgs} args - Arguments to filter Customers to delete.
     * @example
     * // Delete a few Customers
     * const { count } = await prisma.customer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends customerDeleteManyArgs>(args?: SelectSubset<T, customerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Customers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {customerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Customers
     * const customer = await prisma.customer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends customerUpdateManyArgs>(args: SelectSubset<T, customerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Customers and returns the data updated in the database.
     * @param {customerUpdateManyAndReturnArgs} args - Arguments to update many Customers.
     * @example
     * // Update many Customers
     * const customer = await prisma.customer.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Customers and only return the `id`
     * const customerWithIdOnly = await prisma.customer.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends customerUpdateManyAndReturnArgs>(args: SelectSubset<T, customerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$customerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Customer.
     * @param {customerUpsertArgs} args - Arguments to update or create a Customer.
     * @example
     * // Update or create a Customer
     * const customer = await prisma.customer.upsert({
     *   create: {
     *     // ... data to create a Customer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Customer we want to update
     *   }
     * })
     */
    upsert<T extends customerUpsertArgs>(args: SelectSubset<T, customerUpsertArgs<ExtArgs>>): Prisma__customerClient<$Result.GetResult<Prisma.$customerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Customers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {customerCountArgs} args - Arguments to filter Customers to count.
     * @example
     * // Count the number of Customers
     * const count = await prisma.customer.count({
     *   where: {
     *     // ... the filter for the Customers we want to count
     *   }
     * })
    **/
    count<T extends customerCountArgs>(
      args?: Subset<T, customerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CustomerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Customer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CustomerAggregateArgs>(args: Subset<T, CustomerAggregateArgs>): Prisma.PrismaPromise<GetCustomerAggregateType<T>>

    /**
     * Group by Customer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {customerGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends customerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: customerGroupByArgs['orderBy'] }
        : { orderBy?: customerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, customerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCustomerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the customer model
   */
  readonly fields: customerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for customer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__customerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the customer model
   */
  interface customerFieldRefs {
    readonly id: FieldRef<"customer", 'Int'>
    readonly kode: FieldRef<"customer", 'String'>
    readonly nama: FieldRef<"customer", 'String'>
    readonly deskripsi: FieldRef<"customer", 'String'>
    readonly createAt: FieldRef<"customer", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * customer findUnique
   */
  export type customerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customer
     */
    select?: customerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the customer
     */
    omit?: customerOmit<ExtArgs> | null
    /**
     * Filter, which customer to fetch.
     */
    where: customerWhereUniqueInput
  }

  /**
   * customer findUniqueOrThrow
   */
  export type customerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customer
     */
    select?: customerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the customer
     */
    omit?: customerOmit<ExtArgs> | null
    /**
     * Filter, which customer to fetch.
     */
    where: customerWhereUniqueInput
  }

  /**
   * customer findFirst
   */
  export type customerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customer
     */
    select?: customerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the customer
     */
    omit?: customerOmit<ExtArgs> | null
    /**
     * Filter, which customer to fetch.
     */
    where?: customerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of customers to fetch.
     */
    orderBy?: customerOrderByWithRelationInput | customerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for customers.
     */
    cursor?: customerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of customers.
     */
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[]
  }

  /**
   * customer findFirstOrThrow
   */
  export type customerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customer
     */
    select?: customerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the customer
     */
    omit?: customerOmit<ExtArgs> | null
    /**
     * Filter, which customer to fetch.
     */
    where?: customerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of customers to fetch.
     */
    orderBy?: customerOrderByWithRelationInput | customerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for customers.
     */
    cursor?: customerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of customers.
     */
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[]
  }

  /**
   * customer findMany
   */
  export type customerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customer
     */
    select?: customerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the customer
     */
    omit?: customerOmit<ExtArgs> | null
    /**
     * Filter, which customers to fetch.
     */
    where?: customerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of customers to fetch.
     */
    orderBy?: customerOrderByWithRelationInput | customerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing customers.
     */
    cursor?: customerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` customers.
     */
    skip?: number
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[]
  }

  /**
   * customer create
   */
  export type customerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customer
     */
    select?: customerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the customer
     */
    omit?: customerOmit<ExtArgs> | null
    /**
     * The data needed to create a customer.
     */
    data: XOR<customerCreateInput, customerUncheckedCreateInput>
  }

  /**
   * customer createMany
   */
  export type customerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many customers.
     */
    data: customerCreateManyInput | customerCreateManyInput[]
  }

  /**
   * customer createManyAndReturn
   */
  export type customerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customer
     */
    select?: customerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the customer
     */
    omit?: customerOmit<ExtArgs> | null
    /**
     * The data used to create many customers.
     */
    data: customerCreateManyInput | customerCreateManyInput[]
  }

  /**
   * customer update
   */
  export type customerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customer
     */
    select?: customerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the customer
     */
    omit?: customerOmit<ExtArgs> | null
    /**
     * The data needed to update a customer.
     */
    data: XOR<customerUpdateInput, customerUncheckedUpdateInput>
    /**
     * Choose, which customer to update.
     */
    where: customerWhereUniqueInput
  }

  /**
   * customer updateMany
   */
  export type customerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update customers.
     */
    data: XOR<customerUpdateManyMutationInput, customerUncheckedUpdateManyInput>
    /**
     * Filter which customers to update
     */
    where?: customerWhereInput
    /**
     * Limit how many customers to update.
     */
    limit?: number
  }

  /**
   * customer updateManyAndReturn
   */
  export type customerUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customer
     */
    select?: customerSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the customer
     */
    omit?: customerOmit<ExtArgs> | null
    /**
     * The data used to update customers.
     */
    data: XOR<customerUpdateManyMutationInput, customerUncheckedUpdateManyInput>
    /**
     * Filter which customers to update
     */
    where?: customerWhereInput
    /**
     * Limit how many customers to update.
     */
    limit?: number
  }

  /**
   * customer upsert
   */
  export type customerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customer
     */
    select?: customerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the customer
     */
    omit?: customerOmit<ExtArgs> | null
    /**
     * The filter to search for the customer to update in case it exists.
     */
    where: customerWhereUniqueInput
    /**
     * In case the customer found by the `where` argument doesn't exist, create a new customer with this data.
     */
    create: XOR<customerCreateInput, customerUncheckedCreateInput>
    /**
     * In case the customer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<customerUpdateInput, customerUncheckedUpdateInput>
  }

  /**
   * customer delete
   */
  export type customerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customer
     */
    select?: customerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the customer
     */
    omit?: customerOmit<ExtArgs> | null
    /**
     * Filter which customer to delete.
     */
    where: customerWhereUniqueInput
  }

  /**
   * customer deleteMany
   */
  export type customerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which customers to delete
     */
    where?: customerWhereInput
    /**
     * Limit how many customers to delete.
     */
    limit?: number
  }

  /**
   * customer without action
   */
  export type customerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customer
     */
    select?: customerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the customer
     */
    omit?: customerOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const PreorderScalarFieldEnum: {
    id: 'id',
    order_date: 'order_date',
    order_by: 'order_by',
    selected_package: 'selected_package',
    qty: 'qty',
    is_paid: 'is_paid'
  };

  export type PreorderScalarFieldEnum = (typeof PreorderScalarFieldEnum)[keyof typeof PreorderScalarFieldEnum]


  export const PaketScalarFieldEnum: {
    id: 'id',
    kode: 'kode',
    nama: 'nama',
    deskripsi: 'deskripsi'
  };

  export type PaketScalarFieldEnum = (typeof PaketScalarFieldEnum)[keyof typeof PaketScalarFieldEnum]


  export const CustomerScalarFieldEnum: {
    id: 'id',
    kode: 'kode',
    nama: 'nama',
    deskripsi: 'deskripsi',
    createAt: 'createAt'
  };

  export type CustomerScalarFieldEnum = (typeof CustomerScalarFieldEnum)[keyof typeof CustomerScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type preorderWhereInput = {
    AND?: preorderWhereInput | preorderWhereInput[]
    OR?: preorderWhereInput[]
    NOT?: preorderWhereInput | preorderWhereInput[]
    id?: IntFilter<"preorder"> | number
    order_date?: DateTimeFilter<"preorder"> | Date | string
    order_by?: StringFilter<"preorder"> | string
    selected_package?: IntFilter<"preorder"> | number
    qty?: IntFilter<"preorder"> | number
    is_paid?: BoolFilter<"preorder"> | boolean
    paket?: XOR<PaketScalarRelationFilter, paketWhereInput>
  }

  export type preorderOrderByWithRelationInput = {
    id?: SortOrder
    order_date?: SortOrder
    order_by?: SortOrder
    selected_package?: SortOrder
    qty?: SortOrder
    is_paid?: SortOrder
    paket?: paketOrderByWithRelationInput
  }

  export type preorderWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: preorderWhereInput | preorderWhereInput[]
    OR?: preorderWhereInput[]
    NOT?: preorderWhereInput | preorderWhereInput[]
    order_date?: DateTimeFilter<"preorder"> | Date | string
    order_by?: StringFilter<"preorder"> | string
    selected_package?: IntFilter<"preorder"> | number
    qty?: IntFilter<"preorder"> | number
    is_paid?: BoolFilter<"preorder"> | boolean
    paket?: XOR<PaketScalarRelationFilter, paketWhereInput>
  }, "id">

  export type preorderOrderByWithAggregationInput = {
    id?: SortOrder
    order_date?: SortOrder
    order_by?: SortOrder
    selected_package?: SortOrder
    qty?: SortOrder
    is_paid?: SortOrder
    _count?: preorderCountOrderByAggregateInput
    _avg?: preorderAvgOrderByAggregateInput
    _max?: preorderMaxOrderByAggregateInput
    _min?: preorderMinOrderByAggregateInput
    _sum?: preorderSumOrderByAggregateInput
  }

  export type preorderScalarWhereWithAggregatesInput = {
    AND?: preorderScalarWhereWithAggregatesInput | preorderScalarWhereWithAggregatesInput[]
    OR?: preorderScalarWhereWithAggregatesInput[]
    NOT?: preorderScalarWhereWithAggregatesInput | preorderScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"preorder"> | number
    order_date?: DateTimeWithAggregatesFilter<"preorder"> | Date | string
    order_by?: StringWithAggregatesFilter<"preorder"> | string
    selected_package?: IntWithAggregatesFilter<"preorder"> | number
    qty?: IntWithAggregatesFilter<"preorder"> | number
    is_paid?: BoolWithAggregatesFilter<"preorder"> | boolean
  }

  export type paketWhereInput = {
    AND?: paketWhereInput | paketWhereInput[]
    OR?: paketWhereInput[]
    NOT?: paketWhereInput | paketWhereInput[]
    id?: IntFilter<"paket"> | number
    kode?: StringFilter<"paket"> | string
    nama?: StringFilter<"paket"> | string
    deskripsi?: StringFilter<"paket"> | string
    preorders?: PreorderListRelationFilter
  }

  export type paketOrderByWithRelationInput = {
    id?: SortOrder
    kode?: SortOrder
    nama?: SortOrder
    deskripsi?: SortOrder
    preorders?: preorderOrderByRelationAggregateInput
  }

  export type paketWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    kode?: string
    AND?: paketWhereInput | paketWhereInput[]
    OR?: paketWhereInput[]
    NOT?: paketWhereInput | paketWhereInput[]
    nama?: StringFilter<"paket"> | string
    deskripsi?: StringFilter<"paket"> | string
    preorders?: PreorderListRelationFilter
  }, "id" | "kode">

  export type paketOrderByWithAggregationInput = {
    id?: SortOrder
    kode?: SortOrder
    nama?: SortOrder
    deskripsi?: SortOrder
    _count?: paketCountOrderByAggregateInput
    _avg?: paketAvgOrderByAggregateInput
    _max?: paketMaxOrderByAggregateInput
    _min?: paketMinOrderByAggregateInput
    _sum?: paketSumOrderByAggregateInput
  }

  export type paketScalarWhereWithAggregatesInput = {
    AND?: paketScalarWhereWithAggregatesInput | paketScalarWhereWithAggregatesInput[]
    OR?: paketScalarWhereWithAggregatesInput[]
    NOT?: paketScalarWhereWithAggregatesInput | paketScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"paket"> | number
    kode?: StringWithAggregatesFilter<"paket"> | string
    nama?: StringWithAggregatesFilter<"paket"> | string
    deskripsi?: StringWithAggregatesFilter<"paket"> | string
  }

  export type customerWhereInput = {
    AND?: customerWhereInput | customerWhereInput[]
    OR?: customerWhereInput[]
    NOT?: customerWhereInput | customerWhereInput[]
    id?: IntFilter<"customer"> | number
    kode?: StringFilter<"customer"> | string
    nama?: StringFilter<"customer"> | string
    deskripsi?: StringFilter<"customer"> | string
    createAt?: DateTimeFilter<"customer"> | Date | string
  }

  export type customerOrderByWithRelationInput = {
    id?: SortOrder
    kode?: SortOrder
    nama?: SortOrder
    deskripsi?: SortOrder
    createAt?: SortOrder
  }

  export type customerWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: customerWhereInput | customerWhereInput[]
    OR?: customerWhereInput[]
    NOT?: customerWhereInput | customerWhereInput[]
    kode?: StringFilter<"customer"> | string
    nama?: StringFilter<"customer"> | string
    deskripsi?: StringFilter<"customer"> | string
    createAt?: DateTimeFilter<"customer"> | Date | string
  }, "id">

  export type customerOrderByWithAggregationInput = {
    id?: SortOrder
    kode?: SortOrder
    nama?: SortOrder
    deskripsi?: SortOrder
    createAt?: SortOrder
    _count?: customerCountOrderByAggregateInput
    _avg?: customerAvgOrderByAggregateInput
    _max?: customerMaxOrderByAggregateInput
    _min?: customerMinOrderByAggregateInput
    _sum?: customerSumOrderByAggregateInput
  }

  export type customerScalarWhereWithAggregatesInput = {
    AND?: customerScalarWhereWithAggregatesInput | customerScalarWhereWithAggregatesInput[]
    OR?: customerScalarWhereWithAggregatesInput[]
    NOT?: customerScalarWhereWithAggregatesInput | customerScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"customer"> | number
    kode?: StringWithAggregatesFilter<"customer"> | string
    nama?: StringWithAggregatesFilter<"customer"> | string
    deskripsi?: StringWithAggregatesFilter<"customer"> | string
    createAt?: DateTimeWithAggregatesFilter<"customer"> | Date | string
  }

  export type preorderCreateInput = {
    order_date: Date | string
    order_by: string
    qty: number
    is_paid: boolean
    paket: paketCreateNestedOneWithoutPreordersInput
  }

  export type preorderUncheckedCreateInput = {
    id?: number
    order_date: Date | string
    order_by: string
    selected_package: number
    qty: number
    is_paid: boolean
  }

  export type preorderUpdateInput = {
    order_date?: DateTimeFieldUpdateOperationsInput | Date | string
    order_by?: StringFieldUpdateOperationsInput | string
    qty?: IntFieldUpdateOperationsInput | number
    is_paid?: BoolFieldUpdateOperationsInput | boolean
    paket?: paketUpdateOneRequiredWithoutPreordersNestedInput
  }

  export type preorderUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    order_date?: DateTimeFieldUpdateOperationsInput | Date | string
    order_by?: StringFieldUpdateOperationsInput | string
    selected_package?: IntFieldUpdateOperationsInput | number
    qty?: IntFieldUpdateOperationsInput | number
    is_paid?: BoolFieldUpdateOperationsInput | boolean
  }

  export type preorderCreateManyInput = {
    id?: number
    order_date: Date | string
    order_by: string
    selected_package: number
    qty: number
    is_paid: boolean
  }

  export type preorderUpdateManyMutationInput = {
    order_date?: DateTimeFieldUpdateOperationsInput | Date | string
    order_by?: StringFieldUpdateOperationsInput | string
    qty?: IntFieldUpdateOperationsInput | number
    is_paid?: BoolFieldUpdateOperationsInput | boolean
  }

  export type preorderUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    order_date?: DateTimeFieldUpdateOperationsInput | Date | string
    order_by?: StringFieldUpdateOperationsInput | string
    selected_package?: IntFieldUpdateOperationsInput | number
    qty?: IntFieldUpdateOperationsInput | number
    is_paid?: BoolFieldUpdateOperationsInput | boolean
  }

  export type paketCreateInput = {
    kode: string
    nama: string
    deskripsi: string
    preorders?: preorderCreateNestedManyWithoutPaketInput
  }

  export type paketUncheckedCreateInput = {
    id?: number
    kode: string
    nama: string
    deskripsi: string
    preorders?: preorderUncheckedCreateNestedManyWithoutPaketInput
  }

  export type paketUpdateInput = {
    kode?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    deskripsi?: StringFieldUpdateOperationsInput | string
    preorders?: preorderUpdateManyWithoutPaketNestedInput
  }

  export type paketUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    kode?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    deskripsi?: StringFieldUpdateOperationsInput | string
    preorders?: preorderUncheckedUpdateManyWithoutPaketNestedInput
  }

  export type paketCreateManyInput = {
    id?: number
    kode: string
    nama: string
    deskripsi: string
  }

  export type paketUpdateManyMutationInput = {
    kode?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    deskripsi?: StringFieldUpdateOperationsInput | string
  }

  export type paketUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    kode?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    deskripsi?: StringFieldUpdateOperationsInput | string
  }

  export type customerCreateInput = {
    kode: string
    nama: string
    deskripsi: string
    createAt?: Date | string
  }

  export type customerUncheckedCreateInput = {
    id?: number
    kode: string
    nama: string
    deskripsi: string
    createAt?: Date | string
  }

  export type customerUpdateInput = {
    kode?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    deskripsi?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type customerUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    kode?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    deskripsi?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type customerCreateManyInput = {
    id?: number
    kode: string
    nama: string
    deskripsi: string
    createAt?: Date | string
  }

  export type customerUpdateManyMutationInput = {
    kode?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    deskripsi?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type customerUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    kode?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    deskripsi?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type PaketScalarRelationFilter = {
    is?: paketWhereInput
    isNot?: paketWhereInput
  }

  export type preorderCountOrderByAggregateInput = {
    id?: SortOrder
    order_date?: SortOrder
    order_by?: SortOrder
    selected_package?: SortOrder
    qty?: SortOrder
    is_paid?: SortOrder
  }

  export type preorderAvgOrderByAggregateInput = {
    id?: SortOrder
    selected_package?: SortOrder
    qty?: SortOrder
  }

  export type preorderMaxOrderByAggregateInput = {
    id?: SortOrder
    order_date?: SortOrder
    order_by?: SortOrder
    selected_package?: SortOrder
    qty?: SortOrder
    is_paid?: SortOrder
  }

  export type preorderMinOrderByAggregateInput = {
    id?: SortOrder
    order_date?: SortOrder
    order_by?: SortOrder
    selected_package?: SortOrder
    qty?: SortOrder
    is_paid?: SortOrder
  }

  export type preorderSumOrderByAggregateInput = {
    id?: SortOrder
    selected_package?: SortOrder
    qty?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type PreorderListRelationFilter = {
    every?: preorderWhereInput
    some?: preorderWhereInput
    none?: preorderWhereInput
  }

  export type preorderOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type paketCountOrderByAggregateInput = {
    id?: SortOrder
    kode?: SortOrder
    nama?: SortOrder
    deskripsi?: SortOrder
  }

  export type paketAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type paketMaxOrderByAggregateInput = {
    id?: SortOrder
    kode?: SortOrder
    nama?: SortOrder
    deskripsi?: SortOrder
  }

  export type paketMinOrderByAggregateInput = {
    id?: SortOrder
    kode?: SortOrder
    nama?: SortOrder
    deskripsi?: SortOrder
  }

  export type paketSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type customerCountOrderByAggregateInput = {
    id?: SortOrder
    kode?: SortOrder
    nama?: SortOrder
    deskripsi?: SortOrder
    createAt?: SortOrder
  }

  export type customerAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type customerMaxOrderByAggregateInput = {
    id?: SortOrder
    kode?: SortOrder
    nama?: SortOrder
    deskripsi?: SortOrder
    createAt?: SortOrder
  }

  export type customerMinOrderByAggregateInput = {
    id?: SortOrder
    kode?: SortOrder
    nama?: SortOrder
    deskripsi?: SortOrder
    createAt?: SortOrder
  }

  export type customerSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type paketCreateNestedOneWithoutPreordersInput = {
    create?: XOR<paketCreateWithoutPreordersInput, paketUncheckedCreateWithoutPreordersInput>
    connectOrCreate?: paketCreateOrConnectWithoutPreordersInput
    connect?: paketWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type paketUpdateOneRequiredWithoutPreordersNestedInput = {
    create?: XOR<paketCreateWithoutPreordersInput, paketUncheckedCreateWithoutPreordersInput>
    connectOrCreate?: paketCreateOrConnectWithoutPreordersInput
    upsert?: paketUpsertWithoutPreordersInput
    connect?: paketWhereUniqueInput
    update?: XOR<XOR<paketUpdateToOneWithWhereWithoutPreordersInput, paketUpdateWithoutPreordersInput>, paketUncheckedUpdateWithoutPreordersInput>
  }

  export type preorderCreateNestedManyWithoutPaketInput = {
    create?: XOR<preorderCreateWithoutPaketInput, preorderUncheckedCreateWithoutPaketInput> | preorderCreateWithoutPaketInput[] | preorderUncheckedCreateWithoutPaketInput[]
    connectOrCreate?: preorderCreateOrConnectWithoutPaketInput | preorderCreateOrConnectWithoutPaketInput[]
    createMany?: preorderCreateManyPaketInputEnvelope
    connect?: preorderWhereUniqueInput | preorderWhereUniqueInput[]
  }

  export type preorderUncheckedCreateNestedManyWithoutPaketInput = {
    create?: XOR<preorderCreateWithoutPaketInput, preorderUncheckedCreateWithoutPaketInput> | preorderCreateWithoutPaketInput[] | preorderUncheckedCreateWithoutPaketInput[]
    connectOrCreate?: preorderCreateOrConnectWithoutPaketInput | preorderCreateOrConnectWithoutPaketInput[]
    createMany?: preorderCreateManyPaketInputEnvelope
    connect?: preorderWhereUniqueInput | preorderWhereUniqueInput[]
  }

  export type preorderUpdateManyWithoutPaketNestedInput = {
    create?: XOR<preorderCreateWithoutPaketInput, preorderUncheckedCreateWithoutPaketInput> | preorderCreateWithoutPaketInput[] | preorderUncheckedCreateWithoutPaketInput[]
    connectOrCreate?: preorderCreateOrConnectWithoutPaketInput | preorderCreateOrConnectWithoutPaketInput[]
    upsert?: preorderUpsertWithWhereUniqueWithoutPaketInput | preorderUpsertWithWhereUniqueWithoutPaketInput[]
    createMany?: preorderCreateManyPaketInputEnvelope
    set?: preorderWhereUniqueInput | preorderWhereUniqueInput[]
    disconnect?: preorderWhereUniqueInput | preorderWhereUniqueInput[]
    delete?: preorderWhereUniqueInput | preorderWhereUniqueInput[]
    connect?: preorderWhereUniqueInput | preorderWhereUniqueInput[]
    update?: preorderUpdateWithWhereUniqueWithoutPaketInput | preorderUpdateWithWhereUniqueWithoutPaketInput[]
    updateMany?: preorderUpdateManyWithWhereWithoutPaketInput | preorderUpdateManyWithWhereWithoutPaketInput[]
    deleteMany?: preorderScalarWhereInput | preorderScalarWhereInput[]
  }

  export type preorderUncheckedUpdateManyWithoutPaketNestedInput = {
    create?: XOR<preorderCreateWithoutPaketInput, preorderUncheckedCreateWithoutPaketInput> | preorderCreateWithoutPaketInput[] | preorderUncheckedCreateWithoutPaketInput[]
    connectOrCreate?: preorderCreateOrConnectWithoutPaketInput | preorderCreateOrConnectWithoutPaketInput[]
    upsert?: preorderUpsertWithWhereUniqueWithoutPaketInput | preorderUpsertWithWhereUniqueWithoutPaketInput[]
    createMany?: preorderCreateManyPaketInputEnvelope
    set?: preorderWhereUniqueInput | preorderWhereUniqueInput[]
    disconnect?: preorderWhereUniqueInput | preorderWhereUniqueInput[]
    delete?: preorderWhereUniqueInput | preorderWhereUniqueInput[]
    connect?: preorderWhereUniqueInput | preorderWhereUniqueInput[]
    update?: preorderUpdateWithWhereUniqueWithoutPaketInput | preorderUpdateWithWhereUniqueWithoutPaketInput[]
    updateMany?: preorderUpdateManyWithWhereWithoutPaketInput | preorderUpdateManyWithWhereWithoutPaketInput[]
    deleteMany?: preorderScalarWhereInput | preorderScalarWhereInput[]
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type paketCreateWithoutPreordersInput = {
    kode: string
    nama: string
    deskripsi: string
  }

  export type paketUncheckedCreateWithoutPreordersInput = {
    id?: number
    kode: string
    nama: string
    deskripsi: string
  }

  export type paketCreateOrConnectWithoutPreordersInput = {
    where: paketWhereUniqueInput
    create: XOR<paketCreateWithoutPreordersInput, paketUncheckedCreateWithoutPreordersInput>
  }

  export type paketUpsertWithoutPreordersInput = {
    update: XOR<paketUpdateWithoutPreordersInput, paketUncheckedUpdateWithoutPreordersInput>
    create: XOR<paketCreateWithoutPreordersInput, paketUncheckedCreateWithoutPreordersInput>
    where?: paketWhereInput
  }

  export type paketUpdateToOneWithWhereWithoutPreordersInput = {
    where?: paketWhereInput
    data: XOR<paketUpdateWithoutPreordersInput, paketUncheckedUpdateWithoutPreordersInput>
  }

  export type paketUpdateWithoutPreordersInput = {
    kode?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    deskripsi?: StringFieldUpdateOperationsInput | string
  }

  export type paketUncheckedUpdateWithoutPreordersInput = {
    id?: IntFieldUpdateOperationsInput | number
    kode?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    deskripsi?: StringFieldUpdateOperationsInput | string
  }

  export type preorderCreateWithoutPaketInput = {
    order_date: Date | string
    order_by: string
    qty: number
    is_paid: boolean
  }

  export type preorderUncheckedCreateWithoutPaketInput = {
    id?: number
    order_date: Date | string
    order_by: string
    qty: number
    is_paid: boolean
  }

  export type preorderCreateOrConnectWithoutPaketInput = {
    where: preorderWhereUniqueInput
    create: XOR<preorderCreateWithoutPaketInput, preorderUncheckedCreateWithoutPaketInput>
  }

  export type preorderCreateManyPaketInputEnvelope = {
    data: preorderCreateManyPaketInput | preorderCreateManyPaketInput[]
  }

  export type preorderUpsertWithWhereUniqueWithoutPaketInput = {
    where: preorderWhereUniqueInput
    update: XOR<preorderUpdateWithoutPaketInput, preorderUncheckedUpdateWithoutPaketInput>
    create: XOR<preorderCreateWithoutPaketInput, preorderUncheckedCreateWithoutPaketInput>
  }

  export type preorderUpdateWithWhereUniqueWithoutPaketInput = {
    where: preorderWhereUniqueInput
    data: XOR<preorderUpdateWithoutPaketInput, preorderUncheckedUpdateWithoutPaketInput>
  }

  export type preorderUpdateManyWithWhereWithoutPaketInput = {
    where: preorderScalarWhereInput
    data: XOR<preorderUpdateManyMutationInput, preorderUncheckedUpdateManyWithoutPaketInput>
  }

  export type preorderScalarWhereInput = {
    AND?: preorderScalarWhereInput | preorderScalarWhereInput[]
    OR?: preorderScalarWhereInput[]
    NOT?: preorderScalarWhereInput | preorderScalarWhereInput[]
    id?: IntFilter<"preorder"> | number
    order_date?: DateTimeFilter<"preorder"> | Date | string
    order_by?: StringFilter<"preorder"> | string
    selected_package?: IntFilter<"preorder"> | number
    qty?: IntFilter<"preorder"> | number
    is_paid?: BoolFilter<"preorder"> | boolean
  }

  export type preorderCreateManyPaketInput = {
    id?: number
    order_date: Date | string
    order_by: string
    qty: number
    is_paid: boolean
  }

  export type preorderUpdateWithoutPaketInput = {
    order_date?: DateTimeFieldUpdateOperationsInput | Date | string
    order_by?: StringFieldUpdateOperationsInput | string
    qty?: IntFieldUpdateOperationsInput | number
    is_paid?: BoolFieldUpdateOperationsInput | boolean
  }

  export type preorderUncheckedUpdateWithoutPaketInput = {
    id?: IntFieldUpdateOperationsInput | number
    order_date?: DateTimeFieldUpdateOperationsInput | Date | string
    order_by?: StringFieldUpdateOperationsInput | string
    qty?: IntFieldUpdateOperationsInput | number
    is_paid?: BoolFieldUpdateOperationsInput | boolean
  }

  export type preorderUncheckedUpdateManyWithoutPaketInput = {
    id?: IntFieldUpdateOperationsInput | number
    order_date?: DateTimeFieldUpdateOperationsInput | Date | string
    order_by?: StringFieldUpdateOperationsInput | string
    qty?: IntFieldUpdateOperationsInput | number
    is_paid?: BoolFieldUpdateOperationsInput | boolean
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}