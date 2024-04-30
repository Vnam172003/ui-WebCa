import { motion, useAnimation } from "framer-motion";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Logo from "../../assets/Logo.png";

import UserInforHeader from "./UserInforHeader";
import CartHeader from "./CartHeader";

function Header() {
  const [prevScrollY, setPrevScrollY] = useState(0);
  const [visible, setVisible] = useState(true);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    setVisible(prevScrollY > currentScrollY);
    setPrevScrollY(currentScrollY);
  };
  const controls = useAnimation();
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollY]);
  useEffect(() => {
    controls.start({ opacity: visible ? 1 : 0 });
  }, [visible, controls]);

  return (
    <>
      <header className="  pt-24 w-full bg-opacity-80  bg-mainColor-color_01042D text-mainColor-color_D9D9D9">
        <motion.div
          initial={{ opacity: 1 }}
          animate={controls}
          transition={{ opacity: { duration: 0.2 } }}
          className="group fixed top-0 right-0 left-0 z-50  bg-mainColor-color_01042D py-5"
        >
          <div className="flex w-full items-center pb-4 justify-between   px-10 h-[60px] ">
            <Link to={"/"}>
              <img src={Logo} alt="" />
            </Link>
            <div className="flex gap-10 ">
              <Link
                to={"/"}
                className="py-2 text-[20px] font-bold hover:text-gray-500"
              >
                Trang chủ
              </Link>
              <Link
                to={"/danhsach"}
                className="py-2 text-[20px] font-bold hover:text-gray-500"
              >
                Danh sách sản phẩm
              </Link>
              <input
                type="text"
                placeholder="Tìm kiếm cá cảnh"
                className=" py-2 bg-mainColor-color_D9D9D9 text-black rounded-full px-3 outline-none"
              />
            </div>

            <div className="flex gap-5">
              <div className="flex gap-3 items-center">
                <div className=" bg-mainColor-color_D9D9D9  p-2 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5 fill-mainColor-color_2D0000"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                    />
                  </svg>
                </div>
                <div>
                  <div>Hổ trợ khách hàng</div>
                  <div className="text-mainColor-color_767586 text-[14px] font-bold">
                    0562134100
                  </div>
                </div>
              </div>
              <UserInforHeader />
              <CartHeader />
            </div>
          </div>
        </motion.div>
      </header>
    </>
  );
}

export default Header;
