<template>
  <div>
    <el-container>
      <el-footer>Footer</el-footer>
    </el-container>这里2是login.vue
    <br />内容如下：
    <br />
    
    <ul>
      <li v-for=" (item, index) of data" :key="index">{{item.name}}--id:{{index}}--{{item.age}}--{{item.job}}</li>
    </ul>
    <br />
    <button @click="getInfo('2')">加载内容</button>2
    <el-container>
      <el-header>Header</el-header>
    </el-container>

    <el-container>
      <el-aside width="200px">Aside</el-aside>
      <el-main>
        <el-row>
          <el-col :span="24">
            <div class="grid-content">
              <div>
                <el-input placeholder="请输入内容" v-model="logindata.username">
                  <template slot="prepend" class="inputPrep">帐号</template>
                </el-input>
                <el-input placeholder="请输入密码" v-model="logindata.password" show-password>
                  <template slot="prepend" class="inputPrep">密码箱</template>
                </el-input>
              </div>
            </div>
          </el-col>

          <el-col :span="24">
            <el-button type="success">提交</el-button>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="8" v-for="(o, index) in 4" :key="o" :offset="index%2==0 ? 0 : 1">
            <el-card :body-style="{ padding: '0px' }">
              <img
                src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
                class="image"
              />
              <div style="padding: 14px;">
                <span>好吃的汉堡</span>
                <div class="bottom clearfix">
                  <el-button type="text" class="button">操作按钮</el-button>
                </div>
              </div>
            </el-card>
          </el-col>
        </el-row>
      </el-main>
    </el-container>
  </div>
</template>
<script>
import API from "../api/api.js";
export default {
  data() {
    return {
      data: "1111111",
      logindata: {
        username: "111",
        password: "222",
      },
    };
  },
  methods: {
    getInfo(num) {
      // this.axios.get('../../static/data.json')
      
      /*API.getUserInfoById()
        .then((result) => {
          console.log(result);
          this.data = result.data;
        })
        .catch((error) => {
          console.log(error);
        });*/
    },
  },
  mounted(){
      API.getUserList()
      .then((result) => {
          let data = result.data.rows
          console.table(data);
          this.data = data;
        })
        .catch((error) => {
          console.log(error);
        });
      /*this.axios.get('/user/list')
        .then((result) => {
          console.log(result);
          this.data = result.data;
        })
        .catch((error) => {
          console.log(error);
        });*/
  }
};
</script>
<style>
.el-input-group__prepend {
  width: 20%;
  min-width: 50px;
}
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
</style>