<template lang="html">
  <div class="panel panel-default">
    <div class="padding10">
      <span class="titlePanel">Estadisticas</span>
      <hr class="hrDogyy hrDogyyNotMargin">
    </div>
    <div class="panel-body">
      <div v-if="!loading">
        <div class="col-lg-3 col-md-6 col-sm-6 col-xs-12">
            <div class="info-box infobox-type-2 hover-zoom-effect hover-expand-effect bg-success">
                <div class="icon"><i class="fa fa-user-circle"></i></div>
                <div class="content" style="min-height: 1474px;">
                    <div class="text"># Usuarios</div>
                    <div class="number count-to" data-from="0" data-to="245" data-speed="1000"
                    data-fresh-interval="20">{{users.length}}</div>
                </div>
            </div>
        </div>
        <div class="col-lg-3 col-md-6 col-sm-6 col-xs-12">
            <div class="info-box infobox-type-2 hover-zoom-effect hover-expand-effect bg-primary">
                <div class="icon"><i class="fa fa-paw"></i></div>
                <div class="content" style="min-height: 1474px;">
                    <div class="text"># Mascotas</div>
                    <div class="number count-to" data-from="0" data-to="348" data-speed="1000"
                    data-fresh-interval="20">{{pets.length}}</div>
                </div>
            </div>
        </div>
        <div class="col-lg-3 col-md-6 col-sm-6 col-xs-12">
            <div class="info-box infobox-type-2 hover-zoom-effect hover-expand-effect bg-warning">
                <div class="icon"><i class="fa fa-envelope"></i></div>
                <div class="content" style="min-height: 1474px;">
                    <div class="text"># Mensajes</div>
                    <div class="number count-to" data-from="0" data-to="143" data-speed="1000"
                    data-fresh-interval="20">0</div>
                </div>
            </div>
        </div>
        <div class="col-lg-3 col-md-6 col-sm-6 col-xs-12">
            <div class="info-box infobox-type-2 hover-zoom-effect hover-expand-effect bg-danger">
                <div class="icon"><i class="fa fa-heart"></i></div>
                <div class="content" style="min-height: 1474px;">
                    <div class="text"># Otros</div>
                    <div class="number count-to" data-from="0" data-to="2158" data-speed="1500"
                    data-fresh-interval="20">0</div>
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
  name: 'StatsAdmin',
  data () {
    return ({
      loading: true
    })
  },
  computed: {
    ...mapGetters({
      users: 'getUsers',
      pets: 'getPets'
    })
  },
  beforeMount () {
    this.listUsers()
    .then(() => { this.loading = false })
    .catch(() => {
      this.loading = false
    })
    this.allPets()
    .then(() => {
      this.loading = false
    })
    .catch(() => {
      this.loading = false
    })
  },
  methods: {
    ...mapActions([
      'listUsers',
      'allPets'
    ])
  }
}
</script>

<style lang="css">
</style>
