import { createSlice } from "@reduxjs/toolkit";

interface MenuState {
    isOpen: boolean;
    modalOpen: boolean;
    delModalOpen: boolean;
}

const initialState: MenuState = {
    isOpen: false,
    modalOpen: false,
    delModalOpen: false,
}

const menuSlice = createSlice({
    name: "menu",
    initialState,
    reducers: {
        toggleMenu: (state, action) => {
            state.isOpen = action.payload
        },
        toggleModal: (state, action) => {
            state.modalOpen = action.payload
        },
        toggleDeleteModal: (state, action) => {
            state.delModalOpen = action.payload
        },
    }
})

export const { toggleMenu, toggleModal, toggleDeleteModal } = menuSlice.actions;
export default menuSlice.reducer;