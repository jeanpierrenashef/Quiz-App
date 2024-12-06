import { connect } from "mongoose";
const connectToDatabase = async () =>{
    try{
        await connect("mongodb://localhost:27017/intro");
        console.log("Connected to db");
    }catch(error){
        console.log(error)
    }
}
export default connectToDatabase;