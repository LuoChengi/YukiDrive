import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    custom: {
      appName: 'YukiDrive',
    },
    isDrawerOpen : undefined,
    snackbar:{
      message: undefined,
      isOpen: false
    },
    settings:{
      appName:undefined,
      webName:undefined,
      navImg:undefined,
      defaultDrive:undefined,
      footer:undefined,
      //api请求的基本url
      baseUrl: (process.env.VUE_APP_BASE_URL == undefined || process.env.VUE_APP_BASE_URL == '') ? `${window.location.protocol}//${window.location.host}` : process.env.VUE_APP_BASE_URL
    },
    show:{
      name:undefined,
      url:undefined,
      icon:undefined,
      downloadUrl:undefined
    }
  },
  mutations: {
    changeDrawerState(state,payload){
      state.isDrawerOpen = payload ? payload : !state.isDrawerOpen
    },
    openSnackBar(state,payload){
      state.snackbar.message = payload
      state.snackbar.isOpen = true
    },
    changeSnackBarStatus(state,payload){
      state.snackbar.isOpen = payload
    },
    changeSettings(state,payload){
      state.settings.appName = payload.appName
      state.settings.webName = payload.webName
      state.settings.navImg = payload.navImg
      state.settings.defaultDrive = payload.defaultDrive
      state.settings.footer = payload.footer
    },
    showItem(state,payload){
      state.show.name = payload.name
      state.show.url = payload.url
      state.show.icon = payload.icon
      state.show.downloadUrl = payload.downloadUrl
    }
  },
  actions: {
  },
  modules: {
  }
})
