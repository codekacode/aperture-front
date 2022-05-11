import styled from 'styled-components';


const WrapBanner = styled.div`
    backgorund: yellow;
    && img{
        width: 100%;
    }
`

function Banner({bannerData}) {
    console.log(bannerData)
    const {image} = bannerData;
    return (
        <WrapBanner>
            <img  src={image} alt="banner"/>
        </WrapBanner>
    )    
}

export default Banner;