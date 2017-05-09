<template>
    <div class="list-group top20">
      <router-link to="/admin/dashboard" v-bind:class="{'active': subIsActive('/admin/dashboard')}" class="list-group-item listDoggy">
        <i class="fa fa-home"></i> Inicio
      </router-link>
      <router-link to="/admin/stats" v-bind:class="{'active': subIsActive('/admin/stats')}" class="list-group-item listDoggy">
        <i class="fa fa-line-chart"></i> Estadisticas
      </router-link>
      <router-link to="/admin/users" v-bind:class="{'active': subIsActive('/admin/users')}" class="list-group-item listDoggy">
        <i class="fa fa-user"></i> Usuarios
      </router-link>
      <router-link to="/admin/pets" v-bind:class="{'active': subIsActive('/admin/pets')}" class="list-group-item listDoggy">
        <i class="fa fa-paw"></i> Mascotas
      </router-link>
      <router-link to="/admin/calendar" v-bind:class="{'active': subIsActive('/admin/calendar')}" class="list-group-item listDoggy">
        <i class="fa fa-calendar"></i> Agenda
      </router-link>
      <router-link to="/admin/plans" v-bind:class="{'active': subIsActive('/admin/plans')}" class="list-group-item listDoggy">
        <i class="fa fa-file-text"></i> Planes
      </router-link>
    </div>
</template>

<script>

export default {
  name: 'SideBarAdmin',
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
