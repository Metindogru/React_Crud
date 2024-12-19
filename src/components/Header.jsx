import { MdPostAdd } from "react-icons/md";
import { useDispatch } from "react-redux";
import { modalFunc } from "../redux/modalSlice";
import { searchDataFunc, sortingDataFunc } from "../redux/dataSlice";

const Header = () => {
  const dispatch = useDispatch();
  return (
    <div className="flex items-center justify-between bg-zinc-300 text-white px-4 py-3">
      <div className="text-3xl text-black flex items-center ">
        <img className="w-[100px] mr-5" src="/icon.png" alt="icon" />
        React <span className="text-blue-300 font-bold"> CRUD</span>
      </div>
      <div className="flex items-center gap-5">
        <div className="text-black">
          <select
            onChange={(e) => dispatch(sortingDataFunc(e.target.value))}
            className="h-10 rounded-lg p-2 cursor-pointer"
            name=""
            id=""
          >
            <option value="asc">Artan</option>
            <option value="desc">Azalan</option>
          </select>
        </div>

        <input
          onChange={(e) => dispatch(searchDataFunc(e.target.value))}
          className="h-10 rounded-lg px-4 text-black cursor-pointer"
          type="text"
          placeholder="Arama yapınız..."
        />
        <div
          onClick={() => dispatch(modalFunc())}
          className="bg-blue-600 w-11 h-11 rounded-full flex items-center justify-center cursor-pointer"
        >
          <MdPostAdd size={24} />
        </div>
      </div>
    </div>
  );
};

export default Header;
