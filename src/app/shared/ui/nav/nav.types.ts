import { IconDefinition } from "@fortawesome/free-regular-svg-icons";

export type NavItemType = 'button' | 'link';

type BaseSubnavItemConfig = {
    text: string;
    displayItem?: boolean;
};

export type ButtonSubnavItemConfig = BaseSubnavItemConfig & {
    type: 'button';
    onClick: () => void;  // `onClick` is required when `type` is 'button'
};

export type LinkSubnavItemConfig = BaseSubnavItemConfig & {
    type: 'link';
    route: string;
};

// Union type for SubnavItemConfig
export type SubnavItemConfig = ButtonSubnavItemConfig | LinkSubnavItemConfig;

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
    subNavItems: SubnavItemConfig[];
}