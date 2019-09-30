<template>
  <div>
    <!-- <b-breadcrumb :items="items"></b-breadcrumb> -->
    <b-container class="bv-example-row">
      <br />
      <b-row>
        <b-col class="">
          <h1>
            <nuxt-link style="cursor: pointer; padding: 0 10px;" to="/zafina"
              >&lsaquo;</nuxt-link
            >
            <!-- {{ xcharacters[1].id }} -->
            {{ currentCharacter }} / Flowchart ID:
            {{ this.$route.params.id }}
          </h1>
        </b-col>
      </b-row>

      <br />
      <b-row align-v="start">
        <b-col>
          <b-list-group>
            <h3>Charts</h3>
            <b-list-group-item
              class="d-flex justify-content-between align-items-center"
            >
              {{ currentFlowChart.Name }}

              <b-badge variant="primary" pill>14</b-badge>
            </b-list-group-item>
            <b-list-group-item
              class="d-flex justify-content-between align-items-center"
            >
              {{ currentFlowChart.Content }}

              <b-badge variant="primary" pill>14</b-badge>
            </b-list-group-item>
          </b-list-group>
        </b-col>
      </b-row>
      <div>
        <b-form v-if="show" @submit="addFlowChart" @reset="onReset">
          <b-form-group
            id="input-group-2"
            label="Move Name:"
            label-for="input-2"
          >
            <b-form-input
              id="input-2"
              v-model="form.name"
              required
              placeholder="Move Name"
            ></b-form-input>
          </b-form-group>
          <b-form-textarea
            id="textarea"
            v-model="form.content"
            placeholder="Enter something..."
            rows="3"
            max-rows="6"
          ></b-form-textarea>

          <br />
          <b-button type="submit" variant="primary">Submit</b-button>
          <b-button type="reset" variant="danger">Reset</b-button>
        </b-form>
        <b-card class="mt-3" header="Form Data Result">
          <pre class="m-0">{{ form }}</pre>
        </b-card>
      </div>
    </b-container>
  </div>
</template>

<script>
import axios from 'axios'
const apiUrl = process.env.API_URL || 'http://localhost:1339'
export default {
  data() {
    return {
      flowcharts: null,
      form: {
        name: '',
        content: ''

        // food: null,
        // checked: []
      },
      show: true,
      id: this.$route.params.id,

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
  },
  computed: {
    currentCharacter() {
      return 'Zafina'
    },
    matchingFlowCharts() {
      const flowcharts = this.flowcharts

      const newarray = flowcharts.filter(function(chart) {
        return (
          chart.Name.toLowerCase().replace(/ /g, '-') ===
          this.$route.params.id.toLowerCase().replace(/ /g, '-')
        )
      })
      return newarray
      // return flowcharts[6].Name.toLowerCase().replace(/ /g, '-') === this.id
    },
    // currentMove() {
    //   return this.moves.find(
    //     (currentMove) =>
    //       currentMove.id.toLowerCase().replace(/ /g, '-') ===
    //       this.id.toLowerCase()
    //   )
    // },
    currentFlowChart() {
      // eslint-disable-next-line prettier/prettier
      return this.flowcharts.find(chart => chart.id === parseInt(this.id))
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
    },
    addFlowChart(evt) {
      evt.preventDefault()
      axios
        .post(`${apiUrl}/flowcharts/`, {
          Name: this.form.name,
          Content: this.form.content
        })
        .then((response) => {
          // Handle success.
          alert('Success')
          // console.log('Well done!')
          // console.log('User profile', response.data.user)
          // console.log('User token', response.data.jwt)
        })
        .catch((error) => {
          // Handle error.
          alert('Error: ', error)
          // console.log('An error occurred:', error)
        })
    }
  }
}
</script>
