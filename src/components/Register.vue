<template>
    <div>
        <div class="container">
            <div class="row">
                <div class="col s12 m8 offset-m2">
                    <div class="login card-panel grey lighten-4 black-text center">
                        <h3>Registration</h3>
                        <form @submit.prevent="register">
                            <div class="input-field">
                                <i class="material-icons prefix">email</i>
                                <input type="email" id="email" v-model="email" required>
                                <label class="black-text" for="email">Email Address</label>
                            </div>
                            <div class="input-field">
                                <i class="material-icons prefix">lock</i>
                                <input type="password" id="password" v-model="password" required>
                                <label class="black-text" for="password">Password</label>
                            </div>
                            <div class="input-field">
                                <i class="material-icons prefix">lock</i>
                                <input type="password" id="confirm-password" v-model="confirm_password" required>
                                <label class="black-text" for="confirm-password">Confirm Password</label>
                            </div>
                            <button type="submit" class="btn btn-large btn-extended blue white-text">Register</button>
                            <br><br>
                            <router-link to='login' class="black-text">Already have an account ? Click here to login</router-link>
                        </form>
                    </div>
                </div>
            </div>
        </div>
  </div>
</template>

<script>
import firebase from "firebase"

export default {
    name: 'register',
    data: function() {
        return {
            email: null,
            password: null,
            confirm_password: null
        }
    },
    methods: {
        register() {
            if(this.password === this.confirm_password) {
                firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then( user => {
                    alert('Account created for ' + this.email)
                    this.$router.go({ path: this.$router.path})
                },
                err => {
                    alert(err.message)
                })
            } else {
                alert('Passwords do not match! Please check.')
                this.password = null
                this.confirm_password = null
            }

        }
    }
}
</script>

