<template>
  <div>
    <div class="week_select_wrap">
        <p class="week_select_header">Select Week</p>
         <v-select
        label="name"
        @input="changeWeek" 
        :options="weekList"
        :value="activeWeekObject" 
        placeholder="Choose a week to test"></v-select>
    </div>
    <div class="country_list_wrap">
        <p class="country_list_header">Select Country</p>
        <ul class="country_list">
            <li v-for="(country,index) in this.countryList" v-bind:key="country.id" class="list_item">
                <p v-on:click="changeCountry({country,index})" class="list_item_text">{{country.id}}</p>
            </li>
        </ul>
    </div>
    <div class="storage_URL_wrap">
        <p class="storage_URL_but" @click="changeStorageURLStatus">Show File URL</p>
    </div>
     
        <!-- {{activeWeek.handle}} -->
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
            countryList: 'getCountryList',
            weekList: 'getWeekList',
            activeWeek: 'getActiveWeek'
            })

    },
    methods: {
        ...mapMutations({
            changeCountry: 'changeCountryFunc',
            changeWeek: 'changeWeekFunc',
            changeStorageURLStatus: 'changeStorageURLStatus'
        })
    }
}
</script>

<style scoped src="../assets/styles/sidebar.css">
</style>