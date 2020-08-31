<template>
    <div class="main">
        <div class="warp">
            Все мероприятия
        </div>
        <div class="footer"><Footer></Footer></div> 
    </div>
</template>

<script>
import Footer from './footer.vue'
export default {
    name: 'Events',
    components: { Footer },
}
</script>

<style scoped>
.warp{
    flex: 1 0 auto;
    /* padding-top: 150px !important; */
}
@media (max-width: 991px) { 
    .warp{
        padding-top: 85px !important;
    }
}
@media (min-width: 992px) { 
    .warp{
        padding-top: 150px !important;
    }
}
.footer{
    flex: 0 0 auto;
}
.main{
    display: flex;
	flex-direction: column;
    min-height: 100vh;
    height: 100%;
    padding: 0px 0px;
    margin-bottom: 0px;
}
</style>