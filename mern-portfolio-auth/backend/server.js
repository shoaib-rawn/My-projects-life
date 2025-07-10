const express = require('express');
const cors = require('cors');
const authRoutes = require('./routes/auth');
const app = express(); // ✅ MUST BE BEFORE app.use()

require('./db'); // Connect to MongoDB

app.use(cors());
app.use(express.json());

// Routes
app.use('/api', authRoutes);

app.get('/', (req, res) => {
  res.send("Backend working 👌");
});

app.listen(4000, () => console.log("✅ Server running on port 4000"));
