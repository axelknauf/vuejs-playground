<template>
  <div class="home">
    <show-something />
    <b-button v-on:click="onButtonClick">Change Message</b-button>
  </div>
</template>

<script>
import ShowSomething from "@/components/ShowSomething.vue";
import { FETCH_NEW_PASSWORD } from "@/action-types.js";

export default {
  name: "home",
  components: {
    ShowSomething
  },
  methods: {
    onButtonClick() {
      console.log("Button clicked!");
      this.$store.dispatch(FETCH_NEW_PASSWORD);
    }
  }
};
</script>
