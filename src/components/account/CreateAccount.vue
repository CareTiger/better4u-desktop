/* eslint-disable no-console */
<template>
    <div class="ma4">

        <h3>Register</h3>

        <form action="">
            <div class="pa1">
                <label class="mr2">Email address</label>
                <input type="email" placeholder="Email" v-model="email">
            </div>
            <div class="pa1 mt2">
                <label class="mr2">Password</label>
                <input type="password" placeholder="Password" v-model="password">
            </div>            
            <button class="mt2" @click.prevent="registerMe">Register me</button>
        </form>
    </div>
</template>

<script>
/* eslint-disable */
import {auth} from '@/plugins/firebase.js'
import {fireDb} from '@/plugins/firebase.js'

export default {
    data(){
        return{
            email: '',
            password: ''
        }
    },
    methods: {
        async registerMe(){
            console.log("register")            
            await auth.createUserWithEmailAndPassword(this.email, this.password).then((response) => {
            }).catch((err) => {
                console.log(err);
            })

        }
    }
    
}
</script>

<style  scoped>

</style>
