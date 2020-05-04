<template>
  <div id="app">
    <div class="container">
      <router-view/>
      <div class="copy">
        <router-link :to="{name:'Home'}">
        Boomideas.pro
        </router-link>
      </div>
    </div>
  </div>
</template>

<style lang="scss">

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  padding-bottom: 20px;
  background-image: url('assets/images/background.png');
  background-size: cover;

  .copy{
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    text-align: center;
    a{
      color: #333;
      text-decoration: none;
    }
  }
}



</style>
