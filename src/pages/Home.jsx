import { useState } from "react";
import Banner from "../components/Banner";
import { Carrusel } from "../components/Carrusel";
import { bannersData } from "../utils/data";


export const Home = () => {
    const [bannersDataState] = useState(bannersData);

    return (
        <div>
            <h1>Home Page</h1>
            <Carrusel/>
            {bannersDataState.map(bannerData => {
                return(
                    <Banner bannerData={bannerData } />
                )
            })}
            
        </div>
    )
}