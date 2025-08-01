import { ChatBubbleOvalLeftIcon, ShareIcon } from "@heroicons/react/16/solid";


export default function DetailSearch() {
  return (
    <>
    <div className="flex flex-row my-4">
       <div className="group border rounded-full flex flex-row items-center justify-center w-20 font-semibold  text-gray-950 hover:bg-[#003366] hover:text-white  p-1 cursor-pointer me-2"><ShareIcon className="w-[18px] me-1 fill-pink-900 group-hover:fill-white transition-colors duration-300"/>Share</div>
       <div className="group border rounded-full flex flex-row items-center justify-center w-30 font-semibold  text-gray-950 hover:bg-[#003366] hover:text-white  p-1 cursor-pointer"><ChatBubbleOvalLeftIcon  className="w-[18px] me-1 fill-pink-900 group-hover:fill-white transition-colors duration-300"/>comment</div>
    </div>
    <div className="bg-[#003366] text-white rounded-lg p-3 max-w-3xl mx-auto shadow ">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
      
        <div className=" w-3/4">
          <div className="text-xl font-serif font-bold leading-tight mb-1">
            The Courier free daily newsletter
          </div>
          <p className="text-sm font-normal">
            Start your day right: Get the top stories from<br className="hidden md:block" />
            The Courier delivered straight to your inbox
          </p>
        </div>

        
        <form className="flex w-full md:w-auto  md:mt-0 ml-14 md:ml-0">
          <input
            type="email"
            required
            placeholder="Enter your email address"
            className="rounded-l-full   w-3/5 bg-white text-black placeholder-gray-500 focus:outline-none border-none px-2 py-1"
            style={{borderTopRightRadius: 0, borderBottomRightRadius: 0}}
          />
          <div
           
            className="bg-[#2dc7f7]  hover:bg-[#1ba9e2] text-black cursor-pointer font-semibold text-center   uppercase text-sm tracking-wider px-2 pt-1.5 pb-0.5"
            style={{borderTopLeftRadius: 0, borderBottomLeftRadius: 0,borderTopRightRadius:"calc(infinity * 1px)",borderBottomRightRadius:"calc(infinity * 1px)"}}
          >
            SIGN UP
          </div>
        </form>
      </div>
    </div>
    </>
  );
}
