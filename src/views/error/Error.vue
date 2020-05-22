<script>
import { mapActions } from "vuex";
export default {
  created() {
    this.setloader(false);
  },
  methods: {
    ...mapActions({
      setloader: "setLoader"
    })
  }
};
</script>
<template>
  <main>
    <router-link to="/">Back Home</router-link>
  </main>
</template>
<style lang="scss" scoped>
main {
  text-align: center;
}
</style>
