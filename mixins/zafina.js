export default {
    data() {
        return {
            fieldsx: [
                {
                  key: 'moveType',
                  label: 'Move Type'
                },
                {
                  key: 'command',
                  sortable: true
                },
                {
                  key: 'hitLevel',
                  sortable: false
                },
                {
                  key: 'damage',
                  // label: 'Person age',
                  sortable: true
                  // Variant applies to the whole column, including the header and footer
                  // variant: 'danger'
                },
                {
                  key: 'startUpFrame',
                  label: 'Frames',
                  sortable: true
                  // Variant applies to the whole column, including the header and footer
                  // variant: 'danger'
                },
                {
                  key: 'blockFrame',
                  label: 'On Block',
                  sortable: true
                },
                {
                  key: 'hitFrame',
                  label: 'On Hit',
                  sortable: true
                },
                {
                  key: 'counterHitFrame',
                  sortable: true,
                  label: 'On Counter'
                }
              ],
            zafina: [
                {
                  command: "In rage d/f+3+4",
                  hitLevel: "m (throw)",
                  damage: "10,45",
                  startUpFrame: "20 pc8~",
                  blockFrame: -22,
                  hitFrame: "throw",
                  counterHitFrame: "throw",
                  notes: "Rage Art"
                },
                {
                  command: "In Rage f+2+3",
                  hitLevel: "m (throw)",
                  damage: "10,20",
                  startUpFrame: 14,
                  blockFrame: parseInt(19) + "g",
                  hitFrame: "throw",
                  counterHitFrame: "throw",
                  notes: "Rage Drive"
                },
                {
                  
                  command: "1",
                  hitLevel: "h",
                  damage: 7,
                  startUpFrame: 10,
                  blockFrame: 1,
                  hitFrame: 8,
                  counterHitFrame: 8,
                  notes: "test",
                  status: 'awesome' 
                },
                {
                  moveType: ["homing", "tail spin"],
                  command: "1, 2",
                  hitLevel: "h, h",
                  damage: "7,9",
                  startUpFrame: 10,
                  blockFrame: -5,
                  hitFrame: 4,
                  counterHitFrame: 4,
                  notes: {
                    punish: "10 F",
                  }
                },
                {
                  command: "1, 2, 3",
                  hitLevel: "h, h, h (SCR)",
                  damage: "7,9,12",
                  startUpFrame: 10,
                  blockFrame: 0,
                  hitFrame: 9,
                  counterHitFrame: 9,
                  notes: ""
                },
                {
                  command: "1, 2, 3, B",
                  hitLevel: "h, h, h",
                  damage: "7,9,12",
                  startUpFrame: 10,
                  blockFrame: -9,
                  hitFrame: 0,
                  counterHitFrame: 0,
                  notes: {
                    punish: "10 F",
                  }
                },
                {
                  command: "1, 3",
                  hitLevel: "h, h (SCR)",
                  damage: "7,14",
                  startUpFrame: 10,
                  blockFrame: -4,
                  hitFrame: 5,
                  counterHitFrame: 5,
                  notes: {
                    punish: "10 F",
                  }
                },
                {
                  command: "1, 3, B",
                  hitLevel: "h, h",
                  damage: "7,14",
                  startUpFrame: 10,
                  blockFrame: -8,
                  hitFrame: 1,
                  counterHitFrame: 1,
                  notes: ""
                },
                {
                  command: "1, 4",
                  hitLevel: "h, m (TRT)",
                  damage: "7,17",
                  startUpFrame: 10,
                  blockFrame: -5,
                  hitFrame: 2,
                  counterHitFrame: "KND",
                  notes: {
                    punish: true
                  }
                },
                {
                  command: 2,
                  hitLevel: "h",
                  damage: 8,
                  startUpFrame: 10,
                  blockFrame: -7,
                  hitFrame: -1,
                  counterHitFrame: -1,
                  notes: ""
                },
                {
                  command: "2, 1",
                  hitLevel: "h, m",
                  damage: "8,9",
                  startUpFrame: 10,
                  blockFrame: parseInt(-6) + "s",
                  hitFrame: "+2s",
                  counterHitFrame: "+2s",
                  notes: ""
                },
                {
                  command: "2, 1, 3",
                  hitLevel: "h, m, l (MNT)",
                  damage: "8,9,17",
                  startUpFrame: 10,
                  blockFrame: -17,
                  hitFrame: "KND",
                  counterHitFrame: "KND",
                  notes: ""
                },
                {
                  command: "2, 1, 3, D",
                  hitLevel: "h, m (MNT)",
                  damage: "8,9",
                  startUpFrame: 10,
                  blockFrame: parseInt(-17) + "s",
                  hitFrame: "-9s",
                  counterHitFrame: "-9s",
                  notes: ""
                },
                {
                  command: "2, 2",
                  hitLevel: "h, m",
                  damage: "8,12",
                  startUpFrame: 10,
                  blockFrame: -9,
                  hitFrame: 2,
                  counterHitFrame: 7,
                  notes: ""
                },
                {
                  command: "2, 2, 1+2",
                  hitLevel: "h, m, m*3",
                  damage: "8,12,7,11,20",
                  startUpFrame: 10,
                  blockFrame: "-9s",
                  hitFrame: parseInt(4) + "s",
                  counterHitFrame: "+4s",
                  notes: ""
                },
                {
                  command: 3,
                  hitLevel: "h (SCR)",
                  damage: 17,
                  startUpFrame: 13,
                  blockFrame: 0,
                  hitFrame: 9,
                  counterHitFrame: 9,
                  notes: ""
                },
                {
                  command: "3, B",
                  hitLevel: "h",
                  damage: 17,
                  startUpFrame: 13,
                  blockFrame: -8,
                  hitFrame: 1,
                  counterHitFrame: 1,
                  notes: ""
                },
                {
                  command: 4,
                  hitLevel: "h",
                  damage: 19,
                  startUpFrame: 14,
                  blockFrame: -6,
                  hitFrame: -1,
                  counterHitFrame: "KND",
                  notes: ""
                },
                {
                  command: "1+2",
                  hitLevel: "m",
                  damage: 20,
                  startUpFrame: 16,
                  blockFrame: -12,
                  hitFrame: 4,
                  counterHitFrame: "KND",
                  notes: ""
                },
                {
                  command: "1+2, 4",
                  hitLevel: "m, m",
                  damage: "20,12",
                  startUpFrame: 16,
                  blockFrame: -10,
                  hitFrame: 1,
                  counterHitFrame: 6,
                  notes: ""
                },
                {
                  command: "1+2, 4, 4",
                  hitLevel: "m, m, m",
                  damage: "20,12,26",
                  startUpFrame: 16,
                  blockFrame: -11,
                  hitFrame: "KND",
                  counterHitFrame: "KND",
                  notes: {
                    properties: {
                      tailSpin: 'tail spin'
                    }
                  }
                },
                {
                  command: "f+2",
                  hitLevel: "m",
                  damage: 17,
                  startUpFrame: 19,
                  blockFrame: -18,
                  hitFrame: -6,
                  counterHitFrame: "KND",
                  notes: ""
                },
                {
                  command: "f+2, 3",
                  hitLevel: "m, h (SCR)",
                  damage: "17,12",
                  startUpFrame: 19,
                  blockFrame: 0,
                  hitFrame: 9,
                  counterHitFrame: 9,
                  notes: ""
                },
                {
                  command: "f+2, 3, B",
                  hitLevel: "m, h",
                  damage: "17,12",
                  startUpFrame: 19,
                  blockFrame: -9,
                  hitFrame: 0,
                  counterHitFrame: 0,
                  notes: ""
                },
                {
                  command: "f+2, 3, 4",
                  hitLevel: "m, h, m",
                  damage: "17,12,25",
                  startUpFrame: 19,
                  blockFrame: -18,
                  hitFrame: "KND",
                  counterHitFrame: "KND",
                  notes: "Wall bounce"
                },
                {
                  command: "f+3",
                  hitLevel: "h (SCR)",
                  damage: 28,
                  startUpFrame: 21,
                  blockFrame: 3,
                  hitFrame: "KND",
                  counterHitFrame: "KND",
                  notes: {
                    properties: {
                      tailSpin: 'tail spin'
                    }
                  }
                },
                {
                  command: "f+3, B",
                  hitLevel: "h",
                  damage: 28,
                  startUpFrame: 21,
                  blockFrame: -1,
                  hitFrame: "KND",
                  counterHitFrame: "KND",
                  notes: {
                    properties: {
                      tailSpin: 'tail spin'
                    }
                  }
                },
                {
                  command: "f+4",
                  hitLevel: "h",
                  damage: 13,
                  startUpFrame: 14,
                  blockFrame: -6,
                  hitFrame: "KND",
                  counterHitFrame: "KND",
                  notes: {
                    properties: {
                      tailSpin: 'tail spin'
                    }
                  }
                },
                {
                  command: "f+1+2",
                  hitLevel: "m",
                  damage: 24,
                  startUpFrame: 19,
                  blockFrame: -10,
                  hitFrame: "KND",
                  counterHitFrame: "KND",
                  notes: ""
                },
                {
                  command: "d/f+1",
                  hitLevel: "m",
                  damage: 11,
                  startUpFrame: 13,
                  blockFrame: -5,
                  hitFrame: 7,
                  counterHitFrame: 7,
                  notes: ""
                },
                {
                  command: "d/f+1, 2",
                  hitLevel: "m, m",
                  damage: "11,16",
                  startUpFrame: 13,
                  blockFrame: -13,
                  hitFrame: 3,
                  counterHitFrame: 3,
                  notes: ""
                },
                {
                  command: "d/f+1, 2, 1",
                  hitLevel: "m, m, m",
                  damage: "11,16,20",
                  startUpFrame: 13,
                  blockFrame: -13,
                  hitFrame: "KND",
                  counterHitFrame: "KND",
                  notes: ""
                },
                {
                  command: "d/f+1, 4",
                  hitLevel: "m, h",
                  damage: "11,18",
                  startUpFrame: 13,
                  blockFrame: -6,
                  hitFrame: "+12k",
                  counterHitFrame: "+12k",
                  notes: ""
                },
                {
                  command: "d/f+2",
                  hitLevel: "m",
                  damage: 13,
                  startUpFrame: 16,
                  blockFrame: -12,
                  hitFrame: "Launch",
                  counterHitFrame: "Launch",
                  notes: ""
                },
                {
                  command: "d/f+3",
                  hitLevel: "m (SCR)",
                  damage: 15,
                  startUpFrame: 14,
                  blockFrame: -5,
                  hitFrame: 4,
                  counterHitFrame: 4,
                  notes: ""
                },
                {
                  command: "d/f+3, B",
                  hitLevel: "m",
                  damage: 15,
                  startUpFrame: 14,
                  blockFrame: -10,
                  hitFrame: -1,
                  counterHitFrame: -1,
                  notes: ""
                },
                {
                  command: "d/f+3, 4",
                  hitLevel: "m, h",
                  damage: "15,17",
                  startUpFrame: 14,
                  blockFrame: -6,
                  hitFrame: "KND",
                  counterHitFrame: "KND",
                  notes: {
                    properties: {
                      tailSpin: 'tail spin'
                    }
                  }
                },
                {
                  command: "d/f+3, d+4",
                  hitLevel: "m, l (TC)",
                  damage: "15, 15",
                  startUpFrame: 14,
                  blockFrame: -14,
                  hitFrame: "+1s",
                  counterHitFrame: "+1s",
                  notes: ""
                },
                {
                  command: "d/f+4",
                  hitLevel: "m",
                  damage: 14,
                  startUpFrame: 14,
                  blockFrame: -14,
                  hitFrame: 3,
                  counterHitFrame: 3,
                  notes: ""
                },
                {
                  command: "d/f+4, 1",
                  hitLevel: "m, m",
                  damage: "14,22",
                  startUpFrame: 14,
                  blockFrame: "-13s",
                  hitFrame: "KND",
                  counterHitFrame: "KND",
                  notes: ""
                },
                {
                  command: "d/f+4, 1, D",
                  hitLevel: "m (Special)",
                  damage: 14,
                  startUpFrame: 14,
                  blockFrame: -18,
                  hitFrame: -2,
                  counterHitFrame: -2,
                  notes: ""
                },
                {
                  command: "d/f+4, 2",
                  hitLevel: "m, m",
                  damage: "14,20",
                  startUpFrame: 14,
                  blockFrame: -13,
                  hitFrame: "KND",
                  counterHitFrame: "KND",
                  notes: ""
                },
                {
                  command: "d/f+1+2",
                  hitLevel: "m (TC)",
                  damage: "20 cs6",
                  startUpFrame: 36,
                  blockFrame: -9,
                  hitFrame: "KND",
                  counterHitFrame: "KND",
                  notes: {
                    properties: {
                      homing: 'homing',
                    }
                  }
                },
                {
                  command: "d+1",
                  hitLevel: "m",
                  damage: 11,
                  startUpFrame: 12,
                  blockFrame: -16,
                  hitFrame: "-8s",
                  counterHitFrame: "-3s",
                  notes: ""
                },
                {
                  command: "d+1, 1",
                  hitLevel: "m, m",
                  damage: "11,17",
                  startUpFrame: 12,
                  blockFrame: -12,
                  hitFrame: "KND",
                  counterHitFrame: "CS",
                  notes: ""
                },
                {
                  command: "d+2",
                  hitLevel: "m",
                  damage: 17,
                  startUpFrame: 19,
                  blockFrame: "-16s",
                  hitFrame: "-3s",
                  counterHitFrame: "KND",
                  notes: ""
                },
                {
                  command: "d+2, 4",
                  hitLevel: "m, m (TJ) (MNT)",
                  damage: "17,13",
                  startUpFrame: 19,
                  blockFrame: -22,
                  hitFrame: -4,
                  counterHitFrame: "-4s",
                  notes: ""
                },
                {
                  command: "d+2, 4, D",
                  hitLevel: "m, m (TJ) (TRT)",
                  damage: "17,13",
                  startUpFrame: 19,
                  blockFrame: -22,
                  hitFrame: -4,
                  counterHitFrame: "-4s",
                  notes: ""
                },
                {
                  command: "d+2, 4, 3",
                  hitLevel: "m, m, m (TJ)",
                  damage: "17,13,15",
                  startUpFrame: 19,
                  blockFrame: -14,
                  hitFrame: "KND",
                  counterHitFrame: "KND",
                  notes: ""
                },
                {
                  command: "d+3",
                  hitLevel: "l (TC)",
                  damage: 14,
                  startUpFrame: "22 cs6",
                  blockFrame: -15,
                  hitFrame: "+2s",
                  counterHitFrame: "KND",
                  notes: ""
                },
                {
                  command: "d+3, D",
                  hitLevel: "l (TC) (MNT)",
                  damage: 14,
                  startUpFrame: "22 cs6",
                  blockFrame: -1,
                  hitFrame: "+4s",
                  counterHitFrame: "KND",
                  notes: ""
                },
                {
                  command: "d+4",
                  hitLevel: "l",
                  damage: 8,
                  startUpFrame: 17,
                  blockFrame: -19,
                  hitFrame: -3,
                  counterHitFrame: 7,
                  notes: ""
                },
                {
                  command: "d+4, 3",
                  hitLevel: "l, h (TJ)",
                  damage: "8,10",
                  startUpFrame: 17,
                  blockFrame: -6,
                  hitFrame: "JG",
                  counterHitFrame: "JG",
                  notes: ""
                },
                {
                  command: "d/b+1",
                  hitLevel: "sm (TC)",
                  damage: 5,
                  startUpFrame: "10 cs4",
                  blockFrame: -5,
                  hitFrame: 6,
                  counterHitFrame: 6,
                  notes: ""
                },
                {
                  command: "d/b+2",
                  hitLevel: "m",
                  damage: 17,
                  startUpFrame: 13,
                  blockFrame: -9,
                  hitFrame: 3,
                  counterHitFrame: "KND",
                  notes: ""
                },
                {
                  command: "d/b+3",
                  hitLevel: "l (SCR)",
                  damage: 15,
                  startUpFrame: 18,
                  blockFrame: -8,
                  hitFrame: 3,
                  counterHitFrame: 3,
                  notes: ""
                },
                {
                  command: "d/b+3, B",
                  hitLevel: "l",
                  damage: 15,
                  startUpFrame: 18,
                  blockFrame: -11,
                  hitFrame: 0,
                  counterHitFrame: 0,
                  notes: ""
                },
                {
                  command: "d/b+4",
                  hitLevel: "l (TC)",
                  damage: 14,
                  startUpFrame: "21 cs6",
                  blockFrame: -13,
                  hitFrame: -4,
                  counterHitFrame: 3,
                  notes: ""
                },
                {
                  command: "d/b+4, D",
                  hitLevel: "l (TC) (MNT)",
                  damage: 14,
                  startUpFrame: "21 cs6",
                  blockFrame: -14,
                  hitFrame: -5,
                  counterHitFrame: 2,
                  notes: ""
                },
                {
                  command: "d/b+4,2",
                  hitLevel: "l, m",
                  damage: "14,17",
                  startUpFrame: 21,
                  blockFrame: -13,
                  hitFrame: "Launch",
                  counterHitFrame: "Launch",
                  notes: ""
                },
                {
                  command: "d/b+1+2",
                  hitLevel: "l (TC) (MNT)",
                  damage: 17,
                  startUpFrame: "28 cs9",
                  blockFrame: -16,
                  hitFrame: "KND",
                  counterHitFrame: "KND",
                  notes: ""
                },
                {
                  command: "d/b+1+2, 1+2",
                  hitLevel: "l (TC), m",
                  damage: "17,14",
                  startUpFrame: 28,
                  blockFrame: -14,
                  hitFrame: "KND",
                  counterHitFrame: "KND",
                  notes: ""
                },
                {
                  command: "b+1",
                  hitLevel: "m",
                  damage: 14,
                  startUpFrame: 18,
                  blockFrame: -14,
                  hitFrame: 2,
                  counterHitFrame: 2,
                  notes: ""
                },
                {
                  command: "b+1:1+2",
                  hitLevel: "m",
                  damage: "14,42",
                  startUpFrame: 18,
                  blockFrame: -14,
                  hitFrame: "Throw",
                  counterHitFrame: "Throw",
                  notes: ["Just Frame Move", "Whiff Punish", "Combo Ender"]
                },
                {
                  command: "b+2",
                  hitLevel: "h",
                  damage: 22,
                  startUpFrame: 22,
                  blockFrame: -5,
                  hitFrame: "KND",
                  counterHitFrame: "Launch",
                  notes: {
                    properties: {
                      homing: 'homing',
                    }
                  }
                },
                {
                  command: "b+3",
                  hitLevel: "m",
                  damage: 23,
                  startUpFrame: "24 pc8",
                  blockFrame: "-9s",
                  hitFrame: "-5s",
                  counterHitFrame: "-5s",
                  notes: "Power Crush"
                },
                {
                  command: "b+3, D",
                  hitLevel: "m (MNT)",
                  damage: 23,
                  startUpFrame: "24 pc8",
                  blockFrame: "-8s",
                  hitFrame: "-4s",
                  counterHitFrame: "-4s",
                  notes: "Power Cursh"
                },
                {
                  command: "b+4",
                  hitLevel: "m",
                  damage: 14,
                  startUpFrame: 22,
                  blockFrame: -9,
                  hitFrame: 4,
                  counterHitFrame: 4,
                  notes: ""
                },
                {
                  command: "b+4, 4",
                  hitLevel: "m, m",
                  damage: "14,20",
                  startUpFrame: 22,
                  blockFrame: -14,
                  hitFrame: "KND",
                  counterHitFrame: "KND",
                  notes: ""
                },
                {
                  command: "b+1+2",
                  hitLevel: "l (TC)",
                  damage: 12,
                  startUpFrame: "16 cs7",
                  blockFrame: -17,
                  // hitFrame: -2 + 's',
                  hitFrame: -2,
                  // hitFrame: this.moveComputed(-2),
                  counterHitFrame: "-2s",
                  notes: ""
                },
                {
                  command: "b+2+3",
                  hitLevel: "m!",
                  damage: 40,
                  startUpFrame: 64,
                  blockFrame: "KND",
                  hitFrame: "KND",
                  counterHitFrame: "KND",
                  notes: ""
                },
                {
                  command: "u/b or u+1",
                  hitLevel: "m (TJ)",
                  damage: 12,
                  startUpFrame: "18 js9",
                  blockFrame: -12,
                  hitFrame: -1,
                  counterHitFrame: -1,
                  notes: ""
                },
                {
                  command: "u/f+1",
                  hitLevel: "h",
                  damage: 20,
                  startUpFrame: 19,
                  blockFrame: 4,
                  hitFrame: 9,
                  counterHitFrame: 9,
                  notes: ""
                },
                {
                  command: "u/b or u or u/f+22",
                  hitLevel: "h",
                  damage: 17,
                  startUpFrame: 15,
                  blockFrame: -12,
                  hitFrame: "+9g",
                  counterHitFrame: "+9g",
                  notes: ""
                },
                {
                  command: "u/b+3",
                  hitLevel: "m (TJ)",
                  damage: 19,
                  startUpFrame: "22 js8",
                  blockFrame: -17,
                  hitFrame: -6,
                  counterHitFrame: -6,
                  notes: ""
                },
                {
                  command: "u+3",
                  hitLevel: "m (TJ)",
                  damage: 25,
                  startUpFrame: "22 js8",
                  blockFrame: -8,
                  hitFrame: "KND",
                  counterHitFrame: "KND",
                  notes: ""
                },
                {
                  command: "u/f+3",
                  hitLevel: "m (TJ)",
                  damage: 25,
                  startUpFrame: "22 js8",
                  blockFrame: -8,
                  hitFrame: "KND",
                  counterHitFrame: "KND",
                  notes: ""
                },
                {
                  command: "u/b+4",
                  hitLevel: "m (TJ)",
                  damage: 16,
                  startUpFrame: "17 js9",
                  blockFrame: -17,
                  hitFrame: -6,
                  counterHitFrame: -6,
                  notes: ""
                },
                {
                  command: "u+4",
                  hitLevel: "m (TJ)",
                  damage: 18,
                  startUpFrame: "17 js9",
                  blockFrame: -13,
                  hitFrame: "Launch",
                  counterHitFrame: "Launch",
                  notes: ""
                },
                {
                  command: "u/f+4",
                  hitLevel: "m (TJ)",
                  damage: 18,
                  startUpFrame: "17 js9",
                  blockFrame: -13,
                  hitFrame: "Launch",
                  counterHitFrame: "Launch",
                  notes: ""
                },
                {
                  command: "u/f, N, 4",
                  hitLevel: "m (TJ)",
                  damage: 25,
                  startUpFrame: "25 js9",
                  blockFrame: -9,
                  hitFrame: "KND",
                  counterHitFrame: "KND",
                  notes: ""
                },
                {
                  command: "U/F+4",
                  hitLevel: "m",
                  damage: 25,
                  startUpFrame: 25,
                  blockFrame: -8,
                  hitFrame: 3,
                  counterHitFrame: 3,
                  notes: ""
                },
                {
                  command: "u/f+1+2",
                  hitLevel: "m (TJ) (TRT)",
                  damage: 20,
                  startUpFrame: "21 js9",
                  blockFrame: -7,
                  hitFrame: 6,
                  counterHitFrame: "CS",
                  notes: ""
                },
                {
                  command: "u/b, b",
                  hitLevel: "(Special)",
                  damage: "NA",
                  startUpFrame: 50,
                  blockFrame: "NA",
                  hitFrame: "NA",
                  counterHitFrame: "NA",
                  notes: "Backflip"
                },
                {
                  command: "u/b, b+3+4",
                  hitLevel: "(MNT)",
                  damage: "NA",
                  startUpFrame: 56,
                  blockFrame: "NA",
                  hitFrame: "NA",
                  counterHitFrame: "NA",
                  notes: "Backflip to Mantis Stance"
                },
                {
                  command: "f, F+2",
                  hitLevel: "h",
                  damage: 28,
                  startUpFrame: 15,
                  blockFrame: 1,
                  hitFrame: "KND",
                  counterHitFrame: "Launch",
                  notes: {
                    properties: {
                      homing: 'homing',
                      tailSpin: 'tail spin'
                    }
                  }
                },
                {
                  command: "f, F+3",
                  hitLevel: "m (SCR)",
                  damage: 24,
                  startUpFrame: 20,
                  blockFrame: 4,
                  hitFrame: "+9s",
                  counterHitFrame: "KND",
                  notes: ""
                },
                {
                  command: "f, F+3, B",
                  hitLevel: "m",
                  damage: 24,
                  startUpFrame: 20,
                  blockFrame: 4,
                  hitFrame: "+9s",
                  counterHitFrame: "KND",
                  notes: ""
                },
                {
                  command: "f, F+3, 1",
                  hitLevel: "m, m",
                  damage: "24,24",
                  startUpFrame: 20,
                  blockFrame: -16,
                  hitFrame: "KND",
                  counterHitFrame: "KND",
                  notes: ""
                },
                {
                  command: "f, F+4",
                  hitLevel: "m (TJ)",
                  damage: 22,
                  startUpFrame: "17 js6",
                  blockFrame: -8,
                  hitFrame: "KND",
                  counterHitFrame: "KND",
                  notes: {
                    properties: {
                      homing: 'homing',
                      tailSpin: 'tail spin'
                    }
                  }
                },
                {
                  command: "f, F+3+4",
                  hitLevel: "mm (TJ)",
                  damage: "10,21",
                  startUpFrame: "21 js6",
                  blockFrame: -11,
                  hitFrame: "KND",
                  counterHitFrame: "KND",
                  notes: ""
                },
                {
                  command: "f, F+3+4, D",
                  hitLevel: "mm (TJ) (MNT)",
                  damage: "10,21",
                  startUpFrame: 21,
                  blockFrame: -12,
                  hitFrame: "KND",
                  counterHitFrame: "KND",
                  notes: ""
                },
                {
                  command: "f, f, f+3 or WR+3",
                  hitLevel: "m (TJ)",
                  damage: 30,
                  startUpFrame: "23 js3",
                  blockFrame: 6,
                  hitFrame: "KND",
                  counterHitFrame: "KND",
                  notes: ""
                },
                {
                  command: "WR+4",
                  hitLevel: "l",
                  damage: 21,
                  startUpFrame: 14,
                  blockFrame: -40,
                  hitFrame: "KND",
                  counterHitFrame: "KND",
                  notes: ""
                },
                {
                  command: "WR+4, D",
                  hitLevel: "l (TRT)",
                  damage: 21,
                  startUpFrame: 14,
                  blockFrame: -51,
                  hitFrame: "KND",
                  counterHitFrame: "KND",
                  notes: ""
                },
                {
                  command: "WR+4, U",
                  hitLevel: "l (BT)",
                  damage: 21,
                  startUpFrame: 14,
                  blockFrame: -52,
                  hitFrame: "KND",
                  counterHitFrame: "KND",
                  notes: ""
                },
                {
                  command: "FC+1",
                  hitLevel: "Sm (TC)",
                  damage: 5,
                  startUpFrame: 10,
                  blockFrame: -5,
                  hitFrame: 6,
                  counterHitFrame: 6,
                  notes: ""
                },
                {
                  command: "FC+2",
                  hitLevel: "Sm (TC)",
                  damage: 8,
                  startUpFrame: 11,
                  blockFrame: -4,
                  hitFrame: 7,
                  counterHitFrame: 7,
                  notes: ""
                },
                {
                  command: "FC+3",
                  hitLevel: "l (TC)",
                  damage: 12,
                  startUpFrame: 16,
                  blockFrame: -17,
                  hitFrame: -3,
                  counterHitFrame: -3,
                  notes: ""
                },
                {
                  command: "FC+4",
                  hitLevel: "l (TC)",
                  damage: 10,
                  startUpFrame: 12,
                  blockFrame: -15,
                  hitFrame: -4,
                  counterHitFrame: -4,
                  notes: ""
                },
                {
                  command: "WS+1",
                  hitLevel: "m",
                  damage: 9,
                  startUpFrame: 15,
                  blockFrame: -10,
                  hitFrame: 1,
                  counterHitFrame: 1,
                  notes: ""
                },
                {
                  command: "WS+1, 2",
                  hitLevel: "m, m",
                  damage: "9,10",
                  startUpFrame: 15,
                  blockFrame: -13,
                  hitFrame: "Launch",
                  counterHitFrame: "Launch",
                  notes: ""
                },
                {
                  command: "WS+2",
                  hitLevel: "m",
                  damage: 20,
                  startUpFrame: 18,
                  blockFrame: -14,
                  hitFrame: "Launch",
                  counterHitFrame: "Launch",
                  notes: ""
                },
                {
                  command: "WS+2, D",
                  hitLevel: "m (MNT)",
                  damage: 20,
                  startUpFrame: 18,
                  blockFrame: -40,
                  hitFrame: "Launch",
                  counterHitFrame: "Launch",
                  notes: ""
                },
                {
                  command: "WS+3",
                  hitLevel: "h (SCR)",
                  damage: 24,
                  startUpFrame: 16,
                  blockFrame: 4,
                  hitFrame: "KND",
                  counterHitFrame: "Launch",
                  notes: ""
                },
                {
                  command: "WS+3, B",
                  hitLevel: "h",
                  damage: 24,
                  startUpFrame: 16,
                  blockFrame: -10,
                  hitFrame: "KND",
                  counterHitFrame: "Launch",
                  notes: ""
                },
                {
                  command: "WS+4",
                  hitLevel: "m",
                  damage: 18,
                  startUpFrame: 11,
                  blockFrame: -9,
                  hitFrame: 2,
                  counterHitFrame: 2,
                  notes: ""
                },
                {
                  command: "FC+d/f+3",
                  hitLevel: "l (TC)",
                  damage: 15,
                  startUpFrame: 23,
                  blockFrame: -26,
                  hitFrame: "KND",
                  counterHitFrame: "KND",
                  notes: ""
                },
                {
                  command: "FC+d/f+3, D",
                  hitLevel: "l (TC) (MNT)",
                  damage: 15,
                  startUpFrame: 23,
                  blockFrame: -26,
                  hitFrame: "KND",
                  counterHitFrame: "KND",
                  notes: ""
                },
                {
                  command: "SS+1+2",
                  hitLevel: "m",
                  damage: 22,
                  startUpFrame: 17,
                  blockFrame: parseInt("-2") + "s",
                  hitFrame: "+8s",
                  counterHitFrame: "KND",
                  notes: ""
                },
                {
                  command: "Back against wall b, b, u/b",
                  hitLevel: "m",
                  damage: 21,
                  startUpFrame: 39,
                  blockFrame: "+4s",
                  hitFrame: "KND",
                  counterHitFrame: "KND",
                  notes: ""
                },
                {
                  command: "BT 1 or 2",
                  hitLevel: "h",
                  damage: 15,
                  startUpFrame: 8,
                  blockFrame: -8,
                  hitFrame: 3,
                  counterHitFrame: 3,
                  notes: ""
                },
                {
                  command: "BT 3 or 4",
                  hitLevel: "h",
                  damage: 18,
                  startUpFrame: 10,
                  blockFrame: -8,
                  hitFrame: "KND",
                  counterHitFrame: "KND",
                  notes: ""
                },
                {
                  command: "BT d+1 or d+2",
                  hitLevel: "sm (TC)",
                  damage: 10,
                  startUpFrame: 10,
                  blockFrame: -2,
                  hitFrame: 9,
                  counterHitFrame: 9,
                  notes: ""
                },
                {
                  command: "BT d+3 or d+4",
                  hitLevel: "l",
                  damage: 12,
                  startUpFrame: 10,
                  blockFrame: -11,
                  hitFrame: 3,
                  counterHitFrame: 4,
                  notes: ""
                },
                {
                  command: "d+1+2 or FC+d+1+2",
                  hitLevel: "(TRT)",
                  damage: "NA",
                  startUpFrame: "NA",
                  blockFrame: "NA",
                  hitFrame: "NA",
                  counterHitFrame: "NA",
                  notes: "Enter Tarantula Stance"
                },
                {
                  command: "TRT d/b",
                  hitLevel: "NA",
                  damage: "NA",
                  startUpFrame: 37,
                  blockFrame: "NA",
                  hitFrame: "NA",
                  counterHitFrame: "NA",
                  notes: "Cancel Tarantula Stance"
                },
                {
                  command: "TRT 1",
                  hitLevel: "l (TRT)",
                  damage: 11,
                  startUpFrame: 18,
                  blockFrame: -11,
                  hitFrame: 5,
                  counterHitFrame: "KND",
                  notes: ""
                },
                {
                  command: "TRT 2",
                  hitLevel: "m",
                  damage: 24,
                  startUpFrame: 34,
                  blockFrame: -9,
                  hitFrame: "Launch",
                  counterHitFrame: "Launch",
                  notes: ""
                },
                {
                  command: "TRT 3",
                  hitLevel: "m (TRT)",
                  damage: 16,
                  startUpFrame: 14,
                  blockFrame: -7,
                  hitFrame: "KND",
                  counterHitFrame: "KND",
                  notes: ""
                },
                {
                  command: "TRT 3, U",
                  hitLevel: "m",
                  damage: 16,
                  startUpFrame: 14,
                  blockFrame: -17,
                  hitFrame: "KND",
                  counterHitFrame: "KND",
                  notes: ""
                },
                {
                  command: "TRT 3, D",
                  hitLevel: "m (MNT)",
                  damage: 16,
                  startUpFrame: 14,
                  blockFrame: -14,
                  hitFrame: "KND",
                  counterHitFrame: "KND",
                  notes: ""
                },
                {
                  command: "TRT 4",
                  hitLevel: "m (MNT)",
                  damage: 18,
                  startUpFrame: 26,
                  blockFrame: -22,
                  hitFrame: -4,
                  counterHitFrame: "-4s",
                  notes: ""
                },
                {
                  command: "TRT 4, D",
                  hitLevel: "m (TRT)",
                  damage: 18,
                  startUpFrame: 26,
                  blockFrame: -22,
                  hitFrame: -4,
                  counterHitFrame: "-4s",
                  notes: ""
                },
                {
                  command: "TRT 4, 3",
                  hitLevel: "m, m",
                  damage: "18,15",
                  startUpFrame: 26,
                  blockFrame: -14,
                  hitFrame: "KND",
                  counterHitFrame: "KND",
                  notes: ""
                },
                {
                  command: "TRT 1+2",
                  hitLevel: "m, m (TJ)",
                  damage: "7,20",
                  startUpFrame: "19 js7",
                  blockFrame: "-12s",
                  hitFrame: "KND",
                  counterHitFrame: "KND",
                  notes: {
                    properties: {
                      tailSpin: 'tail spin'
                    }
                  }
                },
                {
                  command: "TRT d+1+2",
                  hitLevel: "l (MNT)",
                  damage: 20,
                  startUpFrame: 25,
                  blockFrame: -21,
                  hitFrame: "KND",
                  counterHitFrame: "KND",
                  notes: ""
                },
                {
                  command: "3+4 or FC+d+3",
                  hitLevel: "(SCR)",
                  damage: "NA",
                  startUpFrame: "NA",
                  blockFrame: "NA",
                  hitFrame: "NA",
                  counterHitFrame: "NA",
                  notes: {
                      notes: 'Enter Scarecrow Stance',
                      applications: '',
                      combos: 'NA',
                      weak: 'NA',
                  }
                },
                {
                  command: "SCR d/b",
                  hitLevel: "–",
                  damage: "–",
                  startUpFrame: 19,
                  blockFrame: "–",
                  hitFrame: "–",
                  counterHitFrame: "–",
                  notes: ""
                },
                {
                  command: "SCR 1",
                  hitLevel: "h (SCR)",
                  damage: 12,
                  startUpFrame: 10,
                  blockFrame: -2,
                  hitFrame: 9,
                  counterHitFrame: 9,
                  notes: ""
                },
                {
                  command: "SCR 2",
                  hitLevel: "m (SCR)",
                  damage: 17,
                  startUpFrame: 14,
                  blockFrame: -7,
                  hitFrame: 7,
                  counterHitFrame: "KND",
                  notes: ""
                },
                {
                  command: "SCR 2, 2",
                  hitLevel: "m, m",
                  damage: "17,17",
                  startUpFrame: 14,
                  blockFrame: -10,
                  hitFrame: "+8s",
                  counterHitFrame: "KND",
                  notes: ""
                },
                {
                  command: "SCR 3",
                  hitLevel: "m (SCR)",
                  damage: 15,
                  startUpFrame: 13,
                  blockFrame: -6,
                  hitFrame: 5,
                  counterHitFrame: 5,
                  notes: ""
                },
                {
                  command: "SCR 3, 3",
                  hitLevel: "m, m (SCR)",
                  damage: "15,10",
                  startUpFrame: 13,
                  blockFrame: -9,
                  hitFrame: "2+",
                  counterHitFrame: 7,
                  notes: ""
                },
                {
                  command: "SCR 3, 3, 4",
                  hitLevel: "m, m, l (TC)",
                  damage: "15,10,15",
                  startUpFrame: 13,
                  blockFrame: -25,
                  hitFrame: "KND",
                  counterHitFrame: "KND",
                  notes: ""
                },
                {
                  command: "SCR 3, 3, 4, D",
                  hitLevel: "m,m,l (MNT)",
                  damage: "15,10,15",
                  startUpFrame: 13,
                  blockFrame: -14,
                  hitFrame: "KND",
                  counterHitFrame: "KND",
                  notes: ""
                },
                {
                  command: "SCR 3, f+3",
                  hitLevel: "m, h (SCR)",
                  damage: "15,20",
                  startUpFrame: 13,
                  blockFrame: 3,
                  hitFrame: "KND",
                  counterHitFrame: "KND",
                  notes: ""
                },
                {
                  command: "SCR 4",
                  hitLevel: "m (SCR)",
                  damage: 25,
                  startUpFrame: "14 pc8",
                  blockFrame: -13,
                  hitFrame: "Launch",
                  counterHitFrame: "Launch",
                  notes: "Power Crush"
                },
                {
                  command: "SCR 4, B",
                  hitLevel: "m",
                  damage: 25,
                  startUpFrame: "14 pc8",
                  blockFrame: -18,
                  hitFrame: "Launch",
                  counterHitFrame: "Launch",
                  notes: "Power Crush"
                },
                {
                  command: "SCR 1+2",
                  hitLevel: "m",
                  damage: 28,
                  startUpFrame: 17,
                  blockFrame: 6,
                  hitFrame: "KND",
                  counterHitFrame: "Launch",
                  notes: ""
                },
                {
                  command: "SCR 1+2, D",
                  hitLevel: "m (TRT)",
                  damage: 28,
                  startUpFrame: 17,
                  blockFrame: 6,
                  hitFrame: "KND",
                  counterHitFrame: "Launch",
                  notes: ""
                },
                {
                  command: "SCR 3+4",
                  hitLevel: "m, m (TJ)",
                  damage: "10,20",
                  startUpFrame: "18 js6",
                  blockFrame: -12,
                  hitFrame: "+8k",
                  counterHitFrame: "+8k",
                  notes: {
                    properties: {
                      tailSpin: 'tail spin'
                    }
                  }
                },
                {
                  command: "SCR d/f+3",
                  hitLevel: "l (TC)",
                  damage: 10,
                  startUpFrame: "28s cs6",
                  blockFrame: -23,
                  hitFrame: "-10s",
                  counterHitFrame: "-10s",
                  notes: {
                    properties: {
                      homing: 'homing',
                    }
                  }
                },
                {
                  command: "SCR d/f+3, D",
                  hitLevel: "l (TC) (MNT)",
                  damage: 10,
                  startUpFrame: "28 cs6",
                  blockFrame: -23,
                  hitFrame: "-15s",
                  counterHitFrame: "-15s",
                  notes: {
                    properties: {
                      homing: 'homing',
                    }
                  }
                },
                {
                  command: "SCR d/f+3, 3",
                  hitLevel: "l (TC), l (TC)",
                  damage: "10,10",
                  startUpFrame: "28s",
                  blockFrame: -23,
                  hitFrame: "Launch",
                  counterHitFrame: "Launch",
                  notes: {
                    properties: {
                      homing: 'homing',
                    }
                  }
                },
                {
                  command: "SCR d/f+3, 3, D",
                  hitLevel: "l (TC), l (TC) (MNT)",
                  damage: "10,10",
                  startUpFrame: 28,
                  blockFrame: -23,
                  hitFrame: "Launch",
                  counterHitFrame: "Launch",
                  notes: {
                    properties: {
                      homing: 'homing',
                    }
                  }
                },
                {
                  command: "SCR d/f+4",
                  hitLevel: "l (TC)",
                  damage: 17,
                  startUpFrame: "19 cs6",
                  blockFrame: -14,
                  hitFrame: "+7s",
                  counterHitFrame: "KND",
                  notes: ""
                },
                {
                  command: "SCR d/f+4, D",
                  hitLevel: "l (TC) (MNT)",
                  damage: 17,
                  startUpFrame: 19,
                  blockFrame: -14,
                  hitFrame: "+7s",
                  counterHitFrame: "KND",
                  notes: ""
                },
                {
                  command: "SCR d+3",
                  hitLevel: "l (SCR)",
                  damage: 10,
                  startUpFrame: 18,
                  blockFrame: -6,
                  hitFrame: -3,
                  counterHitFrame: "+9g",
                  notes: ""
                },
                {
                  command: "SCR d+3, 3",
                  hitLevel: "l, h (SCR)",
                  damage: "10,28",
                  startUpFrame: 18,
                  blockFrame: 3,
                  hitFrame: "KND",
                  counterHitFrame: "KND",
                  notes: {
                    properties: {
                      tailSpin: 'tail spin'
                    }
                  }
                },
                {
                  command: "SCR d+3, 3, B",
                  hitLevel: "l, h",
                  damage: "10,28",
                  startUpFrame: 18,
                  blockFrame: -1,
                  hitFrame: "KND",
                  counterHitFrame: "KND",
                  notes: {
                    properties: {
                      tailSpin: 'tail spin'
                    }
                  }
                },
                {
                  command: "SCR d+3, d+3",
                  hitLevel: "l, l (SCR)",
                  damage: "10,15",
                  startUpFrame: 18,
                  blockFrame: -8,
                  hitFrame: "+8s",
                  counterHitFrame: "+8s",
                  notes: ""
                },
                {
                  command: "SCR d+4",
                  hitLevel: "l (TC)",
                  damage: 20,
                  startUpFrame: "24s cs10",
                  blockFrame: -25,
                  hitFrame: "KND",
                  counterHitFrame: "KND",
                  notes: ""
                },
                {
                  command: "SCR d+4, D",
                  hitLevel: "l (TC) (MNT)",
                  damage: 20,
                  startUpFrame: "24 cs10",
                  blockFrame: -25,
                  hitFrame: "KND",
                  counterHitFrame: "KND",
                  notes: ""
                },
                {
                  command: "SCR d+3+4",
                  hitLevel: "(MNT)",
                  damage: "NA",
                  startUpFrame: 67,
                  blockFrame: "NA",
                  hitFrame: "NA",
                  counterHitFrame: "NA",
                  notes: "Switch from Scarecrow Stance to Mantis Stance"
                },
                {
                  command: "d3+4 or FC+d+3+4",
                  hitLevel: "(MNT)",
                  damage: "NA",
                  startUpFrame: "NA",
                  blockFrame: "NA",
                  hitFrame: "NA",
                  counterHitFrame: "NA",
                  notes: "Enter Mantis Stance"
                },
                {
                  command: "MNT, d/b",
                  hitLevel: "NA",
                  damage: "NA",
                  startUpFrame: 30,
                  blockFrame: "NA",
                  hitFrame: "NA",
                  counterHitFrame: "NA",
                  notes: "Blocks lows"
                },
                {
                  command: "MNT 1",
                  hitLevel: "m",
                  damage: 12,
                  startUpFrame: 13,
                  blockFrame: -6,
                  hitFrame: 5,
                  counterHitFrame: 5,
                  notes: ""
                },
                {
                  command: "MNT 1, 3",
                  hitLevel: "m, h (SCR)",
                  damage: "12,12",
                  startUpFrame: 13,
                  blockFrame: 0,
                  hitFrame: 9,
                  counterHitFrame: 9,
                  notes: ""
                },
                {
                  command: "MNT 1, 3, B",
                  hitLevel: "m, h",
                  damage: "12,12",
                  startUpFrame: 13,
                  blockFrame: -8,
                  hitFrame: 1,
                  counterHitFrame: 1,
                  notes: ""
                },
                {
                  command: "MNT 2",
                  hitLevel: "m (MNT)",
                  damage: 19,
                  startUpFrame: 13,
                  blockFrame: -14,
                  hitFrame: -3,
                  counterHitFrame: "CS",
                  notes: ""
                },
                {
                  command: "MNT 2, 1",
                  hitLevel: "m, m (MNT)",
                  damage: "19,10",
                  startUpFrame: 13,
                  blockFrame: -14,
                  hitFrame: -3,
                  counterHitFrame: -3,
                  notes: ""
                },
                {
                  command: "MNT 2, 1, 4",
                  hitLevel: "m, m, m (MNT)",
                  damage: "19,10,25",
                  startUpFrame: 13,
                  blockFrame: -13,
                  hitFrame: "KND",
                  counterHitFrame: "KND",
                  notes: {
                    properties: {
                      tailSpin: 'tail spin'
                    }
                  }
                },
                {
                  command: "MNT 2, 1, 4, B",
                  hitLevel: "m, m, m",
                  damage: "19,10,25",
                  startUpFrame: 13,
                  blockFrame: -15,
                  hitFrame: "KND",
                  counterHitFrame: "KND",
                  notes: {
                    properties: {
                      tailSpin: 'tail spin'
                    }
                  }
                },
                {
                  command: "MNT 3",
                  hitLevel: "l (TC) (MNT)",
                  damage: 19,
                  startUpFrame: 22,
                  blockFrame: -14,
                  hitFrame: "+3s",
                  counterHitFrame: "KND",
                  notes: ""
                },
                {
                  command: "MNT 3, 4",
                  hitLevel: "l (TC), l (TC) (MNT)",
                  damage: "19,10",
                  startUpFrame: 22,
                  blockFrame: -17,
                  hitFrame: -1,
                  counterHitFrame: -1,
                  notes: ""
                },
                {
                  command: "MNT 3, 4, 4",
                  hitLevel: "l (TC), l (TC), m (TC) (TJ)",
                  damage: "19,10,18",
                  startUpFrame: "22s",
                  blockFrame: "-12s",
                  hitFrame: "+1s",
                  counterHitFrame: "KND",
                  notes: ""
                },
                {
                  command: "MNT 3, 4, d+4",
                  hitLevel: "l (TC), l (TC), l (TC) (MNT)",
                  damage: "19,10,16",
                  startUpFrame: 22,
                  blockFrame: -24,
                  hitFrame: 9,
                  counterHitFrame: 9,
                  notes: ""
                },
                {
                  command: "MNT 4",
                  hitLevel: "l (TC) (MNT)",
                  damage: 13,
                  startUpFrame: 17,
                  blockFrame: -19,
                  hitFrame: -3,
                  counterHitFrame: 7,
                  notes: ""
                },
                {
                  command: "MNT 4, 3",
                  hitLevel: "l (TC), m (TJ) (MNT)",
                  damage: "13,23",
                  startUpFrame: 17,
                  blockFrame: -30,
                  hitFrame: "Launch",
                  counterHitFrame: "Launch",
                  notes: ""
                },
                {
                  command: "MNT 1+2",
                  hitLevel: "m",
                  damage: 21,
                  startUpFrame: "20 pc8~",
                  blockFrame: "-13s",
                  hitFrame: "KND",
                  counterHitFrame: "KND",
                  notes: "Power Crush"
                },
                {
                  command: "MNT 2+3",
                  hitLevel: "(MNT) BT",
                  damage: "",
                  startUpFrame: 25,
                  blockFrame: "NA",
                  hitFrame: "NA",
                  counterHitFrame: "NA",
                  notes: "Turn around position in Mantis Stance "
                },
                {
                  command: "MNT d/f+2",
                  hitLevel: "m",
                  damage: 13,
                  startUpFrame: 19,
                  blockFrame: -9,
                  hitFrame: "Launch",
                  counterHitFrame: "Launch",
                  notes: ""
                },
                {
                  command: "MNT d/f+3",
                  hitLevel: "m (TJ) (MNT)",
                  damage: 20,
                  startUpFrame: "15 js10",
                  blockFrame: -17,
                  hitFrame: "+19g",
                  counterHitFrame: "+19g",
                  notes: ""
                },
                {
                  command: "MNT d/f+3, 4",
                  hitLevel: "m (MNT) BT",
                  damage: 20,
                  startUpFrame: 15,
                  blockFrame: -14,
                  hitFrame: "+22g",
                  counterHitFrame: "+22g",
                  notes: ""
                },
                {
                  command: "MNT d+1",
                  hitLevel: "l (TC) (MNT)",
                  damage: 14,
                  startUpFrame: 15,
                  blockFrame: -11,
                  hitFrame: 0,
                  counterHitFrame: 0,
                  notes: ""
                },
                {
                  command: "MNT d+1, 4",
                  hitLevel: "l (TC), m (TJ)",
                  damage: "14,23",
                  startUpFrame: 15,
                  blockFrame: -16,
                  hitFrame: "KND",
                  counterHitFrame: "Launch",
                  notes: {
                    properties: {
                      tailSpin: 'tail spin'
                    }
                  }
                },
                {
                  command: "MNT d+1, 4, D",
                  hitLevel: "l (TC), m (TJ) (MNT)",
                  damage: "14,23",
                  startUpFrame: 15,
                  blockFrame: -15,
                  hitFrame: "KND",
                  counterHitFrame: "Launch",
                  notes: {
                    properties: {
                      tailSpin: 'tail spin'
                    }
                  }
                },
                {
                  command: "MNT d+3",
                  hitLevel: "l (TC) (MNT)",
                  damage: 12,
                  startUpFrame: 15,
                  blockFrame: -12,
                  hitFrame: -1,
                  counterHitFrame: -1,
                  notes: ""
                },
                {
                  command: "MNT d+3, 1",
                  hitLevel: "l (TC), m (MNT)",
                  damage: "12,16",
                  startUpFrame: 15,
                  blockFrame: -9,
                  hitFrame: "KND",
                  counterHitFrame: "KND",
                  notes: ""
                },
                {
                  command: "MNT d+4",
                  hitLevel: "l (TC)",
                  damage: 19,
                  startUpFrame: 20,
                  blockFrame: -24,
                  hitFrame: "+2s",
                  counterHitFrame: "KND",
                  notes: ""
                },
                {
                  command: "MNT d+4, D",
                  hitLevel: "l (MNT)",
                  damage: 19,
                  startUpFrame: 20,
                  blockFrame: -27,
                  hitFrame: "-1s",
                  counterHitFrame: "KND",
                  notes: ""
                },
                {
                  command: "MNT u/f+3",
                  hitLevel: "m (TJ)",
                  damage: 25,
                  startUpFrame: "26s js7",
                  blockFrame: "-10s",
                  hitFrame: "KND",
                  counterHitFrame: "KND",
                  notes: ""
                }
               ]
        }
    }
}

