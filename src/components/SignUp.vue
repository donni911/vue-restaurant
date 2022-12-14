<template>
  <div>
    <div class="c-img">    
        <img src="../../public/logo.png" alt="logo">
      </div>
      <h1>Sign Up</h1>
      <div class="c-register">
          <input class="c-form-input" autocomplete="off" type="text" placeholder="Enter Name" v-model="name">
          <input class="c-form-input" autocomplete="off" type="text" placeholder="Enter Email" v-model="email">
          <input class="c-form-input" autocomplete="off" type="password" placeholder="Enter Password" v-model="password">
          <button class="c-btn" type="button" @click='signUp'>Submit</button>
          <div class="c-goto"> 
            <router-link to="login">Login</router-link>
          </div>
      </div>
    </div>
</template>

<script>
import axios from "axios"

export default{
  name: 'SignUp',
  data() {
    return {
      name: '',
      email: '',
      password: ''
    }
  },
  methods: {
    async signUp() {
       let result = await axios.post('http://localhost:3000/users', {
        name: this.name,
        email: this.email,
        password: this.password
      })
      
      if (result.status == 201) {
          localStorage.setItem("user-info", JSON.stringify(result.data));
          this.$router.push({name: 'HomePage'})
      }
    }
  },
  mounted() {
    const name = localStorage.getItem('user-info');

    if (name) {
      this.$router.push({name: 'HomePage'})
    }
  }
}

</script>

<style>

</style>