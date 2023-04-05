// // src/components/PhotoCard.js

// import React, { useState } from 'react';

// const PhotoCard = ({ photo, onDelete }) => {
//   const [isHovering, setIsHovering] = useState(false);
//   const [password, setPassword] = useState('');
//   const [deleteError, setDeleteError] = useState('');

//   const handleHover = () => {
//     setIsHovering(true);
//   };

//   const handleMouseLeave = () => {
//     setIsHovering(false);
//   };

//   const handlePasswordChange = (e) => {
//     setPassword(e.target.value);
//   };

//   const handleDelete = () => {
//     // Validate password and delete photo
//     if (password === 'password123') {
//       // Call the delete endpoint of the API
//       fetch(`http://localhost:5000/api/photos/${photo.id}`, {
//         method: 'DELETE',
//       })
//         .then(response => {
//           if (response.ok) {
//             onDelete(photo.id);
//           } else {
//             setDeleteError('Failed to delete photo. Please try again.');
//           }
//         })
//         .catch(error => {
//           setDeleteError('Failed to delete photo. Please try again.');
//         });
//     } else {
//       setDeleteError('Incorrect password. Please try again.');
//     }
//   };

//   return (
//     <div
//       className="photo-card"
//       onMouseEnter={handleHover}
//       onMouseLeave={handleMouseLeave}
//     >
//       <img src={photo.image} alt={photo.label} />
//       {isHovering && (
//         <div className="photo-card-overlay">
//           <div className="photo-card-label">{photo.label}</div>
//           <button className="photo-card-delete" onClick={handleDelete}>
//             Delete
//           </button>
//         </div>
//       )}
//       {deleteError && (
//         <div className="photo-card-error">{deleteError}</div>
//       )}
//     </div>
//   );
// };

// export default PhotoCard;
