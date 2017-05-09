<template lang="html">
  <div>
    <form>
      <div class="col-md-12">
        <div class="text-center">
              <input type="file" class="hidden" id="file" @change="onFileChange">
              <img id="av" v-if="user.avatar" :src="user.avatar.thumbnail" class="center-block img-responsive img-thumbnail img-circle imgMedium" />
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
      form: {},
      loadImage: false
    })
  },
  computed: {
    ...mapGetters({
      status: 'getStatus',
      user: 'getPet'
    })
  },
  beforeMount () {
    this.showUser(this.$route.params.id)
    .then(user => {})
  },
  methods: {
    updateValue (attribute, e) {
      this.aux_user[attribute] = e.target.value
    },
    ...mapActions([
      'showUser',
      'editUser'
    ]),
    onFileChange (e) {
      this.loadImage = true
      var files = e.target.files || e.dataTransfer.files
      this.form.name = files[0].name
      if (!files.length) {
        return
      }
      this.createImage(files[0])
    },
    createImage (file) {
      var reader = new FileReader()
      reader.onload = (e) => {
        this.form.avatar = e.target.result
        var vm = this
        vm.loading = true
        vm.editUser({id: vm.user.id, avatar: { name: vm.form.name, avatar: e.target.result }}).then(user => {
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
