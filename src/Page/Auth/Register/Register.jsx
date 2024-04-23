import { Link } from "react-router-dom";
import Input from "../../../Components/Input";

function Register({ setIsLogin }) {
  return (
    <form className="mx-32 pt-[230px] text-mainColor-color_D9D9D9">
      <div className=" w-full relative flex justify-between items-center  ">
        <span className="text-3xl font-text  font-semibold capitalize ">
          Đăng ký
        </span>
        <p className="mt-2">
          Bạn đã có tài khoản?
          <span
            onClick={() => setIsLogin(true)}
            className=" pl-1 text-red-500 cursor-pointer  hover:opacity-50"
          >
            Đăng nhập
          </span>
        </p>
      </div>
      <div className="mt-7 ">
        <div className="flex gap-3">
          <Input placeholder="Họ" />
          <Input placeholder="Tên" />
        </div>
        <Input placeholder="Email" />
        <Input placeholder="Mật khẩu" />
        <Input placeholder="Nhập lại mật khẩu" />
      </div>

      <button className="w-full border py-3 my-2 hover:bg-mainColor-color_D9D9D9 hover:text-mainColor-color_2D0000 uppercase">
        đăng ký
      </button>
    </form>
  );
}

export default Register;
