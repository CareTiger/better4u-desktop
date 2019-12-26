<template>
  <div id="app" class="main_layout">
    
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

<style scoped>
.main_layout {
  display: grid;
  grid-template-columns: 200px 1fr;
  height: 100vh;
}
header {
  grid-column: 1/2;
}
main {
  grid-column: 2/3;
}

</style>