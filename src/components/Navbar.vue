
<template>
    <div class="navbar">
        <nav class="nav-group">
            <router-link class="nav-group-item isActive" :to="{ name: 'Settings'}" exact>
                <span class="icon icon-user">Settings</span>
            </router-link>
            <router-link class="nav-group-item isActive" :to="{ name: 'Home'}" exact>
                <span class="icon icon-home"></span>Home
            </router-link>
            <router-link class="nav-group-item isActive" :to="{ name: 'Tasks'}" exact>
                <span class="icon icon-clipboard"></span>Tasks
            </router-link>
            <router-link class="nav-group-item isActive" :to="{ name: 'TasksNew'}" exact>
                <span class="icon icon-clipboard"></span>Tasks New
            </router-link>
            <router-link class="nav-group-item isActive" :to="{ name: 'Calendar'}" exact>
                <span class="icon icon-calendar"></span>Calendar
            </router-link>
            <router-link class="nav-group-item isActive" :to="{ name: 'Storage'}" exact>
                <span class="icon icon-folder"></span>Storage
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