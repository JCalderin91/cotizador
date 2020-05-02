<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  max-width: 1080px;
  margin: 0 auto;
}

.form-group{
  margin-top: 15px;
  margin-bottom: 10px;
  label{
    display: block;
    width: 100%;
    margin-bottom: 3px;
    text-align: left !important;
  }
  .form-control{
    width: 100%;
    border: 1px solid rgb(211, 211, 211);
    padding: 10px;
    border-radius: 5px;
  }
}
.btn{
  margin: 0 10px;
  border: none;
  padding: 10px 20px;
  border-radius: 3px;
  cursor: pointer;
}


</style>
