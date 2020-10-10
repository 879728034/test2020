<template>
  <div>
    tabchange.vue
    <div>
      <span v-for="(tab,index) in tabdata.content"
       :key="index" 
       @click="tabchange(index)" 
       :class="{'on':index==tabdata.showIndex}" >
       {{tab[0]}}</span>
    </div>
    <div class="con">
      <div v-for="(tab,index) in tabdata.content" 
      :class=" index==tabdata.showIndex?'on':''"
      :key="index">
      {{tab[1]}}</div>
    </div>
  </div>
</template>
<script>
export default {
  props: [
    'tabdata'
  ],
  methods: {
    tabchange(index){
      this.tabdata.showIndex = index
    }
  },
  mounted(){
    console.log(this.tabdata.content)
  }
};
</script>
<style scoped lang="">
span {
  border: 1px solid red;
  display: inline-block;

}
span.on{ background:#ccc;}
.con {
  border: 1px solid blue;
  display: inlnine-block;
}
.con div {
  border: 1px solid green;
  display: none;
}
.con div.on{ display: block;}
</style>