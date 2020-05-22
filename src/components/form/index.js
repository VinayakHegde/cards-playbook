import Vue from "vue";
import Component from "vue-class-component";

@Component
class Form extends Vue {
  cards = Array(10)
    .fill("")
    .map((value, index) => ({ index, value }));
  rotation = { value: "" };
  isSubitting = false;

  async submit() {
    if (!this.isSubitting) {
      this.isSubitting = true;
      const hash = await this.$store.dispatch("submitAction", this);
      if (hash) {
        this.$router.push({ name: "Pack", params: { hash } });
      } else {
        this.isSubitting = false;
      }
    }
  }
}
export default Form;
