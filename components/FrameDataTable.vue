<template>
  <div>
    <b-row>
      current punish: {{ filter }}
      <b-col>
        <ul>
          <li v-if="move.blockFrame == filter" v-for="move in data">
            {{ move.command }}
          </li>
        </ul>
      </b-col>
    </b-row>

    <br />

    <b-form-group
      label="Filter Moves"
      label-cols-sm="1"
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

        <b-form-select v-model="filter" :options="punishable"></b-form-select>

        <template>
          <div>
            <b-form-group label="Filter by Move Type">
              <b-form-radio
                v-model="filter"
                v-for="(item, index) in moveType"
                :key="index"
                name="some-radios"
                :value="item"
                >{{ item }}</b-form-radio
              >
            </b-form-group>
          </div>
        </template>

        <b-input-group-append>
          <b-button :disabled="!filter" @click="filter = null">Clear</b-button>
        </b-input-group-append>
      </b-input-group>
    </b-form-group>

    <b-table
      sticky-header="60vh"
      bordered
      striped
      hover
      :tbody-tr-class="rowClass"
      :filter="filter"
      :items="data"
      :fields="fieldsx"
      no-border-collapse
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

      <!-- Collapse Toggle Feild -->
      <template v-slot:cell(command)="row">
        <b-button size="sm" @click="row.toggleDetails" class="mr-2">
          <!-- <span v-if="row.item.notes.properties.homing == 'homing'">
                  <i class="fas fa-circle-notch"></i>
                </span>
                <span v-if="row.item.notes.properties.tailSpin == 'tail spin'">
                  <i class="fas fa-circle"></i>
                </span> -->
          {{ row.detailsShowing ? 'Hide' : 'Show' }} Details
          {{ row.item.command }}
        </b-button>
      </template>
      <!-- End Collapse Toggle Feild -->

      <!-- Block Frame field -->
      <template v-slot:cell(blockFrame)="row">
        <!-- {{row.item.blockFrame}} -->
        <span>{{ blockFrame(row.item.blockFrame) }}</span>
      </template>
      <!-- End Collapse Toggle Feild -->

      <!-- Notes Feild -->
      <template v-slot:row-details="row">
        <b-card>
          <b-row class="mb-2">
            <b-col sm="3" class="text-sm-right"><b>Notes:</b></b-col>
            <b-col>{{ row.item.notes }}</b-col>
          </b-row>

          <b-button size="sm" @click="row.toggleDetails">Hide Details</b-button>
        </b-card>
      </template>
      <!-- End Notes Feild -->

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
  </div>
</template>

<script>
export default {
  props: {
    data: Array,
    fields: Array,
    filter: String,
  },
  data() {
    return {
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
      moveType: ['Power Crush', 'Homing'],
    }
  },
  methods: {
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
  },
}
</script>