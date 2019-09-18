import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class VideoIndexItem extends React.Component {
    constructor(props) {
        super(props);
        this.handleVidClick = this.handleVidClick.bind(this);
    }

    handleVidClick(e) {
        let vidId = this.props.video.id;
        this.props.history.push(`/videos/${vidId}`);
    }

    render() {
        let url = this.props.video.videoUrl;
        let thumbnail = this.props.video.thumbnailUrl;
        return(
            <div>
                {/* <video controls>
                    <source src={url}/>
                </video> */}
                <button onClick={this.handleVidClick}>
                    <img src={thumbnail} />
                </button>
                <div>
                    <h1>{this.props.video.title}</h1>
                    <label>Author:
                        <p>{this.props.uploader.username}</p>
                    </label>
                    <label>Views:
                        <p>{this.props.video.views}</p>
                    </label>
                    <label>Description:
                        <p>{this.props.video.description}</p>
                    </label>
                    
                </div>
            </div>
            
        )
    }

}

export default withRouter(VideoIndexItem);