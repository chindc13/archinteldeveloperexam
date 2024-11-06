import { useEffect, useRef, useState } from "react"
import { useNavigate } from "react-router-dom";
import Api from "../components/Api";
import axios from "axios";

const Login = () => {
    const navigate = useNavigate();
    const userRef = useRef();
    const errRef = useRef();

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [errMsg, setErrMsg] = useState();
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        userRef.current.focus();
    }, []);

    useEffect(() => {
        setErrMsg();
    }, [email, password]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post("http://127.0.0.1:8000/api/login",
                JSON.stringify({ email: email, password: password }), {
                headers: { 'Content-Type': 'application/json' },
            });
            console.log(JSON.stringify(response?.data));

            localStorage.setItem('token', response?.data?.token);
            localStorage.setItem('user_id', response?.data?.user_id);
            localStorage.setItem('login', response?.data?.login);
            localStorage.setItem('name', response?.data?.name);   
            localStorage.setItem('type', response?.data?.type);   
            setPassword('');
            setEmail('');
            setSuccess(true);
            navigate("/dashboard");
        } catch (err) {
            if (!err?.response) {
                setErrMsg('No Server Response');
            }
            else if (err?.response?.status === 400) {
                setErrMsg('Login Failed');
            }
            else if (err?.response?.status === 401) {
                setErrMsg('Unauthorized');
            }
            else {
                setErrMsg('Login Failed');
            }
        }
    }

    return (
        <>
            {success ? navigate("/dashboard") : (
                <div className='login-page'>
                    <div className="login-box">
                        <div className="login-logo">
                            <h2><b>Jerryson Derraco</b><br />Archintel Developer Exam </h2>
                        </div>
                        <div className="card">
                            <div className="card-body login-card-body">
                                <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
                                <form onSubmit={handleSubmit}>
                                    <div className="input-group mb-3">
                                        <input type="email" ref={userRef} className="form-control" onChange={e => setEmail(e.target.value)} placeholder="Email" />
                                        <div className="input-group-append">
                                            <div className="input-group-text">
                                                <span className="fas fa-envelope"></span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="input-group mb-3">
                                        <input type="password" className="form-control" onChange={e => setPassword(e.target.value)} placeholder="Password" />
                                        <div className="input-group-append">
                                            <div className="input-group-text">
                                                <span className="fas fa-lock"></span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="social-auth-links text-center mb-3">
                                        <button type="submit" className="btn btn-primary btn-block">Sign In</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default Login
