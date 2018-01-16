import React from 'react';

const VideoDetail = ({video}) => {
    if (!video) {
        return <div>Loading...</div>
    }

    const videoId = video.id.videoId;
    const url = `https://www.youtube.com/embed/${videoId}`;

    return (
        <div className='col-12 col-lg-8'>
            <div className="card">
                <div className='card-img-top embed-responsive embed-responsive-16by9'>
                    <iframe className='embed-responsive-item' src={url}></iframe>
                </div>
                <div className='card-body'>
                    <h5 className='card-title'>{video.snippet.title}</h5>
                    <p className='card-text'>{video.snippet.description}</p>
                </div>
            </div>
        </div>
    )
}

export default VideoDetail;