import { useState } from "react";
import { useCart } from "react-use-cart";
import { formatPrice } from "../../helper/formatPrice";
import { Link } from "react-router-dom";

function CartHeader() {
  const [showPopover, SetShowPopover] = useState(false);
  const {
    isEmpty,
    totalUniqueItems,
    items,
    updateItemQuantity,
    removeItem,
    cartTotal,
  } = useCart();
  return (
    <div className="">
      <div
        className="flex gap-3 items-center bg-mainColor-color_D9D9D9  p-2 rounded-full cursor-pointer"
        onClick={() => SetShowPopover(!showPopover)}
      >
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

        <span className="font-bold text-mainColor-color_2D0000 ">giỏ hàng</span>
        <div className="text-mainColor-color_D9D9D9  bg-mainColor-color_2D0000 rounded-full px-1 ">
          {totalUniqueItems}
        </div>
      </div>
      {showPopover && (
        <div className="absolute grid grid-cols-3  top-0 right-0 w-screen h-screen">
          <div className="col-span-2 bg-black bg-opacity-80"></div>
          <div className="col-span-1 bg-mainColor-color_D9D9D9  py-7 px-5 ">
            <div className=" flex justify-between ">
              <div className="text-mainColor-color_2D0000 mb-5 font-bold text-2xl">
                Cart
              </div>

              <div onClick={() => SetShowPopover(false)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-7 h-7  text-mainColor-color_2D0000"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18 18 6M6 6l12 12"
                  />
                </svg>
              </div>
            </div>
            {isEmpty && (
              <div className="w-full ml-[160px]">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVjmkIdnfe6jp3_eEG7WOuqzOWq8naU-G42JY2DazwD-Tdt_qwqhbS5A9sRTUY-7SsDB0&usqp=CAU"
                  alt=""
                />
              </div>
            )}
            {items.slice(0, 8).map((item) => (
              <tr key={item.id}>
                <td className="align-middle">
                  <img src={item.imgUrl} alt="" width={300} />
                </td>
                <td className="align-middle pb-3 px-6 text-mainColor-color_2D0000 ">
                  {item.name}
                </td>
                <td className="align-middle py-5 px-5 text-mainColor-color_2D0000">
                  {formatPrice(item.price * item.quantity)}
                </td>
                <td className="align-middle text-mainColor-color_2D0000 flex gap-2 p-5">
                  <button
                    className="text-2xl"
                    onClick={() =>
                      updateItemQuantity(item.id, item.quantity - 1)
                    }
                  >
                    -
                  </button>
                  <div className="text-lg ">{item.quantity}</div>
                  <button
                    className="text-2xl"
                    onClick={() =>
                      updateItemQuantity(item.id, item.quantity + 1)
                    }
                  >
                    +
                  </button>
                </td>
                <td className="align-middle py-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 text-mainColor-color_2D0000"
                    onClick={() => removeItem(item.id)}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5m6 4.125 2.25 2.25m0 0 2.25 2.25M12 13.875l2.25-2.25M12 13.875l-2.25 2.25M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z"
                    />
                  </svg>
                </td>
              </tr>
            ))}
            {!isEmpty && (
              <div className="flex justify-between mt-8">
                <div className="text-mainColor-color_2D0000 px-3 py-5  text-center  text-lg">
                  Tổng sản phẩm : {formatPrice(cartTotal)}
                </div>
                <Link
                  to={"/pay"}
                  className="bg-mainColor-color_2D0000 px-6 py-5 text-center hover:bg-mainColor-color_01042D  cursor-pointer"
                >
                  mua ngay
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default CartHeader;
