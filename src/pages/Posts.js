import React from 'react';
import { Link, Route } from 'react-router-dom';
import { Post } from 'pages';

const Posts = ({match}) => {

    // match.url: 현재 라우터 경로(자동으로 바뀌는 장점이 있음)
    // <Route exact path={match.url} ... /> : id값이 없을 때
    
    return (
        <div>
            <h2>POST LIST</h2>
            <ul>
                <li><Link to={`${match.url}/1`}>Post #1</Link></li>
                <li><Link to={`${match.url}/2`}>Post #2</Link></li>
                <li><Link to={`${match.url}/3`}>Post #3</Link></li>
                <li><Link to={`${match.url}/4`}>Post #4</Link></li>
            </ul>
            <Route exact path={match.url} render={()=>(<h3>Please select any posts</h3>)}/>
            <Route path={`${match.url}/:id`} component={Post}/>
        </div>
    );
};

export default Posts;