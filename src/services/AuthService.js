import axiosClient from './BaseApiService'

const ENDPOINTS = {
    AUTH : '/Auth',
    PREDMETI: '/Predmet',
    STUDENT: '/Student',
    PROFESOR: '/Profesor',
    REZULTATI: '/Rezultati',
    ISPIT : '/Ispit',
    ROK: '/Rok',
    PDF: '/Pdf'
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
    const ispRok = payload.mode === 2 ? 1 : payload.ispitniRok;
    const response = await axiosClient.get(ENDPOINTS.REZULTATI + '?brIndeksa=' + payload.brIndeksa + '&mode=' + payload.mode + '&ispitniRokId=' + ispRok);
    return response.data;
}

const prijavaIspita = async (payload) => {
    await axiosClient.post(ENDPOINTS.ISPIT,payload)
}

const getPrijavljeniIspiti = async (payload) => {
    const response = await axiosClient.get(ENDPOINTS.ISPIT + '?brojIndeksa=' + payload)
    console.log(response.data);
    return response.data;
}

const getPredmetiZaOcenjivanje = async (payload) => {
    const response = await axiosClient.get(ENDPOINTS.PREDMETI + '?profesorId=' + payload);
    return response.data;
}   

const getStudentsZaOcenjivanje = async (payload) => {
    const response = await axiosClient.get(ENDPOINTS.PROFESOR + '?predmetId=' + payload.PredmetId + '&rokId=' + payload.RokId);
    return response.data;
}

const postOcena = async (payload) => {
    await axiosClient.post(ENDPOINTS.PROFESOR,payload)
}

const getIspitniRokovi = async () => {
    const response = await axiosClient.get(ENDPOINTS.ROK)
    return response.data;
}

const addIspitniRok = async (payload) => {
    await axiosClient.post(ENDPOINTS.ROK,payload);
}

const odjavaIspita = async (payload) => {
    await axiosClient.post(ENDPOINTS.REZULTATI,payload)
}

const changePassword = async (payload) => {
    await axiosClient.put(ENDPOINTS.AUTH,payload);
}

const makePDF = async (payload) => {
    await axiosClient.get(ENDPOINTS.PDF + '?predmetId=' + payload.predmetId + '&rokId=' + payload.ispitniRokId)
}

const authService = {
    login,
    getPredmeti,
    getStudentInfo,
    getProfesorInfo,
    getPredmetiStudent,
    prijavaIspita,
    getPrijavljeniIspiti,
    getPredmetiZaOcenjivanje,
    getStudentsZaOcenjivanje,
    postOcena,
    getIspitniRokovi,
    addIspitniRok,
    odjavaIspita,
    changePassword,
    makePDF,
}

export default authService;