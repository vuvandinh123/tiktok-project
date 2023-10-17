import Data from "./Data";

const Home = () => {
  return (
    <>
      <div>
        <div className="flex justify-between items-center">
          <h1>
            <span className="font-bold">Vux van dinh</span> TikTok Thống kê phân
            tích đơn hàng TikTok
          </h1>
          <div className="flex items-center gap-3">
            <div className="bg-black rounded-full w-8 h-8 flex justify-center items-center">
              <i className="fa-brands text-white text-base fa-tiktok"></i>
            </div>
            <span className="rounded-xl text-gray-600 hover:text-black hover:bg-[#f2f5fc]  bg-[#F7F8FA] transition-all duration-150 cursor-pointer font-bold px-3 py-2 text-center ">
              <i className="fa-regular fa-heart"></i>
            </span>
            <span className="rounded-xl text-gray-600 hover:text-black hover:bg-[#f2f5fc]  bg-[#F7F8FA] transition-all duration-150 cursor-pointer font-bold px-3 py-2 text-center ">
              <i className="fa-solid fa-envelope"></i>
            </span>
          </div>
        </div>
        <div className="bg-[#FEFAF6] mt-5 rounded-lg p-5 py-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-5">
              <div className="w-10 h-10 rounded-full">
                <img
                  className="w-full h-full"
                  src="https://res-kol.noxgroup.com/noxinfluencer/tiktok/avatar/0116b99fdf17543c8ba53953e6f62480.png"
                  alt=""
                />
              </div>
              <div>
                <h2 className="font-bold">Vux van dinh</h2>
                <div>
                  <span className="pr-2 text-[12px] border-r border-black">
                    Việt Nam
                  </span>
                  <span className="text-[12px]  ml-2">Tiêng việt</span>
                </div>
              </div>
            </div>
            <div className="flex items-end gap-7">
              <div>
                <span className="text-gray-500">Đơn hàng</span>
                <p className="text-center font-medium">12</p>
              </div>
              <div>
                <span className="text-gray-500">Lượng người truy cập</span>
                <p className="text-center font-medium">100.000/day</p>
              </div>
              <div>
                <span className="text-gray-500">Doanh thu</span>
                <p className="text-center font-medium">12.341 vnd</p>
              </div>
              <div>
                <span className="text-gray-500">Tỷ lệ tương tác</span>
                <p className="text-center font-medium">21%</p>
              </div>
            </div>
          </div>
        </div>
        <Data/>
      </div>
    </>
  );
};

export default Home;
