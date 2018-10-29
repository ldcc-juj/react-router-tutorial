import React from 'react';
import queryString from 'query-string';

const About = ({location, match}) => {
    const query = queryString.parse(location.search);
    console.log(query); // /About/:name?detail=true 에서 {detail: 'true'} 부분!

    const detail = query.detail === 'true'; // 받아오는 값은 모두 문자열이다!
    return (
        <div>
            <h2>About {match.params.name}</h2>
            {detail && 'detail:didiwila'}
        </div>
    );
};

export default About;