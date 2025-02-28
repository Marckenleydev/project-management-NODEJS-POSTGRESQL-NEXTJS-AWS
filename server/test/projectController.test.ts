//users.test.js
const request = require('supertest');
import { app } from "../src/index"; // ✅ Correctly importing Express app
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

describe("Test Projects Api Call ",()=>{

 
  
  test("should create a new project and fetch it from the database", async () => {
    // Step 1: Create a new project
    const projectData = { name: "Test Project", description: "Sample project" };
    const createResponse = await request(app).post("/api/projects").send(projectData);
    
    expect(createResponse.status).toBe(201);
    expect(createResponse.body.name).toBe(projectData.name);

    // Step 2: Fetch all projects
    const fetchResponse = await request(app).get("/api/projects");
    expect(fetchResponse.status).toBe(200);
    expect(fetchResponse.body.length).toBe(1);
    expect(fetchResponse.body[0].name).toBe("Test Project");

    // Step 3: Check directly in the database
    const dbProject = await prisma.project.findFirst();
    expect(dbProject).not.toBeNull();
    expect(dbProject?.name).toBe("Test Project");
  });

})
