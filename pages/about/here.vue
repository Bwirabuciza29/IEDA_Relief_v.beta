<template>
    <div>
         <div
        class="relative mx-auto min-h-[160px] w-full overflow-hidden rounded-md bg-gray-900 sm:min-h-[350px] lg:min-h-[350px]"
      >
        <div
          class="top-0 z-20 w-full bg-gray-950 bg-opacity-70 px-1 py-1 backdrop-blur-lg"
        >
          <div class="-m-2 flex flex-wrap items-center justify-between">
            <div class="w-auto p-2">
              <div class="flex flex-row">
                <div class="w-auto p-1">
                  <div
                    class="h-2 w-2 rounded-full border border-red-500 bg-red-400"
                  ></div>
                </div>
                <div class="w-auto p-1">
                  <div
                    class="h-2 w-2 rounded-full border border-yellow-500 bg-yellow-400"
                  ></div>
                </div>
                <div class="w-auto p-1">
                  <div
                    class="h-2 w-2 rounded-full border border-green-500 bg-green-400"
                  ></div>
                </div>
              </div>
            </div>
            <div class="p-2">
              <div
                class="mx-auto max-w-xs rounded bg-white bg-opacity-5 px-4 py-0.5 text-center text-xs font-medium tracking-tight text-gray-400"
              >
                <span> IEDA Relief </span>
              </div>
            </div>
          </div>
        </div>

        <div>
          <video ref="video" class="plyr w-full rounded-lg shadow-lg" controls>
            <source src="/video/tr.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
</template>