<template>
  <div>
    <x-header>车险询价</x-header>
    <group>
      <x-address title="投保区域" placeholder="请选择城市" v-model="carCity" :list="addressData" hide-district></x-address>
      <x-input title="车牌号" placeholder="粤B123456" v-model="carNO" widht="105px"></x-input>
      <datetime title="购买日期" v-model="carDate" :min-year=2010 :max-year=2017></datetime>
       <selector title="使用性质" placeholder="请选择" v-model="carUse" :options="carUseData"></selector>
      <x-switch title="商业险" v-model="isBusiness"></x-switch>
    </group>

    <p style="padding: 16px 10px;">
      <x-button type="primary" @click.native="submit">查询</x-button>
    </p>

     <loading v-model="loading" text="提交中"></loading>

  </div>
</template>


<script>
import { Group, Cell, XInput, Selector, PopupPicker, XSwitch, XButton, XAddress, ChinaAddressData, Datetime, XHeader, Loading } from 'vux'

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
    Loading
  },
  data () {
    return {
      addressData: ChinaAddressData,
      carCity: [],
      carNO: '',
      isBusiness: true,
      carDate: '2017-01-01',
      carUse: '',
      carUseData: [{key: '个人-非运营', value: '个人-非运营'}, {key: '个人-运营', value: '个人-运营'}, {key: '公司-非运营', value: '公司-非运营'}, {key: '公司-运营', value: '公司-运营'}],
      loading: false
    }
  },
  methods: {
    submit: function () {
      // 城市
      if (this.carCity.length <= 0) {
        this.$vux.toast.show({
          type: 'warn',
          text: '请选择城市'
        })
        return
      }
      // 车牌
      if (!this.carNO) {
        this.$vux.toast.show({
          type: 'warn',
          text: '请输入车牌号码'
        })
        return
      }
      if (!/^([\u4e00-\u9fa5]{1})[a-zA-Z]{0,1}(\d{6})$/.test(this.carNO)) {
        this.$vux.toast.show({
          type: 'warn',
          text: '车牌格式不对哦'
        })
        return
      }
      // 购车日期
      if (!this.carDate) {
        this.$vux.toast.show({
          type: 'warn',
          text: '请选择日期'
        })
        return
      }
      // 使用性质
      if (!this.carUse) {
        this.$vux.toast.show({
          type: 'warn',
          text: '请选择使用性质'
        })
        return
      }
      let carData = {
        city: this.carCity,
        NO: this.carNO,
        date: this.carDate,
        use: this.carUse,
        isBusiness: this.isBusiness
      }
      this.loading = true
      window.sessionStorage.setItem('myCarData', window.JSON.stringify(carData))
      this.$router.push({ path: '/insure/car/result' })
    }
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
</style>