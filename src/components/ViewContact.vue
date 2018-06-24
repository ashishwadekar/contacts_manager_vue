<template>
    <div id="view-contact">
        <ul class="collection with-header">
            <li class="collection-header"><h4>{{first_name}} {{last_name}}</h4></li>
            <li class="collection-item">Contact ID: {{contact_id}}</li>
            <li class="collection-item">Phone: <strong>{{phone_1}}</strong></li>
            <li class="collection-item">Email: {{email_1}}</li>
        </ul>
        <router-link to="/" class="btn grey">Back</router-link>
        <button @click="deleteContact" class="btn red">Delete</button>

        <div class="fixed-action-btn">
            <router-link v-bind:to="{name: 'edit-contact', params: { contact_id: contact_id } }" class="btn-floating btn-large orange">
            <i class="fa fa-pencil"></i>
            </router-link>
        </div>
    </div>
</template>

<script>
import db from './firebaseInit'
export default {
    name: 'view-contact',
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
        deleteContact() {
            if(confirm('Are you sure?')) {
                db.collection('contacts').where('contact_id', '==', this.$route.params.contact_id).get().then(
                querySnapshot => {
                    querySnapshot.forEach( doc => {
                        doc.ref.delete()
                        this.$router.push('/')
                    })
                })
            }
        }
    }
}
</script>

