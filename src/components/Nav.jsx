import styled from 'styled-components';
import { IoIosCart } from 'react-icons/io'


const Navigation = styled.nav`
    display: flex;
    justify-content: space-around;
    align-items: center;
`

// const Logo = styled.img`
//     max-width: 200px;
// `

const Menu = styled.ul`
    display: flex;
    list-style: none;
    gap: 10px;
`

function Nav () {
    return (
        <Navigation className="nav">
            <div>
                Hola
            </div>
            <Menu>
                <li><a>New</a></li>
                <li><a>Collection</a></li>
                <li><a>Shop</a></li>
            </Menu>
            <IoIosCart width={'80px'}/>

        </Navigation>
    )
}

export default Nav