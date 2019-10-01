<template>
  <div>
    <!-- <b-breadcrumb :items="items"></b-breadcrumb> -->
    <b-container class="bv-example-row">
      <br />
      <b-row>
        <b-col class="">
          <nuxt-link style="cursor: pointer; padding: 0 10px;" to="/zafina"
            >&lsaquo;</nuxt-link
          >
          <h1>
            <!-- {{ xcharacters[1].id }} -->
            {{ currentCharacter }} / {{ currentMove.id }}
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
              <nuxt-link
                :to="'/zafina/' + move.Move.toLowerCase().replace(/ /g, '-')"
                >{{ move.Move }}</nuxt-link
              >

              <b-badge variant="primary" pill>14</b-badge>
            </b-list-group-item>
          </b-list-group>
        </b-col>
      </b-row>
      <br />
      <b-row align-v="start">
        <b-col>
          <b-list-group>
            <h3>Charts</h3>
            <b-list-group-item
              v-for="chart in matchingFlowCharts"
              :key="chart.Name"
              class="d-flex justify-content-between align-items-center"
            >
              <nuxt-link
                :to="
                  currentMove.Move.toLowerCase().replace(/ /g, '-') +
                    '/' +
                    chart.id
                "
              >
                {{ chart.Name }} {{ chart.id }}
              </nuxt-link>

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
      form: {
        name: '',
        content: ''

        // food: null,
        // checked: []
      },
      show: true,
      id: this.$nuxt.$route.params.id,

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
  },
  computed: {
    currentCharacter() {
      return 'Zafina'
    },
    matchingFlowCharts() {
      const flowcharts = this.flowcharts
      const myID = this.id

      const newarray = flowcharts.filter(function(chart) {
        return chart.Name.toLowerCase().replace(/ /g, '-') === myID
      })
      return newarray
      // return flowcharts[6].Name.toLowerCase().replace(/ /g, '-') === this.id
    },
    currentMove() {
      return this.moves.find(
        (currentMove) =>
          currentMove.Move.toLowerCase().replace(/ /g, '-') ===
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
