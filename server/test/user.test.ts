//users.test.js
const request = require('supertest');
import { app } from "../src/index"; // ✅ Correctly importing Express app
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

describe("User Projects Api Call ",()=>{

  test('returns a list of users', async () => {
    const response = await request(app).get('/users');
    expect(response.status).toBe(200);
    expect(response.body).toEqual([    { id: 1, name: 'Alice' },    { id: 2, name: 'Bob' },    { id: 3, name: 'Charlie' },  ]);
  });
  



})
