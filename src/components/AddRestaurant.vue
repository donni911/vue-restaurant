<template>
        <CHEader></CHEader>
        <h1> Hello  {{ name }}! Welcome on Add Restaurant Page</h1>
        <form action="" class="c-register" @submit.prevent>
            <input class="c-form-input" type="text" name="name" placeholder="Enter Name" v-model="restaurant.name">
            <input class="c-form-input" type="text" name="address" placeholder="Enter Address" v-model="restaurant.address">
            <input class="c-form-input" type="text" name="contact" placeholder="Enter Contact" v-model="restaurant.contact">
            <button class="c-btn" @click="addRestaurant">Add Restaurant</button>
        </form>
        <p v-if="warningMsg" class="danger">Enter all values</p>
</template>

<script>
import CHEader from './CHeader.vue' 
import axios from 'axios';
    export default {
        name: 'AddRestaurant',
        components: {
            CHEader
        },
        data (){
            return {
                name:null,
                warningMsg: false,
                restaurant: {
                    name: '',
                    address:'',
                    contact:'',
                }
            }
        },
        methods: {
            async addRestaurant(){
                if (this.restaurant.name == '' || this.restaurant.address == '' || this.restaurant.contact == '') {
                    this.warningMsg = true;
                    return
                } 
                    this.warningMsg = false;
                    
                    let result = await axios.post('http://localhost:3000/restaurant',{
                        name: this.restaurant.name,
                        address: this.restaurant.address,
                        contact: this.restaurant.contact,
                    })
    
                    if (result.status == 201 && 200) {
                        this.$router.push({name: 'HomePage'})
                    }
                
            }
        },

        mounted() {
            const user = localStorage.getItem('user-info');

            this.name = JSON.parse(user).name;
                
            if(!user) {
                this.$router.push({name: 'SignUp'})
            }
        }
    }
</script>

<style>
.danger {
    color: red;
}
</style>