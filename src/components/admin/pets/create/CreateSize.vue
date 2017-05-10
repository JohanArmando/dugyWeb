<template>
    <div class="panel panel-default">
      <div class="panel-heading panel-heading-doggy">
        <div class="title">Crear Size</div>
      </div>
      <div class="panel-body">
        <form @submit.prevent="doRegisterSize">
          <div class="row">
            <div class="col-md-6">
              <div class="form-group">
                 <label>Nombre</label>
                 <input v-model="form.name" placeholder="small medium" class="form-control" required/>
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group">
                 <label>Slug</label>
                 <input v-model="form.slug" placeholder="sm" class="form-control" required/>
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
  name: 'CreateSize',
  data () {
    return {
      form: {
        name: '',
        slug: ''
      },
      errors: []
    }
  },
  methods: {
    doRegisterSize () {
      var vm = this
      vm.loading = true
      window.$('#edit').button('loading')
      vm.registerSize(this.form).then(size => {
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
      'registerSize'
    ])
  }
}
</script>
