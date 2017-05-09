<template>
  <div class="container">
    <div class="row">
      <div class="col-md-offset-1 col-md-10 text-center bottom50" id="plans">
        <div class="top80 hidden-xs hidden-sm"></div>
        <h1 class="black"><strong>Planes</strong></h1>
        <p class="textSmall">Mantente en contacto con tu familia y amigos
        usando la video llamada de whatsapp. Es gratis,segura y f&aacute;cil de usar.
         Consulta con tu operador para m&aacute;s informaci&oacute;n sobre el coste por consumo de
        datos moviles. #consejoswhatsapp #videollamadas.</p>
        <div class="row top50">
           <div class="col-md-3 text-center">
              <img class="img-responsive" src="../../../assets/img/plans/plan1.png">
           </div>
           <div class="col-md-3 text-center">
              <img class="img-responsive" src="../../../assets/img/plans/plan2.png">
           </div>
           <div class="col-md-3 text-center">
               <img class="img-responsive" src="../../../assets/img/plans/plan3.png">
           </div>
           <div class="col-md-3 text-center">
              <img class="img-responsive" src="../../../assets/img/plans/plan4.png">
           </div>

            <div class="col-md-3" v-for="plan in plans">
              <div class="center-block">
                <img :src="plan.logo.original" class="img-responsive imgPlan">
              </div>
               <p><strong>{{ plan.name }}</strong></p>
               <p>$ {{ plan.price }}</p>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'HomePlan',
  data () {
    return {
      loading: false,
      error: false
    }
  },
  beforeMount () {
    this.allPlans()
  },
  computed: {
    ...mapGetters({
      plans: 'getPlans'
    })
  },
  methods: {
    ...mapActions([
      'allPlans'
    ])
  }

}
</script>
