<template>
    <div>
        <div class="form-add">
            <h3 class="mt-4 title shadow">Daftar Anggota Keluarga</h3>
            <router-link to="/home">
                <button class="btn btn-successs mt-3 shadow">Back</button>
            </router-link>

            <b-button class="btn btn-tambah mt-3 shadow" v-b-modal.modal-prevent-closing>Tambah Anggota</b-button>

            <!-- TABLE START -->
            <table class="table mt-3 table table-striped shadow">
                <thead>
                    <tr>
                        <th scope="col">No</th>
                        <th scope="col">NIK</th>
                        <th scope="col">Nama</th>
                        <th scope="col">Jenis Kelamin</th>
                        <th scope="col">Kepala Keluarga</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(item, index) in anggotaKeluargaData" :key="index">
                        <th scope="row">{{ index + 1 }}</th>
                        <td>{{ item.nik }}</td>
                        <td>{{ item.nama }}</td>
                        <td>{{ item.jenis_kelamin }}</td>
                        <td>{{ item.kepala_keluarga }}</td>
                        <td>
                            <button class="btn btn-detail detail" type="submit">Detail</button>
                            <button class="btn btn-danger" type="submit" @click="deleteAnggota(item.id)">Hapus</button>
                        </td>
                    </tr>
                </tbody>
            </table>
            <!-- TABLE END -->

            <!-- FORM TAMBAH ANGGOTA -->
            <b-modal id="modal-prevent-closing" ref="modal" title="Silahkan Tambahkan Anggota" @show="resetModal"
                ok-title="Submit" cancel-title="Detail" @hidden="resetModal" @ok="handleOk">
                <div class="row">
                    <!-- INPUT KIRI -->
                    <div class="col input-kiri">
                        <form ref="form" @submit.stop.prevent="handleOk">
                            <!-- NIK -->
                            <b-form-group class="mt-2" label="NIK" label-for="nik" invalid-feedback="NIK is required">
                                <b-form-input id="nik" v-model="anggotaData.nik" required></b-form-input>
                            </b-form-group>

                            <!-- NAMA -->
                            <b-form-group class="mt-2" label="Nama" label-for="nama"
                                invalid-feedback="Nama is required">
                                <b-form-input id="nama" v-model="anggotaData.nama" required></b-form-input>
                            </b-form-group>

                            <!-- JENIS KELAMIN -->
                            <b-form-group id="input-group-3" label="Food:" label-for="input-3" class="mt-2">
                                <b-form-select class="gender" style="width: 230px;" v-model="anggotaData.jenis_kelamin">
                                    <option value="Laki-Laki">Laki-Laki</option>
                                    <option value="Perempuan">Perempuan</option>
                                </b-form-select>
                            </b-form-group>

                            <!-- TEMPAT LAHIR -->
                            <b-form-group class="mt-2" label="Tempat Lahir" label-for="Tempat Lahir"
                                invalid-feedback="Jenis Kelamin is required">
                                <b-form-input id="tempat_lahir" v-model="anggotaData.tempat_lahir"
                                    required></b-form-input>
                            </b-form-group>
                        </form>
                    </div>

                    <!-- INPUT KANAN -->
                    <div class="col input-kanan">
                        <form ref="form" @submit.stop.prevent="handleOk">
                            <!-- TANGGAL LAHIR -->
                            <b-form-group class="mt-2" label="Tanggal Lahir" label-for="tanggal_lahir"
                                invalid-feedback="Tanggal Lahir is required">
                                <b-form-input type="date" id="tanggal_lahir" v-model="anggotaData.tanggal_lahir"
                                    required></b-form-input>
                            </b-form-group>

                            <!-- AGAMA -->
                            <b-form-group class="mt-2" label="Agama" label-for="agama"
                                invalid-feedback="Agama Lahir is required">
                                <b-form-input id="agama" v-model="anggotaData.agama" required></b-form-input>
                            </b-form-group>

                            <!-- PENDIDIKAN -->
                            <b-form-group class="mt-2" label="Pendidikan" label-for="pendidikan"
                                invalid-feedback="Pendidikan Lahir is required">
                                <b-form-input id="pendidikan" v-model="anggotaData.pendidikan" required></b-form-input>
                            </b-form-group>

                            <!-- KEPALA KELUARGA     -->
                            <b-form-group id="input-group-3" label="Kartu Keluarga:" label-for="input-3" class="mt-2">
                                <b-form-select class="gender" style="width: 220px;" v-model="anggotaData.jenis_kelamin">
                                    <option value="">Yes</option>
                                    <option value="">No</option>
                                </b-form-select>
                            </b-form-group>

                        </form>
                    </div>
                </div>

            </b-modal>
            <!-- FORM END -->
        </div>
    </div>
</template>

<script>
import anggotaKeluargaServices from '../services/anggotaKeluargaServices'
export default {
    name: "FormAnggota",

    data() {
        return {
            anggotaKeluargaData: null,
            anggotaData: {
                nik: null,
                agama: null,
                nama: null,
                jenis_kelamin: null,
                tempat_lahir: null,
                tanggal_lahir: null,
                pendidikan: null,
                kepala_keluarga: null,
            }
        };
    },

    methods: {
        handleOk() {
            let data = this.anggotaData;
            let id = this.$route.params.id;
            let route = this.$route.fullPath;
            if (route === "/anggota") {
                anggotaKeluargaServices.create(data)
                    .then((response) => {
                        console.log(response.data);
                    })
                    .catch((e) => {
                        console.log(e);
                    });
            } else {
                anggotaKeluargaServices.updateKartuKeluarga(id, data)
                    .then((response) => {
                        console.log(response.data);
                    })
                    .catch((e) => {
                        console.log(e);
                    });
            }


        },

        getAnggota() {
            anggotaKeluargaServices.getAll()
                .then((response) => {
                    this.anggotaKeluargaData = response.data;
                    console.log(this.anggotaKeluargaData);
                })
                .catch((e) => {
                    console.log(e);
                });
        },


        deleteAnggota(id) {
            if (confirm(`Yakin Ingin menghapus data ini ?`)) {
                anggotaKeluargaServices.deleteKartuKeluarga(id)
                    .then((response) => {
                        console.log(response.data);
                        location.reload();
                    })
                    .catch((e) => {
                        console.log(e);
                    });
            } else {
                alert("Hapus Dibatalkan");
            }
        },
    },

    mounted() {
        this.getAnggota();
    },
}
</script>

<style scoped>
.form-add {
    margin-left: 20px;
}

.title {
    padding-top: 10px;
    padding-bottom: 10px;
    padding-left: 10px;
    border-radius: 15px;
}

.btn-successs {
    margin-right: 10px;
    background-color: #8E94F2;
    color: aliceblue;
    border: none;
}

.btn-detail {
    background-color: #92FAA4;
    color: aliceblue;
    margin-right: 10px;
}

.btn-tambah {
    margin-right: 10px;
    background-color: #92FAA4;
    color: aliceblue;
    border: none;
}

.btn-add {
    background-color: #92FAA4;
    color: aliceblue;
}

.btn-danger {
    background-color: #EF7A85;
    border: none;
}

/* MODAL BOX FORM*/
.input-kiri {
    padding: 10px 10px 10px 10px;
}

.input-kanan {
    padding: 10px 10px 10px 10px;
}

.close {
    background-color: #92FAA4;
}

.gender {
    padding-top: 10px;
    padding-right: 20px;

}
</style>