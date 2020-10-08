<template>
  <ve-candle :data="chartData" :settings="chartSettings" height="340px" ></ve-candle>
</template>

<script>
  export default {
    name: 'Kline',
    props:['kline','name'],
    computed: {
      tableName() {
        return this.name
      },
      tableRow() {
        return this.kline
      }
    },
    watch: {
      kline: function(newVal, oldVal) {
        this.chartData.rows = newVal
      },
      name: function(newVal, oldVal){
        this.chartSettings.legendName['日k'] = newVal
      }
    },
    data () {
      this.backgroundColor='rgb(0, 0, 0)',

      this.grid = {
        show: true,
        backgroundColor:'rgb(0, 0, 0)'
      },
      this.chartSettings = {
        itemStyle:{
          color:'rgb(212, 42, 42)',
          color0:'#000',
          borderColor:'rgb(212, 42, 42)',
          borderColor0:'#000'
        },
        showMA: false,
        MA:[60,120,250],
        showDataZoom: true,
        start: 0,
        end: 100,
        legendName: {
            '日K':this.name
        }
      }
      return {
        chartData: {
          columns: ['日期', 'open', 'close', 'lowest', 'highest',],
          rows: this.kline,
        }
      }
    }
  }
</script>