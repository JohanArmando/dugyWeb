<template>
  <nav class="navbar navbar-default nav-mr" data-spy="affix" data-offset-top="173">
    <div class="container">
      <div class="navbar-header">
        <button type="button" class="navbar-toggle collapsed toggleDoggy" data-toggle="collapse"
        data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <a class="navbar-brand" href="#">
          <img class="img-responsive logo" src="../../../assets/img/icono.png">
        </a>
      </div>
      <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
        <ul class="nav navbar-nav navbar-right itemsDoggy pull-right">
          <li class="dropdown pull-right">
             <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
               <img v-if="user.avatar" :src="user.avatar.thumbnail" class="imgSmall img-circle">
             {{ user.name }} {{ user.last_name }} <span class="caret"></span>
             </a>
                 <ul class="dropdown-menu">
                   <li><router-link to="/admin/setting"><i class="fa fa-cog"></i> Configuraci&oacute;n</router-link></li>
                   <li role="separator" class="divider"></li>
                   <li><a @click="doLogout" class="cursorPointer"><i class="fa fa-sign-out"></i> Cerrar Sesion</a></li>
                 </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  computed: {
    ...mapGetters({
      status: 'getStatus',
      user: 'getUser'
    })
  },
  methods: {
    doLogout () {
      this.logout(this.user).then(log => {
        this.$router.replace('/')
      })
    },
    ...mapActions([
      'logout'
    ])
  }
}
</script>

<style lang="css">
.navbar{border-bottom: 1px solid #ccc}
</style>
