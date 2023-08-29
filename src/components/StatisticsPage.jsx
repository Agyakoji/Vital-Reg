// import { FaBaby } from 'react-icons/fa'
// import { BsCommand, BsPersonFill } from 'react-icons/bs'
// import { MdLogout } from 'react-icons/md'
// import { IoMdContact } from 'react-icons/io'
// import npcLogo from '../assets/npcLogo.png'
// import { Link } from 'react-router-dom'

// const Statistics = () => {

//     return (  
//         <div className='overflow-hidden hidden lg:block'>
//             <div className='fixed border-2 columns-4 h-screen w-72 flex flex-col bg-green-500 shadow-lg'>
//                 <div className='mx-auto bg-white w-full text-lg text-center font-normal font-serif mb-4 text-green-500'>
//                     <img src={npcLogo} className='mx-auto h-auto w-16 mt-4' alt="npc logo" />
//                     <h1>National Population</h1>
//                     <span className=''>Commission</span>
//                 </div>

                // <ul className='bg-green-500 text-white mx-auto'>
                //     <Link><li className='relative p-4 flex flex-row gap-4'><FaBaby className='w-6 h-6'/>Birth Registrations</li></Link>
                //     <hr className='w-60'/>
                //     <Link><li className='relative p-4 mt-2 flex flex-row gap-4'><BsCommand className='w-6 h-6'/>Death Registrations</li></Link>
                //     <hr className='w-60'/>
                //     <Link><li className='relative p-4 mt-2 flex flex-row gap-4'><FaBaby className='w-6 h-6'/>Still Birth registrations</li></Link>
                //     <hr className='w-60'/>
                //     <Link><li className='relative p-4 mt-2 flex flex-row gap-4'><BsPersonFill className='w-6 h-6' />Registrars</li></Link>
                //     <hr className='w-60'/>
                //     <Link to="/"><li className='relative p-4 mt-2 flex flex-row gap-4'><MdLogout className='w-6 h-6'/>Log Out</li></Link>
                //     <hr className='w-60'/>          
                // </ul>
//             </div>

//               <div className='flex justify-end w-10/12 ml-72 fixed' >
//                 <div className='flex flex-row justify-between pl-4 pr-20 w-full h-14 shadow-lg mt-4 p-4'>
//                     <h2 className='-mt-2'>Electronic Civil and Vital Registration Statistics</h2>
//                     <div className='-mt-4 flex flex-row gap-3'>
//                         <IoMdContact className='mt-2 w-7 h-7'/>
//                         <div>
//                             <h2 className='font-bold'>Hamza Sani</h2>
//                             <p className='text-xs'>DCR, Demsa(Adamawa State)</p>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             <div className='fixed flex flex-row justify-between w-9/12 ml-80 mt-24 shadow-lg bg-blue-900 px-4 py-2 text-xs'>
//                     <h2 className='text-white'>Total Registrations: <span className='font-bold'>32,111</span></h2>
//                     <span className='flex items-center justify-center rounded-full bg-white w-5 h-5 text-blue-900 font-bold'>R</span>
//             </div>

//             <div className='fixed ml-80 mt-36 text-white flex flex-row gap-16'>
//                 <div className='flex flex-row shadow-lg bg-blue-400 w-48 h-20'>
//                     <div className=''>
//                         <span className='flex items-center justify-center rounded-full bg-white w-6 h-6 text-blue-400 font-bold mt-7 ml-2'>R</span>
//                     </div>
//                     <div className='flex flex-col justify-center ml-3'>
//                         <h2 className='text-xs'>Pending Approvals</h2>
//                         <p className='font-bold'>32,111</p> 
//                     </div>  
//                 </div>
//                 <div className='flex flex-row shadow-lg bg-orange-400 w-48 h-20'>
//                     <div className=''>
//                         <span className='flex items-center justify-center rounded-full bg-white w-6 h-6 text-orange-400 font-bold mt-7 ml-2'>R</span>
//                     </div>
//                     <div className='flex flex-col justify-center ml-3'>
//                         <h2 className='text-xs'>Pending Approvals</h2>
//                         <p className='font-bold'>32,111</p> 
//                     </div>  
//                 </div>

//                 <div className='flex flex-row shadow-lg bg-blue-900 w-48 h-20'>
//                     <div className=''>
//                         <span className='flex items-center justify-center rounded-full bg-white w-6 h-6 text-blue-900 font-bold mt-7 ml-2'>R</span>
//                     </div>
//                     <div className='flex flex-col justify-center ml-3'>
//                         <h2 className='text-xs'>Pending Approvals</h2>
//                         <p className='font-bold'>32,111</p> 
//                     </div>  
//                 </div>

//                 <div className='flex flex-row shadow-lg bg-custom-red w-48 h-20'>
//                     <div className=''>
//                         <span className='flex items-center justify-center rounded-full bg-white w-6 h-6 text-custom-red font-bold mt-7 ml-2'>R</span>
//                     </div>
//                     <div className='flex flex-col justify-center ml-3'>
//                         <h2 className='text-xs'>Pending Approvals</h2>
//                         <p className='font-bold'>32,111</p> 
//                     </div>  
//                 </div>
//             </div>

//             <div>
//                 <div className="lg:block mt-56">
//                     <div className="lg: block w-9/12 ml-80 -mt-2 ">
//                         <div className="min-w-screen min-h-screen flex flex-col font-sans overflow-hidden">
//                             <div className="flex flex-row justify-between w-full ml-50 mt-6 h-1/3">
//                                 <h2 className="font-bold mt-1">Pending Approvals</h2>
//                                 <h2 className="font-medium">Search: <input className=" mb-4 rounded-md focus:outline-none border-2 border-gray-300 focus:border-blue-500" type="search" name="" id="" /></h2>
//                             </div>
                            
//                             <div className="w-full">
//                                 <div className="bg-white shadow-md rounded -my-2">
//                                     <table className="min-w-max w-full table-auto">
//                                     <thead>
//                                         <tr className="bg-green-500 text-white text-sm">
//                                         <th className="p-1 text-left">Surname of Child</th>
//                                         <th className="p-1 text-left">First Name of Child</th>
//                                         <th className="p-1 text-center">Middle Name of Child</th>
//                                         <th className="p-1 text-center">Certificate Number</th>
//                                         <th className="p-1 text-center">Status</th>
//                                         <th className="p-1 text-center">Result</th>
//                                         </tr>
//                                     </thead>
//                                         <tbody className="text-gray-600 text-sm font-light">
//                                             {Array(9).fill().map((_, i) => (
//                                             <tr className="border-b border-gray-200 hover:bg-gray-100">
//                                                 <td className="px-6 text-left h-8 whitespace-nowrap">
//                                                     <div className="flex items-center">
//                                                         <span className="font-medium">Musa</span>
//                                                     </div>
//                                                 </td>
//                                                 <td className="px-6">
//                                                     <div className="flex items-center">
//                                                         <span className="">Samuel</span>
//                                                     </div>
//                                                 </td>
//                                                 <td className="px-6 text-center">
//                                                     <span>Esther</span>
//                                                 </td>
//                                                 <td className="px-6 text-center">
//                                                     <span>388346873ND</span>
//                                                 </td>
//                                                 <td className="px-6 text-center">
//                                                     <div className="bg-amber-800 rounded-lg text-center cursor-pointer">
//                                                     <span className="text-white text-xs">Pending</span>
//                                                     </div>
//                                                 </td>
//                                                 <td className="px-6 text-center">
//                                                     <div className="bg-blue-500 rounded-lg text-center cursor-pointer">
//                                                     <span className="text-white text-xs">View</span>
//                                                     </div>
//                                                 </td>
//                                             </tr>
//                                             ))}
//                                         </tbody>
//                                     </table>
//                                 </div>
//                             </div>
//                             <div className="flex flex-row gap-2 text-white justify-end mr-4 mt-4">
//                                 <a className="border-green-500 border-2 text-green-500 rounded-md h-6 w-6 text-center" href="">1</a>
//                                 <a className="bg-green-500 rounded-md h-6 w-6 text-center" href="">2</a>
//                                 <a className="bg-green-500 rounded-md h-6 w-6 text-center" href="">3</a>
//                                 <a className="bg-green-500 rounded-md h-6 w-6 text-center" href="">4</a>
//                                 <a className="bg-green-500 rounded-md h-6 w-6 text-center" href="">5</a>
//                                 <a className="bg-green-500 rounded-md h-6 w-6 text-center" href="">6</a>
//                                 <a className="bg-green-500 rounded-md h-6 w-6 text-center" href="">7</a>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }
 
// export default Statistics;

{/* <div className='flex justify-end lg:w-10/12 ml-72 fixed z-50' >
                <div className='flex flex-row justify-between pl-4 pr-20 w-full h-14 shadow-lg mt-4 p-4 z-50'>
                    <h2 className='-mt-2'>Electronic Civil and Vital Registration Statistics</h2>
                    <div className='-mt-4 flex flex-row gap-3'>
                        <IoMdContact className='mt-2 w-7 h-7'/>
                        <div>
                            <h2 className='font-bold'>Hamza Sani</h2>
                            <p className='text-xs'>DCR, Demsa(Adamawa State)</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='w-full lg:w-full'>
                <div className='flex flex-row justify-between lg:w-9/12 ml-80 mt-24 shadow-lg bg-blue-900 px-4 py-2 text-xs'>
                        <h2 className='text-white'>Total Registrations: <span className='font-bold'>32,111</span></h2>
                        <span className='flex items-center justify-center rounded-full bg-white w-5 h-5 text-blue-900 font-bold'>R</span>
                </div>

                <div className='ml-80 mt-4 text-white flex flex-row gap-16'>
                    <div className='flex flex-row shadow-lg bg-blue-400 w-48 h-20'>
                        <div className=''>
                            <span className='flex items-center justify-center rounded-full bg-white w-6 h-6 text-blue-400 font-bold mt-7 ml-2'>R</span>
                        </div>
                        <div className='flex flex-col justify-center ml-3'>
                            <h2 className='text-xs'>Pending Approvals</h2>
                            <p className='font-bold'>32,111</p> 
                        </div>  
                    </div> */}





import { FaBaby } from 'react-icons/fa'
import { BsCommand, BsPersonFill } from 'react-icons/bs'
import { MdLogout } from 'react-icons/md'
import { IoMdContact } from 'react-icons/io'
import npcLogo from '../assets/npcLogo.png'
import { Link } from 'react-router-dom'

const Statistics = () => {
    return (  
        <div className='flex w-full overflow-hidden'>
            <div className='fixed hidden sm:block border-2 h-screen lg:w-72 bg-green-500 shadow-lg'>
                <div className='mx-auto bg-white w-full text-lg text-center font-normal font-serif mb-4 text-green-500'>
                    <img src={npcLogo} className='mx-auto h-auto w-16 mt-4' alt="npc logo" />
                    <h1>National Population</h1>
                    <span className=''>Commission</span>
                </div>    

                <ul className='bg-green-500 text-white mx-auto'>
                    <Link><li className='relative p-4 flex flex-row gap-4'><FaBaby className='w-6 h-6'/>Birth Registrations</li></Link>
                    <hr className='w-60'/>
                    <Link><li className='relative p-4 mt-2 flex flex-row gap-4'><BsCommand className='w-6 h-6'/>Death Registrations</li></Link>
                    <hr className='w-60'/>
                    <Link><li className='relative p-4 mt-2 flex flex-row gap-4'><FaBaby className='w-6 h-6'/>Still Birth registrations</li></Link>
                    <hr className='w-60'/>
                    <Link><li className='relative p-4 mt-2 flex flex-row gap-4'><BsPersonFill className='w-6 h-6' />Registrars</li></Link>
                    <hr className='w-60'/>
                    <Link to="/"><li className='relative p-4 mt-2 flex flex-row gap-4'><MdLogout className='w-6 h-6'/>Log Out</li></Link>
                    <hr className='w-60'/>          
                </ul>
            </div>


            <div className='w-full'>
                <div className='fixed top-0 left-0 lg: w-10/12 ml-72 place-content-start shadow-lg bg-white z-50'>
                    <div className='w-full flex flex-row justify-end lg:w-full -ml-2'>
                        <div className='flex flex-row justify-between pl-4 pr-20 w-full h-14 shadow-lg mt-4 p-4'>
                            <h2 className='-mt-2'>Electronic Civil and Vital Registration Statistics</h2>
                            <div className='-mt-4 flex flex-row gap-3'>
                                <IoMdContact className='mt-2 w-7 h-7'/>
                                <div>
                                    <h2 className='font-bold'>Hamza Sani</h2>
                                    <p className='text-xs'>DCR, Demsa(Adamawa State)</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='relative lg:mt-24 w-full lg:w-full'>
                    <div className='w-full lg:w-9/12 lg: ml-80 shadow-lg bg-blue-900 px-4 py-2 text-xs flex flex-row justify-between'>
                        <h2 className='text-white'>Total Registrations: <span className='font-bold'>32,111</span></h2>
                        <span className='flex items-center justify-center rounded-full bg-white w-5 h-5 text-blue-900 font-bold'>R</span>
                    </div>

                    <div className='ml-80 lg:ml-80 mt-4 text-white flex flex-row gap-16'>
                        <div className='flex flex-row shadow-lg bg-blue-400 w-48 h-20'>
                            <div className=''>
                                <span className='flex items-center justify-center rounded-full bg-white w-6 h-6 text-blue-400 font-bold mt-7 ml-2'>R</span>
                            </div>
                            <div className='flex flex-col justify-center ml-3'>
                                <h2 className='text-xs'>Pending Approvals</h2>
                                <p className='font-bold'>32,111</p> 
                            </div>  
                        </div>
                        <div className='flex flex-row shadow-lg bg-orange-400 w-48 h-20'>
                            <div className=''>
                                <span className='flex items-center justify-center rounded-full bg-white w-6 h-6 text-orange-400 font-bold mt-7 ml-2'>R</span>
                            </div>
                            <div className='flex flex-col justify-center ml-3'>
                                <h2 className='text-xs'>Pending Approvals</h2>
                                <p className='font-bold'>32,111</p> 
                            </div>  
                        </div>

                        <div className='flex flex-row shadow-lg bg-blue-900 w-48 h-20'>
                            <div className=''>
                                <span className='flex items-center justify-center rounded-full bg-white w-6 h-6 text-blue-900 font-bold mt-7 ml-2'>R</span>
                            </div>
                            <div className='flex flex-col justify-center ml-3'>
                                <h2 className='text-xs'>Pending Approvals</h2>
                                <p className='font-bold'>32,111</p> 
                            </div>  
                        </div>

                        <div className='flex flex-row shadow-lg bg-custom-red w-48 h-20'>
                            <div className=''>
                                <span className='flex items-center justify-center rounded-full bg-white w-6 h-6 text-custom-red font-bold mt-7 ml-2'>R</span>
                            </div>
                            <div className='flex flex-col justify-center ml-3'>
                                <h2 className='text-xs'>Pending Approvals</h2>
                                <p className='font-bold'>32,111</p> 
                            </div>  
                        </div>
                    </div>

                    <div className="w-full lg:block mt-2">
                        <div className="lg:w-9/12 ml-80 -mt-2">
                            <div className="min-w-screen min-h-screen flex flex-col font-sans">
                                <div className="flex flex-row justify-between w-full ml-50 mt-6 h-1/3">
                                    <h2 className="font-bold mt-1">Pending Approvals</h2>
                                    <h2 className="font-medium">Search: <input className=" mb-4 rounded-md focus:outline-none border-2 border-gray-300 focus:border-blue-500" type="search" name="" id="" /></h2>
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
                                                    <td className="px-6 text-center">
                                                        <div className="bg-amber-800 rounded-lg text-center cursor-pointer">
                                                        <span className="text-white text-xs">Pending</span>
                                                        </div>
                                                    </td>
                                                    <td className="px-6 text-center">
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
        </div>
    );
}
 
export default Statistics;


