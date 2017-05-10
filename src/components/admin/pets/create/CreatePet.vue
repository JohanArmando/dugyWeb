<template>
    <div class="panel panel-default">
      <div class="panel-heading panel-heading-doggy">
        <div class="title">Crear Mascota</div>
      </div>
      <div class="panel-body">
        <form @submit.prevent="doRegisterPet">
          <div class="row">
            <div class="col-md-6">
                <div class="form-group">
                   <label>Nombre</label>
                   <input v-model="form.name" class="form-control" required/>
                </div>
                <div class="form-group">
                   <label>Tama&ntilde;o</label>
                   <select v-model="form.size" class="form-control" required>
                     <option v-for="size in sizes" v-bind:value="size.id">
                       {{ size.slug }}
                     </option>
                   </select>
                </div>
                <div class="form-group">
                   <label>Fecha de Nacimiento</label>
                   <input v-model="form.born_date" class="form-control" type="date" required/>
                </div>
                <div class="form-group">
                   <label>Raza</label>
                   <select v-model="form.race" class="form-control" required>
                     <option v-for="race in races" v-bind:value="race.id">
                       {{ race.name }}
                     </option>
                   </select>
                </div>
            </div>
            <div class="col-md-6">
              <div class="form-group">
                 <label>Usuario</label>
                 <select v-model="form.owner" class="form-control" required>
                   <option v-for="user in users" v-bind:value="user.id">
                     {{ user.name }} {{ user.last_name }}
                   </option>
                 </select>
              </div>
              <div v-if="!form.photos[0].avatar">
                  <input type="file" class="hidden" id="file" @change="onFileChange">
                  <label for="file" class="img-thumbnail">
                      <i class="fa fa-plus"></i> Agregar imagen
                  </label>
              </div>
              <div v-else>
                  <img  id="ava" :src="form.photos[0].avatar" :class="{'hidden' : image == true}" class="img-responsive img-thumbnail img-edit" />
                  <img  :src="form.photos[0].avatar" id="av" :class="{'hidden' : image == false}" class="img-responsive img-thumbnail img-edit" />
                  <button @click="removeImage" class="btn btn-default text-center"><i class="fa fa-trash"></i> Remover imagen</button>
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
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'CreatePet',
  data () {
    return {
      form: {
        name: '',
        born_date: '',
        race: '',
        size: '',
        owner: '',
        photos: [
          {
            name: '',
            avatar: ''
          }
        ]
      },
      errors: [],
      image: false
    }
  },
  computed: {
    ...mapGetters({
      users: 'getUsers',
      races: 'getRaces',
      sizes: 'getSizes'
    })
  },
  beforeMount () {
    this.listUsers()
    this.allRaces()
    this.allSizes()
  },
  methods: {
    doRegisterPet () {
      var vm = this
      vm.loading = true
      window.$('#edit').button('loading')
      vm.registerPet(this.form).then(pet => {
        vm.loading = false
        vm.$router.replace(this.$route.query.redirect || '/admin/pets')
      })
      .catch(error => {
        window.$('#edit').button('reset')
        vm.error = false
        vm.loading = false
        vm.error = true
        vm.errors = error.response.data
      })
    },
    ...mapActions([
      'registerPet',
      'listUsers',
      'allRaces',
      'allSizes'
    ]),
    onFileChange (e) {
      var files = e.target.files || e.dataTransfer.files
      this.form.photos[0].name = files[0].name
      if (!files.length) {
        return
      }
      this.createImage(files[0])
    },
    createImage (file) {
      var reader = new FileReader()
      reader.onload = (e) => {
        this.form.photos[0].avatar = e.target.result
      }
      reader.readAsDataURL(file)
    },
    removeImage: function (e) {
      this.form.photos[0].avatar = ''
      this.image = true
    }
  }
}
</script>
