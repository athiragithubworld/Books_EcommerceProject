import React from "react";
import Navbar from "../../Components/Layouts/Navbar/Navbar";
import DetailSection from "../../Components/Layouts/DetailSection/DetailSection";
import Footer from "../../Components/Layouts/Footer/Footer";
const BookDetails = () => {
  return (
    <section>
      <Navbar darkTheme={true} />
      <DetailSection />
      <Footer />
    </section>
  );
};

export default BookDetails;
