<template>
  <div>
    <div class="header_box">
      <i class="fas fa-bars menu_btn" @click="changeMenuStatus"></i>
      <p class="week_title">{{activeWeek.name}} <span>{{activeWeek.handle}}</span></p>
      <i class="fas fa-home back_btn" @click="backToMenu"></i>
      <!-- <i class="fas fa-arrow-circle-left back_btn"></i> -->
    </div>
  </div>
</template>

<script>
import {mapGetters, mapMutations} from 'vuex';

export default {
    computed: {
        ...mapGetters({
            countryList: 'getCountryList',
            weekList: 'getWeekList',
            activeWeek: 'getActiveWeek',
            menuVal: 'getMenuStatus'
            })
    },
    methods: {
      ...mapMutations({
        changeMenuStatus: 'changeMenuStatus',
        backToMenu: 'backToMenu'
      })
    },
}
</script>

<style scoped src="../assets/styles/header.css">

</style>