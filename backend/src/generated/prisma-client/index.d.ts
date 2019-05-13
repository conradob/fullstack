// Code generated by Prisma (prisma@1.32.2). DO NOT EDIT.
// Please don't change this file manually but run `prisma generate` to update it.
// For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

import { DocumentNode } from "graphql";
import {
  makePrismaClientClass,
  BaseClientOptions,
  Model
} from "prisma-client-lib";
import { typeDefs } from "./prisma-schema";

export type AtLeastOne<T, U = { [K in keyof T]: Pick<T, K> }> = Partial<T> &
  U[keyof U];

export type Maybe<T> = T | undefined | null;

export interface Exists {
  tutor: (where?: TutorWhereInput) => Promise<boolean>;
}

export interface Node {}

export type FragmentableArray<T> = Promise<Array<T>> & Fragmentable;

export interface Fragmentable {
  $fragment<T>(fragment: string | DocumentNode): Promise<T>;
}

export interface Prisma {
  $exists: Exists;
  $graphql: <T = any>(
    query: string,
    variables?: { [key: string]: any }
  ) => Promise<T>;

  /**
   * Queries
   */

  tutor: (where: TutorWhereUniqueInput) => TutorNullablePromise;
  tutors: (args?: {
    where?: TutorWhereInput;
    orderBy?: TutorOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => FragmentableArray<Tutor>;
  tutorsConnection: (args?: {
    where?: TutorWhereInput;
    orderBy?: TutorOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => TutorConnectionPromise;
  node: (args: { id: ID_Output }) => Node;

  /**
   * Mutations
   */

  createTutor: (data: TutorCreateInput) => TutorPromise;
  updateTutor: (args: {
    data: TutorUpdateInput;
    where: TutorWhereUniqueInput;
  }) => TutorPromise;
  updateManyTutors: (args: {
    data: TutorUpdateManyMutationInput;
    where?: TutorWhereInput;
  }) => BatchPayloadPromise;
  upsertTutor: (args: {
    where: TutorWhereUniqueInput;
    create: TutorCreateInput;
    update: TutorUpdateInput;
  }) => TutorPromise;
  deleteTutor: (where: TutorWhereUniqueInput) => TutorPromise;
  deleteManyTutors: (where?: TutorWhereInput) => BatchPayloadPromise;

  /**
   * Subscriptions
   */

  $subscribe: Subscription;
}

export interface Subscription {
  tutor: (
    where?: TutorSubscriptionWhereInput
  ) => TutorSubscriptionPayloadSubscription;
}

export interface ClientConstructor<T> {
  new (options?: BaseClientOptions): T;
}

/**
 * Types
 */

export type TutorOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "name_ASC"
  | "name_DESC"
  | "description_ASC"
  | "description_DESC";

export type MutationType = "CREATED" | "UPDATED" | "DELETED";

export interface TutorCreateInput {
  id?: Maybe<ID_Input>;
  name: String;
  description: String;
}

export interface TutorUpdateInput {
  name?: Maybe<String>;
  description?: Maybe<String>;
}

export interface TutorUpdateManyMutationInput {
  name?: Maybe<String>;
  description?: Maybe<String>;
}

export interface TutorWhereInput {
  id?: Maybe<ID_Input>;
  id_not?: Maybe<ID_Input>;
  id_in?: Maybe<ID_Input[] | ID_Input>;
  id_not_in?: Maybe<ID_Input[] | ID_Input>;
  id_lt?: Maybe<ID_Input>;
  id_lte?: Maybe<ID_Input>;
  id_gt?: Maybe<ID_Input>;
  id_gte?: Maybe<ID_Input>;
  id_contains?: Maybe<ID_Input>;
  id_not_contains?: Maybe<ID_Input>;
  id_starts_with?: Maybe<ID_Input>;
  id_not_starts_with?: Maybe<ID_Input>;
  id_ends_with?: Maybe<ID_Input>;
  id_not_ends_with?: Maybe<ID_Input>;
  name?: Maybe<String>;
  name_not?: Maybe<String>;
  name_in?: Maybe<String[] | String>;
  name_not_in?: Maybe<String[] | String>;
  name_lt?: Maybe<String>;
  name_lte?: Maybe<String>;
  name_gt?: Maybe<String>;
  name_gte?: Maybe<String>;
  name_contains?: Maybe<String>;
  name_not_contains?: Maybe<String>;
  name_starts_with?: Maybe<String>;
  name_not_starts_with?: Maybe<String>;
  name_ends_with?: Maybe<String>;
  name_not_ends_with?: Maybe<String>;
  description?: Maybe<String>;
  description_not?: Maybe<String>;
  description_in?: Maybe<String[] | String>;
  description_not_in?: Maybe<String[] | String>;
  description_lt?: Maybe<String>;
  description_lte?: Maybe<String>;
  description_gt?: Maybe<String>;
  description_gte?: Maybe<String>;
  description_contains?: Maybe<String>;
  description_not_contains?: Maybe<String>;
  description_starts_with?: Maybe<String>;
  description_not_starts_with?: Maybe<String>;
  description_ends_with?: Maybe<String>;
  description_not_ends_with?: Maybe<String>;
  AND?: Maybe<TutorWhereInput[] | TutorWhereInput>;
  OR?: Maybe<TutorWhereInput[] | TutorWhereInput>;
  NOT?: Maybe<TutorWhereInput[] | TutorWhereInput>;
}

export interface TutorSubscriptionWhereInput {
  mutation_in?: Maybe<MutationType[] | MutationType>;
  updatedFields_contains?: Maybe<String>;
  updatedFields_contains_every?: Maybe<String[] | String>;
  updatedFields_contains_some?: Maybe<String[] | String>;
  node?: Maybe<TutorWhereInput>;
  AND?: Maybe<TutorSubscriptionWhereInput[] | TutorSubscriptionWhereInput>;
  OR?: Maybe<TutorSubscriptionWhereInput[] | TutorSubscriptionWhereInput>;
  NOT?: Maybe<TutorSubscriptionWhereInput[] | TutorSubscriptionWhereInput>;
}

export type TutorWhereUniqueInput = AtLeastOne<{
  id: Maybe<ID_Input>;
}>;

export interface NodeNode {
  id: ID_Output;
}

export interface AggregateTutor {
  count: Int;
}

export interface AggregateTutorPromise
  extends Promise<AggregateTutor>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateTutorSubscription
  extends Promise<AsyncIterator<AggregateTutor>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface BatchPayload {
  count: Long;
}

export interface BatchPayloadPromise
  extends Promise<BatchPayload>,
    Fragmentable {
  count: () => Promise<Long>;
}

export interface BatchPayloadSubscription
  extends Promise<AsyncIterator<BatchPayload>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Long>>;
}

export interface TutorPreviousValues {
  id: ID_Output;
  name: String;
  description: String;
}

export interface TutorPreviousValuesPromise
  extends Promise<TutorPreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  name: () => Promise<String>;
  description: () => Promise<String>;
}

export interface TutorPreviousValuesSubscription
  extends Promise<AsyncIterator<TutorPreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  name: () => Promise<AsyncIterator<String>>;
  description: () => Promise<AsyncIterator<String>>;
}

export interface TutorEdge {
  node: Tutor;
  cursor: String;
}

export interface TutorEdgePromise extends Promise<TutorEdge>, Fragmentable {
  node: <T = TutorPromise>() => T;
  cursor: () => Promise<String>;
}

export interface TutorEdgeSubscription
  extends Promise<AsyncIterator<TutorEdge>>,
    Fragmentable {
  node: <T = TutorSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface TutorSubscriptionPayload {
  mutation: MutationType;
  node: Tutor;
  updatedFields: String[];
  previousValues: TutorPreviousValues;
}

export interface TutorSubscriptionPayloadPromise
  extends Promise<TutorSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = TutorPromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = TutorPreviousValuesPromise>() => T;
}

export interface TutorSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<TutorSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = TutorSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = TutorPreviousValuesSubscription>() => T;
}

export interface Tutor {
  id: ID_Output;
  name: String;
  description: String;
}

export interface TutorPromise extends Promise<Tutor>, Fragmentable {
  id: () => Promise<ID_Output>;
  name: () => Promise<String>;
  description: () => Promise<String>;
}

export interface TutorSubscription
  extends Promise<AsyncIterator<Tutor>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  name: () => Promise<AsyncIterator<String>>;
  description: () => Promise<AsyncIterator<String>>;
}

export interface TutorNullablePromise
  extends Promise<Tutor | null>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  name: () => Promise<String>;
  description: () => Promise<String>;
}

export interface TutorConnection {
  pageInfo: PageInfo;
  edges: TutorEdge[];
}

export interface TutorConnectionPromise
  extends Promise<TutorConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<TutorEdge>>() => T;
  aggregate: <T = AggregateTutorPromise>() => T;
}

export interface TutorConnectionSubscription
  extends Promise<AsyncIterator<TutorConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<TutorEdgeSubscription>>>() => T;
  aggregate: <T = AggregateTutorSubscription>() => T;
}

export interface PageInfo {
  hasNextPage: Boolean;
  hasPreviousPage: Boolean;
  startCursor?: String;
  endCursor?: String;
}

export interface PageInfoPromise extends Promise<PageInfo>, Fragmentable {
  hasNextPage: () => Promise<Boolean>;
  hasPreviousPage: () => Promise<Boolean>;
  startCursor: () => Promise<String>;
  endCursor: () => Promise<String>;
}

export interface PageInfoSubscription
  extends Promise<AsyncIterator<PageInfo>>,
    Fragmentable {
  hasNextPage: () => Promise<AsyncIterator<Boolean>>;
  hasPreviousPage: () => Promise<AsyncIterator<Boolean>>;
  startCursor: () => Promise<AsyncIterator<String>>;
  endCursor: () => Promise<AsyncIterator<String>>;
}

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string;

export type Long = string;

/*
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type ID_Input = string | number;
export type ID_Output = string;

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. 
*/
export type Int = number;

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean;

/**
 * Model Metadata
 */

export const models: Model[] = [
  {
    name: "Tutor",
    embedded: false
  }
];

/**
 * Type Defs
 */

export const prisma: Prisma;
