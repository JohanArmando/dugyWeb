<template>
    <div class="panel panel-default">
      <div class="panel-heading panel-heading-doggy">
        <div class="title">Crear Plan</div>
      </div>
      <div class="panel-body">
        <form @submit.prevent="doRegisterPlan">
          <div class="row">
            <div class="col-md-6">
                <div class="form-group">
                   <label>Nombre</label>
                   <input v-model="form.name" class="form-control" required/>
                </div>
                <div class="form-group">
                   <label>Precio</label>
                   <input v-model="form.price" class="form-control" type="number" required/>
                </div>
                <div class="form-group">
                   <label>Expiracion</label>
                   <input v-model="form.expiration_days" class="form-control" type="number" required/>
                </div>
            </div>
            <div class="col-md-6">
              <div v-if="!form.logo.avatar">
                  <input type="file" class="hidden" id="file" @change="onFileChange">
                  <label for="file" class="img-thumbnail">
                      <i class="fa fa-plus"></i> Agregar imagen
                  </label>
              </div>
              <div v-else>
                  <img  id="ava" :src="form.logo.avatar" :class="{'hidden' : image == true}" class="img-responsive img-thumbnail img-edit" />
                  <img  :src="form.logo.avatar" id="av" :class="{'hidden' : image == false}" class="img-responsive img-thumbnail img-edit" />
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
import { mapActions } from 'vuex'

export default {
  name: 'CreatePlan',
  data () {
    return {
      form: {
        name: '',
        price: '',
        logo: {
          avatar: '',
          name: ''
        }
      },
      image: false
    }
  },
  methods: {
    doRegisterPlan () {
      var vm = this
      vm.loading = true
      window.$('#edit').button('loading')
      vm.registerPlan(this.form).then(plan => {
        vm.loading = false
        vm.$router.replace(this.$route.query.redirect || '/admin/plans')
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
      'registerPlan'
    ]),
    onFileChange (e) {
      var files = e.target.files || e.dataTransfer.files
      this.form.logo.name = files[0].name
      if (!files.length) {
        return
      }
      this.createImage(files[0])
    },
    createImage (file) {
      var reader = new FileReader()
      reader.onload = (e) => {
        this.form.logo.avatar = e.target.result
      }
      reader.readAsDataURL(file)
    },
    removeImage: function (e) {
      this.form.logo.avatar = ''
      this.image = true
    }
  }
}
</script>
