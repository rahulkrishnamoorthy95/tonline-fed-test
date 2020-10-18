import React from 'react';

function Viewmore({ callback, hidden }) {

    if (hidden) {
        return null;
    }
    
    return (
        <div className="view-more">
            <button type="button" className="button" onClick={callback}>{'View More'}</button>
        </div>
    );
}

export default Viewmore;