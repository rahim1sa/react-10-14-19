import React from 'react';
import Posts from './components/detail/posts';
import AddPost from './components/add-post/add-post';
import './App.css';

class App extends React.Component{

  constructor(props){
    super(props);
    this.state = {
        posts: []
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            posts: result
          });
        },
        (error) => {
          this.setState({
            error
          });
        }
      )
  }

  render(){
    const posts = this.state.posts;
    return(
      <div>
        <Posts posts={posts}/>
        <AddPost posts={posts}/>
      </div>
    );
  }
}


export default App;
