
<template>
    <div class="h-100">
        <nav class="bg-light-gray black">
            <router-link class="link pa2 ml3 mt4" :to="{ name: 'Home'}" exact>
                <span class="icon icon-home"></span>Home
            </router-link>
            <router-link class="link pa2 ml3" :to="{ name: 'Canvas'}" exact>
                <span class="icon icon-clipboard"></span>Canvas
            </router-link>
            <router-link class="link pa2 ml3" :to="{ name: 'Upload'}" exact>
                <span class="icon icon-clipboard"></span>Upload
            </router-link>
            <router-link class="link pa2 ml3" :to="{ name: 'Calendar'}" exact>
                <span class="icon icon-clipboard"></span>Tasks
            </router-link>
            <router-link class="link pa2 ml3" :to="{ name: 'Calendar'}" exact>
                <span class="icon icon-clipboard"></span>Calendar
            </router-link>

            <!-- ACCOUNT -->
            <div class="bb bw b--red"></div>

            <router-link class="link pa2 ml3" :to="{ name: 'Register'}" exact>
                <span class="icon icon-clipboard"></span>Register
            </router-link>

            <router-link class="link pa2 ml3" :to="{ name: 'Login'}" exact>
                <span class="icon icon-clipboard"></span>Login
            </router-link>
            
        </nav>
    </div>
</template>

<script>
export default {
    data () {
        return {
            isActive: false
        }
    },
}
</script>

<style scoped>
.navbar {
    height: 100%;
}
nav {
    height: 100%;
    display: flex;
    flex-direction: column;
}
</style>