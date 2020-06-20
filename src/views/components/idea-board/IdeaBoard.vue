<template>
  <div id="dashboard-analytics">
    <div class="vx-row">
      <div class="vx-col w-full">
        <idea-board-add-new></idea-board-add-new>
        <!-- <vx-card title="Multiple Columns">
          <div class="vx-row">
            <div class="vx-col sm:w-1/2 w-full mb-2">
              <vs-input class="w-full" label-placeholder="Title" v-model="tileTitle" />
            </div>
            <div class="vx-col sm:w-1/2 w-full mb-2">
              <vs-input class="w-full" label-placeholder="Location" v-model="location" />
            </div>        
          </div>
          <div class="vx-row">
            <div class="vx-col sm:w-1/2 w-full mb-2">
              <vs-input class="w-full" label-placeholder="URL" v-model="url" />
            </div>    
            <div class="vx-col sm:w-1/2 w-full mb-2">
              <datepicker :language="$vs.rtl ? langHe : langEn" label-placeholder="Location" name="start-date" v-model="startDate" :disabled="disabledFrom"></datepicker>
            </div>
          </div>
        </vx-card> -->
      </div>
    </div>
  </div>
</template>

<script>
import moduleIdeaBoard from '@/store/idea-board/moduleIdeaBoard.js'
import IdeaBoardAddNew from './IdeaBoardAddNew'
import Datepicker from 'vuejs-datepicker'
import { en, he } from 'vuejs-datepicker/src/locale'

export default {
  data () {
    return {
      title: 'IdeaBoard',
      dispatchedOrders: [],
      startDate: '',
      langHe: he,
      langEn: en,
      tileTitle: '',
      location: '',
      url: ''
    }
  },
  created () {
    // Dispatched Orders
    // this.$http
    //   .get("/api/table/dispatched-orders")
    //   .then(response => {
    //     this.dispatchedOrders = response.data;
    //   })
    //   .catch(error => {
    //     console.log(error);
    //   });

    this.$store.registerModule('idea-board', moduleIdeaBoard)

    // Fetch Tasks
    this.$store.dispatch('crew/fetchCrews')
  },
  components: {
    Datepicker,
    IdeaBoardAddNew
  },
  computed: {
    getCrews () {
      return this.$store.getters['idea-board/getCrews']
    }
  }
}
</script>

<style lang="scss">
/*! rtl:begin:ignore */
#dashboard-analytics {
  .greet-user {
    position: relative;

    .decore-left {
      position: absolute;
      left: 0;
      top: 0;
    }
    .decore-right {
      position: absolute;
      right: 0;
      top: 0;
    }
  }

  @media (max-width: 576px) {
    .decore-left,
    .decore-right {
      width: 140px;
    }
  }
}
/*! rtl:end:ignore */
</style>
