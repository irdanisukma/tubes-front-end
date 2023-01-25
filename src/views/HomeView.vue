
<template>
  <div
   class="fixed w-full h-full bg-no-repeat bg-cover"
   style="background-image: url('');">
    
     
     
    </div>
    <div class="px-6 pt-6 lg:px-8">
      <div>
        <nav class="flex h-9 items-center justify-between" aria-label="Global">
          <div class="flex lg:min-w-0 lg:flex-1" aria-label="Global">
            <a href="#" class="-m-1.5 p-1.5">
              <span class="sr-only">logo perusahaan</span>
              <img class="h-8" src="https://cdn-icons-png.flaticon.com/512/4840/4840318.png" alt="" />
            </a>
          </div>
        </nav>
        <Dialog as="div">
          <DialogPanel focus="true" class="fixed inset-0 z-10 overflow-y-auto bg-white px-6 py-6 lg:hidden">
            <div class="flex h-9 items-center justify-between">
             
             
            </div>
            <div class="mt-6 flow-root">
              <div class="-my-6 divide-y divide-gray-500/10">
                <div class="space-y-2 py-6">
                 
                </div>
                
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </div>
    </div>
    <main>
      <div class="relative px-6 lg:px-8">
        <div class="mx-auto max-w-3xl pt-20 pb-32 sm:pt-48 sm:pb-40">
          <div>
            <div class="hidden sm:mb-8 sm:flex sm:justify-center">
              
            </div>
            <div>
              <h1 class="text-4xl font-bold tracking-tight sm:text-center sm:text-6xl font-serif">Helpdesk Internet</h1>
              <p class="mt-6 text-lg leading-8 text-gray-600 sm:text-center font-black">Kami akan membantu setiap keluhan anda dengan ramah</p>
              <div class="mt-8 flex gap-x-4 sm:justify-center">
                <a href="http://localhost:5173/barulagi" class="inline-block rounded-full bg-indigo-600 px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-indigo-600 hover:bg-indigo-700 hover:ring-indigo-700">
                  lanjut{{ '' }}
                  <span class="text-indigo-200" aria-hidden="true">&rarr;</span>
                </a>
                <a href="http://localhost:5173/cari" class="inline-block rounded-full bg-indigo-600 px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-indigo-600 hover:bg-indigo-700 hover:ring-indigo-700">
                  cek status keluhan anda{{ '' }}
                  <span class="text-indigo-200" aria-hidden="true">&rarr;</span>
                </a>
                <a href="http://localhost:5173/tabel" class="inline-block rounded-full bg-indigo-600 px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-indigo-600 hover:bg-indigo-700 hover:ring-indigo-700">
                  login admin{{ '' }}
                  <span class="text-indigo-200" aria-hidden="true">&rarr;</span>
                </a>
                
               
              </div>
            </div>
           
          </div>
        </div>
      </div>
    </main>

</template>