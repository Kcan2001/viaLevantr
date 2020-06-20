<!-- =========================================================================================
    File Name: TodoAddNew.vue
    Description: Add new todo component
    ----------------------------------------------------------------------------------------
    Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
  <div class="px-6 pb-2 pt-6">
    <vs-button @click="activePrompt = true" class="w-full">Create Idea Tile</vs-button>
    <vs-prompt
      title="Create A Idea Tile"
      accept-text="Create Tile"
      button-cancel="border"
      @cancel="clearFields"
      @accept="createTile"
      @close="clearFields"
      :is-valid="validForm"
      :active.sync="activePrompt"
    >
        <vs-input name="event-name" v-validate="'required'" class="w-full" label-placeholder="Event Title" v-model="title"></vs-input>
        <div class="my-4">
            <small class="date-label">Start Date</small>
            <datepicker :language="$vs.rtl ? langHe : langEn" name="start-date" v-model="startDate" :disabled="disabledFrom"></datepicker>
        </div>
        <div class="my-4">
            <small class="date-label">End Date</small>
            <datepicker :language="$vs.rtl ? langHe : langEn" :disabledDates="disabledDatesTo" name="end-date" v-model="endDate"></datepicker>
        </div>
        <vs-input name="event-url" v-validate="'url'" class="w-full mt-6" label-placeholder="Event URL" v-model="url" :color="!errors.has('event-url') ? 'success' : 'danger'"></vs-input>
    </vs-prompt>
  </div>
</template>

<script>
import Datepicker from 'vuejs-datepicker'
import firebase from 'firebase/app'
import 'firebase/auth'
import { en, he } from 'vuejs-datepicker/src/locale'

export default {
  data () {
    return {
      activePrompt: false,
      title: '',
      location: '',
      url: '',
      startDate: Date.now(),
      endDate: Date.now(),
      langHe: he,
      langEn: en,
      disabledFrom: false,
      taskLocal: {
        orderNo: 879985,
        status: 'Moving',
        statusColor: 'success',
        operator: 'Cinar Knowles',
        operatorImg: require('@/assets/images/portrait/small/avatar-s-2.jpg'),
        usersLiked: [
          {
            name: 'Vennie Mostowy',
            img: require('@/assets/images/portrait/small/avatar-s-5.jpg')
          },
          {
            name: 'Elicia Rieske',
            img: require('@/assets/images/portrait/small/avatar-s-7.jpg')
          },
          {
            name: 'Julee Rossignol',
            img: require('@/assets/images/portrait/small/avatar-s-10.jpg')
          },
          {
            name: 'Darcey Nooner',
            img: require('@/assets/images/portrait/small/avatar-s-8.jpg')
          }
        ],
        location: 'Anniston, Alabama',
        distance: '130 km',
        distPercent: 80,
        startDate: '26/07/2018',
        estDelDate: '28/07/2018'
      },
      email: ''
    }
  },
  components: {
    Datepicker
  },
  computed: {
    taskTags () {
      return this.$store.state.todo.taskTags
    },
    validateForm () {
      return !this.errors.any() && this.taskLocal.title !== ''
    },
    validForm () {
      return this.title !== '' && this.startDate !== '' && this.endDate !== '' && Date.parse(this.endDate) - Date.parse(this.startDate) >= 0 && !this.errors.has('event-url')
    },
    disabledDatesTo () {
      return { to: new Date(this.startDate) }
    }
  },
  methods: {
    clearFields () {
      Object.assign(this.taskLocal, {
        title: '',
        desc: '',
        isCompleted: false,
        isImportant: false,
        isStarred: false,
        tags: []
      })
    },
    createTile () {
      this.$validator.validateAll().then(result => {
        if (result) {
          this.$store.dispatch(
            'ideaBoard/addIdea',
            Object.assign({}, this.taskLocal)
          )
          this.clearFields()
        }
      })
    }
  }
}
</script>
