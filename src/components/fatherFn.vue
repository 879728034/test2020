<template>
  <div>
    这里是 fatherFn
  </div>
</template>
<script>
export default {
  methods: {
    alertMess(str){
      alert("这里是fatherFn.vue里的方法\n内容如下：\n"+str)
    }
  }
}
</script>