<template>
  <div>
    <b-container>
      <h1>
        {{ currentCharacter }}
      </h1>
      <frame-data-table
        :data="data"
        :fields="fieldsx"
        :filter="filter"
      ></frame-data-table>
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
import akuma from '~/mixins/characterData/akuma.js'
import FrameDataTable from '@/components/FrameDataTable.vue'

const apiUrl = process.env.API_URL || 'http://localhost:1339'
export default {
  components: {
    FrameDataTable,
  },
  data() {
    return {
      filter: null,
      selected: [],
      form: {
        name: '',
        content: '',
      },
      show: true,
    }
  },
  computed: {
    currentCharacter() {
      return 'Akuma'
    },
    matchingFlowCharts() {
      const flowcharts = this.flowcharts

      // for each array item in flow charts
      // array item.name matches the slug
      // push all array item to matching charts

      return flowcharts.filter(function (chart) {
        return chart.Name.toLowerCase().replace(/ /g, '-') === this.id
      })

      // return flowcharts[0].Name.toLowerCase().replace(/ /g, '-')
      // return x
      // return flowcharts
    },
  },
  mixins: [akuma],
  methods: {
    pushMove(event) {
      this.$router.push('/' + event.target.value)
    },
    blockFrame(value) {
      if (value > 0) {
        return '+' + value
      } else if (value < 0) {
        return '-' + value
      } else {
        return value
      }
    },
    rowClass(item, type) {
      if (!item || type !== 'row') return
      if (item.status === 'awesome') return 'table-success'
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
          Content: this.form.content,
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
    },
  },
}
</script>
