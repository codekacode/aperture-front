import styled from 'styled-components';


const WrapBanner = styled.div`
    backgorund: yellow;
`

function Banner({bannerData}) {
    console.log(bannerData)
    const {image} = bannerData;
    return (
        <WrapBanner>
            <img  src={image} alt="banner"/>
            Banner
        </WrapBanner>
    )
}

export default Banner;