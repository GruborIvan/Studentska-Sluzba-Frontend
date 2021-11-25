import axiosClient from './BaseApiService'

const ENDPOINTS = {
    AUTH : '/Auth',
    PREDMETI: '/Predmet',
    STUDENT: '/Student',
    PROFESOR: '/Profesor',
    REZULTATI: '/Rezultati'
}

const login = async (payload) => {
    try {
        const response = await axiosClient.post(ENDPOINTS.AUTH,payload)
        return response.status;
    }
    catch(error) {
        alert('Invalid username/password combination!')
    }
}

const getPredmeti = async (payload) => {
    const response = await axiosClient.get(ENDPOINTS.PREDMETI + '?profesorId=' + payload)
    return response.data;
}

const getStudentInfo = async (payload) => {
    const response = await axiosClient.get(ENDPOINTS.STUDENT + '?brojIndeksa=' + payload);
    return response.data;
}

const getProfesorInfo = async (payload) => {
    const response = await axiosClient.get(ENDPOINTS.PROFESOR + "?emailAddress=" + payload);
    return response.data;
}

const getPredmetiStudent = async (payload) => {
    const response = await axiosClient.get(ENDPOINTS.REZULTATI + '?brIndeksa=' + payload.brIndeksa + '&mode=' + payload.mode);
    return response.data;
}

const authService = {
    login,
    getPredmeti,
    getStudentInfo,
    getProfesorInfo,
    getPredmetiStudent,
}

export default authService;