const BirthData = () => {
    return (  
        <div>
            <div className="overflow-hidden hidden lg:block">
                <div className="flex flex-row justify-between w-9/12 ml-80 mt-6 ">
                    <h2 className="font-bold">Pending Approvals</h2>
                    <h2 className="font-medium mb-2">Search: <input className="p-1.5 mb-4 rounded-md focus:outline-none border-2 border-gray-300 focus:border-blue-500" type="search" name="" id="" /></h2>
                </div>

                <div className="overflow-hidden lg: block w-9/12 ml-80 -mt-44">
                    <div className="min-w-screen min-h-screen flex items-center justify-center font-sans overflow-hidden">
                        <div className="w-full">
                            <div className="bg-white shadow-md rounded my-6">
                                <table className="min-w-max w-full table-auto">
                                <thead>
                                    <tr className="bg-gray-200 text-gray-600 text-sm">
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
                                                <div className="bg-amber-950 rounded-lg text-center cursor-pointer">
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
                    </div>
                </div>

                <div className="flex flex-row gap-2 text-white justify-end mr-4 -mt-40">
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
    );
}
 
export default BirthData;  








// const BirthData = () => {
//     return (  
//         <div>
//             <div>
//                 <div className="flex flex-row justify-between w-9/12 ml-80 mt-6">
//                     <h2 className="font-bold">Pending Approvals</h2>
//                     <h2 className="font-medium">Search: <input className="p-1.5 mb-2 border-2 border-gray-300 focus:border-blue-500 focus:outline-none" type="search" name="" id="" /></h2>
//                 </div>

//                 <div className="overflow-x-auto w-9/12 ml-80 -mt-44">
//                     <div className="min-w-screen min-h-screen flex items-center justify-center font-sans overflow-hidden">
//                         <div className="w-full">
//                         <div className="bg-white shadow-md rounded my-6">
//                             <table className="min-w-max w-full table-auto">
//                             <thead>
//                                 <tr className="bg-gray-200 text-gray-600 text-sm">
//                                 <th className="p-1 text-left">Header 1</th>
//                                 <th className="p-1 text-left">Header 2</th>
//                                 <th className="p-1 text-center">Header 3</th>
//                                 <th className="p-1 text-center">Header 4</th>
//                                 <th className="p-1 text-center">Header 5</th>
//                                 <th className="p-1 text-center">Header 6</th>
//                                 </tr>
//                             </thead>
//                             <tbody className="text-gray-600 text-sm font-light">
//                                 <tr className="border-b border-gray-200 hover:bg-gray-100">
//                                     <td className="p-1 text-left whitespace-nowrap">
//                                         <div className="flex items-center">
//                                             <span className="font-medium">Your Data</span>
//                                         </div>
//                                     </td>
//                                     <td className="p-1 text-left">
//                                         <div className="flex items-center">
//                                             <span>Your Data</span>
//                                         </div>
//                                     </td>
//                                     <td className="p-1 text-center">
//                                         <span>Your Data</span>
//                                     </td>
//                                     <td className="p-1 text-center">
//                                         <span>Your Data</span>
//                                     </td>
//                                     <td className="p-1 text-center">
//                                         <span>Your Data</span>
//                                     </td>
//                                     <td className="p-1 text-center">
//                                         <span>Your Data</span>
//                                     </td>
//                                 </tr>

//                                 <tr className="border-b border-gray-200 hover:bg-gray-100">
//                                     <td className="p-1 text-left whitespace-nowrap">
//                                         <div className="flex items-center">
//                                             <span className="font-medium">Your Data</span>
//                                         </div>
//                                     </td>
//                                     <td className="p-1 text-left">
//                                         <div className="flex items-center">
//                                             <span>Your Data</span>
//                                         </div>
//                                     </td>
//                                     <td className="p-1 text-center">
//                                         <span>Your Data</span>
//                                     </td>
//                                     <td className="p-1 text-center">
//                                         <span>Your Data</span>
//                                     </td>
//                                     <td className="p-1 text-center">
//                                         <span>Your Data</span>
//                                     </td>
//                                     <td className="p-1 text-center">
//                                         <span>Your Data</span>
//                                     </td>
//                                 </tr>

//                                 <tr className="border-b border-gray-200 hover:bg-gray-100">
//                                     <td className="p-1 text-left whitespace-nowrap">
//                                         <div className="flex items-center">
//                                             <span className="font-medium">Your Data</span>
//                                         </div>
//                                     </td>
//                                     <td className="p-1 text-left">
//                                         <div className="flex items-center">
//                                             <span>Your Data</span>
//                                         </div>
//                                     </td>
//                                     <td className="p-1 text-center">
//                                         <span>Your Data</span>
//                                     </td>
//                                     <td className="p-1 text-center">
//                                         <span>Your Data</span>
//                                     </td>
//                                     <td className="p-1 text-center">
//                                         <span>Your Data</span>
//                                     </td>
//                                     <td className="p-1 text-center">
//                                         <span>Your Data</span>
//                                     </td>
//                                 </tr>

//                                 <tr className="border-b border-gray-200 hover:bg-gray-100">
//                                     <td className="p-1 text-left whitespace-nowrap">
//                                         <div className="flex items-center">
//                                             <span className="font-medium">Your Data</span>
//                                         </div>
//                                     </td>
//                                     <td className="p-1 text-left">
//                                         <div className="flex items-center">
//                                             <span>Your Data</span>
//                                         </div>
//                                     </td>
//                                     <td className="p-1 text-center">
//                                         <span>Your Data</span>
//                                     </td>
//                                     <td className="p-1 text-center">
//                                         <span>Your Data</span>
//                                     </td>
//                                     <td className="p-1 text-center">
//                                         <span>Your Data</span>
//                                     </td>
//                                     <td className="p-1 text-center">
//                                         <span>Your Data</span>
//                                     </td>
//                                 </tr>

//                                 <tr className="border-b border-gray-200 hover:bg-gray-100">
//                                     <td className="p-1 text-left whitespace-nowrap">
//                                         <div className="flex items-center">
//                                             <span className="font-medium">Your Data</span>
//                                         </div>
//                                     </td>
//                                     <td className="p-1 text-left">
//                                         <div className="flex items-center">
//                                             <span>Your Data</span>
//                                         </div>
//                                     </td>
//                                     <td className="p-1 text-center">
//                                         <span>Your Data</span>
//                                     </td>
//                                     <td className="p-1 text-center">
//                                         <span>Your Data</span>
//                                     </td>
//                                     <td className="p-1 text-center">
//                                         <span>Your Data</span>
//                                     </td>
//                                     <td className="p-1 text-center">
//                                         <span>Your Data</span>
//                                     </td>
//                                 </tr>

//                                 <tr className="border-b border-gray-200 hover:bg-gray-100">
//                                     <td className="p-1 text-left whitespace-nowrap">
//                                         <div className="flex items-center">
//                                             <span className="font-medium">Your Data</span>
//                                         </div>
//                                     </td>
//                                     <td className="p-1 text-left">
//                                         <div className="flex items-center">
//                                             <span>Your Data</span>
//                                         </div>
//                                     </td>
//                                     <td className="p-1 text-center">
//                                         <span>Your Data</span>
//                                     </td>
//                                     <td className="p-1 text-center">
//                                         <span>Your Data</span>
//                                     </td>
//                                     <td className="p-1 text-center">
//                                         <span>Your Data</span>
//                                     </td>
//                                     <td className="p-1 text-center">
//                                         <span>Your Data</span>
//                                     </td>
//                                 </tr>

//                                 <tr className="border-b border-gray-200 hover:bg-gray-100">
//                                     <td className="p-1 text-left whitespace-nowrap">
//                                         <div className="flex items-center">
//                                             <span className="font-medium">Your Data</span>
//                                         </div>
//                                     </td>
//                                     <td className="p-1 text-left">
//                                         <div className="flex items-center">
//                                             <span>Your Data</span>
//                                         </div>
//                                     </td>
//                                     <td className="p-1 text-center">
//                                         <span>Your Data</span>
//                                     </td>
//                                     <td className="p-1 text-center">
//                                         <span>Your Data</span>
//                                     </td>
//                                     <td className="p-1 text-center">
//                                         <span>Your Data</span>
//                                     </td>
//                                     <td className="p-1 text-center">
//                                         <span>Your Data</span>
//                                     </td>
//                                 </tr>

//                                 <tr className="border-b border-gray-200 hover:bg-gray-100">
//                                     <td className="p-1 text-left whitespace-nowrap">
//                                         <div className="flex items-center">
//                                             <span className="font-medium">Your Data</span>
//                                         </div>
//                                     </td>
//                                     <td className="p-1 text-left">
//                                         <div className="flex items-center">
//                                             <span>Your Data</span>
//                                         </div>
//                                     </td>
//                                     <td className="p-1 text-center">
//                                         <span>Your Data</span>
//                                     </td>
//                                     <td className="p-1 text-center">
//                                         <span>Your Data</span>
//                                     </td>
//                                     <td className="p-1 text-center">
//                                         <span>Your Data</span>
//                                     </td>
//                                     <td className="p-1 text-center">
//                                         <span>Your Data</span>
//                                     </td>
//                                 </tr>

//                                 <tr className="border-b border-gray-200 hover:bg-gray-100">
//                                     <td className="p-1 text-left whitespace-nowrap">
//                                         <div className="flex items-center">
//                                             <span className="font-medium">Your Data</span>
//                                         </div>
//                                     </td>
//                                     <td className="p-1 text-left">
//                                         <div className="flex items-center">
//                                             <span>Your Data</span>
//                                         </div>
//                                     </td>
//                                     <td className="p-1 text-center">
//                                         <span>Your Data</span>
//                                     </td>
//                                     <td className="p-1 text-center">
//                                         <span>Your Data</span>
//                                     </td>
//                                     <td className="p-1 text-center">
//                                         <span>Your Data</span>
//                                     </td>
//                                     <td className="p-1 text-center">
//                                         <span>Your Data</span>
//                                     </td>
//                                 </tr>

//                                 <tr className="border-b border-gray-200 hover:bg-gray-100">
//                                     <td className="p-1 text-left whitespace-nowrap">
//                                         <div className="flex items-center">
//                                             <span className="font-medium">Your Data</span>
//                                         </div>
//                                     </td>
//                                     <td className="p-1 text-left">
//                                         <div className="flex items-center">
//                                             <span>Your Data</span>
//                                         </div>
//                                     </td>
//                                     <td className="p-1 text-center">
//                                         <span>Your Data</span>
//                                     </td>
//                                     <td className="p-1 text-center">
//                                         <span>Your Data</span>
//                                     </td>
//                                     <td className="p-1 text-center">
//                                         <span>Your Data</span>
//                                     </td>
//                                     <td className="p-1 text-center">
//                                         <span>Your Data</span>
//                                     </td>
//                                 </tr>
//                                 {/* Add more <tr> elements here */}
//                             </tbody>
//                             </table>
//                         </div>
//                         </div>
//                     </div>
//                     </div>

//             </div>
//         </div>
//     );
// }
 
// export default BirthData;  

