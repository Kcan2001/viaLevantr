<template>
  <div id="dashboard-analytics">
    <div class="vx-row">
      <div class="vx-col w-full">
        <idea-board-add-new></idea-board-add-new>
        <vs-list>
          <draggable :list="list" class="cursor-move">
              <vx-card v-for="(item, index) in list" :key="index" class="tile">
                <vs-list-item :title="item.title" :subtitle="item.location"></vs-list-item>
                  Rank: {{index}} |
                  url: {{item.url}} |
                  startDate: {{item.startDate | date}} |
                  endDate: {{item.endDate | date}}
              </vx-card>
          </draggable>
        </vs-list>
      </div>
    </div>
  </div>
</template>

<script>
import moduleIdeaBoard from '@/store/idea-board/moduleIdeaBoard.js'
import IdeaBoardAddNew from './IdeaBoardAddNew'
import draggable from 'vuedraggable'
import Datepicker from 'vuejs-datepicker'
import { en, he } from 'vuejs-datepicker/src/locale'

export default {
  data () {
    return {
      title: 'IdeaBoard',
      dispatchedOrders: [],
      startDate: '',
      endDate: '',
      langHe: he,
      langEn: en,
      tileTitle: '',
      location: '',
      url: '',
      list: []
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
    this.$store.dispatch('ideaBoard/fetchIdeaBoard')
  },
  mounted () {
    this.list = this.$store.getters['idea-board/getIdeas']
  },
  components: {
    Datepicker,
    IdeaBoardAddNew,
    draggable
  },
  computed: {
    getIdeas () {
      // this.list = this.$store.getters['idea-board/getIdeas']
      return this.$store.getters['idea-board/getIdeas']
    }
  }
}
</script>

<style lang="scss">
/*! rtl:begin:ignore */
#dashboard-analytics {
  .tile {
    // background-color: red;
    margin-bottom: 20px;
  }
}
/*! rtl:end:ignore */
</style>
