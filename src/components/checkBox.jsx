import React, {useState} from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import CloseIcon from '@material-ui/icons/Close';

export default function CheckBox(props) {
    const [edit, setEdit] = useState(true);
    const [text, setText] = useState(props.txt);

    const changeText = (e) => {
        setText(e.target.value);
    }
    // onClick={()=>props.saveCheckList(props.id)}
    return (
        <>
            <FormControl component="fieldset" className="w-100" id={props.id}>
                <FormGroup aria-label="position" row>

                    <FormControlLabel
                        className="checkBox d-block"
                        value="start"
                        control={<Checkbox color="secondary"/>}
                        label=""
                        labelPlacement="start"
                    />
                    <h6 className={edit ? "d-block" : "d-none"} onClick={()=>setEdit(!edit)}>{text}</h6>
                    <textarea defaultValue={props.txt} className={edit ? "d-none" : "ckeckList-inpt d-block" } id={props.id} onChange={changeText}></textarea> {/*"ckeckList-inpt d-block"*/}
                    <div className={edit ? "d-none" : "mb-2 d-block" } >
                        <button className="btn btn-primary font-weight-bold" onClick={()=> {
                            setEdit(!edit);
                            props.saveCheckList(props.id , text)
                        }}>تایید</button>
                        <button className="btn btn-danger mr-2" onClick={()=>setEdit(!edit)}>
                            <CloseIcon/>
                        </button>
                    </div>
                </FormGroup>
            </FormControl>
        </>
    );
}
