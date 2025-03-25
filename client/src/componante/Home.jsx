
import React from 'react';
import { useNavigate } from 'react-router-dom';

export const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <h1 className="mt-2"style={{ fontFamily: '"Roboto", sans-serif', fontSize: '100px' }}>ידידים</h1>
      <h1>יד ביד, כי אתה ידיד</h1>

      <div className="container">
        <div className="row align-items-end justify-content-between">
          
          {/* כרטיס מידע ראשון */}
          <div className="col-4 d-flex justify-content-center">
            <div 
              className="card bg-black text-white p-3" 
              style={{ 
                width: '300px', 
                height: '75vh', 
                borderRadius: '150px 150px 0 0', 
                boxShadow: '2px 2px 10px rgba(0, 0, 0, 0.2)',
                textAlign: 'center' 
              }}
            >
              <div className="card-body d-flex flex-column justify-content-end">
                <h4 className="card-title">על האתר והמתנדבים</h4>
                <p className="card-text">
                  האתר שלנו נועד לסייע ולעזור לאנשים הזקוקים לעזרה. 
                  המתנדבים שלנו עובדים ביחד כדי לספק פתרונות מהירים ויעילים.
                </p>
              </div>
            </div>
          </div>

          {/* כפתורי ניווט */}
          <div className="col-4 d-flex flex-column align-items-center gap-3">
            <button 
              className="btn btn-outline-dark big" 
              style={{ 
                width: '120px', 
                height: '120px', 
                borderRadius: '50%', 
                boxShadow: '2px 2px 10px rgba(0, 0, 0, 0.2)', 
                fontSize: '1.2rem' 
              }}
              onClick={() => navigate("/Valunteer")}
            >
              מתנדבים
            </button>
            <button 
              className="btn btn-outline-dark big" 
              style={{ 
                width: '120px', 
                height: '120px', 
                borderRadius: '50%', 
                boxShadow: '2px 2px 10px rgba(0, 0, 0, 0.2)', 
                fontSize: '1.2rem' 
              }}
              onClick={() => navigate("/CreateNewRequest")}
            >
              בקשת עזרה
            </button>
          </div>

          {/* כרטיס מידע שני */}
          <div className="col-4 d-flex justify-content-center">
            <div 
              className="card bg-black text-white p-3" 
              style={{ 
                width: '300px', 
                height: '60vh', 
                borderRadius: '150px 150px 0 0', 
                boxShadow: '2px 2px 10px rgba(0, 0, 0, 0.2)', 
                textAlign: 'center' 
              }}
            >
              <div className="card-body d-flex flex-column justify-content-end">
                <h4 className="card-title">למה להצטרף?</h4>
                <p className="card-text">
                  אם אתה רוצה לעזור ולתרום, זו הזדמנות מצוינת להפוך לחלק ממשהו גדול!
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
