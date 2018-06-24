<template>
<nav>
    <div class="nav-wrapper blue">
        <div class="container">
            <router-link to="/" class="brand-logo">Contact Manager</router-link>
            <ul class="right">
                <li v-if="isLoggedIn"><span class="email white-text">Hello, {{currentUser}}</span></li>
                <li v-if="isLoggedIn"><router-link to="/">Dashboard</router-link></li>
                <li v-if="!isLoggedIn"><router-link to="/login">Login</router-link></li>
                <li v-if="!isLoggedIn"><router-link to="/register">Register</router-link></li>
                <li v-if="isLoggedIn"><button @click="logout" class="btn red lighten-1">Log Out</button></li>
            </ul>
        </div>
    </div>
</nav>
</template>

<script>
import firebase from 'firebase'

export default {
    name: 'navbar',
    data() {
        return {
            isLoggedIn: false,
            currentUser: false
        }
    },
    created() {
        if(firebase.auth().currentUser) {
            this.isLoggedIn = true
            this.currentUser = firebase.auth().currentUser.email
        }
    },
    methods: {
        logout() {
            firebase.auth().signOut().then(() => this.$router.push('/login'))
            this.$router.go({ path: this.$router.path})
        }
    }
}
</script>

<style scoped>
    .email { padding-right: 10px; }
</style>


