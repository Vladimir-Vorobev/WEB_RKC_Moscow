<template>
    <div class="main">
        <div class="warp">
            Главная страница
        </div>
        <div class="footer"><Footer></Footer></div> 
    </div>
</template>

<script>
import Footer from './footer.vue'
export default {
    name: 'MainPage',
    components: { Footer },
}
</script>

<style scoped>
.warp{
    flex: 1 0 auto;
    padding-top: 150px !important;
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