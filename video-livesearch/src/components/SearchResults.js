import React from 'react';
import sampleSearchData from '../assets/sampleSearchData'

export default class SearchResults extends React.Component {
    constructor(props) {
        super(props)
        this.state = {data: sampleSearchData}
    }
    renderYoutubeThumbnails(data) {
        return data.items.map((item, index) => 
            <a key={index} href={`https://www.youtube.com/watch?v=${item.id.videoId}`}>
                <img alt="a youtube thumbnail" src={item.snippet.thumbnails.high.url}/>
            </a>
        )
    }
    render() {
        let youtubeResults = this.renderYoutubeThumbnails(this.state.data)
        return (
            <div className='results'>
                {youtubeResults}
            </div>
        );
    }
}