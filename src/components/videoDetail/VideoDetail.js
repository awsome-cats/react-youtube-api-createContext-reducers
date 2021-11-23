import React, { useContext } from 'react'
import Style  from './videoDetail.module.scss'
// import {useLocation} from 'react-router-dom';
// import { fetchSelectedData } from '../../api/index'
import { Store } from '../../store';
import VideoPlay from '../videoPlay/VideoPlay';
import Linkyfy from 'react-linkify'


const VideoDetail = () => {
    const { globalState, setGlobalState } = useContext(Store)
    // const location = useLocation()

    // const setSelectedVideo = async() => {
    //     const searchParams = new URLSearchParams(location.search)
    //     const id = searchParams.get('v')
    //     //console.log('id', id)
    //     await fetchSelectedData(id)
    //     .then(res => {
    //         //console.log(res)
    //         const item = res.data.items.shift()
    //         console.log('item',item)
    //         setGlobalState({type: 'SET_SELECTED', payload: { selected: item}})
    //     })
    // }




    // useEffect(() => {
    //     setSelectedVideo()
    // }, [location.search])
    return globalState.selected && globalState.selected.id?(
        <div className={Style.wrap}>
            <VideoPlay id={globalState.selected.id}/>
            <p className="channel-title">{globalState.selected.snippet.title}</p>
            <hr></hr>
            <Linkyfy>
                <pre>{globalState.selected.snippet.description}</pre>
            </Linkyfy>
        </div>
    ):(<span className="no-data">no data</span>)
}

export default VideoDetail