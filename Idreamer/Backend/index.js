const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

let photos = []; // store photos in memory for simplicity, should use a database in production

app.use(cors());
app.use(bodyParser.json());

// API endpoint to get all photos
app.get('/api/photos', (req, res) => {
  console.log(req.body)
  try {
    res.json(photos);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch photos' });
  }
});

// API endpoint to add a new photo
app.post('/api/photos', (req, res) => {
  try {
    const { label, image } = req.body;
    const newPhoto = { id: Date.now(), label, image };
    photos.unshift(newPhoto); // add new photo to the beginning of the array
    res.json(newPhoto);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to add photo' });
  }
});

// API endpoint to delete a photo by ID
app.delete('/api/photos/:id', (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const index = photos.findIndex(photo => photo.id === id);
    if (index === -1) {
      return res.status(404).json({ error: 'Photo not found' });
    }
    const password = req.query.password;
    if (password === 'password123') {
      return res.status(401).json({ error: 'Invalid password' });
    }
    photos.splice(index, 1); // remove photo with matching ID from the array
    res.json({ message: 'Photo deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to delete photo' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});



// // backend/index.js

// const express = require('express');
// const bodyParser = require('body-parser');
// const cors = require('cors');

// const app = express();
// const PORT = process.env.PORT || 5000;

// let photos = []; // store photos in memory for simplicity, should use a database in production

// app.use(cors());
// app.use(bodyParser.json());

// // API endpoint to get all photos
// app.get('/api/photos', (req, res) => {
//   try {
//     res.json(photos);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'Failed to fetch photos' });
//   }
// });

// // API endpoint to add a new photo
// app.post('/api/photos', (req, res) => {
//   try {
//     const { label, image } = req.body;
//     const newPhoto = { id: Date.now(), label, image };
//     photos.unshift(newPhoto); // add new photo to the beginning of the array
//     res.json(newPhoto);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'Failed to add photo' });
//   }
// });

// // API endpoint to delete a photo by ID
// app.delete('/api/photos/:id', (req, res) => {
//   try {
//     const id = parseInt(req.params.id);
//     const index = photos.findIndex(photo => photo.id === id);
//     if (index === -1) {
//       return res.status(404).json({ error: 'Photo not found' });
//     }
//     const password = req.query.password;
//     if (password !== 'password123') {
//       return res.status(401).json({ error: 'Invalid password' });
//     }
//     photos.splice(index, 1); // remove photo with matching ID from the array
//     res.json({ message: 'Photo deleted successfully' });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'Failed to delete photo' });
//   }
// });

// // Start the server
// app.listen(PORT, () => {
//   console.log(`Server is running on http://localhost:${PORT}`);
// });



// const express = require('express');
// const bodyParser = require('body-parser');
// const cors = require('cors');

// const app = express();
// const PORT = process.env.PORT || 5000;

// let photos = [];

// app.use(cors());
// app.use(bodyParser.json());

// // API endpoint to get all photos
// app.get('/api/photos', (req, res) => {
//   try {
//     res.json(photos);
//   } catch (error) {
//     res.status(500).json({ error: 'Failed to fetch photos' });
//   }
// });

// // API endpoint to add a new photo
// app.post('/api/photos', (req, res) => {
//   try {
//     const { label, image } = req.body;
//     if (!label || !image) {
//       return res.status(400).json({ error: 'Label and image are required fields' });
//     }
//     const newPhoto = { id: Date.now(), label, image };
//     photos.unshift(newPhoto);
//     res.json(newPhoto);
//   } catch (error) {
//     res.status(500).json({ error: 'Failed to add photo' });
//   }
// });

// // API endpoint to delete a photo by ID
// app.delete('/api/photos/:id', (req, res) => {
//   try {
//     const id = parseInt(req.params.id);
//     const password = req.query.password;
//     if (password !== 'password123') {
//       return res.status(401).json({ error: 'Incorrect password' });
//     }
//     const index = photos.findIndex(photo => photo.id === id);
//     if (index === -1) {
//       return res.status(404).json({ error: 'Photo not found' });
//     }
//     const deletedPhoto = photos.splice(index, 1)[0];
//     res.json({ message: 'Photo deleted successfully', photo: deletedPhoto });
//   } catch (error) {
//     res.status(500).json({ error: 'Failed to delete photo' });
//   }
// });

// // API endpoint to search for photos by label
// app.get('/api/search', (req, res) => {
//   try {
//     const query = req.query.q.toLowerCase();
//     const filteredPhotos = photos.filter(photo => photo.label.toLowerCase().includes(query));
//     res.json(filteredPhotos);
//   } catch (error) {
//     res.status(500).json({ error: 'Failed to search photos' });
//   }
// });

// // Start the server
// app.listen(PORT, () => {
//   console.log(`Server is running on http://localhost:${PORT}`);
// });





// const express = require('express');
// const bodyParser = require('body-parser');
// const cors = require('cors');

// const app = express();
// const PORT = process.env.PORT || 5000;

// let photos = []; // store photos in memory for simplicity, should use a database in production
// const password = 'password123'; // hardcoded password for demo purposes

// app.use(cors());
// app.use(bodyParser.json());

// // API endpoint to get all photos
// app.get('/api/photos', (req, res) => {
//   try {
//     res.json(photos);
//   } catch (error) {
//     res.status(500).json({ error: 'Failed to fetch photos' });
//   }
// });

// // API endpoint to add a new photo
// app.post('/api/photos', (req, res) => {
//   try {
//     const { label, image } = req.body;
//     const newPhoto = { id: Date.now(), label, image };
//     photos.unshift(newPhoto); // add new photo to the beginning of the array
//     res.json(newPhoto);
//   } catch (error) {
//     res.status(500).json({ error: 'Failed to add photo' });
//   }
// });

// // API endpoint to delete a photo by ID
// app.delete('/api/photos/:id', (req, res) => {
//   try {
//     const id = parseInt(req.params.id);
//     const authHeader = req.headers.authorization;
//     if (!authHeader) {
//       return res.status(401).json({ error: 'Authorization header missing' });
//     }
//     const authToken = authHeader.split(' ')[1];
//     if (authToken !== password) {
//       return res.status(401).json({ error: 'Invalid password' });
//     }
//     photos = photos.filter(photo => photo.id !== id); // remove photo with matching ID from the array
//     res.json({ message: 'Photo deleted successfully' });
//   } catch (error) {
//     res.status(500).json({ error: 'Failed to delete photo' });
//   }
// });

// // Start the server
// app.listen(PORT, () => {
//   console.log(`Server is running on http://localhost:${PORT}`);
// });



// const express = require('express');
// const bodyParser = require('body-parser');
// const cors = require('cors');

// const app = express();
// const PORT = process.env.PORT || 5000;

// let photos = []; // store photos in memory for simplicity, should use a database in production
// const password = 'password123'; // hardcoded password for demo purposes

// app.use(cors());
// app.use(bodyParser.json());

// // API endpoint to get all photos
// app.get('/api/photos', (req, res) => {
//   try {
//     res.json(photos);
//   } catch (error) {
//     res.status(500).json({ error: 'Failed to fetch photos' });
//   }
// });

// // API endpoint to add a new photo
// app.post('/api/photos', (req, res) => {
//   try {
//     const { label, image } = req.body;
//     const newPhoto = { id: Date.now(), label, image };
//     photos.unshift(newPhoto); // add new photo to the beginning of the array
//     res.json(newPhoto);
//   } catch (error) {
//     res.status(500).json({ error: 'Failed to add photo' });
//   }
// });

// // API endpoint to delete a photo by ID
// app.delete('/api/photos/:id', (req, res) => {
//   try {
//     const id = parseInt(req.params.id);
//     const authHeader = req.headers.authorization;
//     if (!authHeader) {
//       return res.status(401).json({ error: 'Authorization header missing' });
//     }
//     const authToken = authHeader.split(' ')[1];
//     if (authToken !== password) {
//       return res.status(401).json({ error: 'Invalid password' });
//     }
//     photos = photos.filter(photo => photo.id !== id); // remove photo with matching ID from the array
//     res.json({ message: 'Photo deleted successfully' });
//   } catch (error) {
//     res.status(500).json({ error: 'Failed to delete photo' });
//   }
// });

// // Start the server
// app.listen(PORT, () => {
//   console.log(`Server is running on http://localhost:${PORT}`);
// });


// // backend/index.js

// const express = require('express');
// const bodyParser = require('body-parser');
// const cors = require('cors');

// const app = express();
// const PORT = process.env.PORT || 5000;

// let photos = []; // store photos in memory for simplicity, should use a database in production

// app.use(cors());
// app.use(bodyParser.json());

// // API endpoint to get all photos
// app.get('/api/photos', (req, res) => {
//   try {
//     res.json(photos);
//   } catch (error) {
//     res.status(500).json({ error: 'Failed to fetch photos' });
//   }
// });

// // API endpoint to add a new photo
// app.post('/api/photos', (req, res) => {
//   try {
//     const { label, image } = req.body;
//     const newPhoto = { id: Date.now(), label, image };
//     photos.unshift(newPhoto); // add new photo to the beginning of the array
//     res.json(newPhoto);
//   } catch (error) {
//     res.status(500).json({ error: 'Failed to add photo' });
//   }
// });

// // API endpoint to delete a photo by ID
// app.delete('/api/photos/:id', (req, res) => {
//   try {
//     const id = parseInt(req.params.id);
//     photos = photos.filter(photo => photo.id !== id); // remove photo with matching ID from the array
//     res.json({ message: 'Photo deleted successfully' });
//   } catch (error) {
//     res.status(500).json({ error: 'Failed to delete photo' });
//   }
// });

// // Start the server
// app.listen(PORT, () => {
//   console.log(`Server is running on http://localhost:${PORT}`);
// });


// const express = require('express');
// const bodyParser = require('body-parser');
// const cors = require('cors');
// const { v4: uuidv4 } = require('uuid'); // for generating unique ids

// const app = express();
// const PORT = 5000; // Update the port number as needed

// // Middleware
// app.use(cors());
// app.use(bodyParser.json());

// // Gallery data storage
// const gallery = [];

// // Add a new photo to the gallery
// app.post('/api/photos', (req, res) => {
//   const { label, imageUrl } = req.body;
//   const newPhoto = { id: uuidv4(), label, imageUrl };
//   gallery.unshift(newPhoto); // Add the new photo to the beginning of the gallery array
//   res.status(201).json(newPhoto);
// });

// // Get all photos in the gallery
// app.get('/api/photos', (req, res) => {
//   res.json(gallery);
// });

// // Delete a photo from the gallery
// app.delete('/api/photos/:id', (req, res) => {
//   const { id } = req.params;
//   const index = gallery.findIndex(photo => photo.id === id);
//   if (index !== -1) {
//     gallery.splice(index, 1); // Remove the photo from the gallery array
//     res.json({ success: true });
//   } else {
//     res.status(404).json({ error: 'Photo not found' });
//   }
// });

// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });
