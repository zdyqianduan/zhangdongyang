<template>
  <div id="app">
    <el-row>
      <el-menu
        :default-active="activeIndex2"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b">
        <el-menu-item index="1">网站首页</el-menu-item>
        <el-submenu index="2">
          <template slot="title">织带产品</template>
          <el-menu-item index="2-1">松紧带</el-menu-item>
          <el-menu-item index="2-2">提花带</el-menu-item>
          <el-menu-item index="2-3">定制织带</el-menu-item>
          <el-submenu index="2-4">
            <template slot="title">工艺介绍</template>
            <el-menu-item index="2-4-1">压花</el-menu-item>
            <el-menu-item index="2-4-2">撒金</el-menu-item>
            <el-menu-item index="2-4-3">烫钻</el-menu-item>
          </el-submenu>
        </el-submenu>
        <el-menu-item index="3" >联系我们</el-menu-item>
        <el-menu-item index="4">{{$t('m.lang')}}</el-menu-item>
      </el-menu>
    </el-row>
    <el-row>
      <el-carousel indicator-position="outside">
        <el-carousel-item v-for="item in imgList" :key="item.id">
          <img  :src="item.idView" class="image">
        </el-carousel-item>
      </el-carousel>
    </el-row>
    <el-row>
      <el-carousel :interval="4000" type="card" height="200px">
        <el-carousel-item v-for="item in imgList" :key="item.id">
          <img  :src="item.idView" class="image">
        </el-carousel-item>
      </el-carousel>
    </el-row>
      

     
    <el-row >
      
      <el-col :span="6" :offset="2">
        <el-descriptions title="联系我们" :column="1">
            <el-descriptions-item label="联系人">{{$t('m.manager')}}</el-descriptions-item>
            <el-descriptions-item label="手机号">13535006750</el-descriptions-item>
            <el-descriptions-item label="批发地址">广州市国际轻纺城负一层5街UG1565</el-descriptions-item>
        
            <el-descriptions-item label="工厂地址">东莞市深巷工业区</el-descriptions-item>
        </el-descriptions>
      </el-col>
      <el-col :span="6">
        <div class="uuu">
          <div class="son">
            <img src="@/assets/img/qrCode.jpg" style="width: 200px; height:200px">
          </div>
          
        </div>
        
      </el-col>
      <el-col :span="6">
        
        <div class="uuu">
          <div style="height: 15px;"></div>
          <div class="son">

            <img src="@/assets/img/qrCode3.jpg" style="width: 190px; height:170px" >
          </div>
        </div>
      </el-col>
    </el-row>

      
      
      
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import navMenu from './components/navMenu.vue';
// import imgUrl from "./assets/img/1.png"
export default {
  name: 'App',
  components: {
    // HelloWorld
    // navMenu
    // imgUrl
  },
  data() {
    return {
      activeIndex2: '1',
      imgList: [
        {id:0,idView:require("@/assets/img/1.jpg")},
        {id:1,idView:require("@/assets/img/2.png")},
        {id:2,idView:require("@/assets/img/3.jpg")},
        {id:3,idView:require("@/assets/img/4.jpg")},
        {id:4,idView:require("@/assets/img/5.jpg")},
        {id:5,idView:require("@/assets/img/6.jpg")},
      ],
      screenWidth :0,

    }
  },
  methods: {
    handleSelect(key, keyPath) {
      if(key == 4 &&  this.$i18n.locale == 'zh'){
        console.log(111)
        this.$i18n.locale = 'en'
      }else{
        console.log(222)
        this.$i18n.locale = 'zh'
      }
        

      console.log(key, keyPath);
      }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  
}

uuu{
  display: flex;
  justify-content: center;
  align-items: center;
}

/* .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  } */
  .image{
    object-fit: scale-down;
    width: 100%;
    height: 100%;
  }
  .sb{
    background-color: green;
    width: 20px;
    height: 20px;
  }
</style>
