import npcLogo from '../assets/npcLogo.png'
import { FaBaby } from 'react-icons/fa'
import { BsCommand, BsPersonFill } from 'react-icons/bs'
import { MdLogout } from 'react-icons/md'
import { IoMdContact } from 'react-icons/io'
import { Link } from 'react-router-dom'
const StatPage = () => {
    return (  
        <div>
            <div className='flex flex-row'>
                <div className='shadow-lg bg-red-400 leading-tight invisible sm:invisible md:invisible lg:visible xl:visible lg:h-full lg:shadow-2xl text-center text-white font-semibold font-serif md:bg-green-600 lg:w-72 fixed'>
                    <div className='bg-white text-green-500 h-44 pt-6'>
                        <img src={npcLogo} className='mx-auto lg:h-auto w-16' alt="npc logo" />
                        <h1 className='mt-2'>National Population</h1>
                        <span className=''>Commission</span>
                    </div>

                    <div>
                        <ul className='mt-4 font-thin text-center'>
                            <Link><li className='relative p-4 flex flex-row gap-4 ml-4'><FaBaby className='w-6 h-6'/>Birth Registrations</li></Link>
                            <hr className='w-60 mx-auto'/>
                            <Link><li className='relative p-4 mt-2 flex flex-row gap-4 ml-4'><BsCommand className='w-6 h-6'/>Death Registrations</li></Link>
                            <hr className='w-60 mx-auto'/>
                            <Link><li className='relative p-4 mt-2 flex flex-row gap-4 ml-4'><FaBaby className='w-6 h-6'/>Still Birth registrations</li></Link>
                            <hr className='w-60 mx-auto'/>
                            <Link><li className='relative p-4 mt-2 flex flex-row gap-4 ml-4'><BsPersonFill className='w-6 h-6' />Registrars</li></Link>
                            <hr className='w-60 mx-auto'/>
                            <Link to="/"><li className='relative p-4 mt-2 flex flex-row gap-4 ml-4'><MdLogout className='w-6 h-6'/>Log Out</li></Link>
                            <hr className='w-60 mx-auto'/>
                        </ul>
                    </div>
                </div> 

                <div className='fixed md:fixed lg:fixed lg:top-0 lg:left-0 lg: w-full lg:ml-72 place-content-start shadow-lg bg-white z-50'>
                    <div className='w-full bg-green-500 text-white lg:bg-white lg:text-black'>
                        <div className='text-center p-4  shadow-lg w-full lg:flex lg:justify-between lg:w-10/12 lg:pr-36 xl:pr-20'>
                            <h2 className='lg:text-lg font-semibold leading-tight lg:mt-2 font-serif'>Electronic Civil and Vital Registration Statistics</h2>
                            <div className=' justify-center mt-2 lg:flex lg:gap-2'>
                                <IoMdContact className='mx-auto w-7 h-7 lg:-mt-1 lg:w-9 lg:h-9'/>
                                <div className='lg:flex lg:flex-col lg:text-start lg:-mt-2'>
                                    <h2 className='font-bold font-serif'>Hamza Sani</h2>
                                    <p className='text-xs leading-tight font-serif'>DCR, Demsa(Adamawa State)</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> 
            </div>

            <div className='w-full mt-40 lg:mt-10'>
                <div className='w-screen sm:w-11/12 mx-auto mt-4 lg:mt-24 lg:w-9/12 lg:ml-80 shadow-lg bg-blue-900 px-4 py-2 text-xs flex flex-row justify-between'>
                    <h2 className='text-white'>Total Registrations: <span className='font-bold'>32,111</span></h2>
                    <span className='flex items-center justify-center rounded-full bg-white w-5 h-5 text-blue-900 font-bold'>R</span>
                </div>

                    <div className='lg:ml-70 mt-4 text-white grid grid-cols-2 gap-y-6 sm:flex sm:flex-row sm:gap-2 md:flex md:flex-row lg:flex lg:flex-row lg:gap-10'>
                        <div className='mx-auto flex flex-row shadow-lg bg-blue-400 w-32 h-20 lg:w-48 lg:h-20'>
                            <div className=''>
                                <span className='flex items-center justify-center rounded-full bg-white w-6 h-6 text-blue-400 font-bold mt-7 ml-2'>R</span>
                            </div>
                            <div className='flex flex-col justify-center ml-3'>
                                <h2 className='text-xs'>Pending Approvals</h2>
                                <p className='font-bold'>32,111</p> 
                            </div>  
                        </div>
                        <div className='mx-auto flex flex-row shadow-lg bg-orange-400 w-32 h-20 lg:w-48 lg:h-20'>
                            <div className=''>
                                <span className='flex items-center justify-center rounded-full bg-white w-6 h-6 text-blue-400 font-bold mt-7 ml-2'>R</span>
                            </div>
                            <div className='flex flex-col justify-center ml-3'>
                                <h2 className='text-xs'>Pending Approvals</h2>
                                <p className='font-bold'>32,111</p> 
                            </div>  
                        </div>
                        <div className='mx-auto flex flex-row shadow-lg bg-blue-900 w-32 h-20 lg:w-48 lg:h-20'>
                            <div className=''>
                                <span className='flex items-center justify-center rounded-full bg-white w-6 h-6 text-blue-400 font-bold mt-7 ml-2'>R</span>
                            </div>
                            <div className='flex flex-col justify-center ml-3'>
                                <h2 className='text-xs'>Pending Approvals</h2>
                                <p className='font-bold'>32,111</p> 
                            </div>  
                        </div>
                        <div className='mx-auto flex flex-row shadow-lg bg-custom-red w-32 h-20 lg:w-48 lg:h-20'>
                            <div className=''>
                                <span className='flex items-center justify-center rounded-full bg-white w-6 h-6 text-blue-400 font-bold mt-7 ml-2'>R</span>
                            </div>
                            <div className='flex flex-col justify-center ml-3'>
                                <h2 className='text-xs'>Pending Approvals</h2>
                                <p className='font-bold'>32,111</p> 
                            </div>  
                        </div>
                    </div>

                    <div className=" lg:block mt-2">
                        <div className="lg:w-9/12 ml-2 lg:ml-80 -mt-2">
                            <div className="min-w-screen min-h-screen flex flex-col font-sans">
                                <div className="flex flex-row justify-between w-full ml-50 mt-6 h-1/3">
                                    <h2 className="font-sm font-bold mt-1">Pending Approvals</h2>
                                    <h2 className="font-sm  mr-4 lg:font-medium invisible  lg:visible">Search: <input className="visible mr-2 w-24 mb-4 w-30 md:w-60 rounded-md focus:outline-none border-2 border-gray-300 focus:border-blue-500 text-center pr-2" type="search" name="" id="" placeholder='Search' /></h2>
                                </div>
                                
                                <div className="">
                                    <div className="bg-white shadow-md rounded -my-2 lg: overflow-scroll">
                                        <table className="min-w-max w-full table-auto">
                                        <thead>
                                            <tr className="bg-green-500 text-white text-sm">
                                            <th className="p-1 text-left">Surname of Child</th>
                                            <th className="p-1 text-left">First Name of Child</th>
                                            <th className="p-1 text-center">Middle Name of Child</th>
                                            <th className="p-1 text-center">Certificate Number</th>
                                            <th className="p-1 text-center">Status</th>
                                            <th className="p-1 text-center">Result</th>
                                            </tr>
                                        </thead>
                                            <tbody className="text-gray-600 text-sm font-light">
                                                {Array(9).fill().map((_, i) => (
                                                <tr className="border-b border-gray-200 hover:bg-gray-100">
                                                    <td className="px-6 text-left h-8 whitespace-nowrap">
                                                        <div className="flex items-center">
                                                            <span className="font-medium">Musa</span>
                                                        </div>
                                                    </td>
                                                    <td className="px-6">
                                                        <div className="flex items-center">
                                                            <span className="">Samuel</span>
                                                        </div>
                                                    </td>
                                                    <td className="px-6 text-center">
                                                        <span>Esther</span>
                                                    </td>
                                                    <td className="px-6 text-center">
                                                        <span>388346873ND</span>
                                                    </td>
                                                    <td className="px-4 w-32 text-sm  lg:px-6 text-center">
                                                        <div className="bg-amber-800 rounded-lg text-center cursor-pointer">
                                                        <span className="text-white text-xs">Pending</span>
                                                        </div>
                                                    </td>
                                                    <td className="px-4 w-32 text-sm  lg:px-6 text-center">
                                                        <div className="bg-blue-500 rounded-lg text-center cursor-pointer">
                                                        <span className="text-white text-xs">View</span>
                                                        </div>
                                                    </td>
                                                </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                <div className="flex flex-row gap-2 text-white justify-end mr-4 mt-4">
                                    <a className="border-green-500 border-2 text-green-500 rounded-md h-6 w-6 text-center" href="">1</a>
                                    <a className="bg-green-500 rounded-md h-6 w-6 text-center" href="">2</a>
                                    <a className="bg-green-500 rounded-md h-6 w-6 text-center" href="">3</a>
                                    <a className="bg-green-500 rounded-md h-6 w-6 text-center" href="">4</a>
                                    <a className="bg-green-500 rounded-md h-6 w-6 text-center" href="">5</a>
                                    <a className="bg-green-500 rounded-md h-6 w-6 text-center" href="">6</a>
                                    <a className="bg-green-500 rounded-md h-6 w-6 text-center" href="">7</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    );
}
 
export default StatPage;