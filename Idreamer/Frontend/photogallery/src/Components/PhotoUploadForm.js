// // src/components/PhotoUploadForm.js

// import React, { useState } from 'react';

// const PhotoUploadForm = ({ onPhotoUpload }) => {
//   const [image, setImage] = useState(null);
//   const [label, setLabel] = useState('');
//   const [uploadError, setUploadError] = useState('');

//   const handleImageChange = (e) => {
//     setImage(e.target.files[0]);
//   };

//   const handleLabelChange = (e) => {
//     setLabel(e.target.value);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Create FormData object to send image file
//     const formData = new FormData();
//     formData.append('image', image);
//     formData.append('label', label);

//     // Call the upload endpoint of the API
//     fetch('http://localhost:5000/api/photos', {
//       method: 'POST',
//       body: formData,
//     })
//       .then(response => response.json())
//       .then(data => {
//         onPhotoUpload(data); // Call the callback with the newly uploaded photo
//         setImage(null);
//         setLabel('');
//         setUploadError('');
//       })
//       .catch(error => {
//         setUploadError('Failed to upload photo. Please try again.');
//       });
//   };

//   return (
//     <form className="photo-upload-form" onSubmit={handleSubmit}>
//       <input
//         type="file"
//         accept="image/*"
//         onChange={handleImageChange}
//         required
//       />
//       <input
//         type="text"
//         placeholder="Enter label"
//         value={label}
//         onChange={handleLabelChange}
//         required
//       />
//       <button type="submit">Upload</button>
//       {uploadError && (
//         <div className="photo-upload-error">{uploadError}</div>
//       )}
//     </form>
//   );
// };

// export default PhotoUploadForm;
