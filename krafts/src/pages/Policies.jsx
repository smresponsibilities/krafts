import PagesHeader from "../components/PagesHeader.jsx";
import Footer from "../components/Footer.jsx";
import BottomBar from "../components/BottomBar.jsx";
import "../styles/policies.css";

function Policies() {
  return (
    <div className="policies-page">
      <PagesHeader />

      <main className="policies-main-content">
        <h1>Our Policies</h1>

        <section className="shipping-policy">
          <h2>Shipping Policy</h2>
          <p>
            At{" "}
            <a href="/" className="policies-title">
              Krafts
            </a>
            ,random random  ,random random,random random,random random,random random,random random,random random,random random,random random,random random,random random,random random,random random,random random,random random,random random,random random,random random,random random
          </p>
        </section>

        <section className="return-policy">
          <h2>Return & Refund Policy</h2>
          <p>
           random
          </p>
        </section>

        <section className="privacy-policy">
          <h2>Privacy Policy</h2>
          <p>
         random
          </p>
        </section>

        <section className="terms-conditions">
          <h2>Terms & Conditions</h2>
          <p>
            By accessing or using the Krafts website and our services, you
            agree to be bound by our terms and conditions. These terms cover
            important topics such as intellectual property rights, user conduct,
            disclaimers, and liability limitations. We encourage you to read
            these terms carefully before using our services.
          </p>
        </section>

        <section className="sustainability-commitment">
          <h2>Our Commitment to Community</h2>
          <p>
          random
          </p>
        </section>
      </main>

      <Footer />
      <BottomBar />
    </div>
  );
}

export default Policies;
