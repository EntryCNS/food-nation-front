import { IMenuDetail } from "./common";

export interface IMenu {
    page: number;
    page_count: number;
    result: IMenuDetail[];
}