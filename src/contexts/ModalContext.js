import React, {createContext, useReducer, useState} from 'react'
import { addModalReducer } from '../reducers/addModalReducer'
import { updateModalReducer } from '../reducers/updateModalReducer'

export const ModalContext = createContext()

export default function ModalContextProvider(props) {
    const [addModal, dispatchAddModal] = useReducer(addModalReducer, 'modal fade myModal')
    const [updateModal, dispatchUpdateModal] = useReducer(updateModalReducer, 'modal fade myModal')
    const [isModal, setIsModal] = useState(false)

    return (
        <ModalContext.Provider value={
            {
                addModal,
                dispatchAddModal,
                updateModal,
                dispatchUpdateModal,
                isModal,
                setIsModal
            }
        }> 
            {props.children}
        </ModalContext.Provider>
    )
}
