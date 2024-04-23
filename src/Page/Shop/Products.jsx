import bgProduct from "../../assets/BackgroundProduct.png";
import Cacanh from "../../assets/Cacanh.png";
function Products() {
  return (
    <div className="w-full  relative ">
      <img className=" h-[1400px] " src={bgProduct} alt=""></img>
      <div className="absolute top-[100px]   left-0 right-0 py-5  w-full">
        <div className="grid grid-cols-5">
          <div className="col-span-1 bg-white">
            <span className="flex justify-center mt-4 text-mainColor-color_01042D font-bold text-3xl">
              Cá cảnh
            </span>
          </div>
          <div className=" col-span-4 bg-white  bg-opacity-50">
            <div className="my-10">
              <div className="grid grid-cols-5 gap-6 mx-10 pt-5">
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
                      <div className="w-full flex justify-center items-center "></div>
                    </div>
                  ))}
              </div>
              <div className="flex  justify-center items-center">
                <button className="font-bold text-lg my-6  text-mainColor-color_2D0000 border px-5 py-2 rounded-full hover:bg-mainColor-color_D9D9D9 ">
                  Xem tất cả
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;
