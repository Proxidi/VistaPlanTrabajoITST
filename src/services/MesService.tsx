import axios from "axios";

const URL_BASE = "backend-programa-f6evc9hkgph4hue9.canadacentral-01.azurewebsites.net/mes";

class MesService {

    findAll() {
        return axios.get(URL_BASE);
    }

    findById(idMes: number) {
        return axios.get(URL_BASE + "/" + idMes);
    }

    create(mes: object) {
        return axios.post(URL_BASE, mes);
    }

    update(idMes: number, mes: object) {
        return axios.put(URL_BASE + "/" + idMes, mes);
    }

    delete(idMes: number) {
        return axios.delete(URL_BASE + "/" + idMes);
    }
}

export default new MesService();