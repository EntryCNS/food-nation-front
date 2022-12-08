export interface IMenuDetail {
    description: string,
    id: number,
    isVoted: boolean,
    kind: string,
    menuState: string,
    menu_name: string,
    votes: number,
    written_at: number
}

export interface IPlanner {
    date: string,
    menuList: string[],
    time: string
}