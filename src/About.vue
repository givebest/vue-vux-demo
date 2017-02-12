<template>
  <div>
    <group>
      <calendar v-model="demo3" disable-future></calendar>
    </group>
  </div>
</template>


<script>
import { Group, Calendar, Cell } from 'vux'

export default {
  components: {
    Group,
    Calendar,
    Cell
  },
  data () {
    return {
      title: 'about',
      demo3: 'TODAY'
    }
  }
}
</script>