import { useRouter } from 'next/router';

const useNavBar = (): number => {
    const router = useRouter();
    let positionTop: number;
    switch (router.pathname) {
        case '/':
            positionTop = 10;
            break;
        case '/profile':
            positionTop = 75;
            break;
        case '/addMenu':
            positionTop = 140;
            break;
        case '/checkMenu':
            positionTop = 205;
        case '/ranking':
            positionTop = 270;
            break;
        case '/review':
            positionTop = 335;
            break;
        default:
            positionTop = 10;
            break;
    }
    return positionTop
}

export default useNavBar