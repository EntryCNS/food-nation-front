import customAxios from "util/customAxios";
import IPlanner from "interface/planner/IPlanner";
class MenuApi {


    // 식단표 가져오기
    async getPlannr(year: number, month: number, day: number): Promise<IPlanner[]> {
        const { data } = await customAxios.get(`/menu/planner?year=${year}&month=${month}&day=${day}`)
        return data.planner
    }


    // 메뉴 가져오기
    async getMenu(page: number): Promise<any> {
        const { data } = await customAxios.get(`/menu?${page}`)
        return data
    }


}

export default new MenuApi();