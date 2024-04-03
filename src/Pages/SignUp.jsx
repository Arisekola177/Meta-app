import { useState } from "react"


const SignUp = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    const handleSignUp = (e) => {
      e.preventDefault()  
      console.log("SignUp Successfully")
    }

  return (
    <div className='flex flex-col justify-center items-center'>
        <h1 className='text-xl text-red-500 font-semibold my-5'>Sign Up</h1>
        <form onSubmit={handleSignUp} className='flex flex-col gap-6 w-[400px] py-3 px-6'>
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
                    Sign Up
                </button>
            </div>
        </form>
        
    </div>
  )
}

export default SignUp