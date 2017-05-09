<template>
    <div class="panel panel-default">
      <div class="padding10">
        <span class="titlePanel">Planes</span>
        <router-link to="/admin/plan" >
          <span class="marginRight10 pull-right">
            <i class="fa fa-plus"></i> Crear Plan
          </span>
        </router-link>
        <hr class="hrDogyy hrDogyyNotMargin">
      </div>
      <div class="panel-body">
        <div v-if="!loading">
            <div class="col-md-6" v-for="plan in plans">
              <div class="boxDoggy">
                <div class="row">
                  <div class="col-md-6">
                    <img :src="plan.logo.original" class="img-responsive imgPlan">
                  </div>
                  <div class="col-md-6 top20">
                    <p><strong>{{ plan.name }}</strong></p>
                    <span>$ {{ plan.price }}</span>
                    <span><i class="fa fa-calendar"></i> {{ plan.expiration_days }}</span>
                    <p>
                      <router-link :to="'/admin/plan/'+plan.id" class="colorDoggy marginRight10">
                        <span class="label label-default label-doggy">
                          <i class="fa fa-edit"></i> Editar
                        </span>
                      </router-link>
                      <span class="label label-default label-doggy-delete cursorPointer" @click="deletePlan(plan)">
                        <i class="fa fa-trash"></i> Eliminar
                      </span>
                    </p>
                  </div>
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
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'Plans',
  data () {
    return ({
      loading: true
    })
  },
  computed: {
    ...mapGetters({
      plans: 'getPlans'
    })
  },
  beforeMount () {
    this.allPlans()
    .then(() => {
      this.loading = false
    })
    .catch(() => {
      this.loading = false
    })
  },
  methods: {
    deletePlan () {
      var vm = this
      vm.deletePlan(this.plan).then(plan => {
        vm.loading = false
        vm.$router.replace(this.$route.query.redirect || '/admin/plans')
      })
      .catch(message => {
        vm.error = false
        vm.loading = false
        vm.error = true
      })
    },
    ...mapActions([
      'allPlans',
      'deletePlan'
    ])
  }
}
</script>
