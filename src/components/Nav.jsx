import styled from 'styled-components';
import { IoIosCart,IoIosSearch } from 'react-icons/io'


const Navigation = styled.nav`
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: #332e2e;
    color: #fff;
`

// const Logo = styled.img`
//     max-width: 200px;
// `

const Menu = styled.ul`
    display: flex;
    list-style: none;
    gap: 10px;
`

function Navbar () {
    return (
        <Navigation className="nav">
            <div>
                Logo
            </div>
            <Menu>
                <li><a>Store</a></li>
                <li><a>Phones</a></li>
                <li><a>Computers</a></li>
                <li><a>Headsets</a></li>
                <li><a>Micros</a></li>
                <li><a>Keyboards</a></li>
                <li><a>Accesories</a></li>
                <li><a>Support</a></li>
            </Menu>
            <IoIosCart width={'80px'}/>
            <IoIosSearch width={'80px'} />

        </Navigation>
    )
}

export default Navbar