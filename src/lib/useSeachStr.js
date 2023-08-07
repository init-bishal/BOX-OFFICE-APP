import { useState,useEffect } from "react"
const usePersistState=(initialState,sessionStorageKey)=>{
        const [state,setState]=useState(()=>{
            const persistedValue=sessionStorage.getItem(sessionStorageKey)
            return persistedValue?JSON.parse(persistedValue):initialState
            })
        useEffect(()=>{
                sessionStorage.setItem(sessionStorageKey,JSON.stringify(state))
        },[state,sessionStorageKey])
        return [state,setState]
    }


const  useSeachStr=()=>{
  return usePersistState('','searchString')
}
export default useSeachStr