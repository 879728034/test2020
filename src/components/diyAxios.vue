<template>
  <div style="border:10px solid red; padding:40px;">
    <div>  国家：{{adds.country}}<button @click='getDatas("country")' v-if='!adds.country'>加载内容</button></div>
    <div v-if='adds.country'>城市：{{adds.city}}<button @click='getDatas("city")' v-if='!adds.city'>加载内容</button> </div>
    <div v-if='adds.city'>详细地址：{{adds.street}}<button @click='getDatas("street")' v-if='!adds.street'>加载内容</button> </div>
    
    </div>
</template>
<script>
import axios from "axios";
import {getAxios} from '../api/http.js' ;//导入axios实例文件中方法

export default {
  data() {
    return {
      adds: {
        country:'',
        city:'',
        street:'',
      }
    };
  },
  mounted() {
    
  },
  methods: {
    getDatas(str){
      getAxios('../../static/data.json')
      .then( response => {
        this.adds[str] = response.address[str]
        console.log('response', this.adds[str])
      })
      .catch( response => {
        console.error('error', error)
      })
    }

  },
};
</script>