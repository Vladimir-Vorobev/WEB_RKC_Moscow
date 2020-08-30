<template>
    <div class="main">
        Название: <input id="name" type="text">
        Организатор: <input id="org" type="text">
        Для кого: <input id="for" type="text">
        Город: <input id="city" type="text">
        Формат: <input id="format" type="text">
        <button @click="add_event()">Сохранить</button>
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
    margin-top: 120px;
    margin-bottom: 0px;
}
</style>