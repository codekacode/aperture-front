import styled from 'styled-components';
import { IoIosCart,IoIosSearch } from 'react-icons/io';
import { Container, Nav } from "react-bootstrap";
import { Link } from 'react-router-dom';


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
    color: #fff;
    && .nav-link {
        color:#fff;
    }
`

function Navbar () {
    return (
        <Navigation className="nav">
            <div>
                Logo
            </div>
            <Menu>
                <Link className="nav-link" to='/'>Home</Link>
                <Link className="nav-link" to='/'>Store</Link>
                <Link className="nav-link" to='/'>Phones</Link>
                <Link className="nav-link" to='/'>Computers</Link>
                <Link className="nav-link" to='/'>Headsets</Link>
                <Link className="nav-link" to='/'>Micros</Link>
                <Link className="nav-link" to='/'>Keyboards</Link>
                <Link className="nav-link" to='/'>Accesories</Link>
                <Link className="nav-link" to='/'>Support</Link>
            </Menu>
            <IoIosCart width={'80px'}/>
            <IoIosSearch width={'80px'} />

        </Navigation>
    )
}

export default Navbar