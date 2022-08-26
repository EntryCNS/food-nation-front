import customAxios from "util/customAxios";
import { IPlanner, IMenuDetail } from "interface/menu/common";
import { IMenu } from "interface/menu/response"
class MenuApi {




    // 메뉴 가져오기
    async getMenu(page: number): Promise<IMenu> {
        const { data } = await customAxios.get(`/menu?${page}`)
        return data
    }


    // 식단표 가져오기
    async getPlannr(year: number, month: number, day: number): Promise<IPlanner[]> {
        const { data } = await customAxios.get(`/menu/planner?year=${year}&month=${month}&day=${day}`)
        return data.planner
    }


}

export default new MenuApi();