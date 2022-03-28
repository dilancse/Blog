import { useState } from 'react';
import apiRequestController from '../../controllers/ApiRequestController';
import { GetRequest } from '../../models/HttpRequests';

function Login() {
    const [userName, setUserName] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    async function sendLoginRequest() {
        const get = new GetRequest({ headers: '', requestApi: 'http://localhost:5000/api/user' });
        const response = await apiRequestController.sendRequest(get);
        console.log(response);
    }

    return (
        <div>
            <input
                type="text"
                placeholder="User Name"
                defaultValue=""
                value={userName}
                onChange={(e) => {
                    setUserName(e.target.value);
                }}
            />
            <input
                type="password"
                placeholder="Password"
                defaultValue=""
                value={password}
                onChange={(e) => {
                    setPassword(e.target.value);
                }}
            />
            <button
                onClick={(e) => {
                    sendLoginRequest();
                }}
            >
                Login
            </button>
        </div>
    );
}

export default Login;
