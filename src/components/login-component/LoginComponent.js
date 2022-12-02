import './LoginComponent.css'
import { FiLogIn } from 'react-icons/fi';

const LoginComponent = () => {
    return ( 
    <div className="login__form">
        <div className='login__form__form'>
            <FiLogIn
            size='25px'
            color='#FFF8EA'
            />
        <form className='login__form__inputs'>
            <input type='text' placeholder="Please type your best email" className="login__form__email"></input>
            <input type='password' placeholder="Password" className="login__form__email"></input>
            <button className="login__form__button">Sign In</button>
        </form>
        <p>Not a User? <span className='login__form__inputs__sign_in'>Sign In</span></p>
        </div>
    </div> );
}
 
export default LoginComponent;