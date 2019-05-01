<template>
  <div id="button">
    <div class="buttons has-addons">
      <b-button type="is-primary" class="edit-button" @click="edit">edit</b-button>
      <b-button type="is-primary" @click="track">track</b-button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    edit() {
      this.$snackbar.open({
        message: `Lemme edit.`,
        type: "is-black",
        position: "is-top",
        actionText: null,
        duration: 2000
      });
    },
    track() {
      this.$snackbar.open({
        message: `This should definitely be tracked.`,
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
.edit-button
  border-right: 1px solid #000
</style>
