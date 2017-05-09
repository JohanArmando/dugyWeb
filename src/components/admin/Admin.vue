<template>
  <div>
    <app-top></app-top>
      <div class="wrapper">
        <div class="container">
            <div class="row">
                <div class="col-md-2">
                    <app-side-bar></app-side-bar>
                </div>
                <div class="col-md-10 top20">
                    <router-view></router-view>
                </div>
            </div>
        </div>
      </div>
  </div>
</template>

<script>
import Top from '@/components/admin/partials/Top'
import SideBar from '@/components/admin/partials/SideBar'

export default {
  components: {
    appTop: Top,
    appSideBar: SideBar
  }
}
</script>
