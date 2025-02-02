import { GoTrash } from "react-icons/go";
import { useDispatch } from "react-redux";
import { modalFunc } from "../redux/modalSlice";

const Modal = ({ title, content }) => {
  const dispatch = useDispatch();
  return (
    <div className="fixed top-2 left-0 bottom-0 right-0 w-full h-screen flex items-center justify-center">
      <div className="w-1/3 bg-zinc-400 shadow-lg rounded-md p-4">
        <div className="text-2xl border-b py-3 flex items-center justify-between">
          {title}
          <GoTrash
            onClick={() => dispatch(modalFunc())}
            size={24}
            className="bg-blue-600 w-8 h-8 p-1 rounded-full flex items-center justify-center cursor-pointer"
          />
        </div>
        {content}
      </div>
    </div>
  );
};
export default Modal;
