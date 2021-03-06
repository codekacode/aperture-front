import { Link } from 'react-router-dom';
// import Button from 'react-bootstrap/Button';
import { Button } from 'react-bootstrap';

export const SignIn = () => {
    // const navigate = useNavigate();
    return (
        <>
        <form>
            <div>Ingresa a tu cuenta</div>
            <div>
                <label for="email">Email</label>
                <div>
                    <input type="email" />
                </div>
            </div>
            <div>
                <label for="password">Password</label>
                <div>
                    <input type="password" />
                </div>
            </div>
            <button type="button">Ingresar</button>
            <div>
                <p>¿No tienes una cuenta?</p>
                <p>Registrate<Link to="/"></Link></p>
            </div>
            <Button variant="primary">boostrap</Button>
        </form>
        <Button variant="secondary">Hola</Button>
        </>
    )
}