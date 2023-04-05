// // src/components/Gallery.js

// import React, { useState, useEffect } from 'react';
// import Masonry from 'react-masonry-css';
// import PhotoCard from './PhotoCard';
// import PhotoUploadForm from './PhotoUploadForm';

// const Gallery = () => {
//   const [photos, setPhotos] = useState([]);

//   useEffect(() => {
//     // Fetch the list of photos from the API
//     fetch('http://localhost:5000/api/photos')
//       .then(response => response.json())
//       .then(data => setPhotos(data));
//   }, []);

//   const handlePhotoUpload = (newPhoto) => {
//     // Add the new photo to the list
//     setPhotos([newPhoto, ...photos]);
//   };

//   const handlePhotoDelete = (photoId) => {
//     // Delete the photo from the list
//     setPhotos(photos.filter(photo => photo.id !== photoId));
//   };

//   return (
//     <div>
//       <PhotoUploadForm onPhotoUpload={handlePhotoUpload} />
//       <Masonry
//         breakpointCols={3}
//         className="my-masonry-grid"
//         columnClassName="my-masonry-grid_column"
//       >
//         {photos.map(photo => (
//           <PhotoCard
//             key={photo.id}
//             photo={photo}
//             onDelete={handlePhotoDelete}
//           />
//         ))}
//       </Masonry>
//     </div>
//   );
// };

// export default Gallery;
