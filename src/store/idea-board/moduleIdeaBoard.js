/*=========================================================================================
  File Name: moduleCrew.js
  Description: Crew Module
==========================================================================================*/


import state from './moduleIdeaBoardState.js'
import mutations from './moduleIdeaBoardMutations.js'
import actions from './moduleIdeaBoardActions.js'
import getters from './moduleIdeaBoardGetters.js'

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
