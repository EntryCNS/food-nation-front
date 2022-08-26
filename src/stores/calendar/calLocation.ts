import {
    atom
} from "recoil"

// 켈린더에 띄워지고 있는 현제 월
const recoilCalYear = atom<number>({
    key:"GlobalCalYear",
    default:0
})

const recoilCalMonth = atom<number>({
    key:"GlobalCalMonth",
    default:0
})

export {recoilCalYear,recoilCalMonth}