/*=========================================================================================
  File Name: moduleCrew.js
  Description: Crew Module
==========================================================================================*/


import state from './moduleCrewState.js'
import mutations from './moduleCrewMutations.js'
import actions from './moduleCrewActions.js'
import getters from './moduleCrewGetters.js'

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
