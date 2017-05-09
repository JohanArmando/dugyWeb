<template>
 <header>
  <nav class="navbar navbar-default navbar-defa">
    <div class="container-fluid">
        <div class="navbar-header">
            <a href="javascript:void(0);" class="left-toggle-left-sidebar js-left-toggle-left-sidebar"
            v-on:click="toggleSideBar()">
                <i class="fa fa-navicon whiteColor"></i>
            </a>
            <!-- Logo -->
            <a class="navbar-brand brand2" v-bind:class="{ 'width-brand': !sidebar }" href="#">
                <span class="logo-minimized whiteColor">MD</span>
                <span class="logo whiteColor">
                  MrDoggy
                </span>
            </a>
            <!-- #END# Logo -->
        </div>
        <div class="collapse navbar-collapse walker" id="navbar-collapse">
            <!-- Nav Icon -->
          <ul class="nav navbar-nav">
              <li>
                  <a href="javascript:void(0);" class="toggle-left-sidebar js-toggle-left-sidebar"
                  v-on:click="toggleSideBar()">
                      <i class="fa fa-navicon whiteColor"></i>
                  </a>
              </li>
          </ul>
            <ul class="nav navbar-nav navbar-right">
                <!-- User Menu -->
                <li class="dropdown user-menu">
                    <a href="javascript:void(0);" class="dropdown-toggle" data-toggle="dropdown">
                        <img v-if="user.avatar" :src="user.avatar.thumbnail" alt="..." />
                        <span class="hidden-xs whiteColor">{{ user.name }} {{ user.last_name }}</span>
                    </a>
                    <ul class="dropdown-menu">
                        <li class="header">
                            <img v-if="user.avatar" :src="user.avatar.thumbnail" alt="User Avatar" />
                            <div class="user">
                                {{ user.name }} {{ user.last_name }}
                                <div class="title">Paseador</div>
                            </div>
                        </li>
                        <li class="body">
                            <ul>
                                <li>
                                    <router-link :to="'/walker/profile/'+user.id">
                                        <i class="fa fa-user-circle"></i> Perfil
                                    </router-link>
                                </li>
                                <li>
                                    <a href="javascript:void(0);">
                                        <i class="fa fa-key"></i> Cambiar Contrase&ntilde;a
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li class="footer">
                            <div class="row clearfix">
                                <div class="col-xs-5">
                                </div>
                                <div class="col-xs-2"></div>
                                <div class="col-xs-5">
                                    <a @click="doLogout" class="btn btn-default btn-sm btn-block">Salir</a>
                                </div>
                            </div>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    </div>
  </nav>
</header>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  computed: {
    ...mapGetters({
      status: 'getStatus',
      user: 'getUser',
      sidebar: 'sidebarStatus'
    })
  },
  methods: {
    doLogout () {
      this.logout().then(log => {
        this.$router.replace('/')
      })
    },
    ...mapActions([
      'logout',
      'toggleSideBar'
    ])
  }
}
</script>
