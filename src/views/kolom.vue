<template>
  <table class="min-w-full border-collapse block md:table">
    <thead class="block md:table-header-group">
      <tr class="border border-grey-500 md:border-none block md:table-row absolute -top-full md:top-auto -left-full md:left-auto  md:relative ">
        <th class="bg-blue-900 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">Nama</th>
        <th class="bg-blue-900 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">ID Pelanggan</th>
        <th class="bg-blue-900 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">Status</th>
        <th class="bg-blue-900 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">Keluhan</th>
        <th class="bg-blue-900 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">Ditangani oleh</th>

      </tr>
    </thead>
    <tbody class="block md:table-row-group">
      <tr class="bg-green-600 border border-grey-500 md:border-none block md:table-row">
        <td class="p-2 md:border md:border-grey-500 text-left block md:table-cell" ><span class="inline-block w-1/3 md:hidden font-bold">Nama</span>{{ namanya}}</td>
        <td class="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span class="inline-block w-1/3 md:hidden font-bold">ID Pelanggan</span>{{idpelnya}}</td>
        <td class="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span class="inline-block w-1/3 md:hidden font-bold">Status</span>{{statusnya}}</td>
        <td class="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span class="inline-block w-1/3 md:hidden font-bold">Keluhan</span>{{keluhnya}}</td>
        <td class="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span class="inline-block w-1/3 md:hidden font-bold">Ditangani oleh</span>{{handlernya}}</td>
        
      </tr>			
    </tbody>
  </table>
  
  <a href="http://localhost:5173/" class="inline-block rounded-full bg-indigo-600 px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-indigo-600 hover:bg-indigo-700 hover:ring-indigo-700">
                    Home{{ '' }}
                    <span class="text-indigo-200" aria-hidden="true">&rarr;</span>
                  </a> &nbsp; 
                  <a @click="reloadnya" class="inline-block rounded-full bg-indigo-600 px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-indigo-600 hover:bg-indigo-700 hover:ring-indigo-700">
                    Refresh halaman
                  </a>
                  
  </template>
  
  <script> 
    import axios from 'axios'
    export default{
        data(){
            return{
                namanya: null,
                idpelnya: null,
                statusnya: null,
                keluhnya: null,
                handlernya: null

            }
        },

        created(){
          this.getDatanama();
          this.getDataidpel();
          this.getDatastatus();
          this.getDatakeluhan();
          this.getDatahandler()
        },
        methods:{
          reloadnya(){
            location.reload()
          },
          async getDatanama(){
          await axios
            .get(`http://localhost:4500/ambil/` + this.$route.params.id)
            .then((response) => {
              console.log(response.data)
              this.namanya = response.data.nama
            })
        },
          async getDataidpel(){
          await axios
            .get(`http://localhost:4500/ambil/` + this.$route.params.id)
            .then((response) => {
              console.log(response.data)
              this.idpelnya = response.data.idpel
            })
        },

        async getDatastatus(){
          await axios
            .get(`http://localhost:4500/ambil/` + this.$route.params.id)
            .then((response) => {
              console.log(response.data)
              this.statusnya = response.data.status
            })
        },

        async getDatakeluhan(){
          await axios
            .get(`http://localhost:4500/ambil/` + this.$route.params.id)
            .then((response) => {
              console.log(response.data)
              this.keluhnya = response.data.keluhan
            })
        },

        async getDatahandler(){
          await axios
            .get(`http://localhost:4500/ambil/` + this.$route.params.id)
            .then((response) => {
              console.log(response.data)
              this.handlernya = response.data.handler
            })
        },

        }
        
        // async mounted(){
        //     const id = this.$route.params.id
        //     const idpel = await axios.get(`http://localhost:4500/ambil/` + this.$route.params.id )
        //     const testing2 = this.idpel = idpel.data.idpel
        //     console.log(testing2)
        // },
    }
  </script>