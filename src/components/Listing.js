import React from 'react'
import demoImg from '../assets/images/img.jpg'
import LocateImg from '../assets/images/locate.svg'
import CoinImg from '../assets/images/chinese-coin.png'
import  '../pie.min.css'
import '../components/ListingPage.css'


type Props = {}

const Listing = (props: Props) => {
  return (
<>

            <div className='single-l-in'>
            

                        <div className='sin-img'>
                            <img src={demoImg} alt="" />

                            <span className='d-name'>Closing in: 6 days</span>
                            <span className='post-dte-sng'>
                                <small>Launched on</small>
                                01st September 2022
                            </span>
                        </div>
                        <h3>Doran pool villa</h3>
                        <span className='loct'><img src={LocateImg} />Shetland Islands, Scotland</span>
                        <span className='loct-d'><img src={CoinImg} />$36M</span>
                        <div className='sub-status'>
                            <small>Subscription status</small>
                            
                            <div className='pie-red'>
                            <div className='pie-wrapper'>
  <div className='csspie' data-value={40}></div>
  <p className='pie-label'>95% subscribed</p>
</div>
                               </div>
                        </div>
                        <span className='dial'>
                                <small>Dilution:</small>
                                <p>700K (10%)/7M shares</p>
                               </span>   
                    <div className='ownr-name'>
                    <small>Owner/Builder</small>
                        <div className='own-stat'>S</div>
                        <span className='ow-nme'>Sherlet Johnson</span>
                    </div>
                    <span className='more-det'>
                        More Details
                    </span>
             

               
                    </div>
                 
                </>




     
  )
}


export default Listing;