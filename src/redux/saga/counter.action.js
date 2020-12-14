import { put,delay } from "redux-saga/effects"
import { DECREMENT, INCREMENT,ADD } from "../actionTypes"

export function* setIncrementAction(){
    yield put({type:INCREMENT}) //push to reducer
}

export function* setIncrementAsyncAction(){
    yield delay(2000)
    yield put({type:INCREMENT}) //push to reducer
}

export function* setDecrementAction(){
    yield put({type:DECREMENT}) //push to reducer
}

export function* setAddAction({payload}){
    yield put({type:ADD,payload}) //push to reducer
}

