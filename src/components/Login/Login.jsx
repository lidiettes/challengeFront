
import { useNavigate } from "react-router-dom";
import style from "./Login.module.css"

const Login = () => {

    const navigate = useNavigate();

const loginFunction =(e)=>{
    e.preventDefault();
    navigate("/");
}

    return (
        <>
            <div className={style.wrapper}>
                <div>
                    <p></p>
                </div>
                <form onSubmit={loginFunction} className={style.form}>
                    <p >Sign in </p>
                    <input type="text" placeholder="email" id="email" name="email" className="email" />
                    <input type="password" placeholder="password" id="password" name="password" className="passwd" />
                    <a href="#" className={style.forget}>Forget your password?</a>
                    <button href="#" type="submit" className={style.btnlogin}>Sign in</button>
                </form>

                <form  onSubmit={loginFunction} action="#" className={style.form}>
                    <br />
                    <p>Register                 </p>
                    <input type="text" placeholder="name" name="name" className="name" />
                    <input type="text" placeholder="lastName" name="lastName" className="lastName" />
                    <input type="text" placeholder="email" name="email" className="email" />
                    <input type="password" placeholder="password" name="password" className="passwd" />
                    <button href="#" type="submit" className={style.btnlogin}>Register</button>
                </form>
            </div>
        </>
    )
}

export default Login