import React ,{useState}from 'react'
import { Link } from 'react-router-dom';

function Navbar () {
    const [MobileMenu,setMobileMenu] = useState(false)
  return (
    <>
      <div className=" header" style={{height:"8vh",boxShadow:"-1px 15px 17px -8px rgba(0 , 0,0,0.1)"}}>
        <div className="container d_flex">
            <div className="categories d_flex">
                <span className='fa fa-border-all'> </span>
                    <h4>
                        Categories <i className='fa fa-chevron-down'></i> 
                    </h4>
            </div>
            <div className="navlink" style={{color:"#000",gap:"15px" }}>
                <ul className={MobileMenu ? "nav-link-MobileMenu":'link f_flex capitalize'}
                onClick={() => setMobileMenu(false)} style={{gap:"10px",textDecoration:"none"}}>
                    <li style={{}}>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/pages'>Pages</Link>
                    </li>
                    <li>
                        <Link to='/user'>Use Account</Link>
                    </li>
                    <li>
                        <Link to='/vendor'>Vendor Account</Link>
                    </li>
                    <li>
                        <Link to='/track'>Track my order</Link>
                    </li>
                    <li>
                        <Link to='/contact'>Contact</Link>
                    </li>
                </ul>
                <button className='toggle' onClick={()=> setMobileMenu(!MobileMenu)}>
                    {  MobileMenu? 
                    <i className='fas fa-times close home-btn'></i>:
                    <i className='fa-solid fa-xmark open'></i>}
                </button>
            </div>
        </div>
      </div>
    </>
  )
}

export default Navbar
