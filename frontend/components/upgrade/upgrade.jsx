import React from 'react';
import { Link } from 'react-router-dom';

export const UpgradeComponent = () => {
    return (
        <div className="upgrade-container">
            <h1>Upgrade to the real thing!</h1>
            <a href="https://soundcloud.com/" className="soundcloud-img"><img src="https://d313rqwfqaf3f.cloudfront.net/design/actual_soundcloud_logo.svg" height="300" width="500"></img></a>
        </div> 
    )
}

export default UpgradeComponent;