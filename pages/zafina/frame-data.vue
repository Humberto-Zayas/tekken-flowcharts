<template>
  <div>
    
    <b-container class="bv-example-row">
      <br />
      <b-row>
        <b-col>
          <h1>
            {{ currentCharacter }}
          </h1>
        </b-col>
      </b-row>

      <br />
     
      <b-form-group
          label="Filter"
          label-cols-sm="3"
          label-align-sm="right"
          label-size="sm"
          label-for="filterInput"
          class="mb-0"
        >
          <b-input-group size="sm">
            <b-form-input
              v-model="filter"
              type="search"
              id="filterInput"
              placeholder="Type to Search"
            ></b-form-input>
            <b-input-group-append>
              <b-button :disabled="!filter" @click="filter = ''">Clear</b-button>
            </b-input-group-append>
          </b-input-group>
        </b-form-group>

        <b-form-group
          label="Filter On"
          label-cols-sm="3"
          label-align-sm="right"
          label-size="sm"
          description="Leave all unchecked to filter on all data"
          class="mb-0">
          <b-form-checkbox-group class="mt-1">
            <b-form-checkbox value="name">Punish</b-form-checkbox>
            
          </b-form-checkbox-group>
        </b-form-group>

        
     
      <b-table
        sticky-header="60vh"
        bordered
        striped
        hover
        :tbody-tr-class="rowClass"
        :filter="filter"
        :items="zafina"
        :fields="fieldsx"
        no-border-collapse="noCollapse"
        responsive
        
      >

        <template v-slot:cell(moveType)="row">
          
            <span v-for="(item, index) in row.item.moveType">
              <span v-if="item == 'homing'">
                <i class="fas fa-arrows-alt-h"></i>
              </span>
              <span v-if="item == 'tail spin'">
                <i class="fas fa-circle-notch"></i>
              </span>
              <span v-if="item == 'power crush'">
                <i class="fas fa-fist-raised"></i>
              </span>
              <span v-if="item == 'wall bounce'">
                <i class="fas fa-angle-double-left"></i>
              </span>
            </span>
            <!-- <i v-show="row.item.moveType == 'homing'" class="fas fa-circle"></i> -->

            <!-- <i v-show="row.item.moveType == 'homing'" class="fas fa-arrows-alt-h"></i> -->
          

          
        </template>

        <!-- <template v-slot:row-details="row">
          <b-card>
            <b-row class="mb-2">
              <b-col sm="3" class="text-sm-right"><b>Notes:</b></b-col>
              <b-col>{{ row.item.notes }}</b-col>
            </b-row>


            <b-button size="sm" @click="row.toggleDetails">Hide Details</b-button>
          </b-card>
        </template> -->


        <template v-slot:cell(command)="row">
          <b-button size="sm" @click="row.toggleDetails" class="mr-2">
            <!-- <span v-if="row.item.notes.properties.homing == 'homing'">
              <i class="fas fa-circle-notch"></i>
            </span>
            <span v-if="row.item.notes.properties.tailSpin == 'tail spin'">
              <i class="fas fa-circle"></i>
            </span> -->
            {{ row.detailsShowing ? 'Hide' : 'Show'}} Details {{row.item.command}}
          </b-button>

          
        </template>

        <template v-slot:row-details="row">
          <b-card>
            <b-row class="mb-2">
              <b-col sm="3" class="text-sm-right"><b>Notes:</b></b-col>
              <b-col>{{ row.item.notes }}</b-col>
            </b-row>


            <b-button size="sm" @click="row.toggleDetails">Hide Details</b-button>
          </b-card>
        </template>

        <!-- <template v-slot:cell(show_details)="row">
          <b-button size="sm" @click="row.toggleDetails" class="mr-2">
            {{ row.detailsShowing ? 'Hide' : 'Show'}} Details
          </b-button>

          
        </template>

        <template v-slot:row-details="row">
          <b-card>
            <b-row class="mb-2">
              <b-col sm="3" class="text-sm-right"><b>Notes:</b></b-col>
              <b-col>{{ row.item.notes }}</b-col>
            </b-row>


            <b-button size="sm" @click="row.toggleDetails">Hide Details</b-button>
          </b-card>
        </template> -->
      </b-table>

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
import zafina from "~/mixins/zafina.js";

const apiUrl = process.env.API_URL || 'http://localhost:1339'
export default {
  data() {
    return {
      filter: null,
      punish: true,
      selected: [],
      form: {
        name: '',
        content: ''

        // food: null,
        // checked: []
      },
      show: true
    }
  },
  computed: {
    currentCharacter() {
      return 'Zafina'
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
      return parseInt(val) + "s"
    },
    filterTable(row, filter) {
        this.filter = "punish"
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
