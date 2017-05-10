<template>
  <div id="app">
      <router-view></router-view>
  </div>
</template>
<script>
import { mapActions } from 'vuex'

export default {
  name: 'App',
  mounted () {
    if (localStorage.token) {
      this.session().then(user => {
        this.loading = false
        this.$router.replace(this.$route.path || '/admin/dashboard')
      })
      .catch(message => {
        this.loading = false
        this.$router.replace(this.$route.query.redirect || '/')
      })
    } else {
      this.loading = false
      this.$router.replace('/')
    }
  },
  methods: {
    ...mapActions([
      'session'
    ])
  }
}
</script>

<style lang="sass">
  @import 'src/assets/css/main';
</style>
