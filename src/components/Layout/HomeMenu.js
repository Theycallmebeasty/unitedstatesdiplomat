import Image from "next/image";
import Air from "./menu/Air";
import MenuItems from "./menu/MenuItems";
import Truck from "./menu/Truck";
import SectionHeaders from "./SectionHeaders";

export default function HomeMenu() {
   return (
      <section className="">
      
       <div className="text-center px-8 py-2 bg-primary rounded-lg ">
         <SectionHeaders 
            mainHeader={'Services We Offer'}/>
       </div>
       <div className="grid grid-cols-3 mt-4 gap-4 ">
        <Air />
        <MenuItems />
        <Truck />
       </div>
      </section>
         
      
   );
}