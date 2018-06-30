<template>
  <div class="home">
    <show-something />
    <b-button v-on:click="onButtonClick">Change Message</b-button>
  </div>
</template>

<script>
import ShowSomething from "@/components/ShowSomething.vue";
import { CHANGE_MESSAGE } from "@/mutation-types.js";

export default {
  name: "home",
  components: {
    ShowSomething
  },
  methods: {
    onButtonClick() {
      console.log("Button clicked!");
      this.$store.commit(CHANGE_MESSAGE, new Date());
    }
  }
};
</script>
