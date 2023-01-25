<template>
  <div
    class=" fixed w-full h-full bg-no-repeat bg-cover"
    style="background-image: url('https://images.pexels.com/photos/1587014/pexels-photo-1587014.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2');">
     
     <div class="flex justify-center">
      
   <div>
    <div class="my-3 text-4xl font-bold tracking-tight  sm:text-2xl">
    <a1>Silahkan Masukan Keluhan Anda</a1>
    <br>
  </div>
     <div class=" border-spacing-0 mb-12 xl:w-96">
       <label
         for="exampleNamapanjangInput2"
         class="form-label inline-block mb-2 text-gray-700 text-xl"
         >Nama pelanggan</label
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
         placeholder="Contoh Irdani"
         v-model="nama"
       />
     </div>
     
     <div class="mb-12 xl:w-96">
       <label
         for="exampleNamapanjangInput2"
         class="form-label inline-block mb-2 text-gray-700 text-xl"
         >ID Pelanggan</label
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
     <div class="mb-12 xl:w-96">
       <label
         for="exampleNamapanjangInput2"
         class="form-label inline-block mb-2 text-gray-700 text-xl"
         >Keluhan</label
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
         placeholder="Contoh Komputer saya rusak "
         v-model="keluhan"
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
     <button class="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 motion-reduce:transition-none motion-reduce:hover:transform-none inline-block rounded-full bg-indigo-600 px-4 py-2 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-indigo-600 hover:bg-indigo-700 hover:ring-indigo-700" @click="createpost">Kirim</button>
 
     
 
    
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
       nama: "",
       idpel: "",
       status: "Belum dicek",
       keluhan: "",
       handler: "Belum ada yang ditugaskan"
       // idpel_pel: "",
         }
     },
 
     methods: {
        async createpost() {
     try {
       await axios.post(`http://localhost:4500/tambah`, {
         nama: this.nama,
         idpel: this.idpel,
         status: this.status,
         keluhan: this.keluhan,
         handler: this.handler
         // idpel: this.idpel_pel,
       });
       // this.nama = "";
       // // this.idpel_pel = "";
       this.$router.push(`/kolom/${this.idpel}`)
     } catch (err) {
       console.log(err)
     }
      }
     }
 }
 </script>