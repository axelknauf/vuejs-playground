<template>
  <div class="something">
    <h3>Random: {{localStateRandomNumber}} - Message: {{ messageAsFunction }}</h3>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "ShowSomething",
  props: {},
  computed: {
    localStateRandomNumber() {
      return 4; // computed by fair dice roll
    },
    ...mapState({
      messageAsFunction: state => state.message
    })
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
</style>
