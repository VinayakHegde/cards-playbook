<template>
  <div class="table-analysis" v-if="$store.getters.canAnalyse">
    <h2 class="table-analysis__highcard">
      High Card: <span class="value">{{ $store.getters.highCard }}</span>
    </h2>
    <h2 class="table-analysis__fullhouse">
      Full House Combo:
      <span
        class="value"
        v-if="
          !$store.getters.fullHouseCombi ||
            !$store.getters.fullHouseCombi.length
        "
        >None</span
      >
    </h2>
    <ol class="table-analysis__fullhouse__combis">
      <li
        v-for="set in $store.getters.fullHouseCombi"
        :key="JSON.stringify(set)"
        class="value"
      >
        {{ set.join(", ") }}
      </li>
    </ol>
  </div>
</template>
<style lang="scss" scoped src="./style.scss"></style>
