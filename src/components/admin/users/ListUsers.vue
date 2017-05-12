<template>
    <div class="panel panel-default">
      <div class="padding10">
        <span class="titlePanel">Usuarios</span>
        <hr class="hrDogyy hrDogyyNotMargin">
      </div>
      <div class="panel-body">
        <div v-if="!loading">
          <div  class="col-md-3 col-sm-6" v-for="user in users">
              <div class="text-center boxDoggy">
                <div class="row">

                    <div class="col-md-6 top10">
                      <img :src="user.avatar.thumbnail" class="img-responsive img-circle imgProfile img-block">
                    </div>
                    <div class="col-md-5 top20">
                      <p><strong>{{ limit(user.name) }} {{ limit(user.last_name) }}</strong></p>
                    </div>
                    <div class="col-md-12">
                      <p>{{ user.email }}</p>
                      <p>
                        <router-link :to="'/admin/owner/'+user.id" class="notTextDecoration colorDoggy marginRight10">
                          <i class="fa fa-paw"></i> Mascotas
                        </router-link>
                    </p>
                      <p><i class="fa fa-id-card-o"></i> {{ user.documentation }}</p>
                      <p><i class="fa fa-phone"></i> ({{ user.phone }})</p>
                      <p class="pull-right">
                        <span v-if="user.role.slug == 'client'" class="label label-default marginRight5">Cliente</span>
                        <span v-if="user.role.slug == 'walker'" class="label label-primary marginRight5">Paseador</span>
                        <span v-if="user.role.slug == 'admin'" class="label label-success marginRight5">Admin</span>
                      </p>
                      <hr class="hrDogyy">
                      <p>
                        <span>
                          <router-link :to="'/admin/user/'+user.id" class="colorDoggy marginRight10">
                            <span class="label label-default label-doggy"><i class="fa fa-edit"></i> Editar</span>
                          </router-link>
                          <span class="label label-default label-doggy-delete cursorPointer" @click="deleteUser(user)">
                            <i class="fa fa-trash"></i> Eliminar
                          </span>
                        </span>
                      </p>
                    </div>
                </div>
            </div>
          </div>
        </div>
        <div v-else class="col-md-12">
            <img class="img-responsive center-block" src="../../../assets/img/changed.gif">
            <span class="pull-right"><i class="fa fa-spinner fa-spin"></i> Cargando...</span>
        </div>
      </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'Users',
  data () {
    return ({
      loading: true
    })
  },
  computed: {
    ...mapGetters({
      users: 'getUsers'
    })
  },
  beforeMount () {
    this.listUsers()
    .then(() => {
      this.loading = false
    })
    .catch(() => {
      this.loading = false
    })
  },
  methods: {
    deleteUser () {
      var vm = this
      vm.deleteUser(vm.user).then(user => {
        this.loading = false
        vm.$router.replace(this.$route.query.redirect || '/admin/users')
      })
      .catch(message => {
        vm.error = false
        this.loading = false
        vm.error = true
      })
    },
    ...mapActions([
      'listUsers',
      'deleteUser'
    ]),
    limit (string) {
      if (string === null) {
        return ''
      }
      if (string.length < 7) {
        return string
      } else {
        return string.substring(0, 7) + '...'
      }
    }
  }
}
</script>

<style>
  .notTextDecoration{
    text-decoration: none !important;
  }
  .notTextDecoration:hover{
    color: #000 !important;
  }
</style>
