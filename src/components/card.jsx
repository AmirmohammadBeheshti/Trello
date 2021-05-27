import React, {useState, useEffect} from "react";
import CreateIcon from '@material-ui/icons/Create';
import DeleteIcon from '@material-ui/icons/Delete';


var ID = 2, getCardArray;

export default function Card(props) {


    const [titleValue, setTitleValue] = useState(props.cardText);
    const [editMode, setEditMode] = useState(false)
    const [empty, setEmpty] = useState(false)


    function titleChange(e) {
        setTitleValue(e.target.value);
    }
    const saveCard = () =>{
        if (titleValue == "") {
            setEmpty(true)
            props.cardEmpty(props.id , empty)
        } else {
            props.cardEmpty(props.id , empty)
            setEditMode(!editMode)
        }
    }

    useEffect(() => {
        //for first run card open the edit mode
        if (props.cardCreate == true) {
            setEditMode(true);
        }
    }, [])


    return (
        <>
            <div className="card-body" id={props.id}>
                <div className="subject-title" onChange={() => props.cardChange(props.id, titleValue)}>
                    <div class={!editMode ? "d-none" : "textarea-container"}>
                    <textarea className="title-edit" type="text" onChange={titleChange} placeholder="موضوع را وارد کنید"
                              name="input"
                              onDoubleClick={() => props.modalOpen(props.id)}
                              value={titleValue}
                    >
                    </textarea>
                        <button className="btn btn-success" onClick={saveCard}>ذخیره
                        </button>
                    </div>
                    <h6 className={!editMode ? "title" : "d-none"}
                        onClick={() => props.modalOpen(props.id)}
                        data-toggle="modal" data-target="#exampleModal"
                    >
                        {titleValue}
                    </h6>
                    <div className={!editMode ? "d-block" : "d-none"}>
                        <div className="col">
                            <a onClick={() => setEditMode(!editMode)}>
                                <CreateIcon className="comment-icon"
                                />
                            </a>

                        </div>
                        <div className="col pr-0">

                            <DeleteIcon className="trashIcon" onClick={() => props.deleteCard(props.id)}/>
                        </div>
                    </div>

                </div>
            </div>


        </>
    );
}