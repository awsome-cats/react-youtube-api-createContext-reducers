import React, { useContext, useEffect } from 'react';
import Layout from '../components/layout/Layout'
import { fetchPopularData } from '../api/index'
import { Store } from '../store'
import VideoGridItem from '../components/videoGridItme/videoGridItem.js';
import VideoGrid from '../components/videoGrid/VideoGrid.js'

function Top() {

  const { globalState, setGlobalState } = useContext(Store)

  useEffect(() => {
    fetchPopularData()
    .then((res) => {
      console.log(res.data.items)
      setGlobalState({type: 'SET_POPULAR', payload: { popular: res.data.items}})
    })
  }, [])

    return (
      <Layout>
        <VideoGrid>
          {
            globalState.popular && globalState.popular.map((popular) => {
              return (
                popular.snippet &&(
                <VideoGridItem
                id={popular.id}
                key={popular.id}
                src={popular.snippet.thumbnails.default.url}
                title={popular.snippet.title} 
                />)
              )
            })
          }
        </VideoGrid>
      </Layout>
    );
}
  
  export default Top;
  