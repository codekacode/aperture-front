import { Nav } from 'react-bootstrap';

export const Footer = () => {
    return (
        <Nav className="justify-content-center" activeKey="/home">
            <Nav.Item>
                <Nav.Link href="/home">Shop and Learn</Nav.Link>
            </Nav.Item>
                    <div><a>Shop and Learn</a></div>
                    <div><a>Products</a></div>
                    <div><a>For Gamers</a></div>
                    <div><a>For Developers</a></div>
                    <div><a>For Business</a></div>
                    <div><a>About Aperture</a></div>
                <p>© 2022 Aperture. Todos los derechos reservados.</p>
        </Nav>
    )  
}