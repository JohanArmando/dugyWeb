<template lang="html">
  <div class="panel panel-default">
    <div class="padding10">
      <span class="titlePanel">Agenda</span>
      <hr class="hrDogyy hrDogyyNotMargin">
    </div>
    <div class="panel-body">
      <div v-if="!loading">
          <div class="col-md-6 col-lg-8">
            <div class="table-responsive">
              <table class="table table-hover">
                <tr>
                  <th>Paseador</th>
                  <th>Cliente</th>
                  <th>Nombre Mascota</th>
                  <th>Hora</th>
                </tr>
                <tr v-for="calendar in calendars">
                  <td>{{calendar.walker}}</td>
                  <td>{{calendar.user}}</td>
                  <td>{{calendar.pet}}</td>
                  <td>{{calendar.hour}}</td>
                </tr>
              </table>
            </div>
          </div>
          <div class="col-md-6 col-lg-4">

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
  name: 'Calendar',
  data () {
    return ({
      loading: false,
      calendars: [
        {
          walker: 'Pepito',
          user: 'John Doe',
          pet: 'Duglas',
          hour: '8:00 am a 10:00 am'
        }
      ]
    })
  }
}
</script>

<style lang="css">
</style>
