<template lang="html">
  <div>
    <form>
      <div class="col-md-12">
        <div class="text-center">
              <input type="file" class="hidden" id="file" @change="onFileChange">
              <img id="av" v-if="pet.photos[0].thumbnail" :src="pet.photos[0].thumbnail" class="center-block img-responsive img-thumbnail img-circle imgMedium" />
              <div class="text-center" v-if="loadImage">
                <strong><i class="fa fa-spinner fa-spin"></i> Cargando...</strong>
              </div>
              <label for="file" class="img-thumbnail top10">
                  <i class="fa fa-plus"></i> Cambiar imagen
              </label>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'ImagePet',
  data () {
    return ({
      form: {
        photos: [
          {
            name: '',
            avatar: ''
          }
        ]
      },
      loadImage: false
    })
  },
  computed: {
    ...mapGetters({
      status: 'getStatus',
      pet: 'getPet'
    })
  },
  beforeMount () {
    this.showPet(this.$route.params.id)
    .then(pet => {})
  },
  methods: {
    updateValue (attribute, e) {
      this.form[attribute] = e.target.value
    },
    ...mapActions([
      'showPet',
      'editPet'
    ]),
    onFileChange (e) {
      this.loadImage = true
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
        var vm = this
        vm.loading = true
        vm.editPet({id: vm.pet.id, photos: { name: vm.form.photos[0].name, avatar: e.target.result }}).then(user => {
          vm.loadImage = false
          vm.loading = false
        })
        .catch(message => {
          vm.error = false
          vm.loading = false
          vm.loadImage = false
          vm.error = true
        })
      }
      reader.readAsDataURL(file)
    }
  }
}
</script>
