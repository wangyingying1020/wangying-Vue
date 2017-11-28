<template>
    <div class="home">
       <!--轮播图区域 -->
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="item in homeInfo" :key="item.url">
				<img :src="item.img" alt="">
      </mt-swipe-item>
    </mt-swipe>



     <!-- 六宫格区域 -->
    <ul class="mui-table-view mui-grid-view mui-grid-9">
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/newlist">
                <img src="../images/menu1.png" alt="">
                <div class="mui-media-body">新闻资讯</div></router-link></li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <img src="../images/menu2.png" alt="">
                <div class="mui-media-body">图片分享</div></a></li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <img src="../images/menu3.png" alt="">
                <div class="mui-media-body">商品购买</div></a></li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <img src="../images/menu4.png" alt="">
                <div class="mui-media-body">留言反馈</div></a></li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <img src="../images/menu5.png" alt="">
                <div class="mui-media-body">视屏专区</div></a></li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <img src="../images/menu6.png" alt="">
                <div class="mui-media-body">汪盈盈盈</div></a></li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <img src="../images/menu1.png" alt="">
                <div class="mui-media-body">汪盈盈盈</div></a></li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <img src="../images/menu1.png" alt="">
                <div class="mui-media-body">汪盈盈盈</div></a></li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <img src="../images/menu1.png" alt="">
                <div class="mui-media-body">汪盈盈盈</div></a></li>
    </ul>

    </div>
</template>
<script>
import { Toast } from 'mint-ui';
    export default{
        data(){
            return{
                homeInfo:[]
            }
        },
        created(){
            this.getHomeInfoImg();
        },
        methods:{
            //获取轮播图图片的方法
            	getHomeInfoImg(){
				this.$http.get("api/getlunbo").then((rep)=>{
					console.log(rep.body);
					if(rep.body.status===0){
						this.homeInfo=rep.body.message;
					}else{
						Toast('图片获取失败');
					}
				})
			}
        }
    }
</script>
<style lang="scss" scoped>
    	// 轮播图区域的样式
		  .mint-swipe{
            height: 300px;
            .mint-swipe-items-wrap{
                .mint-swipe-item{
                background: red;
                img{
                    width: 100%;
                    height: 100%;
                }
                }
            }
        }


         // 九宫格区域的样式
	 .mui-grid-view.mui-grid-9{
		 background: #ffffff;
		 padding-bottom: 50px;
		 .mui-table-view-cell{
			 border-bottom: none;
			 border-right:none;
			 a{
				 img{
					 width: 70px;
					//  height: 60px;
				 }
			 }
		 }
	 }
</style>
