import http from '../http-common';

class KK {
    // Create Data
    create(data) {
        return http.post("/kk/insert", data);
    }

    getAll() {
        return http.get("/kk/getAll");
    }

    updateKartuKeluarga(id, data) {
        return http.put(`/kk/update/${id}`, data);
    }

    deleteKartuKeluarga(id) {
        return http.delete(`/kk/delete/${id}`);
    }

    getKartuKelurgaById(id) {
        return http.get(`/kk/getData/${id}`)
    }

}

export default new KK();