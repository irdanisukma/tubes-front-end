<template>
    <div
      class=" fixed w-full h-full bg-no-repeat bg-violet-900">
       
       <div class="flex justify-center">
     <div>
       <div class="border-spacing-0 mb-12 xl:w-96">
         <label
           for="exampleNamapanjangInput2"
           class=" form-label inline-block mb-2 text-white font-bold text-xl"
           >Masukan ID Pelanggan</label
         >
         <input
           type="text"
           class="
             form-control
             block
             w-full
             px-4
             py-2
             text-xl
             font-normal
             text-gray-700
             bg-white bg-clip-padding
             border border-solid border-gray-300
             rounded
             transition
             ease-in-out
             m-0
             focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
           "
           id="exampleFormControlInput2"
           placeholder="Contoh 68XXX"
           v-model="idpel"
         />
       
       </div>
       <!-- <div class="mb-12 xl:w-96">
         <label
           for="exampleNamapanjangInput2"
           class="form-label inline-block mb-2 text-gray-700 text-xl"
           >Nama panjang</label
         >
         <input
           type="text"
           class="
             form-control
             block
             w-full
             px-4
             py-2
             text-xl
             font-normal
             text-gray-700
             bg-white bg-clip-padding
             border border-solid border-gray-300
             rounded
             transition
             ease-in-out
             m-0
             focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
           "
           id="exampleFormControlInput2"
           placeholder="Nama panjangmu sopo blok"
         />
       </div> -->
       <div>
         
       </div>
       <button class="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 motion-reduce:transition-none motion-reduce:hover:transform-none inline-block rounded-full bg-indigo-600 px-4 py-2 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-indigo-600 hover:bg-indigo-700 hover:ring-indigo-700" @click="pindah">Cari</button>&nbsp;
       <a href="http://localhost:5173/" class="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 motion-reduce:transition-none motion-reduce:hover:transform-none inline-block rounded-full bg-indigo-600 px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-indigo-600 hover:bg-indigo-700 hover:ring-indigo-700">
                  home{{ '' }}
                  <span class="text-indigo-200" aria-hidden="true">&rarr;</span>
                </a>
   
       
   
      
     </div>
     </div>
   </div>
   </template>
   
   <script>
   import axios from "axios"
   export default {
     name: 'newUser',
       data(){
           return {
         idpel: ""
           }
       },
       methods:{
            pindah(){
                this.$router.push(`/kolom/${this.idpel}`);
            }
       }
   }
   </script>