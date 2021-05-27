import React, {useState, useEffect, useCallback, useRef, memo} from "react";
import Card from "./card";
import $ from "jquery";
import ModalContent from "./modalContent";
import SimplePopover from "./simplePopover";
import StarBorderIcon from '@material-ui/icons/StarBorder';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import NotesIcon from '@material-ui/icons/Notes';
import CheckBox from "./checkBox";
import DoneOutlineIcon from '@material-ui/icons/DoneOutline';
import card from "./card";


var counter = localStorage.getItem("cardId");
let getCardArray, ID;
var arr = [];


function Index() {

    const ticketTxt = useRef();

    //Modal info
    const [cardTitle, setCardTitle] = useState([]);
    const [titleName, setTitleName] = useState(cardTitle[cardTitle.length - 1]);
    const [ticket, setTicket] = useState("");
    const [postTxt, setPostTxt] = useState([]);
    const [labelColor, setLabelColor] = useState("");
    const [projectTitle, setProjectTitle] = useState("");
    const [starIcon, setStarIcon] = useState(false);
    const [checkListTxt, setCheckListTxt] = useState("");
    const [checkListFlag, setCheckListFlag] = useState(false);
    //for add Check List in modal
    const [addCheckList, setAddCheckList] = useState(false);
    const [checkListTitle, setCheckListTitle] = useState("");
    //for background just add a number
    const [backImg] = useState([1, 2, 3, 4, 5, 6]);
    const [background, setBackground] = useState(null);
    const [modalDes, setModalDes] = useState("");
    const [modalTitle, setModalTitle] = useState("");
    //check list items
    const [checkList, setCheckList] = useState([]);
    const [cardEdit, setCardEdit] = useState();


    //get modal info from local storage
    var getCardArray = localStorage.getItem("cardTitle");
    getCardArray = JSON.parse(getCardArray);

    const titleChange = (event) => {
        setTitleName(event.target.value);

    };
    const warningLabelClick = () => {
        console.log(cardTitle[0].labelColor)
        cardTitle[ID].labelColor = "warning";
        localStorage.setItem("cardTitle", JSON.stringify(cardTitle));
        setLabelColor(cardTitle[ID].labelColor);

    }
    const dangerLabelClick = () => {
        cardTitle[ID].labelColor = "danger";
        localStorage.setItem("cardTitle", JSON.stringify(cardTitle));
        setLabelColor(cardTitle[ID].labelColor);

    }
    const infoLabelClick = () => {
        cardTitle[ID].labelColor = "info";
        localStorage.setItem("cardTitle", JSON.stringify(cardTitle));
        setLabelColor(cardTitle[ID].labelColor);
    }

    const primaryLabelClick = () => {
        cardTitle[ID].labelColor = "primary";
        localStorage.setItem("cardTitle", JSON.stringify(cardTitle));
        setLabelColor(cardTitle[ID].labelColor);

    }
    const successLabelClick = () => {
        cardTitle[ID].labelColor = "success";
        localStorage.setItem("cardTitle", JSON.stringify(cardTitle));
        setLabelColor(cardTitle[ID].labelColor);

    }

    useEffect(() => {
        let getCard = localStorage.getItem("cardTitle");
        if (!localStorage.getItem("cardId")) {
            let cardID = localStorage.setItem("cardId", "0")
        }
        if (getCard && getCard !== undefined) {
            getCardArray = JSON.parse(getCard);
            setCardTitle(getCardArray)
        }
    }, [setCardTitle])
    const addCard = () => {

        var obj = obj || {};
        obj.id = counter++;
        obj.title = "";
        obj.cardCreate = true;
        obj.Des = "";
        obj.modalTitle = "";
        obj.postTxt = [];
        obj.labelColor = "";
        obj.checkList = [];
        obj.checkListFlag = false;
        obj.checkListTitle = "";
        setCardTitle((prevState) => [
            ...prevState,
            obj
        ]);
    }
    const cardChange = (id, value) => {
        /*set the title in object*/
        cardTitle[id].title = document.getElementsByName("input")[id].value;
        /*end set the title in object*/


    }

    const modalChange = (post, p) => {

        var textObj = textObj || {};
        textObj.text = post;
        textObj.id = ID;

        const filterCard = cardTitle.filter((card) => ID == card.id)
        filterCard[0].postTxt.push(textObj)
        localStorage.setItem("cardTitle", JSON.stringify(cardTitle));
        alert("a")

    }


    const deleteCard = React.useCallback((id) => {
        const deleteCard = cardTitle.filter(del => id !== del.id)
        for (let i = 0; i < deleteCard.length; i++) {
            deleteCard[i].id = i;
        }
        setCardTitle(deleteCard);

        localStorage.setItem("cardTitle", JSON.stringify(deleteCard));
        localStorage.setItem("cardId", counter = counter - 1);

    });


    const changePageValue = () => {
        console.log("ticket", ticketTxt.current.value)

        cardTitle[cardTitle.length - 1].cardTitle = ticketTxt.current.value;

        localStorage.setItem("cardTitle", JSON.stringify(cardTitle));
        console.log(counter)
        localStorage.setItem("cardId", counter);

    }
    const ticketText = (event) => {
        setTicket(event.target.value);
    };
    const textModal = () => {
        var txtObj = txtObj || {};
        txtObj.text = ticket;
        txtObj.time = new Date().toLocaleTimeString().substr(0, 4);
        let getCard = localStorage.getItem("cardTitle");
        getCardArray = JSON.parse(getCard);
        arr.push(txtObj)
        getCardArray[ID].postTxt.push(txtObj)
        console.log("a", getCardArray);
        localStorage.setItem("cardTitle", JSON.stringify(getCardArray));
        setPostTxt(getCardArray[ID].postTxt.reverse());
        setTicket("");

    };
    const modalOpen = (id) => {
        ID = id;
        //get info from local storage
        var getInfo = localStorage.getItem("cardTitle");
        getInfo = JSON.parse(getInfo);

        setPostTxt(getInfo[ID].postTxt.reverse());

        setLabelColor(cardTitle[ID].labelColor);
        setModalDes(getInfo[ID].Des);
        setModalTitle(getInfo[ID].modalTitle);
        setCheckListTitle(getInfo[ID].checkListTitle)
        if (getInfo[ID].checkListFlag) {
            setAddCheckList(true)
            setCheckList(getInfo[ID].checkList);
        } else {
            setAddCheckList(false)
        }
    };
    //set label color
    const labelClass = `bg-${labelColor} modal-label`;
    //Page title Value
    var getValue = localStorage.getItem("Title");
    getValue = JSON.parse(getValue);
    var pageObj = pageObj || {};
    if (getValue) {
        pageObj.title = getValue.title;
        pageObj.star = getValue.star;
        pageObj.background = getValue.background;
    } else {
        pageObj.title = "";
        pageObj.star = false;
        pageObj.background = null;
    }
    const title = (e) => {
        pageObj.title = e.target.value;
        setProjectTitle(e.target.value);
        localStorage.setItem("Title", JSON.stringify(pageObj))
    }
    //Load Page
    useEffect(() => {
        if (getValue) {
            console.clear();

            setProjectTitle(
                getValue.title
            );
            setStarIcon(
                getValue.star
            );
            setBackground(
                getValue.background
            );
        }

    }, []);
    //disable & enable star icon
    const star = () => {
        setStarIcon(!starIcon);
        pageObj.star = !starIcon;
        localStorage.setItem("Title", JSON.stringify(pageObj));
    }
    //set background image
    const imageSet = (id) => {
        setBackground(id);
        pageObj.background = id;
        localStorage.setItem("Title", JSON.stringify(pageObj));
    }
//Modal Describe
    const modalDesribe = (e) => {
        setModalDes(e.target.value);
        cardTitle[ID].Des = e.target.value;
        localStorage.setItem("cardTitle", JSON.stringify(cardTitle))
    }
    //delete Modal Message
    const delModalMessage = (messageId) => {
        console.log("postTxt", postTxt);
        setPostTxt(postTxt.filter((item, number) => number !== messageId));
        let post = localStorage.getItem("cardTitle");
        post = JSON.parse(post);
        post[ID].postTxt = post[ID].postTxt.reverse();
        post[ID].postTxt = post[ID].postTxt.filter((item, number) => number !== messageId)
        console.log(post[ID].postTxt.length)
        localStorage.setItem("cardTitle", JSON.stringify(post));
    };

    //Modal title change
    const modalTitleChange = (e) => {
        setModalTitle(e.target.value);
        cardTitle[ID].modalTitle = e.target.value;
        console.log(cardTitle[ID].modalTitle)
        localStorage.setItem("cardTitle", JSON.stringify(cardTitle));
    }
    //change check list text
    const checkListTxtChange = (e) => {
        setCheckListTxt(e.target.value);
    }
    //Add Item to Check List Array
    const addCheckListItem = () => {
        setCheckListFlag(!checkListFlag);
        if (checkListFlag) {
            if (checkListTxt !== "") {

                setCheckList((prevState) => [
                    ...prevState,
                    checkListTxt
                ]);
                cardTitle[ID].checkList.push(checkListTxt);
                localStorage.setItem("cardTitle", JSON.stringify(cardTitle))
                setCheckListTxt("");

            } else {
                alert("لطفا متن مناسب وارد کنید")
            }
        }


    }
    //add check List
    const checkListAdd = () => {
        setAddCheckList(true);
        cardTitle[ID].checkListFlag = true;
        localStorage.setItem("cardTitle", JSON.stringify(cardTitle))
    }
    //change check list title
    const checkListTitleChange = (e) => {
        setCheckListTitle(e.target.value);
        cardTitle[ID].checkListTitle = e.target.value;
        localStorage.setItem("cardTitle", JSON.stringify(cardTitle))
    }
    //Delete Check List
    const delCheckList = () => {
        cardTitle[ID].checkListTitle = "";
        cardTitle[ID].checkList = [];
        cardTitle[ID].checkListFlag = false;
        setAddCheckList(false);
        setCheckListTxt("");
        setCheckListTitle("");
        setCheckList([]);
        localStorage.setItem("cardTitle", JSON.stringify(cardTitle));

    }
    //Edit Check List

        const saveCheckList = (id , text) => {
            checkList[id] = text;
            cardTitle[ID].checkList = checkList;
            localStorage.setItem("cardTitle",JSON.stringify(cardTitle));

    };

    //for first create card => show edit mode
    const cardEmpty = (id , empty) =>{
        //if empty input
        if (empty){
            deleteCard(id)
        }
        cardTitle[id].cardCreate = false;
        localStorage.setItem("cardTitle" , JSON.stringify(cardTitle))
    }

    return (
        <div className="App">
            <div className="main"
                 style={{backgroundImage: `url(${require(`../assets/img/Back_img/${background !== null ? background : 2}.jfif`).default})`}}>
                <div className="container-fluid" onChange={changePageValue}>
                    <div className="top-header">
                        <div className="back-image">
                            <SimplePopover popoverbtn="popover-backimg-btn" popoverID="page-background"
                                           titleTxt="انتخاب عکس" Text={
                                <div className="row">
                                    {backImg.map((image) =>
                                        <div className="col-md-6">
                                            <div className="set-image" onClick={() => imageSet(image)} imageID={image}
                                                 style={{backgroundImage: `url(${require(`../assets/img/Back_img/${image}.jfif`).default})`}}></div>
                                        </div>
                                    )
                                    }
                                </div>
                            }/>
                        </div>
                        <div className="project_name d-inline-block">
                            <input type="text" placeholder="عنوان را وارد کنید" onChange={title} value={projectTitle}
                                   className="custom-inpt width-dynamic proba dva"/>
                        </div>
                        <div className="star-page">
                            <StarBorderIcon className="star_icon" style={{fill: starIcon ? "rgb(224 155 14)" : "white"}}
                                            onClick={star}/>
                        </div>

                    </div>
                    <div className="row">
                        <div className="col-3 a">
                            <div className="card">
                                <div className="card-header">
                                    <input type="text" placeholder="نام مربوط به کارت را وارد کنید"
                                           onChange={titleChange}
                                           value={titleName}
                                           className="title-card" ref={ticketTxt}/>
                                    {cardTitle.map((card) =>
                                        <Card key={card.id} id={card.id} cardCreate={card.cardCreate} cardEmpty={cardEmpty} cardText={card.title} cardChange={cardChange}
                                              modalChange={modalChange}
                                              deleteCard={deleteCard}
                                              modalPost={card.postTxt}
                                              modalOpen={modalOpen}

                                        />
                                    )}


                                    <button className="btn btn-primary w-100 mt-3 font-weight-bold" onClick={addCard}>
                                        اضافه کردن
                                    </button>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" modalID={ID}
                 aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <div className="container-fluid">
                                <input type="text" placeholder="عنوان را وارد کنید"
                                       className="modal-title width-dynamic proba dva" onChange={modalTitleChange}
                                       value={modalTitle}/>
                                <div className="row">
                                    <div className="col-md-3">
                                        <SimplePopover titleTxt="برچسب ها" Text={
                                            <div className="container">
                                                <div className="row">
                                                    <div className="lable-popover">کاور</div>
                                                    <div className="col-md-12">
                                                        <div className="color-code bg-warning"
                                                             onClick={warningLabelClick}>

                                                        </div>
                                                    </div>
                                                    <div className="col-md-12">
                                                        <div className="color-code bg-danger"
                                                             onClick={dangerLabelClick}>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-12">
                                                        <div className="color-code bg-primary"
                                                             onClick={primaryLabelClick}></div>
                                                    </div>
                                                    <div className="col-md-12">
                                                        <div className="color-code bg-info"
                                                             onClick={infoLabelClick}></div>
                                                    </div>
                                                    <div className="col-md-12">
                                                        <div className="color-code bg-success"
                                                             onClick={successLabelClick}></div>
                                                    </div>
                                                </div>
                                            </div>
                                        }>
                                        </SimplePopover>
                                        <br/>
                                        <Button variant="contained" color="primary" onClick={checkListAdd}>
                                            چک لیست
                                        </Button>

                                    </div>
                                    <div className="col-md-9">
                                        <div className={labelColor ? labelClass : "d-none"}>
                                        </div>

                                        <div>
                                            <div className="text-right">
                                                <NotesIcon/>
                                                توضیحات
                                            </div>
                                            <textarea value={modalDes} className="height-dynamic modal-des"
                                                      onChange={modalDesribe}
                                                      placeholder="توضیحات را وارد کنید">
                                            </textarea>
                                        </div>
                                        {/*Check Box Item*/}
                                        <div className={addCheckList ? "text-left" : "d-none"}>

                                            <h4 className="text-right pb-2 text-right font-weight-bold float-right d-inline-block">
                                                <DoneOutlineIcon className="ml-2"/>
                                                <input type="text" placeholder="عنوان را وارد کنید"
                                                       onChange={checkListTitleChange} value={checkListTitle}
                                                       className='custom-inpt width-dynamic proba dva'
                                                       style={{color: "black"}}/>
                                            </h4>
                                            <button className="del-checkList" onClick={delCheckList}>حذف کردن</button>
                                            {checkList.map((value, number) =>
                                                <CheckBox key={number} txt={value} id={number}
                                                          saveCheckList={saveCheckList}/>
                                            )}
                                            <div className="row w-100">
                                                <div className="col-md-12">
                                                    <input type="text"
                                                           className={checkListFlag ? "w-100 mb-3" : "d-none"}
                                                           onChange={checkListTxtChange}
                                                           value={checkListTxt}/>
                                                </div>

                                            </div>
                                            <div className="text-right">
                                                <button className="btn btn-success font-weight-bold mb-4"
                                                        onClick={addCheckListItem}>اضافه کردن
                                                </button>
                                            </div>
                                        </div>
                                        {/*end Check Box Item*/}
                                        <div className="row">

                                            <div className="col-md-10">

                                                <input type="text" className="w-100 mb-3" onChange={ticketText}
                                                       value={ticket}/>
                                            </div>
                                            <div className="col-md-2">
                                                <button className="btn btn-success w-100 font-weight-bold save-txt"
                                                        onClick={textModal}>
                                                    ثبت
                                                </button>
                                            </div>
                                            {postTxt.map((post, number) =>
                                                <ModalContent key={post.text} postId={number} text={post.text}
                                                              time={post.time} delMessage={delModalMessage}/>
                                            )}


                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Index;
