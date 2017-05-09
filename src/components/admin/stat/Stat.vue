<template lang="html">
  <div class="panel panel-default">
    <div class="padding10">
      <span class="titlePanel">Estadisticas</span>
      <hr class="hrDogyy hrDogyyNotMargin">
    </div>
    <div class="panel-body">
      <div v-if="loading">
        <div class="col-lg-3 col-md-6 col-sm-6 col-xs-12">
            <div class="info-box infobox-type-2 hover-zoom-effect hover-expand-effect bg-success">
                <div class="icon"><i class="fa fa-user-circle"></i></div>
                <div class="content" style="min-height: 1474px;">
                    <div class="text"># Usuarios</div>
                    <div class="number count-to" data-from="0" data-to="245" data-speed="1000"
                    data-fresh-interval="20">245</div>
                </div>
            </div>
        </div>
        <div class="col-lg-3 col-md-6 col-sm-6 col-xs-12">
            <div class="info-box infobox-type-2 hover-zoom-effect hover-expand-effect bg-primary">
                <div class="icon"><i class="fa fa-shopping-cart"></i></div>
                <div class="content" style="min-height: 1474px;">
                    <div class="text"># Clientes</div>
                    <div class="number count-to" data-from="0" data-to="348" data-speed="1000"
                    data-fresh-interval="20">348</div>
                </div>
            </div>
        </div>
        <div class="col-lg-3 col-md-6 col-sm-6 col-xs-12">
            <div class="info-box infobox-type-2 hover-zoom-effect hover-expand-effect bg-warning">
                <div class="icon"><i class="fa fa-envelope"></i></div>
                <div class="content" style="min-height: 1474px;">
                    <div class="text"># Paseadores</div>
                    <div class="number count-to" data-from="0" data-to="143" data-speed="1000"
                    data-fresh-interval="20">143</div>
                </div>
            </div>
        </div>
        <div class="col-lg-3 col-md-6 col-sm-6 col-xs-12">
            <div class="info-box infobox-type-2 hover-zoom-effect hover-expand-effect bg-danger">
                <div class="icon"><i class="fa fa-heart"></i></div>
                <div class="content" style="min-height: 1474px;">
                    <div class="text"># Servicios</div>
                    <div class="number count-to" data-from="0" data-to="2158" data-speed="1500"
                    data-fresh-interval="20">2158</div>
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
export default {
  name: 'Stats',
  data () {
    return ({
      loading: true
    })
  }
}
</script>

<style lang="css">
</style>
