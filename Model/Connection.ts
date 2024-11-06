import dotenv from 'dotenv'
import {connect} from 'mongoose'
dotenv.config()
const {MONGO_URI}=process.env
export const connection=async()=>{
try {
    if(MONGO_URI){

await connect(MONGO_URI)

    }
    console.log('connected')
} catch (error) {
    console.log(error)
}
}
connection()
