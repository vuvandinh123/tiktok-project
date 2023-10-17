const Data = () => {
  return (
    <>
      <div>
        <ul className="flex items-center gap-5">
          <li className="text-red-500 font-medium  border-b-[2px] hover:text-red-600 cursor-pointer py-4 border-red-500">
            <i className="fa-solid fa-table-cells-large me-3"></i> Tổng quan số
            liệu
          </li>
          <li className=" font-medium cursor-pointer py-4 after:contents-[''] after:block after:absolute relative after:left-[50%] after:right-[50%] after:h-[2px] after:bg-red-500 after:bottom-0 hover:after:left-0 hover:after:right-0 after:transition-all  after:duration-300 hover:text-red-500 transition-all duration-150">
            <i className="fa-solid fa-user-group"></i> Người xem
          </li>
          <li className=" font-medium cursor-pointer py-4 after:contents-[''] after:block after:absolute relative after:left-[50%] after:right-[50%] after:h-[2px] after:bg-red-500 after:bottom-0 hover:after:left-0 hover:after:right-0 after:transition-all  after:duration-300 hover:text-red-500 transition-all duration-150">
            <i className="fa-brands fa-product-hunt me-2"></i> Sản phẩm bán chạy
          </li>
        </ul>
        <div className="py-10 px-5 bg-[#F7F8FA]">
          <div className="flex items-center gap-2 capitalize font-semibold">
            <span className="block w-3 h-3 rounded-full bg-red-500"></span>
            số liệu chung
          </div>
          <div className="my-5">
            <div className="grid gap-7 grid-cols-4 ">
              <div className="rounded-xl bg-white relative p-5">
                <span className="font-semibold">Đơn hàng</span>
                <img
                  className="absolute top-0 right-0 opacity-10"
                  src="https://res-static.noxinfluencer.com/kol20/2023/10/public/img/poor.96f9bbeed33381baed1dd0861ca34077.svg"
                  alt=""
                />
                <div className="flex mt-10 justify-between items-center">
                  <span className="text-xl font-semibold">12</span>
                  <span className="text-red-400 font-bold">Kém</span>
                </div>
                <div className="mt-5">
                  <p className="text-gray-400 text-[12px]">-- Mỗi 30 ngày</p>
                  <p className="text-gray-400 text-[12px] mt-3">
                    0.63%-2.64% là số liệu ước tính tăng trưởng người xem trung
                    bình dựa trên quy mô của KOL
                  </p>
                </div>
              </div>
              <div className="rounded-xl bg-white relative p-5">
                <span className="font-semibold">Doanh thu tháng</span>
                <img
                  className="absolute top-0 right-0 opacity-10"
                  src="https://res-static.noxinfluencer.com/kol20/2023/10/public/img/average.65c31a6c999a64542c888ac0d32104ff.svg"
                  alt=""
                />
                <div className="flex mt-10 justify-between items-center">
                  <span className="text-xl font-semibold">6.943.124 <span className="text-[10px]">vnd</span></span>
                  <span className="text-red-400 font-bold">Tầm trung</span>
                </div>
                <div className="mt-5">
                  <p className="text-gray-400 text-[12px]">-- Mỗi 30 ngày</p>
                  <p className="text-gray-400 text-[12px] mt-3">
                    0.63%-2.64% là số liệu ước tính tăng trưởng người xem trung
                    bình dựa trên quy mô của KOL
                  </p>
                </div>
              </div>
              <div className="rounded-xl bg-white relative p-5">
                <span className="font-semibold">Lượng người truy cập</span>
                <img
                  className="absolute top-0 right-0 opacity-10"
                  src="https://res-static.noxinfluencer.com/kol20/2023/10/public/img/poor.96f9bbeed33381baed1dd0861ca34077.svg"
                  alt=""
                />
                <div className="flex mt-10 justify-between items-center">
                  <span className="text-xl font-semibold">12.000 <span className="text-[10px]">người</span></span>
                  <span className="text-red-400 font-bold">Kém</span>
                </div>
                <div className="mt-5">
                  <p className="text-gray-400 text-[12px]">-- Mỗi 30 ngày</p>
                  <p className="text-gray-400 text-[12px] mt-3">
                    0.63%-2.64% là số liệu ước tính tăng trưởng người xem trung
                    bình dựa trên quy mô của KOL
                  </p>
                </div>
              </div>
              <div className="rounded-xl bg-white relative p-5">
                <span className="font-semibold">Số sao</span>
                <img
                  className="absolute top-0 right-0 opacity-10"
                  src="https://res-static.noxinfluencer.com/kol20/2023/10/public/img/poor.96f9bbeed33381baed1dd0861ca34077.svg"
                  alt=""
                />
                <div className="flex mt-10 justify-between items-center">
                  <span className="text-xl font-semibold">4.8</span>
                  <span className="text-red-400 font-bold">Tốt</span>
                </div>
                <div className="mt-5">
                  <p className="text-gray-400 text-[12px]">-- Mỗi 30 ngày</p>
                  <p className="text-gray-400 text-[12px] mt-3">
                    0.63%-2.64% là số liệu ước tính tăng trưởng người xem trung
                    bình dựa trên quy mô của KOL
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Data;
