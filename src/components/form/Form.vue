<script src="./index.js"></script>
<style scoped lang="scss" src="./style.scss"></style>
<!-- to keep the file small, style and codes are seperated from SFC -->
<template>
  <form class="form" autocomplete="off" @submit.prevent="submit">
    <div class="fields">
      <fieldset class="field" v-for="card in cards" :key="`key_${card.index}`">
        <legend>Card {{ card.index + 1 }}</legend>
        <input
          v-model="card.value"
          placeholder="Enter card"
          minlength="2"
          maxlength="3"
          autocomplete="off"
        />
      </fieldset>
    </div>
    <div class="single-field">
      <label for="field-rotation">Rotation Card</label>
      <input
        id="field-rotation"
        v-model="rotation.value"
        placeholder="Enter card"
        minlength="2"
        maxlength="3"
        autocomplete="off"
      />
    </div>
    <button type="submit">Submit</button>
  </form>
</template>
