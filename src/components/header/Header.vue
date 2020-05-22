<style scoped lang="scss" src="./style.scss"></style>
<script>
export default {
  props: {
    text: String
  }
};
</script>
<template>
  <header>{{ text }}</header>
</template>
