<template>
  <div class="home text-center py-5 py-md-0">
    <div class="image-contenedor">
      <img class="image" alt="logo" width="400" src="../assets/logo-black.png">
    </div>
    <h1 class="title">¿Cuánto cuesta crear tu página o sitio web?</h1>
    <p class="subTitle">Calcula el coste para crear tu página web de manera sencilla. Obtén un presupuesto aproximado para la creación de tu sitio web.</p>
    <div class="action">
      <router-link tag="button" class="button" :to="{name:'Website'}">Sitio web</router-link>
      <router-link tag="button" class="button" :to="{name:'Design'}">Diseño gráfico</router-link>
      <router-link tag="button" class="button" :to="{name:'Marketing'}">Marketing digital</router-link>
    </div>
    
  </div>
</template>

<script>

export default {
  name: 'Home',
}
</script>

<style lang="scss" scope>
  .home{
    .image-contenedor{
      width: 100%;
      .image{
        width: 400px;
        max-width: 85%;
      }
    }
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    .title{
      font-weight: bold;
      font-size: 3rem;
      color: #00cccc;
    }
    .subTitle{
      font-size: 1.1rem;
    }
    .action{
      margin-top: 2rem;
      .button{
        display: inline-block;
        padding: 20px 25px;
        border: none;
        color: white;
        font-weight: bold;
        font-size: 1.5rem;
        transition: all .5s ease-in-out;
        margin: 3px;
        cursor: pointer;
        background: linear-gradient(#00cccc, #00aaaa);
        &:hover{
          background: linear-gradient(#00aaaa, #00aaaa);
        }
      }
    }
  }
</style>