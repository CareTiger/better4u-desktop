<template>
    <div class="ma4">

        <h1 class="f3">Login</h1>

        <div v-if="!success">
            <form action="">
                <div class="measure mb3">
                    <label for="email" class="f6 b db mb2">Email <span class="normal black-60">(required)</span></label>
                    <input id="email" class="input-reset ba b--black-20 pa2 mb1 db w-100" type="email" placeholder="Email" v-model="email">
                </div>
                <div class="measure mb3">
                    <label for="password" class="f6 b db mb2">Password <span class="normal black-60">(required)</span></label>
                    <input id="password" class="input-reset ba b--black-20 pa2 mb1 db w-100" type="password" placeholder="Password" v-model="password">
                </div>
                <div class="measure mb2">

                </div>
                <a class="f6 dark-green no-underline ba grow pv2 ph4 dib" @click.prevent="Login">Login</a>
            </form>        
        </div>
        <div v-else>
            <h5 class="f4 green">Yaay! You logged in successfully.</h5>
        </div>

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
            password: '',
            success: false
        }
    },
    methods: {
        async Login(){
                this.success = true
                await auth.signInWithEmailAndPassword(this.email, this.password).then((response) => {
            }).catch((err) => {
                console.log(err);
            })

        }
    }
    
}
</script>