import { useEffect, useState, useCallback } from "react";
import MenuApi from "assets/api/menu.api";
import { IPlanner } from "interface/menu/common";


const useMain = () => {
    const { getPlannr } = MenuApi;

    const dummyPlanner = { time: '', date: '', menuList: ["오늘은 급식이 없습니다"] };
    const nowDate = new Date()

    const [year, setYear] = useState<number>(nowDate.getFullYear());
    const [month, setMonth] = useState<number>(nowDate.getMonth());
    const [date, setDate] = useState<number>(nowDate.getDate());
    const [planner, setPlanner] = useState<IPlanner[]>([dummyPlanner, dummyPlanner, dummyPlanner]);




    // 식단표 가져오기
    const fechMenuData = useCallback(async () => {
        try {
            const data = await getPlannr(year, month + 1, date)
            setPlanner(data);
        } catch (e) {
        }
    }, [year, month, date, getPlannr])

    // 날짜 변경
    const changeDate = (x: number): void => {
        // Date는 넘어가면 알아서 맞춰줘서
        const changedDate = new Date(year, month, date + x);
        setYear(changedDate.getFullYear());
        setMonth(changedDate.getMonth());
        setDate(changedDate.getDate());
        console.log(date);

    }

    // 날짜 선택
    const selectDate = (date: string): void => {
        const selectedDate = new Date(date);
        setYear(selectedDate.getFullYear());
        setMonth(selectedDate.getMonth());
        setDate(selectedDate.getDate());
    }

    useEffect(() => {
        fechMenuData();
    }, [fechMenuData, date]);

    return {
        planner,
        changeDate,
        selectDate,
        year,
        month,
        date
    }
}

export default useMain