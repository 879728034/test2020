<template>
  <div>
    这里是tours.vue
    <hr />
    <tab-change :tabdata="tab"></tab-change>
    <tab-change :tabdata="tabother"></tab-change>
    <hr>
    <father-fn ref="alertchildFn"></father-fn>
    <button @click="alertchildfunction">调用子组件的方法</button>
    <br />
    <br />
    <br />
    <br />
    <br />
    这里是$store的数据：<br>
    Old: {{$store.state.user.old}}<br>
    Count:{{$store.state.count}}
    <br />
    <button @click='setOld'>设置Old为10</button>
    <button @click='addFn'>count+1</button>
    <hr>
    <span>
      message: {{message.aihao[1]}} <br>
      name: {{message.name}} <br>
      id: {{message.id}} <br>
      aihao: <b v-for="(item, index) in message.aihao" :key="index">{{item}}--</b><br>
      <button @click="changeAihao">修改爱好</button>
    </span>
    <hr>
    <div>
      这里是过滤器后的图片地址效果：<br>
      原地址：{{imageurl}}<br>
      过滤后：{{imageurl | imageUrl}} <br>
      加域名：{{imageurl | imageUrl | httpImgUrl}} <br>
      <img :src="imageurl | imageUrl | httpImgUrl" alt="">
    </div>
  </div>
</template>
<script>
import tabChange from "../components/tabChange";
import fatherFn from "../components/fatherFn"
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
        showIndex: 3,
        content: [
          ["标题一11", "内容一"],
          ["标题二22", "内容二测试内容"],
          ["标题三33", "内容三"],
          ["标题四44", "内容四"],
          ["标题五55", "内容五"],
        ],
      },
      alertmessage : "这里是弹出消息的内容",
      message: {
        name: 'luo',
        id: 3,
        aihao: ['游泳','羽毛球','足球']
      },
      imageurl: '/file/group-tours/2018-03-30/5f4e494a79a81d6804e1e37cdee02493.jpg'
    };
  },
  methods: {
    setOld(){
      this.$store.commit('addOld', {
            name: 'old',
            val: 10
          });
    },
    addFn(){
      this.$store.commit('add', {
            val: 1
          });
    },
    alertchildfunction(){
      this.$refs.alertchildFn.alertMess(this.alertmessage)
    },
    changeAihao(){
      this.message.aihao[1] = ['篮球','乒乓球']
    }
  },
  mounted(){
      
  },
  components: {
    tabChange,
    fatherFn
  },
};
</script>