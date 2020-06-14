/*=========================================================================================
  File Name: moduleTodoGetters.js
  Description: Todo Module Getters
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/

export default {
  getCrews: state => {
    console.log('state ', state.tasks)
    return state.tasks
  }
};
