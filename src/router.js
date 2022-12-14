import Login from "./pages/Login.vue"
import Register from './pages/Register.vue'
import Home from './pages/Home.vue'
import Form from './pages/FormAddKK.vue'
import Anggota from './pages/FormAnggota.vue'
import DetailKK from './pages/DetailKK.vue'

export default [
    {
        path: '/login',
        component: Login
    },
    {
        path: '/register',
        component: Register
    },
    {
        path: '/home',
        component: Home
    },
    {
        path: `/addkk`,
        component: Form
    },
    {
        path: `/anggota`,
        component: Anggota
    },

    {
        path: `/detailKK/:id`,
        component: DetailKK
    }
]