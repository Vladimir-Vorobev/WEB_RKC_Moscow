<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-light fixed-top navStyle">
            <a class="navbar-brand logo" href="http://www.profsreda.com/" target="_blank" style="color: #f23333;">профсреда</a>
            <button @click="animate_toggler()" class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <div class="anim-bar-dark anim-2">
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </div>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent" @click="animate_navbar()">
                <ul class="navbar-nav mr-auto mx-auto links">  <!-- v-if="showHeaderContent" -->
                    <li class="nav-item">
                        <a class="nav-link" href="http://www.profsreda.com/minecraft" target="_blank">Minecraft</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="http://www.profsreda.com/wsr" target="_blank">Смотри и пробуй с WSR</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="http://www.profsreda.com/teacher" target="_blank">Классным руководителям</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="http://www.profsreda.com/hakaton" target="_blank">Хакатон</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="http://www.profsreda.com/city_travel" target="_blank">City Travel</a>
                    </li>
                    <li class="nav-item d-none d-sm-none d-md-none d-lg-block d-xl-block">
                        <router-link to="/" class="router-link">
                            <a class="nav-link ourSite" ref="AddCard">RKC</a>
                        </router-link>
                    </li>
                    <li class="nav-item dropdown d-block d-sm-block d-md-block d-lg-none d-xl-none">
                        <a class="nav-link dropdown-toggle ourSite" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            RKC
                        </a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                        <a class="dropdown-item" href="#">Мероприятия</a>
                        <a class="dropdown-item" href="#">Профиль</a>
                        </div>
                    </li>
                </ul>
            </div>
        </nav>
        <div class="siteNav d-none d-sm-none d-md-none d-lg-table d-xl-table">
            <div class="navItem"><a href="#">Мероприятия</a></div>
            <div class="navItem"><a href="#">Профиль</a></div>
        </div>
    </div>
</template>


<script>
import Swal from 'sweetalert2'
// import $ from 'jquery'
export default {
    name: 'Header',
    data(){
        return {
            loginText: 'Войти',
            role: '',
            // showHeaderContent: false,
        }
    },
    beforeMount(){
        let email = this.$store.getters.email
        let SessionID = this.$store.getters.SessionID
        if(email != ''){
            fetch(this.$store.state.serverIp+'/api/getInformation', {
                method: 'POST',
                body: JSON.stringify({email: email, sessionid: SessionID}),
                headers: {
                    "Content-Type": "application/json"
                },
            })
            .then(response => {
                // console.log("res", response)
                return response.json()
            })
            .then(data => {
                if(data.data == '310'){
                    document.cookie = "email=" + ";expires=Thu, 01 Jan 1970 00:00:01 GMT"
                    document.cookie = "SessionID=" + ";expires=Thu, 01 Jan 1970 00:00:01 GMT"
                    window.location.reload()
                }   
                this.loginText = data.email
                this.role = data.role
                document.querySelector('.login').style.display = 'none'
                document.querySelector('.person_menu').style.display = 'block'
                // this.showHeaderContent = true
            })
            .catch(err => {
                console.log(err)
                Swal.fire({
                    icon: 'error',
                    title: 'На сервере проходят технические работы, приносим свои извинения за доставленные неудобства',
                    allowOutsideClick: false,
                    allowEscapeKey: false,
                    allowEnterKey: false,
                })
            })
        } 
    },

    methods: {
      exit(){
        document.cookie = "email=" + ";expires=Thu, 01 Jan 1970 00:00:01 GMT"
        document.cookie = "SessionID=" + ";expires=Thu, 01 Jan 1970 00:00:01 GMT"
        // this.$router.push({ path: `/login` })
        window.location.reload()
        document.location.href = "/login"
      },
      animate_navbar(){
          if(event.target.classList.contains('useful') == false && event.target.classList.contains('user') == false){
                document.querySelector('.navbar-collapse').classList.remove('show')
                document.querySelector('.navbar-toggler').classList.remove('active')
          }
      },
      animate_toggler(){
          document.querySelector('.navbar-toggler').classList.toggle('active')
      },
    }

}
</script>

<style scoped>
.navbar-light .navbar-nav .nav-link {
    color: #000000;
    /* font-family: 'PT Mono',Arial,sans-serif; */
    font-family: 'PT Mono', monospace;
}
.navStyle{
    background-color: rgba(255,255,255,1);
    box-shadow: 0px 1px 3px rgba(0,0,0,0.10);
    padding: 17px 0px;
}
.logo{
    font-family: 'PT Mono', monospace;
    font-weight: 500;
    padding: 0px 0px 0px 40px;
    font-size: 24px;
}
.links{
    font-size: 16px;
    font-weight: 600;
    color: #000000;
}
.nav-link:hover{
    color: #ff8562 !important;
}
.ourSite{
    text-decoration: underline;
    color: #ff8562 !important;
}
.nav-item{
    padding: 0px 15px;
}
.navbar-nav{
    padding-right: 40px;
}
.siteNav{
    position: fixed;
    z-index: 99999;
    width: 80%;
    border-radius: 3px;
    left: 0;
    right: 0;
    background-color: rgb(45, 45, 117);
    display: table;
    color: white;
    text-align: center;
}
@media (max-width: 1244px) { 
    .siteNav{
        top: 80px;
        height: 7vh;
        margin: 0px 10%;
    }
}
@media (min-width: 1245px) { 
    .siteNav{
        top: 70px;
        height: 8vh;
        margin: 0px 10%;
    }
}
.navItem{
    display: table-cell;
    vertical-align: middle;
    text-align: center;
    height: 100%;
}
.navItem a{
    color: white;
    text-decoration: none;
}
.navItem a:hover{
    color: red;
}
</style>