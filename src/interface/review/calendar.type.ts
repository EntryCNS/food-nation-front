import { SetterOrUpdater } from "recoil";

export interface CalendarType{
    year:number | undefined,
    setYear:SetterOrUpdater<number | undefined>,
    month:number | undefined,
    setMonth:SetterOrUpdater<number | undefined>,
    date:number | undefined,
    setDate:SetterOrUpdater<number | undefined>,
}