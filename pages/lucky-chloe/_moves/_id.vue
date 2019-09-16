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
            {{ character }} / {{ currentMove.id }}
          </h1>
        </b-col>
      </b-row>

      <br />
      <b-row align-v="start">
        <b-col>
          <b-list-group>
            <b-list-group-item
              class="d-flex justify-content-between align-items-center"
            >
              {{ currentMove.id }}

              <b-badge variant="primary" pill>14</b-badge>
            </b-list-group-item>
          </b-list-group>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import axios from 'axios'
const apiUrl = process.env.API_URL || 'http://localhost:1339'

export default {
  data() {
    return {
      form: {
        email: '',
        name: '',
        food: null,
        checked: []
      },
      foods: [
        { text: 'Select One', value: null },
        'Carrots',
        'Beans',
        'Tomatoes',
        'Corn'
      ],
      show: true,

      items: [
        {
          text: 'Admin',
          href: '#'
        },
        {
          text: 'Characters',
          href: '/characters'
        }
        // {
        //   text:
        //     this.$route.params.id.charAt(0).toUpperCase() +
        //     this.$route.params.id.substring(1),
        //   active: true
        // }
      ],
      id: this.$route.params.id,
      character: 'Lucky Chloe',
      moves: [
        {
          id: 'Left Point',
          notation: '1',
          level: 'High',
          frames: '10',
          onBlock: '+1',
          onHit: '+8'
        },
        {
          id: 'Left Point to C Uprock Hit',
          notation: '1, 2, 1',
          level: 'High, Mid, Mid',
          frames: '10',
          onBlock: '+1',
          onHit: '+8'
        },
        {
          id: 'Left Point to C Uprock Clap',
          notation: '1, 2, 2',
          level: 'High, Mid, Mid',
          frames: '10',
          onBlock: '+1',
          onHit: '+8'
        }
      ]
    }
  },
  computed: {
    currentMove() {
      return this.moves.find(
        (currentMove) =>
          currentMove.id.toLowerCase().replace(/ /g, '-') ===
          this.id.toLowerCase()
      )
    }
  },
  async asyncData({ params, error }) {
    // const liveMove = currentMove
    const flowcharts = await axios.get(`${apiUrl}/flowcharts`)
    return {
      flowcharts: flowcharts.data
    }
  },
  methods: {
    pushMove(event) {
      this.$router.push('/' + event.target.value)
    },
    onSubmit(evt) {
      evt.preventDefault()
      alert(JSON.stringify(this.form))
    },
    onReset(evt) {
      evt.preventDefault()
      // Reset our form values
      this.form.email = ''
      this.form.name = ''
      this.form.food = null
      this.form.checked = []
      // Trick to reset/clear native browser form validation state
      this.show = false
      this.$nextTick(() => {
        this.show = true
      })
    }
  }
}
</script>
