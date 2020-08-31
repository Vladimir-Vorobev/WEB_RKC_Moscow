<template>
    <div class="main">
        <div class="warp">
            <div class="block">
                <div class="row">
                    <div class="col-12 col-lg-4">
                        <div style="font-size: 1.2em">Участник:</div>
                    </div>
                    <div class="col-12 col-lg-8">
                        <select name="schoolType" class="custom-select schoolType">
                            <option selected>Алексей Иванов</option>
                            <option >Петор Петров</option>
                        </select>
                    </div>
                </div>
                <div class="ib" style="width: 100%;">
                    <button class="btn btn-blue" @click="setPoints('event-1-p')">Загрузить критерии из Excel</button>
                </div>
                <hr>
                <div class="criteria">
                    <div class="criterion row">
                        <div class="name col-9">Использование правильных технологий (O)</div>
                        <div class="point col-3"><input type="text" class="inputPoint" maxlength="1">/1</div>
                    </div>
                    <div class="criterion row">
                        <div class="name col-9">Использование правильных технологий (O)</div>
                        <div class="point col-3"><input type="text" class="inputPoint" maxlength="1">/1</div>
                    </div>
                    <div class="criterion row">
                        <div class="name col-9">Использование правильных технологий (O)</div>
                        <div class="point col-3"><input type="text" class="inputPoint" maxlength="1">/1</div>
                    </div>
                    <div class="criterion row">
                        <div class="name col-9">Использование правильных технологий (J)</div>
                        <div class="point col-1"><input type="text" class="inputPoint" maxlength="1">/1</div>
                        <div class="point col-1"><input type="text" class="inputPoint" maxlength="1">/1</div>
                        <div class="point col-1"><input type="text" class="inputPoint" maxlength="1">/1</div>
                    </div>
                    <div class="criterion row">
                        <div class="name col-9">Использование правильных технологий (J)</div>
                        <div class="point col-1"><input type="text" class="inputPoint" maxlength="1">/1</div>
                        <div class="point col-1"><input type="text" class="inputPoint" maxlength="1">/1</div>
                        <div class="point col-1"><input type="text" class="inputPoint" maxlength="1">/1</div>
                    </div>
                </div>
                <div class="buttons">
                    <div class="ib">
                        <button class="btn btn-rounded-outline-almbb-success">Сохранить</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="footer"><Footer></Footer></div> 
    </div>
</template>

<script>
import Footer from './footer.vue'
export default {
    name: 'SetPoints',
    components: { Footer },
}
</script>

<style scoped>
.warp{
    flex: 1 0 auto;
    /* padding-top: 150px !important; */
    padding: 200px 50px 0px 50px;
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
.block{
    background-color: #ffffff;
    width: 100%;
    height: 100%;
    border-radius: 20px;
    box-shadow: 0px 4px 14px 0px rgba(112,112,112,0.1);
    min-height: 400px;
    padding: 15px 20px;
    position: relative;
}
.criteria{
    margin-bottom: 4.5em;
}
.criterion{
    margin-bottom: 0.6em;
}
.buttons{
    display: table;
    text-align: center !important;
    width: 100%;
    position: absolute;
    bottom: 20px;
}
.ib{
    display: table-cell;
}
.inputPoint{
    width:25px;
    outline: 0;
    border: 0;
    border-bottom: 1px solid gray;
    height: 1em;
}
.name{
    font-size: 1.2em;
}
.point{
    font-size: 1.2em;
}
</style>