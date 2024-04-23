import { Link } from "react-router-dom";
import Input from "../../../Components/Input";

function Login({ setIsLogin }) {
  return (
    <form className="mx-32 pt-[230px] text-mainColor-color_D9D9D9">
      <div className=" w-full relative flex justify-between items-center  ">
        <span className="text-3xl font-text  font-semibold capitalize ">
          Đăng nhập
        </span>
        <p className="mt-2">
          Bạn chưa có tài khoản?
          <span
            onClick={() => setIsLogin(false)}
            className=" pl-1 text-red-500 cursor-pointer  hover:opacity-50"
          >
            Đăng ký
          </span>
        </p>
      </div>
      <div className="mt-7 ">
        <Input placeholder="Email" />
        <Input placeholder="Mật khẩu" />

        <Link
          to={"/forgot-password"}
          className="  text-sm underline hover:underline-offset-4"
        >
          Quên mật khẩu
        </Link>
      </div>

      <button className="w-full border py-3 my-2 hover:bg-mainColor-color_D9D9D9 hover:text-mainColor-color_2D0000 uppercase">
        đăng nhập
      </button>
    </form>
  );
}
export default Login;
