<template>
  <div class="week_select_wrap">
      <div class="week_select_box">
          <div class="header_wrap">
            <p class="header_text">Samsung Campaign<br>Test Page<br><span>2020</span></p>
            <!-- <p class="header_text"></p> -->
            <p class="week_select_header">Select Week</p>
          </div>
          <div class="select_wrap">
            <v-select
                label="name"
                @input="changeWeek" 
                :options="weekList"
                :value="activeWeekObject" 
                class="select_box"
                placeholder="Choose a week to test"></v-select>
          </div>
    </div>
  </div>
</template>

<script>
import {mapState, mapGetters, mapMutations} from 'vuex';


export default {
    computed: {
        ...mapState ({
            activeWeekObject: 'activeWeek'
            }),
        ...mapGetters({
            weekList: 'getWeekList',
            activeWeek: 'getActiveWeek'
            })

    },
    methods: {
        ...mapMutations({
            changeWeek: 'changeWeekFunc'
        })
    }
}
</script>

<style scoped src="../assets/styles/firstview.css">

</style>