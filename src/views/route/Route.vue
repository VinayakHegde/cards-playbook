<style lang="scss" src="./style.scss"></style>

<script>
import Header from "@/components/header/Header.vue";
import Loader from "@/components/loader/Loader.vue";
export default {
  components: {
    Header,
    Loader
  }
};
</script>

<template>
  <div id="cards-playbook">
    <Loader v-if="$store.getters.loading" />
    <Header v-bind:text="$route.meta.header" />
    <router-view />
  </div>
</template>
