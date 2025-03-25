import React from 'react';
import { createRequest, codeAddress } from '../HelpRequestApp';
import { LoadScript, Autocomplete } from '@react-google-maps/api';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useApiKey } from './UseContect';
export const CreateNewRequest = () => {
  const [newRequest, setNewRequest] = useState({ status: 'מחכה', idVolunteer: '000' });
  const [autocomplete, setAutocomplete] = useState(null);
  const [message, setMessage] = useState('');
  const navigate = useNavigate();
  const apiKey = useApiKey();
  const handleCreateRequest = async (e) => {
    e.preventDefault();
    try {
      await createRequest(newRequest);
      setNewRequest({ status: 'wait', idVolunteer: '000', coordinates: [] });
      setMessage(' הבקשה נשלחה בהצלחה!ניצור אתכם קשר בעוד כמה דקות 😊');
      // navigate('/Home');
      setTimeout(() => {
        setMessage('');
        navigate('/'); // מעבר לדף הבית
      }, 3000);
    } catch (error) {
      setMessage('ניסיון לשלוח את הבקשה נכשל! 😞');
      // navigate('/Home');
      setTimeout(() => {
        setMessage('');
        navigate('/'); // מעבר לדף הבית
      }, 3000);
    }
  };
  const handlePlaceChanged = () => {
    if (autocomplete !== null) {
      const place = autocomplete.getPlace();
      const addressComponents = place.address_components;
      const address = {
        city: '',
        street: '',
        number: '',
      };

      addressComponents.forEach(component => {
        const types = component.types;
        if (types.includes('locality')) {
          address.city = component.long_name;
        }
        if (types.includes('route')) {
          address.street = component.long_name;
        }
        if (types.includes('street_number')) {
          address.number = component.long_name;
        }
      });

      setNewRequest(prevRequest => ({
        ...prevRequest,
        coordinates: {
          lat: place.geometry.location.lat(),
          lng: place.geometry.location.lng(),
        },
      }));
    } else {
      console.log('Autocomplete is not loaded yet!');
    }
  };

  const handleLoad = (autocompleteInstance) => {
    setAutocomplete(autocompleteInstance);
  };

  return (
    <div className=" home-container" style={{height:'100vh'}}>
      <div className='card text-black'>
        <div className='card-body p-md-5'>
          <p class="text-center text-body h1 fw-bold mb-5 mt-4">בקשה חדשה לעזרה</p>
          <form onSubmit={handleCreateRequest} className="">
            <div class="d-flex flex-row align-items-center mb-4">
              <div class="form-outline flex-fill mb-0" >
                <input placeholder="טלפון" style={{'direction':'rtl'}}
                  type="tel" onBlur={(e) => setNewRequest({ ...newRequest, phone: e.target.value })} class="form-control" />
              </div>
            </div>
            <div class="d-flex flex-row align-items-center mb-4">
              <div class="form-outline flex-fill mb-0" >
                <input placeholder="תיאור"
                  type="text" onBlur={(e) => setNewRequest({ ...newRequest, description: e.target.value })} class="form-control" />
              </div>
            </div>
            <div class="d-flex flex-row align-items-center mb-4">
              <div class="form-outline flex-fill mb-0" >
                <input placeholder="מספר אנשים" style={{'direction':'rtl'}}
                  type="number" onBlur={(e) => setNewRequest({ ...newRequest, numPeople: e.target.value })} class="form-control" />
              </div>
            </div>
            <LoadScript googleMapsApiKey={apiKey} libraries={['places']}>
              <Autocomplete
                onLoad={handleLoad}
                onPlaceChanged={handlePlaceChanged}
                options={{
                  types: ['address'],
                  componentRestrictions: { country: 'IL' },
                }}
              >
                <div class="d-flex flex-row align-items-center mb-4">
                  <div class="form-outline flex-fill mb-0" >
                    <input placeholder="כתובת"
                      type="text" class="form-control" />
                  </div>
                </div>
              </Autocomplete>
            </LoadScript>
            <div class="d-flex flex-row align-items-center mb-4">
                  <div class="form-outline flex-fill mb-0" >
              <input
                list="priority"
                className="form-control"
                placeholder="רמת דחיפות"
                onBlur={(e) => setNewRequest({ ...newRequest, priority: e.target.value })}
              />
              <datalist id="priority">
                <option>קריטית</option>
                <option>גבוהה</option>
                <option>בינונית</option>
                <option>נמוכה</option>
              </datalist>
            </div>
            </div>
            <div className="form-group text-center">
              <input type="submit" value="שלח" className="btn btn-dark" />
            </div>
          </form>
        </div>
      </div>
      {message && (
        <div className={`alert ${message.includes('הצלחה') ? 'alert-success' : 'alert-danger'} text-center my-4 dark`}>
          {message}
        </div>
      )}
    </div>
  );
};