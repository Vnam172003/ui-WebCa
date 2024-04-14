import { motion, useAnimation } from "framer-motion";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import logo from "../../assets/Logo/LogoHan";

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
            <img src={logo} alt="" width={150} />
          </Link>

          <input
            type="text"
            placeholder="Tìm kiếm cá cảnh"
            className=" w-[400px] h-full bg-mainColor-color_D9D9D9 text-black rounded-full px-3 outline-none"
          />
          <div className="flex gap-5">
            <div className="flex gap-3">
              <div className=" bg-mainColor-color_D9D9D9  p-2 rounded-full">
                {/* <PhoneIcon className="w-5 h-5 fill-mainColor-color_2D0000" /> */}
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
                {/* <UserIcon className="w-5 h-5 fill-mainColor-color_2D0000" /> */}
              </div>
              <span className="font-bold">đăng nhập</span>
            </div>

            <div className="flex gap-3 items-center bg-mainColor-color_D9D9D9  p-2 rounded-full">
              {/* <ShoppingBagIcon className="w-5 h-5 fill-mainColor-color_2D0000" /> */}
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
