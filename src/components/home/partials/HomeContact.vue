<template>
  <div class="container" id="backgroundContact">
    <div class="row">
      <div class="col-md-7">
        <div class="row">
          <div class="col-md-offset-1 col-md-6  text-left">
            <div class="top100">
              <h1 class="white"><strong>Contacto</strong></h1>
              <strong class="textSmall whiteColor">Envianos tu mensaje</strong>
              <form class="">
                  <div class="form-group">
                    <input placeholder="Email" type="text" class="form-control inputDoggySquare" required>
                  </div>
                  <div class="form-group">
                    <input placeholder="Asunto" type="text" class="form-control inputDoggySquare" required>
                  </div>
                  <div class="form-group">
                    <textarea placeholder="Escribe aqui tu mensaje..."  class="form-control inputDoggySquare noteDoggy" required></textarea>
                  </div>
                  <router-link to="" class="btn btn-mr">Enviar</router-link>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-5">
          <div class="top100 hidden-xs hidden-sm"></div>
          <div class="row">
              <div class="col-md-10 text-center">
                  <p class="textMedium whiteSmall text-center">SIGUENOS EN REDES</p>
              </div>
              <div class="col-md-2 text-center"></div>
              <div class="col-md-offset-2 col-md-2 text-center">
                  <img class="img-responsive imgMedium" src="../../../assets/img/icono_blanco.png">
              </div>
              <div class="col-md-5 text-center">
                  <strong class="textMedium whiteColor">Dugy</strong>
                  <p class="whiteColor psinMarginBottom">instagram.com/Dugy</p>
                  <p class="whiteColor">twitter.com/Dugy</p>
              </div>
              <div class="col-md-10 text-center">
                  <p class="whiteSmall text-center top20">Tel: 322 256 7845/45784</p>
              </div>
              <div class="col-md-2 text-center"></div>
              <div class="col-md-10 top20 bottom110 text-center">
                  <div class="table-responsive">
                   <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d254508.51641089004!2d-74.24789567650163!3d4.648283716972999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9bfd2da6cb29%3A0x239d635520a33914!2sBogot%C3%A1%2C+Colombia!5e0!3m2!1ses!2ses!4v1491341456805"  frameborder="0" style="border:0" allowfullscreen></iframe>
                  </div>
              </div>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>
