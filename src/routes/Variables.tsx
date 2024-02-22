import Footer from "../components/Footer";
import MainContent from "../components/MainContent";
import Definition from "../components/MainContent/Definition";
import Example from "../components/MainContent/Example";
import MarkdownWrapper from "../components/MainContent/MarkdownWrapper";
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
          <ul className="list-inside list-disc">
            <li>Automatically</li>
            <li>Using keyword var</li>
            <li>Using keyword let</li>
            <li>Using keyword const</li>
          </ul>
        </Definition>
        <Example>
          <MarkdownWrapper path="Variables/first" />
        </Example>
      </MainContent>
      <Footer />
    </>
  );
}

export default Variables;
