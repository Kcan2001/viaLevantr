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
    <vs-button @click="activePrompt = true" class="w-full">Create Crew</vs-button>
    <vs-prompt
      title="Create Your Crew"
      accept-text="Create Crew"
      button-cancel="border"
      @cancel="clearFields"
      @accept="createCrew"
      @close="clearFields"
      :is-valid="validateForm"
      :active.sync="activePrompt"
    >
      <div>
        <form>
          <div class="vx-row">
            <div class="vx-col ml-auto flex">
  
            </div>
          </div>

          <div class="vx-row">
            <div class="vx-col w-full">
              <vs-input
                v-validate="'required'"
                name="title"
                class="w-full mb-4 mt-5"
                placeholder="Title"
                v-model="taskLocal.title"
                :color="validateForm ? 'success' : 'danger'"
              />
              <vs-textarea rows="5" label="Add description" v-model="taskLocal.desc" />
            </div>
          </div>
        </form>
      </div>
    </vs-prompt>
  </div>
</template>

<script>
import firebase from "firebase/app";
import "firebase/auth";
export default {
  data() {
    return {
      activePrompt: false,
      taskLocal: {
        title: "",
        desc: "",
        isCompleted: false,
        isImportant: false,
        isStarred: false,
        tags: [],
        user: firebase.auth().currentUser.email
      }
    };
  },
  computed: {
    taskTags() {
      return this.$store.state.todo.taskTags;
    },
    validateForm() {
      return !this.errors.any() && this.taskLocal.title !== "";
    }
  },
  methods: {
    clearFields() {
      Object.assign(this.taskLocal, {
        title: "",
        desc: "",
        isCompleted: false,
        isImportant: false,
        isStarred: false,
        tags: []
      });
    },
    createCrew() {
      this.$validator.validateAll().then(result => {
        if (result) {
          this.$store.dispatch('todo/addTask', Object.assign({}, this.taskLocal))
          this.clearFields()
        }
      });
    }
  }
};
</script>
