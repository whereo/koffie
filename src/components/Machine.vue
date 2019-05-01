<template>
  <div id="machine">
    <div
      class="card machine"
      v-for="machine in machines"
      :key="machine.id"
      @click="routeToMachine(machine)"
    >
      <div class="icon">ICON</div>
      <div class="name">{{ machine.name }} ({{ machine.id }})</div>
    </div>
  </div>
</template> 

<script>
export default {
  data() {
    return {
      // Static for now
      machines: [
        {
          id: 123,
          name: "My first machine"
        }
      ]
    };
  },
  methods: {
    routeToMachine(machine) {
      this.$snackbar.open({
        message: `Clicked on '${machine.name}'.`,
        type: "is-black",
        position: "is-top",
        actionText: null,
        duration: 2000
      });
    }
  }
};
</script>

<style lang="sass" scoped>
.machine
  margin-bottom: 40px
  padding: 20px
  flex-direction: column
  justify-content: center
  align-items: center
  cursor: pointer

  .icon
    margin-bottom: 15px
    border: 1px dashed
    width: 80px
    height: 80px

  .name
    color: #fff
    font-size: 11px
    font-weight: bold
    letter-spacing: 0.05rem
    text-transform: uppercase
</style>

