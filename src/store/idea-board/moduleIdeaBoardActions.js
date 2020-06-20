/*=========================================================================================
  File Name: moduleTodoActions.js
  Description: Todo Module Actions
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/

import axios from '@/axios.js'
const fb = require('@/firebase/firebaseConfig.js')

export default {
  setTodoSearchQuery ({ commit }, query) {
    commit('SET_TODO_SEARCH_QUERY', query)
  },
  fetchIdeaBoard ({ commit }) {
    return new Promise((resolve, reject) => {
      fb.ideasCollection.get()
        .then(response => {
          response.forEach(function (doc) {
            commit('SET_IDEAS', doc.data())
          })
        })
        .catch(error => {
          reject(error)
        })
    })
  },

  addIdea ({ commit }, idea) {
    return new Promise((resolve, reject) => {
      const id = Math.floor(Math.random() * Math.floor(9999999))
      fb.ideasCollection
        .doc(`idea_board_${id}`)
        .set(idea)
        .then(response => {
          resolve(response)
          commit('ADD_IDEA', Object.assign(idea, { id: response.id }))
        })
        .catch(error => {
          reject(error)
        })
    })
  },

  updateTask ({ commit }, task) {
    return new Promise((resolve, reject) => {
      axios
        .post(`/api/apps/todo/task/${task.id}`, { task })
        .then(response => {
          commit('UPDATE_TASK', response.data)
          resolve(response)
        })
        .catch(error => {
          reject(error)
        })
    })
  }
}
