

import Image from "../../assets/ImageHeader.svg";
import Title from "../../assets/TitleHeadersvg.svg";
import Cacanh from "../../assets/Cacanh.png";


function HomePage() {
  return (
    <div className="pt-40">
      <div className="  rounded-2xl mb-20  mx-48 bg-gradient-to-b from-mainColor-color_01042D to-mainColor-color_D9D9D9 shadow-lg ">
        <div className="flex justify-center gap-1">
          <img src={Title} alt="" />
          <img src={Image} alt="" />
        </div>
        <div className="flex my-5 mx-10 gap-4">
          <button className="bg-mainColor-color_2D0000 text-mainColor-color_D9D9D9 px-10 py-4 rounded-full hover:bg-none hover:bg-mainColor-color_D9D9D9 hover:text-mainColor-color_2D0000 font-bold uppercase">
            Chọn Cá
          </button>
          <button className="text-mainColor-color_2D0000 bg-mainColor-color_D9D9D9 px-10 py-4 rounded-full hover:bg-none hover:text-mainColor-color_D9D9D9 hover:bg-mainColor-color_2D0000 font-bold uppercase">
            Chọn Hồ Cá
          </button>
        </div>
        <hr />
        <div className="grid grid-cols-5 gap-7 mx-5  py-10  ">
          <div className="bg-[#F4EBEB] col-span-1 text-center rounded-lg text-mainColor-color_2D0000 hover:bg-mainColor-color_D9D9D9">
            <img src={Cacanh} alt="" className="w-full" />
            <div className="w-full h-[1px] bg-mainColor-color_2D0000"></div>
            <p className=" font-bold text-lg  ">Cá nimo</p>
            <button className="border border-mainColor-color_2D0000  p-1 rounded-full my-5 hover:bg-mainColor-color_2D0000 hover:text-mainColor-color_D9D9D9">
              Xem Thêm
            </button>
          </div>
          <div className="bg-[#F4EBEB] col-span-1 text-center rounded-lg text-mainColor-color_2D0000 hover:bg-mainColor-color_D9D9D9">
            <img src={Cacanh} alt="" className="w-full" />
            <div className="w-full h-[1px] bg-mainColor-color_2D0000"></div>
            <p className=" font-bold text-lg  ">Cá nimo</p>
            <button className="border border-mainColor-color_2D0000  p-1 rounded-full my-5 hover:bg-mainColor-color_2D0000 hover:text-mainColor-color_D9D9D9">
              Xem Thêm
            </button>
          </div>
        </div>
      </div>
      <div className="bg-[#AAA9BC] bg-opacity-50">
        <p className="py-10 px-10 font-bold text-lg text-mainColor-color_D9D9D9">
          Khuyến mãi combo cá cảnh
        </p>
        <div className="grid grid-cols-5 gap-6 mx-10">
          {Array(10)
            .fill()
            .map((_, index) => (
              <div key={index} className="col-span-1">
                <div className="bg-[#F4EBEB] text-center rounded-lg text-mainColor-color_2D0000 hover:bg-mainColor-color_D9D9D9">
                  <img src={Cacanh} alt="" className="w-full" />
                  <div className="w-full h-[1px] bg-mainColor-color_2D0000"></div>
                  <p className="font-bold text-lg">Cá nimo</p>
                  <button className="border border-mainColor-color_2D0000 p-1 rounded-full my-5 hover:bg-mainColor-color_2D0000 hover:text-mainColor-color_D9D9D9">
                    Xem Thêm
                  </button>
                </div>
              </div>
            ))}
        </div>
        <div className="w-full flex justify-center items-center ">
          <button className="font-bold text-lg my-10 text-mainColor-color_D9D9D9 border px-5 py-2 rounded-full hover:bg-mainColor-color_2D0000 hover:border-mainColor-color_2D0000">
            Xem tất cả
          </button>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
