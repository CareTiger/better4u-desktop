<template>
    <div class="ma4">

        <h3>Login</h3>

        <form action="">
            <div class="measure">
                <label for="email" class="f6 b db mb2">Email</label>
                <input id="email" class="" type="email" placeholder="Email" v-model="email">
            </div>
            <div class="pa1 mt2">
                <label class="dib">Password</label>
                <input type="password" placeholder="Password" v-model="password">
            </div>            
            <a class="f6 dark-green no-underline ba grow pv2 ph4 dib" @click.prevent="Login">Login</a>
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
        async Login(){
                console.log("register")            
                await auth.createUserWithEmailAndPassword(this.email, this.password).then((response) => {
            }).catch((err) => {
                console.log(err);
            })

        }
    }
    
}
</script>