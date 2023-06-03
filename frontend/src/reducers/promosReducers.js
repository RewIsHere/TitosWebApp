import {
    PROMOS_LIST_REQUEST,
    PROMOS_LIST_SUCCESS,
    PROMOS_LIST_FAIL
  } from '../constants/promosConstants'
  
  export const promosListReducer = (state = { promos: [] }, action) => {
    switch (action.type) {
      case PROMOS_LIST_REQUEST:
        return { loading: true, promos: [] }
      case PROMOS_LIST_SUCCESS:
        return { loading: false, promos: action.payload }
      case PROMOS_LIST_FAIL:
        return { loading: false, error: action.payload }
      default:
        return state
    }
  }
