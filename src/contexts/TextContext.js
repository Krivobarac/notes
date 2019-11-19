import React, {createContext, useState} from 'react'

export const TextContext = createContext()

export default function TextContextProvider(props) {
    const [tableTitle, setTableTitle] = useState('All Notes')
    const [noData, setNoData] = useState('Notes empty')
    const [isChangedText, setIsChangedText] = useState(true)

    return (
        <TextContext.Provider value={
            {
                tableTitle,
                setTableTitle,
                noData,
                setNoData,
                isChangedText,
                setIsChangedText
            }
        }> 
            {props.children}
        </TextContext.Provider>
    )
}