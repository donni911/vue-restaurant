import {createRouter, createWebHistory} from "vue-router"

import SignUp from './components/SignUp.vue';
import HomePage from './components/HomePage.vue';
import LoginPage from './components/LoginPage.vue';
import UpdateRestaurant from './components/UpdateRestaurant.vue';
import AddRestaurant from './components/AddRestaurant.vue';


const routes = [
    {
        name: "HomePage",
        component: HomePage,
        path: '/'
    },
    {
        name: "SignUp",
        component: SignUp,
        path: '/sign-up'
    },
    {
        name: "LoginPage",
        component: LoginPage,
        path: '/login'
    },
    {
        name: "UpdateRestaurant",
        component: UpdateRestaurant,
        path: '/update/:id'
    },
    {
        name: "AddRestaurant",
        component: AddRestaurant,
        path: '/add'
    }
];

const router = createRouter({
    history: createWebHistory(),
    linkActiveClass:'active',
    routes,
});

export default router;