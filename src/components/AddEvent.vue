<template>
    <div class="main">
        <div class="warp container">
            <div class="formbox">
                <div class="input-group mb-3">
                    <div class="input-group-prepend">
                        <span class="input-group-text formInput" id="name">Название</span>
                    </div>
                    <input name="name" type="text" class="form-control name formInput" aria-label="Название" aria-describedby="name">
                </div>
                <div class="input-group mb-3">
                    <div class="input-group-prepend">
                        <span class="input-group-text formInput" id="org">Организатор</span>
                    </div>
                    <input name="org" type="text" class="form-control org formInput" aria-label="Организатор" aria-describedby="org">
                </div>
                <div class="input-group mb-3">
                    <div class="input-group-prepend">
                        <span class="input-group-text formInput" id="for">Для кого</span>
                    </div>
                    <input name="for" type="text" class="form-control for formInput" aria-label="Для кого" aria-describedby="for">
                </div>
                <div class="input-group mb-3">
                    <div class="input-group-prepend">
                        <span class="input-group-text formInput" id="city">Город</span>
                    </div>
                    <input name="city" type="text" class="form-control city formInput" aria-label="Город" aria-describedby="city">
                </div>
                <div class="input-group mb-3">
                    <div class="input-group-prepend">
                        <span class="input-group-text formInput" id="format">Формат</span>
                    </div>
                    <input name="format" type="text" class="form-control format formInput"  aria-label="Формат" aria-describedby="format">
                </div>
                <button class="btn btn-rounded-outline-almbb-success" @click="add_event()">Сохранить</button>
            </div>
        </div>
        <div class="footer"><Footer></Footer></div> 
    </div>
</template>

<script>
import Footer from './footer.vue'
export default {
    name: 'AddEvent',
    components: { Footer },
    data(){
        return{
            email: this.$store.getters.email,
            SessionID: this.$store.getters.SessionID,
        }
    },
    beforeMount(){
        // if(this.$store.state.role != 'admin') document.location.pathname = '/login'
    },
    methods:{
        add_event(){
            let name = document.getElementById('name')
            let org = document.getElementById('org')
            let _for = document.getElementById('for')
            let city = document.getElementById('city')
            let format = document.getElementById('format')
            let add = true
            if(name.value.trim() == ''){
                name.style.boxShadow = '0 0 0 0.2rem red'
                name.style.borderColor = 'red'
                add = false
            }
            else{
                name.style.boxShadow = ''
                name.style.borderColor = ''
            }
            if(org.value.trim() == ''){
                org.style.boxShadow = '0 0 0 0.2rem red'
                org.style.borderColor = 'red'
                add = false
            }
            else{
                org.style.boxShadow = ''
                org.style.borderColor = ''
            }
            if(_for.value.trim() == ''){
                _for.style.boxShadow = '0 0 0 0.2rem red'
                _for.style.borderColor = 'red'
                add = false
            }
            else{
                _for.style.boxShadow = ''
                _for.style.borderColor = ''
            }
            if(city.value.trim() == ''){
                city.style.boxShadow = '0 0 0 0.2rem red'
                city.style.borderColor = 'red'
                add = false
            }
            else{
                city.style.boxShadow = ''
                city.style.borderColor = ''
            }
            if(format.value.trim() == ''){
                format.style.boxShadow = '0 0 0 0.2rem red'
                format.style.borderColor = 'red'
                add = false
            }
            else{
                format.style.boxShadow = ''
                format.style.borderColor = ''
            }
            if(add) console.log(1)
        },
    },
}
</script>

<style scoped>
.warp{
    flex: 1 0 auto;
    padding-top: 200px !important;
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
.formbox{
    background-color: #ffffff;
    width: 100%;
    height: 100%;
    border-radius: 20px;
    box-shadow: 0px 4px 14px 0px rgba(112,112,112,0.1);
    min-height: 300px;
    padding: 25px 30px;
}
.formInput{
    border-radius: 50px;
}
</style>