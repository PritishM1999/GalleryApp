// import React from 'react';
// // import '../../App.css';
import '../App.css';

// const Photo = ({ photos, onDelete }) => {
//   if (!photos || photos.length === 0) {
//     return <p>No photos found.</p>;
//   }

//   // return (
//   //   <div className="photo-container">
//   //     {photos.map((photo) => (
//   //       <div key={photo.id} className="photo-card">
//   //         <img src={`http://localhost:5000${photo.imageUrl}`} alt={photo.label} />
//   //         <div className="photo-label">{photo.label}</div>
//   //         <button onClick={() => onDelete(photo.id)}>Delete</button>
//   //       </div>
//   //     ))}
//   //   </div>
//   // );

//   return (
//         <div className="photo-container">
//           <img src={`http://localhost:5000${photos.path}`} alt={photos.label} />
//           <div className="photo-card">
//             <div className="photo-label">{photos.label}</div>
//             <button onClick={() => onDelete(photos.id)}>Delete</button>
//           </div>
//         </div>
//       );

// };

// export default Photo;





// import React from 'react';
// import PropTypes from 'prop-types';

// function Photo(props) {
//   const { photo, onDelete } = props;

//   return (
//     <div className="photo-card">
//       <img src={`http://localhost:5000/${photo.path}`} alt={photo.label} />
//       <div className="photo-label">{photo.label}</div>
//       <button onClick={() => onDelete(photo._id)}>Delete</button>
//     </div>
//   );
// }

// Photo.propTypes = {
//   photo: PropTypes.shape({
//     _id: PropTypes.string.isRequired,
//     path: PropTypes.string.isRequired,
//     label: PropTypes.string.isRequired
//   }).isRequired,
//   onDelete: PropTypes.func.isRequired
// };

// export default Photo;



import React from "react";

const Photo = ({ photo, onDelete }) => {
  const { url, label } = photo;

  const handleDelete = () => {
    const confirmDelete = window.confirm("Are you sure you want to delete this photo?");

    if (confirmDelete) {
      onDelete(photo.id);
    }
  };

  return (
    <div className="photo">
      <img src={url} alt={label} />
      <div className="overlay">
        <div className="label">{photo.id}</div>
        {/* <div className="label">{photo.image}</div> */}
        <button className="delete-button" onClick={handleDelete}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default Photo;
