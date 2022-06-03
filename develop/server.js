const express = require('express');
const app = express();
const htmlRoutes = require('./routes/htmlRoutes');
const apiRoutes = require('./routes/apiRoutes');
const PORT = process.env.PORT || 3000;


app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use('/', htmlRoutes);
app.use('/api', apiRoutes);

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`)
});

