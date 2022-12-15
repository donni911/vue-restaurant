<template>
    <CHEader></CHEader>
    <h1> Hello {{ name }}! Welcome on Home Page</h1>
    <table border = "2">
            <tr>
                <td>ID</td>
                <td>Name</td>
                <td>Contact</td>
                <td>Address</td>
                <td>Actions</td>
            </tr>

            <tr v-for="item in restaurant" :key="item.id">
                <td>
                    {{ item.id }}
                </td>
                <td>
                    {{ item.name }}
                </td>
                <td>
                    {{ item.contact }}
                </td>
                <td>
                    {{ item.address }}
                </td>
                <td>
                    <router-link :to="'/update/' + item.id">Update</router-link>
                    <button @click="deleteRestaurant(item.id)">Delete</button>
                </td>
               
            </tr>
    </table>
</template>

<script>
import CHEader from './CHeader.vue'
import axios from 'axios';

    export default {
        name: 'HomePage',
        components: {
            CHEader
        },
        data(){
            return {
                name: '',
                restaurant: [],
            }
        },

        methods: {
            async deleteRestaurant(id) {
                const result = await axios.delete("http://localhost:3000/restaurant/" + id);
                if (result.status == 200) {
                    this.loadData()
                }
            },

            async loadData(){
                const user = localStorage.getItem('user-info');

                this.name = JSON.parse(user).name;
                
                if(!user) {
                    this.$router.push({name: 'SignUp'})
                }
                
                let result = await axios.get('http://localhost:3000/restaurant')

                this.restaurant = result.data
            }
        },

        async mounted() {
            this.loadData()
        }
    }
</script>

<style>
td {
    height: 50px;
    width: 150px;
}
</style>