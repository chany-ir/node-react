// const mongoose = require('mongoose');

// main().catch(err => console.error(err));

// async function main() {
//     // await mongoose.connect('mongodb+srv://maching:1234@cluster0.xcqtw.mongodb.net/');
//     // mongodb+srv://ci583241971:*****@jewishhelp.wbhnm.mongodb.net/
//     const uri = "mongodb+srv://ci583241971:UWueJkEQcPV15Gat@JewishHelp.wbhnm.mongodb.net/Jewish_help";
//     const clientOptions = {
//         useUnifiedTopology: true,
//         serverSelectionTimeoutMS: 20000
       
//     };
//   }
  const mongoose= require('mongoose');

  main().catch(err=>console.log(err));
  
  async function main(){
    // mongodb+srv://ci583241971:UWueJkEQcPV15Gat@jewishhelp.wbhnm.mongodb.net/Jewish_help
    //mongodb+srv://ci583241971:yHhTgSCMoh2ClaQD@try.scpxu.mongodb.net/
    //  mongodb+srv://talmidatichnutchanairom:ETYO0WRrT4oGFK94@myfirstproject.er4mp.mongodb.net/?retryWrites=true&w=majority&appName=myfirstProject
    //await mongoose.connect('mongodb+srv://talmidatichnutchanairom:X2MUAdksylXywJI1@exampleclu2.ojnz1.mongodb.net?retryWrites=true&writeConcern=majority')
    //?retryWrites=true&w=majority&appName=myProject

    try{
    await mongoose.connect('mongodb+srv://talmidatichnutchanairom:5MHNrjg8HsD100pH@myproject.kmwgx.mongodb.net/jewish_help?retryWrites=true&w=majority&appName=myProject')
    console.log("connect to db");
    }
      catch(er){
        console.log("the error is: ",er.message);
        
      }
  }
module.exports = mongoose;
// mongodb+srv://talmidatichnutmiriamkarmarsky:MhuOvMtJBe1AZE3U@cluster0.qrxnj.mongodb.net/achim
//     try {
//         await mongoose.connect(uri, clientOptions);
//         await mongoose.connection.on('error', err => {
//             console.log(err);
//           });
          
//         console.log('connect to mongodb!!');
//     } catch (error) {
//         console.log(error);
//     }
//     finally {
//         await mongoose.disconnect();
//     }
//     // 
//     // &appName=JewishHelp
// }
// module.exports = mongoose;
// const mongoose = require('mongoose');

// main().catch(err=>console.error(err));

// async function main(){
//     // await mongoose.connect('mongodb+srv://maching:1234@cluster0.xcqtw.mongodb.net/');
//     await mongoose.connect('mongodb+srv://ci583241971:UWueJkEQcPV15Gat@jewishhelp.wbhnm.mongodb.net/Jewish_help?retryWrites=true&w=majority&appName=JewishHelp', { 
//     useNewUrlParser: true, 
//     useUnifiedTopology: true,
//     serverSelectionTimeoutMS: 20000 // 20 שניות
// });
//     console.log('connect to mongodb!!');
// }
// module.exports = mongoose;
// export default function connectDB() {
//     const url = "mongodb://127.0.0.1/blog_db";
   
//     try {
//       mongoose.connect(url, {
//         useNewUrlParser: true,
//         useUnifiedTopology: true,
//       });
//     } catch (err) {
//       console.error(err.message);
//       process.exit(1);
//     }
//     const dbConnection = mongoose.connection;
//     dbConnection.once("open", (_) => {
//       console.log(`Database connected: ${url}`);
//     });
   
//     dbConnection.on("error", (err) => {
//       console.error(`connection error: ${err}`);
//     });
//     return;
//   }
  