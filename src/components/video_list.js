import React from 'react';
import VideoListItem from '../components/video_list_item';

const VideoList = (props) => {
    const videos = props.videos.map((video) => {
        return (
            <VideoListItem 
                onVideoSelect={props.onVideoSelect}
                key={video.etag} 
                video={video} />
        )
    })

    return (
        <div className='col-12 col-lg-4'>
            <ul className='list-group'>
                {videos}
            </ul>
        </div>
    )
}

export default VideoList;