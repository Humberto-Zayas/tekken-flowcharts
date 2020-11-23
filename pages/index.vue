<template>
  <b-container class="bv-example-row">
    <br />
    <b-row>
      <b-col>
        <h1>Choose Your Fighter</h1>
      </b-col>
    </b-row>

    <b-row align-v="start">
      <b-col>
        <b-list-group>
          <b-list-group-item
            v-for="(character, i) in characters"
            :key="i"
            class="d-flex justify-content-between align-items-center"
          >
            <nuxt-link :to="character.name.toLowerCase().replace(' ', '-')" v-if="character.available">{{character.name}}</nuxt-link>
            <span disabled v-else>{{character}} <em>Coming Soon</em></span>

            <!-- <b-badge variant="primary" pill>14</b-badge> -->
          </b-list-group-item>
        </b-list-group>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  data() {
    return {
      characters: [
        { 
          name: 'Akuma',
          available: true
        },
        'Alisa Bosconovitch',
        'Anna Williams',
        'Armor King',
        'Asuka Kazama',
        'Bob',
        'Bryan Fury',
        'Claudio',
        'Devil Jin',
        'Dragunov',
        'Eddy Gordo',
        'Eliza',
        'Feng Wei',
        'Geese',
        'Gigas',
        'Heihachi Mishima',
        'Hwoarang',
        'Jack 7',
        'Josie',
        'Jin Kazama',
        'Julia Chang',
        'Katarina',
        'Kazumi Mishima',
        'Kazuya Mishima',
        'King',
        'Kuma',
        'Lars',
        'Lee Chaolan',
        'Leo',
        'Leroy Smith',
        'Lili',
        'Lei Wulong',
        'Ling Xiaoyu',
        'Lucky Chloe',
        'Marduk',
        'Marshall Law',
        'Master Raven',
        'Miguel',
        'Negan',
        'Nina Williams',
        'Noctis',
        'Panda',
        'Paul Phoenix',
        'Shaheen',
        'Steve Fox',
        'Yoshimitsu',
        {
          name: 'Zafina',
          available: true
        }
      ],
    }
  },
  methods: {
    pushMove(event) {
      this.$router.push('/' + event.target.value)
    }
  }
}
</script>
