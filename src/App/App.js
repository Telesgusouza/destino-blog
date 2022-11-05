import * as Styled from "./style";
import logo from "../assets/images/logo.svg";
import example from "../assets/images/illustration-editor-desktop.svg";
import illustrationPhone from "../assets/images/illustration-phones.svg";
import bgPhone from "../assets/images/bg-pattern-circles.svg";
import notebook from "../assets/images/illustration-laptop-desktop.svg";
import Home from "../components/Menu";
import Button from "../components/Buttons";

function App() {
  return (
    <Styled.Container>
      <Styled.Main>
        {/* <Styled.ImgBg src={bg} /> // NÃO SEI COMO ARRUMA ESSA PORRA  */}

        <Styled.HeaderContainer>
          <img src={logo} />

          <Home />

          <Button />

        </Styled.HeaderContainer>

        <Styled.MainContent>
          <h1>A modern publishing platform</h1>
          <p>Grow your audience and build your online brand</p>
          <Styled.ContainerButtonsContent>
            <button>Start for free</button>
            <button>Learn More</button>
          </Styled.ContainerButtonsContent>
        </Styled.MainContent>
      </Styled.Main>

      <Styled.ContainerContentFuture>
        <h2>Designed for the future</h2>
        <Styled.ContentFuture>
          <Styled.IntroductionToContent>
            <div>
              <h3>Introducing an extensible editor</h3>
              <p>
                Blogr features an exceedingly intuitive interface which lets you
                focus on one thing: creating content. The editor supports
                management of multiple blogs and allows easy manipulation of
                embeds such as images, videos, and Markdown. Extensibility with
                plugins and themes provide easy ways to add functionality or
                change the looks of a blog.
              </p>
            </div>
            <div>
              <h3>Robust content management</h3>
              <p>
                Flexible content management enables users to easily move through
                posts. Increase the usability of your blog by adding customized
                categories, sections, format, or flow. With this functionality,
                you’re in full control.
              </p>
            </div>
          </Styled.IntroductionToContent>

          <Styled.IntroductionToContentImg>
            <img src={example} />
          </Styled.IntroductionToContentImg>
        </Styled.ContentFuture>
      </Styled.ContainerContentFuture>

      <Styled.ContainerInfoInfrastruture>
        <Styled.Center>
          <Styled.bgPhone>
            <img src={bgPhone} id="bgPhone" />
          </Styled.bgPhone>
          <Styled.ImgPhone>
            <img src={illustrationPhone} />
          </Styled.ImgPhone>

          <Styled.InfoInfrastrutureContent>
            <h3>State of the Art Infrastructure</h3>
            <p>
              State of the Art Infrastructure With reliability and speed in
              mind, worldwide data centers provide the backbone for ultra-fast
              connectivity. This ensures your site will load instantly, no
              matter where your readers are, keeping your site competitive.
            </p>
          </Styled.InfoInfrastrutureContent>
        </Styled.Center>
      </Styled.ContainerInfoInfrastruture>

      <Styled.Center>
        <Styled.ContainerInfoNotebook>
          <img src={notebook} />
          <Styled.InfoNotebookContent>
            <h3>Free, open, simple</h3>
            <p>
              Blogr is a free and open source application backed by a large
              community of helpful developers. It supports features such as code
              syntax highlighting, RSS feeds, social media integration,
              third-party commenting tools, and works seamlessly with Google
              Analytics. The architecture is clean and is relatively easy to
              learn.
            </p>

            <h3>Powerful tooling</h3>
            <p>
              Batteries included. We built a simple and straightforward CLI tool
              that makes customization and deployment a breeze, but capable of
              producing even the most complicated sites.
            </p>
          </Styled.InfoNotebookContent>
        </Styled.ContainerInfoNotebook>
      </Styled.Center>

      <Styled.FooterContainer>
        <Styled.Center>
          <Styled.Footer>
            <img src={logo} />
            <div>
              <h5>Product</h5>
              <span>Overview</span>
              <span>Pricing</span>
              <span>Marketplace</span>
              <span>Features</span>
              <span>Integrations</span>
            </div>

            <div>
              <h5>Company</h5>
              <span>About</span>
              <span>Team</span>
              <span>Blog</span>
              <span>Careers</span>
            </div>

            <div>
              <h5>Connect</h5>
              <span>Contact</span>
              <span>Newsletter</span>
              <span>LinkedIn</span>
            </div>
          </Styled.Footer>
        </Styled.Center>
      </Styled.FooterContainer>
    </Styled.Container>
  );
}

export default App;
