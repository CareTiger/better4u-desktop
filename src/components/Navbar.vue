
<template>
    <div class="navbar">
        <nav class="nav-group">
            <router-link class="nav-group-item" :to="{ name: 'Home'}" exact>
                <span class="icon icon-home"></span>Home
            </router-link>
            <router-link class="nav-group-item" :to="{ name: 'Upload'}" exact>
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