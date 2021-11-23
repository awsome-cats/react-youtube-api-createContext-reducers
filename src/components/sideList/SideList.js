import React, { useContext} from 'react'
import { Store } from '../../store/index'
// import { fetchRelatedData } from '../../api/index'
import SideListItem from '../sideListItem/SideListItem'
import Style from './sideList.module.scss'



const SideList = () => {
    const { globalState } = useContext(Store)
    // const setRelatedVideo = async (id) => {
    //     await fetchRelatedData(id).then(res => {
    //         console.log('resvi', res.data.items)
    //         setGlobalState({ type: 'SET_RELATED', payload: { related: res.data.items}})
    //     })
    // }

    // useEffect(() => {
    //     setRelatedVideo(globalState.selected.id)
    // }, [globalState.selected.id])
    return (
        <div className={Style.sidenav}>
            {
                globalState.related ? globalState.related.map((video) => {
                    return (
                        video.snippet &&(
                        <SideListItem  id={video.id.videoId} key={video.id.videoId} 
                        src={video.snippet.thumbnails.default.url}
                        title={video.snippet.title}
                        />)
                    )
                }):(<span>no data..</span>)
            }
        </div>
    )
}

export default SideList
