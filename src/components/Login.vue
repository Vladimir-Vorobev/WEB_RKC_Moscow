<template>
    <div class="main">
        <div class="container warp">
            <form class="formbox needs-validation" novalidate>
                <h2>Войти</h2>
                <div class="form-group" style="text-align: left">
                    <label for="exampleInputEmail1">Email адресс</label>
                    <input name="email" class="form-control formInput" placeholder="example@gmail.com" required>
                </div>
                <div style="text-align: left">
                    <label for="password">Пароль</label>
                </div>
                <div class="form-label-group input-group">
                    <input type="password" id="password" class="form-control formInput" name="password" placeholder="Пароль" required>
                    <div class="input-group-append" @click="showHidePwd()" style="cursor: pointer;">
                        <span class="input-group-text showHidePwd">
                            <i id="eye" class="far fa-eye-slash"></i>
                        </span>
                    </div>
                </div>
                <div class="form-row"> 
                    <button class="btn btn-rounded-blue btn-lg" @click="loginUser()">Войти</button>
                </div>
            </form> <br>
            <p><router-link to="/registration" class="link">Еще нет аккаунта? Зарегистрируйтесь</router-link></p>
        </div>
        <div class="footer"><Footer></Footer></div> 
    </div>
</template>

<script>
import needle from "needle"
import Footer from './footer.vue'
import Vue from 'vue'
export default {
    name: 'Login',
    components: { Footer },
    methods: {
        loginUser(){
            event.preventDefault()
            let form = document.forms[0]
            let email = form.elements.email.value
            let password = form.elements.password.value
            let crypto = require('crypto')
            let data = {
                email: email,
                password: crypto.createHash('md5').update(password).digest("hex"), 
            }
            needle.post(this.$store.state.serverIp+'/api/login', data, {"json": true}, function(err, res){
                if(err){console.log(err)} 
                if(res.body == 'Incorect password'){
                    //alert('Неверный email или пароль')
                    Vue.swal({
                        icon: 'error',
                        text: 'Неверный email или пароль'
                    });
                }
                else if(res.body == 'User undefined'){
                    //alert('Пользователь не найден')
                    Vue.swal({
                        icon: 'error',
                        text: 'Пользователь не найден'
                    });
                }
                else if(res.body.sessionid != undefined){
                    document.cookie = "email=" + email + "; expires=" + new Date(Date.now() + 864000e3).toUTCString()
                    document.cookie = "SessionID=" + res.body.sessionid + "; expires=" + new Date(Date.now() + 864000e3).toUTCString()
                    document.location.href = `/user-profile/${res.body.userid}`
                }
            })
        },
        showHidePwd() {
            var input = document.getElementById("password");
            if (input.type === "password") {
                input.type = "text";
                document.getElementById("eye").className = "far fa-eye";
            } else {
                input.type = "password";
                document.getElementById("eye").className = "far fa-eye-slash";
            }
        },
    }
}
</script>

<style scoped>
.warp{
    flex: 1 0 auto;
    padding-top: 210px !important;
    background-color: #fff;
    padding: 0px 30px;
}
.footer{
    flex: 0 0 auto;
}
.main{
    display: flex;
	flex-direction: column;
}
.main{
    height: 100%;
    padding: 0px;
    min-height: 100vh;
    margin-bottom: 0px;
}

.main p{
    color: #4f4f50;
    text-align: left !important;
    font-size: 0.86em;
    margin-left: -10px;
}
.link{
    color: #4f4f50;
    text-decoration: none;
}
.link:hover{
    color: #EF5B65;
    text-decoration: none;
}

.form-label-group {
    position: relative;
    margin-bottom: 1rem;
}

i:hover {
    cursor: pointer;
}
.formInput{
    border-radius: 50px;
}
.showHidePwd{
    border-radius: 50px;
}
</style>