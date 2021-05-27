import React, {useState, useEffect} from "react";


export default function ModalContent(props) {


    return (
        <>
            <div className="col-md-9 mb-1" ID={props.postId}>
                <div className="time">
                    {props.time}
                </div>
            <div className="msg">
                <p>
                    {props.text}
                </p>
            </div>
                <div className="edit-message" onClick={()=>props.delMessage(props.postId)}>
                    Delete
                </div>

            </div>

        </>
    );
}