
  const mongoose= require('mongoose');

  main().catch(err=>console.log(err));
  
  async function main(){

    try{
    await mongoose.connect('')
    console.log("connect to db");
    }
      catch(er){
        console.log("the error is: ",er.message);
        
      }
  }
module.exports = mongoose;
