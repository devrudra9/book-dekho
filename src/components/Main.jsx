import React, { useState } from "react";
import Card from "./Card";
import axios from "axios";
import Footer from "./Footer";

const Main = () => {
    const [search, setSearch] = useState("");
    const [bookData, setData] = useState([]);
    const searchBook = (event) => {
        const API_KEY = process.env.REACT_APP_API_KEY
        if (event.key === "Enter") {
            axios.get('https://www.googleapis.com/books/v1/volumes?q=' + search + '&key=' + API_KEY + '&maxResults=40').then(res => setData(res.data.items))
                .catch(err => console.log(err));
            const element = document.getElementById("box");
            element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    }

    const handleClick = (event) => {
        event.preventDefault();
        axios.get('https://www.googleapis.com/books/v1/volumes?q=' + search + '&key=' + API_KEY + '&maxResults=40').then(res => setData(res.data.items))
            .catch(err => console.log(err));
        const element = document.getElementById("box");
        element.scrollIntoView({ behavior: "smooth", block: "start" });
    }

    return (
        <>
            <div className="header">
                <div className="row1">
                    <h1>" If you don't like to read then<br /> you haven't found the right books "</h1>
                    <p>J. K. Rowling</p>
                </div>
                <div className="row2">
                    <h2>Book Dekho</h2>
                    <div className="search">
                        <input type="text" placeholder="Enter Your Book Name" value={search} onChange={e => setSearch(e.target.value)} onKeyDown={searchBook} />
                        <button onClick={handleClick} href="/container"><i className="fa fa-search"></i></button>
                    </div>
                    <img src="./images/bg2.png" alt="" />
                </div>
            </div>

            <div className="container" id="box">
                {<Card book={bookData} key={bookData.id} />}
            </div>
            <Footer />
        </>
    )
}

export default Main;