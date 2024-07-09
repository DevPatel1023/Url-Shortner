import React from 'react'


const UrlShortener = () => {
  return (
    <div className="container-fluid d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
      <div className="p-3 mb-4 " style={{ backgroundColor: '#29354A' , color: '#CCCCCC', width: '640px'  ,borderRadius:'7px'}}>
      <form action="">
      <h1 className='d-flex justify-content-center mb-4'>Url-Shortner</h1>
      <div data-mdb-input-init class="form-outline mb-4">
            <input type="text"  placeholder='Enter your Url ...'  class="form-control" style={{ height: '40px' }} />
          </div>
          <div className='d-flex justify-content-center mb-4'><button type="button" className="btn btn-outline-warning col-lg-3 col-12 ">Convert ShortUrl</button></div>
      </form>
      </div>
    </div>
  )
}

export default UrlShortener;
