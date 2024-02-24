import React from "react";
import { EnvironmentOutlined } from "@ant-design/icons";
import { pathBunayya, pathIlimBagy, pathInFaq, pathMosque, pathMuminat, pathMuslimHouse, pathNisa } from "../../constants";
import { useNavigate } from "react-router-dom";

export const Content = () => {
    const navigate = useNavigate();

    return (
        <div className="Content">
            <div className="pray_time">
                <div className="location">
                    <EnvironmentOutlined style={{color: "white"}}/>
                    <span>Қазахстан, Алматы</span>
                </div>
                <div className="time_block">
                    <div className="item">
                        <span className="time">06:18</span>
                        <img src={pathMosque} alt="mosque" />
                        <span className="name">Фаджр</span>
                    </div>
                    <div className="item">
                        <span className="time">13:08</span>
                        <img src={pathMosque} alt="mosque" />
                        <span className="name">Зухр</span>
                    </div>
                    <div className="item">
                        <span className="time">16:53</span>
                        <img src={pathMosque} alt="mosque" />
                        <span className="name">Аср</span>
                    </div>
                    <div className="item">
                        <span className="time">18:38</span>
                        <img src={pathMosque} alt="mosque" />
                        <span className="name">Магриб</span>
                    </div>
                    <div className="item">
                        <span className="time">16:53</span>
                        <img src={pathMosque} alt="mosque" />
                        <span className="name">Иша</span>
                    </div>
                </div>
            </div>
            <div className="projects">
                <div className="project" onClick={() => navigate("/muslimHouse")}>
                    <img src={pathMuslimHouse} alt="muslim_house" />
                </div>
                <div className="project">
                    <img src={pathMuminat} alt="muminat" />
                </div>
                <div className="project">
                    <img src={pathIlimBagy} alt="ilim_bagy" />
                </div>
                <div className="project">
                    <img src={pathInFaq} alt="infaq" />
                </div>
                <div className="project">
                    <img src={pathBunayya} alt="bunayya" />
                </div>
                <div className="project">
                    <img src={pathNisa} alt="nisa" />
                </div>
            </div>
        </div>
    );
};