<template lang="html">
  <aside class="sidebar menu">
      <nav class="sidebar-nav">
          <ul class="metismenu">
              <li class="title">
                  Dashboard
              </li>
              <li v-bind:class="{'active': subIsActive('/walker/dashboard')}">
                  <router-link to="/walker/dashboard">
                      <i class="fa fa-home"></i>
                      <span class="nav-label"> Inicio</span>
                  </router-link>
              </li>
              <li v-bind:class="{'active': subIsActive('/walker/pets')}">
                  <router-link to="/walker/pets">
                      <i class="fa fa-paw"></i>
                      <span class="nav-label"> Mascotas</span>
                  </router-link>
              </li>
              <li>
                  <a href="#">
                      <i class="fa fa-map-marker"></i>
                      <span class="nav-label"> Rutas</span>
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
