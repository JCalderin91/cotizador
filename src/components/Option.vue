<template>
  <div class="option" @click="choice(option)">
    <img alt="Vue logo" class="imagen" :src="getImgUrl(option.src)">
    <br>
    <span class="text">{{option.text}}</span>
  </div>
</template>

<script>
export default {
  name: 'option',
  props: {
    option: {
      type: Object,
      required: true
    }
  },
  methods: {
    choice(option){
      this.$emit('choice', option)
    },
    getImgUrl(pic) {
        return require('../assets/images/'+pic)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.option{
  border-radius: 5px;
  padding: 15px;
  transition:  all .2s ease-in-out;
  border: 1px solid transparent;
  text-align: center;
  cursor: pointer;
  .imagen{
    width: 100%;
  }
  .text{
    margin-top: 10px;
    font-weight: bold;
  }
  &:hover{
    transform: translateY(-15px);
    border: 1px solid #00cccc69;
    background-color: #00cccc21;
  }
}
</style>
