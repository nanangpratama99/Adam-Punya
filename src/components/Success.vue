<template>
    <div class="d-flex justify-content-around">
        <div class="cards shadow mt-5 text-center">
            <div class="card-body ">
                <h4 class="card-title mb-1">Success!</h4>
                <p class="card-text">Data Berhasil {{ Judul }} !</p>

                <router-link to="/" v-if="Judul === 'Submit'">
                    <button class="back btn btn-primary mt-3">Back</button>
                </router-link>
                <router-link to="/" v-else-if="Judul === 'Update'">
                    <button class="back btn btn-primary mt-3">Back</button>
                </router-link>
                <button class="btn btn-primary" @click="RefreshFunc" v-else>Refresh</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "SuccesS",

    date() {
        return {
            Judul: null,
        }
    },

    methods: {
        ubahJudul() {
            let route = this.$route.fullPath;
            if (route === "/addkk") {
                this.Judul = "Ditambahkan";

            } else if (route === "/") {
                this.Judul = "Delete";

            } else {
                this.Judul = "Update";
            }
        },

        RefreshFunc() {
            location.reload();
        },
    },
    mounted() {
        this.ubahJudul();
    },
}
</script>

<style scoped>
.cards {
    border: 1px solid #25AAE1;
    padding: 15px 15px;
    border-radius: 15px;
    margin-top: 15px;
    width: 50%;
}

.btn-primary {
    background-color: #25AAE1;
}
</style>