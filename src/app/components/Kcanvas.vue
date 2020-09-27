<template>
    <div>
        <el-row><Kline /> </el-row>
        <el-row><Kline /> </el-row>
        <el-row><Kline /> </el-row>
        <el-row><Kline /> </el-row>
        
    </div>
</template>

<script>
import Kline from './Kline'

export default {
    name: 'Kcanvas',
    components: {
        Kline,
    }
}
</script>