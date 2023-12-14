export default function Loading() {
    return (
      <div className="search-page___container h-full ">
        <div className=" search-page___heading h-52 w-full flex flex-col justify-center items-center md:items-start bg-gradient-to-br from-slate-300 to-slate-50  pt-28 px-3 md:px-5">
          <div className="serach-bar__container flex flex-col md:flex-row gap-1 md:gap-3 w-80 items-start mb-5">
            <div className="flex-1 space-y-6 py-1 animate-pulse">
              <div className="h-4 w-60 bg-gray-400 dark:bg-zinc-700 rounded"></div>
              <div className="space-y-3">
                <div className="grid grid-cols-3 gap-4">
                  <div className="h-3 bg-gray-400 dark:bg-zinc-700 rounded col-span-2"></div>
                  <div className="h-3 bg-gray-400 dark:bg-zinc-700 rounded col-span-1"></div>
                </div>
                <div className="h-3 bg-gray-400 dark:bg-zinc-700 rounded"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="result___container   grid grid-cols-1 gap-2 md:gap-5 md:grid-cols-2 xl:grid-cols-3 mt-5 px-3 md:px-5">
          {[1, 2, 3, 4].map((num) => (
            <div
              className=" mt-2 bg-white dark:bg-zinc-800 p-4 ring-1 ring-zinc-900/5 rounded-lg shadow-lg w-full"
              key={num}
            >
              <div className="flex space-x-4 animate-pulse">
                <div className="rounded-md bg-zinc-200 dark:bg-zinc-700 w-[100px] aspect-square"></div>
                <div className="flex-1 space-y-6 py-1">
                  <div className="h-2 bg-zinc-200 dark:bg-zinc-700 rounded"></div>
                  <div className="space-y-3">
                    <div className="grid grid-cols-3 gap-4">
                      <div className="h-2 bg-zinc-200 dark:bg-zinc-700 rounded col-span-2"></div>
                      <div className="h-2 bg-zinc-200 dark:bg-zinc-700 rounded col-span-1"></div>
                    </div>
                    <div className="h-2 bg-zinc-200 dark:bg-zinc-700 rounded"></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
  