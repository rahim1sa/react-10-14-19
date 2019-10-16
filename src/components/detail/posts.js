import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    useLocation,
    useParams
} from "react-router-dom";

export default function Posts({ posts }) {
    return (
        <Router>
            <ShowPost posts={posts} />
        </Router>
    );
}

function ShowPost({ posts }) {
    let location = useLocation();

    return (
        <div>
            <Switch location={location}>
                <Route exact path="/" children={<Home posts={posts} />} />
                <Route path="/:id/details" children={<PostView posts={posts} />} />
            </Switch>
        </div>
    );
}

function Home({ posts }) {
    return (
        <div>
            <h2>Posts</h2>
            <ul>
                {
                    posts.length > 0 ? posts.map(item => {
                        return <a href={"/" + item.id + "/details"}> <ul><li>{item.title}</li><li>{item.body}</li></ul></a>
                    }) : null
                }
            </ul>
        </div>
    );
}

function PostView({ posts }) {
    let { id } = useParams();
    let post = posts[(parseInt(id, 10) - 1)];
    console.log(posts);

    if (!post) return <div>Post not found</div>;

    return (
        <div>
            <ul>
                <li>{post.userId}</li>
                <li>{post.id}</li>
                <li>{post.title}</li>
                <li>{post.body}</li>
            </ul>
        </div>
    );
}