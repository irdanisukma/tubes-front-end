<template>
<table class="min-w-full border-collapse block md:table">
  <thead class="block md:table-header-group">
    <tr class="border border-grey-500 md:border-none block md:table-row absolute -top-full md:top-auto -left-full md:left-auto  md:relative ">
      <th class="bg-blue-900 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">Nama</th>
      <th class="bg-blue-900 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">ID Pelanggan</th>
      <th class="bg-blue-900 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">Status</th>
      <th class="bg-blue-900 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">Keluhan</th>
      <th class="bg-blue-900 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">Ditangani oleh</th>
      <th class="bg-blue-900 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">Pengaturan</th>
    </tr>
  </thead>
  <tbody class="block md:table-row-group">
    <tr class="bg-green-600 border border-grey-500 md:border-none block md:table-row" v-for="(namanya, index) in isi" :key="index" >
      <td class="p-2 md:border md:border-grey-500 text-left block md:table-cell" ><span class="inline-block w-1/3 md:hidden font-bold">Nama</span>{{ namanya.nama }}</td>
      <td class="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span class="inline-block w-1/3 md:hidden font-bold">ID Pelanggan</span>{{namanya.idpel}}</td>
      <td class="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span class="inline-block w-1/3 md:hidden font-bold">Status</span>{{namanya.status}}</td>
      <td class="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span class="inline-block w-1/3 md:hidden font-bold">Keluhan</span>{{namanya.keluhan}}</td>
      <td class="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span class="inline-block w-1/3 md:hidden font-bold">Ditangani oleh</span>{{namanya.handler}}</td>
      <td class="p-2 md:border md:border-grey-500 text-left block md:table-cell">
        <span class="inline-block w-1/3 md:hidden font-bold">Actions</span>
        <button class="bg-violet-600 hover:bg-violet-800 text-white font-bold py-1 px-2 border border-violet-500 rounded-full" @click="redirect(y=namanya.idpel)">Edit tracking</button> &nbsp;
        <button class="bg-indigo-600 hover:bg-indigo-800 text-white font-bold py-1 px-2 border border-indigo-500 rounded-full" @click="deleteUser(x=namanya)">Delete</button>
      </td>
    </tr>			
  </tbody>
</table>

&nbsp;<a href="http://localhost:5173/ngetes" class="inline-block rounded-full bg-indigo-600 px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-indigo-600 hover:bg-indigo-700 hover:ring-indigo-700">
                  tambah data{{ '' }}
                  <span class="text-indigo-200" aria-hidden="true">&rarr;</span>
                </a> &nbsp;
<a href="http://localhost:5173/" class="inline-block rounded-full bg-indigo-600 px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-indigo-600 hover:bg-indigo-700 hover:ring-indigo-700">
                  home{{ '' }}
                  <span class="text-indigo-200" aria-hidden="true">&rarr;</span>
                </a>

</template>

<script>
  import axios from 'axios'
  export default{
      data(){
          return{
              isi: "",
              nama: "",
              idpel: ''
          }
      },

      methods: {
        redirect(y){
          console.log(y)
          this.$router.push(`/updateadmin/${this.y}`)
        },

        async deleteUser(x){
          try {
            await axios.post("http://localhost:4500/hapus",{
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