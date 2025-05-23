import axios from "axios";

const URL_BASE = "https://backend-programa-f6evc9hkgph4hue9.canadacentral-01.azurewebsites.net/programa";

class ProgramaService {
    findAll() {
        return axios.get(URL_BASE);
    }

    findById(idPrograma: number) {
        return axios.get(`${URL_BASE}/${idPrograma}`);
    }

    create(programa: object) {
        return axios.post(URL_BASE, programa);
    }

    update(idPrograma: number, programa: object) {
        return axios.put(`${URL_BASE}/${idPrograma}`, programa);
    }

    delete(idPrograma: number) {
        return axios.delete(`${URL_BASE}/${idPrograma}`);
    }

    findUnidadById(IdPrograma: number) {
        return axios.get(URL_BASE + "/unidad/" + IdPrograma);
    }
}

export default new ProgramaService();