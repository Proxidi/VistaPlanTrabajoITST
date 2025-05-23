import axios from "axios";

const URL_BASE = "https://backend-programa-f6evc9hkgph4hue9.canadacentral-01.azurewebsites.net/rol";

class RolService {

    findAll() {
        return axios.get(URL_BASE);
    }

    findById(idRol: number) {
        return axios.get(URL_BASE + "/" + idRol);
    }

    create(rol: object) {
        return axios.post(URL_BASE, rol);
    }

    update(idRol: number, rol: object) {
        return axios.put(URL_BASE + "/" + idRol, rol);
    }

    delete(idRol: number) {
        return axios.delete(URL_BASE + "/" + idRol);
    }
}

export default new RolService();