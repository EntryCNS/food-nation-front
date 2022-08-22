import customAxios from "util/customAxios";
class MenuApi {
    async getPlannr(year: string, month: string, day: string) {
        const data = await customAxios.get(`/planner?year=${year}&month=${month}&day=${day}`)
        return data
    }
}

export default new MenuApi();