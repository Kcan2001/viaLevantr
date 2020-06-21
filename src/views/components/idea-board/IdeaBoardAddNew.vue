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
        <vs-input name="event-name" v-validate="'required'" class="w-full" label-placeholder="Event Title" v-model="ideaForm.title"></vs-input>
        <vs-input name="event-name" v-validate="'required'" class="w-full" label-placeholder="Location" v-model="ideaForm.location"></vs-input>
        <div class="my-4">
            <small class="date-label">Start Date</small>
            <datepicker :language="$vs.rtl ? langHe : langEn" name="start-date" v-model="ideaForm.startDate" :disabled="disabledFrom"></datepicker>
        </div>
        <div class="my-4">
            <small class="date-label">End Date</small>
            <datepicker :language="$vs.rtl ? langHe : langEn" :disabledDates="disabledDatesTo" name="end-date" v-model="ideaForm.endDate"></datepicker>
        </div>
        <vs-input name="event-url" v-validate="'url'" class="w-full mt-6" label-placeholder="Event URL" v-model="ideaForm.url" :color="!errors.has('event-url') ? 'success' : 'danger'"></vs-input>
    </vs-prompt>
  </div>
</template>

<script>
import Datepicker from 'vuejs-datepicker'
import { en, he } from 'vuejs-datepicker/src/locale'

export default {
  data () {
    return {
      activePrompt: false,
      langHe: he,
      langEn: en,
      disabledFrom: false,
      ideaForm: {
        title: '',
        location: '',
        url: '',
        startDate: Date.now(),
        endDate: Date.now()
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
      return this.ideaForm.title !== '' && this.ideaForm.startDate !== ''
    },
    disabledDatesTo () {
      return { to: new Date(this.startDate) }
    }
  },
  methods: {
    clearFields () {
      Object.assign(this.ideaForm, {
        title: '',
        location: '',
        url: '',
        startDate: Date.now(),
        endDate: Date.now()
      })
    },
    createTile () {
      this.$validator.validateAll().then(result => {
        if (result) {
          this.$store.dispatch(
            'ideaBoard/addIdea',
            Object.assign({}, this.ideaForm)
          )
          this.clearFields()
        }
        this.$store.dispatch('ideaBoard/fetchIdeaBoard')
      })
    }
  }
}
</script>
