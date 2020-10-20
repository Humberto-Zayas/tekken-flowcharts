<template>
  <div>
    <!-- <b-breadcrumb :items="items"></b-breadcrumb> -->
    <b-container class="bv-example-row">
      <br />
      <div>
        <b-card
        no-body
        style="max-width: 20rem;"
        img-src="https://steamcdn-a.akamaihd.net/steam/apps/1114561/ss_15a1dbff627abe5938f304b4731e9f7c04921708.600x338.jpg"
        img-alt="Image"
        img-top
        >

        <b-list-group flush>
        <b-list-group-item>Cras justo odio</b-list-group-item>
        <b-list-group-item>Dapibus ac facilisis in</b-list-group-item>
        <b-list-group-item>Vestibulum at eros</b-list-group-item>
        </b-list-group>
        <b-card-body>
          <b-card-title>View Zafina Frame Data and Move Properties</b-card-title>
          <b-button to="zafina/frame-data" variant="primary">Zafina Frame Data</b-button>
        </b-card-body>
        </b-card>
      </div>

      <br />
      <!-- List of all moves as a list group -->
      
    </b-container>
  </div>
</template>

<style scoped>
.addFlowChart {
  height: 30px;
  width: 30px;
  top: 25px;
  position: relative;
  text-align: center;
  background: #29d129;
  color: white;
  border-radius: 100%;
  padding: 0;
  font-weight: bolder;
  cursor: pointer;
  font-size: 22px;
  line-height: 27px;
  box-shadow: 0 4px 8px -5px black;
  transition: transform 0.2s;
}

.addFlowChart:hover {
  transform: scale(1.1);
}

.flowchart-col {
  padding: 20px 30px;
  position: relative;
}

.flowchart-col:after {
  top: 37px;
  width: 31px;
  height: 6px;
  content: '';
  background: black;
  position: absolute;
  right: 0px;
}
.flowchart-col:not(:first-child):before {
  top: 37px;
  width: 31px;
  height: 6px;
  content: '';
  background: black;
  position: absolute;
  left: 0px;
}
.flowchart-col:last-child:after {
  top: 37px;
  width: 0 !important;
  height: 0;
  content: '';
  background: black;
  position: absolute;
  right: 0px;
}
</style>

<script>
import axios from 'axios'
const apiUrl = process.env.API_URL || 'http://localhost:1339'
export default {
  data() {
    return {
      punish: true,
      x: 1,
      selected: [],
      form: {
        name: '',
        content: ''

        // food: null,
        // checked: []
      },
      show: true,
      id: this.$route.params.id,
    }
  },
  computed: {
    currentCharacter() {
      return this.xcharacters[0]
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
