import { SetterOrUpdater } from "recoil";

export interface CalendarType{
    year:number,
    setYear:SetterOrUpdater<number>,
    month:number,
    setMonth:SetterOrUpdater<number>,
    date:number,
    setDate:SetterOrUpdater<number>,

}