import axios from 'axios';

const URL = 'backend-programa-f6evc9hkgph4hue9.canadacentral-01.azurewebsites.net/plan-trabajo';

class PlanTrabajoService {
    fetchAll() {
        return axios.get(URL);
    }
}

export default new PlanTrabajoService();