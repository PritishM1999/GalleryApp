// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import Masonry from 'react-masonry-css';
// import Photo from './Photo';

// const breakpointColumnsObj = {
//   default: 3,
//   1100: 2,
//   700: 1,
// };

// const PhotoGallery = () => {
//   const [photos, setPhotos] = useState([]);

//   const loadPhotos = async () => {
//     try {
//       const response = await axios.get('http://localhost:5000/api/photos');
//       const loadedPhotos = response.data;
//       setPhotos(loadedPhotos);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const addPhoto = (newPhoto) => {
//     setPhotos([newPhoto, ...photos]);
//   };

//   const deletePhoto = async (photoId) => {
//     const password = prompt('Enter your password to delete this photo:');
//     if (password) {
//       try {
//         await axios.delete(`http://localhost:5000/api/photos/${photoId}`, {
//           // data: { password },
//         });
//         const updatedPhotos = photos.filter((photo) => photo._id !== photoId);
//         setPhotos(updatedPhotos);
//       } catch (error) {
//         console.error(error);
//       }
//     }
//   };

//   useEffect(() => {
//     loadPhotos();
//   }, []);

//   const photoElements = photos.map((photo) => (
//     <Photo key={photo._id} photo={photo} onDelete={deletePhoto} />
//   ));

//   return (
//     <Masonry
//       breakpointCols={breakpointColumnsObj}
//       className="my-masonry-grid"
//       columnClassName="my-masonry-grid_column"
//     >
//       {photoElements}
//     </Masonry>
//   );
// };

// export default PhotoGallery;
