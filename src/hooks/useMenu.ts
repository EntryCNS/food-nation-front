import { useEffect, useState, useCallback } from "react";
import MenuApi from "assets/api/menu.api";
import IPlanner from "interface/planner/IPlanner";


const useMain = () => {
    const nowDate = new Date()
    const [year, setYear] = useState<number>(nowDate.getFullYear());
    const [month, setMonth] = useState<number>(nowDate.getMonth());
    const [date, setDate] = useState<number>(nowDate.getDate());
    const dummyPlanner = { time: '', date: '', menuList: ["오늘은 급식이 없습니다"] };

    const [planner, setPlanner] = useState<IPlanner[]>([]);

    const { getPlannr } = MenuApi;

    // 식단표 가져오기
    const fechMenuData = useCallback(async () => {
        try {
            const data = await getPlannr(year, month + 1, date)
            setPlanner(data);
        } catch (e) {
            setPlanner([dummyPlanner, dummyPlanner, dummyPlanner])
        }
    }, [date])

    // 날짜 변경
    function changeDate(x: number): void {
        // Date는 넘어가면 알아서 맞춰줘서
        const nowDate = new Date(year, month, date + x);
        setYear(nowDate.getFullYear());
        setMonth(nowDate.getMonth());
        setDate(nowDate.getDate());
        console.log(date);

    }

    useEffect(() => {
        fechMenuData();
    }, [fechMenuData, date]);

    return {
        planner,
        changeDate,
        year,
        month,
        date
    }
}

export default useMain