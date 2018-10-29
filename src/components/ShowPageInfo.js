import React from 'react';
import { withRouter } from 'react-router-dom';

const ShowPageInfo = withRouter(({match, location}) => {
    return (
        <div>
        <div>current location: {location.pathname}</div>
        </div>
    );
});

export default ShowPageInfo;