<template>
    <header class="c-header">
        <a href="" class="c-header-link">Home</a>
        <a href="" class="c-header-link">Add Restaurant</a>
        <a href="" class="c-header-link">Update</a>
        <a href="" class="c-header-link" @click="logout">Logout</a>
    </header>
</template>

<script>
export default {
    name: 'CHeader',
   
    methods: {
        logout () {
            localStorage.clear();
            this.$router.push({name: 'LoginPage'})
        }
    }
}

</script>

<style>
.c-header {
    background: var(--light-gray);
    width: 100%;

    display: flex;
    justify-content: center;

}

.c-header-link {
    padding: 20px 10px;
    font-weight: 500;
    transition: background 0.2s ease-in, color 0.2s ease-in;

}

.c-header-link:hover {
    background: var(--hot-orange);
    color: var(--white);
}
</style>