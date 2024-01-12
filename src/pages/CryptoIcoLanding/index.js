import React, { Suspense, useEffect, useState , lazy } from "react";

//Import Components
const Navbar =React.lazy(()=>delayForDemo(  import(  "./Navbar/Navbar")))

const Section =    lazy(()=>delayForDemo( import(  "./HeroSection/Section")))
const CardsMini =    lazy(()=>delayForDemo( import(  "./HeroSection/cards-mini")))
const AboutUs =    lazy(()=>delayForDemo( import(  "./AboutUs/about-us")))
const Features =    lazy(()=>delayForDemo(  import(  "./Features/features")))
const RoadMap =    lazy(()=>delayForDemo( import(  "./RoadMap/road-map")))
const OurTeam =    lazy(()=>delayForDemo( import(  "./Team/our-team")))
const Blog =    lazy(()=>delayForDemo(  import(  "./Blog/blog")))
const FAQs =    lazy(()=>delayForDemo(  import(  "./Faqs/FAQs")))
const Footer =    lazy(()=>delayForDemo(  import(  "./Footer/footer")))
const Partners =    lazy(()=>delayForDemo(  import(  "./Partners")))
const why =    lazy(()=>delayForDemo( import(  "../../assets/images/crypto/features-img/why-zeb.svg")))
const whysay =    lazy(()=>delayForDemo(  import(  "../../assets/images/crypto/features-img/what-say.svg")))
const award =    lazy(()=>delayForDemo( import(  "../../assets/images/crypto/features-img/awards-1.webp")))

function delayForDemo(promise) {
  return new Promise(resolve => {
    setTimeout(resolve, 2000);
  }).then(() => promise);
}

const CryptoIcoLanding = () => {
  
  //meta title
  document.title="ICO Landing | User - React Admin & Dashboard Template";

  const [imglight, setimglight] = useState(true);
  const [navClass, setnavClass] = useState("");

  // Use ComponentDidMount
  useEffect(() => {
    window.addEventListener("scroll", scrollNavigation, true)
  },[])

  function scrollNavigation() {
    var scrollup = document.documentElement.scrollTop
    if (scrollup > 80) {
      setimglight(false)
      setnavClass("nav-sticky")
    } else {
      setimglight(true)
      setnavClass("")
    }
  }

  return (
    <React.Fragment>
      {/* import navbar */}
      <div>hh</div>
      
       <Suspense fallback={<p>Loading.....</p>}>
      <Navbar navClass={navClass} imglight={imglight} />

      {/* Hero section */}
      <Section />

      {/* mini cards */}
      {/* <CardsMini /> */}

      {/* aboutus */}
      <AboutUs img={why}  heading='Why ZebLearn?'/>

      {/* features */}
      <Features />

      {/* blog */}
      <Blog />


      {/* roadmap */}
      <RoadMap />

      {/* our team */}
      <AboutUs img={whysay} heading='What they says' />


      <OurTeam />
      <AboutUs img={award}  heading='Awards and Recognition'/>


      {/* partener */}
       <Partners/>
        
      {/* faqs */}
      <FAQs />

      {/* footer */}
      <Footer />
       </Suspense>
    </React.Fragment>
  )
}

export default CryptoIcoLanding
