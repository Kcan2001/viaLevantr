<template>
  <div id="dashboard-analytics">
    <div class="vx-row">
      <div class="vx-col w-full">
        <idea-board-add-new></idea-board-add-new>
        <!-- {{getIdeas}} -->
        <vs-list>
          <draggable :list="list" class="cursor-move">
            <vs-list-item class="flex items-center p-1" v-for="(item, index) in getIdeas" :key="index">
              <vx-card class="overflow-hidden">
                  location: {{item.location}}
                  url: {{item.url}}
                  date: {{item.startDate}}
              </vx-card>
            </vs-list-item>
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
      langHe: he,
      langEn: en,
      tileTitle: '',
      location: '',
      url: '',
      list: [
        'Marzipan I love I love. Soufflé donut I love gummi bears powder. Candy danish biscuit.',
        'Halvah bonbon bonbon brownie sugar plum. Halvah I love cupcake I love.',
        'Cake muffin icing topping wafer topping gummi bears apple pie.',
        'Cotton candy gummi bears bear claw cake brownie jelly-o lemon drops croissant sweet roll.'
      ]
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
  components: {
    Datepicker,
    IdeaBoardAddNew,
    draggable
  },
  computed: {
    getIdeas () {
      return this.$store.getters['idea-board/getIdeas']
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
