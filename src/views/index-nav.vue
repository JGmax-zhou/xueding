<template>
    <div class="navContent">
        <Coursegoods v-for="(value,index) in 5" :key="index"/>
    </div>
</template>
<script>
import Coursegoods from "../components/Coursegoods"
export default {
    data() {
        return {
            
        }
    },
    components:{
        Coursegoods
    }
}
</script>
<style lang="scss" scoped>
    .navContent{
        margin-bottom: 50px;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-top: 10px;
    }
</style>