<template>
  <div class="newlistInfo">
      <!-- 新闻列表详情的标题 -->
      <div class="title">
        <h1>{{newlistInfo.title}}</h1>
        <p>
          <span>{{newlistInfo.add_time}}</span>
          <span>点击：{{newlistInfo.click}}次</span>
        </p>
        <hr>
      </div>
      <!-- 新闻列表文章详情 -->
      <div class="info" v-html="newlistInfo.content">
      </div>
      <!-- 评论详情页 -->
      <comment-box :id="$route.params.id"></comment-box>
  </div>
</template>
<script>
    //引入mint-ui的组件 弹框组件；
    import { Toast } from "mint-ui";
    //引入自己的私有组价；
    import comment from "../common/comment.vue";
    export default{
      data(){
        return{
          newlistInfo:{}
        }
      },
      created(){
        this.getNewListInfo()
      },
      methods:{
        getNewListInfo(){
          //先获取传过来的地址栏的Id
          let id = this.$route.params.id;
          // console.log(id);
          this.$http.get("api/getnew/"+id).then(res=>{
            // console.log(res.body)
            if(res.body.status==0){
              this.newlistInfo=res.body.message[0];
              // console.log(this.newlistInfo)
            }else{
              Toast("获取详情页内容失败")
            }
          })
        }
      },
      components:{
        "comment-box":comment
      }
    }

</script>
<style lang="scss" scoped>
  .newlistInfo{
    padding: 5px;
    .title{
      padding-bottom: 0px;
      h1{
        font-size: 16px;
        text-align: center;
      }
      p{
        display: flex;
        justify-content: space-between;
      }
    }
    .info{
      font-size: 14px;
      color: #8B8378;
    }
  }
</style>

