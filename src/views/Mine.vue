<template>
<div class="mine">
    <MineHeader />
    <Grid />
</div>
</template>

<script>
import MineHeader from "../components/Mine/MineHeader.vue"
import Grid from "../components/Mine/Grid.vue"

export default {
    data() {
        return {

        }
    },
    components: {
        MineHeader,
        Grid
    }

}
</script>
