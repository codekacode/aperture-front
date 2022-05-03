import { Link } from "react-router-dom";

export const SignUp = () => {
    return (
        <form>
            <div>Cliente</div>
            <div>
                <label>Nombres</label>
                <div><input type="text" required/></div>
            </div>
            <div>
                <label>Apellidos</label>
                <div><input type="text" required/></div>
            </div>
            <div>
                <label>Email</label>
                <div><input type="email" required/></div>
            </div>
            <div>
                <label>Contraseña</label>
                <div><input type="email" required/></div>
            </div>
            <div>
                <input type="checkbox" required />
                <label>Acepto las Condiciones de Uso y Política de privacidad</label>
            </div>
            <div>
                <p>¿Ya estás registrado?</p>
                <p>Inicia sesión <Link to="/signin/cliente"></Link></p>
            </div>
        </form>
    )
}