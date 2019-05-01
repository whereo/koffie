<template>
  <div class="home">
    <Machine></Machine>
    <Button></Button>
  </div>
</template>

<script>
import Machine from "@/components/Machine.vue";
import Button from "@/components/Button.vue";

export default {
  name: "home",
  components: {
    Machine,
    Button
  }
};
</script>

<style lang="sass" scoped>
.home
  display: flex
  flex-direction: column
  align-items: center
  justify-content: center
  width: 100%
  flex: auto
</style>
