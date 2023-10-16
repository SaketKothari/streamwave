const ChatSidebar = () => {
  return (
    <>
      <div className="fixed right-full top-[77px] z-10 h-full w-full border-white bg-[#121212] transition-all duration-300 ease-in-out peer-focus:right-0 md:static md:block md:w-[30%] md:border-r-[1px]">
        <div className="flex w-full items-center justify-start gap-2 border-b-[1px] border-white p-4">
          <input
            placeholder="Search chat..."
            className="w-full bg-transparent px-2 text-white !outline-none placeholder:text-gray-500 md:px-4"
          />
          <button className="inline-flex h-7 w-7 flex-shrink-0 items-center justify-center border-[1px] border-white p-1 md:h-10 md:w-10">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              aria-hidden="true"
              className="h-5 w-5 text-white"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              ></path>
            </svg>
          </button>
          <button className="hidden h-10 w-10 flex-shrink-0 items-center justify-center border-[1px] border-white p-1 md:inline-flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              aria-hidden="true"
              className="h-5 w-5 text-white"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 01-.659 1.591l-5.432 5.432a2.25 2.25 0 00-.659 1.591v2.927a2.25 2.25 0 01-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 00-.659-1.591L3.659 7.409A2.25 2.25 0 013 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0112 3z"
              ></path>
            </svg>
          </button>
        </div>

        <ul className="flex h-[calc(100%-140px)] w-full flex-col items-start justify-start divide-y-[1px] divide-white overflow-y-auto md:h-[calc(100%-73px)]">
          <li className="w-full cursor-pointer p-4 hover:bg-[#232323] md:p-6">
            <div className="flex w-full items-start justify-start gap-3 md:gap-4">
              <img
                className="flex aspect-square h-10 w-10 flex-shrink-0 rounded-full object-cover"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxV7iH2pAv3DtP9WGGXac_Y07mDVoduYXXMVjNHWNf-zfjn2I-ipiqY2CDonDrw6KPt3w&usqp=CAU"
                alt="avatar"
              />
              <div className="flex w-full flex-col items-start justify-start gap-1 truncate text-ellipsis">
                <div className="flex w-full items-center justify-between text-[10px] md:text-xs">
                  <p className="text-gray-400">Kevin Malone</p>
                  <p className="text-gray-400">2 hours ago</p>
                </div>
                <p className="text-xs text-white md:text-sm">
                  I can't keep doing this forever. It's been 20 seconds.
                </p>
              </div>
            </div>
          </li>
          <li className="w-full cursor-pointer p-4 hover:bg-[#232323] md:p-6">
            <div className="flex w-full items-start justify-start gap-3 md:gap-4">
              <img
                className="flex aspect-square h-10 w-10 flex-shrink-0 rounded-full object-cover"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQW0WNgYDBHtvIoazRrA4sQzRtRZpohLrL80g&usqp=CAU"
                alt="avatar"
              />
              <div className="flex w-full flex-col items-start justify-start gap-1 truncate text-ellipsis">
                <div className="flex w-full items-center justify-between text-[10px] md:text-xs">
                  <p className="text-gray-400">Michael Scott</p>
                  <p className="text-gray-400">Yesterday</p>
                </div>
                <p className="text-xs text-white md:text-sm">
                  That's what she said!
                </p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};

export default ChatSidebar;
