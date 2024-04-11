
import { IoHome } from "react-icons/io5";
import { GrProjects } from "react-icons/gr";
import { FiMessageSquare } from "react-icons/fi";
import { IoSettingsSharp } from "react-icons/io5";

export interface SideNavItem  {
    title: string;
    path: string;
    icon?: JSX.Element;
    subMenu?: boolean;
    subMenuItems?: SideNavItem[];
}

export interface MenuItemWithSubMenuProps {
    item: SideNavItem;
    toggleOpen: () => void;
}

export const SIDENAV_ITEMS: SideNavItem[] = [
    {
        title: "Home",
        path: "/",
        icon: <IoHome width={24} height={24}/>
    },
    {
        title: "Messages",
        path: "/messages",
        icon: <FiMessageSquare width={24} height={24}/>
    },
    {
        title: "Projects",
        path: "/projects",
        icon: <GrProjects width={24} height={24}/>,
        subMenu: true,
        subMenuItems: [
            {title: "All", path: "/projects"},
            {title: 'Web Design', path: "/projects/web-design"}, 
            {title: "Graphic Design", path: "/projects/graphic-design"}
        ]
    },
    {
        title: "Settings",
        path: "/settings",
        icon: <IoSettingsSharp width={24} height={24}/>,
        subMenu: true,
        subMenuItems: [
            {title: "Account", path: "/settings/account"},
            {title: 'Privacy', path: "/settings/privacy"}, 
        ]
    },
    
    
]