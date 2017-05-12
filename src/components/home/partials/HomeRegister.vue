<template>
  <div class="container">
    <div class="row">
      <div class="col-md-5 hidden-xs hidden-sm">
          <img class="img-responsive center-block top50" src="../../../assets/img/home1.png">
      </div>
      <div class="col-md-4 col-md-offset-2">
        <div class="text-center">
          <h1 class="black"><strong>Registrate Ahora</strong></h1>
          <p class="textSmall">Obt&eacute;n tres paseos gratis para tu mascota!</p>
          <form @submit.prevent="doRegister">
              <div class="form-group">
                <select  class="form-control selectDoggy" required v-model="form.role">
                  <option disabled value="" selected>Seleccione el roll...</option>
                  <option value="4">Paseador</option>
                  <option value="3">Cliente</option>
                </select>
              </div>
              <div class="form-group">
                <input placeholder="John" type="text" v-model="form.name" class="form-control inputDoggy" required>
              </div>
              <div class="form-group">
                <input placeholder="Doe" type="text" v-model="form.last_name" class="form-control inputDoggy" required>
              </div>
              <div class="form-group">
                <input placeholder="correo@correo.com" type="email" v-model="form.email" class="form-control inputDoggy" required>
              </div>
              <div class="form-group">
                <input placeholder="password" type="password" v-model="form.password" class="form-control inputDoggy" required>
              </div>
              <div class="form-group">
                <input placeholder="confirm password" type="password" v-model="form.confirmPassword" class="form-control inputDoggy" required>
              </div>
              <div class="form-group text-left">
                <input type="checkbox" id="test1" required>
                <label for="test1">Acepto terminos y condiciones.</label>
              </div>
              <div class="errorDugy" v-if="errors.err">
                  <strong>Error:</strong> {{errors.err}}<br>
              </div>
              <br><button id="registerUser" class="btn btn-primary btn-Doggy btn-block top10">Registrarse</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'HomeRegister',
  data () {
    return {
      form: {},
      redirect: '/',
      loading: false,
      error: false,
      errors: []
    }
  },
  methods: {
    doRegister () {
      var vm = this
      vm.loading = true
      window.$('#registerUser').button('loading')
      vm.register(this.form).then(user => {
        if (user.role === 4) {
          vm.$router.replace(this.$route.query.redirect || '/walker/dashboard')
        } else {
          if (user.role === 2) {
            vm.$router.replace(this.$route.query.redirect || '/admin/dashboard')
          } else {
            if (user.role === 3) {
              vm.$router.replace(this.$route.query.redirect || '/client/dashboard')
            }
          }
        }
        vm.loading = false
        window.$('#registerUser').button('reset')
      })
      .catch(error => {
        window.$('#registerUser').button('reset')
        vm.error = false
        vm.loading = false
        vm.error = true
        vm.errors = error.response.data
      })
    },
    ...mapActions([
      'register'
    ])
  }
}
</script>

<style lang="scss" scoped>
.errorDugy{
  padding: 10px;
  background-color: #29AFA0;
  color: #FFF
}
.text-danger {
    color: #FFF;
}
</style>
