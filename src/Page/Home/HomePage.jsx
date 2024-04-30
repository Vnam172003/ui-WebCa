import Image from "../../assets/ImageHeader.svg";
import Title from "../../assets/TitleHeadersvg.svg";
import Image1 from "../../assets/ImgaeHome.png";
import Image3 from "../../assets/ImageFish.png";

function HomePage() {
  return (
    <div className="pt-40">
      <div className="  rounded-2xl mb-20  mx-48 bg-gradient-to-b from-mainColor-color_01042D to-mainColor-color_D9D9D9 shadow-lg ">
        <div className="flex justify-center gap-1">
          <img src={Title} alt="" />
          <img src={Image} alt="" />
        </div>
      </div>
      <div className="my-20">
        <div className="grid grid-cols-2 mx-20 gap-5 ">
          <div className="pt-20 col-span-1 text-mainColor-color_D9D9D9">
            <h1 className="font-bold text-3xl mb-5">Về chúng tôi</h1>
            <p className="font-bold text-xl mb-5">
              Chào mừng đến với thế giới bí ẩn và phong phú của cá cảnh!
            </p>
            <p>
              Cá cảnh không chỉ là những sinh vật sống trong bể cá, mà còn là
              những người bạn đồng hành đầy màu sắc và sức sống. Với sự đa dạng
              về hình dáng, kích thước và màu sắc, từ những chú cá nhỏ bé như cá
              vàng tinh nghịch cho đến những loài cá cỡ lớn và mạnh mẽ như cá
              điện, thế giới của cá cảnh là một thế giới đầy sức sống và kỳ
              diệu.
            </p>
          </div>
          <div className="">
            <img src={Image1} alt="" />
          </div>
        </div>
        <div className="pt-20">
          <img src={Image3} alt="" />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
