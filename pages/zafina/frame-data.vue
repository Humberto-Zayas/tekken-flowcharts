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

    <b-container class="bv-example-row">
      <!-- Input Form for Strapi No Auth -->
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
      <!-- Input Form for Strapi No Auth End -->
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
import zafina from '~/mixins/characterData/zafina.js'
import FrameDataTable from '@/components/FrameDataTable.vue'

const apiUrl = process.env.API_URL || 'http://localhost:1339'
export default {
  components: {
    FrameDataTable,
  },
  data() {
    return {
      filter: null,
      punish: true,
      selected: [],
      form: {
        name: '',
        content: '',

        // food: null,
        // checked: []
      },
      punishable: [
        { value: null, text: 'Choose Minus Frames' },
        { value: '-10', text: '-10' },
        { value: '-11', text: '-11' },
        { value: '-12', text: '-12' },
        { value: '-13', text: '-13' },
        { value: '-14', text: '-14' },
        { value: '-15', text: '-15' },
        { value: '-16', text: '-16' },
        { value: '-17', text: '-17' },
        { value: '-18', text: '-18' },
      ],
      show: true,
    }
  },
  computed: {
    currentCharacter() {
      return 'Zafina'
    },
    cptItems() {
      return this.zafina.map((item) => {
        let tmp = item
        // item.blockFrame>0?tmp.variant='danger':tmp.variant='success';
        // return tmp;
        if (this.filter != '') {
          tmp.variant = 'danger'
          return tmp
        }
      })
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
  mixins: [zafina],
  methods: {
    pushMove(event) {
      this.$router.push('/' + event.target.value)
    },
    rowClass(item, type) {
      if (!item || type !== 'row') return
      if (item.status === 'awesome') return 'table-success'
    },
    crouchStatus(val) {
      return parseInt(val) + 's'
    },
    filterTable(row, filter) {
      this.filter = 'punish'
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
