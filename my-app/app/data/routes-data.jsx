import { usePathname } from "next/navigation";
import { FaUser } from "react-icons/fa";
import { PiUserSoundFill } from "react-icons/pi";
import { FaCartShopping } from "react-icons/fa6";
import { TbCategoryPlus } from "react-icons/tb";
import { IoBagHandle } from "react-icons/io5";
import { MdLocalGroceryStore } from "react-icons/md";
import { IoMdSettings } from "react-icons/io";
import { FaQuestionCircle } from "react-icons/fa";
import { MdOutlineLogout } from "react-icons/md";

export const link=([
    {path:"/user", label:"User",icons:<FaUser/> },
    {path:"/client", label:"Client",icons:<PiUserSoundFill/> },
    {path:"/product", label:"Product",icons:<FaCartShopping/> },
    {path:"/category", label:"Category",icons:<TbCategoryPlus/> },
    {path:"/order", label:"Order",icons:<IoBagHandle/> },
    {path:"/online", label:"Online",icons:<MdLocalGroceryStore/> },
    {path:"/setting", label:"Setting",icons:<IoMdSettings/> },
    {path:"/faq", label:"Faq",icons:<FaQuestionCircle/> },
    // {path:"/logout", label:"LogOut",icons:<MdOutlineLogout className="text-red-600"/> }
])
