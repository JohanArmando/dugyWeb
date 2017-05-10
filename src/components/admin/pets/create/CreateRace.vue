<template>
    <div class="panel panel-default">
      <div class="panel-heading panel-heading-doggy">
        <div class="title">Crear Raza</div>
      </div>
      <div class="panel-body">
        <form @submit.prevent="doRegisterRace">
          <div class="row">
            <div class="col-md-6">
              <div class="form-group">
                 <label>Nombre</label>
                 <input v-model="form.name" class="form-control" required/>
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group">
                 <label>Description</label>
                 <input v-model="form.description" class="form-control" required/>
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
  name: 'CreateRace',
  data () {
    return {
      form: {
        name: '',
        description: ''
      },
      errors: []
    }
  },
  methods: {
    doRegisterRace () {
      var vm = this
      vm.loading = true
      window.$('#edit').button('loading')
      vm.registerRace(this.form).then(race => {
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
      'registerRace'
    ])
  }
}
</script>
