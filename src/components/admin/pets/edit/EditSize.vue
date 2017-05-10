<template>
    <div class="panel panel-default">
      <div class="panel-heading panel-heading-doggy">
        <div class="title">Edit Tama&ntilde;o</div>
      </div>
      <div class="panel-body">
        <div v-if="!loading">
          <form @submit.prevent="putSize">
            <div class="row">
              <div class="col-md-6">
                <div class="form-group">
                   <label>Nombre</label>
                   <input v-on:input="updateValue('name',$event)" :value="size.name" class="form-control" required/>
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group">
                   <label>Slug</label>
                   <input v-on:input="updateValue('slug',$event)" :value="size.slug" class="form-control" required/>
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

export default {
  name: 'EditRace',
  data () {
    return {
      form: {},
      errors: [],
      loading: true
    }
  },
  computed: {
    ...mapGetters({
      size: 'getSize'
    })
  },
  beforeMount () {
    this.showSize(this.$route.params.id)
    .then(() => {
      this.loading = false
    })
    .catch(() => {
      this.loading = false
    })
  },
  methods: {
    putSize () {
      var vm = this
      vm.loading = true
      window.$('#edit').button('loading')
      this.form.id = this.size.id
      vm.editSize(this.form).then(size => {
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
      'showSize',
      'editSize'
    ])
  }
}
</script>
