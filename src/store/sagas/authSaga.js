import { call, put, takeLatest } from "redux-saga/effects";
import { ADD_ISPITNI_ROK, GET_ISPITI_ZA_OCENJIVANJE, GET_ISPITNI_ROKOVI, GET_PREDMETI, GET_PREDMETI_STUDENT, GET_PRIJAVLJENI_ISPITI, GET_PROFESOR_INFO, GET_STUDENTS_ZA_OCENJIVANJE, GET_STUDENT_INFO, LOGIN, LOGOUT, OCENA, ODJAVA_ISPITA, PRIJAVA_ISPITA } from "../../constants/action-types";
import authService from "../../services/AuthService";
import { deleteCurrentlyLogged, saveCurrentlyLoggedInUser, SaveIspitiZaOcenjivanje, SaveIspitniRokovi, SavePredmeti, SavePredmetiStudent, SaveProfesorInfo, SaveStudentInfo, SaveStudentiZaOcenjivanje } from '../actions/index'

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

function* prijavaIspita({ payload }) {
    yield call(authService.prijavaIspita,payload);
}

function* getPrijavljeniIspiti({ payload }) {
    const response = yield call(authService.getPrijavljeniIspiti,payload);
    yield put(SavePredmeti(response));
}

function* getIspitiZaOcenjivanje({ payload }) {
    const response = yield call(authService.getPredmetiZaOcenjivanje,payload);
    yield put(SaveIspitiZaOcenjivanje(response));
}

function* getStudentiZaOcenjivanje({ payload }) {
    const response = yield call(authService.getStudentsZaOcenjivanje,payload);
    yield put(SaveStudentiZaOcenjivanje(response));
}

function* postOcena({ payload }) {
    yield call(authService.postOcena,payload);
    const payload2 = { PredmetId: payload.PredmetId, RokId: payload.RokId }
    const response = yield call(authService.getStudentsZaOcenjivanje,payload2);
    yield put(SaveStudentiZaOcenjivanje(response));
}

function* getIspitniRokovi() {
    const response = yield call(authService.getIspitniRokovi);
    yield put(SaveIspitniRokovi(response));
}

function* addIspitniRok({ payload }) {
    yield call(authService.addIspitniRok,payload);
    const response = yield call(authService.getIspitniRokovi);
    yield put(SaveIspitniRokovi(response));
}

function* odjavaIspita({ payload }) {
    yield call(authService.odjavaIspita,payload)
    var payload2 = { brIndeksa: payload.BrojIndeksa, mode: 1, ispitniRok: payload.IspitniRokId }
    const response = yield call(authService.getPredmetiStudent,payload2);
    yield put(SavePredmetiStudent(response));
}

export default function* authSaga() {
    yield takeLatest(LOGIN,loginUser)
    yield takeLatest(LOGOUT,logoutUser)
    yield takeLatest(GET_PREDMETI,getPredmeti)
    yield takeLatest(GET_STUDENT_INFO,getStudentInfo)
    yield takeLatest(GET_PROFESOR_INFO,getProfesorInfo)
    yield takeLatest(GET_PREDMETI_STUDENT,getPredmetiStudent)
    yield takeLatest(PRIJAVA_ISPITA,prijavaIspita)
    yield takeLatest(GET_PRIJAVLJENI_ISPITI,getPrijavljeniIspiti)
    yield takeLatest(GET_ISPITI_ZA_OCENJIVANJE,getIspitiZaOcenjivanje)
    yield takeLatest(GET_STUDENTS_ZA_OCENJIVANJE,getStudentiZaOcenjivanje)
    yield takeLatest(OCENA,postOcena)
    yield takeLatest(GET_ISPITNI_ROKOVI,getIspitniRokovi)
    yield takeLatest(ADD_ISPITNI_ROK,addIspitniRok)
    yield takeLatest(ODJAVA_ISPITA,odjavaIspita)
}