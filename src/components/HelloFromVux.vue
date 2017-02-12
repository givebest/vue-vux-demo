<template>
  <div class="container">
    <header class="header">
      <section class="head-search">
        <search @result-click="resultClick" @on-change="getResult" :results="results" v-model="value" autoFixed="true"></search>
      </section>

      <section class="head-banner">
         <swiper :list="headBannerList" auto  ots-class="custom-bottom" dots-position="center"></swiper>
      </section>

      <section class="head-catalog">
        <flexbox>
          <flexbox-item>
            <div class="flex-demo">
              <router-link to="/insure/car">
                <i class="iconfont  icon-edit"></i>
                <p>打卡</p>
              </router-link>
            </div>
          </flexbox-item>

          <flexbox-item>
            <div class="flex-demo">
              <router-link to="/about">
                <i class="iconfont  icon-training"></i>
                <p>图解保险</p>
              </router-link>
            </div>
          </flexbox-item>

          <flexbox-item>
            <div class="flex-demo">
              <router-link to="/about">
                <i class="iconfont  icon-email"></i>
                <p>邀请函</p>
              </router-link>
            </div>
          </flexbox-item>

          <flexbox-item>
            <div class="flex-demo">
              <router-link to="/about">
                <i class="iconfont  icon-process"></i>
                <p>微分享</p>
              </router-link>
            </div>
          </flexbox-item>

        </flexbox>
        <flexbox>

          <flexbox-item>
            <div class="flex-demo">
              <router-link to="/about">
                <i class="iconfont  icon-account"></i>
                <p>团意险</p>
              </router-link>
            </div>
          </flexbox-item>

          <flexbox-item>
            <div class="flex-demo">
              <router-link to="/about">
                <i class="iconfont  icon-auto"></i>
                <p>车险</p>
              </router-link>
            </div>
          </flexbox-item>

          <flexbox-item>
            <div class="flex-demo">
              <router-link to="/about">
                <i class="iconfont  icon-gerenzhongxin"></i>
                <p>个人险</p>
              </router-link>
            </div>
          </flexbox-item>

          <flexbox-item>
            <div class="flex-demo">
              <router-link to="/about">
                <i class="iconfont  icon-cart"></i>
                <p>热卖</p>
              </router-link>
            </div>
          </flexbox-item>

        </flexbox>
      </section>
   </header>

  <main class="main">
    <section class="main-banner">
      <flexbox>
          <flexbox-item>
            <img class="img-width100" src="http://files.huizecdn.com/file1/M00/44/4B/wKgls1h11xOALIQLAACClKu8sc4466.png" alt="xx">
          </flexbox-item>
          <flexbox-item>
            <img class="img-width100" src="http://files.huizecdn.com/file1/M00/45/77/wKgls1h8PGiALyHWAAB9IlodXS4378.png" alt="xx">
          </flexbox-item>
          <flexbox-item>
            <img class="img-width100" src="http://files.huizecdn.com/file1/M00/45/77/wKgls1h8PEyAPbuAAACdl55Upfg746.jpg" alt="xx">
          </flexbox-item>
      </flexbox>
    </section>

   
    <flexbox>
        <flexbox-item>
          <img class="img-width100" src="http://files.huizecdn.com/file1/M00/40/C1/wKgls1hmR7GAJnw9AACUaLYOwJE482.png" alt="xx">
        </flexbox-item>
        <flexbox-item>
          <flexbox>
        <flexbox-item>
          <img class="img-width100" src="http://files.huizecdn.com/file1/M00/05/60/wKgls1fV_7KASZrNAADM8_gHV2Q173.png" alt="xx">
        </flexbox-item>
        <flexbox-item>
          <img class="img-width100" src="http://files.huizecdn.com/file1/M00/05/60/wKgls1fV_7KASZrNAADM8_gHV2Q173.png" alt="xx">
        </flexbox-item>
    </flexbox>
        </flexbox-item>
    </flexbox>

     <flexbox>
        <flexbox-item>
          <img class="img-width100" src="http://files.huizecdn.com/file1/M00/05/60/wKgls1fV_7KASZrNAADM8_gHV2Q173.png" alt="xx">
        </flexbox-item>
        <flexbox-item>
          <img class="img-width100" src="http://files.huizecdn.com/file1/M00/05/60/wKgls1fV_7KASZrNAADM8_gHV2Q173.png" alt="xx">
        </flexbox-item>
    </flexbox>

<!--     <section class="main-list">
      <h2 class="main-list-title">近期热卖</h2>
      <ol class="main-llist">
        <li class="main-llitem">
          <a href="javascript:;">123213213</a>
        </li>
      </ol>
    </section> -->

  </main>

  </div>
</template>

<script>
import { Search, Group, Cell, Flexbox, FlexboxItem, Divider, Icon, Swiper } from 'vux'

const imgList = [
  'http://files.huizecdn.com/file1/M00/48/FE/wKgls1icGQSAKTtjAAJ5vQyPNmc539.jpg',
  'http://files.huizecdn.com/file1/M00/48/CF/wKgls1ia6fCAYLXZAAMDNMMwRzM629.jpg',
  'http://files.huizecdn.com/file1/M00/44/E2/wKgls1h4SpiAViaNAACHbmrVmeQ524.png'
]

const bannerList = imgList.map((one, index) => ({
  url: 'javascript:',
  img: one
}))

export default {
  components: {
    Search,
    Group,
    Cell,
    Flexbox,
    FlexboxItem,
    Divider,
    Icon,
    Swiper
  },
  methods: {
    resultClick (item) {
      window.alert('you click the result item: ' + JSON.stringify(item))
    },
    getResult (val) {
      this.results = val ? getResult(this.value) : []
    }
  },
  data () {
    return {
      results: [],
      value: '',
      headBannerList: bannerList
    }
  }
}

function getResult (val) {
  let rs = []
  for (let i = 0; i < 8; i++) {
    rs.push({
      title: `${val} result: ${i + 1} `,
      other: i
    })
  }
  return rs
}
</script>

<style>
body, button, input, select, textarea {
  font: 300 1em/1.8 PingFang SC, Lantinghei SC, Microsoft Yahei, Hiragino Sans GB, Microsoft Sans Serif, WenQuanYi Micro Hei, sans;
}
.vux-demo {
  text-align: center;
}
.logo {
  width: 100px;
  height: 100px
}
</style>
<style lang="less">
@import '~vux/src/styles/1px.less';
@import '../iconfont/iconfont.css';

.header{
  background-image: linear-gradient(-180deg,#3db9f0 8%,#3acae5 52%,#38D7DD 100%);
}
.header .weui_search_bar{
  background: none;
}

/* search */
.header .weui_search_outer{
  border-radius: 4px;
}

/* banner */
.head-banner{
  height: 180px;
}

/* catalog */
.head-catalog{
  padding: 10px 0;
}
.flex-demo {
  padding: 4px 0;
  text-align: center;
  color: #fff;
  font-size: 14px;
  background-clip: padding-box;
}
.flex-demo a{
  color: #fff;
}
.flex-demo .weui_icon,
.flex-demo .weui_icon::before,
.flex-demo .weui_icon::after,
.flex-demo .iconfont{
  padding: 8px;
  color: #38D7DD;
  font-size: 26px;
  background-color: #fff;
  border-radius: 100px;
}

/* main */
.main{
  margin-top: 10px;
}
.img-width100{
  width: 100%;
}
</style>