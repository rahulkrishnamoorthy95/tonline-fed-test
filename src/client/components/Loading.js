import React from 'react';

function Loading({ isLoading }) {

    if (!isLoading) {
        return null;
    }
    
    return (
        <div className="text-center">
            <div className="spinner-border" role="status">
                <span className="sr-only">Loading...</span>
            </div>
        </div>
    );
}

export default Loading;