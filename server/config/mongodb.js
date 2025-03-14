import mongoose from "mongoose"

const connectDB = async() =>{

    // yeh bas express ka connection with database karne ke liye kara
    mongoose.connection.on('connected', ()=>{
        console.log("Database connected")
    })

    await mongoose.connect(`${process.env.MONGODB_URI}/IMAGER`)
}

export default connectDB;