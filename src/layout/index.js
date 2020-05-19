import Vue from "vue";
import Component from "vue-class-component";
import Header from "@/components/Header.vue";

@Component({
  components: {
    Header
  }
})
class CardsPaybook extends Vue {
  get text() {
    return this.$route.meta.header;
  }
}
export default CardsPaybook;
