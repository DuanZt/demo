import Vue from 'vue'
import Vuex from 'vuex'
import {Message} from 'element-ui'
import api from '../api'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    count: 0,
    access_token: '',
    refresh_token: ''
  },
  mutations: {
    increment: state => state.count++,
    decrement: state => state.count--,
    setToken: (state, res) => {
      state.access_token = res.access_token
      state.refresh_token = res.refresh_token
      console.log(state)
    }
  },
  actions: {
    showLoading: msg => console.log(msg),
    closeLoading: () => console.log('close'),
    showAlert: data => Message.error({message: data.message}),
    getWelcome: () => {
      api.getWelcome((data) => {
        console.log(data)
      }, (error) => {
        console.log(error)
      })
    },
    login: (context, form) => {
      api.login(form, (data) => {
        console.log(data)
        context.commit('setToken', data)
      }, (error) => {
        console.log(error)
      })
    },
    uploadFile: (context, files) => {
      api.uploadFile(files, (data) => {
        console.log(data)
      }, (error) => {
        console.log(error)
      })
    }
  }
})

export default store

