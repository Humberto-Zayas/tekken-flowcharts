<template>
  <div>
    <!-- <b-breadcrumb :items="items"></b-breadcrumb> -->
    <b-container class="bv-example-row">
      <br />
      <b-row>
        <b-col class="">
          <h1>
            <!-- {{ xcharacters[1].id }} -->
            Zafina vs Lucky Chloe
          </h1>
        </b-col>
      </b-row>
      <b-row>
        <b-col v-for="n in x" :key="n" class="flowchart-col" cols="2">
          <template>
            <div>
              <b-form-select
                v-model="selected[n]"
                :options="xcharacters[0].moves"
                text-field="Move"
              >
              </b-form-select>
              <div class="mt-3">
                Selected: <strong>{{ selected[n] }}</strong>
                <br />
                Frames: {{ currFrame }}
              </div>
            </div>
          </template>
          <template>
            <div>
              <b-form-group label="Individual radios">
                <b-form-radio
                  v-model="hitstatus[n]"
                  name="some-radios"
                  value="A"
                  >On Hit</b-form-radio
                >
                <b-form-radio
                  v-model="hitstatus[n]"
                  name="some-radios"
                  value="B"
                  >On Block</b-form-radio
                >
              </b-form-group>

              <div class="mt-3">
                Selected: <strong>{{ hitstatus[n] }}</strong>
              </div>
            </div>
          </template>
        </b-col>
        <span class="addFlowChart" @click="x += 1">&#43;</span>
      </b-row>

      <br />

      <b-table
        sticky-header="60vh"
        bordered
        striped
        hover
        :items="xcharacters[0].moves"
        :fields="fields"
      >
        <template v-slot:cell(Level)="data">
          <nuxt-link to="/">{{ data.value }} hee</nuxt-link>
        </template>
      </b-table>
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
      x: 1,
      hitstatus: [],
      selected: [],
      form: {
        name: '',
        content: ''

        // food: null,
        // checked: []
      },
      show: true,
      id: this.$route.params.id,
      fields: [
        {
          key: 'Move',
          sortable: true
        },
        {
          key: 'Level',
          sortable: false
        },
        {
          key: 'Damage',
          // label: 'Person age',
          sortable: true
          // Variant applies to the whole column, including the header and footer
          // variant: 'danger'
        },
        {
          key: 'Startup',
          label: 'Frames',
          sortable: true
          // Variant applies to the whole column, including the header and footer
          // variant: 'danger'
        },
        {
          key: 'Block',
          label: 'On Block',
          sortable: false
        },
        {
          key: 'Hit',
          label: 'On Hit',
          sortable: true
        },
        {
          key: 'Counter Hit',
          sortable: true
        },
        {
          key: 'Notes',
          sortable: false
        }
      ],
      xcharacters: [
        {
          id: 'Zafina',
          moves: [
            {
              Move: 'df3+4',
              Level: 'm',
              Damage: '55',
              Startup: '20',
              Block: '-22',
              Hit: 'KND',
              'Counter Hit': 'KND',
              Notes: 'Rage Art'
            },
            {
              Move: 'f2+3',
              Level: 'm,m',
              Damage: '10,20',
              Startup: '14',
              Block: '+19g',
              Hit: 'Launch',
              'Counter Hit': 'Launch',
              Notes: 'Rage Drive'
            },
            {
              Move: '1',
              Level: 'h',
              Damage: '7',
              Startup: '10',
              Block: '+1',
              Hit: '+8',
              'Counter Hit': '+8',
              Notes: ''
            },
            {
              Move: '1,2',
              Level: 'h,h',
              Damage: '7,9',
              Startup: '10',
              Block: '-4',
              Hit: '+4',
              'Counter Hit': '+4',
              Notes: ''
            },
            {
              Move: '1,2,3',
              Level: 'h,h,h,(SCR)',
              Damage: '7,9,12',
              Startup: '10',
              Block: '0',
              Hit: '+10g',
              'Counter Hit': '+10g',
              Notes: ''
            },
            {
              Move: '1,2,3~b',
              Level: 'h,h,h',
              Damage: '7,9,12',
              Startup: '10',
              Block: '-9',
              Hit: '0',
              'Counter Hit': '0',
              Notes: ''
            },
            {
              Move: '1,3',
              Level: 'h,h,(SCR)',
              Damage: '7,14',
              Startup: '10',
              Block: '-4',
              Hit: '+5',
              'Counter Hit': '+5',
              Notes: ''
            },
            {
              Move: '1,3~b',
              Level: 'h,h',
              Damage: '7,14',
              Startup: '10',
              Block: '-8',
              Hit: '+1',
              'Counter Hit': '+1',
              Notes: ''
            },
            {
              Move: '1,4',
              Level: 'h,m,(TRT)',
              Damage: '7,17',
              Startup: '10',
              Block: '-5',
              Hit: '+2',
              'Counter Hit': 'Launch',
              Notes: ''
            },
            {
              Move: '2',
              Level: 'h',
              Damage: '8',
              Startup: '10',
              Block: '-7',
              Hit: '-1',
              'Counter Hit': '-1',
              Notes: ''
            },
            {
              Move: '2,1',
              Level: 'h,m',
              Damage: '8,9',
              Startup: '10',
              Block: '-6s',
              Hit: '+2s',
              'Counter Hit': '+2s',
              Notes: ''
            },
            {
              Move: '2,1,3',
              Level: 'h,m,l,(MNT)',
              Damage: '8,9,17',
              Startup: '10',
              Block: '-17',
              Hit: 'KND',
              'Counter Hit': 'KND',
              Notes: ''
            },
            {
              Move: '2,1,3~d',
              Level: 'h,m,(MNT)',
              Damage: '8,9',
              Startup: '10',
              Block: '-17s',
              Hit: '-9s',
              'Counter Hit': '-9s',
              Notes: ''
            },
            {
              Move: '2,2',
              Level: 'h,m',
              Damage: '8,12',
              Startup: '10',
              Block: '-9',
              Hit: '+2',
              'Counter Hit': '+7',
              Notes: ''
            },
            {
              Move: '2,2,1+2',
              Level: 'h,m,m(x3)',
              Damage: '8,12,7,11,14',
              Startup: '10',
              Block: '-9s',
              Hit: 'KND',
              'Counter Hit': 'KND',
              Notes: ''
            },
            {
              Move: '3',
              Level: 'h,(SCR)',
              Damage: '17',
              Startup: '13',
              Block: '0',
              Hit: '+9',
              'Counter Hit': '+9',
              Notes: ''
            },
            {
              Move: '3,b',
              Level: 'h',
              Damage: '17',
              Startup: '13',
              Block: '-8',
              Hit: '+1',
              'Counter Hit': '+1',
              Notes: ''
            },
            {
              Move: '4',
              Level: 'h',
              Damage: '19',
              Startup: '14',
              Block: '-6',
              Hit: '-1',
              'Counter Hit': 'KND',
              Notes: ''
            },
            {
              Move: '1+2',
              Level: 'm',
              Damage: '20',
              Startup: '16',
              Block: '-12',
              Hit: '+4',
              'Counter Hit': 'CS',
              Notes: ''
            },
            {
              Move: '1+2,4',
              Level: 'm,m',
              Damage: '20,12',
              Startup: '16',
              Block: '-10',
              Hit: '+1',
              'Counter Hit': '+6',
              Notes: ''
            },
            {
              Move: '1+2,4,4',
              Level: 'm,m,m',
              Damage: '20,12,26',
              Startup: '16',
              Block: '-11',
              Hit: 'Launch',
              'Counter Hit': 'Launch',
              Notes: 'Screw'
            },
            {
              Move: 'f2',
              Level: 'm',
              Damage: '17',
              Startup: '19',
              Block: '-18',
              Hit: '-6',
              'Counter Hit': 'CS',
              Notes: ''
            },
            {
              Move: 'f2,3',
              Level: 'm,h,(SCR)',
              Damage: '17,12',
              Startup: '19',
              Block: '0',
              Hit: '+9',
              'Counter Hit': '+9',
              Notes: ''
            },
            {
              Move: 'f2,3~b',
              Level: 'm,h',
              Damage: '17,12',
              Startup: '19',
              Block: '-9',
              Hit: '0',
              'Counter Hit': '0',
              Notes: ''
            },
            {
              Move: 'f2,3,4',
              Level: 'm,h,m',
              Damage: '17,12,25',
              Startup: '19',
              Block: '-18',
              Hit: 'KND',
              'Counter Hit': 'KND',
              Notes: 'Wall Bounce'
            },
            {
              Move: 'f3',
              Level: 'h,(SCR)',
              Damage: '28',
              Startup: '21',
              Block: '+3',
              Hit: 'Launch',
              'Counter Hit': 'Launch',
              Notes: 'Screw'
            },
            {
              Move: 'f3~b',
              Level: 'h',
              Damage: '28',
              Startup: '21',
              Block: '-1',
              Hit: 'Launch',
              'Counter Hit': 'Launch',
              Notes: 'Screw'
            },
            {
              Move: 'f4',
              Level: 'h',
              Damage: '13',
              Startup: '14',
              Block: '-6',
              Hit: 'KND',
              'Counter Hit': 'KND',
              Notes: 'Screw'
            },
            {
              Move: 'f1+2',
              Level: 'm',
              Damage: '24',
              Startup: '19',
              Block: '-10',
              Hit: 'KND',
              'Counter Hit': 'KND',
              Notes: 'Wall Bounce'
            },
            {
              Move: 'df1',
              Level: 'm',
              Damage: '11',
              Startup: '13',
              Block: '-5',
              Hit: '+7',
              'Counter Hit': '+7',
              Notes: ''
            },
            {
              Move: 'df1,2',
              Level: 'm,m',
              Damage: '11,16',
              Startup: '13',
              Block: '-13',
              Hit: '+3',
              'Counter Hit': '+3',
              Notes: ''
            },
            {
              Move: 'df1,2,1',
              Level: 'm,m,m',
              Damage: '11,16,20',
              Startup: '13',
              Block: '-13',
              Hit: 'KND',
              'Counter Hit': 'KND',
              Notes: ''
            },
            {
              Move: 'df1,4',
              Level: 'm,h',
              Damage: '11,18',
              Startup: '13',
              Block: '-6',
              Hit: '+12g',
              'Counter Hit': '+12g',
              Notes: 'Screw'
            },
            {
              Move: 'df2',
              Level: 'm',
              Damage: '13',
              Startup: '16',
              Block: '-12',
              Hit: 'Launch',
              'Counter Hit': 'Launch',
              Notes: ''
            },
            {
              Move: 'df3',
              Level: 'm,(SCR)',
              Damage: '15',
              Startup: '14',
              Block: '-5',
              Hit: '+4',
              'Counter Hit': '+4',
              Notes: ''
            },
            {
              Move: 'df3~b',
              Level: 'm',
              Damage: '15',
              Startup: '14',
              Block: '-10',
              Hit: '-1',
              'Counter Hit': '-1',
              Notes: ''
            },
            {
              Move: 'df3,4',
              Level: 'm,h',
              Damage: '15,17',
              Startup: '14',
              Block: '-6',
              Hit: 'KND',
              'Counter Hit': 'CS',
              Notes: 'Screw'
            },
            {
              Move: 'df3,d4',
              Level: 'm,l',
              Damage: '15,15',
              Startup: '14s',
              Block: '-14',
              Hit: '+1s',
              'Counter Hit': '+1s',
              Notes: ''
            },
            {
              Move: 'df4',
              Level: 'm',
              Damage: '14',
              Startup: '14',
              Block: '-13',
              Hit: '+3',
              'Counter Hit': '+3',
              Notes: ''
            },
            {
              Move: 'df4,1',
              Level: 'm,m',
              Damage: '14,22',
              Startup: '14',
              Block: '-13s',
              Hit: 'KND',
              'Counter Hit': 'KND',
              Notes: ''
            },
            {
              Move: 'df4,1~d',
              Level: 'm',
              Damage: '14',
              Startup: '14s',
              Block: '-18',
              Hit: '-2',
              'Counter Hit': '-2',
              Notes: ''
            },
            {
              Move: 'df4,2',
              Level: 'm,m',
              Damage: '14,20',
              Startup: '14',
              Block: '-13',
              Hit: 'KND',
              'Counter Hit': 'KND',
              Notes: ''
            },
            {
              Move: 'df1+2',
              Level: 'm',
              Damage: '20',
              Startup: '36',
              Block: '-9',
              Hit: 'CS',
              'Counter Hit': 'CS',
              Notes: 'Homing'
            },
            {
              Move: 'd1',
              Level: 'm',
              Damage: '11',
              Startup: '12',
              Block: '-16',
              Hit: '-8s',
              'Counter Hit': '-3s',
              Notes: ''
            },
            {
              Move: 'd1,1',
              Level: 'm,m',
              Damage: '11,17',
              Startup: '12',
              Block: '-12',
              Hit: 'KND',
              'Counter Hit': 'CS',
              Notes: ''
            },
            {
              Move: 'd2',
              Level: 'm',
              Damage: '17',
              Startup: '19',
              Block: '-16s',
              Hit: '-3s',
              'Counter Hit': 'KND',
              Notes: ''
            },
            {
              Move: 'd2,4',
              Level: 'm,m,(MNT)',
              Damage: '17,13',
              Startup: '19',
              Block: '-22',
              Hit: '-4',
              'Counter Hit': '-4s',
              Notes: ''
            },
            {
              Move: 'd2,4~d',
              Level: 'm,m,(TRT)',
              Damage: '17,13',
              Startup: '19',
              Block: '-22',
              Hit: '-4',
              'Counter Hit': '-4s',
              Notes: ''
            },
            {
              Move: 'd2,4,3',
              Level: 'm,m,m',
              Damage: '17,13,15',
              Startup: '19',
              Block: '-14',
              Hit: 'Launch',
              'Counter Hit': 'Launch',
              Notes: ''
            },
            {
              Move: 'd3',
              Level: 'l',
              Damage: '14',
              Startup: '22s',
              Block: '-15',
              Hit: '+2s',
              'Counter Hit': 'Launch',
              Notes: ''
            },
            {
              Move: 'd3~d',
              Level: 'l,(MNT)',
              Damage: '14',
              Startup: '22',
              Block: '-13',
              Hit: '+4s',
              'Counter Hit': 'Launch',
              Notes: ''
            },
            {
              Move: 'd4',
              Level: 'l',
              Damage: '8',
              Startup: '17',
              Block: '-19',
              Hit: '-3',
              'Counter Hit': '+7',
              Notes: ''
            },
            {
              Move: 'd4,3',
              Level: 'l,h',
              Damage: '8,10',
              Startup: '17',
              Block: '-6',
              Hit: 'Launch',
              'Counter Hit': 'Launch',
              Notes: ''
            },
            {
              Move: 'db1',
              Level: 'Sm',
              Damage: '5',
              Startup: '10',
              Block: '-5',
              Hit: '+6',
              'Counter Hit': '+6',
              Notes: ''
            },
            {
              Move: 'db2',
              Level: 'm',
              Damage: '17',
              Startup: '13',
              Block: '-9',
              Hit: '+3',
              'Counter Hit': 'KND',
              Notes: ''
            },
            {
              Move: 'db3',
              Level: 'l,(SCR)',
              Damage: '15',
              Startup: '18',
              Block: '-8',
              Hit: '+3',
              'Counter Hit': '+3',
              Notes: ''
            },
            {
              Move: 'db3~b',
              Level: 'l',
              Damage: '15',
              Startup: '18',
              Block: '-11',
              Hit: '0',
              'Counter Hit': '0',
              Notes: ''
            },
            {
              Move: 'db4',
              Level: 'l',
              Damage: '14',
              Startup: '21',
              Block: '-13',
              Hit: '-4',
              'Counter Hit': '+3',
              Notes: ''
            },
            {
              Move: 'db4~d',
              Level: 'l,(MNT)',
              Damage: '14',
              Startup: '21',
              Block: '-14',
              Hit: '-5',
              'Counter Hit': '+2',
              Notes: ''
            },
            {
              Move: 'db4,2',
              Level: 'l,m',
              Damage: '14,17',
              Startup: '21',
              Block: '-13',
              Hit: 'Launch',
              'Counter Hit': 'Launch',
              Notes: ''
            },
            {
              Move: 'db1+2',
              Level: 'l,(MNT)',
              Damage: '17',
              Startup: '28',
              Block: '-16',
              Hit: 'Launch',
              'Counter Hit': 'Launch',
              Notes: ''
            },
            {
              Move: 'db1+2,1+2',
              Level: 'l,m',
              Damage: '17,14',
              Startup: '28',
              Block: '-14',
              Hit: 'KND',
              'Counter Hit': 'KND',
              Notes: ''
            },
            {
              Move: 'b1',
              Level: 'm',
              Damage: '14',
              Startup: '18',
              Block: '-14',
              Hit: '+2',
              'Counter Hit': '+2',
              Notes: ''
            },
            {
              Move: 'b1:1+2',
              Level: 'm',
              Damage: '14,42',
              Startup: '18',
              Block: '-14',
              Hit: 'KND',
              'Counter Hit': 'KND',
              Notes: ''
            },
            {
              Move: 'b2',
              Level: 'h',
              Damage: '22',
              Startup: '22',
              Block: '-5',
              Hit: 'KND',
              'Counter Hit': 'Launch',
              Notes: 'Homing'
            },
            {
              Move: 'b3',
              Level: 'm',
              Damage: '23',
              Startup: '24',
              Block: '-9s',
              Hit: '-5s',
              'Counter Hit': '-5s',
              Notes: 'Armors frame 8+'
            },
            {
              Move: 'b3~d',
              Level: 'm,(MNT)',
              Damage: '23',
              Startup: '24',
              Block: '-8s',
              Hit: '-4s',
              'Counter Hit': '-4s',
              Notes: 'Armors frame 8+'
            },
            {
              Move: 'b4',
              Level: 'm',
              Damage: '14',
              Startup: '22',
              Block: '-9',
              Hit: '+4',
              'Counter Hit': '+4',
              Notes: ''
            },
            {
              Move: 'b4,4',
              Level: 'm,m',
              Damage: '14,20',
              Startup: '22',
              Block: '-14',
              Hit: 'KND',
              'Counter Hit': 'KND',
              Notes: ''
            },
            {
              Move: 'b1+2',
              Level: 'l',
              Damage: '12',
              Startup: '16',
              Block: '-17',
              Hit: '-2s',
              'Counter Hit': '-2s',
              Notes: ''
            },
            {
              Move: 'b2+3',
              Level: '!',
              Damage: '40',
              Startup: '64',
              Block: '!',
              Hit: 'KND',
              'Counter Hit': 'KND',
              Notes: ''
            },
            {
              Move: 'ub_u1',
              Level: 'm',
              Damage: '12',
              Startup: '18',
              Block: '-12',
              Hit: '-1',
              'Counter Hit': '-1',
              Notes: ''
            },
            {
              Move: 'uf1',
              Level: 'h',
              Damage: '20',
              Startup: '19',
              Block: '+4',
              Hit: '+9',
              'Counter Hit': '+9',
              Notes: ''
            },
            {
              Move: 'ub_u_uf2',
              Level: 'h',
              Damage: '17',
              Startup: '15',
              Block: '-12',
              Hit: '+9',
              'Counter Hit': '+9',
              Notes: ''
            },
            {
              Move: 'ub3',
              Level: 'm',
              Damage: '19',
              Startup: '22',
              Block: '-17',
              Hit: '-6',
              'Counter Hit': '-6',
              Notes: ''
            },
            {
              Move: 'u3',
              Level: 'm',
              Damage: '25',
              Startup: '22',
              Block: '-8',
              Hit: 'KND',
              'Counter Hit': 'KND',
              Notes: ''
            },
            {
              Move: 'uf3',
              Level: 'm',
              Damage: '25',
              Startup: '22',
              Block: '-8',
              Hit: 'KND',
              'Counter Hit': 'KND',
              Notes: ''
            },
            {
              Move: 'ub4',
              Level: 'm',
              Damage: '16',
              Startup: '17',
              Block: '-17',
              Hit: '-6',
              'Counter Hit': '-6',
              Notes: ''
            },
            {
              Move: 'u4',
              Level: 'm',
              Damage: '18',
              Startup: '17',
              Block: '-13',
              Hit: 'Launch',
              'Counter Hit': 'Launch',
              Notes: ''
            },
            {
              Move: 'uf4',
              Level: 'm',
              Damage: '18',
              Startup: '17',
              Block: '-13',
              Hit: 'Launch',
              'Counter Hit': 'Launch',
              Notes: ''
            },
            {
              Move: 'uf,n4',
              Level: 'm',
              Damage: '25',
              Startup: '25',
              Block: '-9',
              Hit: 'KND',
              'Counter Hit': 'KND',
              Notes: ''
            },
            {
              Move: 'UF4',
              Level: 'm',
              Damage: '25',
              Startup: '25',
              Block: '-8',
              Hit: '+3',
              'Counter Hit': '+3',
              Notes: ''
            },
            {
              Move: 'uf1+2',
              Level: 'm,(TRT)',
              Damage: '20',
              Startup: '21',
              Block: '-7',
              Hit: '+6',
              'Counter Hit': 'CS',
              Notes: ''
            },
            {
              Move: 'ub,b',
              Level: '-',
              Damage: '-',
              Startup: '50',
              Block: '-',
              Hit: '-',
              'Counter Hit': '-',
              Notes: ''
            },
            {
              Move: 'ub,b3+4',
              Level: '(MNT)',
              Damage: '-',
              Startup: '56',
              Block: '-',
              Hit: '-',
              'Counter Hit': '-',
              Notes: ''
            },
            {
              Move: 'ff2',
              Level: 'h',
              Damage: '28',
              Startup: '15',
              Block: '+1',
              Hit: 'KND',
              'Counter Hit': 'Launch',
              Notes: 'Homing, Screw'
            },
            {
              Move: 'ff3',
              Level: 'm,(SCR)',
              Damage: '24',
              Startup: '20',
              Block: '+4',
              Hit: '+9s',
              'Counter Hit': 'CS',
              Notes: ''
            },
            {
              Move: 'ff3~b',
              Level: 'm',
              Damage: '24',
              Startup: '20',
              Block: '+4',
              Hit: '+9s',
              'Counter Hit': 'CS',
              Notes: ''
            },
            {
              Move: 'ff3,1',
              Level: 'm,m',
              Damage: '24,24',
              Startup: '20',
              Block: '-16',
              Hit: 'KND',
              'Counter Hit': 'KND',
              Notes: ''
            },
            {
              Move: 'ff4',
              Level: 'm',
              Damage: '22',
              Startup: '17',
              Block: '-8',
              Hit: 'KND',
              'Counter Hit': 'KND',
              Notes: 'Homing, Screw'
            },
            {
              Move: 'ff3+4',
              Level: 'm,m',
              Damage: '10,21',
              Startup: '21',
              Block: '-11',
              Hit: 'KND',
              'Counter Hit': 'KND',
              Notes: ''
            },
            {
              Move: 'ff3+4~d',
              Level: 'm,m,(MNT)',
              Damage: '10,21',
              Startup: '21',
              Block: '-12',
              Hit: 'KND',
              'Counter Hit': 'KND',
              Notes: ''
            },
            {
              Move: 'wr3',
              Level: 'm',
              Damage: '30',
              Startup: '23',
              Block: '+6',
              Hit: 'KND',
              'Counter Hit': 'KND',
              Notes: ''
            },
            {
              Move: 'wr4(3 step)',
              Level: 'l',
              Damage: '21',
              Startup: '14',
              Block: '-40',
              Hit: 'KND',
              'Counter Hit': 'KND',
              Notes: ''
            },
            {
              Move: 'wr4~d(3 step)',
              Level: 'l,(TRT)',
              Damage: '21',
              Startup: '14',
              Block: '-51',
              Hit: 'KND',
              'Counter Hit': 'KND',
              Notes: ''
            },
            {
              Move: 'wr4~u(3 step)',
              Level: 'l, BT',
              Damage: '21',
              Startup: '14',
              Block: '-52',
              Hit: 'KND',
              'Counter Hit': 'KND',
              Notes: ''
            },
            {
              Move: 'FC 1',
              Level: 'Sm',
              Damage: '5',
              Startup: '10',
              Block: '-5',
              Hit: '+6',
              'Counter Hit': '+6',
              Notes: ''
            },
            {
              Move: 'FC 2',
              Level: 'Sm',
              Damage: '8',
              Startup: '11',
              Block: '-4',
              Hit: '+7',
              'Counter Hit': '+7',
              Notes: ''
            },
            {
              Move: 'FC 3',
              Level: 'l',
              Damage: '12',
              Startup: '16',
              Block: '-17',
              Hit: '-3',
              'Counter Hit': '-3',
              Notes: ''
            },
            {
              Move: 'FC 4',
              Level: 'l',
              Damage: '10',
              Startup: '12',
              Block: '-15',
              Hit: '-4',
              'Counter Hit': '-4',
              Notes: ''
            },
            {
              Move: 'ws1',
              Level: 'm',
              Damage: '9',
              Startup: '15',
              Block: '-10',
              Hit: '+1',
              'Counter Hit': '+1',
              Notes: ''
            },
            {
              Move: 'ws1,2',
              Level: 'm,m',
              Damage: '9,10',
              Startup: '15',
              Block: '-13',
              Hit: 'Launch',
              'Counter Hit': 'Launch',
              Notes: ''
            },
            {
              Move: 'ws2',
              Level: 'm',
              Damage: '20',
              Startup: '18',
              Block: '-14',
              Hit: 'Launch',
              'Counter Hit': 'Launch',
              Notes: ''
            },
            {
              Move: 'ws2~d',
              Level: 'm,(MNT)',
              Damage: '20',
              Startup: '18',
              Block: '-40',
              Hit: 'Launch',
              'Counter Hit': 'Launch',
              Notes: ''
            },
            {
              Move: 'ws3',
              Level: 'h,(SCR)',
              Damage: '24',
              Startup: '16',
              Block: '+5',
              Hit: 'KND',
              'Counter Hit': 'Launch',
              Notes: ''
            },
            {
              Move: 'ws3~b',
              Level: 'h',
              Damage: '24',
              Startup: '16',
              Block: '-10',
              Hit: 'KND',
              'Counter Hit': 'Launch',
              Notes: ''
            },
            {
              Move: 'ws4',
              Level: 'm',
              Damage: '18',
              Startup: '11',
              Block: '-9',
              Hit: '+2',
              'Counter Hit': '+2',
              Notes: ''
            },
            {
              Move: 'FC df3',
              Level: 'l',
              Damage: '15',
              Startup: '23',
              Block: '-26',
              Hit: 'KND',
              'Counter Hit': 'KND',
              Notes: ''
            },
            {
              Move: 'FC df3~d',
              Level: 'l,(MNT)',
              Damage: '15',
              Startup: '23',
              Block: '-26',
              Hit: 'KND',
              'Counter Hit': 'KND',
              Notes: ''
            },
            {
              Move: 'ss1+2',
              Level: 'm',
              Damage: '22',
              Startup: '17',
              Block: '-2s',
              Hit: '+8s',
              'Counter Hit': 'KND',
              Notes: ''
            },
            {
              Move: 'd1+2',
              Level: '(TRT)',
              Damage: '-',
              Startup: '-',
              Block: '-',
              Hit: '-',
              'Counter Hit': '-',
              Notes: ''
            },
            {
              Move: 'TRT~db',
              Level: '-',
              Damage: '-',
              Startup: '37',
              Block: '-',
              Hit: '-',
              'Counter Hit': '-',
              Notes: 'Stance Cancel'
            },
            {
              Move: 'TRT 1',
              Level: 'l,(TRT)',
              Damage: '11',
              Startup: '18',
              Block: '-11',
              Hit: '+5',
              'Counter Hit': 'KND',
              Notes: ''
            },
            {
              Move: 'TRT 2',
              Level: 'm',
              Damage: '24',
              Startup: '34',
              Block: '-9',
              Hit: 'Launch',
              'Counter Hit': 'Launch',
              Notes: ''
            },
            {
              Move: 'TRT 3',
              Level: 'm,(TRT)',
              Damage: '16',
              Startup: '14',
              Block: '-7',
              Hit: 'KND',
              'Counter Hit': 'KND',
              Notes: ''
            },
            {
              Move: 'TRT 3~u',
              Level: 'm',
              Damage: '16',
              Startup: '14',
              Block: '-17',
              Hit: 'KND',
              'Counter Hit': 'KND',
              Notes: ''
            },
            {
              Move: 'TRT 3~d',
              Level: 'm,(MNT)',
              Damage: '16',
              Startup: '14',
              Block: '-14',
              Hit: 'KND',
              'Counter Hit': 'KND',
              Notes: ''
            },
            {
              Move: 'TRT 4',
              Level: 'm,(MNT)',
              Damage: '18',
              Startup: '26',
              Block: '-22',
              Hit: '-4',
              'Counter Hit': '-4s',
              Notes: ''
            },
            {
              Move: 'TRT 4~d',
              Level: 'm,(TRT)',
              Damage: '18',
              Startup: '26',
              Block: '-22',
              Hit: '-4',
              'Counter Hit': '-4s',
              Notes: ''
            },
            {
              Move: 'TRT 4,3',
              Level: 'm,m',
              Damage: '18,15',
              Startup: '26',
              Block: '-14',
              Hit: 'Launch',
              'Counter Hit': 'Launch',
              Notes: ''
            },
            {
              Move: 'TRT 1+2',
              Level: 'm,m',
              Damage: '7,20',
              Startup: '19',
              Block: '-12s',
              Hit: 'KND',
              'Counter Hit': 'KND',
              Notes: 'Screw'
            },
            {
              Move: 'TRT d1+2',
              Level: 'l,(MNT)',
              Damage: '20',
              Startup: '25',
              Block: '-21',
              Hit: 'KND',
              'Counter Hit': 'KND',
              Notes: ''
            },
            {
              Move: '3+4',
              Level: '(SCR)',
              Damage: '-',
              Startup: '-',
              Block: '-',
              Hit: '-',
              'Counter Hit': '-',
              Notes: ''
            },
            {
              Move: 'SCR~db',
              Level: '-',
              Damage: '-',
              Startup: '19',
              Block: '-',
              Hit: '-',
              'Counter Hit': '-',
              Notes: 'Stance Cancel'
            },
            {
              Move: 'SCR 1',
              Level: 'h,(SCR)',
              Damage: '12',
              Startup: '10',
              Block: '-2',
              Hit: '+9',
              'Counter Hit': '+9',
              Notes: ''
            },
            {
              Move: 'SCR 2',
              Level: 'm,(SCR)',
              Damage: '17',
              Startup: '14',
              Block: '-7',
              Hit: '+7',
              'Counter Hit': 'Launch',
              Notes: ''
            },
            {
              Move: 'SCR 2,2',
              Level: 'm,m',
              Damage: '17,17',
              Startup: '14',
              Block: '-10',
              Hit: '+8',
              'Counter Hit': 'KND',
              Notes: ''
            },
            {
              Move: 'SCR 3',
              Level: 'm,(SCR)',
              Damage: '15',
              Startup: '13',
              Block: '-6',
              Hit: '+5',
              'Counter Hit': '+5',
              Notes: ''
            },
            {
              Move: 'SCR 3,3',
              Level: 'm,m,(SCR)',
              Damage: '15,10',
              Startup: '13',
              Block: '-9',
              Hit: '+2',
              'Counter Hit': '+7',
              Notes: ''
            },
            {
              Move: 'SCR 3,3,4',
              Level: 'm,m,l',
              Damage: '15,10,15',
              Startup: '13',
              Block: '-25',
              Hit: 'Launch',
              'Counter Hit': 'Launch',
              Notes: ''
            },
            {
              Move: 'SCR 3,3,4~d',
              Level: 'm,m,l,(MNT)',
              Damage: '15,10,15',
              Startup: '13',
              Block: '-14',
              Hit: 'Launch',
              'Counter Hit': 'Launch',
              Notes: ''
            },
            {
              Move: 'SCR 3,f3',
              Level: 'm,h,(SCR)',
              Damage: '15,20',
              Startup: '13',
              Block: '+3',
              Hit: 'KND',
              'Counter Hit': 'KND',
              Notes: ''
            },
            {
              Move: 'SCR 4',
              Level: 'm,(SCR)',
              Damage: '25',
              Startup: '14',
              Block: '-13',
              Hit: 'Launch',
              'Counter Hit': 'Launch',
              Notes: 'Armors frame 8+'
            },
            {
              Move: 'SCR 4~b',
              Level: 'm',
              Damage: '25',
              Startup: '14',
              Block: '-18',
              Hit: 'Launch',
              'Counter Hit': 'Launch',
              Notes: ''
            },
            {
              Move: 'SCR 1+2',
              Level: 'm',
              Damage: '28',
              Startup: '17',
              Block: '+6',
              Hit: 'KND',
              'Counter Hit': 'Launch',
              Notes: ''
            },
            {
              Move: 'SCR 1+2~d',
              Level: 'm,(TRT)',
              Damage: '28',
              Startup: '17',
              Block: '+6',
              Hit: 'KND',
              'Counter Hit': 'Launch',
              Notes: ''
            },
            {
              Move: 'SCR 3+4',
              Level: 'm,m',
              Damage: '10,20',
              Startup: '18',
              Block: '-12',
              Hit: '+8',
              'Counter Hit': '+8',
              Notes: 'Screw'
            },
            {
              Move: 'SCR df3',
              Level: 'l',
              Damage: '10',
              Startup: '28s',
              Block: '-23',
              Hit: '-10',
              'Counter Hit': '-10',
              Notes: 'Homing'
            },
            {
              Move: 'SCR df3~d',
              Level: 'l,(MNT)',
              Damage: '10',
              Startup: '28',
              Block: '-23',
              Hit: '-15',
              'Counter Hit': '-15',
              Notes: ''
            },
            {
              Move: 'SCR df3,3',
              Level: 'l,l',
              Damage: '10,10',
              Startup: '28s',
              Block: '-23',
              Hit: 'Launch',
              'Counter Hit': 'Launch',
              Notes: 'Homing'
            },
            {
              Move: 'SCR df3,3~d',
              Level: 'l,l,(MNT)',
              Damage: '10,10',
              Startup: '28',
              Block: '-23',
              Hit: 'Launch',
              'Counter Hit': 'Launch',
              Notes: ''
            },
            {
              Move: 'SCR df4',
              Level: 'l',
              Damage: '17',
              Startup: '19',
              Block: '-14',
              Hit: '+7s',
              'Counter Hit': 'Launch',
              Notes: ''
            },
            {
              Move: 'SCR df4~d',
              Level: 'l,(MNT)',
              Damage: '17',
              Startup: '19',
              Block: '-14',
              Hit: '+7s',
              'Counter Hit': 'Launch',
              Notes: ''
            },
            {
              Move: 'SCR d3',
              Level: 'l,(SCR)',
              Damage: '10',
              Startup: '18',
              Block: '-6',
              Hit: '-3',
              'Counter Hit': '+9',
              Notes: ''
            },
            {
              Move: 'SCR d3,3',
              Level: 'l,h,(SCR)',
              Damage: '10,28',
              Startup: '18',
              Block: '+3',
              Hit: 'Launch',
              'Counter Hit': 'Launch',
              Notes: 'Screw'
            },
            {
              Move: 'SCR d3,3~b',
              Level: 'l,h',
              Damage: '10,28',
              Startup: '18',
              Block: '-1',
              Hit: 'Launch',
              'Counter Hit': 'Launch',
              Notes: 'Screw'
            },
            {
              Move: 'SCR d3,d3',
              Level: 'l,l,(SCR)',
              Damage: '10,15',
              Startup: '18',
              Block: '-8',
              Hit: '+8s',
              'Counter Hit': '+8s',
              Notes: ''
            },
            {
              Move: 'SCR d4',
              Level: 'l',
              Damage: '20',
              Startup: '24s',
              Block: '-25',
              Hit: 'KND',
              'Counter Hit': 'KND',
              Notes: ''
            },
            {
              Move: 'SCR d4~d',
              Level: 'l,(MNT)',
              Damage: '20',
              Startup: '24',
              Block: '-25',
              Hit: 'KND',
              'Counter Hit': 'KND',
              Notes: ''
            },
            {
              Move: 'SCR d3+4',
              Level: '(MNT)',
              Damage: '-',
              Startup: '-',
              Block: '-',
              Hit: '-',
              'Counter Hit': '-',
              Notes: ''
            },
            {
              Move: 'd3+4',
              Level: '(MNT)',
              Damage: '-',
              Startup: '-',
              Block: '-',
              Hit: '-',
              'Counter Hit': '-',
              Notes: ''
            },
            {
              Move: 'MNT~db',
              Level: '-',
              Damage: '-',
              Startup: '28',
              Block: '-',
              Hit: '-',
              'Counter Hit': '-',
              Notes: 'Blocks lows during'
            },
            {
              Move: 'MNT 1',
              Level: 'm',
              Damage: '12',
              Startup: '13',
              Block: '-6',
              Hit: '+5',
              'Counter Hit': '+5',
              Notes: ''
            },
            {
              Move: 'MNT 1,3',
              Level: 'm,h,(SCR)',
              Damage: '12,12',
              Startup: '13',
              Block: '0',
              Hit: '+9',
              'Counter Hit': '+9',
              Notes: ''
            },
            {
              Move: 'MNT 1,3~b',
              Level: 'm,h',
              Damage: '12,12',
              Startup: '13',
              Block: '-8',
              Hit: '+1',
              'Counter Hit': '+1',
              Notes: ''
            },
            {
              Move: 'MNT 2',
              Level: 'm,(MNT)',
              Damage: '19',
              Startup: '13',
              Block: '-14',
              Hit: '-3',
              'Counter Hit': 'CS',
              Notes: ''
            },
            {
              Move: 'MNT 2,1',
              Level: 'm,m,(MNT)',
              Damage: '19,10',
              Startup: '13',
              Block: '-14',
              Hit: '-3',
              'Counter Hit': '-3',
              Notes: ''
            },
            {
              Move: 'MNT 2,1,4',
              Level: 'm,m,m,(MNT)',
              Damage: '19,10,25',
              Startup: '13',
              Block: '-13',
              Hit: 'KND',
              'Counter Hit': 'KND',
              Notes: 'Screw'
            },
            {
              Move: 'MNT 2,1,4~b',
              Level: 'm,m,m',
              Damage: '19,10,25',
              Startup: '13',
              Block: '-15',
              Hit: 'KND',
              'Counter Hit': 'KND',
              Notes: ''
            },
            {
              Move: 'MNT 3',
              Level: 'l,(MNT)',
              Damage: '19',
              Startup: '22',
              Block: '-14',
              Hit: '+3s',
              'Counter Hit': 'Launch',
              Notes: ''
            },
            {
              Move: 'MNT 3,4',
              Level: 'l,l,(MNT)',
              Damage: '19,10',
              Startup: '22',
              Block: '-17',
              Hit: '-1',
              'Counter Hit': '-1',
              Notes: ''
            },
            {
              Move: 'MNT 3,4,4',
              Level: 'l,l,m',
              Damage: '19,10,18',
              Startup: '22s',
              Block: '-12s',
              Hit: '+1s',
              'Counter Hit': 'KND',
              Notes: ''
            },
            {
              Move: 'MNT 3,4,d4',
              Level: 'l,l,l,(MNT)',
              Damage: '19,10,16',
              Startup: '22',
              Block: '-24',
              Hit: '+9',
              'Counter Hit': '+9',
              Notes: ''
            },
            {
              Move: 'MNT 4',
              Level: 'l,(MNT)',
              Damage: '13',
              Startup: '17',
              Block: '-19',
              Hit: '-3',
              'Counter Hit': '+7',
              Notes: ''
            },
            {
              Move: 'MNT 4,3',
              Level: 'l,m,(MNT)',
              Damage: '13,23',
              Startup: '17',
              Block: '-30',
              Hit: 'Launch',
              'Counter Hit': 'Launch',
              Notes: ''
            },
            {
              Move: 'MNT 1+2',
              Level: 'm',
              Damage: '21',
              Startup: '20',
              Block: '-13s',
              Hit: 'KND',
              'Counter Hit': 'KND',
              Notes: 'Armors frame 8+'
            },
            {
              Move: 'MNT 2+3',
              Level: '(MNT) BT',
              Damage: '-',
              Startup: '-',
              Block: '-',
              Hit: '-',
              'Counter Hit': '-',
              Notes: ''
            },
            {
              Move: 'MNT df2',
              Level: 'm',
              Damage: '13',
              Startup: '19',
              Block: '-9',
              Hit: 'Launch',
              'Counter Hit': 'Launch',
              Notes: ''
            },
            {
              Move: 'MNT df3',
              Level: 'm,(MNT)',
              Damage: '20',
              Startup: '15',
              Block: '-17',
              Hit: '+19g',
              'Counter Hit': '+19g',
              Notes: ''
            },
            {
              Move: 'MNT df3,4',
              Level: 'm,(MNT) BT',
              Damage: '20',
              Startup: '15',
              Block: '-14',
              Hit: '+22g',
              'Counter Hit': '+22g',
              Notes: ''
            },
            {
              Move: 'MNT d1',
              Level: 'l,(MNT)',
              Damage: '14',
              Startup: '15',
              Block: '-11',
              Hit: '0',
              'Counter Hit': '0',
              Notes: ''
            },
            {
              Move: 'MNT d1,4',
              Level: 'l,m',
              Damage: '14,23',
              Startup: '15',
              Block: '-16',
              Hit: 'KND',
              'Counter Hit': 'Launch',
              Notes: 'Screw'
            },
            {
              Move: 'MNT d1,4~d',
              Level: 'l,m,(MNT)',
              Damage: '14,23',
              Startup: '15',
              Block: '-15',
              Hit: 'KND',
              'Counter Hit': 'Launch',
              Notes: 'Screw'
            },
            {
              Move: 'MNT d3',
              Level: 'l,(MNT)',
              Damage: '12',
              Startup: '15',
              Block: '-12',
              Hit: '-1',
              'Counter Hit': '-1',
              Notes: ''
            },
            {
              Move: 'MNT d3,1',
              Level: 'l,m,(MNT)',
              Damage: '12,16',
              Startup: '15',
              Block: '-9',
              Hit: 'Launch',
              'Counter Hit': 'Launch',
              Notes: ''
            },
            {
              Move: 'MNT d4',
              Level: 'l',
              Damage: '19',
              Startup: '20',
              Block: '-24',
              Hit: '+2s',
              'Counter Hit': 'KND',
              Notes: ''
            },
            {
              Move: 'MNT d4~d',
              Level: 'l,(MNT)',
              Damage: '19',
              Startup: '20',
              Block: '-27',
              Hit: '-1s',
              'Counter Hit': 'KND',
              Notes: ''
            },
            {
              Move: 'MNT uf3',
              Level: 'm',
              Damage: '25',
              Startup: '26s',
              Block: '-10s',
              Hit: 'KND',
              'Counter Hit': 'KND',
              Notes: ''
            },
            {
              Move: 'MNT uf3~d',
              Level: 'm,(MNT)',
              Damage: '25',
              Startup: '26',
              Block: '-10s',
              Hit: 'KND',
              'Counter Hit': 'KND',
              Notes: ''
            },
            {
              Move: '1+3 _ f1+3',
              Level: 'H(Throw)',
              Damage: '35',
              Startup: '12 _ 15',
              Block: '-',
              Hit: '-',
              'Counter Hit': '-',
              Notes: '1 or 2 Break'
            },
            {
              Move: '2+4 _ f2+4',
              Level: 'H(Throw)',
              Damage: '35',
              Startup: '12 _ 15',
              Block: '-',
              Hit: '-',
              'Counter Hit': '-',
              Notes: '1 or 2 Break'
            },
            {
              Move: 'Left Throw',
              Level: 'H(Throw)',
              Damage: '40',
              Startup: '12',
              Block: '-',
              Hit: '-',
              'Counter Hit': '-',
              Notes: '1 Break'
            },
            {
              Move: 'Right Throw',
              Level: 'H(Throw)',
              Damage: '40',
              Startup: '12',
              Block: '-',
              Hit: '-',
              'Counter Hit': '-',
              Notes: '2 Break'
            },
            {
              Move: 'Back Throw',
              Level: 'H(Throw)',
              Damage: '50',
              Startup: '12',
              Block: '-',
              Hit: '-',
              'Counter Hit': '-',
              Notes: 'No Break'
            },
            {
              Move: 'ff1+2',
              Level: 'H(Throw)',
              Damage: '40',
              Startup: '12~',
              Block: '-',
              Hit: '-',
              'Counter Hit': '-',
              Notes: '1+2 Break'
            }
          ]
        }
      ],
      luckychloe: [
        {
          Move: 'in rage 3+4',
          Level: 'l (TC)',
          Damage: '50(or60or65)',
          Startup: '20 cs8~17 pc8~17',
          Block: '-27',
          Hit: 'KMUD',
          'Counter Hit': 'KMUD',
          Notes: 'Rage art'
        },
        {
          Move: 'in rage d/f+3+4 or FC+d/f+3+4 or BT+d/f+3+4',
          Level: 'mmm',
          Damage: '12,12,25',
          Startup: '17,46, 78~80',
          Block: '#ERROR!',
          Hit: 'Launch',
          'Counter Hit': 'Launch',
          Notes: 'Rage art'
        },
        {
          Move: 'in rage d/f+3+4B',
          Level: 'm, mm',
          Damage: '12,12,25',
          Startup: '17,46, 78~80b',
          Block: '-4~-2s',
          Hit: 'Launch',
          'Counter Hit': 'Launch',
          Notes: 'Rage art'
        },
        {
          Move: 'in rage d/f+3+4, When hit 1+2',
          Level: 'mmm, h',
          Damage: '12,12,25,\n62(74)',
          Startup: '17,46, 78~80',
          Block: '',
          Hit: 'KND',
          'Counter Hit': 'KND',
          Notes: 'Rage art'
        },
        {
          Move: '1 or BT 1 or 2',
          Level: 'h',
          Damage: '7(12)',
          Startup: '10',
          Block: '1',
          Hit: '8',
          'Counter Hit': '8',
          Notes: ''
        },
        {
          Move: '1, 2',
          Level: 'h, m',
          Damage: '7,12',
          Startup: '10',
          Block: '-4',
          Hit: '7',
          'Counter Hit': '7',
          Notes: ''
        },
        {
          Move: '1, 2, 2001',
          Level: 'h, m, m',
          Damage: '7,12,20',
          Startup: '10',
          Block: '-11',
          Hit: 'KND',
          'Counter Hit': 'KND',
          Notes: 'Wall Bound'
        },
        {
          Move: '1, 2, 2002',
          Level: 'h, m, m',
          Damage: '7,12,20',
          Startup: '10',
          Block: '-4~-3',
          Hit: '#ERROR!',
          'Counter Hit': 'KND',
          Notes: ''
        },
        {
          Move: '1, 2, 1+2',
          Level: 'h, m, hh',
          Damage: '7,12,12,20',
          Startup: '10',
          Block: '-2~-1',
          Hit: '#ERROR!',
          'Counter Hit': 'KND(+13kg)',
          Notes: 'Homing'
        },
        {
          Move: '2',
          Level: 'h',
          Damage: '10',
          Startup: '12',
          Block: '-4',
          Hit: '7',
          'Counter Hit': '7',
          Notes: ''
        },
        {
          Move: '2, 2',
          Level: 'h, h',
          Damage: '10,15 (20)',
          Startup: '12',
          Block: '-12',
          Hit: '4',
          'Counter Hit': '4',
          Notes: 'KND after proper timing'
        },
        {
          Move: '2:3',
          Level: 'h, l, (TWISTL)',
          Damage: '12,14',
          Startup: '12',
          Block: '-11',
          Hit: '#ERROR!',
          'Counter Hit': '#ERROR!',
          Notes: ''
        },
        {
          Move: '3',
          Level: 'm',
          Damage: '14',
          Startup: '15',
          Block: '-7',
          Hit: '4',
          'Counter Hit': '4',
          Notes: ''
        },
        {
          Move: '3,B',
          Level: 'm',
          Damage: '14',
          Startup: '15',
          Block: '-7',
          Hit: '4',
          'Counter Hit': '4',
          Notes: ''
        },
        {
          Move: '3, 4',
          Level: 'm, m',
          Damage: '14,20',
          Startup: '15',
          Block: '-14',
          Hit: 'Launch (JG?)',
          'Counter Hit': 'Launch (JG?)',
          Notes: ''
        },
        {
          Move: '4',
          Level: 'm',
          Damage: '15',
          Startup: '12',
          Block: '-9',
          Hit: '2',
          'Counter Hit': '7',
          Notes: ''
        },
        {
          Move: '1+2 or BT 1+2',
          Level: 'hh',
          Damage: '6,20',
          Startup: '22~23, 30~31',
          Block: '-2~-1',
          Hit: '#ERROR!',
          'Counter Hit': 'KND(+13kg)',
          Notes: 'Homing'
        },
        {
          Move: 'f+2',
          Level: 'm',
          Damage: '12',
          Startup: '17',
          Block: '-4',
          Hit: '7',
          'Counter Hit': '7',
          Notes: ''
        },
        {
          Move: 'f+2, 1',
          Level: 'm, m',
          Damage: '12,20',
          Startup: '17',
          Block: '-11',
          Hit: 'KND',
          'Counter Hit': 'KND',
          Notes: 'Wall Bound'
        },
        {
          Move: 'f+2, 2',
          Level: 'm, m',
          Damage: '12,20',
          Startup: '17',
          Block: '-4~-3',
          Hit: '#ERROR!',
          'Counter Hit': 'KND',
          Notes: ''
        },
        {
          Move: 'f+2, 1+2',
          Level: 'm, hh',
          Damage: '12,6,20',
          Startup: '17',
          Block: '-2~-1',
          Hit: '#ERROR!',
          'Counter Hit': 'KND(+13kg)',
          Notes: 'Homing'
        },
        {
          Move: 'f+3',
          Level: 'm',
          Damage: '15',
          Startup: '16~17',
          Block: '-9~-8',
          Hit: '#ERROR!',
          'Counter Hit': '#ERROR!',
          Notes: ''
        },
        {
          Move: 'f+4',
          Level: 'm (TJ)',
          Damage: '14',
          Startup: '27 js9~30',
          Block: '-4',
          Hit: '#ERROR!',
          'Counter Hit': '#ERROR!',
          Notes: ''
        },
        {
          Move: 'f+4, b',
          Level: 'm (TJ)',
          Damage: '14',
          Startup: '27b\n~js9,10,13~',
          Block: '-4',
          Hit: '#ERROR!',
          'Counter Hit': '#ERROR!',
          Notes: ''
        },
        {
          Move: 'f+4, 4',
          Level: 'm (TJ), m (TJ)',
          Damage: '14,10',
          Startup: 'js15~',
          Block: '-13',
          Hit: 'KND',
          'Counter Hit': 'KND',
          Notes: ''
        },
        {
          Move: 'f+4, 4, b',
          Level: 'm (TJ), m (TJ)',
          Damage: '14,10',
          Startup: 'b js15~',
          Block: '-9',
          Hit: 'KND',
          'Counter Hit': 'KND',
          Notes: ''
        },
        {
          Move: 'f+1+2',
          Level: 'h',
          Damage: '32',
          Startup: '27~29',
          Block: '#ERROR!',
          Hit: 'KND',
          'Counter Hit': 'KND',
          Notes: 'Wall Bounce'
        },
        {
          Move: 'f+3+4',
          Level: 'mml',
          Damage: '14,11,12',
          Startup: '29~30a, 37~38, 70~73 js19~',
          Block: '-11~-8',
          Hit: '#ERROR!',
          'Counter Hit': '#ERROR!',
          Notes: ''
        },
        {
          Move: 'f+3+4, b',
          Level: 'mml',
          Damage: '14,11',
          Startup: '29~30a, 37~38, js19~',
          Block: '-4~-3',
          Hit: 'KND',
          'Counter Hit': 'KND',
          Notes: ''
        },
        {
          Move: 'f+3+4, 3',
          Level: 'mm, m',
          Damage: '14,11,8',
          Startup: '29~30a, 37~38, 70~71 js19~',
          Block: '-17~-16s',
          Hit: 'KND',
          'Counter Hit': 'KND',
          Notes: ''
        },
        {
          Move: 'd/f+1',
          Level: 'm',
          Damage: '13',
          Startup: '13~14',
          Block: '-1~0',
          Hit: '#ERROR!',
          'Counter Hit': '#ERROR!',
          Notes: ''
        },
        {
          Move: 'd/f+2',
          Level: '?',
          Damage: '14',
          Startup: '15',
          Block: '-13',
          Hit: 'Launch (JG?)',
          'Counter Hit': 'Launch (JG?)',
          Notes: ''
        },
        {
          Move: 'WS+2',
          Level: 'm',
          Damage: '20',
          Startup: '16',
          Block: '-13',
          Hit: 'Launch (JG?)',
          'Counter Hit': 'Launch (JG?)',
          Notes: ''
        },
        {
          Move: 'WS+2 or d/f+2 When hit, 4:3:1',
          Level: 'm, m, m, m',
          Damage: '14(20),20,10,20',
          Startup: '16',
          Block: '',
          Hit: 'KND',
          'Counter Hit': 'KND',
          Notes: ''
        },
        {
          Move: 'd/f+3',
          Level: 'm',
          Damage: '15',
          Startup: '14',
          Block: '-9',
          Hit: '2',
          'Counter Hit': '2',
          Notes: ''
        },
        {
          Move: 'd/f+3, 2',
          Level: 'm, m',
          Damage: '15,21',
          Startup: '14',
          Block: '-6~-5',
          Hit: '#ERROR!',
          'Counter Hit': 'KND',
          Notes: ''
        },
        {
          Move: 'd/f+3, 3',
          Level: 'm, m',
          Damage: '15,15',
          Startup: '14',
          Block: '-14~-13',
          Hit: '#ERROR!',
          'Counter Hit': '#ERROR!',
          Notes: 'Tail spin'
        },
        {
          Move: 'd/f+4',
          Level: 'l (TJ)',
          Damage: '19',
          Startup: '25 js6~23',
          Block: '-12',
          Hit: '#ERROR!',
          'Counter Hit': 'KND',
          Notes: ''
        },
        {
          Move: 'd+2',
          Level: 'm',
          Damage: '17',
          Startup: '16',
          Block: '0',
          Hit: '0',
          'Counter Hit': 'KND',
          Notes: ''
        },
        {
          Move: 'd+3+4 or d/b+3+4',
          Level: 'lll',
          Damage: '10,5,5',
          Startup: '23~24, 33~34, 47s cs6~ar6~',
          Block: '-13',
          Hit: '-2',
          'Counter Hit': '-2',
          Notes: ''
        },
        {
          Move: 'd+3+4, 3+4',
          Level: 'lll, ll',
          Damage: '10,5,5,7,7',
          Startup: 's cs1~ ar1~',
          Block: '-13~-12',
          Hit: '0~+1s',
          'Counter Hit': '0~+1s',
          Notes: ''
        },
        {
          Move: 'd+3+4:d+3+4',
          Level: 'lll, hml',
          Damage: '10,5,5,7,7,7',
          Startup: '1~ 1~a,b',
          Block: '-34',
          Hit: '-21s',
          'Counter Hit': '-21s',
          Notes: ''
        },
        {
          Move: 'd+3+4:d+3+4, F',
          Level: 'lll, hml, (Special)',
          Damage: '10,5,5,7,7,7',
          Startup: '1~ 1~,a',
          Block: '-57',
          Hit: '-44s',
          'Counter Hit': '-44s',
          Notes: ''
        },
        {
          Move: 'd+3+4:d+3+4, F, 3+4',
          Level: 'lll, hml, (Special), m (TJ)',
          Damage: '10,5,5,7,7,7\n,30',
          Startup: 'js1~',
          Block: '-8~-4',
          Hit: 'KND',
          'Counter Hit': 'KND',
          Notes: ''
        },
        {
          Move: 'd/b+1',
          Level: 'm',
          Damage: '20',
          Startup: '21 pc8~',
          Block: '-13',
          Hit: 'KND',
          'Counter Hit': 'KND',
          Notes: 'Power crush, Wall bound'
        },
        {
          Move: 'd/b+4',
          Level: 'l (TC)',
          Damage: '15',
          Startup: '18 cs6~',
          Block: '-14',
          Hit: '-3',
          'Counter Hit': '-2',
          Notes: ''
        },
        {
          Move: 'd/b+4, 4',
          Level: 'l (TC), m?(SCT)',
          Damage: '15,15',
          Startup: '18 6~',
          Block: '-1',
          Hit: '3',
          'Counter Hit': '12',
          Notes: ''
        },
        {
          Move: 'd/b+1+2',
          Level: 'm',
          Damage: '20',
          Startup: '25~26',
          Block: '-16~-15',
          Hit: 'Launch (JG?)',
          'Counter Hit': 'Launch (JG?)',
          Notes: ''
        },
        {
          Move: 'b+1',
          Level: 'm',
          Damage: '20',
          Startup: '17~19',
          Block: '-11~-9',
          Hit: 'KND',
          'Counter Hit': 'KND',
          Notes: ''
        },
        {
          Move: 'b+2',
          Level: 'm',
          Damage: '20',
          Startup: '22',
          Block: '-4',
          Hit: '#ERROR!',
          'Counter Hit': 'KND',
          Notes: ''
        },
        {
          Move: 'b+3',
          Level: 'm',
          Damage: '15',
          Startup: '17',
          Block: '-11',
          Hit: '#ERROR!',
          'Counter Hit': '#ERROR!',
          Notes: 'Tail spin, Homing'
        },
        {
          Move: 'b+3, B',
          Level: 'm',
          Damage: '15',
          Startup: '17b',
          Block: '-8',
          Hit: '#ERROR!',
          'Counter Hit': '#ERROR!',
          Notes: 'Tail spin, Homing'
        },
        {
          Move: 'b+4',
          Level: 'm',
          Damage: '17',
          Startup: '16',
          Block: '-8',
          Hit: '8',
          'Counter Hit': 'CS',
          Notes: ''
        },
        {
          Move: 'b+3+4',
          Level: '(recover bt)',
          Damage: '',
          Startup: 'js6',
          Block: '',
          Hit: '',
          'Counter Hit': '',
          Notes: ''
        },
        {
          Move: 'b+1+2',
          Level: 'hhhh',
          Damage: '5,5,5,15',
          Startup: '20,26,32, 40~42 pc8~19',
          Block: '-8~-6',
          Hit: 'KND',
          'Counter Hit': 'KND',
          Notes: 'Power crush'
        },
        {
          Move: 'u/b+4',
          Level: '! (TJ)',
          Damage: '60',
          Startup: '76~77 js48~',
          Block: 'TFU',
          Hit: 'TFU',
          'Counter Hit': 'TFU',
          Notes: ''
        },
        {
          Move: 'u+3+4',
          Level: 'mm (TJ)',
          Damage: '5,10',
          Startup: '20 js9~',
          Block: '-9',
          Hit: 'KND',
          'Counter Hit': 'KND',
          Notes: ''
        },
        {
          Move: 'u/f+3(u+3 or u/b+3)',
          Level: 'm (TJ)',
          Damage: '13(10,7)',
          Startup: '15~16 js9~',
          Block: '-15~-14',
          Hit: 'Launch',
          'Counter Hit': 'Launch',
          Notes: ''
        },
        {
          Move: 'u/f+4',
          Level: 'm',
          Damage: '13',
          Startup: '15~16 js9~',
          Block: '-13~-12',
          Hit: 'Launch (JG?)',
          'Counter Hit': 'Launch (JG?)',
          Notes: ''
        },
        {
          Move: 'u/f+3+4',
          Level: 'm (TJ)',
          Damage: '15',
          Startup: '24~26 js11~',
          Block: '-5~-3',
          Hit: '-8~-6s',
          'Counter Hit': '-8~-6s',
          Notes: ''
        },
        {
          Move: 'u/f+3+4, 3',
          Level: 'm (TJ), l, (TWISTL)',
          Damage: '15,17',
          Startup: '27~29 11~',
          Block: '-11',
          Hit: '#ERROR!',
          'Counter Hit': '#ERROR!',
          Notes: ''
        },
        {
          Move: 'u/f+3+4, 3+4',
          Level: 'm (TJ), m (TJ)',
          Damage: '15,15',
          Startup: 'js11~',
          Block: '-3~-1',
          Hit: '#ERROR!',
          'Counter Hit': 'KND',
          Notes: ''
        },
        {
          Move: 'u/f+3+4, 3+4, 4',
          Level: 'm (TJ), m (TJ), m',
          Damage: '15,15,20',
          Startup: 'js18~',
          Block: '-16~-14s',
          Hit: 'KND',
          'Counter Hit': 'KND',
          Notes: ''
        },
        {
          Move: 'f, F+3',
          Level: 'm',
          Damage: '25',
          Startup: '18(19~)',
          Block: '-6',
          Hit: 'KND',
          'Counter Hit': 'KND',
          Notes: ''
        },
        {
          Move: 'f, f, f+3',
          Level: 'm (TJ)',
          Damage: '27',
          Startup: '22~25 (25~) js3~',
          Block: '#ERROR!',
          Hit: 'KND',
          'Counter Hit': 'KND',
          Notes: ''
        },
        {
          Move: 'f, f, f+3+4',
          Level: 'l, l (TJ) (TC)',
          Damage: '15, 20',
          Startup: '23 js5, cs10',
          Block: '-29',
          Hit: 'KND',
          'Counter Hit': 'KND',
          Notes: ''
        },
        {
          Move: 'f, f, f+3+4 (last hit only)',
          Level: 'l, l',
          Damage: '20',
          Startup: '',
          Block: '-29',
          Hit: 'KND',
          'Counter Hit': 'KND',
          Notes: ''
        },
        {
          Move: 'WS+1',
          Level: 'm',
          Damage: '10',
          Startup: '14~15',
          Block: '-5~-4',
          Hit: '#ERROR!',
          'Counter Hit': '#ERROR!',
          Notes: ''
        },
        {
          Move: 'WS+1, 4',
          Level: 'm, m?',
          Damage: '10,10',
          Startup: '14~15',
          Block: '-16',
          Hit: 'Launch (JG?)',
          'Counter Hit': 'Launch (JG?)',
          Notes: ''
        },
        {
          Move: 'WS+2',
          Level: 'm',
          Damage: '20',
          Startup: '16',
          Block: '-13',
          Hit: 'Launch (JG?)',
          'Counter Hit': 'Launch (JG?)',
          Notes: ''
        },
        {
          Move: 'WS+3',
          Level: 'm (TC)',
          Damage: '25',
          Startup: '15~16 cs1~',
          Block: '-12~-11',
          Hit: 'KND',
          'Counter Hit': 'JG',
          Notes: ''
        },
        {
          Move: 'WS+4',
          Level: 'm',
          Damage: '15',
          Startup: '11',
          Block: '-3',
          Hit: '8',
          'Counter Hit': '8',
          Notes: ''
        },
        {
          Move: 'FC+d/f+1',
          Level: 'l (TC)',
          Damage: '15',
          Startup: '18~19 cs1~',
          Block: '-14~-13',
          Hit: '#ERROR!',
          'Counter Hit': 'KND',
          Notes: ''
        },
        {
          Move: 'FC+d/f+2',
          Level: 'm (TC)',
          Damage: '15',
          Startup: '21~22 cs1~20',
          Block: '-7~-6',
          Hit: '#ERROR!',
          'Counter Hit': '#ERROR!',
          Notes: 'Tail spin, Homing'
        },
        {
          Move: 'FC+d/f+4',
          Level: 'm',
          Damage: '24',
          Startup: '17~18',
          Block: '-17~-16',
          Hit: 'CS',
          'Counter Hit': 'CS',
          Notes: ''
        },
        {
          Move: 'SS+4',
          Level: 'l',
          Damage: '17',
          Startup: '21~22b (30~) cs6~',
          Block: '-9~-8 (11b)',
          Hit: '#ERROR!',
          'Counter Hit': 'KND',
          Notes: ''
        },
        {
          Move: '1+2+3',
          Level: '(Special)',
          Damage: '',
          Startup: '21~22 (30~) 6~',
          Block: '',
          Hit: '',
          'Counter Hit': '',
          Notes: ''
        },
        {
          Move: '1+2+4',
          Level: '(Special)',
          Damage: '',
          Startup: '21~22 (30~) 6~',
          Block: '',
          Hit: '',
          'Counter Hit': '',
          Notes: ''
        },
        {
          Move: 'd/b+3',
          Level: 'l, (TWISTL)',
          Damage: '17',
          Startup: '15',
          Block: '-11',
          Hit: '#ERROR!',
          'Counter Hit': '#ERROR!',
          Notes: ''
        },
        {
          Move: 'd/b+3 (After stance ends)',
          Level: 'l, (TWISTL)',
          Damage: '17',
          Startup: '15',
          Block: '-32',
          Hit: '-13s',
          'Counter Hit': '-13s',
          Notes: ''
        },
        {
          Move: 'd/b+3, b',
          Level: 'l, (TWISTL)',
          Damage: '17',
          Startup: '15b',
          Block: '-25',
          Hit: '-6s',
          'Counter Hit': '-6s',
          Notes: ''
        },
        {
          Move: 'd/b+3~4',
          Level: 'l, l',
          Damage: '17,12',
          Startup: '15',
          Block: '-13',
          Hit: '0',
          'Counter Hit': '0',
          Notes: ''
        },
        {
          Move: 'TWISTL 1',
          Level: 'h',
          Damage: '12',
          Startup: '10',
          Block: '1',
          Hit: '8',
          'Counter Hit': '8',
          Notes: ''
        },
        {
          Move: 'TWISTL 2',
          Level: 'm',
          Damage: '17',
          Startup: '18',
          Block: '-7',
          Hit: '5',
          'Counter Hit': 'KND',
          Notes: ''
        },
        {
          Move: 'TWISTL f2',
          Level: 'm',
          Damage: '15',
          Startup: '27',
          Block: '-4',
          Hit: '7',
          'Counter Hit': '7',
          Notes: ''
        },
        {
          Move: 'TWISTL 3',
          Level: 'm',
          Damage: '20',
          Startup: '34~40',
          Block: '#ERROR!',
          Hit: 'KND',
          'Counter Hit': 'KND',
          Notes: ''
        },
        {
          Move: 'TWISTL 4',
          Level: 'm(SCT)',
          Damage: '21',
          Startup: '26',
          Block: '-18',
          Hit: '-7',
          'Counter Hit': '-7',
          Notes: ''
        },
        {
          Move: 'TWISTL d/b+4',
          Level: 'l (TC)',
          Damage: '15',
          Startup: '24',
          Block: '-16',
          Hit: '#ERROR!',
          'Counter Hit': '#ERROR!',
          Notes: ''
        },
        {
          Move: 'TWISTL d/b+4j',
          Level: 'l, (TWISTR)',
          Damage: '19',
          Startup: '28',
          Block: '-13',
          Hit: '#ERROR!',
          'Counter Hit': '#ERROR!',
          Notes: ''
        },
        {
          Move: 'TWISTR d/b+3j',
          Level: 'l, (TWISTL)',
          Damage: '17',
          Startup: '20',
          Block: '-11',
          Hit: '#ERROR!',
          'Counter Hit': '#ERROR!',
          Notes: ''
        },
        {
          Move: 'f, F+4 or from special move',
          Level: 'm, (SCT)',
          Damage: '21',
          Startup: '23(24~)',
          Block: '-1',
          Hit: '3',
          'Counter Hit': '12',
          Notes: ''
        },
        {
          Move: 'SCT 4',
          Level: 'm (TJ)',
          Damage: '15',
          Startup: '26(27~)',
          Block: '-4~-3',
          Hit: 'KND',
          'Counter Hit': 'KND',
          Notes: ''
        },
        {
          Move: 'SCT 4, 4',
          Level: 'm (TJ), m (TJ)',
          Damage: '15,25',
          Startup: 'js15~',
          Block: '#ERROR!',
          Hit: 'KND',
          'Counter Hit': 'KND',
          Notes: ''
        },
        {
          Move: 'SCT 3+4',
          Level: 'm (TJ)',
          Damage: '20',
          Startup: 'js23~',
          Block: '-3~+1',
          Hit: '#ERROR!',
          'Counter Hit': 'KND',
          Notes: ''
        },
        {
          Move: 'SCT 3+4, 4',
          Level: 'm (TJ), m',
          Damage: '15,20',
          Startup: 'js18~',
          Block: '-16~-14s',
          Hit: 'KND',
          'Counter Hit': 'KND',
          Notes: ''
        },
        {
          Move: 'SCT d/b+4',
          Level: 'l (TC)',
          Damage: '13',
          Startup: 'cs4~',
          Block: '-16',
          Hit: '-5',
          'Counter Hit': '-2',
          Notes: ''
        },
        {
          Move: 'BT 1',
          Level: 'h',
          Damage: '12',
          Startup: '8~9',
          Block: '#ERROR!',
          Hit: '#ERROR!',
          'Counter Hit': '#ERROR!',
          Notes: ''
        },
        {
          Move: 'BT 2',
          Level: 'm',
          Damage: '17',
          Startup: '18',
          Block: '-7',
          Hit: '5',
          'Counter Hit': 'KND',
          Notes: ''
        },
        {
          Move: 'BT 3',
          Level: 'm',
          Damage: '20',
          Startup: '15~16',
          Block: '-44~-43 (~20a)',
          Hit: '-23~-22a',
          'Counter Hit': '-23~-22a',
          Notes: ''
        },
        {
          Move: 'BT 3, 3+4',
          Level: 'm, m',
          Damage: '20,25',
          Startup: 'js1~',
          Block: '#ERROR!',
          Hit: 'KND(KND)',
          'Counter Hit': 'KND',
          Notes: ''
        },
        {
          Move: 'BT 4',
          Level: 'm (TJ)',
          Damage: '24',
          Startup: '23~25 js6~',
          Block: '-10~-8s',
          Hit: 'KND',
          'Counter Hit': 'KND',
          Notes: ''
        },
        {
          Move: 'BT d/b or d or d/f+4',
          Level: 'l (TC)',
          Damage: '18',
          Startup: '19s cs4~',
          Block: '-16',
          Hit: '-5',
          'Counter Hit': '-2',
          Notes: ''
        },
        {
          Move: 'BT d+4, 4',
          Level: 'l (TC), m?, (SCT)',
          Damage: '18,15',
          Startup: '19 4~',
          Block: '-1',
          Hit: '3',
          'Counter Hit': '12',
          Notes: ''
        },
        {
          Move: 'BT d+3+4',
          Level: 'l',
          Damage: '20',
          Startup: '23 cs4~',
          Block: '-18',
          Hit: 'KND',
          'Counter Hit': 'KND',
          Notes: ''
        },
        {
          Move: 'BT 3+4',
          Level: 'm (TJ)',
          Damage: '20',
          Startup: '28~32 js15~',
          Block: '-3~+1',
          Hit: '#ERROR!',
          'Counter Hit': 'KND',
          Notes: ''
        },
        {
          Move: 'BT 3+4, 4',
          Level: 'm, m',
          Damage: '20,20',
          Startup: 'js17~',
          Block: '-16~-14s',
          Hit: 'KND',
          'Counter Hit': 'KND',
          Notes: ''
        },
        {
          Move: 'BT f+3+4',
          Level: '(Special)?',
          Damage: '',
          Startup: 'b ar1~',
          Block: '',
          Hit: '',
          'Counter Hit': '',
          Notes: ''
        },
        {
          Move: 'BT f+3+4, 3+4',
          Level: '(Special), mm, (Special)',
          Damage: '17,20',
          Startup: '24,37\n~ar1~',
          Block: '-45',
          Hit: 'CS',
          'Counter Hit': 'CS',
          Notes: ''
        },
        {
          Move: 'BT f+3+4, 3+4, 3+4',
          Level: '(Special), mm, (Special), m',
          Damage: '17,20,30',
          Startup: 'ar1~',
          Block: '-8~-4',
          Hit: 'KND',
          'Counter Hit': 'KND',
          Notes: ''
        },
        {
          Move: '',
          Level: '(Special), mm, (Special)',
          Damage: '17,20',
          Startup: '24,37',
          Block: '',
          Hit: '',
          'Counter Hit': '',
          Notes: ''
        },
        {
          Move: '~ar1~',
          Level: '-45',
          Damage: 'CS',
          Startup: 'CS',
          Block: '',
          Hit: '',
          'Counter Hit': '',
          Notes: ''
        },
        {
          Move: 'BT f+3+4, 3+4, 3+4',
          Level: '(Special), mm, (Special), m',
          Damage: '17,20,30',
          Startup: 'ar1~',
          Block: '-8~-4',
          Hit: 'KND',
          'Counter Hit': 'KND',
          Notes: ''
        }
      ]
    }
  },
  computed: {
    currFrame() {
      const curr = this.selected
      return curr.filter(function(n) {
        return curr === this.xcharacters[0].moves.Move
      })
    },
    currentCharacter() {
      return this.xcharacters[0]
    },
    zafinaCurrentMove() {
      const zafina = this.xcharacters[0].moves

      return zafina.filter(function(move) {
        return move.Move === 'df1,4'
      })
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
