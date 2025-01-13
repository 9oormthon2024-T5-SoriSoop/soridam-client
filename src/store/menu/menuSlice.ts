import { createSlice } from "@reduxjs/toolkit";

interface MenuState {
    isOpen: boolean;
    infoModalOpen: boolean;
    backModalOpen: boolean;
    delModalOpen: boolean;
}

const initialState: MenuState = {
    isOpen: false,
    infoModalOpen: false,
    backModalOpen: false,
    delModalOpen: false,
}

const menuSlice = createSlice({
    name: "menu",
    initialState,
    reducers: {
        toggleMenu: (state, action) => {
            state.isOpen = action.payload
        },
        toggleInfoModal: (state, action) => {
            state.infoModalOpen = action.payload
        },
        toggleBackModal: (state, action) => {
            state.backModalOpen = action.payload
        },
        toggleDeleteModal: (state, action) => {
            state.delModalOpen = action.payload
        },
    }
})

export const { toggleMenu, toggleInfoModal, toggleBackModal, toggleDeleteModal } = menuSlice.actions;
export default menuSlice.reducer;