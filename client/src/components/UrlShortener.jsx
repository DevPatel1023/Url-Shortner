import React, { useState } from 'react';
import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:5000";

const UrlShortener = () => {
  const [originalUrl, setOriginalUrl] = useState('');
  const [shortUrl, setShortUrl] = useState('');
  const [qrCode, setQrCode] = useState('');
  const [alertVisible, setAlertVisible] = useState(false);

  const handleInputChange = (event) => {
    setOriginalUrl(event.target.value);
  };

  const onSubmitForm = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(`${API_BASE_URL}/shortner`, { originalUrl });
      setShortUrl(response.data.shortUrl);
      setQrCode(response.data.qrCode);
    } catch (error) {
      console.error(error);
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(shortUrl);
    setAlertVisible(true);
    setTimeout(() => setAlertVisible(false), 2000); // Hide alert after 2 seconds
  };

  return (
    <div className="container-fluid d-flex justify-content-center align-items-center" style={{ height: '85vh' }}>
      <div className="p-3 mb-4" style={{ backgroundColor: '#29354A', color: '#CCCCCC', width: '700px', borderRadius: '7px' }}>
        <form onSubmit={onSubmitForm}>
          <h1 className="d-flex justify-content-center mb-4">URL Shortener</h1>
          <div className="form-outline mb-4 d-flex">
            <input
              type="text"
              placeholder="Enter your URL ..."
              value={originalUrl}
              className="form-control"
              style={{ height: '40px', width: '100%', margin: '0 5px' }}
              onChange={handleInputChange}
            />
            <button type="submit" className="btn btn-outline-warning" style={{ height: '40px', width: '120px', fontSize: '12px' }}>
              Convert Short URL
            </button>
          </div>
        </form>

        {shortUrl && (
          <div className="mt-4">
            <div className="form-outline d-flex align-items-center">
              <input
                type="text"
                className="form-control"
                value={shortUrl}
                readOnly
                style={{ height: '40px', width: '100%', margin: '0 5px' }}
              />
              <button onClick={handleCopy} className="btn btn-outline-success" style={{ height: '40px', width: '120px', fontSize: '12px' }}>
                <i className="bi bi-clipboard"></i> Copy
              </button>
            </div>

            {/* QR Code Section */}
            {qrCode && (
              <div className="text-center mt-3">
                <img src={qrCode} alt="QR Code" style={{ width: '150px', height: '150px' }} />
              </div>
            )}
          </div>
        )}

        {/* Alert Message */}
        {alertVisible && <div className="alert alert-success mt-3">Short URL copied to clipboard!</div>}
      </div>
    </div>
  );
};

export default UrlShortener;
