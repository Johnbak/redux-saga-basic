import { takeEvery,all } from "redux-saga/effects"
import { INCREMENT_REQ,ADD_REQ,DECREMENT_REQ,INCREMENT_ASYN_REQ } from "../actionTypes"
import { setAddAction, setDecrementAction, setIncrementAction, setIncrementAsyncAction } from "./counter.action"

function* watchIncrementAction(){
    yield takeEvery(INCREMENT_REQ,setIncrementAction) //watch request from UI
}

function* watchIncrementAsynAction(){
    yield takeEvery(INCREMENT_ASYN_REQ,setIncrementAsyncAction) //watch request from UI
}


function* watchDecrementAction(){
    yield takeEvery(DECREMENT_REQ,setDecrementAction) //watch request from UI
}

function* watchAddAction(){
    yield takeEvery(ADD_REQ,setAddAction) //watch request from UI
}


export default function* rootSaga(){
    yield all([watchIncrementAction(),
        watchDecrementAction(),
        watchAddAction(),
        watchIncrementAsynAction()])
}