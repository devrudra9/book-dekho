import React, { useState } from "react";
import Modal from "./Modal";

const Card = ({ book }) => {
    const [show, setShow] = useState(false);
    const [bookItem, setItem] = useState();

    return (
        <>
            {   // eslint-disable-next-line
                book.map((item) => {
                    let thumbnail = item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;
                    let amount = item.saleInfo.listPrice && item.saleInfo.listPrice.amount;
                    if (thumbnail !== undefined && amount !== undefined) {
                        return (
                            <div key={item.id}>
                                <div className="card" onClick={() => { setShow(true); setItem(item) }}>
                                    <img src={thumbnail} alt="" />
                                    <div className="bottom">
                                        <h3 className="title">{item.volumeInfo.title}</h3>
                                        <p className="amount">By : {item.volumeInfo.authors}</p>
                                    </div>
                                </div>
                                <Modal show={show} item={bookItem} onClose={() => setShow(false)} />
                            </div>
                        )
                    }
                })
            }

        </>
    )
}

export default Card;