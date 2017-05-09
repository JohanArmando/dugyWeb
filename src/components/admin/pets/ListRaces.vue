<template>
    <div class="panel panel-default">
      <div class="padding10">
        <span class="titlePanel">Razas</span>
        <router-link to="/admin/plan" >
          <span class="marginRight10 pull-right">
            <i class="fa fa-plus"></i> Crear Raza
          </span>
        </router-link>
        <hr class="hrDogyy hrDogyyNotMargin">
      </div>
      <div class="panel-body">
        <div v-if="!loading">
            <div class="col-md-12" v-for="race in races">
              <div class="row boxDoggy">
                  <div class="col-md-12 top20 text-center">
                    <p><strong>{{ race.name }}</strong></p>
                    <p>
                      <router-link :to="'/admin/race/'+race.id" class="colorDoggy marginRight10">
                        <span class="label label-default label-doggy">
                          <i class="fa fa-edit"></i> Editar
                        </span>
                      </router-link>
                      <span class="label label-default label-doggy-delete cursorPointer" @click="deleteRace(race)">
                        <i class="fa fa-trash"></i> Eliminar
                      </span>
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
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'Races',
  data () {
    return ({
      loading: true
    })
  },
  computed: {
    ...mapGetters({
      races: 'getRaces'
    })
  },
  beforeMount () {
    this.allRaces()
    .then(() => {
      this.loading = false
    })
    .catch(() => {
      this.loading = false
    })
  },
  methods: {
    deleteRace () {
      var vm = this
      vm.deleteRace(this.plan).then(plan => {
        vm.loading = false
        vm.$router.replace(this.$route.query.redirect || '/admin/pets')
      })
      .catch(message => {
        vm.error = false
        vm.loading = false
        vm.error = true
      })
    },
    ...mapActions([
      'allRaces',
      'deleteRace'
    ])
  }
}
</script>
