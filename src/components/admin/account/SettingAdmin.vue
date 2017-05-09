<template>
  <div class="panel panel-default">
    <div class="panel-heading panel-heading-doggy">
    <div class="title">Configuraci&oacute;n</div>
    </div>
    <div class="panel-body">
        <div class="row">
          <div class="col-md-6">
              <form>
                  <div class="form-group">
                    <label>Nombre</label>
                    <input type="text" class="form-control" v-model="user.name">
                  </div>
                  <div class="form-group">
                    <label>Apellido</label>
                    <input type="text" class="form-control" v-model="user.last_name">
                  </div>
                  <div class="form-group">
                    <label>Email</label>
                    <input type="text" class="form-control" v-model="user.email" disabled>
                  </div>
                  <div class="form-group">
                    <label>Documento</label>
                    <input type="number" class="form-control" v-model="user.document">
                  </div>
                  <div class="form-group">
                    <label>Phone</label>
                    <input type="number" class="form-control" v-model="user.phone">
                  </div>
                  <div class="form-group">
                    <button type="button" class="btn btn-primary btn-doggy">Guardar Datos</button>
                  </div>
              </form>
          </div>
          <div class="col-md-6">
              <changed-password></changed-password>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import ChangedPassword from '@/components/admin/account/ChangedPassword'

export default {
  name: 'ProfileAdmin',
  computed: {
    ...mapGetters({
      status: 'getStatus',
      user: 'getUser'
    })
  },
  components: {
    ChangedPassword
  }
}
</script>
