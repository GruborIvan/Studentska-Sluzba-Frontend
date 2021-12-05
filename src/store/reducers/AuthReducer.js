import { DELETE_CURRENTLY_LOGGED, SAVE_CURRENTLY_LOGGED, SAVE_ISPITI_ZA_OCENJIVANJE, SAVE_ISPITNI_ROKOVI, SAVE_PREDMETI, SAVE_PREDMETI_STUDENT, SAVE_PROFESOR_INFO, SAVE_STUDENTS_ZA_OCENJIVANJE, SAVE_STUDENT_INFO } from "../../constants/action-types"

const initialState = {
    currentlyLogged : null,
    predmeti: [],
    studentInfo : null,
    profesorInfo: null,
    studentPredmeti: null,
    ispitiZaOcenjivanje: null,
    studentiZaOcenjivanje: null,
    ispitniRokovi : null,
}

export default function auth(state = initialState, action) {
    switch(action.type) {
        case SAVE_CURRENTLY_LOGGED: {
            return { ...state, currentlyLogged: action.payload }
        }
        case DELETE_CURRENTLY_LOGGED: {
            return { ...state, currentlyLogged: null }
        }
        case SAVE_PREDMETI: {
            return { ...state, predmeti: action.payload }
        }
        case SAVE_STUDENT_INFO: {
            return { ...state, studentInfo: action.payload }
        }
        case SAVE_PROFESOR_INFO: {
            return { ...state, profesorInfo: action.payload }
        }
        case SAVE_PREDMETI_STUDENT: {
            return { ...state, studentPredmeti: action.payload }
        }
        case SAVE_ISPITI_ZA_OCENJIVANJE: {
            return { ...state, ispitiZaOcenjivanje: action.payload }
        }
        case SAVE_STUDENTS_ZA_OCENJIVANJE: {
            return { ...state, studentiZaOcenjivanje: action.payload }
        }
        case SAVE_ISPITNI_ROKOVI: {
            return { ...state, ispitniRokovi: action.payload }
        }
        default: {
            return {...state}
        }
    }
}