const express = require('express');
//const mongoose = require('mongoose');
const port = 3050;

const app = express();
const cors = require('cors');
// try {
//   const uri = "mongodb+srv://ci583241971:UWueJkEQcPV15Gat@jewishhelp.wbhnm.mongodb.net/?retryWrites=true&w=majority&appName=JewishHelp&tlsAllowInvalidCertificates=true";

//     mongoose.connect(uri, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//       tlsCAFile: "C:\\netfree-ca.crt",

//     });
//   } catch (err) {
//     console.error(err.message);
//     process.exit(1);
//   }
//   const dbConnection = mongoose.connection;
//   dbConnection.once("open", (_) => {
//     console.log(`Database connected: ${url}`);
//   });
 
//   dbConnection.on("error", (err) => {
//     console.error(`connection error: ${err}`);
//   });
 
const HelpRequestRout = require('./Routs/HelpRequestRout');

const VolunteerRout = require('./Routs/VolunteerRout');

app.use(express.json());
app.use(cors());
app.use('/api/RoadsideFriends/help', HelpRequestRout);
app.use('/api/RoadsideFriends/volunteer', VolunteerRout);

app.get('/api/RoadsideFriends', (req, res) => {
    res.send('🚲🏍️🚜🛣️RoadsideFriends🚲🏍️🚜🛣️');
})

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('⬆️⬆️an error in app, please try again later...⬆️⬆️');
})
app.listen(port, () => {
       console.log(`I am runing at http://localhost:${port}/api/RoadsideFriends`)
});
