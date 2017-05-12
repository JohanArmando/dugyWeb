<template>
  <div>
    <div class="panel panel-default">
      <div class="padding10">
        <span class="titlePanel">Mascotas</span>
        <hr class="hrDogyy hrDogyyNotMargin">
      </div>
      <div class="panel-body">
        <div v-if="!loading">
          <div class="row">
            <div class="col-md-12">
              <div class="col-md-3" v-if="filteredPets.length > 0" v-for="pet in filteredPets">
                  <div class="text-center boxDoggy">
                    <div class="row">
                        <div class="col-md-6 top10">
                          <img v-if="pet.photos[0]" :src="pet.photos[0].thumbnail"
                                class="img-responsive img-circle imgProfile">
                          <img v-else src="http://lemon-law.net/wp-content/uploads/pet-icon.png"
                                class="img-responsive img-circle imgProfile">
                        </div>
                        <div class="col-md-6 top20">
                          <p><strong>{{ pet.name }}</strong></p>
                          <p><span class="label label-primary"><i class="fa fa-user"></i> {{pet.owner.name}}</span></p>
                        </div>
                        <div class="col-md-12">
                            <p><i class="fa fa-paw"></i> {{ pet.race.name }}</p>
                            <p><i class="fa fa-calendar"></i> ({{ pet.born_date.substring(0,10) }})</p>
                            <p><i class="fa fa-minus-circle"></i> {{ pet.size.name}}</p>
                        </div>
                    </div>
                </div>
              </div>
              <div v-if="filteredPets.length == 0" class="col-md-12">
                <p>No tiene mascotas asignadas...</p>
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
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'UserPets',
  data () {
    return ({
      loading: true
    })
  },
  computed: {
    ...mapGetters({
      pets: 'getPets'
    }),
    filteredPets () {
      return this.pets.filter(item => {
        return item.owner.id === parseInt(this.$route.params.id)
      })
    }
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
    ...mapActions([
      'allPets'
    ])
  }
}
</script>
