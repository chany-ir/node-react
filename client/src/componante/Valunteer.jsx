
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getById, createvolunteer } from '../VolunteerApp';

export const Valunteer = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [newVolunteer, setNewVolunteer] = useState({});
  const [errorMessage, setErrorMessage] = useState('');
  const [showError, setShowError] = useState(false);
  const navigate = useNavigate();

  async function getOne(id) {
    if (!id) {
      setErrorMessage('המתנדב אינו רשום');
      setShowError(true);
    } else {
      const volunteer = await getById(id);
      if (volunteer.length > 0) {
        console.log(volunteer[0].idVolunteer);
        localStorage.setItem("volunteerId", volunteer[0].idVolunteer);
        navigate('/SeeTheRequest');
      } else {
        setErrorMessage('הסיסמה שגויה');
        setShowError(true);
      }
    }
  }

  async function createVolunteerHandler() {
    if (newVolunteer.Fname && newVolunteer.Lname && newVolunteer.phon && newVolunteer.idVolunteer) {
      try {
        await createvolunteer(newVolunteer);
        setShowRegister(false);
        setShowLogin(true);
        setErrorMessage('הצטרפת בהצלחה, אנא התחבר');
        setShowError(true); 
      } catch (error) {
        setErrorMessage('אחד מהנתונים שהוקשו שגוי');
        setShowError(true); 
      }
    } else {
      setErrorMessage('יש למלא את כל השדות');
      setShowError(true); 
    }
  }
  function resetButtons() {
    setShowLogin(false);
    setShowRegister(false);
    setShowError(false);
  }


  return (
    <div className="home-container" style={{height:'100vh'}}>
      <h2>שלום לך מתנדב יקר</h2>
      {!showLogin && !showRegister && !showError && (
        <>
          <button className="btn btn-outline-dark" onClick={() => { setShowLogin(true); setShowRegister(false); }}>
            התחברות
          </button>
          <button className="btn btn-outline-dark" onClick={() => { setShowRegister(true); setShowLogin(false); }}>
            הרשמה
          </button>
        </>
      )}

      {showLogin && (
        <div>
          <input
            type="password"
            placeholder="קוד"
            onBlur={(e) => getOne(e.target.value)}
            className="form-control"
          />
        </div>
      )}

      {showRegister && (
        <div>
          <form className="form-container">
            <div className='card text-black'>
              <div className='card-body p-md-5'>
                <div className="d-flex flex-row align-items-center mb-4">
                  <div className="form-outline flex-fill mb-0">
                    <input placeholder="קוד"
                      type="password" onBlur={(e) => setNewVolunteer({ ...newVolunteer, idVolunteer: e.target.value })} className="form-control" />
                  </div>
                </div>
                <div className="d-flex flex-row align-items-center mb-4">
                  <div className="form-outline flex-fill mb-0">
                    <input placeholder="טלפון" style={{'direction':'rtl'}}
                      type="tel" onBlur={(e) => setNewVolunteer({ ...newVolunteer, phon: e.target.value })} className="form-control" />
                  </div>
                </div>
                <div className="d-flex flex-row align-items-center mb-4">
                  <div className="form-outline flex-fill mb-0">
                    <input placeholder="שם פרטי"
                      type="text" onBlur={(e) => setNewVolunteer({ ...newVolunteer, Fname: e.target.value })} className="form-control" />
                  </div>
                </div>
                <div className="d-flex flex-row align-items-center mb-4">
                  <div className="form-outline flex-fill mb-0">
                    <input placeholder="שם משפחה"
                      type="text" onBlur={(e) => setNewVolunteer({ ...newVolunteer, Lname: e.target.value })} className="form-control" />
                  </div>
                </div>
                <div className="form-group text-center">
                  <input
                    type="submit"
                    value="שלח"
                    className="btn btn-dark"
                    onClick={(e) => {
                      e.preventDefault();
                      createVolunteerHandler();
                    }}
                  />
                </div>
              </div>
            </div>
          </form>
        </div>
      )}
      {showError && (
        <div>
          <p style={{ color: 'red' }}>{errorMessage}</p>
          <button className="btn btn-outline-dark" onClick={resetButtons}>אישור</button>
        </div>
      )}
    </div>
  );
}
