import Header from "./Header"
import Headphones from "./Headphones"
import React, { useState } from "react";
import Speakers from "./Speakers";
import Earphones from "./Earphones";

export default function Category(props) {

    const page = props.page;

    return (
        <div>
            <Header />
            <div>
                {page === 'headphones' && <Headphones/>}
                {page === 'speakers' && <Speakers/>}
                {page === 'earphones' && <Earphones/>}
            </div>
        </div>
    )
}