<template>
  <div class="calcular">
    <div class="top-bar">
      <span class="backBtn" v-if="section>0" @click="back()">Anterior</span>
      <span>{{section+1}}/{{sections.length}}</span>
      <span v-if="section!=0">{{historical[section-1]}} $</span>
    </div>
    <div class="body">
      <h1 class="question">{{sections[section].title}}</h1>
      <div class="options">
        <Option @choice="choice($event)" :option="option" v-for="(option, index) in sections[section].options" :key="index" />
      </div>
    </div>
  </div>
</template>


<script>
import Option from '@/components/Option';
import sections from '@/assets/sections'
export default {
  components: {Option},
  data: () => ({
    cost: 0,
    historical: [],
    section: 0,
    sections
  }),
  methods: {
    choice(option){
      if(this.sections.length > this.section+1){
        if(this.section == 0){
          this.cost = option.value
        }else{
          this.cost *= option.value
        }
        this.section++
        this.historical.push(this.cost)
      }else{
        this.cost *= option.value
        this.historical.push(this.cost)
        this.$router.push({name:'Resultado', params: {cost: this.historical[this.section]}})
      }
    },
    back(){
      this.historical.pop()
      this.section--
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
    .backBtn{
      cursor: pointer;
    }
  }
  .body{
    height: calc(100vh - 60px);
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
    }
  }
}
</style>