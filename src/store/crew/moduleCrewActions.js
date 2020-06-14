/*=========================================================================================
  File Name: moduleTodoActions.js
  Description: Todo Module Actions
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/

import axios from "@/axios.js";
const fb = require("@/firebase/firebaseConfig.js");

export default {
  setTodoSearchQuery ({ commit }, query) {
    commit('SET_TODO_SEARCH_QUERY', query)
  },
  fetchCrews({ commit }) {
    return new Promise((resolve, reject) => {
      fb.crewCollection.doc('crew_name').get()
        .then(response => {
          commit("SET_TASKS", response.data());
          resolve(response.data());
        })
        .catch(error => {
          reject(error);
        });
    });
  },

  addTask({ commit }, task) {
    return new Promise((resolve, reject) => {
      let user = task.user + "_" + Math.floor(Math.random() * 100000000 + 1);
      fb.crewCollection
        .doc('crew_name')
        .set(task)
        .then(response => {
          resolve(response);
          commit("ADD_TASK", Object.assign(task, { id: response.id }));
        })
        .catch(error => {
          reject(error);
        });
    });
  },

  updateTask({ commit }, task) {
    return new Promise((resolve, reject) => {
      axios
        .post(`/api/apps/todo/task/${task.id}`, { task })
        .then(response => {
          commit("UPDATE_TASK", response.data);
          resolve(response);
        })
        .catch(error => {
          reject(error);
        });
    });
  }
};
