import { useState } from "react";

function Login({onSubmit}) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error,setError]=useState(null);
    const handleSubmit=(e)=>{
        e.preventDefault();
        if(email=='' || password=='')
            setError('All Fields are mandatory')
        else{
            if(onSubmit){
                if(!error)
                    onSubmit({email,password});
                return; //return from here after test execution
            }
            
            if(email=='admin@gmail.com' && password=='admin123')
                alert('Form is Submitted')
            else{
                alert('Invalid credentials')
            }
            setEmail('')
            setPassword('')
        }
    }
    return (
        <div>
            <h1>Login Component</h1>
            <form onSubmit={handleSubmit}>
                {error && <p style={{color:'red',fontSize:'20px'}}>{error}</p>}
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" placeholder="john.doe@gmail.com"
                        value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" placeholder="SECRET VALUE"
                        value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <button type="submit">Login</button>
            </form>
        </div>
    );
}

export default Login;