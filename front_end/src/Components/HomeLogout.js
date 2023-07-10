import React, {useEffect, useState} from 'react'
import Carousel from './Carousel'
import Navbar from './Navbar'
import {useNavigate } from 'react-router-dom';

export default function HomeLogout() {

  const navigate = useNavigate();
  const [isDesktopOrTablet, setIsDesktopOrTablet] = useState(false);



  useEffect(() => {
    const handleResize = () => {
      setIsDesktopOrTablet(window.innerWidth >= 768);
    };
  
    window.addEventListener('resize', handleResize);
  
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    
    <div>
      <Navbar/>
      {isDesktopOrTablet ? (<div className='m-auto' onClick={()=>navigate('/products')} style={{width:'90vw'}}>
            <img src='https://sslimages.shoppersstop.com/sys-master/root/h6b/h82/30190021836830/Strip-Banner-Web_home%20150623fb.jpg' style={{width:'90vw'}} alt="Banner"/>
            <Carousel/>  
      </div>): (
        <div>
          <img src="https://sslimages.shoppersstop.com/sys-master/root/hfa/h57/30287675392030/Spaces_3x3-Widget-%281%29_eoss-23.jpg" style={{width:'90vw'}} alt="Banner" />
        </div>
      )}
      <div className='mt-5 mx-auto h-100 row d-flex p-2 mb-2' onClick={()=>navigate('/products')} style={{width:'95vw'}}>
          
            <div className='w-100 h-100 row m-auto p-3 '>
              <div className='col-lg-3 col-md-6 col-sm-12 mx-auto'>
                  <img src="https://sslimages.shoppersstop.com/sys-master/root/h30/h11/30201485262878/titain-%26-Fossil--4-Widgets-web_sdc160623ed.jpg" alt="" style={{width:'80%'}}/>
              </div>
              <div className='col-lg-3 col-md-6 col-sm-12 mx-auto'>
                  <img src="https://sslimages.shoppersstop.com/sys-master/root/h86/ha5/30326770663454/Kraus-Levis--4-Widgets-web_eoss-23.jpg" alt="" style={{width:'80%'}}/>
              </div>
              <div className='col-lg-3 col-md-6 col-sm-12 mx-auto '>
                  <img src="https://sslimages.shoppersstop.com/sys-master/root/h89/ha0/30290325471262/Blackberry%2C-Louis-Philippe--4-Widgets-web_eoss-23.jpg" alt="" style={{width:'80%'}}/>
              </div>    
              <div className='col-lg-3 col-md-6 col-sm-12  mx-auto '>
                  <img src="https://sslimages.shoppersstop.com/sys-master/root/hfc/h51/30154850238494/Lee-Cooper%2C-Louis-Philippe---4-Widgets-web_47647848.jpg" alt="" style={{width:'80%'}}/>
              </div>
            </div>    
      </div>
      
    </div>
  )
}
