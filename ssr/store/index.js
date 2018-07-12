import Vue from 'vue'
import Vuex from 'vuex'
import {Message} from 'element-ui'
import api from '../lib/api'

Vue.use(Vuex)

const store = () =>  new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    increment: state => state.count++,
    decrement: state => state.count--
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


