<template>
    <div
      class=" fixed w-full h-full bg-violet-900">
       
       <div class="flex justify-center">
     <div>  
       <div class="mb-12 xl:w-96">
         <label
           for="exampleNamapanjangInput2"
           class="form-label inline-block mb-2 text-gray-700 text-xl"
           >Status</label
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
           placeholder=" "
           v-model="status"
         />
       </div>
       <div class="mb-12 xl:w-96">
         <label
           for="exampleNamapanjangInput2"
           class="form-label inline-block mb-2 text-gray-700 text-xl"
           >Teknisi</label
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
           v-model="handler"
         />
       </div>
     
       <div>
         
       </div>
       <button class="inline-block rounded-lg bg-indigo-600 px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-indigo-600 hover:bg-indigo-700 hover:ring-indigo-700" @click="createpost">daftar</button>
   
       
   
      
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
            idpel: this.$route.params.id,
            status: "",
            handler: ""

           }
       },
   
       methods: {
          async createpost() {
           try {
               await axios.post(`http://localhost:4500/ubah/${this.idpel}`, {
                status: this.status,
                handler: this.handler
               });
               // this.nama = "";
               // // this.idpel_pel = "";
               this.$router.push('/tabel')
           } catch (err) {
               console.log(err)
           }
          }
       }
   }
   </script>