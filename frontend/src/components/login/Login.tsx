import { useState } from 'react';

function Login() {
    const [userName, setUserName] = useState<string>('');
    const [password, setPassword] = useState<string>('');

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
