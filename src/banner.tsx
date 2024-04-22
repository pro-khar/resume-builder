import { IoMdClose } from "react-icons/io";
import { MdConstruction } from "react-icons/md";

function Banner() {


  return (
   <>
     <div className='bg-yellow-400 absolute w-full pt-1 shadow-sm flex text-gray-600 z-10'>
      <div className="text-center w-full"><MdConstruction className="inline text-black text-xl mb-1"/> Under Developement</div>
      <div className="text-xl p-1 hover:text-gray-500 mr-2 mb-1">
        <IoMdClose />
      </div>
      
    </div>
   </>
  )
}

export default Banner