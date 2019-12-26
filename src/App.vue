<template>
  <div id="app">
    
      <header>
        <Navbar />
      </header>

      <main>
        <router-view />
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