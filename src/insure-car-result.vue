<template>
  <div>
    <x-header>询价结果</x-header>
    <section class="group">
      <h2 class="group-title">车辆信息</h2> 
      <group>
        <cell title="投保区域" v-model="carCity"></cell>
        <cell title="车牌号"   v-model="carNO"></cell>
        <cell title="购买日期" v-model="carDate"></cell>
        <cell title="使用性质" v-model="carUse"></cell>
        <cell title="商业险"   v-model="isBusiness"></cell>
      </group>
      <h2 class="group-title">报价结果</h2>
      <div class="group-container">
        <load-more tip="正在加载"></load-more>  
      </div>
    </section>
    

    

  </div>
</template>


<script>
import { Group, Cell, XInput, Selector, PopupPicker, XSwitch, XButton, XAddress, ChinaAddressData, Datetime, XHeader, LoadMore } from 'vux'

var carData = JSON.parse(window.sessionStorage.getItem('myCarData'))

export default {
  components: {
    Group,
    Cell,
    XInput,
    Selector,
    PopupPicker,
    XSwitch,
    XButton,
    XAddress,
    ChinaAddressData,
    Datetime,
    XHeader,
    LoadMore
  },
  data () {
    return {
      carCity: carData.city,
      carNO: carData.NO,
      isBusiness: carData.isBusiness ? '是' : '否',
      carDate: carData.date,
      carUse: carData.use
    }
  },
  methods: {
  }
}
</script>


<style>
  .weui_input,
  .weui_select option {
    text-align: right;
  }
  .weui_cells{
    margin-top: 0 !important;
  }
  .group-title{
    padding: 8px 14px;
    font-size: 18px;
  }
  .group-container{
    padding: 10px 14px;
    background-color: #fff;
  }
  .group-container .weui-loadmore{
    margin: 0 auto;
  }
</style>