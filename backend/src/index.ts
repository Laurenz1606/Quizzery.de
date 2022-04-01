import { config } from "dotenv";

//load env vars from .env file (not in production)
if(process.env.NODE_ENV !== "production") config()

//load modules
import "./mongoose"
import "./express"
