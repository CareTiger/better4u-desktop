<template>
  <div id="app">
    
      <header>
        <div class="better4u-navbar">
          <Navbar />
        </div>
      </header>

      <main>
        <div>
          App.vue
        </div>
        <div class="better4u-content">
          <router-view />
        </div>
      </main>

  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";

export default {
  name: "App",
  components: {
    Navbar
  },
  data: () => ({
    //
  })
};
</script>
