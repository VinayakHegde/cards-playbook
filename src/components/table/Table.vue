<style lang="scss" scoped src="./style.scss"></style>
<template>
  <ul v-if="$store.getters.cards.length" class="table">
    <li
      v-for="card in $store.getters.cards"
      :key="JSON.stringify(card)"
      class="card"
    >
      <div class="value" v-bind:class="card.name">{{ card.value }}</div>
      <div class="value bottom" v-bind:class="card.name">
        {{ card.value }}
      </div>
    </li>
  </ul>
</template>
