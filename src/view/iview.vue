<template>
  <div class="layout">
    <Layout>
      <Header>
        <Menu mode="horizontal" theme="dark" active-name="1">
          <div class="layout-logo"></div>
          <div class="layout-nav">
            <MenuItem name="1">
              <Icon type="ios-navigate"></Icon>Item 1
            </MenuItem>
            <MenuItem name="2">
              <Icon type="ios-keypad"></Icon>Item 2
            </MenuItem>
            <MenuItem name="3">
              <Icon type="ios-analytics"></Icon>Item 3
            </MenuItem>
            <MenuItem name="4"> <Icon type="ios-paper"></Icon>Item 4 </MenuItem>
          </div>
        </Menu>
      </Header>
      <Layout>
        <Sider hide-trigger :style="{ background: '#fff' }">
          <Menu
            active-name="1-2"
            theme="light"
            width="auto"
            :open-names="['1']"
          >
            <Submenu name="1">
              <template slot="title">
                <Icon type="ios-navigate"></Icon>Item 1
              </template>
              <MenuItem name="1-1">Option 1</MenuItem>
              <MenuItem name="1-2">Option 2</MenuItem>
              <MenuItem name="1-3">Option 3</MenuItem>
            </Submenu>
            <Submenu name="2">
              <template slot="title">
                <Icon type="ios-keypad"></Icon>Item 2
              </template>
              <MenuItem name="2-1">Option 1</MenuItem>
              <MenuItem name="2-2">Option 2</MenuItem>
            </Submenu>
            <Submenu name="3">
              <template slot="title">
                <Icon type="ios-analytics"></Icon>Item 3
              </template>
              <MenuItem name="3-1">Option 1</MenuItem>
              <MenuItem name="3-2">Option 2</MenuItem>
            </Submenu>
          </Menu>
        </Sider>
        <Layout :style="{ padding: '0 24px 24px' }">
          <Breadcrumb :style="{ margin: '24px 0' }">
            <BreadcrumbItem>Home</BreadcrumbItem>
            <BreadcrumbItem>Components</BreadcrumbItem>
            <BreadcrumbItem>Layout</BreadcrumbItem>
          </Breadcrumb>
          <Content
            :style="{ padding: '24px', minHeight: '280px', background: '#fff' }"
          >
            <Button @click="value1 = true" type="primary">Open</Button>
            <Drawer title="Basic Drawer" :closable="false" v-model="value1">
              <p>Some contents...</p>
              <p>Some contents...</p>
              <p>Some contents...</p>
              <p>Some contents...</p>
              <p>Some contents...</p>
              <p>Some contents...</p>
              <p>Some contents...</p>
              <p>Some contents...</p>
              <p>Some contents...</p>
              <p>Some contents...</p>
              <p>Some contents...</p>
              <p>Some contents...</p>
              <p>Some contents...</p>
              <p>Some contents...</p>
              <p>Some contents...</p>
              <p>Some contents...</p>
              <p>Some contents...</p>
              <p>Some contents...</p>
              <p>Some contents...</p>
              <p>Some contents...</p>
              <p>Some contents...</p>
              <p>Some contents...</p>
              <p>Some contents...</p>
              <p>Some contents...</p>
              <p>Some contents...</p>
              <p>Some contents...</p>
              <p>Some contents...</p>
              <p>Some contents...</p>
              <p>Some contents...</p>
              <p>Some contents...</p>
              <p>Some contents...</p>
              <p>Some contents...</p>
              <p>Some contents...</p>
              <p>Some contents...</p>
              <p>Some contents...</p>
              <p>Some contents...</p>
              <p>Some contents...</p>
              <p>Some contents...</p>
              <p>Some contents...</p>
              <p>Some contents...</p>
              <p>Some contents...</p>
              <p>Some contents...</p>
              <p>Some contents...</p>
              <p>Some contents...</p>
              <p>Some contents...</p>
              <p>Some contents...</p>
              <p>Some contents...</p>
              <p>Some contents...</p>
              <p>Some contents...</p>
              <p>Some contents...</p>
              <p>Some contents...</p>
              <p>Some contents...</p>
              <p>Some contents...</p>
              <p>Some contents...</p>
              <p>Some contents...</p>
              <p>Some contents...</p>
              <p>Some contents...</p>
              <p>Some contents...</p>
              <p>Some contents...</p>
              <p>Some contents...</p>
              <p>Some contents...</p>
              <p>Some contents...</p>
              <p>Some contents...</p>
              <p>Some contents...</p>
              <p>Some contents...</p>
              <p>Some contents...</p>
              <p>Some contents...</p>
              <p>Some contents...</p>
              <p>Some contents...</p>
              <p>Some contents...</p>
              <p>Some contents...</p>
              <p>Some contents...</p>
              <p>Some contents...</p>
              <p>Some contents...</p>
              <p>Some contents...</p>
              <p>Some contents...</p>
              <p>Some contents...</p>
              <p>Some contents...</p>
              <p>Some contents...</p>
              <p>Some contents...</p>
              <p>Some contents...</p>
              <p>Some contents...</p>
              <p>Some contents...</p>
              <p>Some contents...</p>
              <p>Some contents...</p>
              <p>Some contents...</p>
              <p>Some contents...</p>
              <p>Some contents...</p>
              <p>Some contents...</p>
              <p>Some contents...</p>
              <p>Some contents...</p>
              <p>Some contents...</p>
              <p>Some contents...</p>
              <p>Some contents...</p>
              <p>Some contents...</p>
              <p>Some contents...</p>
              <p>Some contents...</p>
              <p>Some contents...</p>
              <p>Some contents...</p>
              <p>Some contents...</p>
              <p>Some contents...</p>
              <p>Some contents...</p>
              <p>Some contents...</p>
              <p>Some contents...</p>
              <p>Some contents...</p>
              <p>Some contents...</p>
              <p>Some contents...</p>
              <p>Some contents...</p>
              <p>Some contents...</p>
              <p>Some contents...</p>
              <p>Some contents...</p>
              <p>Some contents...</p>
              <p>Some contents...</p>
              <p>Some contents...</p>
              <p>Some contents...</p>
              <p>Some contents...</p>
              <p>Some contents...</p>
              <p>Some contents...</p>
              <p>Some contents...</p>
              <p>Some contents...</p>
              <p>Some contents...</p>
              <p>Some contents...</p>
              <p>Some contents...</p>
              <p>Some contents...</p>
              <p>Some contents...</p>
              <p>Some contents...</p>
              <p>Some contents...</p>
              <p>Some contents...</p>
              <p>Some contents...</p>
              <p>Some contents...</p>
              <p>Some contents...</p>
              <p>Some contents...</p>
              <p>Some contents...</p>
              <p>Some contents...</p>
              <p>Some contents...</p>
              <p>Some contents...</p>
              <p>Some contents...</p>
              <p>Some contents..222.</p>
            </Drawer>
            <Card>
              <p slot="title">
                <Icon type="ios-film-outline"></Icon>Classic film
              </p>
              <a href="#" slot="extra" @click.prevent="changeLimit">
                <Icon type="ios-loop-strong"></Icon>Change
              </a>
              <ul>
                <li v-for="(item, index) in randomMovieList" :key="index">
                  <a :href="item.url" target="_blank">{{ item.name }}</a>
                  <span>
                    <Icon type="ios-star" v-for="n in 4" :key="n"></Icon>
                    <Icon type="ios-star" v-if="item.rate >= 9.5"></Icon>
                    <Icon type="ios-star-half" v-else></Icon>
                    {{ item.rate }}
                  </span>
                </li>
              </ul>
            </Card>
            <Row>
              <Col
                :xs="{ span: 5, offset: 0 }"
                :lg="{ span: 6, offset: 0 }"
                class="box"
                >Col11111</Col
              >
              <Col
                :xs="{ span: 12, offset: 1 }"
                :lg="{ span: 10, offset: 1 }"
                class="box"
                >Col11111</Col
              >
              <Col
                :xs="{ span: 5, offset: 1 }"
                :lg="{ span: 6, offset: 1 }"
                class="box"
                >Col11111</Col
              >
              <Col
                :xs="{ span: 5, offset: 1 }"
                :lg="{ span: 6, offset: 2 }"
                class="box"
                >Col row</Col
              >
              <Col
                :xs="{ span: 11, offset: 1 }"
                :lg="{ span: 6, offset: 2 }"
                class="box"
                >Col11111</Col
              >
              <Col
                :xs="{ span: 5, offset: 1 }"
                :lg="{ span: 6, offset: 2 }"
                class="box"
                >Col11111</Col
              >
            </Row>
            <el-tree
              :data="data"
              :props="defaultProps"
              @node-click="handleNodeClick"
            ></el-tree>
          </Content>
        </Layout>
      </Layout>
    </Layout>
  </div>
</template>
<script>
export default {
  data() {
    return {
      value1: false,
      movieList: [
        {
          name: "The Shawshank Redemption",
          url: "https://movie.douban.com/subject/1292052/",
          rate: 9.6,
        },
        {
          name: "Leon:The Professional",
          url: "https://movie.douban.com/subject/1295644/",
          rate: 9.4,
        },
        {
          name: "Farewell to My Concubine",
          url: "https://movie.douban.com/subject/1291546/",
          rate: 9.5,
        },
        {
          name: "Forrest Gump",
          url: "https://movie.douban.com/subject/1292720/",
          rate: 9.4,
        },
        {
          name: "Life Is Beautiful",
          url: "https://movie.douban.com/subject/1292063/",
          rate: 9.5,
        },
        {
          name: "Spirited Away",
          url: "https://movie.douban.com/subject/1291561/",
          rate: 9.2,
        },
        {
          name: "Schindler's List",
          url: "https://movie.douban.com/subject/1295124/",
          rate: 9.4,
        },
        {
          name: "The Legend of 1900",
          url: "https://movie.douban.com/subject/1292001/",
          rate: 9.2,
        },
        {
          name: "WALL·E",
          url: "https://movie.douban.com/subject/2131459/",
          rate: 9.3,
        },
        {
          name: "Inception",
          url: "https://movie.douban.com/subject/3541415/",
          rate: 9.2,
        },
      ],
      randomMovieList: [],
      data: [
        {
          label: "一级 1",
          children: [
            {
              label: "二级 1-1",
              children: [
                {
                  label: "三级 1-1-1",
                  url:'/1-1-1.html'
                },
              ],
            },
          ],
        },
        {
          label: "一级 2",
          children: [
            {
              label: "二级 2-1",
              children: [
                {
                  label: "三级 2-1-1",
                  url: '/2-1-1.html'
                },
              ],
            },
            {
              label: "二级 2-2",
              children: [
                {
                  label: "三级 2-2-1",
                },
              ],
            },
          ],
        },
        {
          label: "一级 3",
          children: [
            {
              label: "二级 3-1",
              children: [
                {
                  label: "三级 3-1-1",
                },
              ],
            },
            {
              label: "二级 3-2",
              children: [
                {
                  label: "三级 3-2-1",
                },
              ],
            },
          ],
        },
      ],
      defaultProps: {
        children: "children",
        label: "label",
      },
    };
  },
  methods: {
    changeLimit() {
      function getArrayItems(arr, num) {
        const temp_array = [];
        for (let index in arr) {
          temp_array.push(arr[index]);
        }
        const return_array = [];
        for (let i = 0; i < num; i++) {
          if (temp_array.length > 0) {
            const arrIndex = Math.floor(Math.random() * temp_array.length);
            return_array[i] = temp_array[arrIndex];
            temp_array.splice(arrIndex, 1);
          } else {
            break;
          }
        }
        return return_array;
      }
      this.randomMovieList = getArrayItems(this.movieList, 5);
    },
    handleNodeClick(data) {
      if(data.url){
        console.log('url:', data.url)
        this.$router.push(data.url)
      }
      console.log(data);
    },
  },
  mounted() {
    this.changeLimit();
  },
};
</script>

<style scoped>
.box {
  background: #ccc;
  border: 10px solid red;
}
.layout {
  border: 1px solid #d7dde4;
  background: #f5f7f9;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
}
.layout-logo {
  width: 100px;
  height: 30px;
  background: #5b6270;
  border-radius: 3px;
  float: left;
  position: relative;
  top: 15px;
  left: 20px;
}
.layout-nav {
  width: 420px;
  margin: 0 auto;
  margin-right: 20px;
}
</style>