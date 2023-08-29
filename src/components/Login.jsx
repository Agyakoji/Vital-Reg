import npcLogo from '../assets/npcLogo.png'
import loginImg from '../assets/loginImg.png'
import { Link} from 'react-router-dom'


const Login = () => {
    return (
        <div className='bg-gray-50 min-h-screen flex flex-col lg:flex-row items-center'>
            <div className='w-2/3 lg:w-1/2 h-screen p-4 overflow-hidden hidden lg:block'>
                <img src={loginImg} alt="loginImg" className='h-screen -m-4' />
            </div>

            <div className='w-full lg:w-1/2 flex flex-col items-center p-2 min-h-screen lg:h-auto justify-center'>
                <div className='mx-auto '>
                    <img src={npcLogo} className='mx-auto w-16 h-auto' alt="npcLogo" />
                    <h2 className='text-lg text-center'>National Population Commission</h2>
                    <h5 className='text-center font-thin'>Vital Reg</h5>
                </div>

                <div className='w-auto lg:w-3/5 lg:max-w-lg px-16 py-5 bg-white rounded-2xl shadow-lg mt-2 lg:mt-10 lg:mx-auto aspect-content aspect-w-1 aspect-h-1'>
                    <h2 className='font-bold text-2xl text-center mt-4 mb-8'>Login</h2>
                    <form className='flex flex-col gap-1 mt-4 p-[-8] lg:mt-10'>
                        <div className="relative group w-full">
                            <input id="phone" type="tel" className="p-2 bg-white rounded-lg border-2 border-gray-150 focus:border-blue-500 px-4 py-2 mb-8 w-full focus:outline-none text-sm" placeholder="Enter phone number" />
                            <label htmlFor="phone" className="text-blue-500 font-sm transition-all duration-300 absolute -top-2 left-4 px-1 bg-white text-xs -mt-1/2">Phone number</label>
                        </div>

                        <div className="relative group w-full">
                            <input id="password" type="password" className="p-2 bg-white rounded-lg border-2 border-gray-150 focus:border-blue-500 px-4 py-2 mb-6 w-full focus:outline-none text-sm" placeholder="Enter your password" />
                            <label htmlFor="password" className="text-blue-500  font-sm transition-all duration-300 absolute -top-2 left-4 px-1 bg-white text-xs -mt-1/2">Password</label>
                        </div>

                        <a href="" className='self-end text-sm hover:text-blue-500'>Reset password</a>

                        {/* <button onClick={() => navigate.push('/Statistics')} type="submit" className='bg-green-500 text-white text-sm rounded-lg hover:scale-110 duration-300 h-10 text-center py-[-1] mt-6 mb-6 w-full'></button> */}
                        <Link to="./StatPage" type="submit" className='bg-green-500 text-white text-sm rounded-lg hover:scale-110 duration-300 h-10 text-center mt-6 mb-6 py-2 w-full'>Login</Link>
                        
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;


