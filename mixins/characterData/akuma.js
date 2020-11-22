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
            data: [
                {
                  moveType: "",
                  command: "in rage 1, 1, b or f+3, 2",
                  hitLevel: "m(Throw)",
                  damage: 55,
                  startUpFrame: "16 pc1~",
                  blockFrame: "",
                  hitFrame: "Throw(KND)",
                  counterHitFrame: "Throw(KND)",
                  notes: "Rage art"
                },
                {
                  moveType: "",
                  command: "1 or f+1",
                  hitLevel: "h",
                  damage: 7,
                  startUpFrame: 10,
                  blockFrame: 1,
                  hitFrame: 8,
                  counterHitFrame: 8,
                  notes: ""
                },
                {
                  moveType: "",
                  command: "1, 1",
                  hitLevel: "h, h",
                  damage: "7,7",
                  startUpFrame: 10,
                  blockFrame: -3,
                  hitFrame: 4,
                  counterHitFrame: 4,
                  notes: ""
                },
                {
                  moveType: "",
                  command: "1, 2",
                  hitLevel: "h, m",
                  damage: "7,20",
                  startUpFrame: 10,
                  blockFrame: "-17~-16",
                  hitFrame: "KND",
                  counterHitFrame: "KND",
                  notes: ""
                },
                {
                  moveType: "",
                  command: "2 or f+2",
                  hitLevel: "Sm",
                  damage: 15,
                  startUpFrame: "15~16",
                  blockFrame: "-9~-8",
                  hitFrame: "0~+1",
                  counterHitFrame: "0~+1",
                  notes: ""
                },
                {
                  moveType: "",
                  command: "3 or b+3",
                  hitLevel: "h",
                  damage: 14,
                  startUpFrame: 15,
                  blockFrame: -8,
                  hitFrame: 3,
                  counterHitFrame: 3,
                  notes: ""
                },
                {
                  moveType: "",
                  command: 4,
                  hitLevel: "h",
                  damage: 12,
                  startUpFrame: "14~15",
                  blockFrame: "-13~-12",
                  hitFrame: "+2~+3",
                  counterHitFrame: "+2~+3",
                  notes: ""
                },
                {
                  moveType: "",
                  command: "4, 3",
                  hitLevel: "h, h",
                  damage: "12,17",
                  startUpFrame: "14~15",
                  blockFrame: "-5~-4",
                  hitFrame: "+19k",
                  counterHitFrame: "KND",
                  notes: "Tail spin, Homing"
                },
                {
                  moveType: "",
                  command: "1+2 or WS+1+2",
                  hitLevel: "h",
                  damage: 14,
                  startUpFrame: "31 pc8~",
                  blockFrame: -20,
                  hitFrame: -8,
                  counterHitFrame: -8,
                  notes: "Power crush"
                },
                {
                  moveType: "",
                  command: "1+2, f, f (Cancel)",
                  hitLevel: "h",
                  damage: 14,
                  startUpFrame: "315 pc8~",
                  blockFrame: -5,
                  hitFrame: 7,
                  counterHitFrame: 7,
                  notes: ""
                },
                {
                  moveType: "",
                  command: "1+2, b, b (Cancel)",
                  hitLevel: "h",
                  damage: 14,
                  startUpFrame: "315 pc8~",
                  blockFrame: -15,
                  hitFrame: -3,
                  counterHitFrame: -3,
                  notes: ""
                },
                {
                  moveType: "",
                  command: "1+2, *",
                  hitLevel: "h",
                  damage: 20,
                  startUpFrame: "40 pc8~",
                  blockFrame: -11,
                  hitFrame: "CS",
                  counterHitFrame: "CS",
                  notes: "Power crush"
                },
                {
                  moveType: "",
                  command: "1+2*, f, f (Cancel)",
                  hitLevel: "h",
                  damage: 20,
                  startUpFrame: "405 pc8~",
                  blockFrame: 4,
                  hitFrame: "CS(21)",
                  counterHitFrame: "CS(21)",
                  notes: "Power crush"
                },
                {
                  moveType: "",
                  command: "1+2*, b, b (Cancel)",
                  hitLevel: "h",
                  damage: 20,
                  startUpFrame: "405 pc8~",
                  blockFrame: -6,
                  hitFrame: "CS(11)",
                  counterHitFrame: "CS(11)",
                  notes: "Power crush"
                },
                {
                  moveType: "",
                  command: "1+2, (Hold long as possible)*",
                  hitLevel: "h!",
                  damage: 25,
                  startUpFrame: "65 pc8~54",
                  blockFrame: "CS",
                  hitFrame: "CS",
                  counterHitFrame: "CS",
                  notes: "Power crush"
                },
                {
                  moveType: "",
                  command: "1+2 (Hold long as possible)*, f, f (Cancel)",
                  hitLevel: "h",
                  damage: 25,
                  startUpFrame: "65 pc8~",
                  blockFrame: "CS(21)",
                  hitFrame: "CS(21)",
                  counterHitFrame: "CS(21)",
                  notes: "Power crush"
                },
                {
                  moveType: "",
                  command: "1+2 (Hold long as possible)*, b, b (Cancel)",
                  hitLevel: "h",
                  damage: 25,
                  startUpFrame: "65 pc8~",
                  blockFrame: "CS(11)",
                  hitFrame: "CS(11)",
                  counterHitFrame: "CS(11)",
                  notes: "Power crush"
                },
                {
                  moveType: "",
                  command: "f+3",
                  hitLevel: "m",
                  damage: 16,
                  startUpFrame: 17,
                  blockFrame: -4,
                  hitFrame: 7,
                  counterHitFrame: 7,
                  notes: ""
                },
                {
                  moveType: "",
                  command: "f+4",
                  hitLevel: "h",
                  damage: 20,
                  startUpFrame: "16~17",
                  blockFrame: "-5~-4",
                  hitFrame: "KND",
                  counterHitFrame: "KND",
                  notes: "Tail spin, Homing"
                },
                {
                  moveType: "",
                  command: "f+1+2",
                  hitLevel: "mm",
                  damage: "8,17",
                  startUpFrame: "20,32",
                  blockFrame: "-8s",
                  hitFrame: "+7s",
                  counterHitFrame: "+7s",
                  notes: ""
                },
                {
                  moveType: "",
                  command: "f+1+2 (Second hit miss)",
                  hitLevel: "m",
                  damage: 5,
                  startUpFrame: 20,
                  blockFrame: "–",
                  hitFrame: "–",
                  counterHitFrame: "–",
                  notes: ""
                },
                {
                  moveType: "",
                  command: "f+3+4",
                  hitLevel: "m (TJ)(TPORT)",
                  damage: 20,
                  startUpFrame: "22~23a js9~",
                  blockFrame: "-9~-8",
                  hitFrame: "+2~+3",
                  counterHitFrame: "+2~+3",
                  notes: "Homing"
                },
                {
                  moveType: "",
                  command: "d/f+1",
                  hitLevel: "m",
                  damage: 10,
                  startUpFrame: "13~14",
                  blockFrame: "-4~-3",
                  hitFrame: "+7~+8",
                  counterHitFrame: "+7~+8",
                  notes: ""
                },
                {
                  moveType: "",
                  command: "d/f+1, 1",
                  hitLevel: "m, h",
                  damage: "10,7",
                  startUpFrame: "13~14",
                  blockFrame: -3,
                  hitFrame: 6,
                  counterHitFrame: 6,
                  notes: ""
                },
                {
                  moveType: "",
                  command: "d/f+1, 2",
                  hitLevel: "m, mm",
                  damage: "10,5,15",
                  startUpFrame: "13~14",
                  blockFrame: "-13s",
                  hitFrame: "+7s",
                  counterHitFrame: "+7s",
                  notes: ""
                },
                {
                  moveType: "",
                  command: "d/f+1, 2 (Third hit miss)",
                  hitLevel: "m, m",
                  damage: "10,5",
                  startUpFrame: "13~14",
                  blockFrame: "–",
                  hitFrame: "–",
                  counterHitFrame: "–",
                  notes: ""
                },
                {
                  moveType: "",
                  command: "d/f+2",
                  hitLevel: "m",
                  damage: 10,
                  startUpFrame: "16~17",
                  blockFrame: "-7~-6",
                  hitFrame: "+3~+4",
                  counterHitFrame: "+3~+4",
                  notes: ""
                },
                {
                  moveType: "",
                  command: "d/f+2, 1",
                  hitLevel: "m, m",
                  damage: "10,10",
                  startUpFrame: "16~17",
                  blockFrame: "-18~-17",
                  hitFrame: "Launch (JG?)",
                  counterHitFrame: "Launch (JG?)",
                  notes: ""
                },
                {
                  moveType: "",
                  command: "d/f+2, 4",
                  hitLevel: "m, m",
                  damage: "10,13",
                  startUpFrame: "16~17",
                  blockFrame: -11,
                  hitFrame: 0,
                  counterHitFrame: 0,
                  notes: ""
                },
                {
                  moveType: "",
                  command: "d/f+2, 4, 3",
                  hitLevel: "m, m, m",
                  damage: "10,13,23",
                  startUpFrame: "16~17",
                  blockFrame: "-17~-16",
                  hitFrame: "KND",
                  counterHitFrame: "KND",
                  notes: ""
                },
                {
                  moveType: "",
                  command: "d/f+3",
                  hitLevel: "m",
                  damage: 14,
                  startUpFrame: 12,
                  blockFrame: -9,
                  hitFrame: 1,
                  counterHitFrame: 1,
                  notes: ""
                },
                {
                  moveType: "",
                  command: "d/f+4",
                  hitLevel: "m",
                  damage: 24,
                  startUpFrame: 19,
                  blockFrame: -16,
                  hitFrame: "KND",
                  counterHitFrame: "KND",
                  notes: ""
                },
                {
                  moveType: "",
                  command: "d/f+1+2",
                  hitLevel: "m",
                  damage: 23,
                  startUpFrame: "20 pc8~",
                  blockFrame: -14,
                  hitFrame: "KND",
                  counterHitFrame: "KND",
                  notes: "Power crush"
                },
                {
                  moveType: "",
                  command: "d/b or d+1 or FC+1",
                  hitLevel: "Sm (TC)",
                  damage: 5,
                  startUpFrame: "10s cs4or1~",
                  blockFrame: -5,
                  hitFrame: 6,
                  counterHitFrame: 6,
                  notes: ""
                },
                {
                  moveType: "",
                  command: "d/b or d+1, 2 or FC+1, 2",
                  hitLevel: "Sm (TC), Sm (TC)",
                  damage: "5,6",
                  startUpFrame: "s js1~",
                  blockFrame: -13,
                  hitFrame: -2,
                  counterHitFrame: -2,
                  notes: ""
                },
                {
                  moveType: "",
                  command: "d/b or d+2 or FC+2",
                  hitLevel: "Sm (TC)",
                  damage: 6,
                  startUpFrame: "12s cs4or1~",
                  blockFrame: -4,
                  hitFrame: 7,
                  counterHitFrame: 7,
                  notes: ""
                },
                {
                  moveType: "",
                  command: "d/b or d+3 or FC+3 (Close)",
                  hitLevel: "l (TC)",
                  damage: 10,
                  startUpFrame: "15s cs6or1~",
                  blockFrame: -11,
                  hitFrame: -2,
                  counterHitFrame: -2,
                  notes: ""
                },
                {
                  moveType: "",
                  command: "d/b or d+3 or FC+3",
                  hitLevel: "l (TC)",
                  damage: 7,
                  startUpFrame: "15s cs6or1~",
                  blockFrame: -11,
                  hitFrame: -2,
                  counterHitFrame: -2,
                  notes: ""
                },
                {
                  moveType: "",
                  command: "d/b or d+4 or FC+4",
                  hitLevel: "l (TC)",
                  damage: 17,
                  startUpFrame: "17~18s cs6or1~",
                  blockFrame: -27,
                  hitFrame: "KND",
                  counterHitFrame: "KND",
                  notes: ""
                },
                {
                  moveType: "",
                  command: "b+1",
                  hitLevel: "h",
                  damage: 15,
                  startUpFrame: "14~15",
                  blockFrame: "-14~-13",
                  hitFrame: "KND",
                  counterHitFrame: "KND",
                  notes: ""
                },
                {
                  moveType: "",
                  command: "b+2",
                  hitLevel: "m",
                  damage: 21,
                  startUpFrame: "23~24",
                  blockFrame: "-9~-8",
                  hitFrame: "+8~+9",
                  counterHitFrame: "KND",
                  notes: "Homing"
                },
                {
                  moveType: "",
                  command: "b+4",
                  hitLevel: "l",
                  damage: 15,
                  startUpFrame: "20~21",
                  blockFrame: "-13~-12",
                  hitFrame: "+1~+2",
                  counterHitFrame: "+1~+2",
                  notes: ""
                },
                {
                  moveType: "",
                  command: "f, F+2",
                  hitLevel: "m",
                  damage: 14,
                  startUpFrame: "15(16~)",
                  blockFrame: -14,
                  hitFrame: -2,
                  counterHitFrame: -2,
                  notes: ""
                },
                {
                  moveType: "",
                  command: "f, F+2:1",
                  hitLevel: "m, m",
                  damage: "14,20",
                  startUpFrame: "15(16~)",
                  blockFrame: "-13~-12",
                  hitFrame: "KND",
                  counterHitFrame: "KND",
                  notes: ""
                },
                {
                  moveType: "",
                  command: "f, F+4",
                  hitLevel: "m",
                  damage: 23,
                  startUpFrame: "20~21 (21~)",
                  blockFrame: "0~+1",
                  hitFrame: "+2~+3s",
                  counterHitFrame: "+2~+3s",
                  notes: ""
                },
                {
                  moveType: "",
                  command: "f, f, f+1",
                  hitLevel: "h",
                  damage: 30,
                  startUpFrame: "16~17 (19~)",
                  blockFrame: "+1~+2",
                  hitFrame: "KND",
                  counterHitFrame: "KND",
                  notes: ""
                },
                {
                  moveType: "",
                  command: "f, f, f+3",
                  hitLevel: "m (TJ)",
                  damage: 30,
                  startUpFrame: "26~31 (29~) js6~",
                  blockFrame: "+3~+8",
                  hitFrame: "KND",
                  counterHitFrame: "KND",
                  notes: ""
                },
                {
                  moveType: "",
                  command: "WR+4",
                  hitLevel: "l (TJ)",
                  damage: 23,
                  startUpFrame: "20~26 (53~)",
                  blockFrame: "-24~-18",
                  hitFrame: "KND",
                  counterHitFrame: "KND",
                  notes: ""
                },
                {
                  moveType: "",
                  command: "WS+1",
                  hitLevel: "h",
                  damage: 12,
                  startUpFrame: 13,
                  blockFrame: -5,
                  hitFrame: 6,
                  counterHitFrame: 6,
                  notes: ""
                },
                {
                  moveType: "",
                  command: "WS+2",
                  hitLevel: "m",
                  damage: 17,
                  startUpFrame: "15~16",
                  blockFrame: "-15~-14",
                  hitFrame: "Launch (JG?)",
                  counterHitFrame: "Launch (JG?)",
                  notes: ""
                },
                {
                  moveType: "",
                  command: "WS+3",
                  hitLevel: "m",
                  damage: 17,
                  startUpFrame: 13,
                  blockFrame: -7,
                  hitFrame: 5,
                  counterHitFrame: "CS",
                  notes: ""
                },
                {
                  moveType: "",
                  command: "WS+4",
                  hitLevel: "m",
                  damage: 10,
                  startUpFrame: "11~12",
                  blockFrame: "-9~-8",
                  hitFrame: "+2~+3",
                  counterHitFrame: "+2~+3",
                  notes: ""
                },
                {
                  moveType: "",
                  command: "WS+4, 4",
                  hitLevel: "m, m",
                  damage: "10,20",
                  startUpFrame: "11~12",
                  blockFrame: "-15~-14",
                  hitFrame: "-5~-4s",
                  counterHitFrame: "TUD",
                  notes: ""
                },
                {
                  moveType: "",
                  command: "Vertical jump 1",
                  hitLevel: "m (TJ)",
                  damage: 10,
                  startUpFrame: "7(16~43) js1~",
                  blockFrame: "-25~+2",
                  hitFrame: "-15~+12",
                  counterHitFrame: "-15~+12",
                  notes: ""
                },
                {
                  moveType: "",
                  command: "Vertical jump 2",
                  hitLevel: "m (TJ)",
                  damage: 15,
                  startUpFrame: "9(18~43) js1~",
                  blockFrame: "-18~+7",
                  hitFrame: "-8~+17",
                  counterHitFrame: "-8~+17",
                  notes: ""
                },
                {
                  moveType: "",
                  command: "Vertical jump 3",
                  hitLevel: "m (TJ)",
                  damage: 10,
                  startUpFrame: "7(16~43) js1~",
                  blockFrame: "-25~+2",
                  hitFrame: "-15~+12",
                  counterHitFrame: "-15~+12",
                  notes: ""
                },
                {
                  moveType: "",
                  command: "Vertical jump 4",
                  hitLevel: "m (TJ)",
                  damage: 15,
                  startUpFrame: "9(18~43) js1~",
                  blockFrame: "-18~+7",
                  hitFrame: "-8~+17",
                  counterHitFrame: "-8~+17",
                  notes: ""
                },
                {
                  moveType: "",
                  command: "Forward or backward jump 1",
                  hitLevel: "m (TJ)",
                  damage: 10,
                  startUpFrame: "9(14~40) js1~",
                  blockFrame: "-23~+4",
                  hitFrame: "-13~+14",
                  counterHitFrame: "-13~+14",
                  notes: ""
                },
                {
                  moveType: "",
                  command: "Forward or backward jump 2",
                  hitLevel: "m (TJ)",
                  damage: 15,
                  startUpFrame: "9(14~40) js1~",
                  blockFrame: "-18~+9",
                  hitFrame: "-8~+19",
                  counterHitFrame: "-8~+19",
                  notes: ""
                },
                {
                  moveType: "",
                  command: "Forward or backward jump 3",
                  hitLevel: "m (TJ)",
                  damage: 10,
                  startUpFrame: "7(12~40) js1~",
                  blockFrame: "-26~+2",
                  hitFrame: "-16~+12",
                  counterHitFrame: "-16~+12",
                  notes: ""
                },
                {
                  moveType: "",
                  command: "Forward or backward jump 4",
                  hitLevel: "m (TJ)",
                  damage: 15,
                  startUpFrame: "7(13~40) js1~",
                  blockFrame: "-20~+9",
                  hitFrame: "-10~+19",
                  counterHitFrame: "-10~+19",
                  notes: ""
                },
                {
                  moveType: "",
                  command: "Top of forward jump d+3",
                  hitLevel: "m (TJ)",
                  damage: 14,
                  startUpFrame: "13~ (13~34) js1~",
                  blockFrame: "+4~+11g",
                  hitFrame: "+9s~+16s",
                  counterHitFrame: "+9s~+16s",
                  notes: ""
                },
                {
                  moveType: "",
                  command: "qcf+1 or qcf+2",
                  hitLevel: "Sm",
                  damage: 12,
                  startUpFrame: "19~",
                  blockFrame: "-13~",
                  hitFrame: "-5~",
                  counterHitFrame: "-5~",
                  notes: ""
                },
                {
                  moveType: "",
                  command: "qcf+1, 1+2, f, f",
                  hitLevel: "Sm",
                  damage: 12,
                  startUpFrame: "19~",
                  blockFrame: "+7?~",
                  hitFrame: "+15~",
                  counterHitFrame: "+15~",
                  notes: ""
                },
                {
                  moveType: "",
                  command: "hcb+1",
                  hitLevel: "Sm",
                  damage: 12,
                  startUpFrame: "28~",
                  blockFrame: "-12~",
                  hitFrame: -4,
                  counterHitFrame: -4,
                  notes: ""
                },
                {
                  moveType: "",
                  command: "hcb+2",
                  hitLevel: "Sm x 3",
                  damage: "9,9,9",
                  startUpFrame: "33~,41,49",
                  blockFrame: "-1~",
                  hitFrame: "KND",
                  counterHitFrame: "KND",
                  notes: ""
                },
                {
                  moveType: "",
                  command: "f, d, d/f+1",
                  hitLevel: "Sm",
                  damage: 15,
                  startUpFrame: "10a cs6~",
                  blockFrame: -26,
                  hitFrame: "Launch (JG?)",
                  counterHitFrame: "Launch (JG?)",
                  notes: ""
                },
                {
                  moveType: "",
                  command: "f, d, d/f+1, 1+2f, f",
                  hitLevel: "Sm",
                  damage: 15,
                  startUpFrame: "10a cs6~",
                  blockFrame: 1,
                  hitFrame: "Launch (JG?)",
                  counterHitFrame: "Launch (JG?)",
                  notes: ""
                },
                {
                  moveType: "",
                  command: "f, d, d/f+2",
                  hitLevel: "Sm x 3",
                  damage: "6,6,20",
                  startUpFrame: "11,23,35a cs6~7",
                  blockFrame: "-34 (~16?a)",
                  hitFrame: "Launch (JG?)",
                  counterHitFrame: "Launch (JG?)",
                  notes: ""
                },
                {
                  moveType: "",
                  command: "f, d, d/f+2, 1+2f, f (Only first hit)",
                  hitLevel: "Sm",
                  damage: 6,
                  startUpFrame: "11a cs6~7",
                  blockFrame: "0~",
                  hitFrame: 14,
                  counterHitFrame: "",
                  notes: ""
                },
                {
                  moveType: "",
                  command: "f, d, d/f+2, 1+2f, f (Only two first hits)",
                  hitLevel: "Sm x 2",
                  damage: "6,6",
                  startUpFrame: "11,23a cs6~7",
                  blockFrame: "+?",
                  hitFrame: "Launch (JG?)",
                  counterHitFrame: "Launch (JG?)",
                  notes: ""
                },
                {
                  moveType: "",
                  command: "f, d, d/f+3(or 4)",
                  hitLevel: "(Special) (TJ)(DFLIP)",
                  damage: "",
                  startUpFrame: "11,23 6~7",
                  blockFrame: "",
                  hitFrame: "",
                  counterHitFrame: "",
                  notes: ""
                },
                {
                  moveType: "",
                  command: "DFLIP n",
                  hitLevel: "l",
                  damage: 23,
                  startUpFrame: "4~10 (51~)",
                  blockFrame: "-24~-18",
                  hitFrame: "KND",
                  counterHitFrame: "KND",
                  notes: ""
                },
                {
                  moveType: "",
                  command: "DFLIP 1",
                  hitLevel: "h",
                  damage: 15,
                  startUpFrame: "7~ (34~46) js1~",
                  blockFrame: "-4~+7",
                  hitFrame: "KND",
                  counterHitFrame: "KND",
                  notes: ""
                },
                {
                  moveType: "",
                  command: "DFLIP 2",
                  hitLevel: "m",
                  damage: 20,
                  startUpFrame: "16~20 (52~55) js1~",
                  blockFrame: "-9~-5s",
                  hitFrame: "KND",
                  counterHitFrame: "KND",
                  notes: ""
                },
                {
                  moveType: "",
                  command: "DFLIP 3",
                  hitLevel: "m",
                  damage: 21,
                  startUpFrame: "14~ (41~52) js1~",
                  blockFrame: "-10~+1",
                  hitFrame: "+24k",
                  counterHitFrame: "KND",
                  notes: "Tail spin, Homing"
                },
                {
                  moveType: "",
                  command: "DFLIP 4",
                  hitLevel: "Sm",
                  damage: 15,
                  startUpFrame: "12~ (44~52) js1~",
                  blockFrame: "4,7",
                  hitFrame: "+16~+19s",
                  counterHitFrame: "+16~+19s",
                  notes: ""
                },
                {
                  moveType: "",
                  command: "DFLIP 1+3 or 2+4",
                  hitLevel: "h(Throw)",
                  damage: 30,
                  startUpFrame: "(32~)",
                  blockFrame: "",
                  hitFrame: "Throw(KND)",
                  counterHitFrame: "",
                  notes: ""
                },
                {
                  moveType: "",
                  command: "qcb+3",
                  hitLevel: "h (TJ)",
                  damage: 10,
                  startUpFrame: "15 js9~",
                  blockFrame: -15,
                  hitFrame: "KND",
                  counterHitFrame: "KND",
                  notes: "Tail spin"
                },
                {
                  moveType: "",
                  command: "qcb+4",
                  hitLevel: "Sm (TJ), h x 3",
                  damage: "13,6,6,6",
                  startUpFrame: "10,25,44,54a js13~",
                  blockFrame: -15,
                  hitFrame: "KND",
                  counterHitFrame: "KND",
                  notes: ""
                },
                {
                  moveType: "",
                  command: "Jump qcf+1 or 2",
                  hitLevel: "Sm",
                  damage: 10,
                  startUpFrame: "18(~) js1~",
                  blockFrame: "-21~",
                  hitFrame: "-11~",
                  counterHitFrame: "-11~",
                  notes: ""
                },
                {
                  moveType: "",
                  command: "Jump qcb+3 or 4",
                  hitLevel: "Sm",
                  damage: 10,
                  startUpFrame: "13(~) js1~",
                  blockFrame: "-9~+2",
                  hitFrame: "KND",
                  counterHitFrame: "KND",
                  notes: ""
                },
                {
                  moveType: "",
                  command: "f, d, d/f+3+4 or b, d, d/b+3+4",
                  hitLevel: "(Special)",
                  damage: "",
                  startUpFrame: "5inv",
                  blockFrame: "",
                  hitFrame: "",
                  counterHitFrame: "",
                  notes: ""
                },
                {
                  moveType: "",
                  command: "qcf+1+2",
                  hitLevel: "Sm, Sm",
                  damage: "10,10",
                  startUpFrame: "19~",
                  blockFrame: "+1~",
                  hitFrame: "KND",
                  counterHitFrame: "KND",
                  notes: ""
                },
                {
                  moveType: "",
                  command: "hcb+1+2",
                  hitLevel: "Sm x 3",
                  damage: "12,12,12",
                  startUpFrame: "28~,36,44",
                  blockFrame: "+9~",
                  hitFrame: "KND",
                  counterHitFrame: "KND",
                  notes: ""
                },
                {
                  moveType: "",
                  command: "f, d, d/f+1+2",
                  hitLevel: "Sm x 3",
                  damage: "6,6,23",
                  startUpFrame: "11,23,35a",
                  blockFrame: -34,
                  hitFrame: "Launch (JG?)",
                  counterHitFrame: "Launch (JG?)",
                  notes: ""
                },
                {
                  moveType: "",
                  command: "f, d, d/f+1+2 (On counter)",
                  hitLevel: "Sm, (throw)",
                  damage: "7,8,9,9,9",
                  startUpFrame: "11,,,",
                  blockFrame: "",
                  hitFrame: "",
                  counterHitFrame: "Throw(Launch)",
                  notes: ""
                },
                {
                  moveType: "",
                  command: "qcb+3+4",
                  hitLevel: "Sm x 4",
                  damage: "6,6,6,20",
                  startUpFrame: "10,24,39,44 js10~",
                  blockFrame: -22,
                  hitFrame: "KND",
                  counterHitFrame: "KND",
                  notes: "Tail spin"
                },
                {
                  moveType: "",
                  command: "Jump qcf+1+2",
                  hitLevel: "Sm, Sm",
                  damage: "10,10",
                  startUpFrame: "10,23 js1~",
                  blockFrame: "+3~",
                  hitFrame: "+7~",
                  counterHitFrame: "+7~",
                  notes: ""
                },
                {
                  moveType: "",
                  command: "Jump qcb+3+4",
                  hitLevel: "Sm",
                  damage: 10,
                  startUpFrame: "13~ js1~",
                  blockFrame: "-4~+9",
                  hitFrame: "KND",
                  counterHitFrame: "KND",
                  notes: ""
                },
                {
                  moveType: "",
                  command: "TPORT(f+3+4) qcf+1+2",
                  hitLevel: "m (TJ), Sm x 2(TPORT)",
                  damage: "20,10,10",
                  startUpFrame: "js1~",
                  blockFrame: "-5~-1",
                  hitFrame: "+5~+9",
                  counterHitFrame: "+5~+9",
                  notes: ""
                },
                {
                  moveType: "",
                  command: "TPORT(f+3+4) qcb+3+4",
                  hitLevel: "m (TJ), Sm x 3(TPORT)",
                  damage: "20,6,6,20",
                  startUpFrame: "js1~",
                  blockFrame: -15,
                  hitFrame: "KND",
                  counterHitFrame: "KND",
                  notes: ""
                },
                {
                  moveType: "",
                  command: "TPORT(f+3+4) qcb+3+4 (Third hit miss)",
                  hitLevel: "m (TJ), Sm x 2(TPORT)",
                  damage: "20,6,6",
                  startUpFrame: "js1~",
                  blockFrame: -25,
                  hitFrame: "KND",
                  counterHitFrame: "KND",
                  notes: ""
                },
                {
                  moveType: "",
                  command: "TPORT(f+3+4) qcb+3+4 (second and third hit miss)",
                  hitLevel: "m (TJ), Sm(TPORT)",
                  damage: "20,6",
                  startUpFrame: "1~",
                  blockFrame: -35,
                  hitFrame: "KND",
                  counterHitFrame: "KND",
                  notes: ""
                }
               ]
        }
    }
}

