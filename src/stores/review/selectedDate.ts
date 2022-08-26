import {
    atom
} from "recoil"

interface DateType {
    year?:number;
    month?:number;
    date?:number;
    day?:number;
}

const calendarYear = atom<number>({
    key:"GlobalCalendarYear",
    default:0
})
const calendarMonth = atom<number>({
    key:"GlobalCalednarMonth",
    default:0
})
const calendarDate = atom<number>({
    key:"GlobalCalendarDate",
    default:0
})

export {calendarYear,calendarMonth,calendarDate}