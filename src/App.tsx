import './App.scss'
import Header from './components/Header/Header'
import image1 from './assets/Group14134.png';
import image1_large from './assets/Group14134@2x.png';

import cardbg1 from './assets/Mask Group 45.png';
import cardbg2 from './assets/Mask Group 46.png';
import cardbg3 from './assets/Mask Group 47.png';
import cardimg1 from './assets/Group 14190.png';
import cardimg2 from './assets/Group 14195.png';
import cardimg3 from './assets/Group 14203.png';

import datacardimg1 from './assets/Group 14175.png';
import datacardimg2 from './assets/Group 14176.png';
import datacardimg3 from './assets/Group 14177.png';
import datacardimg4 from './assets/Group 14178.png';
import datacardimg5 from './assets/Group 14179.png';
import datacardimg6 from './assets/Group 5155.png';

import Solutioncardimg1 from './assets/icon2.png';
import Solutioncardimg2 from './assets/icon-1.png';
import Solutioncardimg3 from './assets/icon-2.png';

import roadmapimg from './assets/roadmap.png';
import wheat from './assets/wheat.png';
import logo from './assets/Group4260.png'

import fb from './assets/Subtraction 6.png'
import ins from './assets/Image 10.png'
import twtt from './assets/Path 21691.png'
import plays from './assets/Group 5095.png'
import apps from './assets/Group 5096.png'


import SearchCard from './components/searchCards/SearchCard';
import DataCard from './components/DataCard/DataCard';
import SolutionCard from './components/solutioncards/Solutioncard';
function App() {

  return (
    <>
      <Header></Header>
      <div className='banner'>
        <div className='banner-content'>
          <h1>Influencer Discovery</h1>
          <h5>
            The fastest and most efficient method to find social media influencers
          </h5>
          <button className='green-btn my-4'>
            Try for free Today!
          </button>
        </div>
      </div>
      <section style={{ height: 500 }}>
        <div className="container-xxl">
          <div className='video-container'>
            <video disablePictureInPicture controls src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"></video>
          </div>
        </div>
      </section>
      <section className='section-1'>
        <div className="container-xxl">
          <div className="row">
            <div className="col-6">
              <img src={image1} />
            </div>
            <div className="col-6 d-flex justify-content-center align-items-center">
              <div>
                <h3 className='title mb-4'>The influencer Search Engine</h3>
                <p className='sub-1 mb-4'>Find authentic influencers in seconds and leverage their reach to grow your bussiness</p>
                <p className='sub-2'>Supported networks</p>
                <ul className='px-3'>
                  <li>Twitter (soon)</li>
                  <li>Instagram (soon)</li>
                  <li>Youtube (soon)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>


      <div className="bg-gradientt pb-5">
        <div className="container-xxl">
          <h1 className='section-title'>Search, Shortlist and Reach Out</h1>
          <div className="row g-5">
            <div className="col-4">
              <SearchCard title='Find Unlimited Influencers' description='Deep search tech for more than 7 million influencers' img={cardimg1} bg={cardbg1}></SearchCard>
            </div>
            <div className="col-4">
              <SearchCard title='Analyze data points' description='Engagement and quality analysis to help you pick real influencers' img={cardimg2} bg={cardbg2}></SearchCard>
            </div>
            <div className="col-4">
              <SearchCard title='Reach out' description='Create influencers lists, export data and start a converstaion.' img={cardimg3} bg={cardbg3}></SearchCard>
            </div>
          </div>
        </div>
        <div className="container-xxl">
          <h1 className='section-title'>Data You'll Get With Us</h1>
          <div className="row g-5">
            <div className="col-4">
              <DataCard title='Demographics' description="Access age and gender statistics for each influencer's audience. We sample demographic data from every influencer's following to ensure your campaign reaches you target market" img={datacardimg1}></DataCard>
            </div>
            <div className="col-4">
              <DataCard title='Engagement Stats' description="Access age and gender statistics for each influencer's audience. We sample demographic data from every influencer's following to ensure your campaign reaches you target market" img={datacardimg6}></DataCard>
            </div>
            <div className="col-4">
              <DataCard title='Niche' description="Access age and gender statistics for each influencer's audience. We sample demographic data from every influencer's following to ensure your campaign reaches you target market" img={datacardimg2}></DataCard>
            </div>
            <div className="col-4">
              <DataCard title='Location' description="Access age and gender statistics for each influencer's audience. We sample demographic data from every influencer's following to ensure your campaign reaches you target market" img={datacardimg3}></DataCard>
            </div>
            <div className="col-4">
              <DataCard title='Contact Info' roadmap description="Access age and gender statistics for each influencer's audience. We sample demographic data from every influencer's following to ensure your campaign reaches you target market" img={datacardimg4}></DataCard>
            </div>
            <div className="col-4">
              <DataCard title='Cost Estimation' roadmap description="Access age and gender statistics for each influencer's audience. We sample demographic data from every influencer's following to ensure your campaign reaches you target market" img={datacardimg5}></DataCard>
            </div>
          </div>
        </div>
      </div>
      <div className='pb-5'>
        <div className="container-xxl">
          <h1 className='section-title'>Solution to every kind of bussiness</h1>
          <div className="row g-5">
            <div className="col-4">
              <SolutionCard title='Agency' description='Whether you are a small agency or a
big one, our influencer database will
help you get better results for your
clients.' image={Solutioncardimg1}></SolutionCard>
            </div>
            <div className="col-4">
              <SolutionCard title='B2C' description='Having influencers from almost every
niche and industry makes it possible
to help you create powerful B2C
marketing campaigns.' image={Solutioncardimg2}></SolutionCard>
            </div>
            <div className="col-4">
              <SolutionCard title='B2B' description='Our search engine makes Influencer
prospecting and marketing easy for
the B2B industry as well.' image={Solutioncardimg3}></SolutionCard>
            </div>
          </div>
        </div>
      </div>

      {/* <div>
        <div className="conatainer-xl">
          <img src={roadmapimg} alt="" />
        </div>
      </div> */}

      <div className="container-xxl p-5">
        <div className="row">
          <div className="col-6">
            <h1 className='section-title text-start py-3'>Simple & Transparent Pricing</h1>
            <ul className='ps-0 pricing-feature'>
              <li>Unlimited searches</li>
              <li>Unlimited save list</li>
              <li>Twitter Influencers</li>
              <li>Instagram Influencers</li>
              <li>Youtube Influencers (soon)</li>
              <li>Export data</li>
              <li>Influencer's granular details</li>
              <li>CPM estimation</li>
              <li>3rd party integrations</li>
              <li>Future update included</li>
            </ul>
          </div>
          <div className="col-6 d-flex justify-content-center align-items-center">
            <div className='priceCard'>
              <div className="roundcorner">
                <img className='wheat' src={wheat} alt="" />
              </div>
              <div className='pricing'>
                <div>
                  <p className='yellow mb-3' style={{ fontWeight: 300 }}>WAS</p>
                  <p className='yellow linethrough mb-3'>$199/lifetime</p>
                  <div className='pill mb-3'></div>
                  <p className='p1 mb-3'>Now</p>
                  <p className='p2'>$99/lifetime</p>
                </div>
                <p className='text-end'>BUY NOW</p>
              </div>

            </div>
          </div>
        </div>
      </div>

      <div className='py-5 question-wrapper'>
        <div className="container-xxl">
          <div className='longcard'>
            <h1 className='section-title py-0'>Got any questions?</h1>
            <button className='green-btn'>Contact us</button>
          </div>
        </div>
      </div>

      <footer>
        <div className="container-xxl">
          <div className="row">
            <div className="col-3">
              <img src={logo} alt="logo" />
              <p className='small-font mt-4' style={{ maxWidth: 238 }}>
                The only platform you will ever need for
                your content marketing and Social media
                management.
              </p>
            </div>
            <div className="col-3 d-flex flex-column align-items-end">
              <div>
                <p className='footer-title small-font'>Product</p>
                <p className='small-font'>Discovery</p>
                <p className='small-font'>Curation</p>
                <p className='small-font'>Automation</p>
                <p className='small-font'>Planner</p>
                <p className='small-font'>Publish</p>
                <p className='small-font'>Analytics</p>
              </div>
            </div>
            <div className="col-3 d-flex flex-column align-items-end">
              <div>
                <p className='footer-title small-font'>Resources</p>
                <p className='small-font'>Partner Program</p>
                <p className='small-font'>Blog</p>
                <p className='small-font'>Knowledgebase</p>
                <p className='small-font'>Changelog</p>
                <p className='small-font'>Support</p>
              </div>
            </div>
            <div className="col-3 d-flex flex-column align-items-end">
              <div>
                <p className='footer-title small-font'>Legal</p>
                <p className='small-font'>Terms & conditions</p>
                <p className='small-font'>Privacy Policy</p>
                <p className='small-font'>Contact Us</p>
              </div>
            </div>
          </div>
          <div className='d-flex justify-content-between'>
            <div>
              <img className='me-4' src={fb} alt="" />
              <img className='me-4' src={ins} alt="" />
              <img src={twtt} alt="" />
              <p className='mt-4 small-font'>© 2016 - 2017 Contentstudio</p>
            </div>
            <div>
              <p className='small-font mb-4'>You can download our app from.</p>
              <img className='me-4' src={plays} alt="" />
              <img src={apps} alt="" />
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default App
