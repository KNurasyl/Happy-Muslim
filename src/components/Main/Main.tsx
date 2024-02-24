import React from "react";
import { Pagination } from "../Pagination/Pagination";
import { Promo } from "./Promo";
import { Content } from "./Content";
import "../../styles/Main.scss";

export const Main = () => {
    return (
        <div className="Main">
            <Promo/>
            <Content/>
            <Pagination/>
        </div>
    );
};