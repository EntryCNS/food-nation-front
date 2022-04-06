import { useRouter } from 'next/router';
import { INavBarStatus } from 'interface/navBar/INavBar';

const useNavBar = () => {
    const router = useRouter();

    const selectedNavBarElement = <INavBarStatus>{
        home: false,
        profile: false,
        addMenu: false,
        checkMenu: false,
        ranking: false,
        review: false,
    };

    let positionTop: number;

    switch (router.pathname) {
        case '/':
            positionTop = 10;
            selectedNavBarElement.home = true;
            break;
        case '/profile':
            positionTop = 75;
            selectedNavBarElement.profile = true;
            break;
        case '/addMenu':
            positionTop = 140;
            selectedNavBarElement.addMenu = true;
            break;
        case '/checkMenu':
            positionTop = 205;
            selectedNavBarElement.checkMenu = true;
        case '/ranking':
            positionTop = 270;
            selectedNavBarElement.ranking = true;
            break;
        case '/review':
            positionTop = 335;
            selectedNavBarElement.review = true;
            break;
        default:
            positionTop = 10;
            selectedNavBarElement.home = true;
            break;
    }
    return {
        positionTop,
        selectedNavBarElement,
    }
}

export default useNavBar