import Hero from "../components/Layout/Hero";
import HomeMenu from "../components/Layout/HomeMenu";
import TrackingForm from "../components/Layout/TrackingForm";
import SectionHeaders from "../components/Layout/SectionHeaders";
import ClientLogos from "../components/Layout/ClientLogos";

export default function Home() {
  return (
    <>
     <Hero />
     <div className="mt-4 mb-3">
       <TrackingForm />
     </div>
     <HomeMenu/>
     <div className="mt-4">
      <ClientLogos />
     </div>
    <section className="text-center px-8 py-2 bg-primary rounded-lg mt-10">
      <SectionHeaders 
        mainHeader={'Contact us'}
      />
      <div className="mt-8">
        <a className="text-4xl underline text-white" href="tel:09053905583">
          +1 (548) 200-3983
        </a>
      </div>
    </section>
    </>
  );
}
