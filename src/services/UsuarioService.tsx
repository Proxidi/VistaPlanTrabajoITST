import axios from "axios";

const URL_BASE = "backend-programa-f6evc9hkgph4hue9.canadacentral-01.azurewebsites.net/usuario";

class UsuarioService {

    findAll() {
        return axios.get(URL_BASE);
    }

    findById(idUsuario: string) {
        return axios.get(URL_BASE + "/" + idUsuario);
    }

    create(usuario: object) {
        return axios.post(URL_BASE, usuario);
    }

    update(idUsuario: string, usuario: object) {
        return axios.put(URL_BASE + "/" + idUsuario, usuario);
    }

    delete(idUsuario: string) {
        return axios.delete(URL_BASE + "/" + idUsuario);
    }

    findUnidadById(IdUnidad: number) {
        return axios.get(URL_BASE + "/unidad/" + IdUnidad);
    }
}

export default new UsuarioService();