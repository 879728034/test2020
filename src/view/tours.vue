<template>
  <div>
    这里是tours.vue
    <hr />
    <tab-change :tabdata="tab"></tab-change>
    <tab-change :tabdata="tabother"></tab-change>
    <br />
    <br />
    <br />
    <br />
    <br />
    这里是$store的数据：{{$store.state.user.old}}
    <br />
    <button @click='addFn'>count + 1</button>
  </div>
</template>
<script>
import tabChange from "../components/tabChange";
export default {
  data() {
    return {
      count: 0,
      tab: {
        showIndex: 1,
        content: [
          ["标题一1", "内容一"],
          ["标题二2", "内容二测试内容"],
          ["标题三3", "内容三"],
          ["标题四4", "内容四"],
          ["标题五5", "内容五"],
        ],
      },
      tabother: {
        showIndex: 1,
        content: [
          ["标题一11", "内容一"],
          ["标题二22", "内容二测试内容"],
          ["标题三33", "内容三"],
          ["标题四44", "内容四"],
          ["标题五55", "内容五"],
        ],
      },
    };
  },
  methods: {
    addFn(){
      this.$store.commit('addOld', {
            name: 'old',
            val: 10
          });
    }
  },
  mounted(){
      
  },
  components: {
    tabChange,
  },
};
</script>