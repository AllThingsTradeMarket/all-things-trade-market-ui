import { NavItemType } from "../ui/nav/nav.types";

export const CURRENT_USER_LOCAL_STORAGE_KEY = 'currentUser';

export const navItemTypes = {
    BUTTON: 'button',
    LINK: 'link'
} as const;

export const DEV_API_BASE_URL = 'http://localhost:3000/api';