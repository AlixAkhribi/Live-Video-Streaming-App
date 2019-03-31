import React from 'react';
import ReactDOM from 'react-dom';

export default function Modal() {
    return ReactDOM.createPortal(
        <div className="ui dimmer modals visible active">
            <div className="ui standard modal visible active">
                Test Text
            </div>
        </div>,
        document.querySelector("#modal")
    )
}
