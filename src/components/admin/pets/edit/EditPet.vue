<template>
    <div class="panel panel-default">
      <div class="panel-heading panel-heading-doggy">
        <div class="title">Editar Mascota</div>
      </div>
      <div class="panel-body">
        <div v-if="!loading">
          <form @submit.prevent="putPet">
          <div class="row">
            <div class="col-md-6">
                <div class="form-group">
                   <label>Nombre</label>
                   <input v-on:input="updateValue('name',$event)" :value="pet.name" class="form-control" required/>
                </div>
                <div class="form-group">
                   <label>Tama&ntilde;o</label>
                   <select :value="pet.size.id" v-on:input="updateValue('size',$event)" class="form-control" required>
                     <option v-for="size in sizes" v-bind:value="size.id">
                       {{ size.slug }}
                     </option>
                   </select>
                </div>
                <div class="form-group">
                   <label>Fecha de Nacimiento</label>
                   <input v-on:input="updateValue('born_date',$event)" :value="pet.born_date.substring(0,10)" class="form-control" type="date" required/>
                </div>
                <div class="form-group">
                   <label>Raza</label>
                   <select :value="pet.race.id" v-on:input="updateValue('race',$event)" class="form-control" required>
                     <option v-for="race in races" v-bind:value="race.id">
                       {{ race.name }}
                     </option>
                   </select>
                </div>
            </div>
            <div class="col-md-6">
              <div class="form-group">
                 <label>Usuario</label>
                 <select :value="pet.owner.id" v-on:input="updateValue('owner',$event)" class="form-control" required>
                   <option v-for="user in users" v-bind:value="user.id">
                     {{ user.name }} {{ user.last_name }}
                   </option>
                 </select>
              </div>
              <div class="form-group">
                  <image-pet></image-pet>
              </div>
            </div>
            <div class="col-md-12">
              <div class="form-group">
                  <button type="submit" id="edit" class="btn btn-primary btn-doggy top20">Save</button>
              </div>
            </div>
          </div>
        </form>
      </div>
      <div v-else class="col-md-12">
          <img class="img-responsive center-block" src="../../../../assets/img/changed.gif">
          <span class="pull-right"><i class="fa fa-spinner fa-spin"></i> Cargando...</span>
      </div>
      </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import ImagePet from './ImagePet'

export default {
  name: 'EditPet',
  data () {
    return {
      form: {},
      errors: [],
      loading: true
    }
  },
  computed: {
    ...mapGetters({
      pet: 'getPet',
      users: 'getUsers',
      races: 'getRaces',
      sizes: 'getSizes'
    })
  },
  beforeMount () {
    this.showPet(this.$route.params.id)
    .then(() => {
      this.loading = false
    })
    .catch(() => {
      this.loading = false
    })
    this.listUsers()
    this.allRaces()
    this.allSizes()
  },
  methods: {
    putPet () {
      var vm = this
      vm.loading = true
      window.$('#edit').button('loading')
      this.form.id = this.pet.id
      vm.editPet(this.form).then(pet => {
        vm.loading = false
        vm.$router.replace(this.$route.query.redirect || '/admin/pets')
      })
      .catch(message => {
        window.$('#edit').button('reset')
        vm.error = false
        vm.loading = false
        vm.error = true
      })
    },
    updateValue (attribute, e) {
      this.form[attribute] = e.target.value
    },
    ...mapActions([
      'showPet',
      'editPet',
      'listUsers',
      'allRaces',
      'allSizes'
    ])
  },
  components: {
    ImagePet
  }
}
</script>
