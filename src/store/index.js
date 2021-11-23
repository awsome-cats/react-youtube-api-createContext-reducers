import React, { createContext, useReducer } from 'react';
/* storeとdispatch関数を生成する為に initialstateとreduceer関数を設定*/

const initialState = {
    popular: [],
    selected: {},
    related: [],
    term: '',
    searched: [],
    //searched: {}
}

// reducer関数とは二つの関数をとり、一つの関数を返す
// storeのstateをどう変更するか決める
// store内のstateの管理
const reducer = (state, action) => {
    switch(action.type) {
        case 'SET_POPULAR':
        return { ...state, popular: action.payload.popular }
        case 'SET_RELATED':
            return { ...state, related: action.payload.related}
        case 'SET_SELECTED':
            return {...state, selected: action.payload.selected}
        case 'SET_TERM':
            return { ...state, term: action.payload.term}
        case 'SET_SEARCHED':
            return { ...state, searched: action.payload.searched}
        default: return state
    }
}

// createContextを使ってストア作成/ stateとdispatch関数の初期値を渡す
// contextはステートレスで何も保持せず単に渡したデータを配布するだけ
export const Store = createContext({
    globalState: initialState,
    setGlobalState: () => null
})

export const StoreProvider = ({children}) => {
    const [ globalState, setGlobalState] = useReducer(reducer, initialState)
    return (
        <Store.Provider value={{ globalState, setGlobalState}}>
            {children}
        </Store.Provider>
    )
}
