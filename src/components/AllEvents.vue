<template>
    <div class="main">
        <div class="warp container">
            <div class="events">
                <div class="event">
                    <div class="event-name">Начало нового учебного года</div>
                    <div class="event-body">
                        <div class="info-block">
                            <div class="info-item">
                                <div class="item-lable">Дата проведения:</div>
                                <div class="ii-main">
                                    <i class="fas fa-calendar-alt"></i> 
                                    <span>1 сентября 2020</span>
                                </div>
                            </div>
                            <div class="info-item">
                                <div class="item-lable">Время проведения:</div>
                                <div class="ii-main">
                                    <i class="far fa-clock"></i> 
                                    <span>13:30 - 14:30</span>
                                </div>
                            </div>
                            <div class="info-item">
                                <div class="item-lable">Длительность:</div>
                                <div class="ii-main">
                                    <i class="far fa-hourglass"></i> 
                                    <span>1 час</span>
                                </div>
                            </div>
                            <div class="info-item">
                                <div class="item-lable">Формат:</div>
                                <div class="ii-main">
                                    <span>дистанционно</span>
                                </div>
                            </div>
                            <!-- <div class="info-item">
                                <div class="item-lable">Зарегистрировалось:</div>
                                <div class="ii-main">
                                    <i class="far fa-user"></i> 
                                    <span>10/30</span>
                                </div>
                            </div> -->
                        </div>
                        <div class="org">Организатор: профсреда</div>
                        <div class="org">Город: Москва</div>
                        <div class="org">Для кого: учащиеся 7-11 классов</div><br><br>
                        <div id="event-1-p" class="participants" style="display: none;">

                            <div class="participant">
                                <div class="name">Алексей Иванов</div>
                                <div class="points">Баллы: <span style="font-style: italic">5/6</span></div>
                            </div>
                            <div class="participant">
                                <div class="name">Петор Петров</div>
                                <div class="points">Баллы: <span style="font-style: italic">3/6</span></div>
                            </div>
                        </div>
                        <div id="event-2-p" class="participants" style="display: none;">
                        <div class="input-group mb-3">
                    <div class="input-group-prepend">
                        <span class="input-group-text formInput" id="name">Фамилия</span>
                    </div>
                    <input name="name" type="text" class="form-control name formInput" aria-label="Название" aria-describedby="name">
                </div>
                <div class="input-group mb-3">
                    <div class="input-group-prepend">
                        <span class="input-group-text formInput" id="org">Имя</span>
                    </div>
                    <input name="org" type="text" class="form-control org formInput" aria-label="Организатор" aria-describedby="org">
                </div>
                <div class="input-group mb-3">
                    <div class="input-group-prepend">
                        <span class="input-group-text formInput" id="for">Отчество</span>
                    </div>
                    <input name="for" type="text" class="form-control for formInput" aria-label="Для кого" aria-describedby="for">
                </div>
                <div class="input-group mb-3">
                    <div class="input-group-prepend">
                        <span class="input-group-text formInput" id="city">Телефон</span>
                    </div>
                    <input name="city" type="text" class="form-control city formInput" aria-label="Город" aria-describedby="city">
                </div>
                <div class="input-group mb-3">
                    <div class="input-group-prepend">
                        <span class="input-group-text formInput" id="format">Email</span>
                    </div>
                    <input name="format" type="text" class="form-control format formInput"  aria-label="Формат" aria-describedby="format">
                </div>
                <div class="input-group mb-3">
                    <div class="input-group-prepend">
                        <span class="input-group-text formInput" id="format">Откуда вы</span>
                    </div>
                    <input name="format" type="text" class="form-control format formInput"  aria-label="Формат" aria-describedby="format">
                </div>
                <button class="btn btn-rounded-outline-almbb-success">Сохранить</button>
                        </div>
                    </div>
                    <div class="buttons">
                        <div class="ib">
                            <button class="btn btn-outline-blue" @click="showParticipant('event-2-p')">Записаться</button>
                        </div>
                        <div class="ib" v-if="role == 'admin'">
                            <button class="btn btn-blue" @click="showParticipant('event-1-p')">Участники</button>
                        </div>
                        <div class="ib" v-if="role == 'admin'">
                            <button class="btn btn-blue" @click="setPoints('event-1-p')">Оценить</button>
                        </div>
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
    name: 'Events',
    components: { Footer },
    data(){
        return {
            loginText: 'Войти',
            role: this.$store.getters.role,
            // showHeaderContent: false,
        }
    },
    methods: {
        showParticipant(id){
            if(document.getElementById(id).style.display != 'block') document.getElementById(id).style.display = 'block'
            else document.getElementById(id).style.display = 'none'
        },
        setPoints(id){
            this.$router.push({ path: `/set-points/${id}` })
        },
    },
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
        padding-top: 180px !important;
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
.event{
    background-color: #ffffff;
    width: 100%;
    height: 100%;
    border-radius: 20px;
    box-shadow: 0px 4px 14px 0px rgba(112,112,112,0.1);
    min-height: 300px;
    /* padding: 15px 20px; */
    position: relative;
}
@import url('https://fonts.googleapis.com/css2?family=PT+Sans&display=swap');
.event-name{
    background-color: #e91e63;
    width: 100%;
    min-height: 40px;
    border-top-right-radius: 20px;
    border-top-left-radius: 20px;
    font-size: 1.2em;
    font-weight: bold;
    color: white;
    font-family: 'PT Sans', sans-serif;
}
.event-body{
    padding: 25px 35px;
    text-align: left;
    min-height: 100%;
    height: 100%;
}
.info-block{
    display: table;
    text-align: center !important;
    width: 100%;
}
.info-item{
    display: table-cell;
    padding: 0px 15px;
    
}
.item-lable{
    font-size: 0.85em;
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
.org{
    padding: 15px 20px;
    font-size: 1.1em;
}
.participants{
    margin-bottom: 4.5em;
    margin-top: 1.5em;
}
.participant{
    padding: 35px 40px;
    text-align: left;
    background: #efefef;
    margin-bottom: 0.3em;
    border-radius: 15px;
    display: inline-block;
    width: 100%;
}
.participant:hover{
    background: #eef5ff;
}
.participant .name{
    font-size: 1.1em;
    font-weight: bold;
    display: inline-block;
}
.participant .points{
    float: right;
}
</style>