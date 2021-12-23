const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');


const app = express();

// middleware
app.use(bodyParser.json());
app.use(cors());

// file dependancies
const bourbonRt = require('./routes/bourbonRt');
app.use('/collection', bourbonRt);

app.use((err, req, res, next) => {
    res.locals.error = err;
    const status = err.status || 5000;
    res.status(status);
    res.render('error');
  });

  // Handle production
  // if(process.env.NODE_ENV === 'production') {
  //   app.use(express.static(__dirname + '/public'));
  // }

  // // Handle SPA
  // app.get(/.*/, (req, res) => res.sendFile(__dirname + '/public/index.html'));

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server Connection Successful on Port ${port}`));