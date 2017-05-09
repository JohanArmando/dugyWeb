<template lang="html">
  <div>
    <div class="dashboard-heading">
        <div class="row clearfix">
            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-6">
                <h1>
                    Inicio
                    <small>Lorem ipsum dolor sit amet, ut sea</small>
                </h1>
            </div>
        </div>
    </div>
    <div class="page-body">
      <div class="row clearfix">
          <div class="col-lg-3 col-md-6 col-sm-6 col-xs-12">
              <div class="info-box infobox-type-2 hover-zoom-effect hover-expand-effect bg-success">
                  <div class="icon"><i class="fa fa-shopping-cart"></i></div>
                  <div class="content" style="min-height: 1474px;">
                      <div class="text">NEW ORDERS</div>
                      <div class="number count-to" data-from="0" data-to="245" data-speed="1000" data-fresh-interval="20">245</div>
                  </div>
              </div>
          </div>
          <div class="col-lg-3 col-md-6 col-sm-6 col-xs-12">
              <div class="info-box infobox-type-2 hover-zoom-effect hover-expand-effect bg-primary">
                  <div class="icon"><i class="fa fa-user-circle"></i></div>
                  <div class="content" style="min-height: 1474px;">
                      <div class="text">NEW MEMBERS</div>
                      <div class="number count-to" data-from="0" data-to="348" data-speed="1000" data-fresh-interval="20">348</div>
                  </div>
              </div>
          </div>
          <div class="col-lg-3 col-md-6 col-sm-6 col-xs-12">
              <div class="info-box infobox-type-2 hover-zoom-effect hover-expand-effect bg-warning">
                  <div class="icon"><i class="fa fa-envelope"></i></div>
                  <div class="content" style="min-height: 1474px;">
                      <div class="text">BOOKMARKS</div>
                      <div class="number count-to" data-from="0" data-to="143" data-speed="1000" data-fresh-interval="20">143</div>
                  </div>
              </div>
          </div>
          <div class="col-lg-3 col-md-6 col-sm-6 col-xs-12">
              <div class="info-box infobox-type-2 hover-zoom-effect hover-expand-effect bg-danger">
                  <div class="icon"><i class="fa fa-heart"></i></div>
                  <div class="content" style="min-height: 1474px;">
                      <div class="text">LIKES</div>
                      <div class="number count-to" data-from="0" data-to="2158" data-speed="1500" data-fresh-interval="20">2158</div>
                  </div>
              </div>
          </div>
          <div class="col-lg-12 col-md-12 col-sm-6 col-xs-12">
              <div class="panel panel-default" id="panel-fullscreen">
                  <div class="panel-heading">
                      Info
                      <div class="panel-controls">
                          <a href="javascript:void(0);" class="panel-fullscreen" data-toggle="tooltip"
                              data-title="Expandir" data-placement="bottom" data-original-title=""title="">
                              <i class="fa fa-expand hidden"></i>
                          </a>
                          <a class="panel-collapsable" role="button" data-toggle="collapse" href="#collapse1">
                              <i class="fa fa-chevron-up"></i>
                              <i class="fa fa-chevron-down"></i>
                          </a>
                      </div>
                  </div>
                  <div class="panel-body" id="collapse1">
                      <form class="form-horizontal">
                          <div class="form-group">
                              <div class="col-sm-6">
                                  <label>HEX CODE</label>
                                  <div class="input-group colorpicker-component colorpicker-element">
                                      <input type="text" value="#29AFA0" class="form-control">
                                      <span class="input-group-addon"><i style="background-color: rgb(0, 170, 187);"></i></span>
                                  </div>
                              </div>
                              <div class="col-sm-6">
                                  <label>RGB(A) CODE</label>
                                  <div class="input-group colorpicker-component colorpicker-element">
                                      <input type="text" value="rgba(0,0,0,0.7)" class="form-control">
                                      <span class="input-group-addon"><i style="background-color: rgba(0, 0, 0, 0.701961);"></i></span>
                                  </div>
                              </div>
                          </div>
                      </form>
                  </div>
              </div>
              <div class="panel panel-default">
          <div class="panel-heading">
              TEXT STYLES
              <small>You can use classes which names are
                <code>.font-bold, .font-italic, .font-underline, .font-line-through, .font-overline</code>
              </small>
              <div class="panel-controls">
                <a href="javascript:void(0);" class="panel-fullscreen" data-toggle="tooltip"
                  data-title="Expandir" data-placement="bottom" data-original-title=""title="">
                  <i class="fa fa-expand hidden"></i>
                </a>
                <a class="panel-collapsable" data-toggle="collapse" href="#collapse2" >
                  <i class="fa fa-chevron-up"></i>
                  <i class="fa fa-chevron-down"></i>
                </a>
              </div>
          </div>
          <div class="panel-body" id="collapse2">
              <div class="row clearfix">
                  <div class="col-lg-2 col-md-2 col-sm-6 col-xs-6">
                      <p>
                          <b>Normal</b>
                      </p>
                      <p>Default text</p>
                      <p class="col-primary">Text primary color</p>
                      <p class="col-success">Text success color</p>
                      <p class="col-danger">Text danger color</p>
                      <p class="col-warning">Text warning color</p>
                  </div>
                  <div class="col-lg-2 col-md-2 col-sm-6 col-xs-6">
                      <p>
                          <b>Bold</b>
                      </p>
                      <p class="font-bold">Default text</p>
                      <p class="font-bold col-primary">Text primary color</p>
                      <p class="font-bold col-success">Text success color</p>
                      <p class="font-bold col-danger">Text danger color</p>
                      <p class="font-bold col-warning">Text warning color</p>
                  </div>
                  <div class="col-lg-2 col-md-2 col-sm-6 col-xs-6">
                      <p>
                          <b>Italic</b>
                      </p>
                      <p class="font-italic">Default text</p>
                      <p class="font-italic col-primary">Text primary color</p>
                      <p class="font-italic col-success">Text success color</p>
                      <p class="font-italic col-danger">Text danger color</p>
                      <p class="font-italic col-warning">Text warning color</p>
                  </div>
                  <div class="col-lg-2 col-md-2 col-sm-6 col-xs-6">
                      <p>
                          <b>Underline</b>
                      </p>
                      <p class="font-underline">Default text</p>
                      <p class="font-underline col-primary">Text primary color</p>
                      <p class="font-underline col-success">Text success color</p>
                      <p class="font-underline col-danger">Text danger color</p>
                      <p class="font-underline col-warning">Text warning color</p>
                  </div>
                  <div class="col-lg-2 col-md-2 col-sm-6 col-xs-6">
                      <p>
                          <b>Line Through</b>
                      </p>
                      <p class="font-line-through">Default text</p>
                      <p class="font-line-through col-primary">Text primary color</p>
                      <p class="font-line-through col-success">Text success color</p>
                      <p class="font-line-through col-danger">Text danger color</p>
                      <p class="font-line-through col-warning">Text warning color</p>
                  </div>
                  <div class="col-lg-2 col-md-2 col-sm-6 col-xs-6">
                      <p>
                          <b>Overline</b>
                      </p>
                      <p class="font-overline">Default text</p>
                      <p class="font-overline col-primary">Text primary color</p>
                      <p class="font-overline col-success">Text success color</p>
                      <p class="font-overline col-danger">Text danger color</p>
                      <p class="font-overline col-warning">Text warning color</p>
                  </div>
              </div>
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

<style lang="css">
</style>
