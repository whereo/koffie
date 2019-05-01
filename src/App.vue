<template>
  <div id="app">
    <nav>
      <router-link to="/">trackmycoffee</router-link>
      <router-link to="/add">Add</router-link>
    </nav>
    <router-view/>
    <div class="about">
      <a href="https://github.com/whereo/trackmycoffee">Crafted</a>&nbsp;with ❤ in Ulm
    </div>
  </div>
</template>

<style lang="sass">
#app
  display: flex
  flex-direction: column
  align-items: center
  width: 100%
  height: 100%

nav
  display: flex
  justify-content: space-between
  align-items: center
  width: 100%
  height: 60px
  padding: 20px 30px

  a 
    font-weight: bold

    &.router-link-exact-active 
      color: #866e61

.about
  display: flex
  justify-content: flex-end
  align-items: center
  width: 100%
  height: 60px
  padding: 20px 30px
  font-size: 12px
  color: #866e61
</style>
