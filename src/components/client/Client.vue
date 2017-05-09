<template lang="html">
  <div class="pace-done" v-bind:class="{ 'ls-toggled': sidebarStatus}">
    <div class="all-content-wrapper">
      <top></top>
        <div class="colorMenu">
            <side-bar></side-bar>
            <section class="content dashboard">
                <router-view></router-view>
            </section>
        </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Top from '@/components/client/partials/Top'
import SideBar from '@/components/client/partials/SideBar'

export default {
  components: {
    Top,
    SideBar
  },
  computed: {
    ...mapGetters([
      'sidebarStatus'
    ])
  }
}
</script>

<style lang="css">
</style>
