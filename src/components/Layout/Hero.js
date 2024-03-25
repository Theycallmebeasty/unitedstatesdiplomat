
import Image from "next/image"

export default function Hero() {
   return  (
      <section className="relative mt-5">
        <div className="absolute inset-0 flex justify-center items-center w-full h-full">
          <Image src={'/sat.jpg'} layout={'fill'} objectFit={'cover'} alt={'home'} />
        </div>
        <div className="py-8 relative z-10">
          <h1 className="text-6xl text-white font-semibold text-center">Transport  quality and excellence to enhance your <span   className="text-primary"> Business !</span></h1>
           <p className="my-7 text-2xl text-white text-center">
             FIND IT <span  className="text-primary">|</span> BUY IT <span  className="text-primary">|</span> SHIP IT
           </p>
        </div>
     </section>
     
   )
}