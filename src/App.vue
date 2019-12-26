<template>
  <div id="app" class="main_layout debug">
    
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
  display: flex;
  flex-flow: wrap;
  height: 100%;
}
header {
  display: inline-block;
  width: 200px;
  height: 100%;
}

</style>