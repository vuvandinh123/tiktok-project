const Header = () => {
  return (
    <div className="fixed z-50 top-0 left-0 right-0 bg-white px-5 py-5">
      <div className="grid grid-cols-2 gap-5">
        <div className="flex items-center gap-10  justify-around">
          <div className="w-50">
            <img
              src="https://res-static.noxinfluencer.com/kol20/2023/10/public/img/main-logo.e8409dd19e086efe73ffb2118c780dc1.png"
              alt=""
            />
          </div>
          <div className="flex items-center gap-3 ">
            <h1 className=" ">TIK TOK</h1>
            <div className="basis-2/4">
              <form action="" method="post" className="relative">
                <button className="absolute left-3 top-[10px] text-gray-300">
                  <i className="fa-solid fa-magnifying-glass"></i>
                </button>
                <input
                  type="text"
                  placeholder="Tìm kiếm..."
                  className="rounded-xl border border-white focus:border focus:border-red-500 pl-10 w-[300px] text-[13px] px-4 py-3  outline-none bg-[#F7F8FA]"
                />
              </form>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-5 justify-end">
          <span className="rounded-lg text-red-500 hover:bg-red-500 hover:text-white transition-all duration-150 cursor-pointer font-bold px-10 py-2 text-center bg-[#FFF3EB]">
            <i className="fa-brands fa-tiktok"></i> Giá
          </span>
          <span className="rounded-xl text-gray-600 hover:text-black hover:bg-[#f2f5fc]  bg-[#F7F8FA] transition-all duration-150 cursor-pointer font-bold px-3 py-2 text-center ">
            <i className="fa-regular fa-comment text-base"></i>
          </span>
          <span className="rounded-xl text-gray-600 hover:text-black hover:bg-[#f2f5fc]  bg-[#F7F8FA] transition-all duration-150 cursor-pointer font-bold px-3 py-2 text-center ">
            <i className="fa-solid fa-bell"></i>
          </span>
          <span className="rounded-xl text-gray-600 hover:text-black hover:bg-[#f2f5fc]  bg-[#F7F8FA] transition-all duration-150 cursor-pointer font-bold px-3 py-2 text-center ">
            <i className="fa-solid fa-layer-group"></i>
          </span>
          <select
            name=""
            className="rounded-lg outline-none bg-[#f2f5fc] px-4 py-2"
            id=""
          >
            <option value="">Tiếng Việt</option>
            <option value="">Tiếng Anh</option>
          </select>
          <div className="rounded-full w-10 h-10 outline-none bg-[#f2f5fc] ">
            <img
            className="w-full h-full"
              src="https://res06.bignox.com/noxinfluencer/youtube/studio/b043c298b52515b4864f2952fc9e6325/GDFBEJEGFxeKkti1635148464537.png"
              alt=""
            />

          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
