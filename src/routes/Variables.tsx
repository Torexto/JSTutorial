import Footer from "../components/Footer";
import MainContent from "../components/MainContent";
import Definition from "../components/MainContent/Definition";
import Title from "../components/MainContent/Title";
import Navbar from "../components/Navbar";

function Variables() {
  return (
    <>
      <Navbar />
      <MainContent>
        <Title>Variables</Title>
        <Definition>
          <h2>Variables are containers for storing data</h2>
          <p>JavaScript variables can be declared in 4 ways:</p>
          <ul className="list-decimal">
            <li>Automatically</li>
            <li>Using keyword var</li>
            <li>Using keyword let</li>
            <li>Using keyword const</li>
          </ul>
        </Definition>
      </MainContent>
      <Footer />
    </>
  );
}

export default Variables;
