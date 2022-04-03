import {
    atom
} from "recoil"
const calendarDate = atom({
    key:"calendarDate",
    default:0
})

const calendarMonth = atom({
    key:"calendarMonth",
    default:0
})
export {calendarDate,calendarMonth}