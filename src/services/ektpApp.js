import http from '../http-common';

class Ektp {
    // Create Data
    login(data) {
        return http.post("/ektp/login", data);
    }

    register(data) {
        return http.post("/ektp/register", data)
    }

    

}

export default new Ektp();