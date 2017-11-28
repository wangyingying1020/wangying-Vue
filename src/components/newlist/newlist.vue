<template>
  <div  class="newlist">
      <router-link class="newlistInfo" v-for="item in newlist" :key="item.id" :to="'/home/newlist/newlistinfo/'+item.id" tag="div">
          <img :src="item.img_url" alt="">
          <div>
              <h1 class="title">{{item.title}}</h1>
              <p>
                  <span>发表时间：{{item.add_time}}</span>
                  <span>点击：{{item.click}}次</span>
              </p>
          </div>
      </router-link>
      
  </div>
</template>
<script>
import { Toast } from 'mint-ui';
export default{
    data(){
        return{
            newlist:[]
        }
    },
    created(){
        this.getnewlist();
    },
    methods:{
        getnewlist(){
            this.$http.get("api/getnewslist").then((rep)=>{
                console.log(rep);
                if(rep.body.status===0){
                    this.newlist=rep.body.message;
                }else{
                    Toast("新闻列表数据获取失败");
                }
            })
        }
    }
}
    
</script>
<style lang="scss" scoped>
.newlist{
    .newlistInfo{
        display: flex;
        justify-content: space-between;
        padding: 5px;
        img{
            width: 60px;
            height: 60px;
        }
        div{
            padding-left: 10px;
            h1{
                font-size: 14px;
            }
            p{
                display: flex;
                justify-content: space-between;
                padding: 3px;
                span{
                    font-size:13px;
                    color:darkgrey;
                }
            }
        }
    }
}
</style>

