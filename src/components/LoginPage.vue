<template>
  <div>
      <div class="c-img">    
        <img src="../../public/logo.png" alt="logo">
      </div>
      <h1>Login</h1>
      <div class="c-register">
          <input class="c-form-input" autocomplete="off" type="text" placeholder="Enter Email" v-model="email">
          <input class="c-form-input" autocomplete="off" type="password" placeholder="Enter Password" v-model="password">
          <button class="c-btn" type="button" @click="login">Login</button>
          <div class="c-goto">
            <router-link  class="c-goto__link" to="sign-up">Sign-up</router-link>
          </div>
      </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {

  name: "LoginPage",

  data() {
      return{
        email:'',
        password:''
      }
  },

  methods: {
    async login() {
      let result = await axios.get(
        `http://localhost:3000/users?email=${this.email}&password=${this.password}`
        )

        if (result.status == 201 && result.data.length > 0) {
          localStorage.setItem("user-info", JSON.stringify(result.data[0]));
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
