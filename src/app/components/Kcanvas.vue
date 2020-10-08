<template>
    <div>
        <div v-for="(kline,index) in klines"
            :key="kline.id">

            <Kline :kline="kline" :name="index"/>

        </div>        
    </div>
</template>

<script>
import Kline from './Kline'
import { mapGetters } from 'vuex';

export default {
    name: 'Kcanvas',
    components: {
        Kline,
    },
    computed: {
        ...mapGetters([
            'klines'
        ])
    }
}
</script>