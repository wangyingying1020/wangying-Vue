<template>
  <div class="commentInfo">
      <h1>发表评论</h1>
      <hr>
      <!-- 评论输入框 -->
      <textarea placeholder="这是一个吐槽区域，请尽情发挥...." maxlength="120" rows="5"></textarea>
      <!-- 发表评论按钮 -->
      <mt-button type="primary" size="large">发表评论</mt-button>
      <!-- 评论详情 -->
      <div class="commentContent">
          <div v-for="(item,index) in commentInfo" :key="item.add_time">
              <div class="user">
                <span>第{{index+1}}楼</span>
                <span>用户:{{item.user_name}}</span>
                <span>发表时间:{{item.add_time}}</span>
              </div>
              <div class="content">{{item.content}}</div>
          </div>
      </div>
      <!-- 加载更多 -->
      <mt-button type="primary" size="large" plain>加载更多</mt-button>

  </div>
</template>
<script>
    export default{
        data(){
            return{
                pageindex:1,
                commentInfo:[]
            }
        },
        created(){
            this.getContent();
        },
        methods:{
            getContent(){
                this.$http.get("api/getcomments/"+this.id+"?pageindex="+this.pageindex).then(res=>{
                    // console.log(res.body);
                    this.commentInfo=res.body.message;
                    // console.log(this.commentInfo);
                })
            }
        },
        props:["id"]
    }
</script>
<style lang="scss" scoped>
    .commentInfo{
        padding-bottom: 50px;
        h1{
            font-size: 20px;
        }
        textarea{
            padding: 5px;
            margin: 0;
        }
        .commentContent{
            .user{
                font-size: 14px;
                line-height: 35px;
                background-color: 	#C5C1AA;
                display: flex;
                justify-content: space-between;
            }
            .content{
                padding: 10px;
                font-size: 14px;
                font-weight: 700;
            }
        }
    }
</style>

