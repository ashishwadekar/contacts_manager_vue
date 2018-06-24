<template>
    <div id="new-contact">
        <h3>New Contact</h3>
        <div class="row">
            <form @submit.prevent="saveContact" class="col s12">
                <div class="row">
                    <div class="input-field col s12">
                        <input type="text" v-model="contact_id" required>
                        <label>Contact ID#</label>
                    </div>
                </div>
                <div class="row">
                    <div class="input-field col s12">
                        <input type="text" v-model="first_name" required>
                        <label>First Name</label>
                    </div>
                </div>
                <div class="row">
                    <div class="input-field col s12">
                        <input type="text" v-model="last_name" required>
                        <label>Last Name</label>
                    </div>
                </div>
                <div class="row">
                    <div class="input-field col s12">
                        <input type="text" v-model="phone_1" required>
                        <label>Phone</label>
                    </div>
                </div>
                <div class="row">
                    <div class="input-field col s12">
                        <input type="text" v-model="email_1" required>
                        <label>Email</label>
                    </div>
                </div>
                <button type="submit" class="btn green">Create</button>
                <router-link to="/" class="btn grey">Cancel</router-link>
            </form>
        </div>
    </div>
</template>

<script>
import db from './firebaseInit'

export default {
    name: 'new-contact',
    data() {
        return {
            contact_id: null,
            first_name: null,
            last_name: null,
            phone_1: null,
            email_1: null
        }
    },
    methods: {
        saveContact() {
            db.collection('contacts').add({
                contact_id: this.contact_id,
                first_name: this.first_name,
                last_name: this.last_name,
                phone_1: this.phone_1,
                email_1: this.email_1
            })
            .then(docRef => {
                this.$router.push('/')
            })
            .catch(error => console.log(err))
        }
    }
}
</script>

