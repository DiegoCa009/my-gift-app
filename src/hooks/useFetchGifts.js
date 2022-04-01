import { useEffect, useState } from "react"
import { fetching } from "../helpers/fetching-images";

export const useFetchGifts = (category)=>
{

    const [state, setState] = useState({
        data: [],
        loading: true,
    })  

    useEffect(()=> 
    {
        fetching(category)
        .then((data)=>{
            setState({
                data,
                loading: false
            })
        })

    },[category])

    return state;
}

