import { useState } from "react";
import Login from "./Login/Login";
import Register from "./Register/Register";
import Image from "../../assets/ImageAuth.png";
function PageAuth() {
  const [isLogin, setIslogin] = useState(true);
  const handleSetLoginState = (value) => {
    setIslogin(value);
  };
  return (
    <div className="  ">
      <div className="grid grid-cols-2">
        <div className="col-span-1">
          {isLogin ? (
            <Login setIsLogin={handleSetLoginState} />
          ) : (
            <Register setIsLogin={handleSetLoginState} />
          )}
        </div>
        <div className="col-span-1">
          <img src={Image} alt="" width={800} />
        </div>
      </div>
    </div>
  );
}

export default PageAuth;
