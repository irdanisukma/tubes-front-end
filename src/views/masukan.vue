<template>
    <ngetes>
        
        <div
        class="w-full h-full bg-no-repeat bg-cover"
        style="background-image: url('https://images.pexels.com/photos/1587014/pexels-photo-1587014.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2');">
        
        <div class="flex justify-center">
        <div>
        <div class="mb-12 xl:w-96">
            <label
            for="exampleNamapanjangInput2"
            class="form-label inline-block mb-2 text-gray-700 text-xl"
            >Nama</label
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
            v-model="nama"
            />
        </div>
        
        <div class="mb-12 xl:w-96">
            <label
            for="exampleNamapanjangInput2"
            class="form-label inline-block mb-2 text-gray-700 text-xl"
            >ID pelanggan</label
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
            placeholder="Id pelanggan"
            v-model="idpel"
            
            />
        </div>
        <div class="mb-12 xl:w-96">
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
        </div>
        <div class="mb-12 xl:w-96">
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
        </div>
        <button class="inline-block rounded-lg bg-indigo-600 px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-indigo-600 hover:bg-indigo-700 hover:ring-indigo-700" @click="updateData(x=idpel)">daftar</button>
    
        
    
        
        </div>
        </div>
    </div>
   </ngetes>
   </template>
   
   <script>
   import axios from "axios"
   export default {
       name: 'newUser',
       data(){
           return {
               nama: "",
               idpel: "",
               // idpel_pel: "",
           }
       },
   
       methods: {
        async updateData(x){
          try {
            await axios.post("http://localhost:4500/ubah",{
              nama: this.nama,
              idpel: x.idpel

            });
            location.reload()
          } catch (err) {
            console.log(err)
            
          }
        }
       },
       
       async mounted(){
          const response = await axios.get(`http://localhost:4500/ambil`)
          this.isi = response.data
      }
   }
   </script>