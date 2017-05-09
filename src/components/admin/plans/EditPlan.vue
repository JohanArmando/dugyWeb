<template>
    <div class="panel panel-default">
      <div class="panel-heading panel-heading-doggy">
        <div class="title">{{ plan.name }}</div>
      </div>
      <div class="panel-body">
        <form  @submit.prevent="putPlan">
          <div class="row padding10">
            <div class="col-md-4">
              <div class="text-center">
                  <div class="center-block">
                    <img :src="plan.logo.thumbnail" alt=""
                    class="img-responsive img-circle imgMedium img-thumbnail">
                  </div>
                  <div class="col-md-12 top10">
                    <h4><strong>{{ plan.name }}</strong></h4>
                    <p><strong>Precio: </strong> {{ plan.price }}</p>
                    <p><strong>Dias: </strong>{{ plan.expiration_days }}</p>
                  </div>
              </div>
            </div>
            <div class="col-md-8 backgroundColorGrey">
              <div class="row">
                <div class="col-md-2">
                    <div class="form-group">
                       <label>Id</label>
                       <input :value="plan.id" class="form-control" disabled/>
                    </div>
                </div>
                <div class="col-md-10">
                    <div class="form-group">
                       <label>Nombre</label>
                       <input v-on:input="updateValue('name',$event)" :value="plan.name" class="form-control" required/>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="form-group">
                       <label>Precio</label>
                       <input v-on:input="updateValue('price',$event)" :value="plan.price" type="number" class="form-control" required/>
                    </div>
                    <div class="form-group">
                       <label>Dias</label>
                       <input v-on:input="updateValue('expiration_days',$event)" :value="plan.expiration_days" type="number" class="form-control" required/>
                    </div>
                </div>
                <div class="col-md-6">
                  <image-plan></image-plan>
                </div>
                <div class="col-md-12">
                  <div class="form-group">
                      <button type="submit" id="edit" class="btn btn-primary btn-doggy top20">Guardar</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import ImagePlan from './ImagePlan'

export default {
  name: 'EditPlan',
  data () {
    return {
      form: {}
    }
  },
  computed: {
    ...mapGetters({
      plan: 'getPlan'
    })
  },
  beforeMount () {
    this.showPlan(this.$route.params.id)
    .then(plan => {})
  },
  methods: {
    putPlan () {
      var vm = this
      vm.loading = true
      window.$('#edit').button('loading')
      this.form.id = this.plan.id
      vm.editPlan(this.form).then(plan => {
        vm.loading = false
        vm.$router.replace(this.$route.query.redirect || '/admin/plans')
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
      'showPlan',
      'editPlan'
    ])
  },
  components: {
    ImagePlan
  }
}
</script>
