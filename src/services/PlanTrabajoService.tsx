import axios from 'axios';

const URL = 'https://plantrabajoitst-production.up.railway.app/plan-trabajo';

class PlanTrabajoService {
    fetchAll() {
        return axios.get(URL);
    }
}

export default new PlanTrabajoService();