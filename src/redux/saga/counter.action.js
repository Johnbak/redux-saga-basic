import { takeEvery,put } from "redux-saga/effects"
import { DECREMENT, INCREMENT,INCREMENT_REQ,ADD_REQ,ADD,DECREMENT_REQ } from "../actionTypes"

export function* setIncrementAction(){
    yield put({type:INCREMENT}) //push to reducer
}

export function* setDecrementAction(){
    yield put({type:DECREMENT}) //push to reducer
}

export function* setAddAction({payload}){
    yield put({type:ADD,payload}) //push to reducer
}

//-----------------------------------------------------------------------------------

export function* watchIncrementAction(){
    yield takeEvery(INCREMENT_REQ,setIncrementAction) //watch request from UI
}

export function* watchDecrementAction(){
    yield takeEvery(DECREMENT_REQ,setDecrementAction) //watch request from UI
}

export function* watchAddAction(){
    yield takeEvery(ADD_REQ,setAddAction) //watch request from UI
}