export type IdResponse = {
    id: string;
};

export type ConfirmModalConfig = {
    onConfirm: () => void; 
    onCancel: () => void; 
    text: string;
}
