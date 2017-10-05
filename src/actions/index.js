//@flow

import * as types from './types'; 


type response = {
  type: string,
  payload: boolean
}

export function authenticate(isLoggedIn: boolean): response {
  return {
    type: types.CHANGE_AUTH,
    payload: isLoggedIn
  }
}