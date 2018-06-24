<template>
    <div id="edit-contact">
        <h3>Edit Contact</h3>
        <div class="row">
            <form @submit.prevent="editContact" class="col s12">
                <div class="row">
                    <div class="input-field col s12">
                        <input disabled type="text" v-model="contact_id" required>
                        <label class="active">Contact ID#</label>
                    </div>
                </div>
                <div class="row">
                    <div class="input-field col s12">
                        <input type="text" v-model="first_name" required>
                        <label class="active">First Name</label>
                    </div>
                </div>
                <div class="row">
                    <div class="input-field col s12">
                        <input type="text" v-model="last_name" required>
                        <label class="active">Last Name</label>
                    </div>
                </div>
                <div class="row">
                    <div class="input-field col s12">
                        <input type="text" v-model="phone_1" required>
                        <label class="active">Phone</label>
                    </div>
                </div>
                <div class="row">
                    <div class="input-field col s12">
                        <input type="text" v-model="email_1" required>
                        <label class="active">Email</label>
                    </div>
                </div>
                <button type="submit" class="btn green">Update</button>
                <router-link to="/" class="btn grey">Cancel</router-link>
            </form>
        </div>
    </div>
</template>

<script>
import db from './firebaseInit'

export default {
    name: 'edit-contact',
    data() {
        return {
            contact_id: null,
            first_name: null,
            last_name: null,
            phone_1: null,
            email_1: null
        }
    },
    beforeRouteEnter(to, from, next) {
        db.collection('contacts').where('contact_id', '==', to.params.contact_id).get()
        .then(
            querySnapshot => {
                querySnapshot.forEach( doc => {
                    next( vm => {
                        vm.contact_id = doc.data().contact_id
                        vm.first_name = doc.data().first_name
                        vm.last_name = doc.data().last_name
                        vm.email_1 = doc.data().email_1
                        vm.phone_1 = doc.data().phone_1
                    })
                })
            }
        )
    },
    watch: {
        '$route': 'fetchData'
    },
    methods: {
        fetchData() {
            db.collection('contacts').where('contact_id', '==', this.$route.params.contact_id).get().then(
                querySnapshot => {
                    querySnapshot.forEach( doc => {
                        this.contact_id = doc.data().contact_id
                        this.first_name = doc.data().first_name
                        this.last_name = doc.data().last_name
                        this.phone_1 = doc.data().phone_1
                        this.email_1 = doc.data().email_1
                    })
                })
        },
        editContact() {
            db.collection('contacts').where('contact_id', '==', this.$route.params.contact_id).get().then(
                querySnapshot => {
                    querySnapshot.forEach( doc => {
                        doc.ref.update({
                            contact_id: this.contact_id,
                            first_name: this.first_name,
                            last_name: this.last_name,
                            phone_1: this.phone_1,
                            email_1: this.email_1
                        })
                        .then(() => {
                            this.$router.push({
                                name: 'view-contact',
                                params: { contact_id: this.contact_id }
                            })
                        })
                    })
                })
        }
    }
}
</script>

