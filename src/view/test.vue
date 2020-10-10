<template>
  <div>test.vue <br /><b>{{data}}</b></div>
</template>
<script>
import axios from "axios";
//axios.defaults.baseURL = '/api'  //关键代码
export default {
  data() {
    return {
      data: "0",
    };
  },
  mounted() {
    axios.get("/api/available.json").then((response) => {
      this.data = response
      console.log("response:", response);
    });
  },
};
</script>