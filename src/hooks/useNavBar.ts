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

    let positionTop = 15;
    const gap = 464 / 6;

    switch (router.pathname) {
        case '/':
            positionTop;
            selectedNavBarElement.home = true;
            break;
        case '/profile':
            positionTop += gap;
            selectedNavBarElement.profile = true;
            break;
        case '/apply':
            positionTop += gap * 2;
            selectedNavBarElement.addMenu = true;
            break;
        case '/checkMenu':
            positionTop += gap * 3;
            selectedNavBarElement.checkMenu = true;
        case '/ranking':
            positionTop += gap * 4;
            selectedNavBarElement.ranking = true;
            break;
        case '/review':
            positionTop += gap * 5;
            selectedNavBarElement.review = true;
            break;
        default:
            positionTop = 15;
            selectedNavBarElement.home = true;
            break;
    }
    return {
        positionTop,
        selectedNavBarElement,
    }
}

export default useNavBar