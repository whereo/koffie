<template>
  <div id="machine">
    <hooper :settings="hooperSettings" style="height: auto">
      <slide
        v-for="machine in machines"
        :key="machine.id"
        :index="machine.id"
        class="machine-container"
      >
        <div class="card machine" @click="routeToMachine(machine)">
          <div class="icon">ICON</div>
          <div class="name">{{ machine.name }} ({{ machine.id }})</div>
        </div>
      </slide>
      <slide class="machine-container">
        <div class="card machine" @click="routeToNew()">
          <div class="icon">ICON</div>
          <div class="name">Add a new machine</div>
        </div>
      </slide>
      <hooper-navigation slot="hooper-addons"></hooper-navigation>
    </hooper>
  </div>
</template>

<script>
import { Hooper, Slide, Navigation as HooperNavigation } from "hooper";
import "hooper/dist/hooper.css";

export default {
  components: {
    Hooper,
    Slide,
    HooperNavigation
  },
  data() {
    return {
      // Static for now
      machines: [
        {
          id: 123,
          name: "My first machine"
        },
        {
          id: 1,
          name: "Espresso machine"
        },
        {
          id: 666,
          name: "The bad Boy"
        }
      ],
      hooperSettings: {
        itemsToShow: 1,
        centerMode: true,
        initialSlide: 0,
        infiniteScroll: false
      }
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
    },
    routeToNew() {
      this.$router.push("/add");
    }
  }
};
</script>

<style lang="sass" scoped>
#machine
  width: 100%
  margin-bottom: 40px

.machine-container
  width: 100%
  display: flex
  justify-content: center
  align-items: center


.machine
  width: auto
  padding: 20px
  flex-direction: column
  justify-content: center
  align-items: center
  cursor: pointer
  border: 1px solid rgba(0, 0, 0, .2)

  .icon
    margin-bottom: 15px
    border: 1px dashed
    width: 180px
    height: 180px

  .name
    color: #fff
    font-size: 11px
    font-weight: bold
    letter-spacing: 0.05rem
    text-transform: uppercase
</style>
