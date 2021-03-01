<template>
  <div class="wrap">
    <Header class="header_wrap"></Header>
    <!-- <transition name="list">
      <SideBar class="sidebar_wrap shadow" v-show="menuVal"></SideBar>
    </transition> -->
    <SideBar class="sidebar_wrap shadow" :class="{sidebar_wrap_hd:!menuVal}"></SideBar>
    <div class="main_wrap" :class="{main_wrap_full:!menuVal}">
      <div class="country_heading_wrap">
        <div class="country_heading_box">
          <!-- <img :src="require('@/assets/img/'+ selectedCountry.img)" :alt="selectedCountry.id" class="country_Img" /> -->
          <img :src="gettingImg(selectedCountry.id)" :alt="selectedCountry.id" class="country_Img" />
          <span class="country_Txt">{{selectedCountry.id}}</span>
        </div>
      </div>
      <ul class="section_list_wrap">
        <li class="section_list shadow">
          <p class="section_list_heading">Beginning/AQ</p>
          <div class="link_wrap">
            <a class="link_addr" target="_blank" v-for="(item) in this.startAQList" v-bind:key="item.id"
              :href="'https://t2-test.ktrmr.com/surveyw.aspx?i.project='+activeWeek.handle+'&s=GEN24&id=1&chk=na&pid=auto&i.test=1&debug='+item.id+'&lang='+selectedCountry.handle">
              {{item.name}}
            </a>
          </div>
        </li>
        <li class="section_list shadow">
           <p class="section_list_heading">BQ/CQ Part</p>
          <div class="link_wrap">
            <a class="link_addr" target="_blank" v-for="(item) in this.bQCQList" v-bind:key="item.id"
              :href="'https://t2-test.ktrmr.com/surveyw.aspx?i.project='+activeWeek.handle+'&s=GEN24&id=1&chk=na&pid=auto&i.test=1&debug='+item.id+'&lang='+selectedCountry.handle">
              {{item.name}}
            </a>
          </div>
        </li>
        <li class="section_list shadow">
           <p class="section_list_heading">DQ/EQ Part</p>
          <div class="link_wrap">
            <a class="link_addr" target="_blank" v-for="(item) in this.dQEQList" v-bind:key="item.id"
              :href="'https://t2-test.ktrmr.com/surveyw.aspx?i.project='+activeWeek.handle+'&s=GEN24&id=1&chk=na&pid=auto&i.test=1&debug='+item.id+'&lang='+selectedCountry.handle">
              {{item.name}}
            </a>
          </div>
        </li>
        <li class="section_list shadow">
           <p class="section_list_heading">CrossMedia Part</p>
          <div class="link_wrap">
            <a class="link_addr" target="_blank" v-for="(item) in this.crossMediaList" v-bind:key="item.id"
              :href="'https://t2-test.ktrmr.com/surveyw.aspx?i.project='+activeWeek.handle+'&s=GEN24&id=1&chk=na&pid=auto&i.test=1&debug='+item.id+'&lang='+selectedCountry.handle">
              {{item.name}}
            </a>
          </div>
        </li>
      </ul>
      <!-- <div class="debug_wrap"> -->
      <transition name="list">
        <div class="debug_wrap" v-show="storageStatus">
          <div v-for="btn in ftpBtnList" :key="btn.id" class="debug_box">
            <p v-clipboard="btn.value">{{btn.name}}</p>
          </div>
          <div v-for="btn in debugBtnList" :key="btn.id" class="debug_box">
            <p v-clipboard="btn.value + activeWeek.handle">{{btn.name}}</p>
          </div>
          <div v-for="btn in extratorBtnList" :key="btn.id" class="debug_box">
            <p v-clipboard="btn.value + activeWeek.handle">{{btn.name}}</p>
            <!-- <a target="_blank" :href="btn.value + activeWeek.handle">{{btn.name}}</a> -->
            <!-- <button v-clipboard="">{{btn.name}}</button> -->
          </div>
        </div>
      </transition>
      <!-- <span style="color:blue;">{{selectedCountry.handle}}</span>
        <span style="color:red;">{{activeWeek.name}}</span>
        <span style="color:red;">{{activeWeek.handle}}</span> -->
    </div>
  </div>
</template>

<script>
  import Header from './Header'
  import SideBar from './SideBar'
  import usImg from '@/assets/img/us_flag.png';
  import ukImg from '@/assets/img/uk_flag.png';
  import frImg from '@/assets/img/fr_flag.png';
  import deImg from '@/assets/img/de_flag.png';
  import esImg from '@/assets/img/es_flag.png';
  import jpImg from '@/assets/img/jp_flag.png';
  import {
    // mapState,
    mapGetters,
    mapMutations
  } from 'vuex'

  export default {
    data() {
      return {
        usImg,
        ukImg,
        frImg,
        deImg,
        esImg,
        jpImg
      }
    },
    computed: {
      ...mapGetters(['defaultCountrySet'], ['defaultWeekSet']),
      ...mapGetters({
        countryList: 'getCountryList',
        weekList: 'getWeekList',
        selectedCountry: 'getSelectedCountry',
        activeWeek: 'getActiveWeek',
        selectedCountryImg: 'getSelectedCountryImg',
        menuVal: 'getMenuStatus',
        startAQList: 'getstartAQList',
        bQCQList: 'getbQCQList',
        dQEQList: 'getDQEQList',
        crossMediaList: 'getCrossMediaList',
        ftpBtnList: 'getFTPBtnList',
        debugBtnList: 'getDebugBtnList',
        extratorBtnList: 'getExtratorList',
        storageStatus: 'getStorageURLStatus',
      })
    },
    methods: {
      ...mapMutations({
        changeCountry: 'changeCountryFunc',
      }),
      gettingImg: function (country) {
        if (country === 'US') {
          return this.usImg
        } else if (country === 'UK') {
          return this.ukImg
        } else if (country === 'France') {
          return this.frImg
        } else if (country === 'Germany') {
          return this.deImg
        } else if (country === 'Spain') {
          return this.esImg
        } else if (country === 'Japan') {
          return this.jpImg
        }
      },
    },
    components: {
      SideBar,
      Header
    }
  }
</script>

<style scoped src="../assets/styles/mainsite.css">
 
</style>