
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getById, updateRequest } from "../HelpRequestApp";
import { LoadScript, GoogleMap, Marker } from "@react-google-maps/api";
import { useNavigate } from 'react-router-dom';
import { useApiKey } from './UseContect';
export const SeeOneReqest = () => {
  const navigate = useNavigate();
  const { id } = useParams(); // קבלת ה-ID מהנתיב
  const [request, setRequest] = useState(null);
  const apiKey = useApiKey();
  // הגדרות למיכל המפה
  const mapContainerStyle = {
    width: "100%",
    height: "400px"
  };

  // מרכז ברירת מחדל (במקרה שאין קואורדינטות)
  const defaultCenter = {
    lat: 32.0853,
    lng: 34.7818
  };

  useEffect(() => {
    async function fetchRequest() {
      const req = await getById(id);
      console.log(req);
      setRequest(req);
    }
    fetchRequest();
  }, [id]);

  const takeRequest = async () => {
    const idv=localStorage.getItem("volunteerId")
    await updateRequest(id, { status: "בטיפול" ,idVolunteer:idv});
    navigate('/Private'); 
  };

  // אם הנתונים עדיין לא נטענו, הצג הודעת טעינה
  if (!request) return <p className="text-center mt-10">טוען נתונים...</p>;

  // השתמשי בקואורדינטות מהבקשה, ואם אין - השתמשי במרכז ברירת מחדל
  const mapCenter = request.coordinates
    ? { lat: request.coordinates.lat, lng: request.coordinates.lng }
    : defaultCenter;

  return (
    <div className="home-container"style={{height:'100vh'}}>
    <div className="container mx-auto p-6 ">
      <div className="bg-white shadow-lg rounded-xl p-6 max-w-md mx-auto">
        <h2 className="text-2xl font-bold text-center">{request.description}</h2>
        <p className="text-gray-700 mt-4">📞 טלפון: {request.phone}</p>
        <p className="text-gray-700">👥 מספר אנשים: {request.numPeople}</p>
        <p className="text-gray-500">⚠️ עדיפות: {request.priority}</p>
        <p className="text-gray-500">סטטוס: {request.status}</p>
        <LoadScript googleMapsApiKey={apiKey}>
          <GoogleMap
            mapContainerStyle={mapContainerStyle}
            center={mapCenter}
            zoom={15}
          >
            <Marker position={mapCenter} />
          </GoogleMap>
        </LoadScript>
        {request.status.includes("מחכה") && (
          <button 
          onClick={takeRequest} 
          className="mt-4 bg-blue-500 text-white font-bold py-2 px-4 rounded btn btn-dark"
        >
          לקחתי את זה
        </button>
                        )}
        
      </div>
    </div>
    </div>
  );
};