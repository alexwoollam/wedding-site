import { useHistory } from "react-router-dom";
import { Nav, NavItem, NavLink } from 'reactstrap';
import HeaderImage from '../Media/HeaderImage';
import './index.scss';

import Image from '../../Images/wedding-top.png';

interface Props {
    devmode: string | undefined;
}

const Menu = ( props: Props ) => {

    const history = useHistory();

    function handleNavigation(uri) {
        history.push(uri);
    }

    const { devmode } = props;

    const menuItems = {
        'rsvp': {title: 'RSVP', link: '/rsvp', visible: true},
        'accommodation': {title: 'Accommodation', link: '/accommodation', visible: true},
        'information': {title: 'Information', link: '/information', visible: true},
        'gifts': {title: 'Gifts', link: '/gifts', visible: true},
        'weddingParty': {title: 'Wedding Party', link: '/wedding-party', visible: {devmode}},
        'contact': {title: 'Contact', link: '/contact', visible: {devmode}},
        'music': {title: 'Music', link: '/music', visible: true}
    };

    return (
        <div className={'menu'}>
            <HeaderImage  alt={'header image'} src={Image}/>
            <Nav
                fill
                justified
            >
                {
                    Object.keys(menuItems).map( ( key ) => {
                        const item = menuItems[key];
                        if ( item.visible === "true" || item.visible === true ) {
                            return (
                                <NavItem
                                    key={key}
                                >
                                    <NavLink
                                        onClick={() => handleNavigation(item.link)}
                                    >
                                        {item.title}
                                    </NavLink>
                                </NavItem>
                            );
                        }
                        return null;
                    })
                }
            </Nav>
        </div>
    );
};

export default Menu;
