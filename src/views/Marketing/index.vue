<template>
  <div class="calcular">
    <div class="top-bar">
      <span class="backBtn" v-if="section>0" @click="back()">Anterior</span>
      <span class="step">{{section+1}}/{{sections.length}}</span>
      <span v-if="section!=0">{{historical[section-1].toFixed(2)}} $</span>
    </div>
    <div class="body">
      <h1 class="question text-center">{{sections[section].title}}</h1>
      <div v-if="section!=5" class="options row">
        <Option multiple :active="search(option)" class="col-md-3" @choice="choice($event)" :option="option" v-for="(option, index) in sections[section].options" :key="index" />
      </div>
      <div v-else class="row">
        <div class="form-group col-md-4 offset-md-4">
          <input type="text" class="form-control" v-model="presupuesto" placeholder="Indique su presupuesto a invertir">
        </div>
      </div>

      <div class="card-actions text-center">
        <button @click="next()" v-if="section==0 || section==5" class="btn btn-success" :class="{'disabled': !letsGo}">Continuar</button>
      </div>
    </div>
  </div>
</template>


<script>
import Option from '@/components/Option';
import sections from './sections'
export default {
  components: {Option},
  data: () => ({
    cost: 0,
    historical: [],
    socialNetworks: [],
    section: 0,
    presupuesto: 0,
    sections
  }),
  methods: {
    choice(option){
      if(this.section == 0){        
        if(this.search(option)) this.socialNetworks.push(option)
        else this.socialNetworks = this.socialNetworks.filter( sn =>  sn.id != option.id  )
      }else{
        if(this.section == 4){
          if(option.value == 0){
            this.$router.push({name:'Resultado', params: {cost: this.historical[this.section-1]}})
          }else{
            this.section++
            this.historical.push(this.historical[this.historical.length-1])
          }
        }else{
          if(this.sections.length > this.section+1){   
            this.cost += option.value * this.socialNetworks.length
            this.historical.push(this.cost)
            this.section++
          }else{
            this.cost += option.value * this.socialNetworks.length
            this.historical.push(this.cost)
            this.$router.push({name:'Resultado', params: {cost: this.historical[this.section]}})
          }
        }
      }
    },
    next(){
      if(this.letsGo){
        if(this.section==0){
          this.cost = this.mont
          this.historical.push(this.cost)
          this.section++
        }else{
          this.cost += this.presupuesto * 0.25
          this.historical.push(this.cost)
          this.$router.push({name:'Resultado', params: {cost: this.historical[this.section]}})
        }
      } 
    },
    back(){
      this.historical.pop()
      this.cost = this.historical[this.historical.length-1]
      this.section--
    },
    search(option){
      return typeof this.socialNetworks.find(sn =>  sn.id == option.id) !== 'undefined' ? false : true
    }
  },
  computed: {
    letsGo(){
      return this.socialNetworks.length > 0 ? true : false
    },
    mont(){
      return this.socialNetworks.reduce( (a,b) => a + b.value, 0 )
    }
  }
}
</script>

<style lang="scss" scope>
.calcular{
  .top-bar{
    display: flex;
    justify-content: space-around;
    align-items: flex-end;
    height: 60px;
    font-weight: bold;
    .step{
      font-size: 1.2rem;
    }
    .backBtn{
      cursor: pointer;
    }
  }
  .body{
    min-height: calc(100vh - 60px);
    display: flex;
    flex-direction: column;
    justify-content: center;
    .question{
      margin-bottom: 3rem;
      color: #00cccc;
    }
    .options{
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
    }
  }
}
</style>