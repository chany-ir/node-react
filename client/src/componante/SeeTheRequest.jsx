
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { getRequests } from '../HelpRequestApp';
import { useNavigate } from 'react-router-dom';
import { useApiKey } from './UseContect';

const mapContainerStyle = {
  width: '100%',
  height: '90vh',
};

const requestListStyle = {
  overflowY: 'auto',
  maxHeight: '75vh',
  direction: 'ltr', 
};

export const SeeTheRequest = () => {
  const [requests, setRequests] = useState([]);
  const [filteredStatus, setFilteredStatus] = useState("הכל");
  const [center, setCenter] = useState({ lat: 31.5, lng: 34.8 }); // מרכז ישראל
  const [isLoading, setIsLoading] = useState(true);
  const apiKey = useApiKey();
  const navigate = useNavigate();
  useEffect(() =>{
    async function fetchRequests() {
      try {
        const todos = await getRequests();
        setRequests(todos);
      } catch (error) {
        console.error('Error fetching requests:', error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchRequests();
  }, []);

  const handleFilterChange = (e) => {
    setFilteredStatus(e.target.value);
  };

  // סינון הבקשות לפי הסטטוס הנבחר
  const filteredRequests = requests.filter(request =>
    filteredStatus === "הכל" || request.status.includes(filteredStatus)
  );
  if (isLoading) {
    return <div>טוען נתונים...</div>;
  }
  return (
    <div className="home-container">
      <div className="container">
        
          <div className="row col-4 mt-2">
            <button
              onClick={() => navigate("/Private")}
              className="mt-4 bg-blue-500 font-bold py-2 px-4 rounded">
              החסדים שלי
            </button>
          </div>

          {/* תפריט מיון */}
          <div className="row mb-2">
            <div className="col-4">
              <h2 className="">בקשות עזרה</h2>
              <select
                className="form-select mb-3"
                value={filteredStatus}
                onChange={handleFilterChange}
              >
                <option value="הכל">הכל</option>
                <option value="מחכה">מחכה</option>
                <option value="בטיפול">בטיפול</option>
                <option value="הסתיים">הסתיים</option>
              </select>

              <div style={requestListStyle}>
                {filteredRequests.map((request) => (
                  <Link to={`/SeeOneReqest/${request._id}`} key={request._id}>
                    <div className="card text-center mb-2">
                      <div className="card-body">
                        <h4 className="card-title">{request.description}</h4>
                        <p className="card-text">מספר אנשים: 🙋‍♂️ {request.numPeople}</p>
                        <p className="card-text">טלפון: 📞 {request.phone}</p>
                        <p className="card-text">עדיפות: ⚠️ {request.priority}</p>
                        <p className="card-text">סטטוס: 📊 {request.status}</p>
                        {(request.status.includes("בטיפול") || request.status.includes("הסתיים")) && (
                          <p className="card-text">קוד מתנדב: {request.idVolunteer}</p>
                        )}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
            <div className="col-8">
            <LoadScript googleMapsApiKey={apiKey}>
              <GoogleMap mapContainerStyle={mapContainerStyle} center={center} zoom={7}>
                {filteredRequests.map((request) =>
                  request.coordinates && (
                    <Marker
                      key={request._id}
                      position={{ lat: request.coordinates.lat, lng: request.coordinates.lng }}
                      title={request.description}
                    />
                  )
                )}
              </GoogleMap>
              </LoadScript>
            </div>
          </div>
        
      </div>
    </div>
  );
};
