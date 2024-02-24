import React, { useState, useEffect } from "react";
import { pathBismillah, pathBismillahBG, pathMainPromo } from "../../../constants";
import { useNavigate } from "react-router-dom";
import "../../../styles/MainPreloader.scss";


export const MainPreloader = () => {
    const navigate = useNavigate();
    
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 3000);
    }, []);

    return (
        <div className="MainPreloader">
            <div className={`Preloader ${!isLoading && "close"}`}>
                <img src={pathBismillah} alt="bismillah" />
                <img src={pathBismillahBG} alt="bismillahBG" />
            </div>
            <div className="Promo">
                <img className="promo_img" src={pathMainPromo} alt="promo" />
                <div className="text_block">
                    <h1>Happy Muslim</h1>
                    <p>
                        Исламдағы отбасының әрбір мүшесіне арналып жасалған жобалар жиынтығы.
                    </p>
                </div>
                <button onClick={() => navigate("/main")}>Түсінікті</button>
            </div>
        </div>
    );
};