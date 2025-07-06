const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://janu:asad12345@clustersho.7g5h9i7.mongodb.net/?retryWrites=true&w=majority&appName=Clustersho')
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log('MongoDB error:', err));
