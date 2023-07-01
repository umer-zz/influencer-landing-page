import './App.scss'
import Header from './components/Header/Header'
import image1 from './assets/Group 14134.png';
import cardbg1 from './assets/Mask Group 45.png';
import cardbg2 from './assets/Mask Group 46.png';
import cardbg3 from './assets/Mask Group 47.png';
import cardimg1 from './assets/Group 14190.png';
import cardimg2 from './assets/Group 14195.png';
import cardimg3 from './assets/Group 14203.png';
import SearchCard from './components/searchCards/SearchCard';
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
          <button className='banner-button mt-4'>
            Try for free Today!
          </button>
        </div>
      </div>
      <section style={{ height: 500 }}>
        <div className="container-xl">
          <div className='video-container'>
            <video disablePictureInPicture controls src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"></video>
          </div>
        </div>
      </section>
      <section className='section-1'>
        <div className="container-xl">
          <div className="row">
            <div className="col-6">
              <img src={image1} alt="" />
            </div>
            <div className="col-6 d-flex justify-content-center align-items-center ps-5">
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

      <div className="container-xl">
        <h1 className='section-title'>Search, Shortlist and Reach Out</h1>
        <div className="row">
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

      <div className="container-xl">
        <h1 className='section-title'>Data You'll Get With Us</h1>
        <div className="row">
          <div className="col-4">
            <SearchCard title='Find Unlimited Influencers' description='Deep search tech for more than 7 million influencers' img={cardimg1} bg={cardbg1}></SearchCard>
          </div>
        </div>
      </div>

    </>
  )
}

export default App
