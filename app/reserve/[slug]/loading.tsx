export default function Loading() {
  return (
    <div className="flex flex-col md:flex-row h-full w-full animate-pulse">
      <div className="w-ful md:w-5/12 bg-gray-400 h-screen  p-2 md:p-4">
        <div className="mt-20  grid">
          <div className="h-5 bg-zinc-200 w-60 dark:bg-zinc-700 rounded"></div>
        </div>
        <div className="space-y-3 mt-5 mb-10 ">
          <div className="grid grid-cols-3 gap-4 ">
            <div className="h-4 bg-zinc-200 dark:bg-zinc-700 rounded col-span-2"></div>
            <div className="h-4 bg-zinc-200 dark:bg-zinc-700 rounded col-span-1"></div>
          </div>
          <div className="h-4 bg-zinc-200 dark:bg-zinc-700 rounded"></div>
          <div className="h-4 bg-zinc-200 dark:bg-zinc-700 rounded"></div>
          <div className="h-4 w-60 bg-zinc-200 dark:bg-zinc-700 rounded"></div>
        </div>

        <div className="mt-20  grid">
          <div className="h-5 bg-zinc-200 w-60 dark:bg-zinc-700 rounded"></div>
        </div>
        <div className="space-y-3 mt-5 mb-10 ">
          <div className="grid grid-cols-3 gap-4 ">
            <div className="h-4 bg-zinc-200 dark:bg-zinc-700 rounded col-span-2"></div>
            <div className="h-4 bg-zinc-200 dark:bg-zinc-700 rounded col-span-1"></div>
          </div>
          <div className="h-4 bg-zinc-200 dark:bg-zinc-700 rounded"></div>
          <div className="h-4 bg-zinc-200 dark:bg-zinc-700 rounded"></div>
          <div className="h-4 w-60 bg-zinc-200 dark:bg-zinc-700 rounded"></div>
        </div>
        <div className="flex flex-col gap-4">
          <div className=" dark:bg-zinc-800  ring-1 ring-zinc-900/5 rounded-lg  w-full">
            <div className="flex space-x-4  items-center">
              <div className="rounded-full bg-zinc-200 dark:bg-zinc-700 w-[60px] aspect-square"></div>
              <div className="flex-1 space-y-6 py-1">
                <div className="h-4 bg-zinc-200 dark:bg-zinc-700 w-2/3 rounded"></div>
                <div className="h-2 bg-zinc-200 dark:bg-zinc-700 w-3/4 rounded"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full md:w-7/12 p-2 md:p-6"></div>
    </div>
  );
}
