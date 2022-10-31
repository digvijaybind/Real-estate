import React from 'react'
import '../components/DetailPage.css'
// import Carousel from 'react-bootstrap/Carousel';
import demoImg from '../assets/images/img.jpg'
import LocateImg from '../assets/images/locate.svg'
import CoinImg from '../assets/images/chinese-coin.png'
import bed from '../assets/images/bed.svg'
import built from '../assets/images/built.svg'
import land from '../assets/images/land.svg'
import garage from '../assets/images/garb.svg'
import prop from '../assets/images/prop.svg'
import wash from '../assets/images/wash.svg'
import map from '../assets/images/map.png'
import downl from '../assets/images/down.svg'
import tic from '../assets/images/tic.svg'
import RecentListing from './RecentListing';
import Footer from './Footer';



type Props = {}

function DetailPage({}: Props) {
  return (
    <>
    <section className='detail-header'>
      
        <div className='container'>
            <div className='row align-items-center'>
               <div className='col-xl-6 col-lg-6 col-md-12 det-title-wrap'>
                <a href=''>
                <svg width="12" height="23" viewBox="0 0 12 23" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11 21.9604L1 11.9632L11 1.96606" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

                </a>
                <div className='det-title'>
                  <h1>Doran pool villa<span>Residential</span></h1>
                  <small>Shetland Islands, Scotland</small>
                </div>
               </div>
               <div className='col-xl-6 col-lg-6 col-md-12 search-form'>
               <div className='form-control-sr'>
                        <input type={'text'} placeholder="Search with name, location or type..."/>
                        <button>
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.00017 14.9964C11.8663 14.9964 15.0003 11.8632 15.0003 7.99819C15.0003 4.1332 11.8663 1 8.00017 1C4.13408 1 1 4.1332 1 7.99819C1 11.8632 4.13408 14.9964 8.00017 14.9964Z" stroke="#CECECE" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12.95 12.9473L17.0001 16.9963" stroke="#CECECE" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg></button>
                    </div>
               </div>
            </div>
        </div>
      
    </section>

    <section className='det-banner'>
      <div className='car-desc'>
        <div className='row'>
          <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12'>
          <span className="d-name position-relative">Closing in: 6 days</span>
          </div>
          <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 sp-dc'>
          <span className="post-dte">12 images, 2 videos</span>
          </div>
        </div>
      </div>
    {/* <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={demoImg}
          alt="First slide"
        />
    
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={demoImg}
          alt="Second slide"
        />

      
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={demoImg}
          alt="Third slide"
        />

       
      </Carousel.Item>
    </Carousel> */}
    </section>

    <section className='det-prop-ow'>
      <div className='container'>
        <div className='row'>
          <div className='col-xl-7 col-lg-7 col-md-12 b-coin'>
            <img src={CoinImg} alt="" />$920,600 ~<span>$920,600</span>
          </div>
          <div className='col-xl-5 col-lg-5 col-md-12 b-dets'>
          <div className='ownr-name'>
          <div className='own-stat'>S</div>
          <div>
          <small>Owner/Builder</small>
                        <span className='ow-nme'>Sherlet Johnson</span>
          </div>
                       
                    </div>

                    <div className='sub-status'>
                      <small>Launched on</small>
                      <p>1st September 2022</p>
                    </div>
          </div>
        </div>
      </div>
    </section>
 <section className='details-of-property'>
  <div className='container'>
    <div className='row'>
      <div className='col-xl-6 col-lg-6 col-sm-12 det-left'>
        <h2>Property overview</h2>
        <div className='col-12'>
          <div className='row'>
            <div className='col-xl-4 col-lg-4 col-md-6 col-sm-12 am-det-w'>
              <div className='am-det-in'>
                <span className='amnty-title'><img src={bed} />Bed rooms</span>
                <span className='amnty-desc'>4 Bedrooms</span>
              </div>
            </div>
            <div className='col-xl-4 col-lg-4 col-md-6 col-sm-12 am-det-w'>
              <div className='am-det-in'>
                <span className='amnty-title'><img src={wash} />Washroom</span>
                <span className='amnty-desc'>6 Bathrooms</span>
              </div>
            </div>
            <div className='col-xl-4 col-lg-4 col-md-6 col-sm-12 am-det-w'>
              <div className='am-det-in'>
                <span className='amnty-title'><img src={built} />Built area</span>
                <span className='amnty-desc'>3245 Sq Ft</span>
              </div>
            </div>
            <div className='col-xl-4 col-lg-4 col-md-6 col-sm-12 am-det-w'>
              <div className='am-det-in'>
                <span className='amnty-title'><img src={land} />Land area</span>
                <span className='amnty-desc'>0.47 Acre</span>
              </div>
            </div>
            <div className='col-xl-4 col-lg-4 col-md-6 col-sm-12 am-det-w'>
              <div className='am-det-in'>
                <span className='amnty-title'><img src={garage} />Garage</span>
                <span className='amnty-desc'>For 2 cars</span>
              </div>
            </div>
            <div className='col-xl-4 col-lg-4 col-md-6 col-sm-12 am-det-w'>
              <div className='am-det-in'>
                <span className='amnty-title'><img src={prop} />Property type</span>
                <span className='amnty-desc'>Single family</span>
              </div>
            </div>
          </div>
        </div>

    <div className='col-12 mt-4 ab-proprety mb-4'>
      <h2>About property</h2>
      <p>4cents land with 1509 sqft under construction villa Thevakkal 75 lacs located in the area of abundant in natural and unpolluted cool breezes , in a very desirable unpolluted location, which is close enough to major landmarks but far enough from the hustle and bustle of the city. Peaceful and calm surroundings. Easy accessibility to info park kakkanad, proximity to educational institutions, Hos...</p>
    </div>

    <div className='col-12 mt-4'>
    <div className='ab-amnty'>
    <table width="100%">
      <tbody>
        <th>
          <td><h2>Amenities</h2></td>
        </th>
        <tr>
        <td>Sports Area</td>
        <td>Sewage Treatment Plant</td>
        </tr>
        <tr>
        <td>Landscape Garden and Tree Planting</td>
        <td>Storm Water Drains</td>
        </tr>
        <tr>
        <td>24X7 Water Supply</td>
        <td>Gymnasium</td>
        </tr>
        <tr>
        <td>Electrification(Transformer & Solar Energy)</td>
        <td>Food Court</td>
        </tr>
        <tr>
        <td>Swimming_Pool</td>
        <td>Club House</td>
        </tr>
        <tr>
        <td>Piped Gas Connection</td>
        <td>Children's play area</td>
        </tr>
        <tr>
        <td>Bar/Chill-out Lounge</td>
        <td>Tennis Court</td>
        </tr>
        <tr>
        <td>Yoga/Meditation Area</td>
        <td>Jogging Track
        </td>
        </tr>
        <tr>
        <td>Indoor Games</td>
        <td>24 X 7 Security</td>
        </tr>
        <tr>
        <td>Cafeteria</td>
        <td>Intercom</td>
        </tr>
        <tr>
        <td>Rain Water Harvesting</td>
        <td>Full Power Backup</td>
        </tr>
        <tr>
        <td>Library</td>
        <td>&nbsp;</td>
        </tr>
      </tbody>
    </table>
    </div>
    </div>
    <div className='col-12 mt-4 ab-proprety'>
      <h2>Speciality of the property</h2>
      <p>If any -  Historical Importance / Geographical importance / vaastu / VIP Past owners. It means a field of importance that can be added by owner that will separate it from other properties and add value to the demand ...</p>
    </div>

    <div className='col-12 mt-2 ex-proprety ex-legal'>
    <h2>Property documents/ Legal documents</h2>
    <table width="80%">
          <tr>
            <td><img src={tic}/>Land ownership certificate</td>
            <td><a href=''>Download <img src={downl} /> </a></td>
          </tr>
          <tr>
            <td><img src={tic}/>Building permission</td>
        <td><a href=''>Download <img src={downl} /> </a></td>
          </tr>
          <tr>
            <td><img src={tic}/>Tax paid recipts</td>
        <td><a href=''>Download <img src={downl} /> </a></td>
          </tr>
        
          <tr>
            <td><img src={tic}/>Succession certificate</td>
        <td><a href=''>Download <img src={downl} /> </a></td>
          </tr>
        
        </table>
      </div>

    <div className='col-12 mt-4 ex-proprety'>
    <h2>Existing investers of this property (14)</h2>
    <table width="100%">
      <tbody>
       
        <tr>
        <td>
          <div className='aut-img'>S</div>
          <div className='au-detp'>Émile Germain
          <span className='cntr'>France</span>
          </div>
          </td>

        <td><span className='dte-invst'>2 Sep 2022</span></td>
        </tr>

        <tr>
        <td>
          <div className='aut-img'>
            <img src="https://cdn.pixabay.com/photo/2015/07/20/12/57/ambassador-852766__340.jpg" alt="" />
          </div>
          <div className='au-detp'>Émile Germain
          <span className='cntr'>France</span>
          </div>
          </td>

        <td><span className='dte-invst'>2 Sep 2022</span></td>
        </tr>

        <tr>
        <td>
          <div className='aut-img'>
            <img src="https://cdn.pixabay.com/photo/2015/07/20/12/57/ambassador-852766__340.jpg" alt="" />
          </div>
          <div className='au-detp'>Émile Germain
          <span className='cntr'>France</span>
          </div>
          </td>

        <td><span className='dte-invst'>2 Sep 2022</span></td>
        </tr>
        
      </tbody>
    </table>
      </div>

      <div className='col-12 mt-4 ab-invest'>
        <h2>Why should you invest? <span>How to invest?</span></h2>
        <ul>
        <li>Highest retun in short term</li>
        <li>More number of shares available</li>
        <li>Big shots are already invested on this property</li>
        </ul>
      </div>

      <div className='col-12 mt-4 ab-invest'>

        <h2>Location and nearby</h2>
    <img src={map} alt="" />

<table width="100%" className='mt-2'>
  <tr>
    <td>
    LLC dba Hillcrest Hospital South
    <small>Hospital</small>
    </td>
    <td>0.6 Kms</td>
  </tr>

  <tr>
    <td>
    Busy bees play school
    <small>Schools</small>
    </td>
    <td>0.6 Kms</td>
  </tr>

  <tr>
    <td>
    St. Joseph’s Church, Shetland Island
    <small>Hospital</small>
    </td>
    <td>0.6 Kms</td>
  </tr>

</table>

      </div>

      <div className='col-12 mt-4 ab-invest ow-adrs'>
        <h2>About owner/ builder</h2>
        <table width="80%">
          <tr>
            <td>Name of owner/ builder</td>
            <td>:Sherlet Johnson</td>
          </tr>
          <tr>
            <td>Total number of properties</td>
            <td>:3 Properties</td>
          </tr>
          <tr>
            <td>Member since</td>
            <td>14 May 2021</td>
          </tr>
          <tr>
            <td><a href='' className='def-btn'>Contact owner</a></td>
            <td><a href='' className='def-l-text'>See other properties</a></td>
          </tr>
        </table>
      </div>




      </div>
      <div className='col-xl-6 col-lg-6 col-sm-12 det-right'>
      <div className='col-12 mt-4 ab-invest ow-adrs'>
        <h2>Investment details</h2>
        <table width="80%">
          <tr>
            <td>Subscription status</td>
            <td><span className='bg-or-stat'>63% Subscribed</span></td>
          </tr>
          <tr>
            <td>Total dilution</td>
            <td>:700K (10%) / 7M shares</td>
          </tr>
          <tr>
            <td>Base investment</td>
            <td>$999 (25633 Blits coins)</td>
          </tr>
          <tr>
            <td>Highest possible</td>
            <td>$100K</td>
          </tr>
          <tr>
          <td>Intested in buying the shares?</td>
            <td><a href='' className='def-btn'>Invest on this property</a></td>
            
          </tr>
        </table>
      </div>

      </div>
    </div>
  </div>
 </section>

 <section className='recent-list'>
  <div className='container'>
    <h2>Similar Properties</h2>
  <RecentListing/>
  </div>

 </section>

    </>
  )
}

export default DetailPage;