<template>
  <div class="home">
    <p>¡Bien! ¡Hemos terminado!</p>
    <h1>El coste estimado de tu web es</h1>
    <h1 class="cost">{{cost}} $</h1>
    <h2>Cuéntanos que necesitas para que podamos entender tu proyecto</h2>
    <router-link to="/calcular">Calcular coste</router-link>
  </div>
</template>

<script>

export default {
  name: 'Home',
  data: () => ({
    cost: 0
  }),
  beforeMount(){
    if(this.$route.params.cost){
      this.cost = this.$route.params.cost.toFixed(2)
    }else{
      this.$router.push({name:'Home'})
    }
  }
}
</script>

<style lang="scss" scope>
  .home{
    .cost{
      font-size: 3.2rem;
      font-weight: bold;
      color: #00cccc;
    }
  }
</style>