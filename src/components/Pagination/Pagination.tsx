import React from "react";
import { HeartOutlined, HomeOutlined, ProductOutlined, UserOutlined } from "@ant-design/icons";
import { pathMenuIcon } from "../../constants";
import "../../styles/Pagination.scss";

const style: React.CSSProperties = {
    color: "white",
    fontSize: "20px"
};

export const Pagination = () => {
    return (
        <div className="Pagination">
            <div className="items">
                <button>
                    <HomeOutlined style={style}/>
                </button>
                <button>
                    <UserOutlined style={style}/>
                </button>
            </div>
            <div className="icon">
                <img src={pathMenuIcon} alt="menu_icon" />
            </div>
            <div className="items">
                <button>
                    <HeartOutlined style={style}/>
                </button>
                <button>
                    <ProductOutlined style={style}/>
                </button>
            </div>
        </div>
    )
};