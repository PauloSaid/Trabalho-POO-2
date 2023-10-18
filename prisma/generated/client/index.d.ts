
/**
 * Client
**/

import * as runtime from './runtime/library';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Aluno
 * 
 */
export type Aluno = $Result.DefaultSelection<Prisma.$AlunoPayload>
/**
 * Model Professor
 * 
 */
export type Professor = $Result.DefaultSelection<Prisma.$ProfessorPayload>
/**
 * Model Grupo
 * 
 */
export type Grupo = $Result.DefaultSelection<Prisma.$GrupoPayload>
/**
 * Model Estande
 * 
 */
export type Estande = $Result.DefaultSelection<Prisma.$EstandePayload>
/**
 * Model Avaliacao
 * 
 */
export type Avaliacao = $Result.DefaultSelection<Prisma.$AvaliacaoPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Alunos
 * const alunos = await prisma.aluno.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Alunos
   * const alunos = await prisma.aluno.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

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


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.aluno`: Exposes CRUD operations for the **Aluno** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Alunos
    * const alunos = await prisma.aluno.findMany()
    * ```
    */
  get aluno(): Prisma.AlunoDelegate<ExtArgs>;

  /**
   * `prisma.professor`: Exposes CRUD operations for the **Professor** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Professors
    * const professors = await prisma.professor.findMany()
    * ```
    */
  get professor(): Prisma.ProfessorDelegate<ExtArgs>;

  /**
   * `prisma.grupo`: Exposes CRUD operations for the **Grupo** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Grupos
    * const grupos = await prisma.grupo.findMany()
    * ```
    */
  get grupo(): Prisma.GrupoDelegate<ExtArgs>;

  /**
   * `prisma.estande`: Exposes CRUD operations for the **Estande** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Estandes
    * const estandes = await prisma.estande.findMany()
    * ```
    */
  get estande(): Prisma.EstandeDelegate<ExtArgs>;

  /**
   * `prisma.avaliacao`: Exposes CRUD operations for the **Avaliacao** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Avaliacaos
    * const avaliacaos = await prisma.avaliacao.findMany()
    * ```
    */
  get avaliacao(): Prisma.AvaliacaoDelegate<ExtArgs>;
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
  export import NotFoundError = runtime.NotFoundError

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
   * Prisma Client JS version: 5.3.1
   * Query Engine version: 61e140623197a131c2a6189271ffee05a7aa9a59
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

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
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
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
    Aluno: 'Aluno',
    Professor: 'Professor',
    Grupo: 'Grupo',
    Estande: 'Estande',
    Avaliacao: 'Avaliacao'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.Args}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'aluno' | 'professor' | 'grupo' | 'estande' | 'avaliacao'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      Aluno: {
        payload: Prisma.$AlunoPayload<ExtArgs>
        fields: Prisma.AlunoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AlunoFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AlunoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AlunoFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AlunoPayload>
          }
          findFirst: {
            args: Prisma.AlunoFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AlunoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AlunoFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AlunoPayload>
          }
          findMany: {
            args: Prisma.AlunoFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AlunoPayload>[]
          }
          create: {
            args: Prisma.AlunoCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AlunoPayload>
          }
          delete: {
            args: Prisma.AlunoDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AlunoPayload>
          }
          update: {
            args: Prisma.AlunoUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AlunoPayload>
          }
          deleteMany: {
            args: Prisma.AlunoDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.AlunoUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.AlunoUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AlunoPayload>
          }
          aggregate: {
            args: Prisma.AlunoAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateAluno>
          }
          groupBy: {
            args: Prisma.AlunoGroupByArgs<ExtArgs>,
            result: $Utils.Optional<AlunoGroupByOutputType>[]
          }
          count: {
            args: Prisma.AlunoCountArgs<ExtArgs>,
            result: $Utils.Optional<AlunoCountAggregateOutputType> | number
          }
        }
      }
      Professor: {
        payload: Prisma.$ProfessorPayload<ExtArgs>
        fields: Prisma.ProfessorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProfessorFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProfessorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProfessorFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProfessorPayload>
          }
          findFirst: {
            args: Prisma.ProfessorFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProfessorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProfessorFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProfessorPayload>
          }
          findMany: {
            args: Prisma.ProfessorFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProfessorPayload>[]
          }
          create: {
            args: Prisma.ProfessorCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProfessorPayload>
          }
          delete: {
            args: Prisma.ProfessorDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProfessorPayload>
          }
          update: {
            args: Prisma.ProfessorUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProfessorPayload>
          }
          deleteMany: {
            args: Prisma.ProfessorDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ProfessorUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ProfessorUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProfessorPayload>
          }
          aggregate: {
            args: Prisma.ProfessorAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateProfessor>
          }
          groupBy: {
            args: Prisma.ProfessorGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ProfessorGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProfessorCountArgs<ExtArgs>,
            result: $Utils.Optional<ProfessorCountAggregateOutputType> | number
          }
        }
      }
      Grupo: {
        payload: Prisma.$GrupoPayload<ExtArgs>
        fields: Prisma.GrupoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GrupoFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GrupoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GrupoFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GrupoPayload>
          }
          findFirst: {
            args: Prisma.GrupoFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GrupoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GrupoFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GrupoPayload>
          }
          findMany: {
            args: Prisma.GrupoFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GrupoPayload>[]
          }
          create: {
            args: Prisma.GrupoCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GrupoPayload>
          }
          delete: {
            args: Prisma.GrupoDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GrupoPayload>
          }
          update: {
            args: Prisma.GrupoUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GrupoPayload>
          }
          deleteMany: {
            args: Prisma.GrupoDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.GrupoUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.GrupoUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GrupoPayload>
          }
          aggregate: {
            args: Prisma.GrupoAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateGrupo>
          }
          groupBy: {
            args: Prisma.GrupoGroupByArgs<ExtArgs>,
            result: $Utils.Optional<GrupoGroupByOutputType>[]
          }
          count: {
            args: Prisma.GrupoCountArgs<ExtArgs>,
            result: $Utils.Optional<GrupoCountAggregateOutputType> | number
          }
        }
      }
      Estande: {
        payload: Prisma.$EstandePayload<ExtArgs>
        fields: Prisma.EstandeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EstandeFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EstandePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EstandeFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EstandePayload>
          }
          findFirst: {
            args: Prisma.EstandeFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EstandePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EstandeFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EstandePayload>
          }
          findMany: {
            args: Prisma.EstandeFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EstandePayload>[]
          }
          create: {
            args: Prisma.EstandeCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EstandePayload>
          }
          delete: {
            args: Prisma.EstandeDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EstandePayload>
          }
          update: {
            args: Prisma.EstandeUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EstandePayload>
          }
          deleteMany: {
            args: Prisma.EstandeDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.EstandeUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.EstandeUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EstandePayload>
          }
          aggregate: {
            args: Prisma.EstandeAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateEstande>
          }
          groupBy: {
            args: Prisma.EstandeGroupByArgs<ExtArgs>,
            result: $Utils.Optional<EstandeGroupByOutputType>[]
          }
          count: {
            args: Prisma.EstandeCountArgs<ExtArgs>,
            result: $Utils.Optional<EstandeCountAggregateOutputType> | number
          }
        }
      }
      Avaliacao: {
        payload: Prisma.$AvaliacaoPayload<ExtArgs>
        fields: Prisma.AvaliacaoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AvaliacaoFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AvaliacaoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AvaliacaoFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AvaliacaoPayload>
          }
          findFirst: {
            args: Prisma.AvaliacaoFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AvaliacaoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AvaliacaoFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AvaliacaoPayload>
          }
          findMany: {
            args: Prisma.AvaliacaoFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AvaliacaoPayload>[]
          }
          create: {
            args: Prisma.AvaliacaoCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AvaliacaoPayload>
          }
          delete: {
            args: Prisma.AvaliacaoDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AvaliacaoPayload>
          }
          update: {
            args: Prisma.AvaliacaoUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AvaliacaoPayload>
          }
          deleteMany: {
            args: Prisma.AvaliacaoDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.AvaliacaoUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.AvaliacaoUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AvaliacaoPayload>
          }
          aggregate: {
            args: Prisma.AvaliacaoAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateAvaliacao>
          }
          groupBy: {
            args: Prisma.AvaliacaoGroupByArgs<ExtArgs>,
            result: $Utils.Optional<AvaliacaoGroupByOutputType>[]
          }
          count: {
            args: Prisma.AvaliacaoCountArgs<ExtArgs>,
            result: $Utils.Optional<AvaliacaoCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
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
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: Array<LogLevel | LogDefinition>
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
    | 'update'
    | 'updateMany'
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
   * Count Type GrupoCountOutputType
   */

  export type GrupoCountOutputType = {
    alunos: number
  }

  export type GrupoCountOutputTypeSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    alunos?: boolean | GrupoCountOutputTypeCountAlunosArgs
  }

  // Custom InputTypes

  /**
   * GrupoCountOutputType without action
   */
  export type GrupoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GrupoCountOutputType
     */
    select?: GrupoCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * GrupoCountOutputType without action
   */
  export type GrupoCountOutputTypeCountAlunosArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: AlunoWhereInput
  }



  /**
   * Count Type EstandeCountOutputType
   */

  export type EstandeCountOutputType = {
    grupoId: number
  }

  export type EstandeCountOutputTypeSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    grupoId?: boolean | EstandeCountOutputTypeCountGrupoIdArgs
  }

  // Custom InputTypes

  /**
   * EstandeCountOutputType without action
   */
  export type EstandeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EstandeCountOutputType
     */
    select?: EstandeCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * EstandeCountOutputType without action
   */
  export type EstandeCountOutputTypeCountGrupoIdArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: GrupoWhereInput
  }



  /**
   * Models
   */

  /**
   * Model Aluno
   */

  export type AggregateAluno = {
    _count: AlunoCountAggregateOutputType | null
    _avg: AlunoAvgAggregateOutputType | null
    _sum: AlunoSumAggregateOutputType | null
    _min: AlunoMinAggregateOutputType | null
    _max: AlunoMaxAggregateOutputType | null
  }

  export type AlunoAvgAggregateOutputType = {
    matricula: number | null
    telefone: number | null
  }

  export type AlunoSumAggregateOutputType = {
    matricula: number | null
    telefone: number | null
  }

  export type AlunoMinAggregateOutputType = {
    id: string | null
    email: string | null
    nome: string | null
    matricula: number | null
    telefone: number | null
    grupoId: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type AlunoMaxAggregateOutputType = {
    id: string | null
    email: string | null
    nome: string | null
    matricula: number | null
    telefone: number | null
    grupoId: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type AlunoCountAggregateOutputType = {
    id: number
    email: number
    nome: number
    matricula: number
    telefone: number
    grupoId: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type AlunoAvgAggregateInputType = {
    matricula?: true
    telefone?: true
  }

  export type AlunoSumAggregateInputType = {
    matricula?: true
    telefone?: true
  }

  export type AlunoMinAggregateInputType = {
    id?: true
    email?: true
    nome?: true
    matricula?: true
    telefone?: true
    grupoId?: true
    created_at?: true
    updated_at?: true
  }

  export type AlunoMaxAggregateInputType = {
    id?: true
    email?: true
    nome?: true
    matricula?: true
    telefone?: true
    grupoId?: true
    created_at?: true
    updated_at?: true
  }

  export type AlunoCountAggregateInputType = {
    id?: true
    email?: true
    nome?: true
    matricula?: true
    telefone?: true
    grupoId?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type AlunoAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Aluno to aggregate.
     */
    where?: AlunoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Alunos to fetch.
     */
    orderBy?: AlunoOrderByWithRelationInput | AlunoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AlunoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Alunos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Alunos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Alunos
    **/
    _count?: true | AlunoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AlunoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AlunoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AlunoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AlunoMaxAggregateInputType
  }

  export type GetAlunoAggregateType<T extends AlunoAggregateArgs> = {
        [P in keyof T & keyof AggregateAluno]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAluno[P]>
      : GetScalarType<T[P], AggregateAluno[P]>
  }




  export type AlunoGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: AlunoWhereInput
    orderBy?: AlunoOrderByWithAggregationInput | AlunoOrderByWithAggregationInput[]
    by: AlunoScalarFieldEnum[] | AlunoScalarFieldEnum
    having?: AlunoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AlunoCountAggregateInputType | true
    _avg?: AlunoAvgAggregateInputType
    _sum?: AlunoSumAggregateInputType
    _min?: AlunoMinAggregateInputType
    _max?: AlunoMaxAggregateInputType
  }

  export type AlunoGroupByOutputType = {
    id: string
    email: string
    nome: string
    matricula: number
    telefone: number
    grupoId: string | null
    created_at: Date
    updated_at: Date
    _count: AlunoCountAggregateOutputType | null
    _avg: AlunoAvgAggregateOutputType | null
    _sum: AlunoSumAggregateOutputType | null
    _min: AlunoMinAggregateOutputType | null
    _max: AlunoMaxAggregateOutputType | null
  }

  type GetAlunoGroupByPayload<T extends AlunoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AlunoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AlunoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AlunoGroupByOutputType[P]>
            : GetScalarType<T[P], AlunoGroupByOutputType[P]>
        }
      >
    >


  export type AlunoSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    nome?: boolean
    matricula?: boolean
    telefone?: boolean
    grupoId?: boolean
    created_at?: boolean
    updated_at?: boolean
    grupo?: boolean | Aluno$grupoArgs<ExtArgs>
    grupoAluno?: boolean | Aluno$grupoAlunoArgs<ExtArgs>
  }, ExtArgs["result"]["aluno"]>

  export type AlunoSelectScalar = {
    id?: boolean
    email?: boolean
    nome?: boolean
    matricula?: boolean
    telefone?: boolean
    grupoId?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type AlunoInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    grupo?: boolean | Aluno$grupoArgs<ExtArgs>
    grupoAluno?: boolean | Aluno$grupoAlunoArgs<ExtArgs>
  }


  export type $AlunoPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    name: "Aluno"
    objects: {
      grupo: Prisma.$GrupoPayload<ExtArgs> | null
      grupoAluno: Prisma.$GrupoPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetResult<{
      id: string
      email: string
      nome: string
      matricula: number
      telefone: number
      grupoId: string | null
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["aluno"]>
    composites: {}
  }


  type AlunoGetPayload<S extends boolean | null | undefined | AlunoDefaultArgs> = $Result.GetResult<Prisma.$AlunoPayload, S>

  type AlunoCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<AlunoFindManyArgs, 'select' | 'include'> & {
      select?: AlunoCountAggregateInputType | true
    }

  export interface AlunoDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Aluno'], meta: { name: 'Aluno' } }
    /**
     * Find zero or one Aluno that matches the filter.
     * @param {AlunoFindUniqueArgs} args - Arguments to find a Aluno
     * @example
     * // Get one Aluno
     * const aluno = await prisma.aluno.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends AlunoFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, AlunoFindUniqueArgs<ExtArgs>>
    ): Prisma__AlunoClient<$Result.GetResult<Prisma.$AlunoPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Aluno that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {AlunoFindUniqueOrThrowArgs} args - Arguments to find a Aluno
     * @example
     * // Get one Aluno
     * const aluno = await prisma.aluno.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends AlunoFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, AlunoFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__AlunoClient<$Result.GetResult<Prisma.$AlunoPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Aluno that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlunoFindFirstArgs} args - Arguments to find a Aluno
     * @example
     * // Get one Aluno
     * const aluno = await prisma.aluno.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends AlunoFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, AlunoFindFirstArgs<ExtArgs>>
    ): Prisma__AlunoClient<$Result.GetResult<Prisma.$AlunoPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Aluno that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlunoFindFirstOrThrowArgs} args - Arguments to find a Aluno
     * @example
     * // Get one Aluno
     * const aluno = await prisma.aluno.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends AlunoFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, AlunoFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__AlunoClient<$Result.GetResult<Prisma.$AlunoPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Alunos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlunoFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Alunos
     * const alunos = await prisma.aluno.findMany()
     * 
     * // Get first 10 Alunos
     * const alunos = await prisma.aluno.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const alunoWithIdOnly = await prisma.aluno.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends AlunoFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AlunoFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlunoPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Aluno.
     * @param {AlunoCreateArgs} args - Arguments to create a Aluno.
     * @example
     * // Create one Aluno
     * const Aluno = await prisma.aluno.create({
     *   data: {
     *     // ... data to create a Aluno
     *   }
     * })
     * 
    **/
    create<T extends AlunoCreateArgs<ExtArgs>>(
      args: SelectSubset<T, AlunoCreateArgs<ExtArgs>>
    ): Prisma__AlunoClient<$Result.GetResult<Prisma.$AlunoPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Delete a Aluno.
     * @param {AlunoDeleteArgs} args - Arguments to delete one Aluno.
     * @example
     * // Delete one Aluno
     * const Aluno = await prisma.aluno.delete({
     *   where: {
     *     // ... filter to delete one Aluno
     *   }
     * })
     * 
    **/
    delete<T extends AlunoDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, AlunoDeleteArgs<ExtArgs>>
    ): Prisma__AlunoClient<$Result.GetResult<Prisma.$AlunoPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Aluno.
     * @param {AlunoUpdateArgs} args - Arguments to update one Aluno.
     * @example
     * // Update one Aluno
     * const aluno = await prisma.aluno.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends AlunoUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, AlunoUpdateArgs<ExtArgs>>
    ): Prisma__AlunoClient<$Result.GetResult<Prisma.$AlunoPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Alunos.
     * @param {AlunoDeleteManyArgs} args - Arguments to filter Alunos to delete.
     * @example
     * // Delete a few Alunos
     * const { count } = await prisma.aluno.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends AlunoDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AlunoDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Alunos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlunoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Alunos
     * const aluno = await prisma.aluno.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends AlunoUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, AlunoUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Aluno.
     * @param {AlunoUpsertArgs} args - Arguments to update or create a Aluno.
     * @example
     * // Update or create a Aluno
     * const aluno = await prisma.aluno.upsert({
     *   create: {
     *     // ... data to create a Aluno
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Aluno we want to update
     *   }
     * })
    **/
    upsert<T extends AlunoUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, AlunoUpsertArgs<ExtArgs>>
    ): Prisma__AlunoClient<$Result.GetResult<Prisma.$AlunoPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Alunos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlunoCountArgs} args - Arguments to filter Alunos to count.
     * @example
     * // Count the number of Alunos
     * const count = await prisma.aluno.count({
     *   where: {
     *     // ... the filter for the Alunos we want to count
     *   }
     * })
    **/
    count<T extends AlunoCountArgs>(
      args?: Subset<T, AlunoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AlunoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Aluno.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlunoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AlunoAggregateArgs>(args: Subset<T, AlunoAggregateArgs>): Prisma.PrismaPromise<GetAlunoAggregateType<T>>

    /**
     * Group by Aluno.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlunoGroupByArgs} args - Group by arguments.
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
      T extends AlunoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AlunoGroupByArgs['orderBy'] }
        : { orderBy?: AlunoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AlunoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAlunoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Aluno model
   */
  readonly fields: AlunoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Aluno.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AlunoClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    grupo<T extends Aluno$grupoArgs<ExtArgs> = {}>(args?: Subset<T, Aluno$grupoArgs<ExtArgs>>): Prisma__GrupoClient<$Result.GetResult<Prisma.$GrupoPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    grupoAluno<T extends Aluno$grupoAlunoArgs<ExtArgs> = {}>(args?: Subset<T, Aluno$grupoAlunoArgs<ExtArgs>>): Prisma__GrupoClient<$Result.GetResult<Prisma.$GrupoPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Aluno model
   */ 
  interface AlunoFieldRefs {
    readonly id: FieldRef<"Aluno", 'String'>
    readonly email: FieldRef<"Aluno", 'String'>
    readonly nome: FieldRef<"Aluno", 'String'>
    readonly matricula: FieldRef<"Aluno", 'Int'>
    readonly telefone: FieldRef<"Aluno", 'Int'>
    readonly grupoId: FieldRef<"Aluno", 'String'>
    readonly created_at: FieldRef<"Aluno", 'DateTime'>
    readonly updated_at: FieldRef<"Aluno", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * Aluno findUnique
   */
  export type AlunoFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Aluno
     */
    select?: AlunoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AlunoInclude<ExtArgs> | null
    /**
     * Filter, which Aluno to fetch.
     */
    where: AlunoWhereUniqueInput
  }


  /**
   * Aluno findUniqueOrThrow
   */
  export type AlunoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Aluno
     */
    select?: AlunoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AlunoInclude<ExtArgs> | null
    /**
     * Filter, which Aluno to fetch.
     */
    where: AlunoWhereUniqueInput
  }


  /**
   * Aluno findFirst
   */
  export type AlunoFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Aluno
     */
    select?: AlunoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AlunoInclude<ExtArgs> | null
    /**
     * Filter, which Aluno to fetch.
     */
    where?: AlunoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Alunos to fetch.
     */
    orderBy?: AlunoOrderByWithRelationInput | AlunoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Alunos.
     */
    cursor?: AlunoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Alunos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Alunos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Alunos.
     */
    distinct?: AlunoScalarFieldEnum | AlunoScalarFieldEnum[]
  }


  /**
   * Aluno findFirstOrThrow
   */
  export type AlunoFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Aluno
     */
    select?: AlunoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AlunoInclude<ExtArgs> | null
    /**
     * Filter, which Aluno to fetch.
     */
    where?: AlunoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Alunos to fetch.
     */
    orderBy?: AlunoOrderByWithRelationInput | AlunoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Alunos.
     */
    cursor?: AlunoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Alunos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Alunos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Alunos.
     */
    distinct?: AlunoScalarFieldEnum | AlunoScalarFieldEnum[]
  }


  /**
   * Aluno findMany
   */
  export type AlunoFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Aluno
     */
    select?: AlunoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AlunoInclude<ExtArgs> | null
    /**
     * Filter, which Alunos to fetch.
     */
    where?: AlunoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Alunos to fetch.
     */
    orderBy?: AlunoOrderByWithRelationInput | AlunoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Alunos.
     */
    cursor?: AlunoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Alunos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Alunos.
     */
    skip?: number
    distinct?: AlunoScalarFieldEnum | AlunoScalarFieldEnum[]
  }


  /**
   * Aluno create
   */
  export type AlunoCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Aluno
     */
    select?: AlunoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AlunoInclude<ExtArgs> | null
    /**
     * The data needed to create a Aluno.
     */
    data: XOR<AlunoCreateInput, AlunoUncheckedCreateInput>
  }


  /**
   * Aluno update
   */
  export type AlunoUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Aluno
     */
    select?: AlunoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AlunoInclude<ExtArgs> | null
    /**
     * The data needed to update a Aluno.
     */
    data: XOR<AlunoUpdateInput, AlunoUncheckedUpdateInput>
    /**
     * Choose, which Aluno to update.
     */
    where: AlunoWhereUniqueInput
  }


  /**
   * Aluno updateMany
   */
  export type AlunoUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Alunos.
     */
    data: XOR<AlunoUpdateManyMutationInput, AlunoUncheckedUpdateManyInput>
    /**
     * Filter which Alunos to update
     */
    where?: AlunoWhereInput
  }


  /**
   * Aluno upsert
   */
  export type AlunoUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Aluno
     */
    select?: AlunoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AlunoInclude<ExtArgs> | null
    /**
     * The filter to search for the Aluno to update in case it exists.
     */
    where: AlunoWhereUniqueInput
    /**
     * In case the Aluno found by the `where` argument doesn't exist, create a new Aluno with this data.
     */
    create: XOR<AlunoCreateInput, AlunoUncheckedCreateInput>
    /**
     * In case the Aluno was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AlunoUpdateInput, AlunoUncheckedUpdateInput>
  }


  /**
   * Aluno delete
   */
  export type AlunoDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Aluno
     */
    select?: AlunoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AlunoInclude<ExtArgs> | null
    /**
     * Filter which Aluno to delete.
     */
    where: AlunoWhereUniqueInput
  }


  /**
   * Aluno deleteMany
   */
  export type AlunoDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Alunos to delete
     */
    where?: AlunoWhereInput
  }


  /**
   * Aluno.grupo
   */
  export type Aluno$grupoArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Grupo
     */
    select?: GrupoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GrupoInclude<ExtArgs> | null
    where?: GrupoWhereInput
  }


  /**
   * Aluno.grupoAluno
   */
  export type Aluno$grupoAlunoArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Grupo
     */
    select?: GrupoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GrupoInclude<ExtArgs> | null
    where?: GrupoWhereInput
  }


  /**
   * Aluno without action
   */
  export type AlunoDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Aluno
     */
    select?: AlunoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AlunoInclude<ExtArgs> | null
  }



  /**
   * Model Professor
   */

  export type AggregateProfessor = {
    _count: ProfessorCountAggregateOutputType | null
    _min: ProfessorMinAggregateOutputType | null
    _max: ProfessorMaxAggregateOutputType | null
  }

  export type ProfessorMinAggregateOutputType = {
    id: string | null
    email: string | null
    nome: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type ProfessorMaxAggregateOutputType = {
    id: string | null
    email: string | null
    nome: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type ProfessorCountAggregateOutputType = {
    id: number
    email: number
    nome: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type ProfessorMinAggregateInputType = {
    id?: true
    email?: true
    nome?: true
    created_at?: true
    updated_at?: true
  }

  export type ProfessorMaxAggregateInputType = {
    id?: true
    email?: true
    nome?: true
    created_at?: true
    updated_at?: true
  }

  export type ProfessorCountAggregateInputType = {
    id?: true
    email?: true
    nome?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type ProfessorAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Professor to aggregate.
     */
    where?: ProfessorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Professors to fetch.
     */
    orderBy?: ProfessorOrderByWithRelationInput | ProfessorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProfessorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Professors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Professors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Professors
    **/
    _count?: true | ProfessorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProfessorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProfessorMaxAggregateInputType
  }

  export type GetProfessorAggregateType<T extends ProfessorAggregateArgs> = {
        [P in keyof T & keyof AggregateProfessor]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProfessor[P]>
      : GetScalarType<T[P], AggregateProfessor[P]>
  }




  export type ProfessorGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: ProfessorWhereInput
    orderBy?: ProfessorOrderByWithAggregationInput | ProfessorOrderByWithAggregationInput[]
    by: ProfessorScalarFieldEnum[] | ProfessorScalarFieldEnum
    having?: ProfessorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProfessorCountAggregateInputType | true
    _min?: ProfessorMinAggregateInputType
    _max?: ProfessorMaxAggregateInputType
  }

  export type ProfessorGroupByOutputType = {
    id: string
    email: string
    nome: string
    created_at: Date
    updated_at: Date
    _count: ProfessorCountAggregateOutputType | null
    _min: ProfessorMinAggregateOutputType | null
    _max: ProfessorMaxAggregateOutputType | null
  }

  type GetProfessorGroupByPayload<T extends ProfessorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProfessorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProfessorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProfessorGroupByOutputType[P]>
            : GetScalarType<T[P], ProfessorGroupByOutputType[P]>
        }
      >
    >


  export type ProfessorSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    nome?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["professor"]>

  export type ProfessorSelectScalar = {
    id?: boolean
    email?: boolean
    nome?: boolean
    created_at?: boolean
    updated_at?: boolean
  }


  export type $ProfessorPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    name: "Professor"
    objects: {}
    scalars: $Extensions.GetResult<{
      id: string
      email: string
      nome: string
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["professor"]>
    composites: {}
  }


  type ProfessorGetPayload<S extends boolean | null | undefined | ProfessorDefaultArgs> = $Result.GetResult<Prisma.$ProfessorPayload, S>

  type ProfessorCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<ProfessorFindManyArgs, 'select' | 'include'> & {
      select?: ProfessorCountAggregateInputType | true
    }

  export interface ProfessorDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Professor'], meta: { name: 'Professor' } }
    /**
     * Find zero or one Professor that matches the filter.
     * @param {ProfessorFindUniqueArgs} args - Arguments to find a Professor
     * @example
     * // Get one Professor
     * const professor = await prisma.professor.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ProfessorFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ProfessorFindUniqueArgs<ExtArgs>>
    ): Prisma__ProfessorClient<$Result.GetResult<Prisma.$ProfessorPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Professor that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ProfessorFindUniqueOrThrowArgs} args - Arguments to find a Professor
     * @example
     * // Get one Professor
     * const professor = await prisma.professor.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ProfessorFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ProfessorFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ProfessorClient<$Result.GetResult<Prisma.$ProfessorPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Professor that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfessorFindFirstArgs} args - Arguments to find a Professor
     * @example
     * // Get one Professor
     * const professor = await prisma.professor.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ProfessorFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ProfessorFindFirstArgs<ExtArgs>>
    ): Prisma__ProfessorClient<$Result.GetResult<Prisma.$ProfessorPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Professor that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfessorFindFirstOrThrowArgs} args - Arguments to find a Professor
     * @example
     * // Get one Professor
     * const professor = await prisma.professor.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ProfessorFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ProfessorFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ProfessorClient<$Result.GetResult<Prisma.$ProfessorPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Professors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfessorFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Professors
     * const professors = await prisma.professor.findMany()
     * 
     * // Get first 10 Professors
     * const professors = await prisma.professor.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const professorWithIdOnly = await prisma.professor.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ProfessorFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ProfessorFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfessorPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Professor.
     * @param {ProfessorCreateArgs} args - Arguments to create a Professor.
     * @example
     * // Create one Professor
     * const Professor = await prisma.professor.create({
     *   data: {
     *     // ... data to create a Professor
     *   }
     * })
     * 
    **/
    create<T extends ProfessorCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ProfessorCreateArgs<ExtArgs>>
    ): Prisma__ProfessorClient<$Result.GetResult<Prisma.$ProfessorPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Delete a Professor.
     * @param {ProfessorDeleteArgs} args - Arguments to delete one Professor.
     * @example
     * // Delete one Professor
     * const Professor = await prisma.professor.delete({
     *   where: {
     *     // ... filter to delete one Professor
     *   }
     * })
     * 
    **/
    delete<T extends ProfessorDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ProfessorDeleteArgs<ExtArgs>>
    ): Prisma__ProfessorClient<$Result.GetResult<Prisma.$ProfessorPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Professor.
     * @param {ProfessorUpdateArgs} args - Arguments to update one Professor.
     * @example
     * // Update one Professor
     * const professor = await prisma.professor.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ProfessorUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ProfessorUpdateArgs<ExtArgs>>
    ): Prisma__ProfessorClient<$Result.GetResult<Prisma.$ProfessorPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Professors.
     * @param {ProfessorDeleteManyArgs} args - Arguments to filter Professors to delete.
     * @example
     * // Delete a few Professors
     * const { count } = await prisma.professor.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ProfessorDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ProfessorDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Professors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfessorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Professors
     * const professor = await prisma.professor.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ProfessorUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ProfessorUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Professor.
     * @param {ProfessorUpsertArgs} args - Arguments to update or create a Professor.
     * @example
     * // Update or create a Professor
     * const professor = await prisma.professor.upsert({
     *   create: {
     *     // ... data to create a Professor
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Professor we want to update
     *   }
     * })
    **/
    upsert<T extends ProfessorUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ProfessorUpsertArgs<ExtArgs>>
    ): Prisma__ProfessorClient<$Result.GetResult<Prisma.$ProfessorPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Professors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfessorCountArgs} args - Arguments to filter Professors to count.
     * @example
     * // Count the number of Professors
     * const count = await prisma.professor.count({
     *   where: {
     *     // ... the filter for the Professors we want to count
     *   }
     * })
    **/
    count<T extends ProfessorCountArgs>(
      args?: Subset<T, ProfessorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProfessorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Professor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfessorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProfessorAggregateArgs>(args: Subset<T, ProfessorAggregateArgs>): Prisma.PrismaPromise<GetProfessorAggregateType<T>>

    /**
     * Group by Professor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfessorGroupByArgs} args - Group by arguments.
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
      T extends ProfessorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProfessorGroupByArgs['orderBy'] }
        : { orderBy?: ProfessorGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProfessorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProfessorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Professor model
   */
  readonly fields: ProfessorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Professor.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProfessorClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Professor model
   */ 
  interface ProfessorFieldRefs {
    readonly id: FieldRef<"Professor", 'String'>
    readonly email: FieldRef<"Professor", 'String'>
    readonly nome: FieldRef<"Professor", 'String'>
    readonly created_at: FieldRef<"Professor", 'DateTime'>
    readonly updated_at: FieldRef<"Professor", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * Professor findUnique
   */
  export type ProfessorFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Professor
     */
    select?: ProfessorSelect<ExtArgs> | null
    /**
     * Filter, which Professor to fetch.
     */
    where: ProfessorWhereUniqueInput
  }


  /**
   * Professor findUniqueOrThrow
   */
  export type ProfessorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Professor
     */
    select?: ProfessorSelect<ExtArgs> | null
    /**
     * Filter, which Professor to fetch.
     */
    where: ProfessorWhereUniqueInput
  }


  /**
   * Professor findFirst
   */
  export type ProfessorFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Professor
     */
    select?: ProfessorSelect<ExtArgs> | null
    /**
     * Filter, which Professor to fetch.
     */
    where?: ProfessorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Professors to fetch.
     */
    orderBy?: ProfessorOrderByWithRelationInput | ProfessorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Professors.
     */
    cursor?: ProfessorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Professors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Professors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Professors.
     */
    distinct?: ProfessorScalarFieldEnum | ProfessorScalarFieldEnum[]
  }


  /**
   * Professor findFirstOrThrow
   */
  export type ProfessorFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Professor
     */
    select?: ProfessorSelect<ExtArgs> | null
    /**
     * Filter, which Professor to fetch.
     */
    where?: ProfessorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Professors to fetch.
     */
    orderBy?: ProfessorOrderByWithRelationInput | ProfessorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Professors.
     */
    cursor?: ProfessorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Professors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Professors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Professors.
     */
    distinct?: ProfessorScalarFieldEnum | ProfessorScalarFieldEnum[]
  }


  /**
   * Professor findMany
   */
  export type ProfessorFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Professor
     */
    select?: ProfessorSelect<ExtArgs> | null
    /**
     * Filter, which Professors to fetch.
     */
    where?: ProfessorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Professors to fetch.
     */
    orderBy?: ProfessorOrderByWithRelationInput | ProfessorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Professors.
     */
    cursor?: ProfessorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Professors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Professors.
     */
    skip?: number
    distinct?: ProfessorScalarFieldEnum | ProfessorScalarFieldEnum[]
  }


  /**
   * Professor create
   */
  export type ProfessorCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Professor
     */
    select?: ProfessorSelect<ExtArgs> | null
    /**
     * The data needed to create a Professor.
     */
    data: XOR<ProfessorCreateInput, ProfessorUncheckedCreateInput>
  }


  /**
   * Professor update
   */
  export type ProfessorUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Professor
     */
    select?: ProfessorSelect<ExtArgs> | null
    /**
     * The data needed to update a Professor.
     */
    data: XOR<ProfessorUpdateInput, ProfessorUncheckedUpdateInput>
    /**
     * Choose, which Professor to update.
     */
    where: ProfessorWhereUniqueInput
  }


  /**
   * Professor updateMany
   */
  export type ProfessorUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Professors.
     */
    data: XOR<ProfessorUpdateManyMutationInput, ProfessorUncheckedUpdateManyInput>
    /**
     * Filter which Professors to update
     */
    where?: ProfessorWhereInput
  }


  /**
   * Professor upsert
   */
  export type ProfessorUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Professor
     */
    select?: ProfessorSelect<ExtArgs> | null
    /**
     * The filter to search for the Professor to update in case it exists.
     */
    where: ProfessorWhereUniqueInput
    /**
     * In case the Professor found by the `where` argument doesn't exist, create a new Professor with this data.
     */
    create: XOR<ProfessorCreateInput, ProfessorUncheckedCreateInput>
    /**
     * In case the Professor was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProfessorUpdateInput, ProfessorUncheckedUpdateInput>
  }


  /**
   * Professor delete
   */
  export type ProfessorDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Professor
     */
    select?: ProfessorSelect<ExtArgs> | null
    /**
     * Filter which Professor to delete.
     */
    where: ProfessorWhereUniqueInput
  }


  /**
   * Professor deleteMany
   */
  export type ProfessorDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Professors to delete
     */
    where?: ProfessorWhereInput
  }


  /**
   * Professor without action
   */
  export type ProfessorDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Professor
     */
    select?: ProfessorSelect<ExtArgs> | null
  }



  /**
   * Model Grupo
   */

  export type AggregateGrupo = {
    _count: GrupoCountAggregateOutputType | null
    _avg: GrupoAvgAggregateOutputType | null
    _sum: GrupoSumAggregateOutputType | null
    _min: GrupoMinAggregateOutputType | null
    _max: GrupoMaxAggregateOutputType | null
  }

  export type GrupoAvgAggregateOutputType = {
    estandeId: number | null
  }

  export type GrupoSumAggregateOutputType = {
    estandeId: number | null
  }

  export type GrupoMinAggregateOutputType = {
    id: string | null
    estandeId: number | null
    nomeGrupo: string | null
    nomeProjeto: string | null
    diaApresentacao: Date | null
    alunoId: string | null
  }

  export type GrupoMaxAggregateOutputType = {
    id: string | null
    estandeId: number | null
    nomeGrupo: string | null
    nomeProjeto: string | null
    diaApresentacao: Date | null
    alunoId: string | null
  }

  export type GrupoCountAggregateOutputType = {
    id: number
    estandeId: number
    nomeGrupo: number
    nomeProjeto: number
    diaApresentacao: number
    alunoId: number
    _all: number
  }


  export type GrupoAvgAggregateInputType = {
    estandeId?: true
  }

  export type GrupoSumAggregateInputType = {
    estandeId?: true
  }

  export type GrupoMinAggregateInputType = {
    id?: true
    estandeId?: true
    nomeGrupo?: true
    nomeProjeto?: true
    diaApresentacao?: true
    alunoId?: true
  }

  export type GrupoMaxAggregateInputType = {
    id?: true
    estandeId?: true
    nomeGrupo?: true
    nomeProjeto?: true
    diaApresentacao?: true
    alunoId?: true
  }

  export type GrupoCountAggregateInputType = {
    id?: true
    estandeId?: true
    nomeGrupo?: true
    nomeProjeto?: true
    diaApresentacao?: true
    alunoId?: true
    _all?: true
  }

  export type GrupoAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Grupo to aggregate.
     */
    where?: GrupoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Grupos to fetch.
     */
    orderBy?: GrupoOrderByWithRelationInput | GrupoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GrupoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Grupos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Grupos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Grupos
    **/
    _count?: true | GrupoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GrupoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GrupoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GrupoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GrupoMaxAggregateInputType
  }

  export type GetGrupoAggregateType<T extends GrupoAggregateArgs> = {
        [P in keyof T & keyof AggregateGrupo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGrupo[P]>
      : GetScalarType<T[P], AggregateGrupo[P]>
  }




  export type GrupoGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: GrupoWhereInput
    orderBy?: GrupoOrderByWithAggregationInput | GrupoOrderByWithAggregationInput[]
    by: GrupoScalarFieldEnum[] | GrupoScalarFieldEnum
    having?: GrupoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GrupoCountAggregateInputType | true
    _avg?: GrupoAvgAggregateInputType
    _sum?: GrupoSumAggregateInputType
    _min?: GrupoMinAggregateInputType
    _max?: GrupoMaxAggregateInputType
  }

  export type GrupoGroupByOutputType = {
    id: string
    estandeId: number
    nomeGrupo: string
    nomeProjeto: string
    diaApresentacao: Date
    alunoId: string
    _count: GrupoCountAggregateOutputType | null
    _avg: GrupoAvgAggregateOutputType | null
    _sum: GrupoSumAggregateOutputType | null
    _min: GrupoMinAggregateOutputType | null
    _max: GrupoMaxAggregateOutputType | null
  }

  type GetGrupoGroupByPayload<T extends GrupoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GrupoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GrupoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GrupoGroupByOutputType[P]>
            : GetScalarType<T[P], GrupoGroupByOutputType[P]>
        }
      >
    >


  export type GrupoSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    estandeId?: boolean
    nomeGrupo?: boolean
    nomeProjeto?: boolean
    diaApresentacao?: boolean
    alunoId?: boolean
    avaliacao?: boolean | Grupo$avaliacaoArgs<ExtArgs>
    lider?: boolean | AlunoDefaultArgs<ExtArgs>
    alunos?: boolean | Grupo$alunosArgs<ExtArgs>
    numeroEstande?: boolean | EstandeDefaultArgs<ExtArgs>
    _count?: boolean | GrupoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["grupo"]>

  export type GrupoSelectScalar = {
    id?: boolean
    estandeId?: boolean
    nomeGrupo?: boolean
    nomeProjeto?: boolean
    diaApresentacao?: boolean
    alunoId?: boolean
  }

  export type GrupoInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    avaliacao?: boolean | Grupo$avaliacaoArgs<ExtArgs>
    lider?: boolean | AlunoDefaultArgs<ExtArgs>
    alunos?: boolean | Grupo$alunosArgs<ExtArgs>
    numeroEstande?: boolean | EstandeDefaultArgs<ExtArgs>
    _count?: boolean | GrupoCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $GrupoPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    name: "Grupo"
    objects: {
      avaliacao: Prisma.$AvaliacaoPayload<ExtArgs> | null
      lider: Prisma.$AlunoPayload<ExtArgs>
      alunos: Prisma.$AlunoPayload<ExtArgs>[]
      numeroEstande: Prisma.$EstandePayload<ExtArgs>
    }
    scalars: $Extensions.GetResult<{
      id: string
      estandeId: number
      nomeGrupo: string
      nomeProjeto: string
      diaApresentacao: Date
      alunoId: string
    }, ExtArgs["result"]["grupo"]>
    composites: {}
  }


  type GrupoGetPayload<S extends boolean | null | undefined | GrupoDefaultArgs> = $Result.GetResult<Prisma.$GrupoPayload, S>

  type GrupoCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<GrupoFindManyArgs, 'select' | 'include'> & {
      select?: GrupoCountAggregateInputType | true
    }

  export interface GrupoDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Grupo'], meta: { name: 'Grupo' } }
    /**
     * Find zero or one Grupo that matches the filter.
     * @param {GrupoFindUniqueArgs} args - Arguments to find a Grupo
     * @example
     * // Get one Grupo
     * const grupo = await prisma.grupo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends GrupoFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, GrupoFindUniqueArgs<ExtArgs>>
    ): Prisma__GrupoClient<$Result.GetResult<Prisma.$GrupoPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Grupo that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {GrupoFindUniqueOrThrowArgs} args - Arguments to find a Grupo
     * @example
     * // Get one Grupo
     * const grupo = await prisma.grupo.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends GrupoFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, GrupoFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__GrupoClient<$Result.GetResult<Prisma.$GrupoPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Grupo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GrupoFindFirstArgs} args - Arguments to find a Grupo
     * @example
     * // Get one Grupo
     * const grupo = await prisma.grupo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends GrupoFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, GrupoFindFirstArgs<ExtArgs>>
    ): Prisma__GrupoClient<$Result.GetResult<Prisma.$GrupoPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Grupo that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GrupoFindFirstOrThrowArgs} args - Arguments to find a Grupo
     * @example
     * // Get one Grupo
     * const grupo = await prisma.grupo.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends GrupoFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, GrupoFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__GrupoClient<$Result.GetResult<Prisma.$GrupoPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Grupos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GrupoFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Grupos
     * const grupos = await prisma.grupo.findMany()
     * 
     * // Get first 10 Grupos
     * const grupos = await prisma.grupo.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const grupoWithIdOnly = await prisma.grupo.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends GrupoFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, GrupoFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GrupoPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Grupo.
     * @param {GrupoCreateArgs} args - Arguments to create a Grupo.
     * @example
     * // Create one Grupo
     * const Grupo = await prisma.grupo.create({
     *   data: {
     *     // ... data to create a Grupo
     *   }
     * })
     * 
    **/
    create<T extends GrupoCreateArgs<ExtArgs>>(
      args: SelectSubset<T, GrupoCreateArgs<ExtArgs>>
    ): Prisma__GrupoClient<$Result.GetResult<Prisma.$GrupoPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Delete a Grupo.
     * @param {GrupoDeleteArgs} args - Arguments to delete one Grupo.
     * @example
     * // Delete one Grupo
     * const Grupo = await prisma.grupo.delete({
     *   where: {
     *     // ... filter to delete one Grupo
     *   }
     * })
     * 
    **/
    delete<T extends GrupoDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, GrupoDeleteArgs<ExtArgs>>
    ): Prisma__GrupoClient<$Result.GetResult<Prisma.$GrupoPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Grupo.
     * @param {GrupoUpdateArgs} args - Arguments to update one Grupo.
     * @example
     * // Update one Grupo
     * const grupo = await prisma.grupo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends GrupoUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, GrupoUpdateArgs<ExtArgs>>
    ): Prisma__GrupoClient<$Result.GetResult<Prisma.$GrupoPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Grupos.
     * @param {GrupoDeleteManyArgs} args - Arguments to filter Grupos to delete.
     * @example
     * // Delete a few Grupos
     * const { count } = await prisma.grupo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends GrupoDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, GrupoDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Grupos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GrupoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Grupos
     * const grupo = await prisma.grupo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends GrupoUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, GrupoUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Grupo.
     * @param {GrupoUpsertArgs} args - Arguments to update or create a Grupo.
     * @example
     * // Update or create a Grupo
     * const grupo = await prisma.grupo.upsert({
     *   create: {
     *     // ... data to create a Grupo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Grupo we want to update
     *   }
     * })
    **/
    upsert<T extends GrupoUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, GrupoUpsertArgs<ExtArgs>>
    ): Prisma__GrupoClient<$Result.GetResult<Prisma.$GrupoPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Grupos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GrupoCountArgs} args - Arguments to filter Grupos to count.
     * @example
     * // Count the number of Grupos
     * const count = await prisma.grupo.count({
     *   where: {
     *     // ... the filter for the Grupos we want to count
     *   }
     * })
    **/
    count<T extends GrupoCountArgs>(
      args?: Subset<T, GrupoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GrupoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Grupo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GrupoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends GrupoAggregateArgs>(args: Subset<T, GrupoAggregateArgs>): Prisma.PrismaPromise<GetGrupoAggregateType<T>>

    /**
     * Group by Grupo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GrupoGroupByArgs} args - Group by arguments.
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
      T extends GrupoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GrupoGroupByArgs['orderBy'] }
        : { orderBy?: GrupoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, GrupoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGrupoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Grupo model
   */
  readonly fields: GrupoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Grupo.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GrupoClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    avaliacao<T extends Grupo$avaliacaoArgs<ExtArgs> = {}>(args?: Subset<T, Grupo$avaliacaoArgs<ExtArgs>>): Prisma__AvaliacaoClient<$Result.GetResult<Prisma.$AvaliacaoPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    lider<T extends AlunoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AlunoDefaultArgs<ExtArgs>>): Prisma__AlunoClient<$Result.GetResult<Prisma.$AlunoPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    alunos<T extends Grupo$alunosArgs<ExtArgs> = {}>(args?: Subset<T, Grupo$alunosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlunoPayload<ExtArgs>, T, 'findMany'> | Null>;

    numeroEstande<T extends EstandeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EstandeDefaultArgs<ExtArgs>>): Prisma__EstandeClient<$Result.GetResult<Prisma.$EstandePayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Grupo model
   */ 
  interface GrupoFieldRefs {
    readonly id: FieldRef<"Grupo", 'String'>
    readonly estandeId: FieldRef<"Grupo", 'Int'>
    readonly nomeGrupo: FieldRef<"Grupo", 'String'>
    readonly nomeProjeto: FieldRef<"Grupo", 'String'>
    readonly diaApresentacao: FieldRef<"Grupo", 'DateTime'>
    readonly alunoId: FieldRef<"Grupo", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Grupo findUnique
   */
  export type GrupoFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Grupo
     */
    select?: GrupoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GrupoInclude<ExtArgs> | null
    /**
     * Filter, which Grupo to fetch.
     */
    where: GrupoWhereUniqueInput
  }


  /**
   * Grupo findUniqueOrThrow
   */
  export type GrupoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Grupo
     */
    select?: GrupoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GrupoInclude<ExtArgs> | null
    /**
     * Filter, which Grupo to fetch.
     */
    where: GrupoWhereUniqueInput
  }


  /**
   * Grupo findFirst
   */
  export type GrupoFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Grupo
     */
    select?: GrupoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GrupoInclude<ExtArgs> | null
    /**
     * Filter, which Grupo to fetch.
     */
    where?: GrupoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Grupos to fetch.
     */
    orderBy?: GrupoOrderByWithRelationInput | GrupoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Grupos.
     */
    cursor?: GrupoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Grupos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Grupos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Grupos.
     */
    distinct?: GrupoScalarFieldEnum | GrupoScalarFieldEnum[]
  }


  /**
   * Grupo findFirstOrThrow
   */
  export type GrupoFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Grupo
     */
    select?: GrupoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GrupoInclude<ExtArgs> | null
    /**
     * Filter, which Grupo to fetch.
     */
    where?: GrupoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Grupos to fetch.
     */
    orderBy?: GrupoOrderByWithRelationInput | GrupoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Grupos.
     */
    cursor?: GrupoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Grupos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Grupos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Grupos.
     */
    distinct?: GrupoScalarFieldEnum | GrupoScalarFieldEnum[]
  }


  /**
   * Grupo findMany
   */
  export type GrupoFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Grupo
     */
    select?: GrupoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GrupoInclude<ExtArgs> | null
    /**
     * Filter, which Grupos to fetch.
     */
    where?: GrupoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Grupos to fetch.
     */
    orderBy?: GrupoOrderByWithRelationInput | GrupoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Grupos.
     */
    cursor?: GrupoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Grupos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Grupos.
     */
    skip?: number
    distinct?: GrupoScalarFieldEnum | GrupoScalarFieldEnum[]
  }


  /**
   * Grupo create
   */
  export type GrupoCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Grupo
     */
    select?: GrupoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GrupoInclude<ExtArgs> | null
    /**
     * The data needed to create a Grupo.
     */
    data: XOR<GrupoCreateInput, GrupoUncheckedCreateInput>
  }


  /**
   * Grupo update
   */
  export type GrupoUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Grupo
     */
    select?: GrupoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GrupoInclude<ExtArgs> | null
    /**
     * The data needed to update a Grupo.
     */
    data: XOR<GrupoUpdateInput, GrupoUncheckedUpdateInput>
    /**
     * Choose, which Grupo to update.
     */
    where: GrupoWhereUniqueInput
  }


  /**
   * Grupo updateMany
   */
  export type GrupoUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Grupos.
     */
    data: XOR<GrupoUpdateManyMutationInput, GrupoUncheckedUpdateManyInput>
    /**
     * Filter which Grupos to update
     */
    where?: GrupoWhereInput
  }


  /**
   * Grupo upsert
   */
  export type GrupoUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Grupo
     */
    select?: GrupoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GrupoInclude<ExtArgs> | null
    /**
     * The filter to search for the Grupo to update in case it exists.
     */
    where: GrupoWhereUniqueInput
    /**
     * In case the Grupo found by the `where` argument doesn't exist, create a new Grupo with this data.
     */
    create: XOR<GrupoCreateInput, GrupoUncheckedCreateInput>
    /**
     * In case the Grupo was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GrupoUpdateInput, GrupoUncheckedUpdateInput>
  }


  /**
   * Grupo delete
   */
  export type GrupoDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Grupo
     */
    select?: GrupoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GrupoInclude<ExtArgs> | null
    /**
     * Filter which Grupo to delete.
     */
    where: GrupoWhereUniqueInput
  }


  /**
   * Grupo deleteMany
   */
  export type GrupoDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Grupos to delete
     */
    where?: GrupoWhereInput
  }


  /**
   * Grupo.avaliacao
   */
  export type Grupo$avaliacaoArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avaliacao
     */
    select?: AvaliacaoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AvaliacaoInclude<ExtArgs> | null
    where?: AvaliacaoWhereInput
  }


  /**
   * Grupo.alunos
   */
  export type Grupo$alunosArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Aluno
     */
    select?: AlunoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AlunoInclude<ExtArgs> | null
    where?: AlunoWhereInput
    orderBy?: AlunoOrderByWithRelationInput | AlunoOrderByWithRelationInput[]
    cursor?: AlunoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AlunoScalarFieldEnum | AlunoScalarFieldEnum[]
  }


  /**
   * Grupo without action
   */
  export type GrupoDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Grupo
     */
    select?: GrupoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GrupoInclude<ExtArgs> | null
  }



  /**
   * Model Estande
   */

  export type AggregateEstande = {
    _count: EstandeCountAggregateOutputType | null
    _avg: EstandeAvgAggregateOutputType | null
    _sum: EstandeSumAggregateOutputType | null
    _min: EstandeMinAggregateOutputType | null
    _max: EstandeMaxAggregateOutputType | null
  }

  export type EstandeAvgAggregateOutputType = {
    numero: number | null
  }

  export type EstandeSumAggregateOutputType = {
    numero: number | null
  }

  export type EstandeMinAggregateOutputType = {
    numero: number | null
  }

  export type EstandeMaxAggregateOutputType = {
    numero: number | null
  }

  export type EstandeCountAggregateOutputType = {
    numero: number
    _all: number
  }


  export type EstandeAvgAggregateInputType = {
    numero?: true
  }

  export type EstandeSumAggregateInputType = {
    numero?: true
  }

  export type EstandeMinAggregateInputType = {
    numero?: true
  }

  export type EstandeMaxAggregateInputType = {
    numero?: true
  }

  export type EstandeCountAggregateInputType = {
    numero?: true
    _all?: true
  }

  export type EstandeAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Estande to aggregate.
     */
    where?: EstandeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Estandes to fetch.
     */
    orderBy?: EstandeOrderByWithRelationInput | EstandeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EstandeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Estandes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Estandes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Estandes
    **/
    _count?: true | EstandeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EstandeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EstandeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EstandeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EstandeMaxAggregateInputType
  }

  export type GetEstandeAggregateType<T extends EstandeAggregateArgs> = {
        [P in keyof T & keyof AggregateEstande]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEstande[P]>
      : GetScalarType<T[P], AggregateEstande[P]>
  }




  export type EstandeGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: EstandeWhereInput
    orderBy?: EstandeOrderByWithAggregationInput | EstandeOrderByWithAggregationInput[]
    by: EstandeScalarFieldEnum[] | EstandeScalarFieldEnum
    having?: EstandeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EstandeCountAggregateInputType | true
    _avg?: EstandeAvgAggregateInputType
    _sum?: EstandeSumAggregateInputType
    _min?: EstandeMinAggregateInputType
    _max?: EstandeMaxAggregateInputType
  }

  export type EstandeGroupByOutputType = {
    numero: number
    _count: EstandeCountAggregateOutputType | null
    _avg: EstandeAvgAggregateOutputType | null
    _sum: EstandeSumAggregateOutputType | null
    _min: EstandeMinAggregateOutputType | null
    _max: EstandeMaxAggregateOutputType | null
  }

  type GetEstandeGroupByPayload<T extends EstandeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EstandeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EstandeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EstandeGroupByOutputType[P]>
            : GetScalarType<T[P], EstandeGroupByOutputType[P]>
        }
      >
    >


  export type EstandeSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    numero?: boolean
    grupoId?: boolean | Estande$grupoIdArgs<ExtArgs>
    _count?: boolean | EstandeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["estande"]>

  export type EstandeSelectScalar = {
    numero?: boolean
  }

  export type EstandeInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    grupoId?: boolean | Estande$grupoIdArgs<ExtArgs>
    _count?: boolean | EstandeCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $EstandePayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    name: "Estande"
    objects: {
      grupoId: Prisma.$GrupoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetResult<{
      numero: number
    }, ExtArgs["result"]["estande"]>
    composites: {}
  }


  type EstandeGetPayload<S extends boolean | null | undefined | EstandeDefaultArgs> = $Result.GetResult<Prisma.$EstandePayload, S>

  type EstandeCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<EstandeFindManyArgs, 'select' | 'include'> & {
      select?: EstandeCountAggregateInputType | true
    }

  export interface EstandeDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Estande'], meta: { name: 'Estande' } }
    /**
     * Find zero or one Estande that matches the filter.
     * @param {EstandeFindUniqueArgs} args - Arguments to find a Estande
     * @example
     * // Get one Estande
     * const estande = await prisma.estande.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends EstandeFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, EstandeFindUniqueArgs<ExtArgs>>
    ): Prisma__EstandeClient<$Result.GetResult<Prisma.$EstandePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Estande that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {EstandeFindUniqueOrThrowArgs} args - Arguments to find a Estande
     * @example
     * // Get one Estande
     * const estande = await prisma.estande.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends EstandeFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, EstandeFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__EstandeClient<$Result.GetResult<Prisma.$EstandePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Estande that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EstandeFindFirstArgs} args - Arguments to find a Estande
     * @example
     * // Get one Estande
     * const estande = await prisma.estande.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends EstandeFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, EstandeFindFirstArgs<ExtArgs>>
    ): Prisma__EstandeClient<$Result.GetResult<Prisma.$EstandePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Estande that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EstandeFindFirstOrThrowArgs} args - Arguments to find a Estande
     * @example
     * // Get one Estande
     * const estande = await prisma.estande.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends EstandeFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, EstandeFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__EstandeClient<$Result.GetResult<Prisma.$EstandePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Estandes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EstandeFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Estandes
     * const estandes = await prisma.estande.findMany()
     * 
     * // Get first 10 Estandes
     * const estandes = await prisma.estande.findMany({ take: 10 })
     * 
     * // Only select the `numero`
     * const estandeWithNumeroOnly = await prisma.estande.findMany({ select: { numero: true } })
     * 
    **/
    findMany<T extends EstandeFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, EstandeFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EstandePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Estande.
     * @param {EstandeCreateArgs} args - Arguments to create a Estande.
     * @example
     * // Create one Estande
     * const Estande = await prisma.estande.create({
     *   data: {
     *     // ... data to create a Estande
     *   }
     * })
     * 
    **/
    create<T extends EstandeCreateArgs<ExtArgs>>(
      args: SelectSubset<T, EstandeCreateArgs<ExtArgs>>
    ): Prisma__EstandeClient<$Result.GetResult<Prisma.$EstandePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Delete a Estande.
     * @param {EstandeDeleteArgs} args - Arguments to delete one Estande.
     * @example
     * // Delete one Estande
     * const Estande = await prisma.estande.delete({
     *   where: {
     *     // ... filter to delete one Estande
     *   }
     * })
     * 
    **/
    delete<T extends EstandeDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, EstandeDeleteArgs<ExtArgs>>
    ): Prisma__EstandeClient<$Result.GetResult<Prisma.$EstandePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Estande.
     * @param {EstandeUpdateArgs} args - Arguments to update one Estande.
     * @example
     * // Update one Estande
     * const estande = await prisma.estande.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends EstandeUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, EstandeUpdateArgs<ExtArgs>>
    ): Prisma__EstandeClient<$Result.GetResult<Prisma.$EstandePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Estandes.
     * @param {EstandeDeleteManyArgs} args - Arguments to filter Estandes to delete.
     * @example
     * // Delete a few Estandes
     * const { count } = await prisma.estande.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends EstandeDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, EstandeDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Estandes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EstandeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Estandes
     * const estande = await prisma.estande.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends EstandeUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, EstandeUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Estande.
     * @param {EstandeUpsertArgs} args - Arguments to update or create a Estande.
     * @example
     * // Update or create a Estande
     * const estande = await prisma.estande.upsert({
     *   create: {
     *     // ... data to create a Estande
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Estande we want to update
     *   }
     * })
    **/
    upsert<T extends EstandeUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, EstandeUpsertArgs<ExtArgs>>
    ): Prisma__EstandeClient<$Result.GetResult<Prisma.$EstandePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Estandes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EstandeCountArgs} args - Arguments to filter Estandes to count.
     * @example
     * // Count the number of Estandes
     * const count = await prisma.estande.count({
     *   where: {
     *     // ... the filter for the Estandes we want to count
     *   }
     * })
    **/
    count<T extends EstandeCountArgs>(
      args?: Subset<T, EstandeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EstandeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Estande.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EstandeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EstandeAggregateArgs>(args: Subset<T, EstandeAggregateArgs>): Prisma.PrismaPromise<GetEstandeAggregateType<T>>

    /**
     * Group by Estande.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EstandeGroupByArgs} args - Group by arguments.
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
      T extends EstandeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EstandeGroupByArgs['orderBy'] }
        : { orderBy?: EstandeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EstandeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEstandeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Estande model
   */
  readonly fields: EstandeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Estande.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EstandeClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    grupoId<T extends Estande$grupoIdArgs<ExtArgs> = {}>(args?: Subset<T, Estande$grupoIdArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GrupoPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Estande model
   */ 
  interface EstandeFieldRefs {
    readonly numero: FieldRef<"Estande", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * Estande findUnique
   */
  export type EstandeFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estande
     */
    select?: EstandeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EstandeInclude<ExtArgs> | null
    /**
     * Filter, which Estande to fetch.
     */
    where: EstandeWhereUniqueInput
  }


  /**
   * Estande findUniqueOrThrow
   */
  export type EstandeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estande
     */
    select?: EstandeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EstandeInclude<ExtArgs> | null
    /**
     * Filter, which Estande to fetch.
     */
    where: EstandeWhereUniqueInput
  }


  /**
   * Estande findFirst
   */
  export type EstandeFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estande
     */
    select?: EstandeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EstandeInclude<ExtArgs> | null
    /**
     * Filter, which Estande to fetch.
     */
    where?: EstandeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Estandes to fetch.
     */
    orderBy?: EstandeOrderByWithRelationInput | EstandeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Estandes.
     */
    cursor?: EstandeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Estandes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Estandes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Estandes.
     */
    distinct?: EstandeScalarFieldEnum | EstandeScalarFieldEnum[]
  }


  /**
   * Estande findFirstOrThrow
   */
  export type EstandeFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estande
     */
    select?: EstandeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EstandeInclude<ExtArgs> | null
    /**
     * Filter, which Estande to fetch.
     */
    where?: EstandeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Estandes to fetch.
     */
    orderBy?: EstandeOrderByWithRelationInput | EstandeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Estandes.
     */
    cursor?: EstandeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Estandes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Estandes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Estandes.
     */
    distinct?: EstandeScalarFieldEnum | EstandeScalarFieldEnum[]
  }


  /**
   * Estande findMany
   */
  export type EstandeFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estande
     */
    select?: EstandeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EstandeInclude<ExtArgs> | null
    /**
     * Filter, which Estandes to fetch.
     */
    where?: EstandeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Estandes to fetch.
     */
    orderBy?: EstandeOrderByWithRelationInput | EstandeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Estandes.
     */
    cursor?: EstandeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Estandes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Estandes.
     */
    skip?: number
    distinct?: EstandeScalarFieldEnum | EstandeScalarFieldEnum[]
  }


  /**
   * Estande create
   */
  export type EstandeCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estande
     */
    select?: EstandeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EstandeInclude<ExtArgs> | null
    /**
     * The data needed to create a Estande.
     */
    data: XOR<EstandeCreateInput, EstandeUncheckedCreateInput>
  }


  /**
   * Estande update
   */
  export type EstandeUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estande
     */
    select?: EstandeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EstandeInclude<ExtArgs> | null
    /**
     * The data needed to update a Estande.
     */
    data: XOR<EstandeUpdateInput, EstandeUncheckedUpdateInput>
    /**
     * Choose, which Estande to update.
     */
    where: EstandeWhereUniqueInput
  }


  /**
   * Estande updateMany
   */
  export type EstandeUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Estandes.
     */
    data: XOR<EstandeUpdateManyMutationInput, EstandeUncheckedUpdateManyInput>
    /**
     * Filter which Estandes to update
     */
    where?: EstandeWhereInput
  }


  /**
   * Estande upsert
   */
  export type EstandeUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estande
     */
    select?: EstandeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EstandeInclude<ExtArgs> | null
    /**
     * The filter to search for the Estande to update in case it exists.
     */
    where: EstandeWhereUniqueInput
    /**
     * In case the Estande found by the `where` argument doesn't exist, create a new Estande with this data.
     */
    create: XOR<EstandeCreateInput, EstandeUncheckedCreateInput>
    /**
     * In case the Estande was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EstandeUpdateInput, EstandeUncheckedUpdateInput>
  }


  /**
   * Estande delete
   */
  export type EstandeDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estande
     */
    select?: EstandeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EstandeInclude<ExtArgs> | null
    /**
     * Filter which Estande to delete.
     */
    where: EstandeWhereUniqueInput
  }


  /**
   * Estande deleteMany
   */
  export type EstandeDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Estandes to delete
     */
    where?: EstandeWhereInput
  }


  /**
   * Estande.grupoId
   */
  export type Estande$grupoIdArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Grupo
     */
    select?: GrupoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GrupoInclude<ExtArgs> | null
    where?: GrupoWhereInput
    orderBy?: GrupoOrderByWithRelationInput | GrupoOrderByWithRelationInput[]
    cursor?: GrupoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GrupoScalarFieldEnum | GrupoScalarFieldEnum[]
  }


  /**
   * Estande without action
   */
  export type EstandeDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estande
     */
    select?: EstandeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EstandeInclude<ExtArgs> | null
  }



  /**
   * Model Avaliacao
   */

  export type AggregateAvaliacao = {
    _count: AvaliacaoCountAggregateOutputType | null
    _avg: AvaliacaoAvgAggregateOutputType | null
    _sum: AvaliacaoSumAggregateOutputType | null
    _min: AvaliacaoMinAggregateOutputType | null
    _max: AvaliacaoMaxAggregateOutputType | null
  }

  export type AvaliacaoAvgAggregateOutputType = {
    nota1: number | null
    nota2: number | null
    notaFinal: number | null
  }

  export type AvaliacaoSumAggregateOutputType = {
    nota1: number | null
    nota2: number | null
    notaFinal: number | null
  }

  export type AvaliacaoMinAggregateOutputType = {
    idGrupo: string | null
    nota1: number | null
    nota2: number | null
    notaFinal: number | null
  }

  export type AvaliacaoMaxAggregateOutputType = {
    idGrupo: string | null
    nota1: number | null
    nota2: number | null
    notaFinal: number | null
  }

  export type AvaliacaoCountAggregateOutputType = {
    idGrupo: number
    nota1: number
    nota2: number
    notaFinal: number
    _all: number
  }


  export type AvaliacaoAvgAggregateInputType = {
    nota1?: true
    nota2?: true
    notaFinal?: true
  }

  export type AvaliacaoSumAggregateInputType = {
    nota1?: true
    nota2?: true
    notaFinal?: true
  }

  export type AvaliacaoMinAggregateInputType = {
    idGrupo?: true
    nota1?: true
    nota2?: true
    notaFinal?: true
  }

  export type AvaliacaoMaxAggregateInputType = {
    idGrupo?: true
    nota1?: true
    nota2?: true
    notaFinal?: true
  }

  export type AvaliacaoCountAggregateInputType = {
    idGrupo?: true
    nota1?: true
    nota2?: true
    notaFinal?: true
    _all?: true
  }

  export type AvaliacaoAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Avaliacao to aggregate.
     */
    where?: AvaliacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Avaliacaos to fetch.
     */
    orderBy?: AvaliacaoOrderByWithRelationInput | AvaliacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AvaliacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Avaliacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Avaliacaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Avaliacaos
    **/
    _count?: true | AvaliacaoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AvaliacaoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AvaliacaoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AvaliacaoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AvaliacaoMaxAggregateInputType
  }

  export type GetAvaliacaoAggregateType<T extends AvaliacaoAggregateArgs> = {
        [P in keyof T & keyof AggregateAvaliacao]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAvaliacao[P]>
      : GetScalarType<T[P], AggregateAvaliacao[P]>
  }




  export type AvaliacaoGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: AvaliacaoWhereInput
    orderBy?: AvaliacaoOrderByWithAggregationInput | AvaliacaoOrderByWithAggregationInput[]
    by: AvaliacaoScalarFieldEnum[] | AvaliacaoScalarFieldEnum
    having?: AvaliacaoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AvaliacaoCountAggregateInputType | true
    _avg?: AvaliacaoAvgAggregateInputType
    _sum?: AvaliacaoSumAggregateInputType
    _min?: AvaliacaoMinAggregateInputType
    _max?: AvaliacaoMaxAggregateInputType
  }

  export type AvaliacaoGroupByOutputType = {
    idGrupo: string
    nota1: number
    nota2: number
    notaFinal: number
    _count: AvaliacaoCountAggregateOutputType | null
    _avg: AvaliacaoAvgAggregateOutputType | null
    _sum: AvaliacaoSumAggregateOutputType | null
    _min: AvaliacaoMinAggregateOutputType | null
    _max: AvaliacaoMaxAggregateOutputType | null
  }

  type GetAvaliacaoGroupByPayload<T extends AvaliacaoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AvaliacaoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AvaliacaoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AvaliacaoGroupByOutputType[P]>
            : GetScalarType<T[P], AvaliacaoGroupByOutputType[P]>
        }
      >
    >


  export type AvaliacaoSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idGrupo?: boolean
    nota1?: boolean
    nota2?: boolean
    notaFinal?: boolean
    nomeGrupo?: boolean | GrupoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["avaliacao"]>

  export type AvaliacaoSelectScalar = {
    idGrupo?: boolean
    nota1?: boolean
    nota2?: boolean
    notaFinal?: boolean
  }

  export type AvaliacaoInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    nomeGrupo?: boolean | GrupoDefaultArgs<ExtArgs>
  }


  export type $AvaliacaoPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    name: "Avaliacao"
    objects: {
      nomeGrupo: Prisma.$GrupoPayload<ExtArgs>
    }
    scalars: $Extensions.GetResult<{
      idGrupo: string
      nota1: number
      nota2: number
      notaFinal: number
    }, ExtArgs["result"]["avaliacao"]>
    composites: {}
  }


  type AvaliacaoGetPayload<S extends boolean | null | undefined | AvaliacaoDefaultArgs> = $Result.GetResult<Prisma.$AvaliacaoPayload, S>

  type AvaliacaoCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<AvaliacaoFindManyArgs, 'select' | 'include'> & {
      select?: AvaliacaoCountAggregateInputType | true
    }

  export interface AvaliacaoDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Avaliacao'], meta: { name: 'Avaliacao' } }
    /**
     * Find zero or one Avaliacao that matches the filter.
     * @param {AvaliacaoFindUniqueArgs} args - Arguments to find a Avaliacao
     * @example
     * // Get one Avaliacao
     * const avaliacao = await prisma.avaliacao.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends AvaliacaoFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, AvaliacaoFindUniqueArgs<ExtArgs>>
    ): Prisma__AvaliacaoClient<$Result.GetResult<Prisma.$AvaliacaoPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Avaliacao that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {AvaliacaoFindUniqueOrThrowArgs} args - Arguments to find a Avaliacao
     * @example
     * // Get one Avaliacao
     * const avaliacao = await prisma.avaliacao.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends AvaliacaoFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, AvaliacaoFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__AvaliacaoClient<$Result.GetResult<Prisma.$AvaliacaoPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Avaliacao that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvaliacaoFindFirstArgs} args - Arguments to find a Avaliacao
     * @example
     * // Get one Avaliacao
     * const avaliacao = await prisma.avaliacao.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends AvaliacaoFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, AvaliacaoFindFirstArgs<ExtArgs>>
    ): Prisma__AvaliacaoClient<$Result.GetResult<Prisma.$AvaliacaoPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Avaliacao that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvaliacaoFindFirstOrThrowArgs} args - Arguments to find a Avaliacao
     * @example
     * // Get one Avaliacao
     * const avaliacao = await prisma.avaliacao.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends AvaliacaoFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, AvaliacaoFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__AvaliacaoClient<$Result.GetResult<Prisma.$AvaliacaoPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Avaliacaos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvaliacaoFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Avaliacaos
     * const avaliacaos = await prisma.avaliacao.findMany()
     * 
     * // Get first 10 Avaliacaos
     * const avaliacaos = await prisma.avaliacao.findMany({ take: 10 })
     * 
     * // Only select the `idGrupo`
     * const avaliacaoWithIdGrupoOnly = await prisma.avaliacao.findMany({ select: { idGrupo: true } })
     * 
    **/
    findMany<T extends AvaliacaoFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AvaliacaoFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AvaliacaoPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Avaliacao.
     * @param {AvaliacaoCreateArgs} args - Arguments to create a Avaliacao.
     * @example
     * // Create one Avaliacao
     * const Avaliacao = await prisma.avaliacao.create({
     *   data: {
     *     // ... data to create a Avaliacao
     *   }
     * })
     * 
    **/
    create<T extends AvaliacaoCreateArgs<ExtArgs>>(
      args: SelectSubset<T, AvaliacaoCreateArgs<ExtArgs>>
    ): Prisma__AvaliacaoClient<$Result.GetResult<Prisma.$AvaliacaoPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Delete a Avaliacao.
     * @param {AvaliacaoDeleteArgs} args - Arguments to delete one Avaliacao.
     * @example
     * // Delete one Avaliacao
     * const Avaliacao = await prisma.avaliacao.delete({
     *   where: {
     *     // ... filter to delete one Avaliacao
     *   }
     * })
     * 
    **/
    delete<T extends AvaliacaoDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, AvaliacaoDeleteArgs<ExtArgs>>
    ): Prisma__AvaliacaoClient<$Result.GetResult<Prisma.$AvaliacaoPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Avaliacao.
     * @param {AvaliacaoUpdateArgs} args - Arguments to update one Avaliacao.
     * @example
     * // Update one Avaliacao
     * const avaliacao = await prisma.avaliacao.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends AvaliacaoUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, AvaliacaoUpdateArgs<ExtArgs>>
    ): Prisma__AvaliacaoClient<$Result.GetResult<Prisma.$AvaliacaoPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Avaliacaos.
     * @param {AvaliacaoDeleteManyArgs} args - Arguments to filter Avaliacaos to delete.
     * @example
     * // Delete a few Avaliacaos
     * const { count } = await prisma.avaliacao.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends AvaliacaoDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AvaliacaoDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Avaliacaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvaliacaoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Avaliacaos
     * const avaliacao = await prisma.avaliacao.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends AvaliacaoUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, AvaliacaoUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Avaliacao.
     * @param {AvaliacaoUpsertArgs} args - Arguments to update or create a Avaliacao.
     * @example
     * // Update or create a Avaliacao
     * const avaliacao = await prisma.avaliacao.upsert({
     *   create: {
     *     // ... data to create a Avaliacao
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Avaliacao we want to update
     *   }
     * })
    **/
    upsert<T extends AvaliacaoUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, AvaliacaoUpsertArgs<ExtArgs>>
    ): Prisma__AvaliacaoClient<$Result.GetResult<Prisma.$AvaliacaoPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Avaliacaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvaliacaoCountArgs} args - Arguments to filter Avaliacaos to count.
     * @example
     * // Count the number of Avaliacaos
     * const count = await prisma.avaliacao.count({
     *   where: {
     *     // ... the filter for the Avaliacaos we want to count
     *   }
     * })
    **/
    count<T extends AvaliacaoCountArgs>(
      args?: Subset<T, AvaliacaoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AvaliacaoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Avaliacao.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvaliacaoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AvaliacaoAggregateArgs>(args: Subset<T, AvaliacaoAggregateArgs>): Prisma.PrismaPromise<GetAvaliacaoAggregateType<T>>

    /**
     * Group by Avaliacao.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvaliacaoGroupByArgs} args - Group by arguments.
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
      T extends AvaliacaoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AvaliacaoGroupByArgs['orderBy'] }
        : { orderBy?: AvaliacaoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AvaliacaoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAvaliacaoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Avaliacao model
   */
  readonly fields: AvaliacaoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Avaliacao.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AvaliacaoClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    nomeGrupo<T extends GrupoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, GrupoDefaultArgs<ExtArgs>>): Prisma__GrupoClient<$Result.GetResult<Prisma.$GrupoPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Avaliacao model
   */ 
  interface AvaliacaoFieldRefs {
    readonly idGrupo: FieldRef<"Avaliacao", 'String'>
    readonly nota1: FieldRef<"Avaliacao", 'Float'>
    readonly nota2: FieldRef<"Avaliacao", 'Float'>
    readonly notaFinal: FieldRef<"Avaliacao", 'Float'>
  }
    

  // Custom InputTypes

  /**
   * Avaliacao findUnique
   */
  export type AvaliacaoFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avaliacao
     */
    select?: AvaliacaoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AvaliacaoInclude<ExtArgs> | null
    /**
     * Filter, which Avaliacao to fetch.
     */
    where: AvaliacaoWhereUniqueInput
  }


  /**
   * Avaliacao findUniqueOrThrow
   */
  export type AvaliacaoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avaliacao
     */
    select?: AvaliacaoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AvaliacaoInclude<ExtArgs> | null
    /**
     * Filter, which Avaliacao to fetch.
     */
    where: AvaliacaoWhereUniqueInput
  }


  /**
   * Avaliacao findFirst
   */
  export type AvaliacaoFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avaliacao
     */
    select?: AvaliacaoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AvaliacaoInclude<ExtArgs> | null
    /**
     * Filter, which Avaliacao to fetch.
     */
    where?: AvaliacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Avaliacaos to fetch.
     */
    orderBy?: AvaliacaoOrderByWithRelationInput | AvaliacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Avaliacaos.
     */
    cursor?: AvaliacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Avaliacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Avaliacaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Avaliacaos.
     */
    distinct?: AvaliacaoScalarFieldEnum | AvaliacaoScalarFieldEnum[]
  }


  /**
   * Avaliacao findFirstOrThrow
   */
  export type AvaliacaoFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avaliacao
     */
    select?: AvaliacaoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AvaliacaoInclude<ExtArgs> | null
    /**
     * Filter, which Avaliacao to fetch.
     */
    where?: AvaliacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Avaliacaos to fetch.
     */
    orderBy?: AvaliacaoOrderByWithRelationInput | AvaliacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Avaliacaos.
     */
    cursor?: AvaliacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Avaliacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Avaliacaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Avaliacaos.
     */
    distinct?: AvaliacaoScalarFieldEnum | AvaliacaoScalarFieldEnum[]
  }


  /**
   * Avaliacao findMany
   */
  export type AvaliacaoFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avaliacao
     */
    select?: AvaliacaoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AvaliacaoInclude<ExtArgs> | null
    /**
     * Filter, which Avaliacaos to fetch.
     */
    where?: AvaliacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Avaliacaos to fetch.
     */
    orderBy?: AvaliacaoOrderByWithRelationInput | AvaliacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Avaliacaos.
     */
    cursor?: AvaliacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Avaliacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Avaliacaos.
     */
    skip?: number
    distinct?: AvaliacaoScalarFieldEnum | AvaliacaoScalarFieldEnum[]
  }


  /**
   * Avaliacao create
   */
  export type AvaliacaoCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avaliacao
     */
    select?: AvaliacaoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AvaliacaoInclude<ExtArgs> | null
    /**
     * The data needed to create a Avaliacao.
     */
    data: XOR<AvaliacaoCreateInput, AvaliacaoUncheckedCreateInput>
  }


  /**
   * Avaliacao update
   */
  export type AvaliacaoUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avaliacao
     */
    select?: AvaliacaoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AvaliacaoInclude<ExtArgs> | null
    /**
     * The data needed to update a Avaliacao.
     */
    data: XOR<AvaliacaoUpdateInput, AvaliacaoUncheckedUpdateInput>
    /**
     * Choose, which Avaliacao to update.
     */
    where: AvaliacaoWhereUniqueInput
  }


  /**
   * Avaliacao updateMany
   */
  export type AvaliacaoUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Avaliacaos.
     */
    data: XOR<AvaliacaoUpdateManyMutationInput, AvaliacaoUncheckedUpdateManyInput>
    /**
     * Filter which Avaliacaos to update
     */
    where?: AvaliacaoWhereInput
  }


  /**
   * Avaliacao upsert
   */
  export type AvaliacaoUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avaliacao
     */
    select?: AvaliacaoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AvaliacaoInclude<ExtArgs> | null
    /**
     * The filter to search for the Avaliacao to update in case it exists.
     */
    where: AvaliacaoWhereUniqueInput
    /**
     * In case the Avaliacao found by the `where` argument doesn't exist, create a new Avaliacao with this data.
     */
    create: XOR<AvaliacaoCreateInput, AvaliacaoUncheckedCreateInput>
    /**
     * In case the Avaliacao was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AvaliacaoUpdateInput, AvaliacaoUncheckedUpdateInput>
  }


  /**
   * Avaliacao delete
   */
  export type AvaliacaoDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avaliacao
     */
    select?: AvaliacaoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AvaliacaoInclude<ExtArgs> | null
    /**
     * Filter which Avaliacao to delete.
     */
    where: AvaliacaoWhereUniqueInput
  }


  /**
   * Avaliacao deleteMany
   */
  export type AvaliacaoDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Avaliacaos to delete
     */
    where?: AvaliacaoWhereInput
  }


  /**
   * Avaliacao without action
   */
  export type AvaliacaoDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avaliacao
     */
    select?: AvaliacaoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AvaliacaoInclude<ExtArgs> | null
  }



  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const AlunoScalarFieldEnum: {
    id: 'id',
    email: 'email',
    nome: 'nome',
    matricula: 'matricula',
    telefone: 'telefone',
    grupoId: 'grupoId',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type AlunoScalarFieldEnum = (typeof AlunoScalarFieldEnum)[keyof typeof AlunoScalarFieldEnum]


  export const ProfessorScalarFieldEnum: {
    id: 'id',
    email: 'email',
    nome: 'nome',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type ProfessorScalarFieldEnum = (typeof ProfessorScalarFieldEnum)[keyof typeof ProfessorScalarFieldEnum]


  export const GrupoScalarFieldEnum: {
    id: 'id',
    estandeId: 'estandeId',
    nomeGrupo: 'nomeGrupo',
    nomeProjeto: 'nomeProjeto',
    diaApresentacao: 'diaApresentacao',
    alunoId: 'alunoId'
  };

  export type GrupoScalarFieldEnum = (typeof GrupoScalarFieldEnum)[keyof typeof GrupoScalarFieldEnum]


  export const EstandeScalarFieldEnum: {
    numero: 'numero'
  };

  export type EstandeScalarFieldEnum = (typeof EstandeScalarFieldEnum)[keyof typeof EstandeScalarFieldEnum]


  export const AvaliacaoScalarFieldEnum: {
    idGrupo: 'idGrupo',
    nota1: 'nota1',
    nota2: 'nota2',
    notaFinal: 'notaFinal'
  };

  export type AvaliacaoScalarFieldEnum = (typeof AvaliacaoScalarFieldEnum)[keyof typeof AvaliacaoScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type AlunoWhereInput = {
    AND?: AlunoWhereInput | AlunoWhereInput[]
    OR?: AlunoWhereInput[]
    NOT?: AlunoWhereInput | AlunoWhereInput[]
    id?: StringFilter<"Aluno"> | string
    email?: StringFilter<"Aluno"> | string
    nome?: StringFilter<"Aluno"> | string
    matricula?: IntFilter<"Aluno"> | number
    telefone?: IntFilter<"Aluno"> | number
    grupoId?: StringNullableFilter<"Aluno"> | string | null
    created_at?: DateTimeFilter<"Aluno"> | Date | string
    updated_at?: DateTimeFilter<"Aluno"> | Date | string
    grupo?: XOR<GrupoNullableRelationFilter, GrupoWhereInput> | null
    grupoAluno?: XOR<GrupoNullableRelationFilter, GrupoWhereInput> | null
  }

  export type AlunoOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    nome?: SortOrder
    matricula?: SortOrder
    telefone?: SortOrder
    grupoId?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    grupo?: GrupoOrderByWithRelationInput
    grupoAluno?: GrupoOrderByWithRelationInput
  }

  export type AlunoWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    matricula?: number
    telefone?: number
    AND?: AlunoWhereInput | AlunoWhereInput[]
    OR?: AlunoWhereInput[]
    NOT?: AlunoWhereInput | AlunoWhereInput[]
    nome?: StringFilter<"Aluno"> | string
    grupoId?: StringNullableFilter<"Aluno"> | string | null
    created_at?: DateTimeFilter<"Aluno"> | Date | string
    updated_at?: DateTimeFilter<"Aluno"> | Date | string
    grupo?: XOR<GrupoNullableRelationFilter, GrupoWhereInput> | null
    grupoAluno?: XOR<GrupoNullableRelationFilter, GrupoWhereInput> | null
  }, "id" | "email" | "matricula" | "telefone">

  export type AlunoOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    nome?: SortOrder
    matricula?: SortOrder
    telefone?: SortOrder
    grupoId?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: AlunoCountOrderByAggregateInput
    _avg?: AlunoAvgOrderByAggregateInput
    _max?: AlunoMaxOrderByAggregateInput
    _min?: AlunoMinOrderByAggregateInput
    _sum?: AlunoSumOrderByAggregateInput
  }

  export type AlunoScalarWhereWithAggregatesInput = {
    AND?: AlunoScalarWhereWithAggregatesInput | AlunoScalarWhereWithAggregatesInput[]
    OR?: AlunoScalarWhereWithAggregatesInput[]
    NOT?: AlunoScalarWhereWithAggregatesInput | AlunoScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Aluno"> | string
    email?: StringWithAggregatesFilter<"Aluno"> | string
    nome?: StringWithAggregatesFilter<"Aluno"> | string
    matricula?: IntWithAggregatesFilter<"Aluno"> | number
    telefone?: IntWithAggregatesFilter<"Aluno"> | number
    grupoId?: StringNullableWithAggregatesFilter<"Aluno"> | string | null
    created_at?: DateTimeWithAggregatesFilter<"Aluno"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Aluno"> | Date | string
  }

  export type ProfessorWhereInput = {
    AND?: ProfessorWhereInput | ProfessorWhereInput[]
    OR?: ProfessorWhereInput[]
    NOT?: ProfessorWhereInput | ProfessorWhereInput[]
    id?: StringFilter<"Professor"> | string
    email?: StringFilter<"Professor"> | string
    nome?: StringFilter<"Professor"> | string
    created_at?: DateTimeFilter<"Professor"> | Date | string
    updated_at?: DateTimeFilter<"Professor"> | Date | string
  }

  export type ProfessorOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    nome?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ProfessorWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: ProfessorWhereInput | ProfessorWhereInput[]
    OR?: ProfessorWhereInput[]
    NOT?: ProfessorWhereInput | ProfessorWhereInput[]
    nome?: StringFilter<"Professor"> | string
    created_at?: DateTimeFilter<"Professor"> | Date | string
    updated_at?: DateTimeFilter<"Professor"> | Date | string
  }, "id" | "email">

  export type ProfessorOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    nome?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: ProfessorCountOrderByAggregateInput
    _max?: ProfessorMaxOrderByAggregateInput
    _min?: ProfessorMinOrderByAggregateInput
  }

  export type ProfessorScalarWhereWithAggregatesInput = {
    AND?: ProfessorScalarWhereWithAggregatesInput | ProfessorScalarWhereWithAggregatesInput[]
    OR?: ProfessorScalarWhereWithAggregatesInput[]
    NOT?: ProfessorScalarWhereWithAggregatesInput | ProfessorScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Professor"> | string
    email?: StringWithAggregatesFilter<"Professor"> | string
    nome?: StringWithAggregatesFilter<"Professor"> | string
    created_at?: DateTimeWithAggregatesFilter<"Professor"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Professor"> | Date | string
  }

  export type GrupoWhereInput = {
    AND?: GrupoWhereInput | GrupoWhereInput[]
    OR?: GrupoWhereInput[]
    NOT?: GrupoWhereInput | GrupoWhereInput[]
    id?: StringFilter<"Grupo"> | string
    estandeId?: IntFilter<"Grupo"> | number
    nomeGrupo?: StringFilter<"Grupo"> | string
    nomeProjeto?: StringFilter<"Grupo"> | string
    diaApresentacao?: DateTimeFilter<"Grupo"> | Date | string
    alunoId?: StringFilter<"Grupo"> | string
    avaliacao?: XOR<AvaliacaoNullableRelationFilter, AvaliacaoWhereInput> | null
    lider?: XOR<AlunoRelationFilter, AlunoWhereInput>
    alunos?: AlunoListRelationFilter
    numeroEstande?: XOR<EstandeRelationFilter, EstandeWhereInput>
  }

  export type GrupoOrderByWithRelationInput = {
    id?: SortOrder
    estandeId?: SortOrder
    nomeGrupo?: SortOrder
    nomeProjeto?: SortOrder
    diaApresentacao?: SortOrder
    alunoId?: SortOrder
    avaliacao?: AvaliacaoOrderByWithRelationInput
    lider?: AlunoOrderByWithRelationInput
    alunos?: AlunoOrderByRelationAggregateInput
    numeroEstande?: EstandeOrderByWithRelationInput
  }

  export type GrupoWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    estandeId?: number
    nomeGrupo?: string
    nomeProjeto?: string
    alunoId?: string
    AND?: GrupoWhereInput | GrupoWhereInput[]
    OR?: GrupoWhereInput[]
    NOT?: GrupoWhereInput | GrupoWhereInput[]
    diaApresentacao?: DateTimeFilter<"Grupo"> | Date | string
    avaliacao?: XOR<AvaliacaoNullableRelationFilter, AvaliacaoWhereInput> | null
    lider?: XOR<AlunoRelationFilter, AlunoWhereInput>
    alunos?: AlunoListRelationFilter
    numeroEstande?: XOR<EstandeRelationFilter, EstandeWhereInput>
  }, "id" | "estandeId" | "nomeGrupo" | "nomeProjeto" | "alunoId">

  export type GrupoOrderByWithAggregationInput = {
    id?: SortOrder
    estandeId?: SortOrder
    nomeGrupo?: SortOrder
    nomeProjeto?: SortOrder
    diaApresentacao?: SortOrder
    alunoId?: SortOrder
    _count?: GrupoCountOrderByAggregateInput
    _avg?: GrupoAvgOrderByAggregateInput
    _max?: GrupoMaxOrderByAggregateInput
    _min?: GrupoMinOrderByAggregateInput
    _sum?: GrupoSumOrderByAggregateInput
  }

  export type GrupoScalarWhereWithAggregatesInput = {
    AND?: GrupoScalarWhereWithAggregatesInput | GrupoScalarWhereWithAggregatesInput[]
    OR?: GrupoScalarWhereWithAggregatesInput[]
    NOT?: GrupoScalarWhereWithAggregatesInput | GrupoScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Grupo"> | string
    estandeId?: IntWithAggregatesFilter<"Grupo"> | number
    nomeGrupo?: StringWithAggregatesFilter<"Grupo"> | string
    nomeProjeto?: StringWithAggregatesFilter<"Grupo"> | string
    diaApresentacao?: DateTimeWithAggregatesFilter<"Grupo"> | Date | string
    alunoId?: StringWithAggregatesFilter<"Grupo"> | string
  }

  export type EstandeWhereInput = {
    AND?: EstandeWhereInput | EstandeWhereInput[]
    OR?: EstandeWhereInput[]
    NOT?: EstandeWhereInput | EstandeWhereInput[]
    numero?: IntFilter<"Estande"> | number
    grupoId?: GrupoListRelationFilter
  }

  export type EstandeOrderByWithRelationInput = {
    numero?: SortOrder
    grupoId?: GrupoOrderByRelationAggregateInput
  }

  export type EstandeWhereUniqueInput = Prisma.AtLeast<{
    numero?: number
    AND?: EstandeWhereInput | EstandeWhereInput[]
    OR?: EstandeWhereInput[]
    NOT?: EstandeWhereInput | EstandeWhereInput[]
    grupoId?: GrupoListRelationFilter
  }, "numero" | "numero">

  export type EstandeOrderByWithAggregationInput = {
    numero?: SortOrder
    _count?: EstandeCountOrderByAggregateInput
    _avg?: EstandeAvgOrderByAggregateInput
    _max?: EstandeMaxOrderByAggregateInput
    _min?: EstandeMinOrderByAggregateInput
    _sum?: EstandeSumOrderByAggregateInput
  }

  export type EstandeScalarWhereWithAggregatesInput = {
    AND?: EstandeScalarWhereWithAggregatesInput | EstandeScalarWhereWithAggregatesInput[]
    OR?: EstandeScalarWhereWithAggregatesInput[]
    NOT?: EstandeScalarWhereWithAggregatesInput | EstandeScalarWhereWithAggregatesInput[]
    numero?: IntWithAggregatesFilter<"Estande"> | number
  }

  export type AvaliacaoWhereInput = {
    AND?: AvaliacaoWhereInput | AvaliacaoWhereInput[]
    OR?: AvaliacaoWhereInput[]
    NOT?: AvaliacaoWhereInput | AvaliacaoWhereInput[]
    idGrupo?: StringFilter<"Avaliacao"> | string
    nota1?: FloatFilter<"Avaliacao"> | number
    nota2?: FloatFilter<"Avaliacao"> | number
    notaFinal?: FloatFilter<"Avaliacao"> | number
    nomeGrupo?: XOR<GrupoRelationFilter, GrupoWhereInput>
  }

  export type AvaliacaoOrderByWithRelationInput = {
    idGrupo?: SortOrder
    nota1?: SortOrder
    nota2?: SortOrder
    notaFinal?: SortOrder
    nomeGrupo?: GrupoOrderByWithRelationInput
  }

  export type AvaliacaoWhereUniqueInput = Prisma.AtLeast<{
    idGrupo?: string
    AND?: AvaliacaoWhereInput | AvaliacaoWhereInput[]
    OR?: AvaliacaoWhereInput[]
    NOT?: AvaliacaoWhereInput | AvaliacaoWhereInput[]
    nota1?: FloatFilter<"Avaliacao"> | number
    nota2?: FloatFilter<"Avaliacao"> | number
    notaFinal?: FloatFilter<"Avaliacao"> | number
    nomeGrupo?: XOR<GrupoRelationFilter, GrupoWhereInput>
  }, "idGrupo">

  export type AvaliacaoOrderByWithAggregationInput = {
    idGrupo?: SortOrder
    nota1?: SortOrder
    nota2?: SortOrder
    notaFinal?: SortOrder
    _count?: AvaliacaoCountOrderByAggregateInput
    _avg?: AvaliacaoAvgOrderByAggregateInput
    _max?: AvaliacaoMaxOrderByAggregateInput
    _min?: AvaliacaoMinOrderByAggregateInput
    _sum?: AvaliacaoSumOrderByAggregateInput
  }

  export type AvaliacaoScalarWhereWithAggregatesInput = {
    AND?: AvaliacaoScalarWhereWithAggregatesInput | AvaliacaoScalarWhereWithAggregatesInput[]
    OR?: AvaliacaoScalarWhereWithAggregatesInput[]
    NOT?: AvaliacaoScalarWhereWithAggregatesInput | AvaliacaoScalarWhereWithAggregatesInput[]
    idGrupo?: StringWithAggregatesFilter<"Avaliacao"> | string
    nota1?: FloatWithAggregatesFilter<"Avaliacao"> | number
    nota2?: FloatWithAggregatesFilter<"Avaliacao"> | number
    notaFinal?: FloatWithAggregatesFilter<"Avaliacao"> | number
  }

  export type AlunoCreateInput = {
    id?: string
    email: string
    nome: string
    matricula: number
    telefone: number
    created_at?: Date | string
    updated_at?: Date | string
    grupo?: GrupoCreateNestedOneWithoutLiderInput
    grupoAluno?: GrupoCreateNestedOneWithoutAlunosInput
  }

  export type AlunoUncheckedCreateInput = {
    id?: string
    email: string
    nome: string
    matricula: number
    telefone: number
    grupoId?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    grupo?: GrupoUncheckedCreateNestedOneWithoutLiderInput
  }

  export type AlunoUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    matricula?: IntFieldUpdateOperationsInput | number
    telefone?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    grupo?: GrupoUpdateOneWithoutLiderNestedInput
    grupoAluno?: GrupoUpdateOneWithoutAlunosNestedInput
  }

  export type AlunoUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    matricula?: IntFieldUpdateOperationsInput | number
    telefone?: IntFieldUpdateOperationsInput | number
    grupoId?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    grupo?: GrupoUncheckedUpdateOneWithoutLiderNestedInput
  }

  export type AlunoUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    matricula?: IntFieldUpdateOperationsInput | number
    telefone?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AlunoUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    matricula?: IntFieldUpdateOperationsInput | number
    telefone?: IntFieldUpdateOperationsInput | number
    grupoId?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProfessorCreateInput = {
    id?: string
    email: string
    nome: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ProfessorUncheckedCreateInput = {
    id?: string
    email: string
    nome: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ProfessorUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProfessorUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProfessorUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProfessorUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GrupoCreateInput = {
    id?: string
    nomeGrupo: string
    nomeProjeto: string
    diaApresentacao: Date | string
    avaliacao?: AvaliacaoCreateNestedOneWithoutNomeGrupoInput
    lider: AlunoCreateNestedOneWithoutGrupoInput
    alunos?: AlunoCreateNestedManyWithoutGrupoAlunoInput
    numeroEstande: EstandeCreateNestedOneWithoutGrupoIdInput
  }

  export type GrupoUncheckedCreateInput = {
    id?: string
    estandeId: number
    nomeGrupo: string
    nomeProjeto: string
    diaApresentacao: Date | string
    alunoId: string
    avaliacao?: AvaliacaoUncheckedCreateNestedOneWithoutNomeGrupoInput
    alunos?: AlunoUncheckedCreateNestedManyWithoutGrupoAlunoInput
  }

  export type GrupoUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nomeGrupo?: StringFieldUpdateOperationsInput | string
    nomeProjeto?: StringFieldUpdateOperationsInput | string
    diaApresentacao?: DateTimeFieldUpdateOperationsInput | Date | string
    avaliacao?: AvaliacaoUpdateOneWithoutNomeGrupoNestedInput
    lider?: AlunoUpdateOneRequiredWithoutGrupoNestedInput
    alunos?: AlunoUpdateManyWithoutGrupoAlunoNestedInput
    numeroEstande?: EstandeUpdateOneRequiredWithoutGrupoIdNestedInput
  }

  export type GrupoUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    estandeId?: IntFieldUpdateOperationsInput | number
    nomeGrupo?: StringFieldUpdateOperationsInput | string
    nomeProjeto?: StringFieldUpdateOperationsInput | string
    diaApresentacao?: DateTimeFieldUpdateOperationsInput | Date | string
    alunoId?: StringFieldUpdateOperationsInput | string
    avaliacao?: AvaliacaoUncheckedUpdateOneWithoutNomeGrupoNestedInput
    alunos?: AlunoUncheckedUpdateManyWithoutGrupoAlunoNestedInput
  }

  export type GrupoUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nomeGrupo?: StringFieldUpdateOperationsInput | string
    nomeProjeto?: StringFieldUpdateOperationsInput | string
    diaApresentacao?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GrupoUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    estandeId?: IntFieldUpdateOperationsInput | number
    nomeGrupo?: StringFieldUpdateOperationsInput | string
    nomeProjeto?: StringFieldUpdateOperationsInput | string
    diaApresentacao?: DateTimeFieldUpdateOperationsInput | Date | string
    alunoId?: StringFieldUpdateOperationsInput | string
  }

  export type EstandeCreateInput = {
    numero: number
    grupoId?: GrupoCreateNestedManyWithoutNumeroEstandeInput
  }

  export type EstandeUncheckedCreateInput = {
    numero: number
    grupoId?: GrupoUncheckedCreateNestedManyWithoutNumeroEstandeInput
  }

  export type EstandeUpdateInput = {
    numero?: IntFieldUpdateOperationsInput | number
    grupoId?: GrupoUpdateManyWithoutNumeroEstandeNestedInput
  }

  export type EstandeUncheckedUpdateInput = {
    numero?: IntFieldUpdateOperationsInput | number
    grupoId?: GrupoUncheckedUpdateManyWithoutNumeroEstandeNestedInput
  }

  export type EstandeUpdateManyMutationInput = {
    numero?: IntFieldUpdateOperationsInput | number
  }

  export type EstandeUncheckedUpdateManyInput = {
    numero?: IntFieldUpdateOperationsInput | number
  }

  export type AvaliacaoCreateInput = {
    nota1: number
    nota2: number
    notaFinal: number
    nomeGrupo?: GrupoCreateNestedOneWithoutAvaliacaoInput
  }

  export type AvaliacaoUncheckedCreateInput = {
    idGrupo?: string
    nota1: number
    nota2: number
    notaFinal: number
  }

  export type AvaliacaoUpdateInput = {
    nota1?: FloatFieldUpdateOperationsInput | number
    nota2?: FloatFieldUpdateOperationsInput | number
    notaFinal?: FloatFieldUpdateOperationsInput | number
    nomeGrupo?: GrupoUpdateOneRequiredWithoutAvaliacaoNestedInput
  }

  export type AvaliacaoUncheckedUpdateInput = {
    idGrupo?: StringFieldUpdateOperationsInput | string
    nota1?: FloatFieldUpdateOperationsInput | number
    nota2?: FloatFieldUpdateOperationsInput | number
    notaFinal?: FloatFieldUpdateOperationsInput | number
  }

  export type AvaliacaoUpdateManyMutationInput = {
    nota1?: FloatFieldUpdateOperationsInput | number
    nota2?: FloatFieldUpdateOperationsInput | number
    notaFinal?: FloatFieldUpdateOperationsInput | number
  }

  export type AvaliacaoUncheckedUpdateManyInput = {
    idGrupo?: StringFieldUpdateOperationsInput | string
    nota1?: FloatFieldUpdateOperationsInput | number
    nota2?: FloatFieldUpdateOperationsInput | number
    notaFinal?: FloatFieldUpdateOperationsInput | number
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

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
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

  export type GrupoNullableRelationFilter = {
    is?: GrupoWhereInput | null
    isNot?: GrupoWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type AlunoCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    nome?: SortOrder
    matricula?: SortOrder
    telefone?: SortOrder
    grupoId?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type AlunoAvgOrderByAggregateInput = {
    matricula?: SortOrder
    telefone?: SortOrder
  }

  export type AlunoMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    nome?: SortOrder
    matricula?: SortOrder
    telefone?: SortOrder
    grupoId?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type AlunoMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    nome?: SortOrder
    matricula?: SortOrder
    telefone?: SortOrder
    grupoId?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type AlunoSumOrderByAggregateInput = {
    matricula?: SortOrder
    telefone?: SortOrder
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

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
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

  export type ProfessorCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    nome?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ProfessorMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    nome?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ProfessorMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    nome?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type AvaliacaoNullableRelationFilter = {
    is?: AvaliacaoWhereInput | null
    isNot?: AvaliacaoWhereInput | null
  }

  export type AlunoRelationFilter = {
    is?: AlunoWhereInput
    isNot?: AlunoWhereInput
  }

  export type AlunoListRelationFilter = {
    every?: AlunoWhereInput
    some?: AlunoWhereInput
    none?: AlunoWhereInput
  }

  export type EstandeRelationFilter = {
    is?: EstandeWhereInput
    isNot?: EstandeWhereInput
  }

  export type AlunoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type GrupoCountOrderByAggregateInput = {
    id?: SortOrder
    estandeId?: SortOrder
    nomeGrupo?: SortOrder
    nomeProjeto?: SortOrder
    diaApresentacao?: SortOrder
    alunoId?: SortOrder
  }

  export type GrupoAvgOrderByAggregateInput = {
    estandeId?: SortOrder
  }

  export type GrupoMaxOrderByAggregateInput = {
    id?: SortOrder
    estandeId?: SortOrder
    nomeGrupo?: SortOrder
    nomeProjeto?: SortOrder
    diaApresentacao?: SortOrder
    alunoId?: SortOrder
  }

  export type GrupoMinOrderByAggregateInput = {
    id?: SortOrder
    estandeId?: SortOrder
    nomeGrupo?: SortOrder
    nomeProjeto?: SortOrder
    diaApresentacao?: SortOrder
    alunoId?: SortOrder
  }

  export type GrupoSumOrderByAggregateInput = {
    estandeId?: SortOrder
  }

  export type GrupoListRelationFilter = {
    every?: GrupoWhereInput
    some?: GrupoWhereInput
    none?: GrupoWhereInput
  }

  export type GrupoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EstandeCountOrderByAggregateInput = {
    numero?: SortOrder
  }

  export type EstandeAvgOrderByAggregateInput = {
    numero?: SortOrder
  }

  export type EstandeMaxOrderByAggregateInput = {
    numero?: SortOrder
  }

  export type EstandeMinOrderByAggregateInput = {
    numero?: SortOrder
  }

  export type EstandeSumOrderByAggregateInput = {
    numero?: SortOrder
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type GrupoRelationFilter = {
    is?: GrupoWhereInput
    isNot?: GrupoWhereInput
  }

  export type AvaliacaoCountOrderByAggregateInput = {
    idGrupo?: SortOrder
    nota1?: SortOrder
    nota2?: SortOrder
    notaFinal?: SortOrder
  }

  export type AvaliacaoAvgOrderByAggregateInput = {
    nota1?: SortOrder
    nota2?: SortOrder
    notaFinal?: SortOrder
  }

  export type AvaliacaoMaxOrderByAggregateInput = {
    idGrupo?: SortOrder
    nota1?: SortOrder
    nota2?: SortOrder
    notaFinal?: SortOrder
  }

  export type AvaliacaoMinOrderByAggregateInput = {
    idGrupo?: SortOrder
    nota1?: SortOrder
    nota2?: SortOrder
    notaFinal?: SortOrder
  }

  export type AvaliacaoSumOrderByAggregateInput = {
    nota1?: SortOrder
    nota2?: SortOrder
    notaFinal?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type GrupoCreateNestedOneWithoutLiderInput = {
    create?: XOR<GrupoCreateWithoutLiderInput, GrupoUncheckedCreateWithoutLiderInput>
    connectOrCreate?: GrupoCreateOrConnectWithoutLiderInput
    connect?: GrupoWhereUniqueInput
  }

  export type GrupoCreateNestedOneWithoutAlunosInput = {
    create?: XOR<GrupoCreateWithoutAlunosInput, GrupoUncheckedCreateWithoutAlunosInput>
    connectOrCreate?: GrupoCreateOrConnectWithoutAlunosInput
    connect?: GrupoWhereUniqueInput
  }

  export type GrupoUncheckedCreateNestedOneWithoutLiderInput = {
    create?: XOR<GrupoCreateWithoutLiderInput, GrupoUncheckedCreateWithoutLiderInput>
    connectOrCreate?: GrupoCreateOrConnectWithoutLiderInput
    connect?: GrupoWhereUniqueInput
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

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type GrupoUpdateOneWithoutLiderNestedInput = {
    create?: XOR<GrupoCreateWithoutLiderInput, GrupoUncheckedCreateWithoutLiderInput>
    connectOrCreate?: GrupoCreateOrConnectWithoutLiderInput
    upsert?: GrupoUpsertWithoutLiderInput
    disconnect?: GrupoWhereInput | boolean
    delete?: GrupoWhereInput | boolean
    connect?: GrupoWhereUniqueInput
    update?: XOR<XOR<GrupoUpdateToOneWithWhereWithoutLiderInput, GrupoUpdateWithoutLiderInput>, GrupoUncheckedUpdateWithoutLiderInput>
  }

  export type GrupoUpdateOneWithoutAlunosNestedInput = {
    create?: XOR<GrupoCreateWithoutAlunosInput, GrupoUncheckedCreateWithoutAlunosInput>
    connectOrCreate?: GrupoCreateOrConnectWithoutAlunosInput
    upsert?: GrupoUpsertWithoutAlunosInput
    disconnect?: GrupoWhereInput | boolean
    delete?: GrupoWhereInput | boolean
    connect?: GrupoWhereUniqueInput
    update?: XOR<XOR<GrupoUpdateToOneWithWhereWithoutAlunosInput, GrupoUpdateWithoutAlunosInput>, GrupoUncheckedUpdateWithoutAlunosInput>
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type GrupoUncheckedUpdateOneWithoutLiderNestedInput = {
    create?: XOR<GrupoCreateWithoutLiderInput, GrupoUncheckedCreateWithoutLiderInput>
    connectOrCreate?: GrupoCreateOrConnectWithoutLiderInput
    upsert?: GrupoUpsertWithoutLiderInput
    disconnect?: GrupoWhereInput | boolean
    delete?: GrupoWhereInput | boolean
    connect?: GrupoWhereUniqueInput
    update?: XOR<XOR<GrupoUpdateToOneWithWhereWithoutLiderInput, GrupoUpdateWithoutLiderInput>, GrupoUncheckedUpdateWithoutLiderInput>
  }

  export type AvaliacaoCreateNestedOneWithoutNomeGrupoInput = {
    create?: XOR<AvaliacaoCreateWithoutNomeGrupoInput, AvaliacaoUncheckedCreateWithoutNomeGrupoInput>
    connectOrCreate?: AvaliacaoCreateOrConnectWithoutNomeGrupoInput
    connect?: AvaliacaoWhereUniqueInput
  }

  export type AlunoCreateNestedOneWithoutGrupoInput = {
    create?: XOR<AlunoCreateWithoutGrupoInput, AlunoUncheckedCreateWithoutGrupoInput>
    connectOrCreate?: AlunoCreateOrConnectWithoutGrupoInput
    connect?: AlunoWhereUniqueInput
  }

  export type AlunoCreateNestedManyWithoutGrupoAlunoInput = {
    create?: XOR<AlunoCreateWithoutGrupoAlunoInput, AlunoUncheckedCreateWithoutGrupoAlunoInput> | AlunoCreateWithoutGrupoAlunoInput[] | AlunoUncheckedCreateWithoutGrupoAlunoInput[]
    connectOrCreate?: AlunoCreateOrConnectWithoutGrupoAlunoInput | AlunoCreateOrConnectWithoutGrupoAlunoInput[]
    connect?: AlunoWhereUniqueInput | AlunoWhereUniqueInput[]
  }

  export type EstandeCreateNestedOneWithoutGrupoIdInput = {
    create?: XOR<EstandeCreateWithoutGrupoIdInput, EstandeUncheckedCreateWithoutGrupoIdInput>
    connectOrCreate?: EstandeCreateOrConnectWithoutGrupoIdInput
    connect?: EstandeWhereUniqueInput
  }

  export type AvaliacaoUncheckedCreateNestedOneWithoutNomeGrupoInput = {
    create?: XOR<AvaliacaoCreateWithoutNomeGrupoInput, AvaliacaoUncheckedCreateWithoutNomeGrupoInput>
    connectOrCreate?: AvaliacaoCreateOrConnectWithoutNomeGrupoInput
    connect?: AvaliacaoWhereUniqueInput
  }

  export type AlunoUncheckedCreateNestedManyWithoutGrupoAlunoInput = {
    create?: XOR<AlunoCreateWithoutGrupoAlunoInput, AlunoUncheckedCreateWithoutGrupoAlunoInput> | AlunoCreateWithoutGrupoAlunoInput[] | AlunoUncheckedCreateWithoutGrupoAlunoInput[]
    connectOrCreate?: AlunoCreateOrConnectWithoutGrupoAlunoInput | AlunoCreateOrConnectWithoutGrupoAlunoInput[]
    connect?: AlunoWhereUniqueInput | AlunoWhereUniqueInput[]
  }

  export type AvaliacaoUpdateOneWithoutNomeGrupoNestedInput = {
    create?: XOR<AvaliacaoCreateWithoutNomeGrupoInput, AvaliacaoUncheckedCreateWithoutNomeGrupoInput>
    connectOrCreate?: AvaliacaoCreateOrConnectWithoutNomeGrupoInput
    upsert?: AvaliacaoUpsertWithoutNomeGrupoInput
    disconnect?: AvaliacaoWhereInput | boolean
    delete?: AvaliacaoWhereInput | boolean
    connect?: AvaliacaoWhereUniqueInput
    update?: XOR<XOR<AvaliacaoUpdateToOneWithWhereWithoutNomeGrupoInput, AvaliacaoUpdateWithoutNomeGrupoInput>, AvaliacaoUncheckedUpdateWithoutNomeGrupoInput>
  }

  export type AlunoUpdateOneRequiredWithoutGrupoNestedInput = {
    create?: XOR<AlunoCreateWithoutGrupoInput, AlunoUncheckedCreateWithoutGrupoInput>
    connectOrCreate?: AlunoCreateOrConnectWithoutGrupoInput
    upsert?: AlunoUpsertWithoutGrupoInput
    connect?: AlunoWhereUniqueInput
    update?: XOR<XOR<AlunoUpdateToOneWithWhereWithoutGrupoInput, AlunoUpdateWithoutGrupoInput>, AlunoUncheckedUpdateWithoutGrupoInput>
  }

  export type AlunoUpdateManyWithoutGrupoAlunoNestedInput = {
    create?: XOR<AlunoCreateWithoutGrupoAlunoInput, AlunoUncheckedCreateWithoutGrupoAlunoInput> | AlunoCreateWithoutGrupoAlunoInput[] | AlunoUncheckedCreateWithoutGrupoAlunoInput[]
    connectOrCreate?: AlunoCreateOrConnectWithoutGrupoAlunoInput | AlunoCreateOrConnectWithoutGrupoAlunoInput[]
    upsert?: AlunoUpsertWithWhereUniqueWithoutGrupoAlunoInput | AlunoUpsertWithWhereUniqueWithoutGrupoAlunoInput[]
    set?: AlunoWhereUniqueInput | AlunoWhereUniqueInput[]
    disconnect?: AlunoWhereUniqueInput | AlunoWhereUniqueInput[]
    delete?: AlunoWhereUniqueInput | AlunoWhereUniqueInput[]
    connect?: AlunoWhereUniqueInput | AlunoWhereUniqueInput[]
    update?: AlunoUpdateWithWhereUniqueWithoutGrupoAlunoInput | AlunoUpdateWithWhereUniqueWithoutGrupoAlunoInput[]
    updateMany?: AlunoUpdateManyWithWhereWithoutGrupoAlunoInput | AlunoUpdateManyWithWhereWithoutGrupoAlunoInput[]
    deleteMany?: AlunoScalarWhereInput | AlunoScalarWhereInput[]
  }

  export type EstandeUpdateOneRequiredWithoutGrupoIdNestedInput = {
    create?: XOR<EstandeCreateWithoutGrupoIdInput, EstandeUncheckedCreateWithoutGrupoIdInput>
    connectOrCreate?: EstandeCreateOrConnectWithoutGrupoIdInput
    upsert?: EstandeUpsertWithoutGrupoIdInput
    connect?: EstandeWhereUniqueInput
    update?: XOR<XOR<EstandeUpdateToOneWithWhereWithoutGrupoIdInput, EstandeUpdateWithoutGrupoIdInput>, EstandeUncheckedUpdateWithoutGrupoIdInput>
  }

  export type AvaliacaoUncheckedUpdateOneWithoutNomeGrupoNestedInput = {
    create?: XOR<AvaliacaoCreateWithoutNomeGrupoInput, AvaliacaoUncheckedCreateWithoutNomeGrupoInput>
    connectOrCreate?: AvaliacaoCreateOrConnectWithoutNomeGrupoInput
    upsert?: AvaliacaoUpsertWithoutNomeGrupoInput
    disconnect?: AvaliacaoWhereInput | boolean
    delete?: AvaliacaoWhereInput | boolean
    connect?: AvaliacaoWhereUniqueInput
    update?: XOR<XOR<AvaliacaoUpdateToOneWithWhereWithoutNomeGrupoInput, AvaliacaoUpdateWithoutNomeGrupoInput>, AvaliacaoUncheckedUpdateWithoutNomeGrupoInput>
  }

  export type AlunoUncheckedUpdateManyWithoutGrupoAlunoNestedInput = {
    create?: XOR<AlunoCreateWithoutGrupoAlunoInput, AlunoUncheckedCreateWithoutGrupoAlunoInput> | AlunoCreateWithoutGrupoAlunoInput[] | AlunoUncheckedCreateWithoutGrupoAlunoInput[]
    connectOrCreate?: AlunoCreateOrConnectWithoutGrupoAlunoInput | AlunoCreateOrConnectWithoutGrupoAlunoInput[]
    upsert?: AlunoUpsertWithWhereUniqueWithoutGrupoAlunoInput | AlunoUpsertWithWhereUniqueWithoutGrupoAlunoInput[]
    set?: AlunoWhereUniqueInput | AlunoWhereUniqueInput[]
    disconnect?: AlunoWhereUniqueInput | AlunoWhereUniqueInput[]
    delete?: AlunoWhereUniqueInput | AlunoWhereUniqueInput[]
    connect?: AlunoWhereUniqueInput | AlunoWhereUniqueInput[]
    update?: AlunoUpdateWithWhereUniqueWithoutGrupoAlunoInput | AlunoUpdateWithWhereUniqueWithoutGrupoAlunoInput[]
    updateMany?: AlunoUpdateManyWithWhereWithoutGrupoAlunoInput | AlunoUpdateManyWithWhereWithoutGrupoAlunoInput[]
    deleteMany?: AlunoScalarWhereInput | AlunoScalarWhereInput[]
  }

  export type GrupoCreateNestedManyWithoutNumeroEstandeInput = {
    create?: XOR<GrupoCreateWithoutNumeroEstandeInput, GrupoUncheckedCreateWithoutNumeroEstandeInput> | GrupoCreateWithoutNumeroEstandeInput[] | GrupoUncheckedCreateWithoutNumeroEstandeInput[]
    connectOrCreate?: GrupoCreateOrConnectWithoutNumeroEstandeInput | GrupoCreateOrConnectWithoutNumeroEstandeInput[]
    connect?: GrupoWhereUniqueInput | GrupoWhereUniqueInput[]
  }

  export type GrupoUncheckedCreateNestedManyWithoutNumeroEstandeInput = {
    create?: XOR<GrupoCreateWithoutNumeroEstandeInput, GrupoUncheckedCreateWithoutNumeroEstandeInput> | GrupoCreateWithoutNumeroEstandeInput[] | GrupoUncheckedCreateWithoutNumeroEstandeInput[]
    connectOrCreate?: GrupoCreateOrConnectWithoutNumeroEstandeInput | GrupoCreateOrConnectWithoutNumeroEstandeInput[]
    connect?: GrupoWhereUniqueInput | GrupoWhereUniqueInput[]
  }

  export type GrupoUpdateManyWithoutNumeroEstandeNestedInput = {
    create?: XOR<GrupoCreateWithoutNumeroEstandeInput, GrupoUncheckedCreateWithoutNumeroEstandeInput> | GrupoCreateWithoutNumeroEstandeInput[] | GrupoUncheckedCreateWithoutNumeroEstandeInput[]
    connectOrCreate?: GrupoCreateOrConnectWithoutNumeroEstandeInput | GrupoCreateOrConnectWithoutNumeroEstandeInput[]
    upsert?: GrupoUpsertWithWhereUniqueWithoutNumeroEstandeInput | GrupoUpsertWithWhereUniqueWithoutNumeroEstandeInput[]
    set?: GrupoWhereUniqueInput | GrupoWhereUniqueInput[]
    disconnect?: GrupoWhereUniqueInput | GrupoWhereUniqueInput[]
    delete?: GrupoWhereUniqueInput | GrupoWhereUniqueInput[]
    connect?: GrupoWhereUniqueInput | GrupoWhereUniqueInput[]
    update?: GrupoUpdateWithWhereUniqueWithoutNumeroEstandeInput | GrupoUpdateWithWhereUniqueWithoutNumeroEstandeInput[]
    updateMany?: GrupoUpdateManyWithWhereWithoutNumeroEstandeInput | GrupoUpdateManyWithWhereWithoutNumeroEstandeInput[]
    deleteMany?: GrupoScalarWhereInput | GrupoScalarWhereInput[]
  }

  export type GrupoUncheckedUpdateManyWithoutNumeroEstandeNestedInput = {
    create?: XOR<GrupoCreateWithoutNumeroEstandeInput, GrupoUncheckedCreateWithoutNumeroEstandeInput> | GrupoCreateWithoutNumeroEstandeInput[] | GrupoUncheckedCreateWithoutNumeroEstandeInput[]
    connectOrCreate?: GrupoCreateOrConnectWithoutNumeroEstandeInput | GrupoCreateOrConnectWithoutNumeroEstandeInput[]
    upsert?: GrupoUpsertWithWhereUniqueWithoutNumeroEstandeInput | GrupoUpsertWithWhereUniqueWithoutNumeroEstandeInput[]
    set?: GrupoWhereUniqueInput | GrupoWhereUniqueInput[]
    disconnect?: GrupoWhereUniqueInput | GrupoWhereUniqueInput[]
    delete?: GrupoWhereUniqueInput | GrupoWhereUniqueInput[]
    connect?: GrupoWhereUniqueInput | GrupoWhereUniqueInput[]
    update?: GrupoUpdateWithWhereUniqueWithoutNumeroEstandeInput | GrupoUpdateWithWhereUniqueWithoutNumeroEstandeInput[]
    updateMany?: GrupoUpdateManyWithWhereWithoutNumeroEstandeInput | GrupoUpdateManyWithWhereWithoutNumeroEstandeInput[]
    deleteMany?: GrupoScalarWhereInput | GrupoScalarWhereInput[]
  }

  export type GrupoCreateNestedOneWithoutAvaliacaoInput = {
    create?: XOR<GrupoCreateWithoutAvaliacaoInput, GrupoUncheckedCreateWithoutAvaliacaoInput>
    connectOrCreate?: GrupoCreateOrConnectWithoutAvaliacaoInput
    connect?: GrupoWhereUniqueInput
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type GrupoUpdateOneRequiredWithoutAvaliacaoNestedInput = {
    create?: XOR<GrupoCreateWithoutAvaliacaoInput, GrupoUncheckedCreateWithoutAvaliacaoInput>
    connectOrCreate?: GrupoCreateOrConnectWithoutAvaliacaoInput
    upsert?: GrupoUpsertWithoutAvaliacaoInput
    connect?: GrupoWhereUniqueInput
    update?: XOR<XOR<GrupoUpdateToOneWithWhereWithoutAvaliacaoInput, GrupoUpdateWithoutAvaliacaoInput>, GrupoUncheckedUpdateWithoutAvaliacaoInput>
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

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
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

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
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

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type GrupoCreateWithoutLiderInput = {
    id?: string
    nomeGrupo: string
    nomeProjeto: string
    diaApresentacao: Date | string
    avaliacao?: AvaliacaoCreateNestedOneWithoutNomeGrupoInput
    alunos?: AlunoCreateNestedManyWithoutGrupoAlunoInput
    numeroEstande: EstandeCreateNestedOneWithoutGrupoIdInput
  }

  export type GrupoUncheckedCreateWithoutLiderInput = {
    id?: string
    estandeId: number
    nomeGrupo: string
    nomeProjeto: string
    diaApresentacao: Date | string
    avaliacao?: AvaliacaoUncheckedCreateNestedOneWithoutNomeGrupoInput
    alunos?: AlunoUncheckedCreateNestedManyWithoutGrupoAlunoInput
  }

  export type GrupoCreateOrConnectWithoutLiderInput = {
    where: GrupoWhereUniqueInput
    create: XOR<GrupoCreateWithoutLiderInput, GrupoUncheckedCreateWithoutLiderInput>
  }

  export type GrupoCreateWithoutAlunosInput = {
    id?: string
    nomeGrupo: string
    nomeProjeto: string
    diaApresentacao: Date | string
    avaliacao?: AvaliacaoCreateNestedOneWithoutNomeGrupoInput
    lider: AlunoCreateNestedOneWithoutGrupoInput
    numeroEstande: EstandeCreateNestedOneWithoutGrupoIdInput
  }

  export type GrupoUncheckedCreateWithoutAlunosInput = {
    id?: string
    estandeId: number
    nomeGrupo: string
    nomeProjeto: string
    diaApresentacao: Date | string
    alunoId: string
    avaliacao?: AvaliacaoUncheckedCreateNestedOneWithoutNomeGrupoInput
  }

  export type GrupoCreateOrConnectWithoutAlunosInput = {
    where: GrupoWhereUniqueInput
    create: XOR<GrupoCreateWithoutAlunosInput, GrupoUncheckedCreateWithoutAlunosInput>
  }

  export type GrupoUpsertWithoutLiderInput = {
    update: XOR<GrupoUpdateWithoutLiderInput, GrupoUncheckedUpdateWithoutLiderInput>
    create: XOR<GrupoCreateWithoutLiderInput, GrupoUncheckedCreateWithoutLiderInput>
    where?: GrupoWhereInput
  }

  export type GrupoUpdateToOneWithWhereWithoutLiderInput = {
    where?: GrupoWhereInput
    data: XOR<GrupoUpdateWithoutLiderInput, GrupoUncheckedUpdateWithoutLiderInput>
  }

  export type GrupoUpdateWithoutLiderInput = {
    id?: StringFieldUpdateOperationsInput | string
    nomeGrupo?: StringFieldUpdateOperationsInput | string
    nomeProjeto?: StringFieldUpdateOperationsInput | string
    diaApresentacao?: DateTimeFieldUpdateOperationsInput | Date | string
    avaliacao?: AvaliacaoUpdateOneWithoutNomeGrupoNestedInput
    alunos?: AlunoUpdateManyWithoutGrupoAlunoNestedInput
    numeroEstande?: EstandeUpdateOneRequiredWithoutGrupoIdNestedInput
  }

  export type GrupoUncheckedUpdateWithoutLiderInput = {
    id?: StringFieldUpdateOperationsInput | string
    estandeId?: IntFieldUpdateOperationsInput | number
    nomeGrupo?: StringFieldUpdateOperationsInput | string
    nomeProjeto?: StringFieldUpdateOperationsInput | string
    diaApresentacao?: DateTimeFieldUpdateOperationsInput | Date | string
    avaliacao?: AvaliacaoUncheckedUpdateOneWithoutNomeGrupoNestedInput
    alunos?: AlunoUncheckedUpdateManyWithoutGrupoAlunoNestedInput
  }

  export type GrupoUpsertWithoutAlunosInput = {
    update: XOR<GrupoUpdateWithoutAlunosInput, GrupoUncheckedUpdateWithoutAlunosInput>
    create: XOR<GrupoCreateWithoutAlunosInput, GrupoUncheckedCreateWithoutAlunosInput>
    where?: GrupoWhereInput
  }

  export type GrupoUpdateToOneWithWhereWithoutAlunosInput = {
    where?: GrupoWhereInput
    data: XOR<GrupoUpdateWithoutAlunosInput, GrupoUncheckedUpdateWithoutAlunosInput>
  }

  export type GrupoUpdateWithoutAlunosInput = {
    id?: StringFieldUpdateOperationsInput | string
    nomeGrupo?: StringFieldUpdateOperationsInput | string
    nomeProjeto?: StringFieldUpdateOperationsInput | string
    diaApresentacao?: DateTimeFieldUpdateOperationsInput | Date | string
    avaliacao?: AvaliacaoUpdateOneWithoutNomeGrupoNestedInput
    lider?: AlunoUpdateOneRequiredWithoutGrupoNestedInput
    numeroEstande?: EstandeUpdateOneRequiredWithoutGrupoIdNestedInput
  }

  export type GrupoUncheckedUpdateWithoutAlunosInput = {
    id?: StringFieldUpdateOperationsInput | string
    estandeId?: IntFieldUpdateOperationsInput | number
    nomeGrupo?: StringFieldUpdateOperationsInput | string
    nomeProjeto?: StringFieldUpdateOperationsInput | string
    diaApresentacao?: DateTimeFieldUpdateOperationsInput | Date | string
    alunoId?: StringFieldUpdateOperationsInput | string
    avaliacao?: AvaliacaoUncheckedUpdateOneWithoutNomeGrupoNestedInput
  }

  export type AvaliacaoCreateWithoutNomeGrupoInput = {
    nota1: number
    nota2: number
    notaFinal: number
  }

  export type AvaliacaoUncheckedCreateWithoutNomeGrupoInput = {
    nota1: number
    nota2: number
    notaFinal: number
  }

  export type AvaliacaoCreateOrConnectWithoutNomeGrupoInput = {
    where: AvaliacaoWhereUniqueInput
    create: XOR<AvaliacaoCreateWithoutNomeGrupoInput, AvaliacaoUncheckedCreateWithoutNomeGrupoInput>
  }

  export type AlunoCreateWithoutGrupoInput = {
    id?: string
    email: string
    nome: string
    matricula: number
    telefone: number
    created_at?: Date | string
    updated_at?: Date | string
    grupoAluno?: GrupoCreateNestedOneWithoutAlunosInput
  }

  export type AlunoUncheckedCreateWithoutGrupoInput = {
    id?: string
    email: string
    nome: string
    matricula: number
    telefone: number
    grupoId?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type AlunoCreateOrConnectWithoutGrupoInput = {
    where: AlunoWhereUniqueInput
    create: XOR<AlunoCreateWithoutGrupoInput, AlunoUncheckedCreateWithoutGrupoInput>
  }

  export type AlunoCreateWithoutGrupoAlunoInput = {
    id?: string
    email: string
    nome: string
    matricula: number
    telefone: number
    created_at?: Date | string
    updated_at?: Date | string
    grupo?: GrupoCreateNestedOneWithoutLiderInput
  }

  export type AlunoUncheckedCreateWithoutGrupoAlunoInput = {
    id?: string
    email: string
    nome: string
    matricula: number
    telefone: number
    created_at?: Date | string
    updated_at?: Date | string
    grupo?: GrupoUncheckedCreateNestedOneWithoutLiderInput
  }

  export type AlunoCreateOrConnectWithoutGrupoAlunoInput = {
    where: AlunoWhereUniqueInput
    create: XOR<AlunoCreateWithoutGrupoAlunoInput, AlunoUncheckedCreateWithoutGrupoAlunoInput>
  }

  export type EstandeCreateWithoutGrupoIdInput = {
    numero: number
  }

  export type EstandeUncheckedCreateWithoutGrupoIdInput = {
    numero: number
  }

  export type EstandeCreateOrConnectWithoutGrupoIdInput = {
    where: EstandeWhereUniqueInput
    create: XOR<EstandeCreateWithoutGrupoIdInput, EstandeUncheckedCreateWithoutGrupoIdInput>
  }

  export type AvaliacaoUpsertWithoutNomeGrupoInput = {
    update: XOR<AvaliacaoUpdateWithoutNomeGrupoInput, AvaliacaoUncheckedUpdateWithoutNomeGrupoInput>
    create: XOR<AvaliacaoCreateWithoutNomeGrupoInput, AvaliacaoUncheckedCreateWithoutNomeGrupoInput>
    where?: AvaliacaoWhereInput
  }

  export type AvaliacaoUpdateToOneWithWhereWithoutNomeGrupoInput = {
    where?: AvaliacaoWhereInput
    data: XOR<AvaliacaoUpdateWithoutNomeGrupoInput, AvaliacaoUncheckedUpdateWithoutNomeGrupoInput>
  }

  export type AvaliacaoUpdateWithoutNomeGrupoInput = {
    nota1?: FloatFieldUpdateOperationsInput | number
    nota2?: FloatFieldUpdateOperationsInput | number
    notaFinal?: FloatFieldUpdateOperationsInput | number
  }

  export type AvaliacaoUncheckedUpdateWithoutNomeGrupoInput = {
    nota1?: FloatFieldUpdateOperationsInput | number
    nota2?: FloatFieldUpdateOperationsInput | number
    notaFinal?: FloatFieldUpdateOperationsInput | number
  }

  export type AlunoUpsertWithoutGrupoInput = {
    update: XOR<AlunoUpdateWithoutGrupoInput, AlunoUncheckedUpdateWithoutGrupoInput>
    create: XOR<AlunoCreateWithoutGrupoInput, AlunoUncheckedCreateWithoutGrupoInput>
    where?: AlunoWhereInput
  }

  export type AlunoUpdateToOneWithWhereWithoutGrupoInput = {
    where?: AlunoWhereInput
    data: XOR<AlunoUpdateWithoutGrupoInput, AlunoUncheckedUpdateWithoutGrupoInput>
  }

  export type AlunoUpdateWithoutGrupoInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    matricula?: IntFieldUpdateOperationsInput | number
    telefone?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    grupoAluno?: GrupoUpdateOneWithoutAlunosNestedInput
  }

  export type AlunoUncheckedUpdateWithoutGrupoInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    matricula?: IntFieldUpdateOperationsInput | number
    telefone?: IntFieldUpdateOperationsInput | number
    grupoId?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AlunoUpsertWithWhereUniqueWithoutGrupoAlunoInput = {
    where: AlunoWhereUniqueInput
    update: XOR<AlunoUpdateWithoutGrupoAlunoInput, AlunoUncheckedUpdateWithoutGrupoAlunoInput>
    create: XOR<AlunoCreateWithoutGrupoAlunoInput, AlunoUncheckedCreateWithoutGrupoAlunoInput>
  }

  export type AlunoUpdateWithWhereUniqueWithoutGrupoAlunoInput = {
    where: AlunoWhereUniqueInput
    data: XOR<AlunoUpdateWithoutGrupoAlunoInput, AlunoUncheckedUpdateWithoutGrupoAlunoInput>
  }

  export type AlunoUpdateManyWithWhereWithoutGrupoAlunoInput = {
    where: AlunoScalarWhereInput
    data: XOR<AlunoUpdateManyMutationInput, AlunoUncheckedUpdateManyWithoutGrupoAlunoInput>
  }

  export type AlunoScalarWhereInput = {
    AND?: AlunoScalarWhereInput | AlunoScalarWhereInput[]
    OR?: AlunoScalarWhereInput[]
    NOT?: AlunoScalarWhereInput | AlunoScalarWhereInput[]
    id?: StringFilter<"Aluno"> | string
    email?: StringFilter<"Aluno"> | string
    nome?: StringFilter<"Aluno"> | string
    matricula?: IntFilter<"Aluno"> | number
    telefone?: IntFilter<"Aluno"> | number
    grupoId?: StringNullableFilter<"Aluno"> | string | null
    created_at?: DateTimeFilter<"Aluno"> | Date | string
    updated_at?: DateTimeFilter<"Aluno"> | Date | string
  }

  export type EstandeUpsertWithoutGrupoIdInput = {
    update: XOR<EstandeUpdateWithoutGrupoIdInput, EstandeUncheckedUpdateWithoutGrupoIdInput>
    create: XOR<EstandeCreateWithoutGrupoIdInput, EstandeUncheckedCreateWithoutGrupoIdInput>
    where?: EstandeWhereInput
  }

  export type EstandeUpdateToOneWithWhereWithoutGrupoIdInput = {
    where?: EstandeWhereInput
    data: XOR<EstandeUpdateWithoutGrupoIdInput, EstandeUncheckedUpdateWithoutGrupoIdInput>
  }

  export type EstandeUpdateWithoutGrupoIdInput = {
    numero?: IntFieldUpdateOperationsInput | number
  }

  export type EstandeUncheckedUpdateWithoutGrupoIdInput = {
    numero?: IntFieldUpdateOperationsInput | number
  }

  export type GrupoCreateWithoutNumeroEstandeInput = {
    id?: string
    nomeGrupo: string
    nomeProjeto: string
    diaApresentacao: Date | string
    avaliacao?: AvaliacaoCreateNestedOneWithoutNomeGrupoInput
    lider: AlunoCreateNestedOneWithoutGrupoInput
    alunos?: AlunoCreateNestedManyWithoutGrupoAlunoInput
  }

  export type GrupoUncheckedCreateWithoutNumeroEstandeInput = {
    id?: string
    nomeGrupo: string
    nomeProjeto: string
    diaApresentacao: Date | string
    alunoId: string
    avaliacao?: AvaliacaoUncheckedCreateNestedOneWithoutNomeGrupoInput
    alunos?: AlunoUncheckedCreateNestedManyWithoutGrupoAlunoInput
  }

  export type GrupoCreateOrConnectWithoutNumeroEstandeInput = {
    where: GrupoWhereUniqueInput
    create: XOR<GrupoCreateWithoutNumeroEstandeInput, GrupoUncheckedCreateWithoutNumeroEstandeInput>
  }

  export type GrupoUpsertWithWhereUniqueWithoutNumeroEstandeInput = {
    where: GrupoWhereUniqueInput
    update: XOR<GrupoUpdateWithoutNumeroEstandeInput, GrupoUncheckedUpdateWithoutNumeroEstandeInput>
    create: XOR<GrupoCreateWithoutNumeroEstandeInput, GrupoUncheckedCreateWithoutNumeroEstandeInput>
  }

  export type GrupoUpdateWithWhereUniqueWithoutNumeroEstandeInput = {
    where: GrupoWhereUniqueInput
    data: XOR<GrupoUpdateWithoutNumeroEstandeInput, GrupoUncheckedUpdateWithoutNumeroEstandeInput>
  }

  export type GrupoUpdateManyWithWhereWithoutNumeroEstandeInput = {
    where: GrupoScalarWhereInput
    data: XOR<GrupoUpdateManyMutationInput, GrupoUncheckedUpdateManyWithoutNumeroEstandeInput>
  }

  export type GrupoScalarWhereInput = {
    AND?: GrupoScalarWhereInput | GrupoScalarWhereInput[]
    OR?: GrupoScalarWhereInput[]
    NOT?: GrupoScalarWhereInput | GrupoScalarWhereInput[]
    id?: StringFilter<"Grupo"> | string
    estandeId?: IntFilter<"Grupo"> | number
    nomeGrupo?: StringFilter<"Grupo"> | string
    nomeProjeto?: StringFilter<"Grupo"> | string
    diaApresentacao?: DateTimeFilter<"Grupo"> | Date | string
    alunoId?: StringFilter<"Grupo"> | string
  }

  export type GrupoCreateWithoutAvaliacaoInput = {
    id?: string
    nomeGrupo: string
    nomeProjeto: string
    diaApresentacao: Date | string
    lider: AlunoCreateNestedOneWithoutGrupoInput
    alunos?: AlunoCreateNestedManyWithoutGrupoAlunoInput
    numeroEstande: EstandeCreateNestedOneWithoutGrupoIdInput
  }

  export type GrupoUncheckedCreateWithoutAvaliacaoInput = {
    id?: string
    estandeId: number
    nomeGrupo: string
    nomeProjeto: string
    diaApresentacao: Date | string
    alunoId: string
    alunos?: AlunoUncheckedCreateNestedManyWithoutGrupoAlunoInput
  }

  export type GrupoCreateOrConnectWithoutAvaliacaoInput = {
    where: GrupoWhereUniqueInput
    create: XOR<GrupoCreateWithoutAvaliacaoInput, GrupoUncheckedCreateWithoutAvaliacaoInput>
  }

  export type GrupoUpsertWithoutAvaliacaoInput = {
    update: XOR<GrupoUpdateWithoutAvaliacaoInput, GrupoUncheckedUpdateWithoutAvaliacaoInput>
    create: XOR<GrupoCreateWithoutAvaliacaoInput, GrupoUncheckedCreateWithoutAvaliacaoInput>
    where?: GrupoWhereInput
  }

  export type GrupoUpdateToOneWithWhereWithoutAvaliacaoInput = {
    where?: GrupoWhereInput
    data: XOR<GrupoUpdateWithoutAvaliacaoInput, GrupoUncheckedUpdateWithoutAvaliacaoInput>
  }

  export type GrupoUpdateWithoutAvaliacaoInput = {
    id?: StringFieldUpdateOperationsInput | string
    nomeGrupo?: StringFieldUpdateOperationsInput | string
    nomeProjeto?: StringFieldUpdateOperationsInput | string
    diaApresentacao?: DateTimeFieldUpdateOperationsInput | Date | string
    lider?: AlunoUpdateOneRequiredWithoutGrupoNestedInput
    alunos?: AlunoUpdateManyWithoutGrupoAlunoNestedInput
    numeroEstande?: EstandeUpdateOneRequiredWithoutGrupoIdNestedInput
  }

  export type GrupoUncheckedUpdateWithoutAvaliacaoInput = {
    id?: StringFieldUpdateOperationsInput | string
    estandeId?: IntFieldUpdateOperationsInput | number
    nomeGrupo?: StringFieldUpdateOperationsInput | string
    nomeProjeto?: StringFieldUpdateOperationsInput | string
    diaApresentacao?: DateTimeFieldUpdateOperationsInput | Date | string
    alunoId?: StringFieldUpdateOperationsInput | string
    alunos?: AlunoUncheckedUpdateManyWithoutGrupoAlunoNestedInput
  }

  export type AlunoUpdateWithoutGrupoAlunoInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    matricula?: IntFieldUpdateOperationsInput | number
    telefone?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    grupo?: GrupoUpdateOneWithoutLiderNestedInput
  }

  export type AlunoUncheckedUpdateWithoutGrupoAlunoInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    matricula?: IntFieldUpdateOperationsInput | number
    telefone?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    grupo?: GrupoUncheckedUpdateOneWithoutLiderNestedInput
  }

  export type AlunoUncheckedUpdateManyWithoutGrupoAlunoInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    matricula?: IntFieldUpdateOperationsInput | number
    telefone?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GrupoUpdateWithoutNumeroEstandeInput = {
    id?: StringFieldUpdateOperationsInput | string
    nomeGrupo?: StringFieldUpdateOperationsInput | string
    nomeProjeto?: StringFieldUpdateOperationsInput | string
    diaApresentacao?: DateTimeFieldUpdateOperationsInput | Date | string
    avaliacao?: AvaliacaoUpdateOneWithoutNomeGrupoNestedInput
    lider?: AlunoUpdateOneRequiredWithoutGrupoNestedInput
    alunos?: AlunoUpdateManyWithoutGrupoAlunoNestedInput
  }

  export type GrupoUncheckedUpdateWithoutNumeroEstandeInput = {
    id?: StringFieldUpdateOperationsInput | string
    nomeGrupo?: StringFieldUpdateOperationsInput | string
    nomeProjeto?: StringFieldUpdateOperationsInput | string
    diaApresentacao?: DateTimeFieldUpdateOperationsInput | Date | string
    alunoId?: StringFieldUpdateOperationsInput | string
    avaliacao?: AvaliacaoUncheckedUpdateOneWithoutNomeGrupoNestedInput
    alunos?: AlunoUncheckedUpdateManyWithoutGrupoAlunoNestedInput
  }

  export type GrupoUncheckedUpdateManyWithoutNumeroEstandeInput = {
    id?: StringFieldUpdateOperationsInput | string
    nomeGrupo?: StringFieldUpdateOperationsInput | string
    nomeProjeto?: StringFieldUpdateOperationsInput | string
    diaApresentacao?: DateTimeFieldUpdateOperationsInput | Date | string
    alunoId?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use GrupoCountOutputTypeDefaultArgs instead
     */
    export type GrupoCountOutputTypeArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = GrupoCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use EstandeCountOutputTypeDefaultArgs instead
     */
    export type EstandeCountOutputTypeArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = EstandeCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AlunoDefaultArgs instead
     */
    export type AlunoArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = AlunoDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ProfessorDefaultArgs instead
     */
    export type ProfessorArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = ProfessorDefaultArgs<ExtArgs>
    /**
     * @deprecated Use GrupoDefaultArgs instead
     */
    export type GrupoArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = GrupoDefaultArgs<ExtArgs>
    /**
     * @deprecated Use EstandeDefaultArgs instead
     */
    export type EstandeArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = EstandeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AvaliacaoDefaultArgs instead
     */
    export type AvaliacaoArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = AvaliacaoDefaultArgs<ExtArgs>

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