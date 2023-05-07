const express = require('express');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
dotenv.config();

const app = express();
const port = process.env.port || 8001;

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', '*');
  next();
});

const subsRoutes = require('./routes/subscription');
const userRoutes = require('./routes/user.js');
const eventRoutes = require('./routes/event');
const reportRoutes = require('./routes/report');
const viewnetworkstatus = require('./routes/viewnetworkstatus');
const network_analysis = require('./routes/network_analysis');

app.get('/', (req, res) => {
  res.status(200).json({ message: 'Welcome.' });
});

app.use(bodyParser.urlencoded({ extended: false }));

app.use(subsRoutes);
app.use(userRoutes);
app.use(eventRoutes);
app.use(reportRoutes);
app.use(viewnetworkstatus);
app.use(network_analysis);

app.listen(port, () => {
  console.log(`Now listening on port ${port}...`);
});

module.exports = app;
