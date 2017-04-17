import React, {Component} from 'react';
import ReactDom from 'react-dom';

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';


import YTSearch from 'youtube-api-search';

const API_KEY = 'AIzaSyBbTz-s20pArBMYyqn_FsC__ikTU8sc-HA';

class App extends Component{

    constructor (props){
        super (props);

        this.state = {
            videos:[],
            selectedVideo: null

        };
        YTSearch( {key:API_KEY, term:'Juego de tronos'}, (videos) =>

            this.setState({

                videos: videos,
                selectedVideo: videos[0]


            }));

    }

    render(){
        return(
            <div>
                <SearchBar />
                <VideoDetail video = {this.state.selectedVideo}/>
                <VideoList
                    onVideoSelect = {selectedVideo => this.setState({selectedVideo})}
                    videos={this.state.videos}
                />
            </div>
        );
    }
}



ReactDom.render(<App/>, document.querySelector('.container'));
