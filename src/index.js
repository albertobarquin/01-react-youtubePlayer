import React, {Component} from 'react';
import ReactDom from 'react-dom';

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';

import YTSearch from 'youtube-api-search';

const API_KEY = 'AIzaSyBbTz-s20pArBMYyqn_FsC__ikTU8sc-HA';

class App extends Component{

    constructor (props){
        super (props);

        this.state = {videos:[]};
        YTSearch( {key:API_KEY, term:'Juego de tronos'}, (videos) => this.setState({videos}));

    }

    render(){
        return(
            <div>
                <SearchBar />
                <VideoList videos={this.state.videos}/>
            </div>
        );
    }
}



ReactDom.render(<App/>, document.querySelector('.container'));
