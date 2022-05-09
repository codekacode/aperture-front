import { useEffect, useState } from "react"
import Banner from "../components/Banner"
import { Carrusel } from "../components/Carrusel"
import { bannersData } from "../utils/data"


export const Home = () => {
    const [bannerData, setBannersData] = useState([]);
    
    const addBanners = () => {
    const bannersDataFetch = bannersData
    setBannersData(bannersDataFetch)
  }

  useEffect(() => {
    addBanners();
  }, [])

    return (
        <div>
            <h1>Home Page</h1>
            <Carrusel/>
            <Banner bannerData={bannerData[0]}/>
        </div>
    )
}