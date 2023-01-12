<template>
    <CHEader></CHEader>
    <h1> Hello {{ name ? name : 'User' }}! Welcome on Add Restaurant Page</h1>
    <form action="" class="c-register" @submit.prevent>
        <input class="c-form-input" type="text" name="name" placeholder="Enter Name" v-model="restaurant.name">
        <input class="c-form-input" type="text" name="address" placeholder="Enter Address" v-model="restaurant.address">
        <input class="c-form-input" type="text" name="contact" placeholder="Enter Contact" v-model="restaurant.contact">
        <button class="c-btn" @click="updateRestaurant">Update Restaurant</button>
    </form>
    <p v-if="warningMsg" class="danger">Enter all values</p>
</template>

<script>
import axios from 'axios'
import CHEader from './CHeader.vue' 

export default {
    name: 'UpdateRestaurant',
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
        async updateRestaurant(){
           
            axios.put('http://localhost:3000/restaurant/' + this.$route.params.id, {
                name:this.restaurant.name,
                contact:this.restaurant.contact,
                address:this.restaurant.address,
            })

            this.$router.push({name: 'HomePage'})

        }
    },

    async mounted() {
        const user = localStorage.getItem('user-info');

        this.name = JSON.parse(user).name;

        if(!user) {
            this.$router.push({name: 'SignUp'})
        }

        const result  = await axios.get('http://localhost:3000/restaurant/' + this.$route.params.id)

        this.restaurant = result.data
    } 
}
</script>

<style>
.danger {
    color: red;
}
</style>