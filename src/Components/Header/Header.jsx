import { motion, useAnimation } from "framer-motion";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Logo from "../../assets/Logo.png";

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [prevScrollY]);
  useEffect(() => {
    controls.start({ opacity: visible ? 1 : 0 });
  }, [visible, controls]);
  return (
    <>
      <motion.header
        initial={{ opacity: 1 }}
        animate={controls}
        transition={{ opacity: { duration: 0.2 } }}
        className="group fixed py-5  z-50 w-full bg-mainColor-color_01042D   text-mainColor-color_D9D9D9"
      >
        <div className="flex w-full items-center pb-4 justify-between  shadow-lg px-10 h-[60px] ">
          <Link to={"/"}>
            <img src={Logo} alt="" />
          </Link>

          <input
            type="text"
            placeholder="Tìm kiếm cá cảnh"
            className=" w-[400px] h-full bg-mainColor-color_D9D9D9 text-black rounded-full px-3 outline-none"
          />
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
                    d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                  />
                </svg>
              </div>
              <span className="font-bold">đăng nhập</span>
            </div>
            <div className="flex gap-3 items-center bg-mainColor-color_D9D9D9  p-2 rounded-full">
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
                  d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                />
              </svg>

              <span className="font-bold text-mainColor-color_2D0000">
                giỏ hàng
              </span>
            </div>
          </div>
        </div>
      </motion.header>
    </>
  );
}

export default Header;
