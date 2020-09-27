<template>
  <div id="app">

  <el-container>
    <el-header><Options /></el-header>
    <el-main><Kcanvas /></el-main>
  </el-container>

  </div>
</template>


<script>
import Options from './components/Options.vue';
import Kcanvas from './components/Kcanvas'

export default {
  name: 'App',
  components: {
    Options,
    Kcanvas
  }
}
</script>

