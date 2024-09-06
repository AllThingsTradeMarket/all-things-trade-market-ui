import { IconDefinition } from "@fortawesome/free-regular-svg-icons";

export type NavItemType = 'button' | 'link';

type BaseSubNavItemConfig = {
    text: string;
    displayItem?: boolean;
};

export type ButtonSubNavItemConfig = BaseSubNavItemConfig & {
    type: 'button';
    onClick: () => void;
};

export type LinkSubNavItemConfig = BaseSubNavItemConfig & {
    type: 'link';
    route: string;
    noPrefix?: boolean;
};

export type SubNavItemConfig = ButtonSubNavItemConfig | LinkSubNavItemConfig;

export type NavConfig = {
    items: (NavDropdownItemConfig | NavItemConfig)[];
};

export type NavItemConfig = {
    icon: IconDefinition;
    route: string;
}

export type NavDropdownItemConfig = {
    routePrefix: string;
    icon: IconDefinition;
    subNavItems: SubNavItemConfig[];
}