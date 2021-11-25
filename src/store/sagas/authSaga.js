import { call, put, takeLatest } from "redux-saga/effects";
import { GET_PREDMETI, GET_PREDMETI_STUDENT, GET_PROFESOR_INFO, GET_STUDENT_INFO, LOGIN, LOGOUT } from "../../constants/action-types";
import authService from "../../services/AuthService";
import { deleteCurrentlyLogged, saveCurrentlyLoggedInUser, SavePredmeti, SavePredmetiStudent, SaveProfesorInfo, SaveStudentInfo } from '../actions/index'

function* loginUser({ payload }) {
    const status = yield call(authService.login,payload.data);
    if (status === 200) {
        let userPayload = { Username: payload.data.Username }
        userPayload.Type = payload.data.IsStudent === true ? 'STUDENT' : 'PROFESOR';
        yield put(saveCurrentlyLoggedInUser(userPayload))
        yield call(payload.loginCallback);
    }
}

function* logoutUser() {
    yield put(deleteCurrentlyLogged());
}

function* getPredmeti({ payload }) {
    const response = yield call(authService.getPredmeti,payload)
    yield put(SavePredmeti(response))
}

function* getStudentInfo({ payload }) {
    const response = yield call(authService.getStudentInfo,payload)
    yield put(SaveStudentInfo(response));
}

function* getProfesorInfo({ payload }) {
    const response = yield call(authService.getProfesorInfo,payload);
    yield put(SaveProfesorInfo(response));
}

function* getPredmetiStudent({ payload }) {
    const response = yield call(authService.getPredmetiStudent,payload);
    yield put(SavePredmetiStudent(response));
}

export default function* authSaga() {
    yield takeLatest(LOGIN,loginUser)
    yield takeLatest(LOGOUT,logoutUser)
    yield takeLatest(GET_PREDMETI,getPredmeti)
    yield takeLatest(GET_STUDENT_INFO,getStudentInfo)
    yield takeLatest(GET_PROFESOR_INFO,getProfesorInfo)
    yield takeLatest(GET_PREDMETI_STUDENT,getPredmetiStudent)
}