import {useEffect, useState} from "react";
import {
    BASE_PATH,
} from "../../Variable";
import axios from "axios";
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router";
import {storeUser} from "../../store/actions/userActions";

function Signuplogin() {
    const [formData, setFormData] = useState([]);
    const [loginFormData, setLoginFormData] = useState([]);
    const dispatch = useDispatch()
    let navigate = useNavigate()

    const onClick = e => {
        e.preventDefault()
        const axios = require('axios').default;
        axios.post(BASE_PATH+'profile', {
            Email: formData.email,
            Password: formData.password,
            ConfirmPassword: formData.password,
            Username: formData.username,
        })
            .then(function (response) {
                console.log(response);
                if(response.statusText === 'Created') {
                    alert('Created')
                    setFormData({
                        email: '',
                        username: '',
                        password: '',
                    })
                }
            })
            .catch(function (error) {
                console.log(error);
            });
    }


    const onChange = e => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        })
    }

    const signInChange = e => {
        setLoginFormData({
            ...loginFormData,
            [e.target.name]: e.target.value,
        })
    }

    const onLoginClick = e => {
        e.preventDefault()
        axios.get(BASE_PATH+ 'profile', {
            params: {
                Email: loginFormData.email,
                Password: loginFormData.pswd,
            }
        })
            .then(function (response) {
                console.log(response)
                if(response.data.length === 0){
                    alert('Something is wrong')
                }
                else {
                    alert('Successfully')
                    dispatch(storeUser(response.data))
                    navigate("/dashboard")
                }
            })
            .catch(function (error) {
                alert('Something is wrong')
            })
    }

    return (
        <div className="App">
            <div className="main">
                <input type="checkbox" id="chk" aria-hidden="true" />
                <div className="signup">
                    <form action="javascript:">
                        <label htmlFor="chk" aria-hidden="true">Sign up</label>
                        <input type="text" name="username" placeholder="User name" required="" onChange={onChange} value={formData.username} />
                        <input type="email" name="email" placeholder="Email" required="" onChange={onChange} value={formData.email} />
                        <input type="password" name="password" placeholder="Password" required="" onChange={onChange} value={formData.password} />
                        <button onClick={onClick}>Sign up</button>
                    </form>
                </div>

                <div className="login">
                    <form action="javascript:">
                        <label htmlFor="chk" aria-hidden="true">Login</label>
                        <input type="email" name="email" placeholder="Email" required="" onChange={signInChange} />
                        <input type="password" name="pswd" placeholder="Password" required=""  onChange={signInChange}/>
                        <button onClick={onLoginClick}>Login</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Signuplogin