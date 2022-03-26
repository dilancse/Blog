import { useState } from 'react';
import apiRequestController from '../../controllers/ApiRequestController';
import { GetRequest } from '../../models/HttpRequests';

function Login() {
    const [userName, setUserName] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const get = new GetRequest({headers:'', requestApi:''});
    apiRequestController.sendRequest(get);

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
        </div>
    );
}

export default Login;
