<template>
  <div class="home">
    <p>¡Bien! ¡Hemos terminado!</p>
    <h1>El coste estimado de tu web es</h1>
    <h1 class="cost">{{cost}} $</h1>
    <div>
      <router-link class="recalcular" :to="{name:'Calcular'}">Volver a calcular</router-link>
    </div>
    <h3>Cuéntanos que necesitas para que podamos entender tu proyecto</h3>

    <h3 class="message">
      <span v-for="(item, index) in history" :key="index">{{item.msg}}</span> <span class="cursor">|</span>
    </h3>
    <div v-if="history.length<2" class="formulario">
      <h3>{{options[step].title}}</h3>
      <button class="btn boton" @click="choice(option)" v-for="(option, index) in options[step].options" :key="index">{{option.text}}</button>
    </div>

    <div v-else class="formulario">
      <h4>Incluye ahora cualquier información adicional que tengas</h4>
      <div class="form-group">
        <label for="">Nombre del proyecto</label>
        <input class="form-control" type="text">
      </div>
      <div class="form-group">
        <label for="">Funcionalidades y especificaciones técnicas</label>
        <textarea class="form-control" name="" id="" cols="3"></textarea>
      </div>
      <div class="actions">
        <button class="btn continuar">Continuar</button>
      </div>
    </div>

    <a href="#" class="back" v-if="history.length>0" @click="back()">Volver</a>
  </div>
</template>

<script>
import options from "@/assets/options"
export default {
  name: 'Home',
  data: () => ({
    cost: 0,
    step: 0,
    history: [],
    options
  }),
  beforeMount(){
    if(this.$route.params.cost){
      this.cost = this.$route.params.cost.toFixed(2)
    }else{
      this.$router.push({name:'Home'})
    }
  },
  methods: {
    choice(option){
      this.history.push(option)
      this.step++     
    },
    back(){
      this.history.pop()
      if(this.step>0) this.step--
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
    .message{
      padding: 15px;
      border: 1px solid #ccc;
      border-radius: 5px;
    }
    .back{
      margin-top: 20px;
      text-decoration: none;
      color: black;
    }
    .boton{
      background-color: #00cccc;
      transition: all .3s ease-in-out;
      &:hover{
        transform: translateY(-4px);
      }
    }
    .cursor{
      animation-name: pulse;
      animation-iteration-count: infinite;
      animation-timing-function: ease-in-out;
      animation-duration: 1s;

    }
    .formulario{
      max-width: 500px;
      margin: 0 auto;
    }
    .actions{
      .continuar{
        background-color: forestgreen;
        color: white;
      }
    }
    .recalcular{
      text-decoration: none;
      color: black;
      display: inline-block;
      &:hover{
        color: #00cccc;
      }

    }
  }
  @keyframes pulse {
    0%{
      opacity: 1;
    }
    100%{
      opacity: 0;
    }
  }
</style>