<template>
  <div class="option" @click="choice(option)">
    <img alt="Vue logo" class="imagen" :src="option.src">
    <br>
    <span class="text">{{option.text}}</span>
  </div>
</template>

<script>
export default {
  props: {
    option: {
      type: Object,
      required: true
    }
  },
  methods: {
    choice(option){
      this.$emit('choice', option)
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
  margin: 0 10px;
  cursor: pointer;
  .imagen{
    width: 200px;
  }
  .text{
    font-weight: bold;
  }
  &:hover{
    transform: translateY(-15px);
    border: 1px solid #999;
    background-color: rgb(248, 248, 248);
  }
}
</style>
