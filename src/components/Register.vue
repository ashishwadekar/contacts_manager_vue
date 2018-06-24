<template>
    <div>
        <div class="container">
            <div class="row">
                <div class="col s12 m8 offset-m2">
                    <div class="login card-panel grey lighten-4 black-text center">
                        <h3>Registration</h3>
                        <form action="index.html">
                            <div class="input-field">
                                <i class="material-icons prefix">email</i>
                                <input type="email" id="email" v-model="email">
                                <label class="black-text" for="email">Email Address</label>
                            </div>
                            <div class="input-field">
                                <i class="material-icons prefix">lock</i>
                                <input type="password" id="password" v-model="password">
                                <label class="black-text" for="password">Password</label>
                            </div>
                            <div class="input-field">
                                <i class="material-icons prefix">lock</i>
                                <input type="password" id="confirm-password" v-model="confirm_password">
                                <label class="black-text" for="confirm-password">Confirm Password</label>
                            </div>
                            <button v-on:click="register" class="btn btn-large btn-extended blue white-text">Register</button>
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
export default {
    name: 'register',
    data: function() {
        return {}
    },
    methods: {
        register() {

        }
    }
}
</script>

