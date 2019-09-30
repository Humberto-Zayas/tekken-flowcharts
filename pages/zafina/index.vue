<template>
  <div>
    <!-- <b-breadcrumb :items="items"></b-breadcrumb> -->
    <b-container class="bv-example-row">
      <br />
      <b-row>
        <b-col class="">
          <h1>
            <span
              style="cursor: pointer; padding: 0 10px;"
              @click="$router.go(-1)"
              >&lsaquo;</span
            >
            <!-- {{ xcharacters[1].id }} -->
            {{ currentCharacter.id }}
          </h1>
        </b-col>
      </b-row>

      <br />
      <b-row align-v="start">
        <b-col>
          <!-- <div v-if="this.$route.query.keys(obj).length > 0">
            <h1>{{ this.$route.query.move }}</h1>
          </div> -->
          <b-list-group>
            <b-list-group-item
              v-for="move in currentCharacter.moves"
              :key="move"
              class="d-flex justify-content-between align-items-center"
            >
              <!-- <nuxt-link :to="move.toLowerCase().replace(/ /g, '-')">{{
                move
              }}</nuxt-link> -->
              <nuxt-link
                :to="'/zafina/' + move.id.toLowerCase().replace(/ /g, '-')"
                >{{ move.id }}</nuxt-link
              >

              <b-badge variant="primary" pill>14</b-badge>
            </b-list-group-item>
          </b-list-group>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: this.$route.params.id,
      xcharacters: [
        {
          id: 'Asuka',
          moves: ['1, 2, 3', '1, 2, 3 (Hold)', '1,2,4', 'move']
        },
        {
          id: 'Lucky Chloe',
          moves: [
            'Left Point',
            'Left Point to C Uprock Hit',
            'Left Point to C Uprock Clap',
            'Left Point to C Uprock Swing',
            'Right Point',
            'Right Point to High Five'
          ]
        },
        {
          id: 'Zafina',
          moves: [
            {
              id: 'Move One',
              notation: '1',
              level: 'High',
              frames: '10',
              onBlock: '+1',
              onHit: '+8'
            },
            {
              id: 'Move Two',
              notation: '1, 2, 1',
              level: 'High, Mid, Mid',
              frames: '10',
              onBlock: '+1',
              onHit: '+8'
            },
            {
              id: 'Move Three',
              notation: '1, 2, 2',
              level: 'High, Mid, Mid',
              frames: '10',
              onBlock: '+1',
              onHit: '+8'
            }
          ]
        }
      ]
    }
  },
  computed: {
    currentCharacter() {
      return this.xcharacters[2]
    },
    matchingFlowCharts() {
      const flowcharts = this.flowcharts

      // for each array item in flow charts
      // array item.name matches the slug
      // push all array item to matching charts

      return flowcharts.filter(function(chart) {
        return chart.Name.toLowerCase().replace(/ /g, '-') === this.id
      })

      // return flowcharts[0].Name.toLowerCase().replace(/ /g, '-')
      // return x
      // return flowcharts
    }
  },
  methods: {
    pushMove(event) {
      this.$router.push('/' + event.target.value)
    }
  }
}
</script>
