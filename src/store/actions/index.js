import { DELETE_CURRENTLY_LOGGED, GET_PREDMETI, GET_PREDMETI_STUDENT, GET_PROFESOR_INFO, GET_STUDENT_INFO, LOGIN, LOGOUT, SAVE_CURRENTLY_LOGGED, SAVE_PREDMETI, SAVE_PREDMETI_STUDENT, SAVE_PROFESOR_INFO, SAVE_STUDENT_INFO } from '../../constants/action-types'

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