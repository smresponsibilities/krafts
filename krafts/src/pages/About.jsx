import PagesHeader from "../components/PagesHeader.jsx";
import Footer from "../components/Footer.jsx";
import BottomBar from "../components/BottomBar.jsx";
import "../styles/about.css";

function About() {
  return (
    <div className="about-us-page">
      <PagesHeader />

      <main className="about-main-content">
        <section className="about-intro">
          <h1>About Krafts</h1>
          <p className="tagline">
          Crafts of Remarkable Nature, Directly from the Artisans.
          </p>
          <p>
           random
          </p>
        </section>

        <section className="our-mission">
          <h2>Our Mission</h2>
          <p>
   random
          </p>
        </section>

        <section className="our-products">
          <h2>Our Products</h2>
          <p>
     random
          </p>
        </section>

        <section className="visit-us">
          <h2>Visit Us</h2>
          <p>
            Want to learn more or get in touch with us? Visit our{" "}
            <a href="/contact">Contact Page</a> and let's start a conversation.
            We're always here to talk tea.
          </p>
        </section>
      </main>

      <Footer />
      <BottomBar />
    </div>
  );
}

export default About;
