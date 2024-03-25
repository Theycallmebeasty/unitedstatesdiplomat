import Image from "next/image"


export default function MenuItems() {
   return(
      <div className=" border border-red-700 p-8 rounded-lg text-center group hover:bg-red-200 hover:shadow-2xl hover:shadow-black transition-all">
       <div className="text-center">
       <img src="/airpng.jpg"  className="max-h-auto max-h-24 block mx-auto" alt="air"/>
       </div>
      <h4 className="font-semibold text-xl my-3">AIR FREIGHT</h4>
      <p className="text-gray-500 text-sm">
      Air freight is a crucial component of global trade,offering rapid transportation of goods across long distances.
      </p>
   </div>
   );
}