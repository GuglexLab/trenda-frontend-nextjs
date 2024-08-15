import BusinessCard from "@/components/BusinessCard";
import BusinessProfilePage from "@/components/BusinessProfile";
import Image from "next/image";

const  HomePage = () => {
  return (
    <>
      <section>
      <BusinessCard 
        user="medhatdawoud"
        businessName="Your Business Name"
        email="example@example.com"
        mobile="123-456-7890"
        location="Ghana"
      />
 
      <BusinessProfilePage />

      </section>
    </>

  );
}


export default HomePage;