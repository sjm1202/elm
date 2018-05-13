<template>
  <div class="find">
    <div class="header">
      <router-link :to="{path:'/home'}" class="fa  fa-angle-left"></router-link>
      <div class="title">发现</div>
    </div>
    <div class="banner">
      <a href="javascript:;">
        <img src="../../../../static/img/389dc2182920b6da9ba46948604d3gif.gif" alt="">
      </a>
    </div>
    <div class="navList">
      <a class="navItem" v-for="item in navList">
        <div class="info">
          <p class="title">{{item.title}}</p>
          <p class="decrition">{{item.decrition}}</p>
        </div>
        <div class="imgBox">
          <img :src="item.imgSrc" alt="">
        </div>
      </a>
    </div>
    <div class="activityBox">
      <div class="activityTitle">
        <p>
          <i class="fa fa-long-arrow-right"></i>
          <i class="fa fa-clock-o"></i>
          限时好礼
          <i class="fa fa-long-arrow-left"></i>
        </p>
        <span>金币换好礼</span>
      </div>
      <ul class="activityList">
        <li class="activityItem" v-for="( item, index ) in activityList">
          <a href="javascript:;">
            <div class="imgBox">
              <img :src="item.imgSrc" alt="">
              <span class="mark">{{item.mark}}</span>
            </div>
            <div class="activityName">{{item.activityName}}</div>
            <div class="price">
              <span>{{item.newPrice}}</span>
              <del>{{item.oldPrice}}</del>
            </div>
          </a>
        </li>
      </ul>
      <a class="more">
        查看更多 <i class="fa fa-angle-right" ></i>
      </a>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Find',
  data () {
    return {
      navList : [
        { id: '0001',title: '百万红包', href: 'javascript:;', decrition: "兴业银行联名卡", imgSrc: "https://fuss10.elemecdn.com/3/cc/a45d2b9d7d09bbc49b40d4e626093jpeg.jpeg?imageMogr/format/webp/"},
        { id: '0004',title: '周边优惠', href: 'javascript:;', decrition: "领取口碑好劵", imgSrc: "https://fuss10.elemecdn.com/5/10/2351e989d4171479ba0d7b5c06053jpeg.jpeg?imageMogr/format/webp/" },
        { id: '0002',title: '金币商城', href: 'javascript:;', decrition: "0元好物在这里", imgSrc: "https://fuss10.elemecdn.com/8/38/9c9aea0e856149083d84af3444b78jpeg.jpeg?imageMogr/format/webp/" },
        { id: '0003',title: '推荐有奖', href: 'javascript:;', decrition: "5元现金那不停", imgSrc: "https://fuss10.elemecdn.com/6/76/8d42eef97ff4c1c2b671085358541jpeg.jpeg?imageMogr/format/webp/" },
        { id: '0005',title: '必备爆吃', href: 'javascript:;', decrition: "最夯外卖指南", imgSrc: "https://fuss10.elemecdn.com/2/36/b784087aff96a97f4e5183d0d784fjpeg.jpeg?imageMogr/format/webp/" }
      ],
      activityList: [
        { id: '0001', activityName: "7元饿了吗红包", newPrice: '210金币', oldPrice: '￥7', mark:'限时优惠', imgSrc:'https://fuss10.elemecdn.com/1/3d/ff69f5a0f5ad5dfff58239d061432jpeg.jpeg?imageMogr/format/webp/'},
        { id: '0002', activityName: "扫地机器人", newPrice: '9金币', oldPrice: '￥99', mark:'特价换购', imgSrc:'https://fuss10.elemecdn.com/5/78/5c1ca7ceca079926933ca418c9eb7jpeg.jpeg?imageMogr/format/webp/'},
        { id: '0003', activityName: "机械手感键鼠套装", newPrice: '210金币', oldPrice: '￥7', mark:'特价换购', imgSrc:'https://fuss10.elemecdn.com/5/17/bbc669132d02deae9300c45097a19jpeg.jpeg?imageMogr/format/webp/'},
      ]
    }
  },
  components : {

  }
}
</script>

<style lang="scss" scoped>
.find{
  background: #F5F5F5;
  padding: 0.89rem 0 1.5rem;
  .header{
    position:fixed;
    top: 0;
    color: #fff;
    height: 0.89rem;
    width: 100%;
    padding: 0.2rem 0.28rem 0 0.28rem;
    background: #009dfe;
    .fa {
      height: 0.89rem;
      width: 0.89rem;
      top: 0;
      left: 0;
      position: absolute;
      color: #fff;
      font-size: .5rem;
      text-align: center;
      line-height: 0.89rem;
    }
    .title{
      font-size: .36rem;
      text-align: center;
      font-weight: 700;
    }
  }
  .banner{
    width: 100%;
    img{
      width: 100%;
      display: block;
    }
  }
  .navList{
    background: #ffffff;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    height: 4.8rem;
    margin-bottom: .3rem;
    .navItem{
      display: flex;
      padding: 0 .2rem;
      height: 1.6rem;
      width: 50%;
      flex-grow: 0;
      flex-shrink: 0;
      align-items: center;
      border-top: 1px solid #F7F7F7;
      border-left: 1px solid #F7F7F7;
      &:first-child{
        padding:.3rem .2rem;
        height: 3.2rem;
        .info{
          height: 1.5rem;
          align-self: flex-start;
        }
        .imgBox{
          width: 1.5rem;
          align-self: flex-end;
          img{
            width: 1.5rem;
          }
        }
      }
      .info{
        flex-grow: 1;
        flex-shrink: 1;
        height: .9rem;
        .title{
          color: #EA993B;
          font-size: .3rem;
          font-weight: bold;
        }
        .decrition{
          color: #999999;
        }
      }
      .imgBox{
        flex-grow: 0;
        flex-shrink: 0;
        width: .9rem;
        img{
          width: .9rem;
          display: block;
        }
      }
    }
  }
  .activityBox{
    background: #ffffff;
    .activityTitle{
      text-align: center;
      p{
        height: .8rem;
        padding-top: .45rem;
        line-height: .35rem;
        font-size: .35rem;
        font-weight: bold;
        .fa-clock-o{
          font-weight: normal;
          padding-right: .1rem;
          color: #FA605B;
        }

      }
      span{
        color: #999999;
        padding-bottom: .15rem;
      }
    }
    .activityList{
      display:flex;
      justify-content: center;
      padding: .2rem 0;
      .activityItem{
        width:2.22rem;
        .imgBox{
          width:2.22rem;
          position:relative;
          padding-bottom: .2rem;
          img{
            width: 2.22rem;

          }
          .mark{
            background: #413D3C;
            color: #fff;
            position: absolute;
            top: 0;
            left: 0;
            display:block;
            padding: 0.02rem 0.06rem;
          }
        }
        .activityName{
          color: #333333;
          padding-bottom: 0.15rem
        }
        span{
          font-size: .25rem;
          color: #FF5D45;
        }
        del{
          color: #BEBEBE;
        }
      }

    }
    .more{
      color: #999999;
      display: block;
      padding: .3rem;
      text-align: center;
      font-size: .25rem;
    }
  }
}
</style>
