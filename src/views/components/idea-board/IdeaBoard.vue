<template>
  <div id="dashboard-analytics">
    <div class="vx-row">
      <div class="vx-col w-full">
        <idea-board-add-new></idea-board-add-new>
        <vs-list>
          <draggable :list="list" class="cursor-move">
              <vx-card v-for="(item, index) in list" :key="index" class="tile">
                <vs-list-item :title="item.title" :subtitle="item.location"></vs-list-item>
                  Rank: {{index + 1}} |
                  Date: {{ item.startDate | timestamp }} - {{ item.endDate | timestamp }} 
                  <!-- <a target="_blank" rel="nofollow" :href="item.url" tabindex="-1">Link</a>
                  <button-link >Link</button-link> -->
                  <vs-button @click="link(item.url);" color="primary" type="filled">LINK</vs-button>
                  <vs-button @click="deleteIdea(item.id);" color="danger" type="filled" target="_blank">Delete</vs-button>
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
  methods: {
    link (url) {
      window.open(`http://${url}`, '_blank');
    },
    deleteIdea (ideaId) {
      this.$store.dispatch('ideaBoard/removeIdea', ideaId)
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
