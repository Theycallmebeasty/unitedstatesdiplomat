


const clients = [
   { name: 'Client A', image: '/dhl.png' },
   { name: 'Client B', image: '/sncf.png' },
   { name: 'Client C', image: '/qun.png' },
   { name: 'Client D', image: '/red.png' },
   { name: 'Client E', image: '/lyn.png' },
   { name: 'Client F', image: '/nfi.png' },

 ];
 
 const ClientLogos = () => {
   return (
     <div className="bg-gray-100 py-8">
       <div className="container mx-auto">
         <h2 className="text-3xl text-center mb-8 bg-primary text-white italic border rounded-lg font-bold px-6 py-2 ">Our Trusted Clients</h2>
         <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
           {clients.map((client, index) => (
             <div key={index} className="flex justify-center items-center">
               <img src={client.image} alt={client.name} className="h-12" />
             </div>
           ))}
         </div>
       </div>
     </div>
   );
 };
 
 export default ClientLogos;
 