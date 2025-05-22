// import React, { useState } from 'react';

// const PlanetaryPositions = () => {
//   const [dob, setDob] = useState('');
//   const [tob, setTob] = useState('');
//   const [place, setPlace] = useState('');
//   const [positions, setPositions] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState('');

//   const fetchCoordinates = async (placeName) => {
//     const response = await fetch(
//       `http://api.geonames.org/searchJSON?q=${placeName}&maxRows=1&username=vpranavamanjunath`
//     );
//     const data = await response.json();
//     if (!response.ok || data.geonames.length === 0) {
//       throw new Error('Place not found');
//     }
//     const { lat, lng } = data.geonames[0];
//     return { latitude: lat, longitude: lng };
//   };

//   const fetchPositions = async () => {
//     if (!dob || !tob || !place) {
//       setError('Please fill all the fields');
//       return;
//     }

//     setLoading(true);
//     setError('');
//     try {
//       const { latitude, longitude } = await fetchCoordinates(place);
//       const datetime = `${dob}T${tob}`;

//       const response = await fetch(
//         `https://api.prokerala.com/v2/astrology/planet-position?ayanamsa=1&datetime=${datetime}&latitude=${latitude}&longitude=${longitude}`,
//         {
//           method: 'GET',
//           headers: {
//             Authorization: 'Bearer YOUR_PROKERALA_ACCESS_TOKEN',
//           },
//         }
//       );

//       if (!response.ok) {
//         throw new Error('Failed to fetch planetary data');
//       }

//       const data = await response.json();
//       setPositions(data.data.planets);
//     } catch (err) {
//       setError(err.message || 'Failed to fetch data');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="p-4 max-w-md mx-auto">
//       <h2 className="text-xl font-bold mb-4">Horoscope Planetary Positions</h2>
//       <input
//         type="date"
//         value={dob}
//         onChange={(e) => setDob(e.target.value)}
//         className="border p-2 mb-2 w-full"
//       />
//       <input
//         type="time"
//         value={tob}
//         onChange={(e) => setTob(e.target.value)}
//         className="border p-2 mb-2 w-full"
//       />
//       <input
//         type="text"
//         placeholder="Birthplace (e.g. Delhi)"
//         value={place}
//         onChange={(e) => setPlace(e.target.value)}
//         className="border p-2 mb-4 w-full"
//       />
//       <button
//         onClick={fetchPositions}
//         className="bg-green-600 text-white px-4 py-2 rounded"
//       >
//         Get Planetary Data
//       </button>

//       {loading && <p className="mt-4">Loading...</p>}
//       {error && <p className="mt-4 text-red-500">{error}</p>}
//       {positions && (
//         <div className="mt-4">
//           <h3 className="font-semibold mb-2">Planetary Positions:</h3>
//           <ul className="list-disc pl-5">
//             {positions.map((planet, index) => (
//               <li key={index}>
//                 {planet.name}: {planet.fullDegree}°
//               </li>
//             ))}
//           </ul>
//         </div>
//       )}
//     </div>
//   );
// };

// export default PlanetaryPositions;





























import React, { useState } from 'react';

const PlanetaryPositions = () => {
  const [dob, setDob] = useState('');
  const [tob, setTob] = useState('');
  const [place, setPlace] = useState('');
  const [positions, setPositions] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const getAccessToken = async () => {
    const clientId = 'b4ff5a0d-a010-4066-a251-444fc8e84d5d'; // Replace with your actual Prokerala client ID
    const clientSecret = 'WHPtODDvMf1y1mDl4hYGSochAsP0Oninuy87YI1B'; // Replace with your actual Prokerala client secret

    try {
      const response = await fetch('https://api.prokerala.com/token', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          Authorization: 'Basic ' + btoa(`${clientId}:${clientSecret}`),
        },
        body: 'grant_type=client_credentials',
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error_description || 'Failed to get access token');
      }

      return data.access_token;
    } catch (err) {
      throw new Error('Unable to get access token: ' + err.message);
    }
  };

  const fetchCoordinates = async (placeName) => {
    const response = await fetch(
      `http://api.geonames.org/searchJSON?q=${placeName}&maxRows=1&username=vpranavamanjunath`
    );
    const data = await response.json();
    if (!response.ok || data.geonames.length === 0) {
      throw new Error('Place not found');
    }
    const { lat, lng } = data.geonames[0];
    return { latitude: lat, longitude: lng };
  };

  const fetchPositions = async () => {
    if (!dob || !tob || !place) {
      setError('Please fill all the fields');
      return;
    }

    setLoading(true);
    setError('');
    try {
      const { latitude, longitude } = await fetchCoordinates(place);
      const datetime = `${dob}T${tob}`;

      const token = await getAccessToken();

      const response = await fetch(
        `https://api.prokerala.com/v2/astrology/planet-position?ayanamsa=1&datetime=${datetime}&latitude=${latitude}&longitude=${longitude}`,
        {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (!response.ok) {
        throw new Error('Failed to fetch planetary data');
      }

      const data = await response.json();
      setPositions(data.data.planets);
    } catch (err) {
      setError(err.message || 'Failed to fetch data');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4">Horoscope Planetary Positions</h2>
      <input
        type="date"
        value={dob}
        onChange={(e) => setDob(e.target.value)}
        className="border p-2 mb-2 w-full"
      />
      <input
        type="time"
        value={tob}
        onChange={(e) => setTob(e.target.value)}
        className="border p-2 mb-2 w-full"
      />
      <input
        type="text"
        placeholder="Birthplace (e.g. Delhi)"
        value={place}
        onChange={(e) => setPlace(e.target.value)}
        className="border p-2 mb-4 w-full"
      />
      <button
        onClick={fetchPositions}
        className="bg-green-600 text-white px-4 py-2 rounded"
      >
        Get Planetary Data
      </button>

      {loading && <p className="mt-4">Loading...</p>}
      {error && <p className="mt-4 text-red-500">{error}</p>}
      {positions && (
        <div className="mt-4">
          <h3 className="font-semibold mb-2">Planetary Positions:</h3>
          <ul className="list-disc pl-5">
            {positions.map((planet, index) => (
              <li key={index}>
                {planet.name}: {planet.fullDegree}°
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default PlanetaryPositions;
