<script>
import { mapState, mapActions } from "vuex";
import Table from "@/components/table/Table.vue";
import Analysis from "@/components/analysis/Analysis.vue";
export default {
  components: {
    Table,
    Analysis
  },
  props: ["hash"],
  computed: mapState({
    localHash: state => state.hash || ""
  }),
  created: async function() {
    if (!this.localHash) {
      const result = await this.getPile(this.hash);
      let error = false;
      if (result) {
        error = result.error;
      }
      if (error) {
        this.$router.push({ name: "Error" });
      }
    }
  },
  methods: {
    ...mapActions({
      getPile: "getAction"
    })
  }
};
</script>
<template>
  <main>
    <Table />
    <Analysis />
  </main>
</template>
