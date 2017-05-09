<template>
  <div class="panel panel-default">
    <div class="padding10">
      <span class="titlePanel">Inicio</span>
      <hr class="hrDogyy hrDogyyNotMargin">
    </div>
    <div class="panel-body">
      <div class="col-md-12">
          <div class="alert alert-success" role="alert">
            <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
            <span>Alert para notificaciones...</span>
          </div>
      </div>
      <div class="col-md-12">
        <div class="jumbotron">
          <h2>Bienvenido a MrDoggy!</h2>
        </div>
      </div>
      <div class="col-md-2 pull-right">
          <button class="btn btn-primary" type="button">
            Messages <span class="badge">4</span>
          </button>
      </div>
      <div class="col-md-2 pull-right">
          <button class="btn btn-default" type="button">
            Chats <span class="badge">40</span>
          </button>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'HomeAdmin'
}
</script>
