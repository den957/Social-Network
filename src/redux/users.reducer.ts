import { ThunkAction } from 'redux-thunk'
import { ResultCode, userApi } from '../api/api'
import { AppReducerType } from './store'

const getUsersFollowedSuccessType = "GET_USERS_FOLLOWED_SUCCESS"
const getUsersUnfollowedSuccessType = "GET_USERS_UNFOLLOWED_SUCCESS"
const getOnceUnfollowedSuccessType = "GET_ONCE_UNFOLLOWED_SUCCESS"
const unfollowUserSuccessType = 'UNFOLLOW_USER_SUCCESS_TYPE'
const followUserSuccessType = 'FOLLOW_USER_SUCCESS_TYPE'
const setReadyToggleType = 'SET_READY_TOGGLE'
const isFetchingUsersType = 'IS_FETCHING_USERS'
const getUsersSelectSuccessType = 'GET_USERS_SELECT_SUCCESS'
const isUserSelectedType = 'IS_USER_SELECTED_TYPE'

export type InfoContactsPhotoType = {
   small: string | null,
   large: string | null
}
export type UsersType = {
   id: number,
   name: string,
   status: string,
   photos: InfoContactsPhotoType,
   followed: boolean
}
export type InitialStateType = typeof initialState

const initialState = {
   countFollowed: 5, //count of items on one portion in Users component
   countUnfollowed: 24,//count of items on one portion in UsersAll component
   pageFollowed: 1, //number of touched portions; default:1
   pageUnfollowed: 1, //number of touched portions; default:1
   usersFollowed: [] as Array<UsersType>, //data of users in Users component
   usersUnfollowed: [] as Array<UsersType>, //data of users in UsersAll component
   totalCount: null as number | null, //count all of items 
   isReadyPage: false, //all thunks in container are finished
   readyToggle: [] as Array<number>, //array of id users 
   isFetching: false, // are we ready to call new request for UsersAll data
   isUserSelected: false // is user founded
}
export type ActionsType = GetUserFollowedSuccessType | GetUserUnfollowedSuccessType | GetOnceUnfollowedSuccessType | UnfollowUserSuccessType | FollowUserSuccessType | SetReadyToggleType | IsFetchingUsersType | GetUsersSelectType | IsUserSelectedType
const usersReducer = (state = initialState, action: ActionsType): InitialStateType => {
   switch (action.type) {
      case getUsersFollowedSuccessType: {
         return {
            ...state,
            usersFollowed: action.usersFollowed,
            pageFollowed: action.pageFollowed,
            isReadyPage: true,
            totalCount: action.totalCount,
         }
      }
      case getUsersUnfollowedSuccessType: {
         return {
            ...state,
            ...state.usersUnfollowed.push(...action.usersUnfollowed) as {},
            pageUnfollowed: action.pageUnfollowed,
            totalCount: action.totalCount,
         }
      }
      case getOnceUnfollowedSuccessType: {
         return {
            ...state,
            usersUnfollowed: [],
            pageUnfollowed: 1,
         }
      }
      case unfollowUserSuccessType: {
         return {
            ...state,
            usersFollowed: state.usersFollowed.map((user) => {
               if (user.id === action.userId) {
                  return { ...user, followed: false }
               }
               return user
            })
         }
      }
      case followUserSuccessType: {
         return {
            ...state,
            usersUnfollowed: state.usersUnfollowed.map((user) => {
               if (user.id === action.userId) {
                  return { ...user, followed: true }
               }
               return user
            })
         }
      }
      case setReadyToggleType: {
         return {
            ...state,
            readyToggle: action.value
               ? [...state.readyToggle, action.userId]
               : state.readyToggle.filter(id => id !== action.userId)
         }
      }
      case isFetchingUsersType: {
         return {
            ...state,
            isFetching: action.bool
         }
      }
      case getUsersSelectSuccessType: {
         return {
            ...state,
            usersUnfollowed: action.usersSelect,
         }
      }
      case isUserSelectedType: {
         return {
            ...state,
            isUserSelected: action.bool
         }
      }
      default: {
         return state
      }
   }
}
export default usersReducer
type GetUserFollowedSuccessType = {
   type: typeof getUsersFollowedSuccessType,
   usersFollowed: Array<UsersType>,
   totalCount: number,
   pageFollowed: number,
   follower: boolean
}
type GetUserUnfollowedSuccessType = {
   type: typeof getUsersUnfollowedSuccessType,
   usersUnfollowed: Array<UsersType>,
   totalCount: number,
   pageUnfollowed: number,
   follower: boolean
}
type GetOnceUnfollowedSuccessType = {
   type: typeof getOnceUnfollowedSuccessType
}
type UnfollowUserSuccessType = {
   type: typeof unfollowUserSuccessType,
   userId: number
}
type FollowUserSuccessType = {
   type: typeof followUserSuccessType,
   userId: number
}
type SetReadyToggleType = {
   type: typeof setReadyToggleType,
   value: boolean,
   userId: number
}
type IsFetchingUsersType = {
   type: typeof isFetchingUsersType,
   bool: boolean
}
type GetUsersSelectType = {
   type: typeof getUsersSelectSuccessType,
   usersSelect: Array<UsersType>
}
type IsUserSelectedType = {
   type: typeof isUserSelectedType,
   bool: boolean
}
export const getUsersFollowedSuccess = (usersFollowed: Array<UsersType>, totalCount: number, pageFollowed: number, follower: boolean): GetUserFollowedSuccessType => ({ type: getUsersFollowedSuccessType, usersFollowed, totalCount, pageFollowed, follower })
export const getUsersUnfollowedSuccess = (usersUnfollowed: Array<UsersType>, totalCount: number, pageUnfollowed: number, follower: boolean): GetUserUnfollowedSuccessType => ({ type: getUsersUnfollowedSuccessType, usersUnfollowed, totalCount, pageUnfollowed, follower })
export const getOnceUnfollowedSuccess = (): GetOnceUnfollowedSuccessType => ({ type: getOnceUnfollowedSuccessType })
export const unfollowUserSuccess = (userId: number): UnfollowUserSuccessType => ({ type: unfollowUserSuccessType, userId })
export const followUserSuccess = (userId: number): FollowUserSuccessType => ({ type: followUserSuccessType, userId })
export const setReadyToggle = (value: boolean, userId: number): SetReadyToggleType => ({ type: setReadyToggleType, value, userId })
export const isFetchingUsers = (bool: boolean): IsFetchingUsersType => ({ type: isFetchingUsersType, bool })
export const getUsersSelectSuccess = (usersSelect: Array<UsersType>): GetUsersSelectType => ({ type: getUsersSelectSuccessType, usersSelect })
export const isUserSelected = (bool: boolean): IsUserSelectedType => ({ type: isUserSelectedType, bool })

type ThunkType = ThunkAction<Promise<void>, AppReducerType, unknown, ActionsType>

export const getUsersFollowedTC = (count: number, page: number, follower: boolean, term: string): ThunkType =>
   async (dispatch) => {
      let data = await userApi.getUsers(count, page, follower, term)
      dispatch(getUsersFollowedSuccess(data.items, data.totalCount, page, follower))
   }

export const getUsersUnfollowedTC = (count: number, page: number, follower: boolean, term: string): ThunkType =>
   async dispatch => {
      let data = await userApi.getUsers(count, page, follower, term)
      page++
      dispatch(getUsersUnfollowedSuccess(data.items, data.totalCount, page, follower))
      dispatch(isFetchingUsers(false))
   }
export const getUsersSelectTC = (count: number, page: number, follower: boolean, term: string): ThunkType =>
   async dispatch => {
      dispatch(isUserSelected(false))
      let data = await userApi.getUsers(count, page, follower, term)
      dispatch(getUsersSelectSuccess(data.items))
      dispatch(isUserSelected(true))
   }
export const getOnceUnfollowedTC = (): ThunkAction<void, AppReducerType, unknown, ActionsType> =>
   dispatch => {
      dispatch(getOnceUnfollowedSuccess())
      dispatch(isFetchingUsers(true))
      dispatch(isUserSelected(false))
   }
export const unfollowUserTC = (userId: number): ThunkType =>
   async (dispatch) => {
      dispatch(setReadyToggle(true, userId))
      let data = await userApi.unfollow(userId)
      if (data.resultCode === ResultCode.Success) {
         dispatch(unfollowUserSuccess(userId))
         dispatch(setReadyToggle(false, userId))
      }
   }
export const followUserTC = (userId: number): ThunkType =>
   async (dispatch) => {
      dispatch(setReadyToggle(true, userId))
      let data = await userApi.follow(userId)
      if (data.resultCode === ResultCode.Success) {
         dispatch(followUserSuccess(userId))
         dispatch(setReadyToggle(false, userId))
      }
   }
