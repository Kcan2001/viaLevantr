<template>
  <div id="dashboard-analytics">
    <div class="vx-row">
      <!-- CARD 9: DISPATCHED ORDERS -->
      <div class="vx-col w-full">
        <crew-add-new />
        <vx-card :title="title">
          <div slot="no-body" class="mt-4">
            <vs-table :data="getCrews" class="table-dark-inverted">
              <template slot="thead">
                <vs-th>NAME</vs-th>
                <vs-th>STATUS</vs-th>
                <vs-th>MEMBERS</vs-th>
                <vs-th>LOCATION</vs-th>
                <vs-th>DISTANCE</vs-th>
                <vs-th>START DATE</vs-th>
                <vs-th>END DATE</vs-th>
              </template>

              <template slot-scope="{data}">
                <vs-tr :key="indextr" v-for="(tr, indextr) in data">
                  <vs-td :data="data[indextr].orderNo">
                    <span>#{{data[indextr].orderNo}}</span>
                  </vs-td>
                  <vs-td :data="data[indextr].status">
                    <span class="flex items-center px-2 py-1 rounded">
                      <div
                        class="h-3 w-3 rounded-full mr-2"
                        :class="'bg-' + data[indextr].statusColor"
                      ></div>
                      {{data[indextr].status}}
                    </span>
                  </vs-td>
                  <vs-td :data="data[indextr].orderNo">
                    <ul class="users-liked user-list">
                      <li v-for="(user, userIndex) in data[indextr].usersLiked" :key="userIndex">
                        <vx-tooltip :text="user.name" position="bottom">
                          <vs-avatar
                            :src="user.img"
                            size="30px"
                            class="border-2 border-white border-solid -m-1"
                          ></vs-avatar>
                        </vx-tooltip>
                      </li>
                    </ul>
                  </vs-td>
                  <vs-td :data="data[indextr].orderNo">
                    <span>{{data[indextr].location}}</span>
                  </vs-td>
                  <vs-td :data="data[indextr].orderNo">
                    <span>{{data[indextr].distance}}</span>
                    <vs-progress
                      :percent="data[indextr].distPercent"
                      :color="data[indextr].statusColor"
                    ></vs-progress>
                  </vs-td>
                  <vs-td :data="data[indextr].orderNo">
                    <span>{{data[indextr].startDate}}</span>
                  </vs-td>
                  <vs-td :data="data[indextr].orderNo">
                    <span>{{data[indextr].estDelDate}}</span>
                  </vs-td>
                </vs-tr>
              </template>
            </vs-table>
          </div>
        </vx-card>
      </div>
    </div>
  </div>
</template>

<script>
import moduleCrew from '@/store/crew/moduleCrew.js'
import CrewAddNew from './CrewAddNew'
import { mapGetters } from 'vuex'

export default {
  data () {
    return {
      title: 'Crews',
      dispatchedOrders: []
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

    this.$store.registerModule('crew', moduleCrew)

    // Fetch Tasks
    this.$store.dispatch('crew/fetchCrews')
  },
  components: {
    CrewAddNew
  },
  computed: {
    getCrews () {
      return this.$store.getters['crew/getCrews']
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
