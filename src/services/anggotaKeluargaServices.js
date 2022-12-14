import http from '../http-common';

class AnggotaKeluarga {
    // Create Data
    create(data) {
        return http.post("/anggotakeluarga/insert", data);
    }

    getAll() {
        return http.get("/anggotakeluarga/getAll");
    }

    updateKartuKeluarga(id, data) {
        return http.put(`/anggotakeluarga/update/${id}`, data);
    }

    deleteKartuKeluarga(id) {
        return http.delete(`/anggotakeluarga/delete/${id}`);
    }

    getKartuKelurgaById(id) {
        return http.get(`/anggotakeluarga/getData/${id}`)
    }



}

export default new AnggotaKeluarga();