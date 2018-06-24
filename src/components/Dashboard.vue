<template>
    <div id="dashboard">
        <ul class="collection with-header">
            <li class="collection-header"><h4>Contacts List</h4></li>
            <li v-for="contact in contacts" v-bind:key="contact.id" class="collection-item">
                {{ contact.first_name }} {{ contact.last_name }}
                <router-link class="secondary-content" v-bind:to="{name: 'view-contact', params: { contact_id: contact.contact_id} }"><i class="fa fa-eye"></i></router-link>
            </li>
        </ul>

        <div class="fixed-action-btn">
            <router-link to="/new" class="btn-floating btn-large red">
            <i class="fa fa-plus"></i>
            </router-link>
        </div>
    </div>
</template>

<script>
import db from './firebaseInit'
export default {
    name: 'dashboard',
    data() {
        return {
            contacts: []

        }
    },
    created() {
        db.collection('contacts').orderBy('first_name').get().then(
            querySnapshot => {
                querySnapshot.forEach(doc => {
                    const data = {
                        'id': doc.id,
                        'contact_id': doc.data().contact_id,
                        'first_name': doc.data().first_name,
                        'last_name': doc.data().last_name,
                        'email_1': doc.data().email_1,
                        'phone_1': doc.data().phone_1
                    }
                    this.contacts.push(data)
                })
            })
    }
}
</script>

