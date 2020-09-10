<template>
    <div class="navContent">
        <Coursegoods v-for="(value) in IndexNavList" :key="value.id" :navListData="value"/>
    </div>
</template>
<script>
import { createNamespacedHelpers } from "vuex"; //引入vuex辅助函数
const { mapState, mapActions } = createNamespacedHelpers(
  "indexHome"
); //引入vuex辅助函数
import Coursegoods from "../components/Coursegoods"
export default {
    props:['navList'],
    data() {
        return {
            
        }
    },
    components:{
        Coursegoods
    },
    methods: {
        ...mapActions(['getIndexNavList'])
    },
    mounted() {
        // console.log(this.navList)
        this.getIndexNavList({subject:this.navList})
    },
    computed: {
        ...mapState(['IndexNavList'])
    },
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