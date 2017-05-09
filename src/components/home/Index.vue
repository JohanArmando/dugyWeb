<template lang="html">
  <div class="">
    <nav-bar></nav-bar>
    <section class="page" id="home">
      <home-one></home-one>
    </section>
    <hr class="sinMargin">
    <section class="page" id="register">
      <home-register></home-register>
    </section>
    <hr class="sinMargin">
    <section class="page" id="howWorking">
      <home-two></home-two>
    </section>
    <hr class="sinMargin">
    <section class="page" id="plans">
      <home-plans></home-plans>
    </section>
    <hr class="sinMargin">
    <section class="page" id="contact">
      <home-contact></home-contact>
    </section>
    <hr class="sinMargin">

    <div class="modal fade" id="modal-login" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content modalContentMrDoggy top200">
          <div class="modal-body modalBodyMrDoggy">
             <div class="row">
             <div class="col-md-8">
             <form @submit.prevent="doLogin" class="padding20 top20">
                <small class="text-danger dangerDoggy" v-if="errors">{{ errors.err }}</small>
                <div class="form-group">
                  <input placeholder="correo@correo.com" type="text" v-model="user.email" class="form-control inputDoggy" required>
                </div>
                <div class="form-group">
                  <input placeholder="password" type="password" v-model="user.password" class="form-control inputDoggy" required>
                </div>
                <button id="login" class="btn btn-primary btn-Doggy btn-block"><i v-show="loading" class="fa fa-spin fa-spinner"></i>Acceder</button>
                <a class="marginLeft20">Olvidaste tu contrase&ntilde;a?</a>
             </form>
             </div>
             <div class="col-md-4 contact text-center hidden-xs">
                <div class="col-md-4 col-md-offset-2">
                <div class="top90 bottom100">
                <img class="img-responsive imgMedium" src="../../assets/img/icono_blanco.png">
                </div>
                </div>
             </div>
             </div>
          </div>
        </div>
      </div>
    </div>

  </div>

</template>

<script>
import { mapActions } from 'vuex'
import NavBar from '@/components/home/layouts/NavBar'
import HomeOne from '@/components/home/partials/HomeOne'
import HomeRegister from '@/components/home/partials/HomeRegister'
import HomeTwo from '@/components/home/partials/HomeTwo'
import HomePlans from '@/components/home/partials/HomePlans'
import HomeContact from '@/components/home/partials/HomeContact'

export default {
  name: 'Home',
  data () {
    return {
      user: {
        email: '',
        password: ''
      },
      redirect: '/',
      loading: false,
      error: false,
      errors: []
    }
  },
  methods: {
    doLogin: function () {
      var vm = this
      vm.loading = true
      window.$('#login').button('loading')
      vm.login(this.user).then(user => {
        if (user.role.slug === 'walker') {
          vm.$router.replace(this.$route.query.redirect || '/walker/dashboard')
        } else {
          if (user.role.slug === 'admin') {
            vm.$router.replace(this.$route.query.redirect || '/admin/dashboard')
          } else {
            if (user.role.slug === 'client') {
              vm.$router.replace(this.$route.query.redirect || '/client/dashboard')
            }
          }
        }
        vm.loading = false
        window.$('#modal-login').modal('hide')
      })
      .catch(error => {
        window.$('#login').button('reset')
        vm.error = false
        vm.loading = false
        vm.error = true
        vm.errors = error.response.data
      })
    },
    ...mapActions([
      'login'
    ])
  },
  components: {
    NavBar,
    HomeOne,
    HomeRegister,
    HomeTwo,
    HomePlans,
    HomeContact
  }
}
</script>

<style lang="css">
.page {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: left;
}
#home {
  background-image: url('../../assets/img/home.png');
  background-repeat: no-repeat;
  background-position: right top 60px;
  background-size: 50% auto;
}
#register {
  background: linear-gradient(90deg, #57C7DA 50%, #FFF 50%);
}
#contact {
  background-color: #13A89E;
  background-image: url('../../assets/img/contact.png');
  background-repeat: no-repeat;
  background-position: left top;
  background-size: auto 100%;
}
</style>
