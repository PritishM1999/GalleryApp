import React, { useState, useEffect } from 'react';
import Photo from './componentsjs/Photo';
import PhotoUploadForm from './componentsjs/PhotoUploadForm';
import SearchBar from './componentsjs/SearchBar';
import axios from 'axios';
import './App.css';

axios.defaults.baseURL = 'http://localhost:5000';

const App = () => {
  const [photos, setPhotos] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const response = await axios.get(`/api/photos?search=${searchTerm}`);
        setPhotos(response.data);
        setError(null);
      } catch (error) {
        setError(error.response.data.error);
      }
    };
    fetchPhotos();
  }, [searchTerm]);

  // const handlePhotoUpload = (photo) => {
  //   setPhotos([...photos, photo]);
  // };

  const handlePhotoUpload = (response) => {
    const newPhoto = response.data;
    setPhotos((prevPhotos) => [...prevPhotos, newPhoto]);
  };

  

  const handlePhotoDelete = async (id) => {
    const confirmed = window.confirm('Are you sure you want to delete this photo?');
    if (!confirmed) {
      return;
    }

    const password = prompt('Enter password:');
    if (password !== 'password123') {
      alert('Incorrect password!');
      return;
    }

    try {
      await axios.delete(`/api/photos/${id}`);
      const updatedPhotos = photos.filter((photo) => photo.id !== id);
      setPhotos(updatedPhotos);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container">
      <h1 className="title">Photo Gallery</h1>
      {error && <div style={{ color: 'red' }}>{error}</div>}
      <PhotoUploadForm onUpload={handlePhotoUpload} />
      <SearchBar searchTerm={searchTerm} onSearch={setSearchTerm} />
      <div className="photo-container">
        {photos.map((photo) => (
          <Photo key={photo.id} photo={photo} onDelete={handlePhotoDelete} />
        ))}
        <p>Use password : password123 to delete the photos.</p>
      </div> 
    </div>
  );
};

export default App;








// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import Masonry from 'react-masonry-css';
// import Photo from './componentsjs/Photo';
// import PhotoUploadForm from './componentsjs/PhotoUploadForm';

// const breakpoints = {
//   default: 4,
//   1100: 3,
//   700: 2,
//   500: 1
// };

// function App() {
//   const [photos, setPhotos] = useState([]);

//   useEffect(() => {
//     axios.get('http://localhost:5000/api/photos')
//       .then(res => {
//         setPhotos(res.data);
//       })
//       .catch(err => {
//         console.log(err);
//       });
//   }, []);

//   const handlePhotoUpload = (photo) => {
//     setPhotos([photo, ...photos]);
//   };

//   const handlePhotoDelete = (photoId) => {
//     const password = prompt('Enter your password to confirm deletion:');
//     if (password) {
//       // axios.delete(`http://localhost:5000/api/photos/${photoId}`, { data: { password } })
//       axios.delete(`http://localhost:5000/`, { data: { password } })
//         .then(res => {
//           setPhotos(photos.filter(photo => photo._id !== photoId));
//         })
//         .catch(err => {
//           console.log(err);
//         });
//     }
//   };

//   const handleSearch = (query) => {
//     // axios.get(`http://localhost:5000/api/photos?label=${query}`)
//     axios.get(`http://localhost:5000/`)
//       .then(res => {
//         setPhotos(res.data);
//       })
//       .catch(err => {
//         console.log(err);
//       });
//   };

//   return (
//     <div className="App">
//       <h1>Photo Gallery</h1>
//       <PhotoUploadForm onPhotoUpload={handlePhotoUpload} />
//       <div className="search">
//         <label htmlFor="search">Search:</label>
//         <input type="text" id="search" onChange={(event) => handleSearch(event.target.value)} />
//       </div>
//       <Masonry
//         breakpointCols={breakpoints}
//         className="my-masonry-grid"
//         columnClassName="my-masonry-grid_column">
//         {photos.map(photo => (
//           <Photo key={photo._id} photo={photo} onDelete={handlePhotoDelete} />
//         ))}
//       </Masonry>
//     </div>
//   );
// }

// export default App;



// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import Masonry from 'react-masonry-css';
// import Photo from './componentsjs/Photo';
// import PhotoUploadForm from './componentsjs/PhotoUploadForm';

// const breakpoints = {
//   default: 4,
//   1100: 3,
//   700: 2,
//   500: 1
// };

// function App() {
//   const [photos, setPhotos] = useState([]);

//   useEffect(() => {
//     axios.get('http://localhost:5000/api/photos')
//       .then(res => {
//         setPhotos(res.data);
//       })
//       .catch(err => {
//         console.log(err);
//       });
//   }, []);

//   const handlePhotoUpload = (photo) => {
//     setPhotos([photo, ...photos]);
//   };

//   const handlePhotoDelete = (photoId) => {
//     const password = prompt('Enter your password to confirm deletion:');
//     if (password) {
//       axios.delete(`http://localhost:5000/api/photos/${photoId}`, { data: { password } })
//         .then(res => {
//           setPhotos(photos.filter(photo => photo._id !== photoId));
//         })
//         .catch(err => {
//           console.log(err);
//         });
//     }
//   };

//   const handleSearch = (query) => {
//     axios.get(`http://localhost:5000/api/photos?label=${query}`)
//       .then(res => {
//         setPhotos(res.data);
//       })
//       .catch(err => {
//         console.log(err);
//       });
//   };

//   return (
//     <div className="App">
//       <h1>Photo Gallery</h1>
//       <PhotoUploadForm onPhotoUpload={handlePhotoUpload} />
//       <div className="search">
//         <label htmlFor="search">Search:</label>
//         <input type="text" id="search" onChange={(event) => handleSearch(event.target.value)} />
//       </div>
//       <Masonry
//         breakpointCols={breakpoints}
//         className="my-masonry-grid"
//         columnClassName="my-masonry-grid_column">
//         {photos.map(photo => (
//           <Photo key={photo._id} photo={photo} onDelete={handlePhotoDelete} />
//         ))}
//       </Masonry>
//     </div>
//   );
// }

// export default App;



// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import Masonry from 'react-masonry-css';
// import Photo from './componentsjs/Photo';
// import PhotoUploadForm from './componentsjs/PhotoUploadForm';

// const breakpoints = {
//   default: 4,
//   1100: 3,
//   700: 2,
//   500: 1
// };

// function App() {
//   const [photos, setPhotos] = useState([]);

//   useEffect(() => {
//     axios.get('http://localhost:5000/api/photos')
//       .then(res => {
//         setPhotos(res.data);
//       })
//       .catch(err => {
//         console.log(err);
//       });
//   }, []);

//   const handlePhotoUpload = (photo) => {
//     setPhotos([photo, ...photos]);
//   };

//   const handlePhotoDelete = (photoId) => {
//     axios.delete(`http://localhost:5000/api/photos/${photoId}`)
//       .then(res => {
//         setPhotos(photos.filter(photo => photo._id !== photoId));
//       })
//       .catch(err => {
//         console.log(err);
//       });
//   };

//   const handleSearch = (query) => {
//     axios.get(`api/photos?label=${query}`)
//       .then(res => {
//         setPhotos(res.data);
//       })
//       .catch(err => {
//         console.log(err);
//       });
//   };

//   return (
//     <div className="App">
//       <h1>Photo Gallery</h1>
//       <PhotoUploadForm onPhotoUpload={handlePhotoUpload} />
//       <div className="search">
//         <label htmlFor="search">Search:</label>
//         <input type="text" id="search" onChange={(event) => handleSearch(event.target.value)} required/>
//       </div>
//       <Masonry
//         breakpointCols={breakpoints}
//         className="my-masonry-grid"
//         columnClassName="my-masonry-grid_column">
//         {photos.map(photo => (
//           <Photo key={photo._id} photo={photo} onDelete={handlePhotoDelete} />
//         ))}
//       </Masonry>
//     </div>
//   );
// }

// export default App;


// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import Masonry from 'react-masonry-css';
// import Photo from './componentsjs/Photo';
// import PhotoUploadForm from './componentsjs/PhotoUploadForm';

// const breakpoints = {
//   default: 4,
//   1100: 3,
//   700: 2,
//   500: 1
// };

// function App() {
//   const [photos, setPhotos] = useState([]);

//   useEffect(() => {
//     axios.get('http://localhost:5000/api/photos')
//       .then(res => {
//         setPhotos(res.data);
//       })
//       .catch(err => {
//         console.log(err);
//       });
//   }, []);

//   const handlePhotoUpload = (photo) => {
//     setPhotos([photo, ...photos]);
//   };

//   const handlePhotoDelete = (photoId) => {
//     axios.delete(`http://localhost:5000/api/photos/${photoId}`)
//       .then(res => {
//         setPhotos(photos.filter(photo => photo._id !== photoId));
//       })
//       .catch(err => {
//         console.log(err);
//       });
//   };

//   const handleSearch = (query) => {
//     axios.get(`api/photos?label=${query}`)
//       .then(res => {
//         setPhotos(res.data);
//       })
//       .catch(err => {
//         console.log(err);
//       });
//   };

//   return (
//     <div className="App">
//       <h1>Photo Gallery</h1>
//       <PhotoUploadForm onPhotoUpload={handlePhotoUpload} />
//       <div className="search">
//         <label htmlFor="search">Search:</label>
//         <input type="text" id="search" onChange={(event) => handleSearch(event.target.value)} />
//       </div>
//       <Masonry
//         breakpointCols={breakpoints}
//         className="my-masonry-grid"
//         columnClassName="my-masonry-grid_column">
//         {photos.map(photo => (
//           <Photo key={photo._id} photo={photo} onDelete={handlePhotoDelete} />
//         ))}
//       </Masonry>
//     </div>
//   );
// }

// export default App;


// import React, { useState } from 'react';
// import GalleryMasonry from './Components/masonarycss';
// import Gallery from './Components/Gallery'; // Update the import path based on your project's file structure

// const App = () => {
//   // State for managing the list of photos
//   const [photos, setPhotos] = useState([]);

//   // State for managing the search input value
//   const [search, setSearch] = useState('');

//   // Function to handle adding a new photo to the list
//   const handleAddPhoto = (photo) => {
//     // Add the new photo to the beginning of the list
//     setPhotos([photo, ...photos]);
//   };

//   // Function to handle deleting a photo from the list
//   const handleDeletePhoto = (id) => {
//     // Filter out the photo with the matching id
//     const updatedPhotos = photos.filter(photo => photo.id !== id);
//     setPhotos(updatedPhotos);
//   };

//   // Function to handle searching for photos by label
//   const handleSearch = (e) => {
//     // Update the search input value in state
//     setSearch(e.target.value);
//   };

//   // Filter the photos based on the search input value
//   const filteredPhotos = photos.filter(photo => photo.label.toLowerCase().includes(search.toLowerCase()));

//   return (
//     <div>
//       <h1>My Gallery App</h1>
//       <input type="text" placeholder="Search by label" value={search} onChange={handleSearch} />
//       <Gallery photos={filteredPhotos} onDeletePhoto={handleDeletePhoto} />
//       {/* Render other components as needed */}
//     </div>
//   );
// };

// export default App;



// // import logo from './logo.svg';
// // import './App.css';

// // function App() {
// //   return (
// //     <div className="App">
// //       <header className="App-header">
// //         <img src={logo} className="App-logo" alt="logo" />
// //         <p>
// //           Edit <code>src/App.js</code> and save to reload.
// //         </p>
// //         <a
// //           className="App-link"
// //           href="https://reactjs.org"
// //           target="_blank"
// //           rel="noopener noreferrer"
// //         >
// //           Learn React
// //         </a>
// //       </header>
// //     </div>
// //   );
// // }

// // export default App;
