//@flow

import * as types from '../actions/types'; 

export default function (state: boolean = false, action): boolean {
  switch(action.type) {
    case types.CHANGE_AUTH:
      return action.payload;
  }
  return state;
}