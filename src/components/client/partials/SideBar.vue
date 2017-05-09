<template lang="html">
  <aside class="sidebar menu">
      <nav class="sidebar-nav">
          <ul class="metismenu">
              <li class="title">
                  Dashboard
              </li>
              <li v-bind:class="{'active': subIsActive('/client/dashboard')}">
                  <router-link to="/client/dashboard">
                      <i class="fa fa-home"></i>
                      <span class="nav-label"> Inicio</span>
                  </router-link>
              </li>
              <li v-bind:class="{'active': subIsActive('/client/pets')}">
                  <router-link to="/client/pets">
                      <i class="fa fa-paw"></i>
                      <span class="nav-label"> Mis Mascotas</span>
                  </router-link>
              </li>
              <li>
                  <a href="#">
                      <i class="fa fa-check"></i>
                      <span class="nav-label"> Otro</span>
                  </a>
              </li>
              <li>
                  <a href="#">
                      <i class="fa fa-calendar"></i>
                      <span class="nav-label"> Calendario</span>
                  </a>
              </li>
          </ul>
      </nav>
  </aside>
</template>

<script>
export default {
  name: 'SideBarWalker',
  methods: {
    subIsActive (input) {
      const paths = Array.isArray(input) ? input : [input]
      return paths.some(path => {
        return this.$route.path.indexOf(path) === 0
      })
    }
  }
}
</script>

<style lang="css">
</style>
