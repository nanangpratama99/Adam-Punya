<template>
  <div>
    <div>
      <h3 class="mt-4 shadow title">Homepage</h3>
    </div>
    <!-- CARD START -->
    <div class="cards">
      <div class="jkk shadow">
        <p class="text mt-2">Jumlah Kartu Keluarga</p>
        <p class="angka mt-2">{{ kartuKeluargaData.length }}</p>
      </div>

      <div class="jsw shadow">
        <p class="text mt-2">Jumlah Seluruh Warga</p>
        <p class="angka mt-2">{{ anggotaKeluargaData.length }}</p>
      </div>

    </div>
    <!-- CARD END -->

    <!-- TABLE START -->
    <table class="table mt-4 table table-striped shadow">
      <thead>
        <tr>
          <th scope="col" class="text-center">No</th>
          <th scope="col">Nomor KK</th>
          <th scope="col">Alamat</th>
          <th scope="col">Kota</th>
          <th scope="col">Kode Pos</th>
          <th scope="col" class="text-center">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in kartuKeluargaData" :key="index">
          <th class="text-center" scope="row">{{ index + 1 }}</th>
          <td>{{ item.nomor_kk }}</td>
          <td>{{ item.alamat }}</td>
          <td>{{ item.kabupaten_kota }}</td>
          <td>{{ item.kode_pos }}</td>
          <td class="text-center">

            <!-- BUTTON -->
            <router-link to="/detailKK">
              <button class="btn btn-success" type="submit" @click="getKK(item.nomor_kk)">Detail</button>
            </router-link>
            <button class="btn btn-danger" type="submit" @click="deleteKK(item.id)">Hapus</button>

          </td>
        </tr>
      </tbody>
    </table>
    <!-- TABLE END -->
  </div>
</template>

<script>
import kartuKeluargaServices from '@/services/kkServices'
import anggotaKeluargaServices from '@/services/anggotaKeluargaServices';
export default {
  name: "DashboardS",

  data() {
    return {
      kartuKeluargaData: null,
      anggotaKeluargaData: null,
    };
  },

  methods: {

    // METHOD GET ALL DATA KK
    getKK() {
      kartuKeluargaServices.getAll()
        .then((response) => {
          this.kartuKeluargaData = response.data;
          console.log(this.kartuKeluargaData);
        })
        .catch((e) => {
          console.log(e);
        });
    },

    // METHOD GET ALL ANGGOTA
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

    // METHOD DELETE KK
    deleteKK(id) {
      if (confirm(`Yakin Ingin menghapus data ini ?`)) {
        kartuKeluargaServices.deleteKartuKeluarga(id)
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
    this.getKK();
    this.getAnggota()
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

h2 {
  margin-left: 20px;
}

/* Button */
.btn-success {
  padding: 5px 11px;
  margin-right: 10px;
  background-color: #92faa4;
  border: none;
}

.btn-danger {
  padding: 5px 13px;
  margin-right: 10px;
  border: none;
  background-color: #ef7a85;
}

.card-1 {
  background-color: aquamarine;
  margin-right: 50px;
  width: 200px;
  height: 100px;
  padding: 10px 10px;
  color: rgb(130, 130, 130);
  border-radius: 20;
}

.card-2 {
  background-color: rgb(255, 189, 46);
  width: 200px;
  height: 100px;
  padding: 10px 10px;
  color: aliceblue;
}

.cards {
  display: flex;
  flex-direction: row;
  margin-top: 25px;
  justify-content: flex-start;
  margin-left: 20px;
}

/* Card Start */
.jkk {
  background-color: #b9faf8;
  color: rgb(59, 59, 59);
  margin-right: 20px;
  width: 270px;
  height: 150px;
  padding: 20px 20px;
  border-radius: 20px;
  color: rgb(62, 62, 62);
}

.jsw {
  background-color: rgb(255, 204, 95);
  color: aliceblue;
  width: 270px;
  height: 150px;
  padding: 20px 20px;
  border-radius: 20px;
}

.jsa {
  background-color: rgb(65, 67, 111);
  color: aliceblue;
  width: 270px;
  height: 150px;
  padding: 20px 20px;
  border-radius: 20px;
}

/* Card End */

table {
  border: 1px solid #f2f2f2;
  margin-left: 20px;
}

.angka {
  font-size: 50px;
}

.text {
  font-size: 20px;
}

.title {
  padding: 10px 10px;
  border-radius: 15px;
  background-color: #c8b6ff;
  margin-left: 20px;
  color: aliceblue;

}
</style>