import { Link } from "react-router-dom";
import Input from "../../../Components/Input";
import { useForm } from "react-hook-form";
import { getRule } from "../../../util/rule";
import Image from "../../../assets/ImageAuth.png";
import { useMutation } from "@tanstack/react-query";
import { LoginAccount } from "../../../Api/Api.auth";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const rule = getRule();
  const LogionAccountMutation = useMutation({
    mutationFn: (body) => LoginAccount(body),
  });

  const onSubmit = handleSubmit((data) =>
    LogionAccountMutation.mutate(data, {
      onSuccess: (data) => {
        console.log(data);
      },
    })
  );

  return (
    <div className="grid grid-cols-2">
      <div className="lg:col-span-1 col-span-2 w-full mb-10">
        <form
          className="mx-32 pt-[230px] text-mainColor-color_D9D9D9"
          onSubmit={onSubmit}
          noValidate
        >
          <div className=" w-full relative flex justify-between items-center  ">
            <span className="text-3xl font-text  font-semibold capitalize ">
              Đăng nhập
            </span>
            <p className="mt-2">
              Bạn chưa có tài khoản?
              <Link
                to={"/register"}
                className=" pl-1 text-red-500 cursor-pointer  hover:opacity-50"
              >
                Đăng ký
              </Link>
            </p>
          </div>
          <div className="mt-7 ">
            <Input
              name="email"
              type="Email"
              placeholder="Email"
              rules={rule.email}
              register={register}
              errorMessage={errors.email?.message}
            />
            <Input
              name="password"
              type="password"
              placeholder="password"
              autoComplete="on"
              rules={rule.password}
              register={register}
              errorMessage={errors.password?.message}
            />

            <Link
              to={"/forgot-password"}
              className="  text-sm underline hover:underline-offset-4"
            >
              Quên mật khẩu
            </Link>
          </div>

          <button
            type="submit"
            className="w-full border py-3 my-2 hover:bg-mainColor-color_D9D9D9 hover:text-mainColor-color_2D0000 uppercase"
          >
            đăng nhập
          </button>
        </form>
      </div>
      <div className="col-span-1 hidden lg:block">
        <img src={Image} alt="" className="w-[100%]" />
      </div>
    </div>
  );
}
export default Login;
