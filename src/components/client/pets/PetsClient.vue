<template lang="html">
  <div>
    <div class="dashboard-heading">
        <div class="row clearfix">
            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-6">
                <h1>
                    Mascotas
                    <small>Mis Mascotas</small>
                </h1>
            </div>
        </div>
    </div>
    <div class="page-body">
      <div class="panel panel-default" id="panel-fullscreen">
          <div class="panel-heading">
              Mascotas
              <div class="panel-controls">
                  <router-link to="/client/pet">
                      <i class="fa fa-plus"></i> Crear Mascota
                  </router-link>
              </div>
          </div>
          <div class="panel-body">
            <div class="row clearfix">
              <div v-if="!loading">
                <div v-for="pet in pets" class="col-sm-12 col-sm-6 col-md-3 col-lg-3">
                  <div class="thumbnail">
                    <div class="top20">
                      <img v-if="pet.photos[0]" :src="pet.photos[0].thumbnail" alt="..." class="center-block img-responsive imgPet">
                      <img v-else src="http://lemon-law.net/wp-content/uploads/pet-icon.png" class="center-block img-responsive imgPet">
                    </div>
                    <div class="caption text-center">
                          <h3><a>{{pet.name}}</a></h3>
                          <p>
                            <strong>Fecha de Nacimiento:</strong><br>
                            {{pet.born_date.substring(0,10)}}
                          </p>
                          <p>
                            <strong>Raza:</strong><br>
                            {{pet.race.name}}
                          </p>
                          <p>
                            <strong>Tama&ntilde;o:</strong><br>
                            {{pet.size.name}}
                          </p>
                          <p>
                              <router-link :to="'/client/pet/'+pet.id" class="btn btn-sm btn-block btn-default">
                                <i class="fa fa-edit"> </i> Editar
                              </router-link>
                              <a @click="deletePet(pet)" class="colorWhite btn btn-sm btn-block btn-danger">
                                <i class="fa fa-trash"> </i> Eliminar
                            </a>
                          </p>
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
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'PetsClient',
  data () {
    return {
      loading: true
    }
  },
  computed: {
    ...mapGetters({
      pets: 'getPets'
    })
  },
  beforeMount () {
    this.allPets()
    .then(() => {
      this.loading = false
    })
    .catch(() => {
      this.loading = false
    })
  },
  methods: {
    deletePet () {
      var vm = this
      vm.deletePet(this.pet).then(plan => {
        vm.loading = false
        vm.$router.replace(this.$route.query.redirect || '/client/pets')
      })
      .catch(message => {
        vm.error = false
        vm.loading = false
        vm.error = true
      })
    },
    ...mapActions([
      'allPets',
      'deletePet'
    ])
  }
}
</script>

<style lang="css">
  .imgPet{
    height: 150px;
    width: 150px;
  }
  .colorWhite{
    color: #FFF !important
  }
</style>
