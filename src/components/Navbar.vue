
<template>
    <div class="navbar">
        <nav class="bg-light-gray black">
            <router-link class="link pa2 ml3 mt4" :to="{ name: 'Home'}" exact>
                <span class="icon icon-home"></span>Home
            </router-link>
            <router-link class="link pa2 ml3" :to="{ name: 'Upload'}" exact>
                <span class="icon icon-clipboard"></span>Upload
            </router-link>

            <!-- ACCOUNT -->
            <router-link class="link pa2 ml3" :to="{ name: 'CreateAccount'}" exact>
                <span class="icon icon-clipboard"></span>Create Account
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