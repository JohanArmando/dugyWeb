<template lang="html">
  <div class="">
        <div class="dashboard-heading">
            <div class="row clearfix">
                <div class="col-xs-12 col-sm-12 col-md-12 col-lg-6">
                    <h1>
                        Perfil
                        <small>Mi Perfil</small>
                    </h1>
                </div>
            </div>
        </div>
        <div class="page-body">
          <div class="panel panel-default" id="panel-fullscreen">
              <div class="panel-heading">
                  Mi perfil
              </div>
              <div class="panel-body">
                <div class="row clearfix">
                    <div class="col-md-12">
                      <div v-if="!loading">
                      <div class="col-md-4">
                          <div class="col-md-12 top10">
                              <image-user></image-user>
                          </div>
                          <div class="col-md-12 top10 text-center">
                            <p><strong>{{ user.name }} {{ user.last_name }}</strong></p>
                            <p>{{ user.email }}</p>
                            <p>{{ user.documentation }}</p>
                            <p>{{ user.phone }}</p>
                          </div>
                      </div>
                      <div class="col-md-8 backgroundColorGrey">
                        <form @submit.prevent="putUser">
                          <div class="col-md-6">
                              <div class="form-group">
                                 <label>Nombre</label>
                                 <input v-on:input="updateValue('name',$event)" :value="user.name" class="form-control" required/>
                              </div>
                              <div class="form-group">
                                 <label>Apellido</label>
                                 <input v-on:input="updateValue('last_name',$event)" :value="user.last_name" class="form-control" required/>
                              </div>
                              <div class="form-group">
                                 <label>Email</label>
                                 <input v-on:input="updateValue('email',$event)" :value="user.email" class="form-control" required/>
                              </div>
                          </div>
                          <div class="col-md-6">
                            <div class="form-group">
                               <label>Documento</label>
                               <input v-on:input="updateValue('documentation',$event)" :value="user.documentation" class="form-control" type="number" required/>
                            </div>
                            <div class="form-group">
                               <label>Telefono</label>
                               <input v-on:input="updateValue('phone',$event)" :value="user.phone" class="form-control" type="number" required/>
                            </div>
                          </div>
                          <div class="col-md-12">
                            <div class="form-group">
                                <button type="submit" id="edit" class="btn btn-primary btn-doggy top20">Guardar</button>
                            </div>
                          </div>
                        </form>
                        </div>
                      </div>
                      <div v-else class="col-md-12">
                          <img class="img-responsive center-block" src="../../../assets/img/changed.gif">
                          <span class="pull-right"><i class="fa fa-spinner fa-spin"></i> Cargando...</span>
                      </div>
                    </div>
                </div>
              </div>
          </div>
        </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import ImageUser from '@/components/admin/users/ImageUser'

export default {
  data () {
    return ({
      aux_user: {},
      loading: true
    })
  },
  computed: {
    ...mapGetters({
      status: 'getStatus',
      user: 'getCurrentUser'
    })
  },
  beforeMount () {
    this.showUser(this.$route.params.id)
    .then(() => {
      this.loading = false
    })
    .catch(() => {
      this.loading = false
    })
  },
  methods: {
    putUser () {
      var vm = this
      vm.loading = true
      window.$('#edit').button('loading')
      this.aux_user.id = this.user.id
      vm.editUser(this.aux_user).then(user => {
        vm.loading = false
        vm.$router.replace(this.$route.query.redirect || '/walker/dashboard')
      })
      .catch(message => {
        window.$('#edit').button('reset')
        vm.error = false
        vm.loading = false
        vm.error = true
      })
    },
    updateValue (attribute, e) {
      this.aux_user[attribute] = e.target.value
    },
    ...mapActions([
      'showUser',
      'editUser'
    ])
  },
  components: {
    ImageUser
  }
}
</script>

<style lang="css">
</style>
