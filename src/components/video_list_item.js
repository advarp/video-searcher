import React, {Component} from 'react';

export default class VideoListItem extends Component {

    constructor({video, onVideoSelect}){
        super({video, onVideoSelect})   

        this.state = {
            active: false
        };
        
        this.selectItem = () => {
            onVideoSelect(video);
        };
        
        this.imageUrl = video.snippet.thumbnails.default.url;
        this.title = video.snippet.title;
    }

    render() {
        return (
            <li onClick={() => this.selectItem()}
                className={this.state.acitve ? 'list-group-item list-group-item-action active' : 'list-group-item list-group-item-action'}>
                <div className='media'>
                    <div className='mr-3'>
                        <img className='media-object' src={this.imageUrl} />
                    </div>

                    <div className='media-body'>
                        <p className='m-0 mb-1'>{this.title}</p>
                    </div>
                </div>
            </li>
        )
    }
}