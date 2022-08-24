import customAxios from "util/customAxios";
import IPlanner from "interface/planner/IPlanner";
class MenuApi {

    async getPlannr(year: number, month: number, day: number): Promise<IPlanner[]> {
        const { data } = await customAxios.get(`/menu/planner?year=${year}&month=${month}&day=${day}`)
        return data.planner
    }
}

export default new MenuApi();