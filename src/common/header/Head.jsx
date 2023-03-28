import React from 'react'

const Head = () => {
  return (
    <>
     <section className='head'>
       <div className=" d-flex" style={{justifyContent:"space-between"}}>
        <div className="ms-3 ">
        <i className ="fa fa-phone"></i>
            <label htmlFor="">+7787 8888 8888</label>
            <i className='fa fa-envelope'></i>
            <label htmlFor="">kpx@gmail.com</label>
        </div>
       <div className="d-flex me-3 " style={{justifyContent:"flex-end"}}>
        <label htmlFor="">Theme FAQ's</label>
        <label htmlFor="">Need Helps</label>
        <span></span>
        <label htmlFor="">EN</label>
        <span></span>
        <label htmlFor="">USD</label>
       </div>
           
        </div>
     </section>
    </>
  )
}

export default Head

