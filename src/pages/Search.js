import Layout from '../components/layout/Layout'
import React, {useEffect, useContext} from 'react'
import { useLocation } from 'react-router-dom'
import { fetchSearchData } from '../api'
import { Store }  from '../store/index'
import VideoGrid from '../components/videoGrid/VideoGrid'
import VideoGridItem from '../components/videoGridItme/videoGridItem'

const Search =() => {
  const { globalState, setGlobalState} = useContext(Store)
  const location = useLocation()
  
  
  
  const getSearchresult = async() => {
    const searchParams = new URLSearchParams(location.search)
    const query = searchParams.get('query')
    console.log('query', query)

    if(query) {
      await fetchSearchData(query)
      .then(res => {
        //console.log('search', res)
        setGlobalState({ type: 'SET_SEARCHED', payload: { searched: res.data.items}})
      })
    }

  }


  useEffect(() => {
    getSearchresult()
  }, [location.search])

    return (
     <Layout>
       <VideoGrid>
         {
           globalState.searched ? globalState.searched.map(item => {
            return (
              <VideoGridItem
              id={item.id.videoId}
              key={item.id.videoId}
              src={item.snippet.thumbnails.medium.url}
              title={item.snippet.title}/>
            )
           }):<span>no data</span>
         }
       </VideoGrid>
     </Layout>
    );
}
  
  export default Search;
  