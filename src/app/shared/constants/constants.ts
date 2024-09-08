import { ConfirmModalConfig } from "../types/shared.types";
import { NavItemType } from "../ui/nav/nav.types";

export const CURRENT_USER_LOCAL_STORAGE_KEY = 'currentUser';

export const navItemTypes = {
    BUTTON: 'button',
    LINK: 'link'
} as const;

export const BACKEND_APP_URL = 'http://localhost:3000';
export const DEV_API_BASE_URL = `${BACKEND_APP_URL}/api`;


export const DEFAULT_CONFIRM_MODAL_CONFIG: ConfirmModalConfig = {
    onCancel: () => {},
    onConfirm: () => {},
    text: 'Do You confirm?'
}