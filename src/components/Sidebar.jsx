const Sidebar = () => {
  return (
    <div className="fixed w-[250px] bg-white mt-[80px] py-5 px-5 ">
      <div>
        <ul className="leading-9">
          <li className="capitalize font-medium px-3 py-1 cursor-pointer transition-all duration-200 text-gray-500 hover:text-black text-[15px] rounded-lg hover:bg-[#f2f5fc]">
            <i className="fa-solid fa-compass me-2"></i> tìm kiếm
          </li>
          <li className="capitalize font-medium px-3 py-1 cursor-pointer  transition-all duration-200  text-gray-500 hover:text-black text-[15px] rounded-lg hover:bg-[#f2f5fc]">
            <i className="fa-solid fa-copyright me-3"></i>nhãn hiệu
          </li>
          <li className="capitalize font-medium px-3 py-1 cursor-pointer  transition-all duration-200  text-gray-500 hover:text-black text-[15px] rounded-lg hover:bg-[#f2f5fc]">
            <i className="fa-solid fa-heart me-3"></i>Yêu thích
          </li>
          <li className="capitalize font-medium px-3 py-1 cursor-pointer  transition-all duration-200  text-gray-500 hover:text-black text-[15px] rounded-lg hover:bg-[#f2f5fc]">
            <i className="fa-solid fa-note-sticky me-3"></i> Chiến dịch quảng
            cáo
          </li>
          <li className="capitalize font-medium px-3 py-1 cursor-pointer  transition-all duration-200  text-gray-500 hover:text-black text-[15px] rounded-lg hover:bg-[#f2f5fc]">
            <i className="fa-solid fa-compass me-3"></i>Chi tiết đơn hàng
          </li>
          <li className="capitalize font-medium px-3 py-1 cursor-pointer  transition-all duration-200  text-gray-500 hover:text-black text-[15px] rounded-lg hover:bg-[#f2f5fc]">
            <i className="fa-solid fa-laptop me-2"></i> Thống kê
          </li>
          <li className="capitalize font-medium px-3 py-1 cursor-pointer  transition-all duration-200  text-gray-500 hover:text-black text-[15px] rounded-lg hover:bg-[#f2f5fc]">
            <i className="fa-solid fa-gear me-3"></i> Cài đặt
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
