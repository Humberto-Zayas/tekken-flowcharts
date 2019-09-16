<template>
  <div>
    <!-- <b-breadcrumb :items="items"></b-breadcrumb> -->
    <b-container class="bv-example-row">
      <br />
      <b-row>
        <b-col class="">
          <span
            style="cursor: pointer; padding: 0 10px;"
            @click="$router.go(-1)"
            >&lsaquo;</span
          >
          <h1>
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
      <div>
        <b-form v-if="show" @submit="onSubmit" @reset="onReset">
          <!-- <b-form-group
            id="input-group-1"
            label="Email address:"
            label-for="input-1"
            description="We'll never share your email with anyone else."
          >
            <b-form-input
              id="input-1"
              v-model="form.email"
              type="email"
              required
              placeholder="Enter email"
            ></b-form-input>
          </b-form-group> -->

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
            v-model="form.text"
            placeholder="Enter something..."
            rows="3"
            max-rows="6"
          ></b-form-textarea>

          <!-- <b-form-group id="input-group-3" label="Food:" label-for="input-3">
            <b-form-select
              id="input-3"
              v-model="form.food"
              :options="moves"
              required
            ></b-form-select>
          </b-form-group> -->

          <!-- <b-form-group id="input-group-4">
            <b-form-checkbox-group id="checkboxes-4" v-model="form.checked">
              <b-form-checkbox value="me">Check me out</b-form-checkbox>
              <b-form-checkbox value="that">Check that out</b-form-checkbox>
            </b-form-checkbox-group>
          </b-form-group> -->

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
  layout: 'moves',
  data() {
    return {
      form: {
        name: '',
        text: ''

        // food: null,
        // checked: []
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
