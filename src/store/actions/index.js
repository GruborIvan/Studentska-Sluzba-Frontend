import { DELETE_CURRENTLY_LOGGED, GET_ISPITI_ZA_OCENJIVANJE, GET_PREDMETI, GET_PREDMETI_STUDENT, GET_PRIJAVLJENI_ISPITI, GET_PROFESOR_INFO, GET_STUDENT_INFO, LOGIN, LOGOUT, PRIJAVA_ISPITA, SAVE_CURRENTLY_LOGGED, SAVE_ISPITI_ZA_OCENJIVANJE, SAVE_PREDMETI, SAVE_PREDMETI_STUDENT, SAVE_PROFESOR_INFO, SAVE_STUDENT_INFO, GET_STUDENTS_ZA_OCENJIVANJE, SAVE_STUDENTS_ZA_OCENJIVANJE, OCENA, GET_ISPITNI_ROKOVI, SAVE_ISPITNI_ROKOVI, ADD_ISPITNI_ROK, ODJAVA_ISPITA } from '../../constants/action-types'

export const Login = (payload) => {
    return { type: LOGIN, payload: payload }
}

export const Logout = () => {
    return { type: LOGOUT }
}

export const saveCurrentlyLoggedInUser = (payload) => {
    return { type: SAVE_CURRENTLY_LOGGED, payload: payload }
}

export const deleteCurrentlyLogged = () => {
    return { type: DELETE_CURRENTLY_LOGGED }
}

export const GetPredmetiForProfesor = (payload) => {
    return { type: GET_PREDMETI, payload: payload }
}

export const SavePredmeti = (payload) => {
    return { type: SAVE_PREDMETI, payload: payload }
}

export const GetStudentInfo = (payload) => {
    return { type: GET_STUDENT_INFO, payload: payload }
}

export const SaveStudentInfo = (payload) => {
    return { type: SAVE_STUDENT_INFO, payload: payload }
}

export const GetProfesorInfo = (payload) => {
    return { type: GET_PROFESOR_INFO, payload: payload }
}

export const SaveProfesorInfo = (payload) => {
    return { type: SAVE_PROFESOR_INFO, payload: payload }
}

export const GetPredmetiStudent = (payload) => {
    return { type: GET_PREDMETI_STUDENT, payload: payload }
}

export const SavePredmetiStudent = (payload) => {
    return { type: SAVE_PREDMETI_STUDENT, payload: payload }
}

export const PrijavaIspita = (payload) => {
    return { type: PRIJAVA_ISPITA, payload: payload }
}

export const GetPrijavljeniIspiti = (payload) => {
    return { type: GET_PRIJAVLJENI_ISPITI, payload: payload }
}

export const GetIspitiZaOcenjivanje = (payload) => {
    return { type: GET_ISPITI_ZA_OCENJIVANJE, payload: payload }
}

export const SaveIspitiZaOcenjivanje = (payload) => {
    return { type: SAVE_ISPITI_ZA_OCENJIVANJE, payload: payload }
}

export const GetStudentiZaOcenjivanje = (payload) => {
    return { type: GET_STUDENTS_ZA_OCENJIVANJE, payload: payload }
}

export const SaveStudentiZaOcenjivanje = (payload) => {
    return { type: SAVE_STUDENTS_ZA_OCENJIVANJE, payload: payload }
}

export const PostOcena = (payload) => {
    return { type: OCENA, payload: payload }
}

export const GetIspitniRokovi = () => {
    return { type: GET_ISPITNI_ROKOVI }
}

export const SaveIspitniRokovi = (payload) => {
    return { type: SAVE_ISPITNI_ROKOVI, payload: payload }
}

export const AddIspitniRok = (payload) => {
    return { type: ADD_ISPITNI_ROK, payload: payload }
}

export const OdjavaIspita = (payload) => {
    return { type: ODJAVA_ISPITA, payload: payload }
}