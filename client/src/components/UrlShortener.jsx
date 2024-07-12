import React, { useState } from 'react';
import axios from 'axios';

const UrlShortener = () => {
  const [originalUrl, setOriginalUrl] = useState('');
  const [shortUrl, setShortUrl] = useState('');

  const handleInputChange = (event) => {
    setOriginalUrl(event.target.value);
  };

  const onSubmitForm = async (event) => {
    event.preventDefault(); 

    try {
      const response = await axios.post('http://localhost:5000/shortner', { originalUrl });
      setShortUrl(response.data.shortUrl); 
    } catch (error) {
      console.error(error);
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(shortUrl);
    alert('Short URL copied to clipboard!');
  };

  const inputStyle = {
    height: '40px',
    width: '100%',
    display: 'inline-block',
    marginLeft : '5px',
    marginRight : '5px'
  };
  const buttonStyle = {
    height: '40px',
    width: '120px',
    whiteSpace: 'normal',
    padding: '0 10px' ,
    fontSize : '12px'
  };

  return (
    <div className="container-fluid d-flex justify-content-center align-items-center" style={{ height: '85vh' }}>
      <div className="p-3 mb-4" style={{ backgroundColor: '#29354A', color: '#CCCCCC', width: '700px', borderRadius: '7px' }}>
        <form action="Post" onSubmit={onSubmitForm}>
          <h1 className="d-flex justify-content-center mb-4">Url-Shortner</h1>
          <div className="form-outline mb-4  d-flex">
            <input
              type="text"
              placeholder="Enter your Url ..."
              value={originalUrl}
              className="form-control"
              style={inputStyle}
              onChange={handleInputChange}
            />
            <button type="submit" className="btn btn-outline-warning ml-2" style={buttonStyle}>Convert ShortUrl</button>
          </div>
        </form>
        {shortUrl && (
          <div className="form-outline mt-4 d-flex align-items-center">
            <input
              type="text"
              className="form-control mr-2"
              value={shortUrl}
              readOnly
              style={inputStyle}
            />
            <button onClick={handleCopy} className="btn btn-outline-success" style={buttonStyle}>Copy</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default UrlShortener;
