import { CiSearch } from "react-icons/ci";
import { RxAvatar } from "react-icons/rx";
const Header = () => {
    return(
        <div className="w-full flex h-[50px] justify-between">
            <div className="w-[80%] flex h-full p-2 items-center gap-2 bg-gray-50">
                <CiSearch size={18}></CiSearch>
                <input type="text" className="border-none focus:outline-none focus:ring-0 w-full" placeholder="Search by folder or file name"/>
            </div>
            <div className="h-full gap-1 flex items-center pr-5">
                <RxAvatar size={25}></RxAvatar>
                <div className="h-full flex items-center">Jenny Wilson</div>
            </div>
        </div>
    )
}

export default Header