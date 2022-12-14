<template>
        <CHEader></CHEader>
        <h1> Hello User! Welcome on Home Page</h1>
</template>

<script>
import CHEader from './CHeader.vue'

    export default {
        name: 'HomePage',
        components: {
            CHEader
        },
        mounted() {
            const name = localStorage.getItem('user-info');
            if(!name) {
                this.$router.push({name: 'SignUp'})
            }
        }
    }
</script>