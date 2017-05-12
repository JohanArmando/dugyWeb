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
            <div class="col-md-3" v-for="plan in plans">
              <div class="center-block imgPlanBack">
                <img :src="plan.logo.original" class="img-responsive">
                <div class="textFront text-center col-md-11">
                  <p><h3><strong>{{ plan.name }}</strong></h3></p>
                  <p><h4>$ {{ plan.price }}</h4></p>
                  <p> {{ plan.expiration_days }} Dias</p>
                </div>
              </div>
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

<style>
  .imgPlanBack{position: relative;}
  .textFront{position:absolute;top:10px;left:10px;}
  .textFront p {
    margin: 2px !important;
  }
  .textFront h3{color: #FFF }
</style>
