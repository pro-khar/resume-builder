import { IoMdClose } from "react-icons/io";


function Banner() {


  return (
   <>
     <div className='bg-yellow-400 absolute w-full pt-1 shadow-sm flex text-gray-700 z-10'>
      <marquee className="">Under Developement</marquee>
      <div className="text-xl p-1 hover:text-gray-500 mr-2 mb-1">
        <IoMdClose />
      </div>
      
    </div>
   </>
  )
}

export default Banner