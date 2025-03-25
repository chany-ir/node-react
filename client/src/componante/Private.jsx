
import { updateRequest } from '../HelpRequestApp';
import React, { useEffect, useState } from "react";
import { getRequests } from '../HelpRequestApp';

export const Private = () => {
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);
  const volunteerCode = localStorage.getItem("volunteerId");

  useEffect(() => {
    if (!volunteerCode) {
      console.error("אין קוד מתנדב ב-Local Storage");
      setLoading(false);
      return;
    }
    const fetchRequests = async () => {
      try {
        const requests = await getRequests({ idVolunteer: volunteerCode });
        setRequests(requests);
      } catch (error) {
        console.error("שגיאה בשליפת הבקשות:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchRequests();
  }, [volunteerCode]);

  async function finishe(id) {
    await updateRequest(id, { status: "הסתיים" });
  }

  if (loading) {
    return <div className="flex items-center justify-center h-screen text-xl">טוען נתונים...</div>;
  }

  return (
    <div className="home-container">
      <h1 className="text-3xl font-bold text-center mt-4 mb-6" style={{ color: 'black' }}>
        ישר כוח לך מתנדב יקר
      </h1>
      {requests.length === 0 ? (
        <p className="text-center text-gray-500">לא נמצאו בקשות</p>
      ) : (
        <div className="container">
          <div className="col">
          
          <div className="gap-6" style={{justifyItems:'center'}}>
            {requests.map((request) => (
              <div 
                key={request.id} 
                className="bg-white shadow-lg rounded-xl p-4 border mb-2" 
                style={{ width: '700px' }} 
              >
                <div className="text-center">
                  <h4 className="text-xl font-semibold mb-2" style={{ color: '#000' }}>
                    {request.description}
                  </h4>
                  <p className="mb-1">מספר אנשים: 🙋‍♂️ {request.numPeople}</p>
                  <p className="mb-1">טלפון: 📞 {request.phone}</p>
                  <p className="mb-1">עדיפות: ⚠️ {request.priority}</p>
                  <p className="mb-1">סטטוס: 📊 {request.status}</p>
                  {(request.status.includes("בטיפול") || request.status.includes("הסתיים")) && (
                    <p className="mb-1">קוד מתנדב: {request.idVolunteer}</p>
                  )}
                  {request.status.includes("בטיפול") && (
                    <button 
                      className="btn btn-outline-dark mt-3" 
                      onClick={() => finishe(request._id)}>
                      סיום הטיפול
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
          </div>
        </div>
      )}
    </div>
  );
};