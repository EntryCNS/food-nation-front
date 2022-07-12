import {
    atom
} from "recoil"

// 켈린더에 띄워지고 있는 현제 월
const recoilCalYear = atom<number>({
    key:"calYear",
    default:0
})

const recoilCalMonth = atom<number>({
    key:"calMonth",
    default:0
})

export {recoilCalYear,recoilCalMonth}