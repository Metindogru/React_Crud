import { useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { deleteDataFunc } from "../redux/dataSlice";
import { updateDataFunc } from "../redux/dataSlice";
import { modalFunc } from "../redux/modalSlice";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ dt }) => {
  const [openEdit, setOpenEdit] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const updateFunc = () => {
    dispatch(modalFunc());
    setOpenEdit(false);
    navigate(`/?update=${dt?.id}`);
  };
  return (
    <div className="w-[225px] relative m-2 rounded-md mt-5">
      <img
        className="w-[230px] h-[230px] rounded-md object-contain border "
        src={dt?.url}
        alt=""
      />
      <div className="absolute left-0 bottom-0 bg-zinc-300 text-black w-full h-14">
        <div className="text-lg font-bold text-blue-600">{dt?.name}</div>
        <div className="text-lg font-bold text-blue-600">{dt?.price} €</div>
      </div>
      <div
        onClick={() => setOpenEdit(!openEdit)}
        className="absolute top-0 right-2"
      >
        <BsThreeDots color="white" size={24} />
      </div>
      {openEdit && (
        <div className="bg-zinc-600 border border-white text-white absolute top-3 right-2 p-2 text-sm">
          <div
            onClick={() => dispatch(deleteDataFunc(dt?.id))}
            className="cursor-pointer"
          >
            Sil
          </div>
          <div onClick={updateFunc} className="cursor-pointer">
            Güncelle
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductCard;
