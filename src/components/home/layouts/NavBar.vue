<template lang="html">
  <nav class="navbar navbar-default navbar-fixed-top navbar-dog" id="navbar-dog" role="navigation">
    <div class="container">
      <div class="navbar-header">
        <button type="button" class="navbar-toggle toggleDoggy" data-toggle="collapse" data-target="#navbar">
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <a class="navbar-brand" href="#">
            <img class="img-responsive logo" src="../../../assets/img/icono.png">
        </a>
      </div>

      <!-- Collect the nav links, forms, and other content for toggling -->
      <div class="collapse navbar-collapse" id="navbar">
        <ul class="nav navbar-nav">

        </ul>
        <ul class="nav navbar-nav navbar-right">
          <li class="active"><a href="#home">Inicio</a></li>
          <li><a href="#register">Registro</a></li>
          <li><a href="#howWorking">Como Funciona</a></li>
          <li><a href="#plans">Planes</a></li>
          <li><a href="#contact">Contactanos</a></li>
          <li>
            <a data-toggle="modal" data-target="#modal-login"
            class="cursorPointer btn btn-mr top10 ">Iniciar Sesion</a>
          </li>
        </ul>
      </div><!-- /.navbar-collapse -->
    </div><!-- /.container-fluid -->
  </nav>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
  .navbar-fixed-top {
    position: fixed !important;
  }
  .navbar-dog {
    height: 60px;
    box-shadow: 0 2px 5px -2px rgba(0,0,0,.2);
    .navbar-nav > li > a {
      padding-top: 19px;
      padding-bottom: 18px;
    }
    .active a {
      background-color: white;
      padding-bottom: 16px !important;
      border-bottom: 3px solid #29AFA0;
    }
  }
  #navbar {
    border-bottom: 1px solid #ccc;
  }
</style>
