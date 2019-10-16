import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    //   Link,
    // useHistory,
    useLocation,
    // useParams
} from "react-router-dom";

export default function AddPost({ posts }) {
    return (
        <Router>
            <ShowPost posts={posts}> Add Post </ShowPost>
        </Router>
    );
}

function ShowPost({ posts }) {
    let location = useLocation();

    return (
        <div>
            <Switch location={location}>
                <Route path="/add-post" children={<FormSubmit posts={posts} />} />
            </Switch>
        </div>
    );
}


onChange = (e) => {
    
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit = (e) => {
    e.preventDefault();
    // get our form data out of state
    // const { fname, lname, email } = this.state;

    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
          title: 'foo',
          body: 'bar',
          userId: 1
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }
      })
      .then(response => response.json())
      .then(json => console.log(json))
    
  }

function FormSubmit({ posts }) {
    // let { id } = useParams();
    // let post = posts[(parseInt(id, 10) - 1)];
    // console.log(posts);

    const { title,text } = posts;
    return (
        <form onSubmit={onSubmit}>
        <input
            type="text"
            name="title"
            value={title}
            onChange={this.onChange}
        />
        <input
            type="text"
            name="text"
            value={text}
            onChange={this.onChange}
        />
        <button type="submit">Submit</button>
        </form>
    );
}

