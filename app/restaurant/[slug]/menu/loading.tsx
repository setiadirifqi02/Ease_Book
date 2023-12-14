export default function Loading() {
  return (
    <div>
      <div className=" menu___content flex flex-col w-full h-full pt-20 pb-10 px-3 md:px-5 animate-pulse bg-gradient-to-br from-slate-300 to-slate-50">
        <div className="flex flex-col gap-4 p-5">
          <div className="h-4 w-60 bg-zinc-200 dark:bg-zinc-700 rounded"></div>
          <div className="h-4 w-40 bg-zinc-200 dark:bg-zinc-700 rounded"></div>
        </div>
        <div className="grid grid-cols-1 gap-2 md:gap-5 md:grid-cols-2 xl:grid-cols-3 mt-5 px-3 md:px-5">
          {[1, 2, 3, 4, 5, 6].map((num) => (
            <div
              className="bg-white dark:bg-zinc-800 p-4 ring-1 ring-zinc-900/5 rounded-lg shadow-lg w-full"
              key={num}
            >
              <div className="flex space-x-4">
                <div className="flex-1 space-y-6 p-1 md:p-4 h-[140px]">
                  <div className="h-3 w-60 bg-zinc-200 dark:bg-zinc-700 rounded"></div>
                  <div className="space-y-3">
                    <div className="grid grid-cols-3 gap-4">
                      <div className="h-2 bg-zinc-200 dark:bg-zinc-700 rounded col-span-2"></div>
                      <div className="h-2 bg-zinc-200 dark:bg-zinc-700 rounded col-span-1"></div>
                    </div>
                    <div className="h-2 bg-zinc-200 dark:bg-zinc-700 rounded"></div>
                    <div className="h-2 w-40 bg-zinc-200 dark:bg-zinc-700 rounded"></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
