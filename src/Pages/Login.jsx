import { useState } from "react"
import { Link } from "react-router-dom"

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    const handleSubmit = (e) => {
      e.preventDefault()  
      console.log("Login Successfully")
    }

  return (
    <div className='flex flex-col justify-center items-center'>
        <h1 className='text-xl text-red-500 font-semibold my-5'>Log In</h1>
        <form onSubmit={handleSubmit} className='flex flex-col gap-6 w-[400px] py-3 px-6'>
            <label>Email:</label>
            <input 
             required
             type='email'
             placeholder='Email'
             className='w-full border rounded-lg p-2'
             value={email}
             onChange={(e) => setEmail(e.target.value)}
            />
             <label>Password:</label>
            <input 
             required
             type='password'
             placeholder='Password'
             className='w-full border rounded-lg p-2'
             value={password}
             onChange={(e) => setPassword(e.target.value)}
            />
            <div className="bg-red-500 text-center w-[100px] rounded-lg mx-auto">
                <button className="text-white py-2" type='Submit'>
                    Submit
                </button>
            </div>
        </form>
        <div className="flex items-center justify-start gap-2">
            <p>Don't have an account?</p>
            <Link className="text-blue-500 hover:text-blue-800 hover:underline" to='/SignUp'>Sign Up</Link>
        </div>
    </div>
  )
}

export default Login