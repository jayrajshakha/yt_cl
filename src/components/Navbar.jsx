import { GiHamburgerMenu } from "react-icons/gi";
import {
  AiFillYoutube,
  AiOutlineSearch,
  AiOutlineVideoCameraAdd,
  AiOutlineBell,
} from "react-icons/ai";
import { MdKeyboardVoice } from "react-icons/md";
import {} from "react-icons/";

import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className=" flex justify-between items-center h-14 px-16">
      <div className=" flex items-center justify-between">
        <GiHamburgerMenu className="p-2 h-10 w-10 " />
        <Link to={"/"}>
          <div className=" flex  items-center h-14 w-[120px] pt-[18px] pr-[14px] pb-[18px] pl-[16px]">
            <AiFillYoutube className="text-red-600 text-3xl" />
            <div className=" text-lg">Youtube</div>
          </div>
        </Link>
      </div>
      <div className="flex items-center w-[732px] h-10">
        <div className="flex mx-auto  mt-2 ml-8 w-[640px] pr-1  pl-4 h-10">
          <form
            action=""
            className="pt-0.5 border  mx-2 rounded-xl  w-[536px] "
          >
            <input
              type="search"
              className=" rounded-2xl  bg-black  w-[500px] outline-none p-4 h-7  "
              placeholder="Search"
            />

            <AiOutlineSearch className="inline-block  bg-zinc-800 h-6 w-6  " />
          </form>
          <MdKeyboardVoice className="bg-zinc-800 rounded-full inline-block p-1 h-10 w-10" />
        </div>
      </div>

      <div className="flex items-center justify-evenly ">
        <div className=" bg-zinc-800 rounded-full h-10 w-10 p-2">
          <AiOutlineVideoCameraAdd className="w-6 h-6 " />
        </div>
        <div className="relative bg-zinc-800 rounded-full h-10 w-10 p-2">
          <AiOutlineBell className="h-6 w-6" />
          <span className="bg-red-500 rounded-full h-4 text-center w-4 text-xs top-[3px] right-[4px] absolute  ">
            9+
          </span>
        </div>
        <div className="w-[60px] h-[34px] py-[1px] px-[6px]">
          <img
            src="https://yt3.ggpht.com/nNodsFvKm8Ckw22EWqyH0ahJ79_53loxhMnwG65goCJSJEK6TyBePNXv8cxhFeQNBK1YN5fk=s88-c-k-c0x00ffffff-no-rj"
            className="w-8 h-8  rounded-full"
            alt="logo"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;