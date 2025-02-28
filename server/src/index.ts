import express from "express";
import cors from "cors";
import helmet from "helmet"
import morgan from "morgan";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import projectRoutes from "./routes/projectRoute"
import taskRoutes from "./routes/taskRoute"
import searchRoutes from "./routes/searchRoutes"
import userRoutes from "./routes/userRoutes"
import teamRoutes from "./routes/teamRoutes"

//Configuration

dotenv.config();
const app = express();
 app.use(express.json())
 app.use(helmet());
 app.use(helmet.crossOriginResourcePolicy({policy: "cross-origin"}))
 app.use(morgan("common"));
 app.use(bodyParser.json())
 app.use(bodyParser.urlencoded({extended: false}))
 app.use(cors());

 // Routes
 app.get("/",(req,res)=>{
     res.send("This is a Home route");
 })

 app.use("/api/projects", projectRoutes)
 app.use("/api/tasks", taskRoutes)
 app.use("/api/search", searchRoutes)
 app.use("/api/users", userRoutes)
 app.use("/api/teams", teamRoutes)


 
   const PORT = Number(process.env.PORT) || 3030;
   app.listen(PORT,"0.0.0.0", () => {
     console.log(`Server is running on port ${PORT}`);
   });
 
 export { app };