// @ts-nocheck
import { z } from 'zod'
import { GraphQLClient } from 'graphql-request'
import { GraphQLClientRequestHeaders } from 'graphql-request/build/cjs/types'
import { GraphQLError, print } from 'graphql'
import gql from 'graphql-tag'
export type Maybe<T> = T | null
export type InputMaybe<T> = Maybe<T>
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] }
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> }
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> }
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never }
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never }
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string }
  String: { input: string; output: string }
  Boolean: { input: boolean; output: boolean }
  Int: { input: number; output: number }
  Float: { input: number; output: number }
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: { input: Date; output: Date }
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: { input: any; output: any }
}

export type AdminCreateCommunityMemberInput = {
  communityId: Scalars['String']['input']
  role?: InputMaybe<CommunityMemberRole>
  userId: Scalars['String']['input']
}

export type AdminCreateIdentityInput = {
  ownerId: Scalars['String']['input']
  provider: IdentityProvider
  providerId: Scalars['String']['input']
}

export type AdminCreateUserInput = {
  password?: InputMaybe<Scalars['String']['input']>
  username: Scalars['String']['input']
}

export type AdminFindManyCommunityInput = {
  limit?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
}

export type AdminFindManyCommunityMemberInput = {
  communityId: Scalars['String']['input']
  limit?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  role?: InputMaybe<CommunityMemberRole>
  search?: InputMaybe<Scalars['String']['input']>
}

export type AdminFindManyIdentityInput = {
  ownerId?: InputMaybe<Scalars['String']['input']>
  provider?: InputMaybe<IdentityProvider>
}

export type AdminFindManyMintInput = {
  communityId: Scalars['String']['input']
  limit?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
}

export type AdminFindManyUserInput = {
  limit?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  role?: InputMaybe<UserRole>
  search?: InputMaybe<Scalars['String']['input']>
  status?: InputMaybe<UserStatus>
}

export type AdminUpdateCommunityInput = {
  description?: InputMaybe<Scalars['String']['input']>
  imageUrl?: InputMaybe<Scalars['String']['input']>
  name?: InputMaybe<Scalars['String']['input']>
}

export type AdminUpdateCommunityMemberInput = {
  role?: InputMaybe<CommunityMemberRole>
}

export type AdminUpdateMintInput = {
  decimals?: InputMaybe<Scalars['Float']['input']>
  imageUrl?: InputMaybe<Scalars['String']['input']>
  name?: InputMaybe<Scalars['String']['input']>
  secretKey?: InputMaybe<Scalars['String']['input']>
  symbol?: InputMaybe<Scalars['String']['input']>
}

export type AdminUpdateUserInput = {
  avatarUrl?: InputMaybe<Scalars['String']['input']>
  developer?: InputMaybe<Scalars['Boolean']['input']>
  name?: InputMaybe<Scalars['String']['input']>
  role?: InputMaybe<UserRole>
  status?: InputMaybe<UserStatus>
  username?: InputMaybe<Scalars['String']['input']>
}

export type AnonFindManyCommunityInput = {
  limit?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
}

export type AppConfig = {
  __typename?: 'AppConfig'
  authDiscordEnabled: Scalars['Boolean']['output']
  authGithubEnabled: Scalars['Boolean']['output']
  authGoogleEnabled: Scalars['Boolean']['output']
  authPasswordEnabled: Scalars['Boolean']['output']
  authRegisterEnabled: Scalars['Boolean']['output']
  authSolanaEnabled: Scalars['Boolean']['output']
  authTwitterEnabled: Scalars['Boolean']['output']
}

export type Community = {
  __typename?: 'Community'
  createdAt?: Maybe<Scalars['DateTime']['output']>
  description: Scalars['String']['output']
  id: Scalars['String']['output']
  imageUrl?: Maybe<Scalars['String']['output']>
  name: Scalars['String']['output']
  publicUrl?: Maybe<Scalars['String']['output']>
  slug: Scalars['String']['output']
  updatedAt?: Maybe<Scalars['DateTime']['output']>
  viewUrl?: Maybe<Scalars['String']['output']>
}

export type CommunityMember = {
  __typename?: 'CommunityMember'
  communityId: Scalars['String']['output']
  createdAt?: Maybe<Scalars['DateTime']['output']>
  id: Scalars['String']['output']
  role: CommunityMemberRole
  updatedAt?: Maybe<Scalars['DateTime']['output']>
  user?: Maybe<User>
  userId: Scalars['String']['output']
}

export type CommunityMemberPaging = {
  __typename?: 'CommunityMemberPaging'
  data: Array<CommunityMember>
  meta: PagingMeta
}

export enum CommunityMemberRole {
  Admin = 'Admin',
  Member = 'Member',
}

export type CommunityPaging = {
  __typename?: 'CommunityPaging'
  data: Array<Community>
  meta: PagingMeta
}

export type Identity = {
  __typename?: 'Identity'
  challenges?: Maybe<Array<IdentityChallenge>>
  createdAt: Scalars['DateTime']['output']
  expired?: Maybe<Scalars['Boolean']['output']>
  id: Scalars['String']['output']
  name?: Maybe<Scalars['String']['output']>
  owner?: Maybe<User>
  profile?: Maybe<Scalars['JSON']['output']>
  provider: IdentityProvider
  providerId: Scalars['String']['output']
  updatedAt: Scalars['DateTime']['output']
  url?: Maybe<Scalars['String']['output']>
  verified?: Maybe<Scalars['Boolean']['output']>
}

export type IdentityChallenge = {
  __typename?: 'IdentityChallenge'
  challenge: Scalars['String']['output']
  createdAt: Scalars['DateTime']['output']
  id: Scalars['String']['output']
  ip: Scalars['String']['output']
  provider: IdentityProvider
  providerId: Scalars['String']['output']
  signature?: Maybe<Scalars['String']['output']>
  updatedAt: Scalars['DateTime']['output']
  userAgent: Scalars['String']['output']
  verified: Scalars['Boolean']['output']
}

export enum IdentityProvider {
  Discord = 'Discord',
  GitHub = 'GitHub',
  Google = 'Google',
  Solana = 'Solana',
  Twitter = 'Twitter',
}

export type LinkIdentityInput = {
  provider: IdentityProvider
  providerId: Scalars['String']['input']
}

export type LoginInput = {
  password: Scalars['String']['input']
  username: Scalars['String']['input']
}

export type Mint = {
  __typename?: 'Mint'
  createdAt?: Maybe<Scalars['DateTime']['output']>
  decimals: Scalars['Float']['output']
  id: Scalars['String']['output']
  imageUrl?: Maybe<Scalars['String']['output']>
  name: Scalars['String']['output']
  publicKey: Scalars['String']['output']
  symbol: Scalars['String']['output']
  updatedAt?: Maybe<Scalars['DateTime']['output']>
}

export type MintPaging = {
  __typename?: 'MintPaging'
  data: Array<Mint>
  meta: PagingMeta
}

export type Mutation = {
  __typename?: 'Mutation'
  adminCreateCommunityMember?: Maybe<CommunityMember>
  adminCreateIdentity?: Maybe<Identity>
  adminCreateUser?: Maybe<User>
  adminDeleteCommunity?: Maybe<Scalars['Boolean']['output']>
  adminDeleteCommunityMember?: Maybe<Scalars['Boolean']['output']>
  adminDeleteIdentity?: Maybe<Scalars['Boolean']['output']>
  adminDeleteMint?: Maybe<Scalars['Boolean']['output']>
  adminDeleteUser?: Maybe<Scalars['Boolean']['output']>
  adminUpdateCommunity?: Maybe<Community>
  adminUpdateCommunityMember?: Maybe<CommunityMember>
  adminUpdateMint?: Maybe<Mint>
  adminUpdateUser?: Maybe<User>
  anonVerifyIdentityChallenge?: Maybe<IdentityChallenge>
  login?: Maybe<User>
  logout?: Maybe<Scalars['Boolean']['output']>
  register?: Maybe<User>
  userCreateCommunity?: Maybe<Community>
  userCreateCommunityMember?: Maybe<CommunityMember>
  userCreateMint?: Maybe<Mint>
  userDeleteCommunity?: Maybe<Scalars['Boolean']['output']>
  userDeleteCommunityMember?: Maybe<Scalars['Boolean']['output']>
  userDeleteIdentity?: Maybe<Scalars['Boolean']['output']>
  userDeleteMint?: Maybe<Scalars['Boolean']['output']>
  userLinkIdentity?: Maybe<Identity>
  userMintToIdentity?: Maybe<Scalars['JSON']['output']>
  userUpdateCommunity?: Maybe<Community>
  userUpdateCommunityMember?: Maybe<CommunityMember>
  userUpdateMint?: Maybe<Mint>
  userUpdateUser?: Maybe<User>
  userVerifyIdentityChallenge?: Maybe<IdentityChallenge>
}

export type MutationAdminCreateCommunityMemberArgs = {
  input: AdminCreateCommunityMemberInput
}

export type MutationAdminCreateIdentityArgs = {
  input: AdminCreateIdentityInput
}

export type MutationAdminCreateUserArgs = {
  input: AdminCreateUserInput
}

export type MutationAdminDeleteCommunityArgs = {
  communityId: Scalars['String']['input']
}

export type MutationAdminDeleteCommunityMemberArgs = {
  communityMemberId: Scalars['String']['input']
}

export type MutationAdminDeleteIdentityArgs = {
  identityId: Scalars['String']['input']
}

export type MutationAdminDeleteMintArgs = {
  mintId: Scalars['String']['input']
}

export type MutationAdminDeleteUserArgs = {
  userId: Scalars['String']['input']
}

export type MutationAdminUpdateCommunityArgs = {
  communityId: Scalars['String']['input']
  input: AdminUpdateCommunityInput
}

export type MutationAdminUpdateCommunityMemberArgs = {
  communityMemberId: Scalars['String']['input']
  input: AdminUpdateCommunityMemberInput
}

export type MutationAdminUpdateMintArgs = {
  input: AdminUpdateMintInput
  mintId: Scalars['String']['input']
}

export type MutationAdminUpdateUserArgs = {
  input: AdminUpdateUserInput
  userId: Scalars['String']['input']
}

export type MutationAnonVerifyIdentityChallengeArgs = {
  input: VerifyIdentityChallengeInput
}

export type MutationLoginArgs = {
  input: LoginInput
}

export type MutationRegisterArgs = {
  input: RegisterInput
}

export type MutationUserCreateCommunityArgs = {
  input: UserCreateCommunityInput
}

export type MutationUserCreateCommunityMemberArgs = {
  input: UserCreateCommunityMemberInput
}

export type MutationUserCreateMintArgs = {
  input: UserCreateMintInput
}

export type MutationUserDeleteCommunityArgs = {
  communityId: Scalars['String']['input']
}

export type MutationUserDeleteCommunityMemberArgs = {
  communityMemberId: Scalars['String']['input']
}

export type MutationUserDeleteIdentityArgs = {
  identityId: Scalars['String']['input']
}

export type MutationUserDeleteMintArgs = {
  mintId: Scalars['String']['input']
}

export type MutationUserLinkIdentityArgs = {
  input: LinkIdentityInput
}

export type MutationUserMintToIdentityArgs = {
  identityId: Scalars['String']['input']
  mintId: Scalars['String']['input']
}

export type MutationUserUpdateCommunityArgs = {
  communityId: Scalars['String']['input']
  input: UserUpdateCommunityInput
}

export type MutationUserUpdateCommunityMemberArgs = {
  communityMemberId: Scalars['String']['input']
  input: UserUpdateCommunityMemberInput
}

export type MutationUserUpdateMintArgs = {
  input: UserUpdateMintInput
  mintId: Scalars['String']['input']
}

export type MutationUserUpdateUserArgs = {
  input: UserUpdateUserInput
}

export type MutationUserVerifyIdentityChallengeArgs = {
  input: VerifyIdentityChallengeInput
}

export type PagingMeta = {
  __typename?: 'PagingMeta'
  currentPage: Scalars['Int']['output']
  isFirstPage: Scalars['Boolean']['output']
  isLastPage: Scalars['Boolean']['output']
  nextPage?: Maybe<Scalars['Int']['output']>
  pageCount?: Maybe<Scalars['Int']['output']>
  previousPage?: Maybe<Scalars['Int']['output']>
  totalCount?: Maybe<Scalars['Int']['output']>
}

export type Query = {
  __typename?: 'Query'
  adminFindManyCommunity: CommunityPaging
  adminFindManyCommunityMember: CommunityMemberPaging
  adminFindManyIdentity?: Maybe<Array<Identity>>
  adminFindManyMint: MintPaging
  adminFindManyUser: UserPaging
  adminFindOneCommunity?: Maybe<Community>
  adminFindOneCommunityMember?: Maybe<CommunityMember>
  adminFindOneMint?: Maybe<Mint>
  adminFindOneUser?: Maybe<User>
  anonFindManyCommunity: CommunityPaging
  anonFindOneCommunity?: Maybe<Community>
  anonRequestIdentityChallenge?: Maybe<IdentityChallenge>
  appConfig: AppConfig
  me?: Maybe<User>
  uptime: Scalars['Float']['output']
  userFindManyCommunity: CommunityPaging
  userFindManyCommunityMember: CommunityMemberPaging
  userFindManyIdentity?: Maybe<Array<Identity>>
  userFindManyMint: MintPaging
  userFindManyUser: UserPaging
  userFindOneCommunity?: Maybe<Community>
  userFindOneCommunityMember?: Maybe<CommunityMember>
  userFindOneMint?: Maybe<Mint>
  userFindOneUser?: Maybe<User>
  userGetMintAccount?: Maybe<Scalars['JSON']['output']>
  userRequestIdentityChallenge?: Maybe<IdentityChallenge>
}

export type QueryAdminFindManyCommunityArgs = {
  input: AdminFindManyCommunityInput
}

export type QueryAdminFindManyCommunityMemberArgs = {
  input: AdminFindManyCommunityMemberInput
}

export type QueryAdminFindManyIdentityArgs = {
  input: AdminFindManyIdentityInput
}

export type QueryAdminFindManyMintArgs = {
  input: AdminFindManyMintInput
}

export type QueryAdminFindManyUserArgs = {
  input: AdminFindManyUserInput
}

export type QueryAdminFindOneCommunityArgs = {
  communityId: Scalars['String']['input']
}

export type QueryAdminFindOneCommunityMemberArgs = {
  communityMemberId: Scalars['String']['input']
}

export type QueryAdminFindOneMintArgs = {
  mintId: Scalars['String']['input']
}

export type QueryAdminFindOneUserArgs = {
  userId: Scalars['String']['input']
}

export type QueryAnonFindManyCommunityArgs = {
  input: AnonFindManyCommunityInput
}

export type QueryAnonFindOneCommunityArgs = {
  slug: Scalars['String']['input']
}

export type QueryAnonRequestIdentityChallengeArgs = {
  input: RequestIdentityChallengeInput
}

export type QueryUserFindManyCommunityArgs = {
  input: UserFindManyCommunityInput
}

export type QueryUserFindManyCommunityMemberArgs = {
  input: UserFindManyCommunityMemberInput
}

export type QueryUserFindManyIdentityArgs = {
  input: UserFindManyIdentityInput
}

export type QueryUserFindManyMintArgs = {
  input: UserFindManyMintInput
}

export type QueryUserFindManyUserArgs = {
  input: UserFindManyUserInput
}

export type QueryUserFindOneCommunityArgs = {
  slug: Scalars['String']['input']
}

export type QueryUserFindOneCommunityMemberArgs = {
  communityMemberId: Scalars['String']['input']
}

export type QueryUserFindOneMintArgs = {
  mintId: Scalars['String']['input']
}

export type QueryUserFindOneUserArgs = {
  username: Scalars['String']['input']
}

export type QueryUserGetMintAccountArgs = {
  mintId: Scalars['String']['input']
}

export type QueryUserRequestIdentityChallengeArgs = {
  input: RequestIdentityChallengeInput
}

export type RegisterInput = {
  password: Scalars['String']['input']
  username: Scalars['String']['input']
}

export type RequestIdentityChallengeInput = {
  provider: IdentityProvider
  providerId: Scalars['String']['input']
}

export type User = {
  __typename?: 'User'
  avatarUrl?: Maybe<Scalars['String']['output']>
  createdAt?: Maybe<Scalars['DateTime']['output']>
  developer?: Maybe<Scalars['Boolean']['output']>
  id: Scalars['String']['output']
  identities?: Maybe<Array<Identity>>
  name?: Maybe<Scalars['String']['output']>
  profileUrl: Scalars['String']['output']
  role?: Maybe<UserRole>
  status?: Maybe<UserStatus>
  updatedAt?: Maybe<Scalars['DateTime']['output']>
  username?: Maybe<Scalars['String']['output']>
}

export type UserCreateCommunityInput = {
  description: Scalars['String']['input']
  imageUrl?: InputMaybe<Scalars['String']['input']>
  name: Scalars['String']['input']
}

export type UserCreateCommunityMemberInput = {
  communityId: Scalars['String']['input']
  role?: InputMaybe<CommunityMemberRole>
  userId: Scalars['String']['input']
}

export type UserCreateMintInput = {
  communityId: Scalars['String']['input']
  decimals?: InputMaybe<Scalars['Float']['input']>
  imageUrl?: InputMaybe<Scalars['String']['input']>
  name: Scalars['String']['input']
  secretKey?: InputMaybe<Scalars['String']['input']>
  symbol: Scalars['String']['input']
}

export type UserFindManyCommunityInput = {
  limit?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
}

export type UserFindManyCommunityMemberInput = {
  communityId: Scalars['String']['input']
  limit?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  role?: InputMaybe<CommunityMemberRole>
  search?: InputMaybe<Scalars['String']['input']>
}

export type UserFindManyIdentityInput = {
  username: Scalars['String']['input']
}

export type UserFindManyMintInput = {
  communityId: Scalars['String']['input']
  limit?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
}

export type UserFindManyUserInput = {
  limit?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
}

export type UserPaging = {
  __typename?: 'UserPaging'
  data: Array<User>
  meta: PagingMeta
}

export enum UserRole {
  Admin = 'Admin',
  User = 'User',
}

export enum UserStatus {
  Active = 'Active',
  Created = 'Created',
  Inactive = 'Inactive',
}

export type UserUpdateCommunityInput = {
  description?: InputMaybe<Scalars['String']['input']>
  imageUrl?: InputMaybe<Scalars['String']['input']>
  name?: InputMaybe<Scalars['String']['input']>
}

export type UserUpdateCommunityMemberInput = {
  role?: InputMaybe<CommunityMemberRole>
}

export type UserUpdateMintInput = {
  decimals?: InputMaybe<Scalars['Float']['input']>
  imageUrl?: InputMaybe<Scalars['String']['input']>
  name?: InputMaybe<Scalars['String']['input']>
  secretKey?: InputMaybe<Scalars['String']['input']>
  symbol?: InputMaybe<Scalars['String']['input']>
}

export type UserUpdateUserInput = {
  avatarUrl?: InputMaybe<Scalars['String']['input']>
  developer?: InputMaybe<Scalars['Boolean']['input']>
  name?: InputMaybe<Scalars['String']['input']>
}

export type VerifyIdentityChallengeInput = {
  challenge: Scalars['String']['input']
  provider: IdentityProvider
  providerId: Scalars['String']['input']
  signature: Scalars['String']['input']
  useLedger?: InputMaybe<Scalars['Boolean']['input']>
}

export type LoginMutationVariables = Exact<{
  input: LoginInput
}>

export type LoginMutation = {
  __typename?: 'Mutation'
  login?: {
    __typename?: 'User'
    avatarUrl?: string | null
    createdAt?: Date | null
    developer?: boolean | null
    id: string
    name?: string | null
    profileUrl: string
    role?: UserRole | null
    status?: UserStatus | null
    updatedAt?: Date | null
    username?: string | null
  } | null
}

export type LogoutMutationVariables = Exact<{ [key: string]: never }>

export type LogoutMutation = { __typename?: 'Mutation'; logout?: boolean | null }

export type RegisterMutationVariables = Exact<{
  input: RegisterInput
}>

export type RegisterMutation = {
  __typename?: 'Mutation'
  register?: {
    __typename?: 'User'
    avatarUrl?: string | null
    createdAt?: Date | null
    developer?: boolean | null
    id: string
    name?: string | null
    profileUrl: string
    role?: UserRole | null
    status?: UserStatus | null
    updatedAt?: Date | null
    username?: string | null
  } | null
}

export type MeQueryVariables = Exact<{ [key: string]: never }>

export type MeQuery = {
  __typename?: 'Query'
  me?: {
    __typename?: 'User'
    avatarUrl?: string | null
    createdAt?: Date | null
    developer?: boolean | null
    id: string
    name?: string | null
    profileUrl: string
    role?: UserRole | null
    status?: UserStatus | null
    updatedAt?: Date | null
    username?: string | null
    identities?: Array<{
      __typename?: 'Identity'
      createdAt: Date
      expired?: boolean | null
      id: string
      name?: string | null
      profile?: any | null
      provider: IdentityProvider
      providerId: string
      updatedAt: Date
      url?: string | null
      verified?: boolean | null
    }> | null
  } | null
}

export type CommunityMemberDetailsFragment = {
  __typename?: 'CommunityMember'
  createdAt?: Date | null
  id: string
  userId: string
  communityId: string
  role: CommunityMemberRole
  updatedAt?: Date | null
  user?: {
    __typename?: 'User'
    avatarUrl?: string | null
    createdAt?: Date | null
    developer?: boolean | null
    id: string
    name?: string | null
    profileUrl: string
    role?: UserRole | null
    status?: UserStatus | null
    updatedAt?: Date | null
    username?: string | null
  } | null
}

export type UserFindManyCommunityMemberQueryVariables = Exact<{
  input: UserFindManyCommunityMemberInput
}>

export type UserFindManyCommunityMemberQuery = {
  __typename?: 'Query'
  paging: {
    __typename?: 'CommunityMemberPaging'
    data: Array<{
      __typename?: 'CommunityMember'
      createdAt?: Date | null
      id: string
      userId: string
      communityId: string
      role: CommunityMemberRole
      updatedAt?: Date | null
      user?: {
        __typename?: 'User'
        avatarUrl?: string | null
        createdAt?: Date | null
        developer?: boolean | null
        id: string
        name?: string | null
        profileUrl: string
        role?: UserRole | null
        status?: UserStatus | null
        updatedAt?: Date | null
        username?: string | null
      } | null
    }>
    meta: {
      __typename?: 'PagingMeta'
      currentPage: number
      isFirstPage: boolean
      isLastPage: boolean
      nextPage?: number | null
      pageCount?: number | null
      previousPage?: number | null
      totalCount?: number | null
    }
  }
}

export type UserFindOneCommunityMemberQueryVariables = Exact<{
  communityMemberId: Scalars['String']['input']
}>

export type UserFindOneCommunityMemberQuery = {
  __typename?: 'Query'
  item?: {
    __typename?: 'CommunityMember'
    createdAt?: Date | null
    id: string
    userId: string
    communityId: string
    role: CommunityMemberRole
    updatedAt?: Date | null
    user?: {
      __typename?: 'User'
      avatarUrl?: string | null
      createdAt?: Date | null
      developer?: boolean | null
      id: string
      name?: string | null
      profileUrl: string
      role?: UserRole | null
      status?: UserStatus | null
      updatedAt?: Date | null
      username?: string | null
    } | null
  } | null
}

export type UserCreateCommunityMemberMutationVariables = Exact<{
  input: UserCreateCommunityMemberInput
}>

export type UserCreateCommunityMemberMutation = {
  __typename?: 'Mutation'
  created?: {
    __typename?: 'CommunityMember'
    createdAt?: Date | null
    id: string
    userId: string
    communityId: string
    role: CommunityMemberRole
    updatedAt?: Date | null
    user?: {
      __typename?: 'User'
      avatarUrl?: string | null
      createdAt?: Date | null
      developer?: boolean | null
      id: string
      name?: string | null
      profileUrl: string
      role?: UserRole | null
      status?: UserStatus | null
      updatedAt?: Date | null
      username?: string | null
    } | null
  } | null
}

export type UserUpdateCommunityMemberMutationVariables = Exact<{
  communityMemberId: Scalars['String']['input']
  input: UserUpdateCommunityMemberInput
}>

export type UserUpdateCommunityMemberMutation = {
  __typename?: 'Mutation'
  updated?: {
    __typename?: 'CommunityMember'
    createdAt?: Date | null
    id: string
    userId: string
    communityId: string
    role: CommunityMemberRole
    updatedAt?: Date | null
    user?: {
      __typename?: 'User'
      avatarUrl?: string | null
      createdAt?: Date | null
      developer?: boolean | null
      id: string
      name?: string | null
      profileUrl: string
      role?: UserRole | null
      status?: UserStatus | null
      updatedAt?: Date | null
      username?: string | null
    } | null
  } | null
}

export type UserDeleteCommunityMemberMutationVariables = Exact<{
  communityMemberId: Scalars['String']['input']
}>

export type UserDeleteCommunityMemberMutation = { __typename?: 'Mutation'; deleted?: boolean | null }

export type AdminFindManyCommunityMemberQueryVariables = Exact<{
  input: AdminFindManyCommunityMemberInput
}>

export type AdminFindManyCommunityMemberQuery = {
  __typename?: 'Query'
  paging: {
    __typename?: 'CommunityMemberPaging'
    data: Array<{
      __typename?: 'CommunityMember'
      createdAt?: Date | null
      id: string
      userId: string
      communityId: string
      role: CommunityMemberRole
      updatedAt?: Date | null
      user?: {
        __typename?: 'User'
        avatarUrl?: string | null
        createdAt?: Date | null
        developer?: boolean | null
        id: string
        name?: string | null
        profileUrl: string
        role?: UserRole | null
        status?: UserStatus | null
        updatedAt?: Date | null
        username?: string | null
      } | null
    }>
    meta: {
      __typename?: 'PagingMeta'
      currentPage: number
      isFirstPage: boolean
      isLastPage: boolean
      nextPage?: number | null
      pageCount?: number | null
      previousPage?: number | null
      totalCount?: number | null
    }
  }
}

export type AdminFindOneCommunityMemberQueryVariables = Exact<{
  communityMemberId: Scalars['String']['input']
}>

export type AdminFindOneCommunityMemberQuery = {
  __typename?: 'Query'
  item?: {
    __typename?: 'CommunityMember'
    createdAt?: Date | null
    id: string
    userId: string
    communityId: string
    role: CommunityMemberRole
    updatedAt?: Date | null
    user?: {
      __typename?: 'User'
      avatarUrl?: string | null
      createdAt?: Date | null
      developer?: boolean | null
      id: string
      name?: string | null
      profileUrl: string
      role?: UserRole | null
      status?: UserStatus | null
      updatedAt?: Date | null
      username?: string | null
    } | null
  } | null
}

export type AdminCreateCommunityMemberMutationVariables = Exact<{
  input: AdminCreateCommunityMemberInput
}>

export type AdminCreateCommunityMemberMutation = {
  __typename?: 'Mutation'
  created?: {
    __typename?: 'CommunityMember'
    createdAt?: Date | null
    id: string
    userId: string
    communityId: string
    role: CommunityMemberRole
    updatedAt?: Date | null
    user?: {
      __typename?: 'User'
      avatarUrl?: string | null
      createdAt?: Date | null
      developer?: boolean | null
      id: string
      name?: string | null
      profileUrl: string
      role?: UserRole | null
      status?: UserStatus | null
      updatedAt?: Date | null
      username?: string | null
    } | null
  } | null
}

export type AdminUpdateCommunityMemberMutationVariables = Exact<{
  communityMemberId: Scalars['String']['input']
  input: AdminUpdateCommunityMemberInput
}>

export type AdminUpdateCommunityMemberMutation = {
  __typename?: 'Mutation'
  updated?: {
    __typename?: 'CommunityMember'
    createdAt?: Date | null
    id: string
    userId: string
    communityId: string
    role: CommunityMemberRole
    updatedAt?: Date | null
    user?: {
      __typename?: 'User'
      avatarUrl?: string | null
      createdAt?: Date | null
      developer?: boolean | null
      id: string
      name?: string | null
      profileUrl: string
      role?: UserRole | null
      status?: UserStatus | null
      updatedAt?: Date | null
      username?: string | null
    } | null
  } | null
}

export type AdminDeleteCommunityMemberMutationVariables = Exact<{
  communityMemberId: Scalars['String']['input']
}>

export type AdminDeleteCommunityMemberMutation = { __typename?: 'Mutation'; deleted?: boolean | null }

export type CommunityDetailsFragment = {
  __typename?: 'Community'
  createdAt?: Date | null
  id: string
  name: string
  slug: string
  description: string
  imageUrl?: string | null
  publicUrl?: string | null
  updatedAt?: Date | null
}

export type UserFindManyCommunityQueryVariables = Exact<{
  input: UserFindManyCommunityInput
}>

export type UserFindManyCommunityQuery = {
  __typename?: 'Query'
  paging: {
    __typename?: 'CommunityPaging'
    data: Array<{
      __typename?: 'Community'
      viewUrl?: string | null
      createdAt?: Date | null
      id: string
      name: string
      slug: string
      description: string
      imageUrl?: string | null
      publicUrl?: string | null
      updatedAt?: Date | null
    }>
    meta: {
      __typename?: 'PagingMeta'
      currentPage: number
      isFirstPage: boolean
      isLastPage: boolean
      nextPage?: number | null
      pageCount?: number | null
      previousPage?: number | null
      totalCount?: number | null
    }
  }
}

export type UserFindOneCommunityQueryVariables = Exact<{
  slug: Scalars['String']['input']
}>

export type UserFindOneCommunityQuery = {
  __typename?: 'Query'
  item?: {
    __typename?: 'Community'
    viewUrl?: string | null
    createdAt?: Date | null
    id: string
    name: string
    slug: string
    description: string
    imageUrl?: string | null
    publicUrl?: string | null
    updatedAt?: Date | null
  } | null
}

export type UserCreateCommunityMutationVariables = Exact<{
  input: UserCreateCommunityInput
}>

export type UserCreateCommunityMutation = {
  __typename?: 'Mutation'
  created?: {
    __typename?: 'Community'
    viewUrl?: string | null
    createdAt?: Date | null
    id: string
    name: string
    slug: string
    description: string
    imageUrl?: string | null
    publicUrl?: string | null
    updatedAt?: Date | null
  } | null
}

export type UserUpdateCommunityMutationVariables = Exact<{
  communityId: Scalars['String']['input']
  input: UserUpdateCommunityInput
}>

export type UserUpdateCommunityMutation = {
  __typename?: 'Mutation'
  updated?: {
    __typename?: 'Community'
    createdAt?: Date | null
    id: string
    name: string
    slug: string
    description: string
    imageUrl?: string | null
    publicUrl?: string | null
    updatedAt?: Date | null
  } | null
}

export type UserDeleteCommunityMutationVariables = Exact<{
  communityId: Scalars['String']['input']
}>

export type UserDeleteCommunityMutation = { __typename?: 'Mutation'; deleted?: boolean | null }

export type AdminFindManyCommunityQueryVariables = Exact<{
  input: AdminFindManyCommunityInput
}>

export type AdminFindManyCommunityQuery = {
  __typename?: 'Query'
  paging: {
    __typename?: 'CommunityPaging'
    data: Array<{
      __typename?: 'Community'
      viewUrl?: string | null
      createdAt?: Date | null
      id: string
      name: string
      slug: string
      description: string
      imageUrl?: string | null
      publicUrl?: string | null
      updatedAt?: Date | null
    }>
    meta: {
      __typename?: 'PagingMeta'
      currentPage: number
      isFirstPage: boolean
      isLastPage: boolean
      nextPage?: number | null
      pageCount?: number | null
      previousPage?: number | null
      totalCount?: number | null
    }
  }
}

export type AdminFindOneCommunityQueryVariables = Exact<{
  communityId: Scalars['String']['input']
}>

export type AdminFindOneCommunityQuery = {
  __typename?: 'Query'
  item?: {
    __typename?: 'Community'
    viewUrl?: string | null
    createdAt?: Date | null
    id: string
    name: string
    slug: string
    description: string
    imageUrl?: string | null
    publicUrl?: string | null
    updatedAt?: Date | null
  } | null
}

export type AdminUpdateCommunityMutationVariables = Exact<{
  communityId: Scalars['String']['input']
  input: AdminUpdateCommunityInput
}>

export type AdminUpdateCommunityMutation = {
  __typename?: 'Mutation'
  updated?: {
    __typename?: 'Community'
    createdAt?: Date | null
    id: string
    name: string
    slug: string
    description: string
    imageUrl?: string | null
    publicUrl?: string | null
    updatedAt?: Date | null
  } | null
}

export type AdminDeleteCommunityMutationVariables = Exact<{
  communityId: Scalars['String']['input']
}>

export type AdminDeleteCommunityMutation = { __typename?: 'Mutation'; deleted?: boolean | null }

export type AnonFindManyCommunityQueryVariables = Exact<{
  input: AnonFindManyCommunityInput
}>

export type AnonFindManyCommunityQuery = {
  __typename?: 'Query'
  paging: {
    __typename?: 'CommunityPaging'
    data: Array<{
      __typename?: 'Community'
      createdAt?: Date | null
      id: string
      name: string
      slug: string
      description: string
      imageUrl?: string | null
      publicUrl?: string | null
      updatedAt?: Date | null
    }>
    meta: {
      __typename?: 'PagingMeta'
      currentPage: number
      isFirstPage: boolean
      isLastPage: boolean
      nextPage?: number | null
      pageCount?: number | null
      previousPage?: number | null
      totalCount?: number | null
    }
  }
}

export type AnonFindOneCommunityQueryVariables = Exact<{
  slug: Scalars['String']['input']
}>

export type AnonFindOneCommunityQuery = {
  __typename?: 'Query'
  item?: {
    __typename?: 'Community'
    createdAt?: Date | null
    id: string
    name: string
    slug: string
    description: string
    imageUrl?: string | null
    publicUrl?: string | null
    updatedAt?: Date | null
  } | null
}

export type AppConfigDetailsFragment = {
  __typename?: 'AppConfig'
  authDiscordEnabled: boolean
  authGithubEnabled: boolean
  authGoogleEnabled: boolean
  authPasswordEnabled: boolean
  authRegisterEnabled: boolean
  authSolanaEnabled: boolean
  authTwitterEnabled: boolean
}

export type PagingMetaDetailsFragment = {
  __typename?: 'PagingMeta'
  currentPage: number
  isFirstPage: boolean
  isLastPage: boolean
  nextPage?: number | null
  pageCount?: number | null
  previousPage?: number | null
  totalCount?: number | null
}

export type UptimeQueryVariables = Exact<{ [key: string]: never }>

export type UptimeQuery = { __typename?: 'Query'; uptime: number }

export type AppConfigQueryVariables = Exact<{ [key: string]: never }>

export type AppConfigQuery = {
  __typename?: 'Query'
  config: {
    __typename?: 'AppConfig'
    authDiscordEnabled: boolean
    authGithubEnabled: boolean
    authGoogleEnabled: boolean
    authPasswordEnabled: boolean
    authRegisterEnabled: boolean
    authSolanaEnabled: boolean
    authTwitterEnabled: boolean
  }
}

export type IdentityDetailsFragment = {
  __typename?: 'Identity'
  createdAt: Date
  expired?: boolean | null
  id: string
  name?: string | null
  profile?: any | null
  provider: IdentityProvider
  providerId: string
  updatedAt: Date
  url?: string | null
  verified?: boolean | null
}

export type IdentityChallengeDetailsFragment = {
  __typename?: 'IdentityChallenge'
  id: string
  createdAt: Date
  updatedAt: Date
  provider: IdentityProvider
  providerId: string
  challenge: string
  signature?: string | null
  ip: string
  userAgent: string
  verified: boolean
}

export type AdminFindManyIdentityQueryVariables = Exact<{
  input: AdminFindManyIdentityInput
}>

export type AdminFindManyIdentityQuery = {
  __typename?: 'Query'
  items?: Array<{
    __typename?: 'Identity'
    createdAt: Date
    expired?: boolean | null
    id: string
    name?: string | null
    profile?: any | null
    provider: IdentityProvider
    providerId: string
    updatedAt: Date
    url?: string | null
    verified?: boolean | null
    challenges?: Array<{
      __typename?: 'IdentityChallenge'
      id: string
      createdAt: Date
      updatedAt: Date
      provider: IdentityProvider
      providerId: string
      challenge: string
      signature?: string | null
      ip: string
      userAgent: string
      verified: boolean
    }> | null
    owner?: {
      __typename?: 'User'
      avatarUrl?: string | null
      createdAt?: Date | null
      developer?: boolean | null
      id: string
      name?: string | null
      profileUrl: string
      role?: UserRole | null
      status?: UserStatus | null
      updatedAt?: Date | null
      username?: string | null
    } | null
  }> | null
}

export type AdminCreateIdentityMutationVariables = Exact<{
  input: AdminCreateIdentityInput
}>

export type AdminCreateIdentityMutation = {
  __typename?: 'Mutation'
  created?: {
    __typename?: 'Identity'
    createdAt: Date
    expired?: boolean | null
    id: string
    name?: string | null
    profile?: any | null
    provider: IdentityProvider
    providerId: string
    updatedAt: Date
    url?: string | null
    verified?: boolean | null
  } | null
}

export type AdminDeleteIdentityMutationVariables = Exact<{
  identityId: Scalars['String']['input']
}>

export type AdminDeleteIdentityMutation = { __typename?: 'Mutation'; deleted?: boolean | null }

export type UserFindManyIdentityQueryVariables = Exact<{
  input: UserFindManyIdentityInput
}>

export type UserFindManyIdentityQuery = {
  __typename?: 'Query'
  items?: Array<{
    __typename?: 'Identity'
    createdAt: Date
    expired?: boolean | null
    id: string
    name?: string | null
    profile?: any | null
    provider: IdentityProvider
    providerId: string
    updatedAt: Date
    url?: string | null
    verified?: boolean | null
  }> | null
}

export type UserDeleteIdentityMutationVariables = Exact<{
  identityId: Scalars['String']['input']
}>

export type UserDeleteIdentityMutation = { __typename?: 'Mutation'; deleted?: boolean | null }

export type UserRequestIdentityChallengeQueryVariables = Exact<{
  input: RequestIdentityChallengeInput
}>

export type UserRequestIdentityChallengeQuery = {
  __typename?: 'Query'
  challenge?: {
    __typename?: 'IdentityChallenge'
    id: string
    createdAt: Date
    updatedAt: Date
    provider: IdentityProvider
    providerId: string
    challenge: string
    signature?: string | null
    ip: string
    userAgent: string
    verified: boolean
  } | null
}

export type UserVerifyIdentityChallengeMutationVariables = Exact<{
  input: VerifyIdentityChallengeInput
}>

export type UserVerifyIdentityChallengeMutation = {
  __typename?: 'Mutation'
  verified?: {
    __typename?: 'IdentityChallenge'
    id: string
    createdAt: Date
    updatedAt: Date
    provider: IdentityProvider
    providerId: string
    challenge: string
    signature?: string | null
    ip: string
    userAgent: string
    verified: boolean
  } | null
}

export type UserLinkIdentityMutationVariables = Exact<{
  input: LinkIdentityInput
}>

export type UserLinkIdentityMutation = {
  __typename?: 'Mutation'
  linked?: {
    __typename?: 'Identity'
    createdAt: Date
    expired?: boolean | null
    id: string
    name?: string | null
    profile?: any | null
    provider: IdentityProvider
    providerId: string
    updatedAt: Date
    url?: string | null
    verified?: boolean | null
  } | null
}

export type AnonRequestIdentityChallengeQueryVariables = Exact<{
  input: RequestIdentityChallengeInput
}>

export type AnonRequestIdentityChallengeQuery = {
  __typename?: 'Query'
  challenge?: {
    __typename?: 'IdentityChallenge'
    id: string
    createdAt: Date
    updatedAt: Date
    provider: IdentityProvider
    providerId: string
    challenge: string
    signature?: string | null
    ip: string
    userAgent: string
    verified: boolean
  } | null
}

export type AnonVerifyIdentityChallengeMutationVariables = Exact<{
  input: VerifyIdentityChallengeInput
}>

export type AnonVerifyIdentityChallengeMutation = {
  __typename?: 'Mutation'
  verified?: {
    __typename?: 'IdentityChallenge'
    id: string
    createdAt: Date
    updatedAt: Date
    provider: IdentityProvider
    providerId: string
    challenge: string
    signature?: string | null
    ip: string
    userAgent: string
    verified: boolean
  } | null
}

export type MintDetailsFragment = {
  __typename?: 'Mint'
  createdAt?: Date | null
  id: string
  name: string
  symbol: string
  decimals: number
  imageUrl?: string | null
  publicKey: string
  updatedAt?: Date | null
}

export type UserFindManyMintQueryVariables = Exact<{
  input: UserFindManyMintInput
}>

export type UserFindManyMintQuery = {
  __typename?: 'Query'
  paging: {
    __typename?: 'MintPaging'
    data: Array<{
      __typename?: 'Mint'
      createdAt?: Date | null
      id: string
      name: string
      symbol: string
      decimals: number
      imageUrl?: string | null
      publicKey: string
      updatedAt?: Date | null
    }>
    meta: {
      __typename?: 'PagingMeta'
      currentPage: number
      isFirstPage: boolean
      isLastPage: boolean
      nextPage?: number | null
      pageCount?: number | null
      previousPage?: number | null
      totalCount?: number | null
    }
  }
}

export type UserFindOneMintQueryVariables = Exact<{
  mintId: Scalars['String']['input']
}>

export type UserFindOneMintQuery = {
  __typename?: 'Query'
  item?: {
    __typename?: 'Mint'
    createdAt?: Date | null
    id: string
    name: string
    symbol: string
    decimals: number
    imageUrl?: string | null
    publicKey: string
    updatedAt?: Date | null
  } | null
}

export type UserGetMintAccountQueryVariables = Exact<{
  mintId: Scalars['String']['input']
}>

export type UserGetMintAccountQuery = { __typename?: 'Query'; item?: any | null }

export type UserCreateMintMutationVariables = Exact<{
  input: UserCreateMintInput
}>

export type UserCreateMintMutation = {
  __typename?: 'Mutation'
  created?: {
    __typename?: 'Mint'
    createdAt?: Date | null
    id: string
    name: string
    symbol: string
    decimals: number
    imageUrl?: string | null
    publicKey: string
    updatedAt?: Date | null
  } | null
}

export type UserMintToIdentityMutationVariables = Exact<{
  mintId: Scalars['String']['input']
  identityId: Scalars['String']['input']
}>

export type UserMintToIdentityMutation = { __typename?: 'Mutation'; minted?: any | null }

export type UserUpdateMintMutationVariables = Exact<{
  mintId: Scalars['String']['input']
  input: UserUpdateMintInput
}>

export type UserUpdateMintMutation = {
  __typename?: 'Mutation'
  updated?: {
    __typename?: 'Mint'
    createdAt?: Date | null
    id: string
    name: string
    symbol: string
    decimals: number
    imageUrl?: string | null
    publicKey: string
    updatedAt?: Date | null
  } | null
}

export type UserDeleteMintMutationVariables = Exact<{
  mintId: Scalars['String']['input']
}>

export type UserDeleteMintMutation = { __typename?: 'Mutation'; deleted?: boolean | null }

export type AdminFindManyMintQueryVariables = Exact<{
  input: AdminFindManyMintInput
}>

export type AdminFindManyMintQuery = {
  __typename?: 'Query'
  paging: {
    __typename?: 'MintPaging'
    data: Array<{
      __typename?: 'Mint'
      createdAt?: Date | null
      id: string
      name: string
      symbol: string
      decimals: number
      imageUrl?: string | null
      publicKey: string
      updatedAt?: Date | null
    }>
    meta: {
      __typename?: 'PagingMeta'
      currentPage: number
      isFirstPage: boolean
      isLastPage: boolean
      nextPage?: number | null
      pageCount?: number | null
      previousPage?: number | null
      totalCount?: number | null
    }
  }
}

export type AdminFindOneMintQueryVariables = Exact<{
  mintId: Scalars['String']['input']
}>

export type AdminFindOneMintQuery = {
  __typename?: 'Query'
  item?: {
    __typename?: 'Mint'
    createdAt?: Date | null
    id: string
    name: string
    symbol: string
    decimals: number
    imageUrl?: string | null
    publicKey: string
    updatedAt?: Date | null
  } | null
}

export type AdminUpdateMintMutationVariables = Exact<{
  mintId: Scalars['String']['input']
  input: AdminUpdateMintInput
}>

export type AdminUpdateMintMutation = {
  __typename?: 'Mutation'
  updated?: {
    __typename?: 'Mint'
    createdAt?: Date | null
    id: string
    name: string
    symbol: string
    decimals: number
    imageUrl?: string | null
    publicKey: string
    updatedAt?: Date | null
  } | null
}

export type AdminDeleteMintMutationVariables = Exact<{
  mintId: Scalars['String']['input']
}>

export type AdminDeleteMintMutation = { __typename?: 'Mutation'; deleted?: boolean | null }

export type UserDetailsFragment = {
  __typename?: 'User'
  avatarUrl?: string | null
  createdAt?: Date | null
  developer?: boolean | null
  id: string
  name?: string | null
  profileUrl: string
  role?: UserRole | null
  status?: UserStatus | null
  updatedAt?: Date | null
  username?: string | null
}

export type AdminCreateUserMutationVariables = Exact<{
  input: AdminCreateUserInput
}>

export type AdminCreateUserMutation = {
  __typename?: 'Mutation'
  created?: {
    __typename?: 'User'
    avatarUrl?: string | null
    createdAt?: Date | null
    developer?: boolean | null
    id: string
    name?: string | null
    profileUrl: string
    role?: UserRole | null
    status?: UserStatus | null
    updatedAt?: Date | null
    username?: string | null
  } | null
}

export type AdminDeleteUserMutationVariables = Exact<{
  userId: Scalars['String']['input']
}>

export type AdminDeleteUserMutation = { __typename?: 'Mutation'; deleted?: boolean | null }

export type AdminFindManyUserQueryVariables = Exact<{
  input: AdminFindManyUserInput
}>

export type AdminFindManyUserQuery = {
  __typename?: 'Query'
  paging: {
    __typename?: 'UserPaging'
    data: Array<{
      __typename?: 'User'
      avatarUrl?: string | null
      createdAt?: Date | null
      developer?: boolean | null
      id: string
      name?: string | null
      profileUrl: string
      role?: UserRole | null
      status?: UserStatus | null
      updatedAt?: Date | null
      username?: string | null
      identities?: Array<{
        __typename?: 'Identity'
        createdAt: Date
        expired?: boolean | null
        id: string
        name?: string | null
        profile?: any | null
        provider: IdentityProvider
        providerId: string
        updatedAt: Date
        url?: string | null
        verified?: boolean | null
      }> | null
    }>
    meta: {
      __typename?: 'PagingMeta'
      currentPage: number
      isFirstPage: boolean
      isLastPage: boolean
      nextPage?: number | null
      pageCount?: number | null
      previousPage?: number | null
      totalCount?: number | null
    }
  }
}

export type AdminFindOneUserQueryVariables = Exact<{
  userId: Scalars['String']['input']
}>

export type AdminFindOneUserQuery = {
  __typename?: 'Query'
  item?: {
    __typename?: 'User'
    avatarUrl?: string | null
    createdAt?: Date | null
    developer?: boolean | null
    id: string
    name?: string | null
    profileUrl: string
    role?: UserRole | null
    status?: UserStatus | null
    updatedAt?: Date | null
    username?: string | null
  } | null
}

export type AdminUpdateUserMutationVariables = Exact<{
  userId: Scalars['String']['input']
  input: AdminUpdateUserInput
}>

export type AdminUpdateUserMutation = {
  __typename?: 'Mutation'
  updated?: {
    __typename?: 'User'
    avatarUrl?: string | null
    createdAt?: Date | null
    developer?: boolean | null
    id: string
    name?: string | null
    profileUrl: string
    role?: UserRole | null
    status?: UserStatus | null
    updatedAt?: Date | null
    username?: string | null
  } | null
}

export type UserFindManyUserQueryVariables = Exact<{
  input: UserFindManyUserInput
}>

export type UserFindManyUserQuery = {
  __typename?: 'Query'
  paging: {
    __typename?: 'UserPaging'
    data: Array<{
      __typename?: 'User'
      avatarUrl?: string | null
      createdAt?: Date | null
      developer?: boolean | null
      id: string
      name?: string | null
      profileUrl: string
      role?: UserRole | null
      status?: UserStatus | null
      updatedAt?: Date | null
      username?: string | null
    }>
    meta: {
      __typename?: 'PagingMeta'
      currentPage: number
      isFirstPage: boolean
      isLastPage: boolean
      nextPage?: number | null
      pageCount?: number | null
      previousPage?: number | null
      totalCount?: number | null
    }
  }
}

export type UserFindOneUserQueryVariables = Exact<{
  username: Scalars['String']['input']
}>

export type UserFindOneUserQuery = {
  __typename?: 'Query'
  item?: {
    __typename?: 'User'
    avatarUrl?: string | null
    createdAt?: Date | null
    developer?: boolean | null
    id: string
    name?: string | null
    profileUrl: string
    role?: UserRole | null
    status?: UserStatus | null
    updatedAt?: Date | null
    username?: string | null
  } | null
}

export type UserUpdateUserMutationVariables = Exact<{
  input: UserUpdateUserInput
}>

export type UserUpdateUserMutation = {
  __typename?: 'Mutation'
  updated?: {
    __typename?: 'User'
    avatarUrl?: string | null
    createdAt?: Date | null
    developer?: boolean | null
    id: string
    name?: string | null
    profileUrl: string
    role?: UserRole | null
    status?: UserStatus | null
    updatedAt?: Date | null
    username?: string | null
  } | null
}

export const UserDetailsFragmentDoc = gql`
  fragment UserDetails on User {
    avatarUrl
    createdAt
    developer
    id
    name
    profileUrl
    role
    status
    updatedAt
    username
  }
`
export const CommunityMemberDetailsFragmentDoc = gql`
  fragment CommunityMemberDetails on CommunityMember {
    createdAt
    id
    userId
    user {
      ...UserDetails
    }
    communityId
    role
    updatedAt
  }
  ${UserDetailsFragmentDoc}
`
export const CommunityDetailsFragmentDoc = gql`
  fragment CommunityDetails on Community {
    createdAt
    id
    name
    slug
    description
    imageUrl
    publicUrl
    updatedAt
  }
`
export const AppConfigDetailsFragmentDoc = gql`
  fragment AppConfigDetails on AppConfig {
    authDiscordEnabled
    authGithubEnabled
    authGoogleEnabled
    authPasswordEnabled
    authRegisterEnabled
    authSolanaEnabled
    authTwitterEnabled
  }
`
export const PagingMetaDetailsFragmentDoc = gql`
  fragment PagingMetaDetails on PagingMeta {
    currentPage
    isFirstPage
    isLastPage
    nextPage
    pageCount
    previousPage
    totalCount
  }
`
export const IdentityDetailsFragmentDoc = gql`
  fragment IdentityDetails on Identity {
    createdAt
    expired
    id
    name
    profile
    provider
    providerId
    updatedAt
    url
    verified
  }
`
export const IdentityChallengeDetailsFragmentDoc = gql`
  fragment IdentityChallengeDetails on IdentityChallenge {
    id
    createdAt
    updatedAt
    provider
    providerId
    challenge
    signature
    ip
    userAgent
    verified
  }
`
export const MintDetailsFragmentDoc = gql`
  fragment MintDetails on Mint {
    createdAt
    id
    name
    symbol
    decimals
    imageUrl
    publicKey
    updatedAt
  }
`
export const LoginDocument = gql`
  mutation login($input: LoginInput!) {
    login(input: $input) {
      ...UserDetails
    }
  }
  ${UserDetailsFragmentDoc}
`
export const LogoutDocument = gql`
  mutation logout {
    logout
  }
`
export const RegisterDocument = gql`
  mutation register($input: RegisterInput!) {
    register(input: $input) {
      ...UserDetails
    }
  }
  ${UserDetailsFragmentDoc}
`
export const MeDocument = gql`
  query me {
    me {
      ...UserDetails
      identities {
        ...IdentityDetails
      }
    }
  }
  ${UserDetailsFragmentDoc}
  ${IdentityDetailsFragmentDoc}
`
export const UserFindManyCommunityMemberDocument = gql`
  query userFindManyCommunityMember($input: UserFindManyCommunityMemberInput!) {
    paging: userFindManyCommunityMember(input: $input) {
      data {
        ...CommunityMemberDetails
      }
      meta {
        ...PagingMetaDetails
      }
    }
  }
  ${CommunityMemberDetailsFragmentDoc}
  ${PagingMetaDetailsFragmentDoc}
`
export const UserFindOneCommunityMemberDocument = gql`
  query userFindOneCommunityMember($communityMemberId: String!) {
    item: userFindOneCommunityMember(communityMemberId: $communityMemberId) {
      ...CommunityMemberDetails
    }
  }
  ${CommunityMemberDetailsFragmentDoc}
`
export const UserCreateCommunityMemberDocument = gql`
  mutation userCreateCommunityMember($input: UserCreateCommunityMemberInput!) {
    created: userCreateCommunityMember(input: $input) {
      ...CommunityMemberDetails
    }
  }
  ${CommunityMemberDetailsFragmentDoc}
`
export const UserUpdateCommunityMemberDocument = gql`
  mutation userUpdateCommunityMember($communityMemberId: String!, $input: UserUpdateCommunityMemberInput!) {
    updated: userUpdateCommunityMember(communityMemberId: $communityMemberId, input: $input) {
      ...CommunityMemberDetails
    }
  }
  ${CommunityMemberDetailsFragmentDoc}
`
export const UserDeleteCommunityMemberDocument = gql`
  mutation userDeleteCommunityMember($communityMemberId: String!) {
    deleted: userDeleteCommunityMember(communityMemberId: $communityMemberId)
  }
`
export const AdminFindManyCommunityMemberDocument = gql`
  query adminFindManyCommunityMember($input: AdminFindManyCommunityMemberInput!) {
    paging: adminFindManyCommunityMember(input: $input) {
      data {
        ...CommunityMemberDetails
      }
      meta {
        ...PagingMetaDetails
      }
    }
  }
  ${CommunityMemberDetailsFragmentDoc}
  ${PagingMetaDetailsFragmentDoc}
`
export const AdminFindOneCommunityMemberDocument = gql`
  query adminFindOneCommunityMember($communityMemberId: String!) {
    item: adminFindOneCommunityMember(communityMemberId: $communityMemberId) {
      ...CommunityMemberDetails
    }
  }
  ${CommunityMemberDetailsFragmentDoc}
`
export const AdminCreateCommunityMemberDocument = gql`
  mutation adminCreateCommunityMember($input: AdminCreateCommunityMemberInput!) {
    created: adminCreateCommunityMember(input: $input) {
      ...CommunityMemberDetails
    }
  }
  ${CommunityMemberDetailsFragmentDoc}
`
export const AdminUpdateCommunityMemberDocument = gql`
  mutation adminUpdateCommunityMember($communityMemberId: String!, $input: AdminUpdateCommunityMemberInput!) {
    updated: adminUpdateCommunityMember(communityMemberId: $communityMemberId, input: $input) {
      ...CommunityMemberDetails
    }
  }
  ${CommunityMemberDetailsFragmentDoc}
`
export const AdminDeleteCommunityMemberDocument = gql`
  mutation adminDeleteCommunityMember($communityMemberId: String!) {
    deleted: adminDeleteCommunityMember(communityMemberId: $communityMemberId)
  }
`
export const UserFindManyCommunityDocument = gql`
  query userFindManyCommunity($input: UserFindManyCommunityInput!) {
    paging: userFindManyCommunity(input: $input) {
      data {
        ...CommunityDetails
        viewUrl
      }
      meta {
        ...PagingMetaDetails
      }
    }
  }
  ${CommunityDetailsFragmentDoc}
  ${PagingMetaDetailsFragmentDoc}
`
export const UserFindOneCommunityDocument = gql`
  query userFindOneCommunity($slug: String!) {
    item: userFindOneCommunity(slug: $slug) {
      ...CommunityDetails
      viewUrl
    }
  }
  ${CommunityDetailsFragmentDoc}
`
export const UserCreateCommunityDocument = gql`
  mutation userCreateCommunity($input: UserCreateCommunityInput!) {
    created: userCreateCommunity(input: $input) {
      ...CommunityDetails
      viewUrl
    }
  }
  ${CommunityDetailsFragmentDoc}
`
export const UserUpdateCommunityDocument = gql`
  mutation userUpdateCommunity($communityId: String!, $input: UserUpdateCommunityInput!) {
    updated: userUpdateCommunity(communityId: $communityId, input: $input) {
      ...CommunityDetails
    }
  }
  ${CommunityDetailsFragmentDoc}
`
export const UserDeleteCommunityDocument = gql`
  mutation userDeleteCommunity($communityId: String!) {
    deleted: userDeleteCommunity(communityId: $communityId)
  }
`
export const AdminFindManyCommunityDocument = gql`
  query adminFindManyCommunity($input: AdminFindManyCommunityInput!) {
    paging: adminFindManyCommunity(input: $input) {
      data {
        ...CommunityDetails
        viewUrl
      }
      meta {
        ...PagingMetaDetails
      }
    }
  }
  ${CommunityDetailsFragmentDoc}
  ${PagingMetaDetailsFragmentDoc}
`
export const AdminFindOneCommunityDocument = gql`
  query adminFindOneCommunity($communityId: String!) {
    item: adminFindOneCommunity(communityId: $communityId) {
      ...CommunityDetails
      viewUrl
    }
  }
  ${CommunityDetailsFragmentDoc}
`
export const AdminUpdateCommunityDocument = gql`
  mutation adminUpdateCommunity($communityId: String!, $input: AdminUpdateCommunityInput!) {
    updated: adminUpdateCommunity(communityId: $communityId, input: $input) {
      ...CommunityDetails
    }
  }
  ${CommunityDetailsFragmentDoc}
`
export const AdminDeleteCommunityDocument = gql`
  mutation adminDeleteCommunity($communityId: String!) {
    deleted: adminDeleteCommunity(communityId: $communityId)
  }
`
export const AnonFindManyCommunityDocument = gql`
  query anonFindManyCommunity($input: AnonFindManyCommunityInput!) {
    paging: anonFindManyCommunity(input: $input) {
      data {
        ...CommunityDetails
      }
      meta {
        ...PagingMetaDetails
      }
    }
  }
  ${CommunityDetailsFragmentDoc}
  ${PagingMetaDetailsFragmentDoc}
`
export const AnonFindOneCommunityDocument = gql`
  query anonFindOneCommunity($slug: String!) {
    item: anonFindOneCommunity(slug: $slug) {
      ...CommunityDetails
    }
  }
  ${CommunityDetailsFragmentDoc}
`
export const UptimeDocument = gql`
  query uptime {
    uptime
  }
`
export const AppConfigDocument = gql`
  query appConfig {
    config: appConfig {
      ...AppConfigDetails
    }
  }
  ${AppConfigDetailsFragmentDoc}
`
export const AdminFindManyIdentityDocument = gql`
  query adminFindManyIdentity($input: AdminFindManyIdentityInput!) {
    items: adminFindManyIdentity(input: $input) {
      ...IdentityDetails
      challenges {
        ...IdentityChallengeDetails
      }
      owner {
        ...UserDetails
      }
    }
  }
  ${IdentityDetailsFragmentDoc}
  ${IdentityChallengeDetailsFragmentDoc}
  ${UserDetailsFragmentDoc}
`
export const AdminCreateIdentityDocument = gql`
  mutation adminCreateIdentity($input: AdminCreateIdentityInput!) {
    created: adminCreateIdentity(input: $input) {
      ...IdentityDetails
    }
  }
  ${IdentityDetailsFragmentDoc}
`
export const AdminDeleteIdentityDocument = gql`
  mutation adminDeleteIdentity($identityId: String!) {
    deleted: adminDeleteIdentity(identityId: $identityId)
  }
`
export const UserFindManyIdentityDocument = gql`
  query userFindManyIdentity($input: UserFindManyIdentityInput!) {
    items: userFindManyIdentity(input: $input) {
      ...IdentityDetails
    }
  }
  ${IdentityDetailsFragmentDoc}
`
export const UserDeleteIdentityDocument = gql`
  mutation userDeleteIdentity($identityId: String!) {
    deleted: userDeleteIdentity(identityId: $identityId)
  }
`
export const UserRequestIdentityChallengeDocument = gql`
  query userRequestIdentityChallenge($input: RequestIdentityChallengeInput!) {
    challenge: userRequestIdentityChallenge(input: $input) {
      ...IdentityChallengeDetails
    }
  }
  ${IdentityChallengeDetailsFragmentDoc}
`
export const UserVerifyIdentityChallengeDocument = gql`
  mutation userVerifyIdentityChallenge($input: VerifyIdentityChallengeInput!) {
    verified: userVerifyIdentityChallenge(input: $input) {
      ...IdentityChallengeDetails
    }
  }
  ${IdentityChallengeDetailsFragmentDoc}
`
export const UserLinkIdentityDocument = gql`
  mutation userLinkIdentity($input: LinkIdentityInput!) {
    linked: userLinkIdentity(input: $input) {
      ...IdentityDetails
    }
  }
  ${IdentityDetailsFragmentDoc}
`
export const AnonRequestIdentityChallengeDocument = gql`
  query anonRequestIdentityChallenge($input: RequestIdentityChallengeInput!) {
    challenge: anonRequestIdentityChallenge(input: $input) {
      ...IdentityChallengeDetails
    }
  }
  ${IdentityChallengeDetailsFragmentDoc}
`
export const AnonVerifyIdentityChallengeDocument = gql`
  mutation anonVerifyIdentityChallenge($input: VerifyIdentityChallengeInput!) {
    verified: anonVerifyIdentityChallenge(input: $input) {
      ...IdentityChallengeDetails
    }
  }
  ${IdentityChallengeDetailsFragmentDoc}
`
export const UserFindManyMintDocument = gql`
  query userFindManyMint($input: UserFindManyMintInput!) {
    paging: userFindManyMint(input: $input) {
      data {
        ...MintDetails
      }
      meta {
        ...PagingMetaDetails
      }
    }
  }
  ${MintDetailsFragmentDoc}
  ${PagingMetaDetailsFragmentDoc}
`
export const UserFindOneMintDocument = gql`
  query userFindOneMint($mintId: String!) {
    item: userFindOneMint(mintId: $mintId) {
      ...MintDetails
    }
  }
  ${MintDetailsFragmentDoc}
`
export const UserGetMintAccountDocument = gql`
  query userGetMintAccount($mintId: String!) {
    item: userGetMintAccount(mintId: $mintId)
  }
`
export const UserCreateMintDocument = gql`
  mutation userCreateMint($input: UserCreateMintInput!) {
    created: userCreateMint(input: $input) {
      ...MintDetails
    }
  }
  ${MintDetailsFragmentDoc}
`
export const UserMintToIdentityDocument = gql`
  mutation userMintToIdentity($mintId: String!, $identityId: String!) {
    minted: userMintToIdentity(mintId: $mintId, identityId: $identityId)
  }
`
export const UserUpdateMintDocument = gql`
  mutation userUpdateMint($mintId: String!, $input: UserUpdateMintInput!) {
    updated: userUpdateMint(mintId: $mintId, input: $input) {
      ...MintDetails
    }
  }
  ${MintDetailsFragmentDoc}
`
export const UserDeleteMintDocument = gql`
  mutation userDeleteMint($mintId: String!) {
    deleted: userDeleteMint(mintId: $mintId)
  }
`
export const AdminFindManyMintDocument = gql`
  query adminFindManyMint($input: AdminFindManyMintInput!) {
    paging: adminFindManyMint(input: $input) {
      data {
        ...MintDetails
      }
      meta {
        ...PagingMetaDetails
      }
    }
  }
  ${MintDetailsFragmentDoc}
  ${PagingMetaDetailsFragmentDoc}
`
export const AdminFindOneMintDocument = gql`
  query adminFindOneMint($mintId: String!) {
    item: adminFindOneMint(mintId: $mintId) {
      ...MintDetails
    }
  }
  ${MintDetailsFragmentDoc}
`
export const AdminUpdateMintDocument = gql`
  mutation adminUpdateMint($mintId: String!, $input: AdminUpdateMintInput!) {
    updated: adminUpdateMint(mintId: $mintId, input: $input) {
      ...MintDetails
    }
  }
  ${MintDetailsFragmentDoc}
`
export const AdminDeleteMintDocument = gql`
  mutation adminDeleteMint($mintId: String!) {
    deleted: adminDeleteMint(mintId: $mintId)
  }
`
export const AdminCreateUserDocument = gql`
  mutation adminCreateUser($input: AdminCreateUserInput!) {
    created: adminCreateUser(input: $input) {
      ...UserDetails
    }
  }
  ${UserDetailsFragmentDoc}
`
export const AdminDeleteUserDocument = gql`
  mutation adminDeleteUser($userId: String!) {
    deleted: adminDeleteUser(userId: $userId)
  }
`
export const AdminFindManyUserDocument = gql`
  query adminFindManyUser($input: AdminFindManyUserInput!) {
    paging: adminFindManyUser(input: $input) {
      data {
        ...UserDetails
        identities {
          ...IdentityDetails
        }
      }
      meta {
        ...PagingMetaDetails
      }
    }
  }
  ${UserDetailsFragmentDoc}
  ${IdentityDetailsFragmentDoc}
  ${PagingMetaDetailsFragmentDoc}
`
export const AdminFindOneUserDocument = gql`
  query adminFindOneUser($userId: String!) {
    item: adminFindOneUser(userId: $userId) {
      ...UserDetails
    }
  }
  ${UserDetailsFragmentDoc}
`
export const AdminUpdateUserDocument = gql`
  mutation adminUpdateUser($userId: String!, $input: AdminUpdateUserInput!) {
    updated: adminUpdateUser(userId: $userId, input: $input) {
      ...UserDetails
    }
  }
  ${UserDetailsFragmentDoc}
`
export const UserFindManyUserDocument = gql`
  query userFindManyUser($input: UserFindManyUserInput!) {
    paging: userFindManyUser(input: $input) {
      data {
        ...UserDetails
      }
      meta {
        ...PagingMetaDetails
      }
    }
  }
  ${UserDetailsFragmentDoc}
  ${PagingMetaDetailsFragmentDoc}
`
export const UserFindOneUserDocument = gql`
  query userFindOneUser($username: String!) {
    item: userFindOneUser(username: $username) {
      ...UserDetails
    }
  }
  ${UserDetailsFragmentDoc}
`
export const UserUpdateUserDocument = gql`
  mutation userUpdateUser($input: UserUpdateUserInput!) {
    updated: userUpdateUser(input: $input) {
      ...UserDetails
    }
  }
  ${UserDetailsFragmentDoc}
`

export type SdkFunctionWrapper = <T>(
  action: (requestHeaders?: Record<string, string>) => Promise<T>,
  operationName: string,
  operationType?: string,
  variables?: any,
) => Promise<T>

const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType, variables) => action()
const LoginDocumentString = print(LoginDocument)
const LogoutDocumentString = print(LogoutDocument)
const RegisterDocumentString = print(RegisterDocument)
const MeDocumentString = print(MeDocument)
const UserFindManyCommunityMemberDocumentString = print(UserFindManyCommunityMemberDocument)
const UserFindOneCommunityMemberDocumentString = print(UserFindOneCommunityMemberDocument)
const UserCreateCommunityMemberDocumentString = print(UserCreateCommunityMemberDocument)
const UserUpdateCommunityMemberDocumentString = print(UserUpdateCommunityMemberDocument)
const UserDeleteCommunityMemberDocumentString = print(UserDeleteCommunityMemberDocument)
const AdminFindManyCommunityMemberDocumentString = print(AdminFindManyCommunityMemberDocument)
const AdminFindOneCommunityMemberDocumentString = print(AdminFindOneCommunityMemberDocument)
const AdminCreateCommunityMemberDocumentString = print(AdminCreateCommunityMemberDocument)
const AdminUpdateCommunityMemberDocumentString = print(AdminUpdateCommunityMemberDocument)
const AdminDeleteCommunityMemberDocumentString = print(AdminDeleteCommunityMemberDocument)
const UserFindManyCommunityDocumentString = print(UserFindManyCommunityDocument)
const UserFindOneCommunityDocumentString = print(UserFindOneCommunityDocument)
const UserCreateCommunityDocumentString = print(UserCreateCommunityDocument)
const UserUpdateCommunityDocumentString = print(UserUpdateCommunityDocument)
const UserDeleteCommunityDocumentString = print(UserDeleteCommunityDocument)
const AdminFindManyCommunityDocumentString = print(AdminFindManyCommunityDocument)
const AdminFindOneCommunityDocumentString = print(AdminFindOneCommunityDocument)
const AdminUpdateCommunityDocumentString = print(AdminUpdateCommunityDocument)
const AdminDeleteCommunityDocumentString = print(AdminDeleteCommunityDocument)
const AnonFindManyCommunityDocumentString = print(AnonFindManyCommunityDocument)
const AnonFindOneCommunityDocumentString = print(AnonFindOneCommunityDocument)
const UptimeDocumentString = print(UptimeDocument)
const AppConfigDocumentString = print(AppConfigDocument)
const AdminFindManyIdentityDocumentString = print(AdminFindManyIdentityDocument)
const AdminCreateIdentityDocumentString = print(AdminCreateIdentityDocument)
const AdminDeleteIdentityDocumentString = print(AdminDeleteIdentityDocument)
const UserFindManyIdentityDocumentString = print(UserFindManyIdentityDocument)
const UserDeleteIdentityDocumentString = print(UserDeleteIdentityDocument)
const UserRequestIdentityChallengeDocumentString = print(UserRequestIdentityChallengeDocument)
const UserVerifyIdentityChallengeDocumentString = print(UserVerifyIdentityChallengeDocument)
const UserLinkIdentityDocumentString = print(UserLinkIdentityDocument)
const AnonRequestIdentityChallengeDocumentString = print(AnonRequestIdentityChallengeDocument)
const AnonVerifyIdentityChallengeDocumentString = print(AnonVerifyIdentityChallengeDocument)
const UserFindManyMintDocumentString = print(UserFindManyMintDocument)
const UserFindOneMintDocumentString = print(UserFindOneMintDocument)
const UserGetMintAccountDocumentString = print(UserGetMintAccountDocument)
const UserCreateMintDocumentString = print(UserCreateMintDocument)
const UserMintToIdentityDocumentString = print(UserMintToIdentityDocument)
const UserUpdateMintDocumentString = print(UserUpdateMintDocument)
const UserDeleteMintDocumentString = print(UserDeleteMintDocument)
const AdminFindManyMintDocumentString = print(AdminFindManyMintDocument)
const AdminFindOneMintDocumentString = print(AdminFindOneMintDocument)
const AdminUpdateMintDocumentString = print(AdminUpdateMintDocument)
const AdminDeleteMintDocumentString = print(AdminDeleteMintDocument)
const AdminCreateUserDocumentString = print(AdminCreateUserDocument)
const AdminDeleteUserDocumentString = print(AdminDeleteUserDocument)
const AdminFindManyUserDocumentString = print(AdminFindManyUserDocument)
const AdminFindOneUserDocumentString = print(AdminFindOneUserDocument)
const AdminUpdateUserDocumentString = print(AdminUpdateUserDocument)
const UserFindManyUserDocumentString = print(UserFindManyUserDocument)
const UserFindOneUserDocumentString = print(UserFindOneUserDocument)
const UserUpdateUserDocumentString = print(UserUpdateUserDocument)
export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    login(
      variables: LoginMutationVariables,
      requestHeaders?: GraphQLClientRequestHeaders,
    ): Promise<{ data: LoginMutation; errors?: GraphQLError[]; extensions?: any; headers: Headers; status: number }> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.rawRequest<LoginMutation>(LoginDocumentString, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        'login',
        'mutation',
        variables,
      )
    },
    logout(
      variables?: LogoutMutationVariables,
      requestHeaders?: GraphQLClientRequestHeaders,
    ): Promise<{ data: LogoutMutation; errors?: GraphQLError[]; extensions?: any; headers: Headers; status: number }> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.rawRequest<LogoutMutation>(LogoutDocumentString, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        'logout',
        'mutation',
        variables,
      )
    },
    register(
      variables: RegisterMutationVariables,
      requestHeaders?: GraphQLClientRequestHeaders,
    ): Promise<{
      data: RegisterMutation
      errors?: GraphQLError[]
      extensions?: any
      headers: Headers
      status: number
    }> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.rawRequest<RegisterMutation>(RegisterDocumentString, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        'register',
        'mutation',
        variables,
      )
    },
    me(
      variables?: MeQueryVariables,
      requestHeaders?: GraphQLClientRequestHeaders,
    ): Promise<{ data: MeQuery; errors?: GraphQLError[]; extensions?: any; headers: Headers; status: number }> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.rawRequest<MeQuery>(MeDocumentString, variables, { ...requestHeaders, ...wrappedRequestHeaders }),
        'me',
        'query',
        variables,
      )
    },
    userFindManyCommunityMember(
      variables: UserFindManyCommunityMemberQueryVariables,
      requestHeaders?: GraphQLClientRequestHeaders,
    ): Promise<{
      data: UserFindManyCommunityMemberQuery
      errors?: GraphQLError[]
      extensions?: any
      headers: Headers
      status: number
    }> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.rawRequest<UserFindManyCommunityMemberQuery>(UserFindManyCommunityMemberDocumentString, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        'userFindManyCommunityMember',
        'query',
        variables,
      )
    },
    userFindOneCommunityMember(
      variables: UserFindOneCommunityMemberQueryVariables,
      requestHeaders?: GraphQLClientRequestHeaders,
    ): Promise<{
      data: UserFindOneCommunityMemberQuery
      errors?: GraphQLError[]
      extensions?: any
      headers: Headers
      status: number
    }> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.rawRequest<UserFindOneCommunityMemberQuery>(UserFindOneCommunityMemberDocumentString, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        'userFindOneCommunityMember',
        'query',
        variables,
      )
    },
    userCreateCommunityMember(
      variables: UserCreateCommunityMemberMutationVariables,
      requestHeaders?: GraphQLClientRequestHeaders,
    ): Promise<{
      data: UserCreateCommunityMemberMutation
      errors?: GraphQLError[]
      extensions?: any
      headers: Headers
      status: number
    }> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.rawRequest<UserCreateCommunityMemberMutation>(UserCreateCommunityMemberDocumentString, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        'userCreateCommunityMember',
        'mutation',
        variables,
      )
    },
    userUpdateCommunityMember(
      variables: UserUpdateCommunityMemberMutationVariables,
      requestHeaders?: GraphQLClientRequestHeaders,
    ): Promise<{
      data: UserUpdateCommunityMemberMutation
      errors?: GraphQLError[]
      extensions?: any
      headers: Headers
      status: number
    }> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.rawRequest<UserUpdateCommunityMemberMutation>(UserUpdateCommunityMemberDocumentString, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        'userUpdateCommunityMember',
        'mutation',
        variables,
      )
    },
    userDeleteCommunityMember(
      variables: UserDeleteCommunityMemberMutationVariables,
      requestHeaders?: GraphQLClientRequestHeaders,
    ): Promise<{
      data: UserDeleteCommunityMemberMutation
      errors?: GraphQLError[]
      extensions?: any
      headers: Headers
      status: number
    }> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.rawRequest<UserDeleteCommunityMemberMutation>(UserDeleteCommunityMemberDocumentString, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        'userDeleteCommunityMember',
        'mutation',
        variables,
      )
    },
    adminFindManyCommunityMember(
      variables: AdminFindManyCommunityMemberQueryVariables,
      requestHeaders?: GraphQLClientRequestHeaders,
    ): Promise<{
      data: AdminFindManyCommunityMemberQuery
      errors?: GraphQLError[]
      extensions?: any
      headers: Headers
      status: number
    }> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.rawRequest<AdminFindManyCommunityMemberQuery>(AdminFindManyCommunityMemberDocumentString, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        'adminFindManyCommunityMember',
        'query',
        variables,
      )
    },
    adminFindOneCommunityMember(
      variables: AdminFindOneCommunityMemberQueryVariables,
      requestHeaders?: GraphQLClientRequestHeaders,
    ): Promise<{
      data: AdminFindOneCommunityMemberQuery
      errors?: GraphQLError[]
      extensions?: any
      headers: Headers
      status: number
    }> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.rawRequest<AdminFindOneCommunityMemberQuery>(AdminFindOneCommunityMemberDocumentString, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        'adminFindOneCommunityMember',
        'query',
        variables,
      )
    },
    adminCreateCommunityMember(
      variables: AdminCreateCommunityMemberMutationVariables,
      requestHeaders?: GraphQLClientRequestHeaders,
    ): Promise<{
      data: AdminCreateCommunityMemberMutation
      errors?: GraphQLError[]
      extensions?: any
      headers: Headers
      status: number
    }> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.rawRequest<AdminCreateCommunityMemberMutation>(AdminCreateCommunityMemberDocumentString, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        'adminCreateCommunityMember',
        'mutation',
        variables,
      )
    },
    adminUpdateCommunityMember(
      variables: AdminUpdateCommunityMemberMutationVariables,
      requestHeaders?: GraphQLClientRequestHeaders,
    ): Promise<{
      data: AdminUpdateCommunityMemberMutation
      errors?: GraphQLError[]
      extensions?: any
      headers: Headers
      status: number
    }> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.rawRequest<AdminUpdateCommunityMemberMutation>(AdminUpdateCommunityMemberDocumentString, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        'adminUpdateCommunityMember',
        'mutation',
        variables,
      )
    },
    adminDeleteCommunityMember(
      variables: AdminDeleteCommunityMemberMutationVariables,
      requestHeaders?: GraphQLClientRequestHeaders,
    ): Promise<{
      data: AdminDeleteCommunityMemberMutation
      errors?: GraphQLError[]
      extensions?: any
      headers: Headers
      status: number
    }> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.rawRequest<AdminDeleteCommunityMemberMutation>(AdminDeleteCommunityMemberDocumentString, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        'adminDeleteCommunityMember',
        'mutation',
        variables,
      )
    },
    userFindManyCommunity(
      variables: UserFindManyCommunityQueryVariables,
      requestHeaders?: GraphQLClientRequestHeaders,
    ): Promise<{
      data: UserFindManyCommunityQuery
      errors?: GraphQLError[]
      extensions?: any
      headers: Headers
      status: number
    }> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.rawRequest<UserFindManyCommunityQuery>(UserFindManyCommunityDocumentString, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        'userFindManyCommunity',
        'query',
        variables,
      )
    },
    userFindOneCommunity(
      variables: UserFindOneCommunityQueryVariables,
      requestHeaders?: GraphQLClientRequestHeaders,
    ): Promise<{
      data: UserFindOneCommunityQuery
      errors?: GraphQLError[]
      extensions?: any
      headers: Headers
      status: number
    }> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.rawRequest<UserFindOneCommunityQuery>(UserFindOneCommunityDocumentString, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        'userFindOneCommunity',
        'query',
        variables,
      )
    },
    userCreateCommunity(
      variables: UserCreateCommunityMutationVariables,
      requestHeaders?: GraphQLClientRequestHeaders,
    ): Promise<{
      data: UserCreateCommunityMutation
      errors?: GraphQLError[]
      extensions?: any
      headers: Headers
      status: number
    }> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.rawRequest<UserCreateCommunityMutation>(UserCreateCommunityDocumentString, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        'userCreateCommunity',
        'mutation',
        variables,
      )
    },
    userUpdateCommunity(
      variables: UserUpdateCommunityMutationVariables,
      requestHeaders?: GraphQLClientRequestHeaders,
    ): Promise<{
      data: UserUpdateCommunityMutation
      errors?: GraphQLError[]
      extensions?: any
      headers: Headers
      status: number
    }> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.rawRequest<UserUpdateCommunityMutation>(UserUpdateCommunityDocumentString, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        'userUpdateCommunity',
        'mutation',
        variables,
      )
    },
    userDeleteCommunity(
      variables: UserDeleteCommunityMutationVariables,
      requestHeaders?: GraphQLClientRequestHeaders,
    ): Promise<{
      data: UserDeleteCommunityMutation
      errors?: GraphQLError[]
      extensions?: any
      headers: Headers
      status: number
    }> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.rawRequest<UserDeleteCommunityMutation>(UserDeleteCommunityDocumentString, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        'userDeleteCommunity',
        'mutation',
        variables,
      )
    },
    adminFindManyCommunity(
      variables: AdminFindManyCommunityQueryVariables,
      requestHeaders?: GraphQLClientRequestHeaders,
    ): Promise<{
      data: AdminFindManyCommunityQuery
      errors?: GraphQLError[]
      extensions?: any
      headers: Headers
      status: number
    }> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.rawRequest<AdminFindManyCommunityQuery>(AdminFindManyCommunityDocumentString, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        'adminFindManyCommunity',
        'query',
        variables,
      )
    },
    adminFindOneCommunity(
      variables: AdminFindOneCommunityQueryVariables,
      requestHeaders?: GraphQLClientRequestHeaders,
    ): Promise<{
      data: AdminFindOneCommunityQuery
      errors?: GraphQLError[]
      extensions?: any
      headers: Headers
      status: number
    }> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.rawRequest<AdminFindOneCommunityQuery>(AdminFindOneCommunityDocumentString, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        'adminFindOneCommunity',
        'query',
        variables,
      )
    },
    adminUpdateCommunity(
      variables: AdminUpdateCommunityMutationVariables,
      requestHeaders?: GraphQLClientRequestHeaders,
    ): Promise<{
      data: AdminUpdateCommunityMutation
      errors?: GraphQLError[]
      extensions?: any
      headers: Headers
      status: number
    }> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.rawRequest<AdminUpdateCommunityMutation>(AdminUpdateCommunityDocumentString, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        'adminUpdateCommunity',
        'mutation',
        variables,
      )
    },
    adminDeleteCommunity(
      variables: AdminDeleteCommunityMutationVariables,
      requestHeaders?: GraphQLClientRequestHeaders,
    ): Promise<{
      data: AdminDeleteCommunityMutation
      errors?: GraphQLError[]
      extensions?: any
      headers: Headers
      status: number
    }> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.rawRequest<AdminDeleteCommunityMutation>(AdminDeleteCommunityDocumentString, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        'adminDeleteCommunity',
        'mutation',
        variables,
      )
    },
    anonFindManyCommunity(
      variables: AnonFindManyCommunityQueryVariables,
      requestHeaders?: GraphQLClientRequestHeaders,
    ): Promise<{
      data: AnonFindManyCommunityQuery
      errors?: GraphQLError[]
      extensions?: any
      headers: Headers
      status: number
    }> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.rawRequest<AnonFindManyCommunityQuery>(AnonFindManyCommunityDocumentString, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        'anonFindManyCommunity',
        'query',
        variables,
      )
    },
    anonFindOneCommunity(
      variables: AnonFindOneCommunityQueryVariables,
      requestHeaders?: GraphQLClientRequestHeaders,
    ): Promise<{
      data: AnonFindOneCommunityQuery
      errors?: GraphQLError[]
      extensions?: any
      headers: Headers
      status: number
    }> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.rawRequest<AnonFindOneCommunityQuery>(AnonFindOneCommunityDocumentString, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        'anonFindOneCommunity',
        'query',
        variables,
      )
    },
    uptime(
      variables?: UptimeQueryVariables,
      requestHeaders?: GraphQLClientRequestHeaders,
    ): Promise<{ data: UptimeQuery; errors?: GraphQLError[]; extensions?: any; headers: Headers; status: number }> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.rawRequest<UptimeQuery>(UptimeDocumentString, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        'uptime',
        'query',
        variables,
      )
    },
    appConfig(
      variables?: AppConfigQueryVariables,
      requestHeaders?: GraphQLClientRequestHeaders,
    ): Promise<{ data: AppConfigQuery; errors?: GraphQLError[]; extensions?: any; headers: Headers; status: number }> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.rawRequest<AppConfigQuery>(AppConfigDocumentString, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        'appConfig',
        'query',
        variables,
      )
    },
    adminFindManyIdentity(
      variables: AdminFindManyIdentityQueryVariables,
      requestHeaders?: GraphQLClientRequestHeaders,
    ): Promise<{
      data: AdminFindManyIdentityQuery
      errors?: GraphQLError[]
      extensions?: any
      headers: Headers
      status: number
    }> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.rawRequest<AdminFindManyIdentityQuery>(AdminFindManyIdentityDocumentString, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        'adminFindManyIdentity',
        'query',
        variables,
      )
    },
    adminCreateIdentity(
      variables: AdminCreateIdentityMutationVariables,
      requestHeaders?: GraphQLClientRequestHeaders,
    ): Promise<{
      data: AdminCreateIdentityMutation
      errors?: GraphQLError[]
      extensions?: any
      headers: Headers
      status: number
    }> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.rawRequest<AdminCreateIdentityMutation>(AdminCreateIdentityDocumentString, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        'adminCreateIdentity',
        'mutation',
        variables,
      )
    },
    adminDeleteIdentity(
      variables: AdminDeleteIdentityMutationVariables,
      requestHeaders?: GraphQLClientRequestHeaders,
    ): Promise<{
      data: AdminDeleteIdentityMutation
      errors?: GraphQLError[]
      extensions?: any
      headers: Headers
      status: number
    }> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.rawRequest<AdminDeleteIdentityMutation>(AdminDeleteIdentityDocumentString, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        'adminDeleteIdentity',
        'mutation',
        variables,
      )
    },
    userFindManyIdentity(
      variables: UserFindManyIdentityQueryVariables,
      requestHeaders?: GraphQLClientRequestHeaders,
    ): Promise<{
      data: UserFindManyIdentityQuery
      errors?: GraphQLError[]
      extensions?: any
      headers: Headers
      status: number
    }> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.rawRequest<UserFindManyIdentityQuery>(UserFindManyIdentityDocumentString, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        'userFindManyIdentity',
        'query',
        variables,
      )
    },
    userDeleteIdentity(
      variables: UserDeleteIdentityMutationVariables,
      requestHeaders?: GraphQLClientRequestHeaders,
    ): Promise<{
      data: UserDeleteIdentityMutation
      errors?: GraphQLError[]
      extensions?: any
      headers: Headers
      status: number
    }> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.rawRequest<UserDeleteIdentityMutation>(UserDeleteIdentityDocumentString, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        'userDeleteIdentity',
        'mutation',
        variables,
      )
    },
    userRequestIdentityChallenge(
      variables: UserRequestIdentityChallengeQueryVariables,
      requestHeaders?: GraphQLClientRequestHeaders,
    ): Promise<{
      data: UserRequestIdentityChallengeQuery
      errors?: GraphQLError[]
      extensions?: any
      headers: Headers
      status: number
    }> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.rawRequest<UserRequestIdentityChallengeQuery>(UserRequestIdentityChallengeDocumentString, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        'userRequestIdentityChallenge',
        'query',
        variables,
      )
    },
    userVerifyIdentityChallenge(
      variables: UserVerifyIdentityChallengeMutationVariables,
      requestHeaders?: GraphQLClientRequestHeaders,
    ): Promise<{
      data: UserVerifyIdentityChallengeMutation
      errors?: GraphQLError[]
      extensions?: any
      headers: Headers
      status: number
    }> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.rawRequest<UserVerifyIdentityChallengeMutation>(UserVerifyIdentityChallengeDocumentString, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        'userVerifyIdentityChallenge',
        'mutation',
        variables,
      )
    },
    userLinkIdentity(
      variables: UserLinkIdentityMutationVariables,
      requestHeaders?: GraphQLClientRequestHeaders,
    ): Promise<{
      data: UserLinkIdentityMutation
      errors?: GraphQLError[]
      extensions?: any
      headers: Headers
      status: number
    }> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.rawRequest<UserLinkIdentityMutation>(UserLinkIdentityDocumentString, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        'userLinkIdentity',
        'mutation',
        variables,
      )
    },
    anonRequestIdentityChallenge(
      variables: AnonRequestIdentityChallengeQueryVariables,
      requestHeaders?: GraphQLClientRequestHeaders,
    ): Promise<{
      data: AnonRequestIdentityChallengeQuery
      errors?: GraphQLError[]
      extensions?: any
      headers: Headers
      status: number
    }> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.rawRequest<AnonRequestIdentityChallengeQuery>(AnonRequestIdentityChallengeDocumentString, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        'anonRequestIdentityChallenge',
        'query',
        variables,
      )
    },
    anonVerifyIdentityChallenge(
      variables: AnonVerifyIdentityChallengeMutationVariables,
      requestHeaders?: GraphQLClientRequestHeaders,
    ): Promise<{
      data: AnonVerifyIdentityChallengeMutation
      errors?: GraphQLError[]
      extensions?: any
      headers: Headers
      status: number
    }> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.rawRequest<AnonVerifyIdentityChallengeMutation>(AnonVerifyIdentityChallengeDocumentString, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        'anonVerifyIdentityChallenge',
        'mutation',
        variables,
      )
    },
    userFindManyMint(
      variables: UserFindManyMintQueryVariables,
      requestHeaders?: GraphQLClientRequestHeaders,
    ): Promise<{
      data: UserFindManyMintQuery
      errors?: GraphQLError[]
      extensions?: any
      headers: Headers
      status: number
    }> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.rawRequest<UserFindManyMintQuery>(UserFindManyMintDocumentString, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        'userFindManyMint',
        'query',
        variables,
      )
    },
    userFindOneMint(
      variables: UserFindOneMintQueryVariables,
      requestHeaders?: GraphQLClientRequestHeaders,
    ): Promise<{
      data: UserFindOneMintQuery
      errors?: GraphQLError[]
      extensions?: any
      headers: Headers
      status: number
    }> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.rawRequest<UserFindOneMintQuery>(UserFindOneMintDocumentString, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        'userFindOneMint',
        'query',
        variables,
      )
    },
    userGetMintAccount(
      variables: UserGetMintAccountQueryVariables,
      requestHeaders?: GraphQLClientRequestHeaders,
    ): Promise<{
      data: UserGetMintAccountQuery
      errors?: GraphQLError[]
      extensions?: any
      headers: Headers
      status: number
    }> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.rawRequest<UserGetMintAccountQuery>(UserGetMintAccountDocumentString, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        'userGetMintAccount',
        'query',
        variables,
      )
    },
    userCreateMint(
      variables: UserCreateMintMutationVariables,
      requestHeaders?: GraphQLClientRequestHeaders,
    ): Promise<{
      data: UserCreateMintMutation
      errors?: GraphQLError[]
      extensions?: any
      headers: Headers
      status: number
    }> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.rawRequest<UserCreateMintMutation>(UserCreateMintDocumentString, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        'userCreateMint',
        'mutation',
        variables,
      )
    },
    userMintToIdentity(
      variables: UserMintToIdentityMutationVariables,
      requestHeaders?: GraphQLClientRequestHeaders,
    ): Promise<{
      data: UserMintToIdentityMutation
      errors?: GraphQLError[]
      extensions?: any
      headers: Headers
      status: number
    }> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.rawRequest<UserMintToIdentityMutation>(UserMintToIdentityDocumentString, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        'userMintToIdentity',
        'mutation',
        variables,
      )
    },
    userUpdateMint(
      variables: UserUpdateMintMutationVariables,
      requestHeaders?: GraphQLClientRequestHeaders,
    ): Promise<{
      data: UserUpdateMintMutation
      errors?: GraphQLError[]
      extensions?: any
      headers: Headers
      status: number
    }> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.rawRequest<UserUpdateMintMutation>(UserUpdateMintDocumentString, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        'userUpdateMint',
        'mutation',
        variables,
      )
    },
    userDeleteMint(
      variables: UserDeleteMintMutationVariables,
      requestHeaders?: GraphQLClientRequestHeaders,
    ): Promise<{
      data: UserDeleteMintMutation
      errors?: GraphQLError[]
      extensions?: any
      headers: Headers
      status: number
    }> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.rawRequest<UserDeleteMintMutation>(UserDeleteMintDocumentString, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        'userDeleteMint',
        'mutation',
        variables,
      )
    },
    adminFindManyMint(
      variables: AdminFindManyMintQueryVariables,
      requestHeaders?: GraphQLClientRequestHeaders,
    ): Promise<{
      data: AdminFindManyMintQuery
      errors?: GraphQLError[]
      extensions?: any
      headers: Headers
      status: number
    }> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.rawRequest<AdminFindManyMintQuery>(AdminFindManyMintDocumentString, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        'adminFindManyMint',
        'query',
        variables,
      )
    },
    adminFindOneMint(
      variables: AdminFindOneMintQueryVariables,
      requestHeaders?: GraphQLClientRequestHeaders,
    ): Promise<{
      data: AdminFindOneMintQuery
      errors?: GraphQLError[]
      extensions?: any
      headers: Headers
      status: number
    }> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.rawRequest<AdminFindOneMintQuery>(AdminFindOneMintDocumentString, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        'adminFindOneMint',
        'query',
        variables,
      )
    },
    adminUpdateMint(
      variables: AdminUpdateMintMutationVariables,
      requestHeaders?: GraphQLClientRequestHeaders,
    ): Promise<{
      data: AdminUpdateMintMutation
      errors?: GraphQLError[]
      extensions?: any
      headers: Headers
      status: number
    }> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.rawRequest<AdminUpdateMintMutation>(AdminUpdateMintDocumentString, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        'adminUpdateMint',
        'mutation',
        variables,
      )
    },
    adminDeleteMint(
      variables: AdminDeleteMintMutationVariables,
      requestHeaders?: GraphQLClientRequestHeaders,
    ): Promise<{
      data: AdminDeleteMintMutation
      errors?: GraphQLError[]
      extensions?: any
      headers: Headers
      status: number
    }> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.rawRequest<AdminDeleteMintMutation>(AdminDeleteMintDocumentString, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        'adminDeleteMint',
        'mutation',
        variables,
      )
    },
    adminCreateUser(
      variables: AdminCreateUserMutationVariables,
      requestHeaders?: GraphQLClientRequestHeaders,
    ): Promise<{
      data: AdminCreateUserMutation
      errors?: GraphQLError[]
      extensions?: any
      headers: Headers
      status: number
    }> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.rawRequest<AdminCreateUserMutation>(AdminCreateUserDocumentString, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        'adminCreateUser',
        'mutation',
        variables,
      )
    },
    adminDeleteUser(
      variables: AdminDeleteUserMutationVariables,
      requestHeaders?: GraphQLClientRequestHeaders,
    ): Promise<{
      data: AdminDeleteUserMutation
      errors?: GraphQLError[]
      extensions?: any
      headers: Headers
      status: number
    }> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.rawRequest<AdminDeleteUserMutation>(AdminDeleteUserDocumentString, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        'adminDeleteUser',
        'mutation',
        variables,
      )
    },
    adminFindManyUser(
      variables: AdminFindManyUserQueryVariables,
      requestHeaders?: GraphQLClientRequestHeaders,
    ): Promise<{
      data: AdminFindManyUserQuery
      errors?: GraphQLError[]
      extensions?: any
      headers: Headers
      status: number
    }> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.rawRequest<AdminFindManyUserQuery>(AdminFindManyUserDocumentString, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        'adminFindManyUser',
        'query',
        variables,
      )
    },
    adminFindOneUser(
      variables: AdminFindOneUserQueryVariables,
      requestHeaders?: GraphQLClientRequestHeaders,
    ): Promise<{
      data: AdminFindOneUserQuery
      errors?: GraphQLError[]
      extensions?: any
      headers: Headers
      status: number
    }> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.rawRequest<AdminFindOneUserQuery>(AdminFindOneUserDocumentString, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        'adminFindOneUser',
        'query',
        variables,
      )
    },
    adminUpdateUser(
      variables: AdminUpdateUserMutationVariables,
      requestHeaders?: GraphQLClientRequestHeaders,
    ): Promise<{
      data: AdminUpdateUserMutation
      errors?: GraphQLError[]
      extensions?: any
      headers: Headers
      status: number
    }> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.rawRequest<AdminUpdateUserMutation>(AdminUpdateUserDocumentString, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        'adminUpdateUser',
        'mutation',
        variables,
      )
    },
    userFindManyUser(
      variables: UserFindManyUserQueryVariables,
      requestHeaders?: GraphQLClientRequestHeaders,
    ): Promise<{
      data: UserFindManyUserQuery
      errors?: GraphQLError[]
      extensions?: any
      headers: Headers
      status: number
    }> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.rawRequest<UserFindManyUserQuery>(UserFindManyUserDocumentString, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        'userFindManyUser',
        'query',
        variables,
      )
    },
    userFindOneUser(
      variables: UserFindOneUserQueryVariables,
      requestHeaders?: GraphQLClientRequestHeaders,
    ): Promise<{
      data: UserFindOneUserQuery
      errors?: GraphQLError[]
      extensions?: any
      headers: Headers
      status: number
    }> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.rawRequest<UserFindOneUserQuery>(UserFindOneUserDocumentString, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        'userFindOneUser',
        'query',
        variables,
      )
    },
    userUpdateUser(
      variables: UserUpdateUserMutationVariables,
      requestHeaders?: GraphQLClientRequestHeaders,
    ): Promise<{
      data: UserUpdateUserMutation
      errors?: GraphQLError[]
      extensions?: any
      headers: Headers
      status: number
    }> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.rawRequest<UserUpdateUserMutation>(UserUpdateUserDocumentString, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        'userUpdateUser',
        'mutation',
        variables,
      )
    },
  }
}
export type Sdk = ReturnType<typeof getSdk>

type Properties<T> = Required<{
  [K in keyof T]: z.ZodType<T[K], any, T[K]>
}>

type definedNonNullAny = {}

export const isDefinedNonNullAny = (v: any): v is definedNonNullAny => v !== undefined && v !== null

export const definedNonNullAnySchema = z.any().refine((v) => isDefinedNonNullAny(v))

export const CommunityMemberRoleSchema = z.nativeEnum(CommunityMemberRole)

export const IdentityProviderSchema = z.nativeEnum(IdentityProvider)

export const UserRoleSchema = z.nativeEnum(UserRole)

export const UserStatusSchema = z.nativeEnum(UserStatus)

export function AdminCreateCommunityMemberInputSchema(): z.ZodObject<Properties<AdminCreateCommunityMemberInput>> {
  return z.object({
    communityId: z.string(),
    role: CommunityMemberRoleSchema.nullish(),
    userId: z.string(),
  })
}

export function AdminCreateIdentityInputSchema(): z.ZodObject<Properties<AdminCreateIdentityInput>> {
  return z.object({
    ownerId: z.string(),
    provider: IdentityProviderSchema,
    providerId: z.string(),
  })
}

export function AdminCreateUserInputSchema(): z.ZodObject<Properties<AdminCreateUserInput>> {
  return z.object({
    password: z.string().nullish(),
    username: z.string(),
  })
}

export function AdminFindManyCommunityInputSchema(): z.ZodObject<Properties<AdminFindManyCommunityInput>> {
  return z.object({
    limit: z.number().nullish(),
    page: z.number().nullish(),
    search: z.string().nullish(),
  })
}

export function AdminFindManyCommunityMemberInputSchema(): z.ZodObject<Properties<AdminFindManyCommunityMemberInput>> {
  return z.object({
    communityId: z.string(),
    limit: z.number().nullish(),
    page: z.number().nullish(),
    role: CommunityMemberRoleSchema.nullish(),
    search: z.string().nullish(),
  })
}

export function AdminFindManyIdentityInputSchema(): z.ZodObject<Properties<AdminFindManyIdentityInput>> {
  return z.object({
    ownerId: z.string().nullish(),
    provider: IdentityProviderSchema.nullish(),
  })
}

export function AdminFindManyMintInputSchema(): z.ZodObject<Properties<AdminFindManyMintInput>> {
  return z.object({
    communityId: z.string(),
    limit: z.number().nullish(),
    page: z.number().nullish(),
    search: z.string().nullish(),
  })
}

export function AdminFindManyUserInputSchema(): z.ZodObject<Properties<AdminFindManyUserInput>> {
  return z.object({
    limit: z.number().nullish(),
    page: z.number().nullish(),
    role: UserRoleSchema.nullish(),
    search: z.string().nullish(),
    status: UserStatusSchema.nullish(),
  })
}

export function AdminUpdateCommunityInputSchema(): z.ZodObject<Properties<AdminUpdateCommunityInput>> {
  return z.object({
    description: z.string().nullish(),
    imageUrl: z.string().nullish(),
    name: z.string().nullish(),
  })
}

export function AdminUpdateCommunityMemberInputSchema(): z.ZodObject<Properties<AdminUpdateCommunityMemberInput>> {
  return z.object({
    role: CommunityMemberRoleSchema.nullish(),
  })
}

export function AdminUpdateMintInputSchema(): z.ZodObject<Properties<AdminUpdateMintInput>> {
  return z.object({
    decimals: z.number().nullish(),
    imageUrl: z.string().nullish(),
    name: z.string().nullish(),
    secretKey: z.string().nullish(),
    symbol: z.string().nullish(),
  })
}

export function AdminUpdateUserInputSchema(): z.ZodObject<Properties<AdminUpdateUserInput>> {
  return z.object({
    avatarUrl: z.string().nullish(),
    developer: z.boolean().nullish(),
    name: z.string().nullish(),
    role: UserRoleSchema.nullish(),
    status: UserStatusSchema.nullish(),
    username: z.string().nullish(),
  })
}

export function AnonFindManyCommunityInputSchema(): z.ZodObject<Properties<AnonFindManyCommunityInput>> {
  return z.object({
    limit: z.number().nullish(),
    page: z.number().nullish(),
    search: z.string().nullish(),
  })
}

export function LinkIdentityInputSchema(): z.ZodObject<Properties<LinkIdentityInput>> {
  return z.object({
    provider: IdentityProviderSchema,
    providerId: z.string(),
  })
}

export function LoginInputSchema(): z.ZodObject<Properties<LoginInput>> {
  return z.object({
    password: z.string(),
    username: z.string(),
  })
}

export function RegisterInputSchema(): z.ZodObject<Properties<RegisterInput>> {
  return z.object({
    password: z.string(),
    username: z.string(),
  })
}

export function RequestIdentityChallengeInputSchema(): z.ZodObject<Properties<RequestIdentityChallengeInput>> {
  return z.object({
    provider: IdentityProviderSchema,
    providerId: z.string(),
  })
}

export function UserCreateCommunityInputSchema(): z.ZodObject<Properties<UserCreateCommunityInput>> {
  return z.object({
    description: z.string(),
    imageUrl: z.string().nullish(),
    name: z.string(),
  })
}

export function UserCreateCommunityMemberInputSchema(): z.ZodObject<Properties<UserCreateCommunityMemberInput>> {
  return z.object({
    communityId: z.string(),
    role: CommunityMemberRoleSchema.nullish(),
    userId: z.string(),
  })
}

export function UserCreateMintInputSchema(): z.ZodObject<Properties<UserCreateMintInput>> {
  return z.object({
    communityId: z.string(),
    decimals: z.number().nullish(),
    imageUrl: z.string().nullish(),
    name: z.string(),
    secretKey: z.string().nullish(),
    symbol: z.string(),
  })
}

export function UserFindManyCommunityInputSchema(): z.ZodObject<Properties<UserFindManyCommunityInput>> {
  return z.object({
    limit: z.number().nullish(),
    page: z.number().nullish(),
    search: z.string().nullish(),
  })
}

export function UserFindManyCommunityMemberInputSchema(): z.ZodObject<Properties<UserFindManyCommunityMemberInput>> {
  return z.object({
    communityId: z.string(),
    limit: z.number().nullish(),
    page: z.number().nullish(),
    role: CommunityMemberRoleSchema.nullish(),
    search: z.string().nullish(),
  })
}

export function UserFindManyIdentityInputSchema(): z.ZodObject<Properties<UserFindManyIdentityInput>> {
  return z.object({
    username: z.string(),
  })
}

export function UserFindManyMintInputSchema(): z.ZodObject<Properties<UserFindManyMintInput>> {
  return z.object({
    communityId: z.string(),
    limit: z.number().nullish(),
    page: z.number().nullish(),
    search: z.string().nullish(),
  })
}

export function UserFindManyUserInputSchema(): z.ZodObject<Properties<UserFindManyUserInput>> {
  return z.object({
    limit: z.number().nullish(),
    page: z.number().nullish(),
    search: z.string().nullish(),
  })
}

export function UserUpdateCommunityInputSchema(): z.ZodObject<Properties<UserUpdateCommunityInput>> {
  return z.object({
    description: z.string().nullish(),
    imageUrl: z.string().nullish(),
    name: z.string().nullish(),
  })
}

export function UserUpdateCommunityMemberInputSchema(): z.ZodObject<Properties<UserUpdateCommunityMemberInput>> {
  return z.object({
    role: CommunityMemberRoleSchema.nullish(),
  })
}

export function UserUpdateMintInputSchema(): z.ZodObject<Properties<UserUpdateMintInput>> {
  return z.object({
    decimals: z.number().nullish(),
    imageUrl: z.string().nullish(),
    name: z.string().nullish(),
    secretKey: z.string().nullish(),
    symbol: z.string().nullish(),
  })
}

export function UserUpdateUserInputSchema(): z.ZodObject<Properties<UserUpdateUserInput>> {
  return z.object({
    avatarUrl: z.string().nullish(),
    developer: z.boolean().nullish(),
    name: z.string().nullish(),
  })
}

export function VerifyIdentityChallengeInputSchema(): z.ZodObject<Properties<VerifyIdentityChallengeInput>> {
  return z.object({
    challenge: z.string(),
    provider: IdentityProviderSchema,
    providerId: z.string(),
    signature: z.string(),
    useLedger: z.boolean().nullish(),
  })
}
