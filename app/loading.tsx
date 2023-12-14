export default function Loading() {
  return (
    <div className="flex flex-col md:flex-row h-full w-full">
      <div className="w-ful md:w-5/12 bg-gray-400 h-screen animate-pulse"></div>
      <div className="w-full md:w-7/12 p-2 md:p-6">
        <div className="space-y-3 my-10 animate-pulse">
          <div className="grid grid-cols-3 gap-4 ">
            <div className="h-4 bg-zinc-200 dark:bg-zinc-700 rounded col-span-2"></div>
            <div className="h-4 bg-zinc-200 dark:bg-zinc-700 rounded col-span-1"></div>
          </div>
          <div className="h-4 bg-zinc-200 dark:bg-zinc-700 rounded"></div>
          <div className="h-4 bg-zinc-200 dark:bg-zinc-700 rounded"></div>
          <div className="h-4 w-60 bg-zinc-200 dark:bg-zinc-700 rounded"></div>
        </div>
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
