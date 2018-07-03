
import axios from './../../api/http'

export default {
  namespaced: true,
  state: {
    index:0,
    api: {
      baidu: '/'
    }
  },
  getters: {

  },
  actions: {
    login({dispatch},payload){
      axios.get(state.api.baidu).then(data => {
        console.log(data)
      })
    },
    baidu({state}){

      axios.get(state.api.baidu).then(data=>{
        console.log(data)
      })
    }
  },
  mutations: {
    addIndex(state){
      state.index++
    }
  }
}
