<template>
  <div>
    <!-- <b-breadcrumb :items="items"></b-breadcrumb> -->
    <b-container class="bv-example-row">
      <br />
      <b-row>
        <b-col class="">
          <h1>
            <span
              style="cursor: pointer; padding: 0 10px;"
              @click="$router.go(-1)"
              >&lsaquo;</span
            >
            <!-- {{ xcharacters[1].id }} -->
            {{ currentCharacter.id }}
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
                :to="
                  currentCharacter.id.toLowerCase().replace(/ /g, '-') +
                    '/moves/' +
                    move.toLowerCase().replace(/ /g, '-')
                "
                >{{ move }}</nuxt-link
              >

              <b-badge variant="primary" pill>14</b-badge>
            </b-list-group-item>
          </b-list-group>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
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
      characters: [
        'Akuma',
        'Alisa Bosconovitch',
        'Anna Williams',
        'Armor King',
        'Asuka Kazama',
        'Bob',
        'Bryan Fury',
        'Claudio',
        'Craig Marduk',
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
        'Zafina'
      ],
      xcharacters: [
        {
          id: 'Asuka',
          moves: ['1, 2, 3', '1, 2, 3 (Hold)', '1,2,4', 'move']
        },
        {
          id: 'Lucky Chloe',
          moves: [
            'Left Point',
            'Left Point to C Uprock Hit',
            'Left Point to C Uprock Clap',
            'Left Point to C Uprock Swing',
            'Right Point',
            'Right Point to High Five'
          ]
        }
      ]
    }
  },
  computed: {
    // currentCharacter() {
    //   return this.xcharacters.find(
    //     (currentCharacter) =>
    //       currentCharacter.id.toLowerCase().replace(/ /g, '-') ===
    //       this.id.toLowerCase()
    //   )
    // }
    currentCharacter() {
      return this.xcharacters[1]
    }
  },
  methods: {
    pushMove(event) {
      this.$router.push('/' + event.target.value)
    }
  }
}
</script>
