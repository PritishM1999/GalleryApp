import React, { useState } from 'react';
import axios from 'axios';
axios.defaults.baseURL = 'http://localhost:5000';

const PhotoUploadForm = ({ onUpload, token }) => {
  const [label, setLabel] = useState('');
  const [image, setImage] = useState(null);
  const [error, setError] = useState(null);

  const handleLabelChange = (event) => {
    setLabel(event.target.value);
  };

  const handleImageChange = (event) => {
    setImage(event.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!label || !image) {
      setError('Please enter a label and select an image.');
      return;
    }

    const formData = new FormData();
    formData.append('label', label);
    formData.append('image', image);

    try {
      const response = await axios.post('/api/photos', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${token}`,
        },
      });
      onUpload(response);
      setLabel('');
      setImage(null) || setImage('');
      setError(null) || setError('');
    } catch (error) {
      setError(error.response.data.error);
    }
  };


  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="label">Label:</label>
        <input type="text" id="label" value={label} onChange={handleLabelChange} />
      </div>
      <div>
        <label htmlFor="image">Image:</label>
        <input type="file" id="image" onChange={handleImageChange} />
      </div>
      {error && <div style={{ color: 'red' }}>{error}</div>}
      <button type="submit">Upload</button>
    </form>
  );
};

export default PhotoUploadForm;

// import React, { useState } from 'react';
// import axios from 'axios';
// axios.defaults.baseURL = 'http://localhost:5000';

// const PhotoUploadForm = ({ onUpload, token }) => {
//   const [label, setLabel] = useState('');
//   const [image, setImage] = useState('');
//   const [error, setError] = useState(null);

//   const handleLabelChange = (event) => {
//     setLabel(event.target.value);
//   };

//   const handleImageChange = (event) => {
//     setImage(event.target.value);
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     if (!label || !image) {
//       setError('Please enter a label and image URL.');
//       return;
//     }

//     try {
//       const response = await axios.post('/api/photos', { label, image }, {
//         headers: {
//           'Content-Type': 'application/json',
//           Authorization: `Bearer ${token}`,
//         },
//       });
//       onUpload(response.data);
//       setLabel('');
//       setImage('');
//       setError(null);
//     } catch (error) {
//       setError(error.response.data.error);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <div>
//         <label htmlFor="label">Label:</label>
//         <input type="text" id="label" value={label} onChange={handleLabelChange} />
//       </div>
//       <div>
//         <label htmlFor="image">Image URL:</label>
//         <input type="text" id="image" value={image} onChange={handleImageChange} />
//       </div>
//       {error && <div style={{ color: 'red' }}>{error}</div>}
//       <button type="submit">Upload</button>
//     </form>
//   );
// };

// export default PhotoUploadForm;



// import React, { useState } from 'react';
// import axios from 'axios';
// axios.defaults.baseURL = 'http://localhost:5000';

// const PhotoUploadForm = ({ onUpload, token }) => {
//   const [label, setLabel] = useState('');
//   const [image, setImage] = useState(null);
//   const [error, setError] = useState(null);

//   const handleLabelChange = (event) => {
//     setLabel(event.target.value);
//   };

//   const handleImageChange = (event) => {
//     setImage(event.target.files[0]);
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     if (!label || !image) {
//       setError('Please enter a label and select an image.');
//       return;
//     }

//     const formData = new FormData();
//     formData.append('label', label);
//     formData.append('image', image);

//     try {
//       const response = await axios.post('/api/photos', formData, {
//         headers: {
//           'Content-Type': 'multipart/form-data',
//           Authorization: `Bearer ${token}`,
//         },
//       });
//       onUpload(response);
//       setLabel('');
//       setImage(null) || setImage('');
//       setError(null) || setError('');
//     } catch (error) {
//       setError(error.response.data.error);
//     }
//   };


//   return (
//     <form onSubmit={handleSubmit}>
//       <div>
//         <label htmlFor="label">Label:</label>
//         <input type="text" id="label" value={label} onChange={handleLabelChange} />
//       </div>
//       <div>
//         <label htmlFor="image">Image:</label>
//         <input type="file" id="image" onChange={handleImageChange} />
//       </div>
//       {error && <div style={{ color: 'red' }}>{error}</div>}
//       <button type="submit">Upload</button>
//     </form>
//   );
// };

// export default PhotoUploadForm;






// import React, { useState } from 'react';
// import axios from 'axios';

// axios.defaults.baseURL = 'http://localhost:5000';

// const PhotoUploadForm = ({ onUpload }) => {
//   const [label, setLabel] = useState('');
//   const [image, setImage] = useState(null);
//   const [error, setError] = useState(null);

//   const handleLabelChange = (event) => {
//     setLabel(event.target.value);
//   };

//   const handleImageChange = (event) => {
//     setImage(event.target.files[0]);
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();
  
//     const formData = new FormData();
//     formData.append('label', label);
//     formData.append('image', image);
  
//     try {
//       const response = await axios.post('/api/photos', formData, {
//         headers: { 'Content-Type': 'multipart/form-data' },
//       });
//       onUpload(response.data);
//       setLabel('');
//       setImage(null);
//       setError(null);
//     } catch (error) {
//       if (error.response && error.response.data) {
//         setError(error.response.data.error);
//       } else {
//         setError('An error occurred while uploading the photo.');
//       }
//     }
//   };
  

//   return (
//     <form onSubmit={handleSubmit}>
//       <div>
//         <label htmlFor="label">Label:</label>
//         <input type="text" id="label" value={label} onChange={handleLabelChange} />
//       </div>
//       <div>
//         <label htmlFor="image">Image:</label>
//         <input type="file" id="image" onChange={handleImageChange} />
//       </div>
//       {error && <div style={{ color: 'red' }}>{error}</div>}
//       <button type="submit">Upload</button>
//     </form>
//   );
// };

// export default PhotoUploadForm;




// import React, { useState } from 'react';
// import axios from 'axios';

// function PhotoUploadForm(props) {
//   const [file, setFile] = useState(null);
//   const [label, setLabel] = useState('');
//   const [error, setError] = useState('');

//   const handleFileChange = (event) => {
//     setFile(event.target.files[0]);
//   };

//   const handleLabelChange = (event) => {
//     setLabel(event.target.value);
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();

//     if (!file || !label) {
//       setError('Please select a file and enter a label.');
//       return;
//     }

//     const formData = new FormData();
//     formData.append('photo', file);
//     formData.append('label', label);

//     axios.post('http://localhost:5000/api/photos', formData)
//       .then(res => {
//         props.onPhotoUpload(res.data);
//         setFile(null);
//         setLabel('');
//         setError('');
//       })
//       .catch(err => {
//         console.log(err);
//       });
//   };

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label htmlFor="file">Choose a file:</label>
//           <input type="file" id="file" onChange={handleFileChange} />
//         </div>
//         <div>
//           <label htmlFor="label">Label:</label>
//           <input type="text" id="label" value={label} onChange={handleLabelChange} />
//         </div>
//         {error && <div className="error">{error}</div>}
//         <button type="submit">Upload</button>
//       </form>
//     </div>
//   );
// }

// export default PhotoUploadForm;



// import React, { useState } from 'react';
// import axios from 'axios';

// function PhotoUploadForm(props) {
//   const [image, setImage] = useState(null);
//   const [label, setLabel] = useState('');
//   const [error, setError] = useState('');

//   const handleSubmit = (event) => {
//     event.preventDefault();

//     if (!image || !label) {
//       setError('Please select an image and enter a label');
//       return;
//     }

//     const formData = new FormData();
//     formData.append('image', image);
//     formData.append('label', label);

//     axios.post('http://localhost:5000/api/photos', formData, {
//       headers: {
//         'Content-Type': 'multipart/form-data'
//       }
//     })
//       .then(res => {
//         props.onPhotoUpload(res.data);
//         setImage(null);
//         setLabel('');
//         setError('');
//       })
//       .catch(err => {
//         console.log(err);
//       });
//   };

//   return (
//     <div className="photo-upload-form">
//       {error && <div className="error">{error}</div>}
//       <form onSubmit={handleSubmit}>
//         <div className="form-group">
//           <label htmlFor="image">Choose a photo:</label>
//           <input type="file" id="image" onChange={(event) => setImage(event.target.files[0])} />
//         </div>
//         <div className="form-group">
//           <label htmlFor="label">Label:</label>
//           <input type="text" id="label" value={label} onChange={(event) => setLabel(event.target.value)} />
//         </div>
//         <button type="submit">Upload</button>
//       </form>
//     </div>
//   );
// }

// export default PhotoUploadForm;




// import React, { useState } from 'react';
// import axios from 'axios';

// function PhotoUploadForm(props) {
//   const [file, setFile] = useState(null);
//   const [label, setLabel] = useState('');
//   const [error, setError] = useState(null);

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     if (!file) {
//       setError('Please select an image');
//       return;
//     }

//     if (label.trim() === '') {
//       setError('Please provide a label');
//       return;
//     }

//     const formData = new FormData();
//     formData.append('image', file);
//     formData.append('label', label);

//     try {
//       const res = await axios.post('http://localhost:5000/api/photos', formData, {
//         headers: {
//           'Content-Type': 'multipart/form-data'
//         }
//       });
//       props.onPhotoUpload(res.data);
//       setFile(null);
//       setLabel('');
//       setError(null);
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   const handleFileChange = (event) => {
//     setFile(event.target.files[0]);
//   };

//   const handleLabelChange = (event) => {
//     setLabel(event.target.value);
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <h2>Add Photo</h2>
//       <div>
//         <label htmlFor="image">Image:</label>
//         <input type="file" id="image" accept=".jpg,.jpeg,.png" onChange={handleFileChange} />
//       </div>
//       <div>
//         <label htmlFor="label">Label:</label>
//         <input type="text" id="label" value={label} onChange={handleLabelChange} />
//       </div>
//       {error && <div className="error">{error}</div>}
//       <button type="submit">Upload</button>
//     </form>
//   );
// }

// export default PhotoUploadForm;




// import React, { useState } from 'react';
// import axios from 'axios';

// const PhotoUploadForm = ({ onAddPhoto }) => {
//   const [file, setFile] = useState(null);
//   const [label, setLabel] = useState('');

//   const handleFileChange = (event) => {
//     setFile(event.target.files[0]);
//   };

//   const handleLabelChange = (event) => {
//     setLabel(event.target.value);
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     const formData = new FormData();
//     formData.append('photo', file);
//     formData.append('label', label);
//     try {
//       const response = await axios.post('http://localhost:5000/api/photos', formData, {
//         headers: { 'Content-Type': 'multipart/form-data' },
//       });
//       const newPhoto = response.data;
//       onAddPhoto(newPhoto);
//       setFile(null);
//       setLabel('');
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input type="file" onChange={handleFileChange} />
//       <input type="text" value={label} onChange={handleLabelChange} />
//       <button type="submit">Upload</button>
//     </form>
//   );
// };

// export default PhotoUploadForm;
