import { ABOUTME_DEFAULT } from './constants';

const initState = {
  
}

export default function aboutMeReducers(state = initState, action ){
  const { type, payload } = action;
  switch(type){
    case ABOUTME_DEFAULT:
      return { ...state, aboutMe: payload.data }
    default:
      return { ...state }
  }
}