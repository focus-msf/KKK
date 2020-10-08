<template>
  <div class="block">
    <el-date-picker
     @change="getDate"
      v-model="value1"
      type="daterange"
      unlink-panels
      range-separator="至"
      start-placeholder="开始日期"
      end-placeholder="结束日期">
    </el-date-picker>
  </div>

</template>

<script>
export default {
  name: 'Options',
  data () {
    return {
      value1: ''
    }
  },
  created() {
  },

  methods: {
    getDate(val) {
      this.$store.dispatch('getKlines',val);
    }
  }
}
</script>
