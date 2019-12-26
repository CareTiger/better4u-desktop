
<template>
    <div class="navbar">
        <nav class="bg-light-gray black">
            <router-link class="link pl2" :to="{ name: 'Home'}" exact>
                <span class="icon icon-home"></span>Home
            </router-link>
            <router-link class="link pl2" :to="{ name: 'Upload'}" exact>
                <span class="icon icon-clipboard"></span>Upload
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
</style>