<template>
   <div id="idea-card">
        <IdeaBoardAddNew />
        <div class="vx-row">
            <div class="vx-col w-full sm:w-1/2 lg:w-1/3 mb-base" v-for="item in list" :key="item.id">
                <vx-card>
                    <img src="https://www.familyvacationcritic.com/uploads/sites/19/2018/09/best-ideas-1280x640.jpg" alt="content-img" class="responsive rounded-lg">
                    <div class="my-6">
                          <h5 class="mb-2">{{ item.title }}</h5>
                          <p class="text-grey">{{ item.location }}</p>
                          <h5 v-if="item.startDate !== item.endDate" class="mb-2">{{ item.startDate | timestamp }} - {{ item.endDate | timestamp }}</h5>
                    </div>
                    <vs-divider></vs-divider>
                    <div class="flex justify-between flex-wrap">
                        <span>
                            <!-- <p class="text-xl">{{ card_2.footer_text_left_value }}</p> -->
                            <!-- <p class="text-grey">{{ card_2.footer_text_left_label }}</p> -->
                            <vs-button v-if="item.url" @click="link(item.url);" color="primary" type="filled">LINK</vs-button>
                        </span>
                        <span>
                            <!-- <p class="text-xl">{{ card_2.footer_text_right_value }}</p> -->
                            <!-- <p class="text-grey">{{ card_2.footer_text_right_label }}</p> -->
                            <vs-button @click="deleteIdea(item.id);" color="danger" type="filled" target="_blank">Delete</vs-button>
                        </span>
                    </div>
                </vx-card>
            </div>
        </div>
    </div>
</template>

<script>
import moduleIdeaBoard from '@/store/idea-board/moduleIdeaBoard.js'
import IdeaBoardAddNew from './IdeaBoardAddNew'
import draggable from 'vuedraggable'
import Datepicker from 'vuejs-datepicker'
import VueGridLayout from 'vue-grid-layout'
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
      list: [],
      isLoading: false
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
    draggable,
    GridLayout: VueGridLayout.GridLayout,
    GridItem: VueGridLayout.GridItem
  },
  methods: {
    link (url) {
      window.open(`http://${url}`, '_blank')
    },
    deleteIdea (ideaId) {
      this.$vs.loading()
      setTimeout(() => {
        this.$vs.loading.close()
      }, 500)
      this.$store.dispatch('ideaBoard/removeIdea', ideaId)
    }
  }
}
</script>

<style lang="scss">
#idea-card {
 
}
</style>
