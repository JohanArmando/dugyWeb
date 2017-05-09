<template>
    <form>
        <div class="form-group">
          <label>Contrase&ntilde;a Actual</label>
          <input type="password" class="form-control" v-model="password">
        </div>
        <div class="form-group">
          <label>Contrase&ntilde;a Nueva</label>
          <input type="password" class="form-control" v-model="passwordNew">
        </div>
        <div class="form-group">
          <label>Repetir Contrase&ntilde;a Nueva</label>
          <input type="password" class="form-control" v-model="RepeatpasswordNew">
        </div>
        <div class="form-group">
          <button type="button" class="btn btn-primary btn-doggy">Cambiar Contrase&ntilde;a</button>
        </div>
    </form>
</template>

<script>

export default {
  name: 'ChangedPasswordAdmin',
  data () {
    return ({
      password: '',
      passwordNew: '',
      RepeatpasswordNew: ''
    })
  }
}
</script>
