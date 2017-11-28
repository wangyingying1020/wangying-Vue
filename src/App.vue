<template>
  <div class="homeInfo">
    <!-- header区域 -->
    <mt-header fixed title="模拟京东"></mt-header>
    
     <!-- 挖一个坑 -->
	
			<transition>
				<router-view></router-view>
			</transition>
			 
	
   

  <!-- tab bar区域 -->

  <nav class="mui-bar mui-bar-tab">
			<router-link class="mui-tab-item" to="/home">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link class="mui-tab-item" to="/member">
				<span class="mui-icon mui-icon-contact"></span>
				<span class="mui-tab-label">会员</span>
			</router-link>
			<router-link class="mui-tab-item" to="/shopcar">
				<span class="mui-icon mui-icon-extra mui-icon-extra-cart"><span class="mui-badge">0</span></span>
				<span class="mui-tab-label">购物车</span>
			</router-link>
			<router-link class="mui-tab-item" to="/search">
				<span class="mui-icon mui-icon-gear"></span>
				<span class="mui-tab-label">设置</span>
			</router-link>
		</nav>


  </div>
</template>
<script>
  export default{
    data(){
      return{
        
      }
    },
		created(){
			//基本ajax的数据交互在这个位置
			// this.getHomeInfoImg()
		},
		methods:{
		
		}
  }
</script>
<style lang="scss" scoped>
	.homeInfo{
			overflow-x: hidden;
			padding-top: 40px;
	}
.v-enter {
	opacity: 0;
	transform: translateX(100%)
}
.v-leave-to{
	opacity: 0;
	transform: translateX(-100%);
	position: absolute;
}
.v-leave-active,.v-enter-active{
	
	transition: all 0.5s ease;
}
</style>
