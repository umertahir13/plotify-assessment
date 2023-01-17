import request from "supertest";
import {Express} from 'express-serve-static-core';
import app from '../express'
import dataSet from "../dataSet";

let server: Express

describe('APP should say "Hello World!"', () => {
    beforeAll(() => {
        server = app;
    });

    it('should add new tasks in the dataset obj', (done) => {
        const data = {
            taskhead: "Foundation",
            taskDescription: "taskDescription"
        };
        request(app).post('/progress/createTask').send({taskhead: "Foundation", taskDescription: "Hello wordld"}).expect(200).end((err, res) => {
            if (err) 
                return done(err)

            

            console.log(res.body)
            done()
        })
    })

    it('should add new tasks in the dataset obj', (done) => {
        const data = {
            taskhead: "Discovery",
            taskDescription: "taskDescription"
        };
        request(app).post('/progress/createTask').send({taskhead: "Discovery", taskDescription: "Hello wordld"}).expect(200).end((err, res) => {
            if (err) 
                return done(err)

            

            console.log(res.body)
            done()
        })
    })

    it('should add new tasks in the dataset obj', (done) => {
        const data = {
            taskhead: "Delivery",
            taskDescription: "taskDescription"
        };
        request(app).post('/progress/createTask').send({taskhead: "Delivery", taskDescription: "Hello wordld"}).expect(200).end((err, res) => {
            if (err) 
                return done(err)

            

            console.log(res.body)
            done()
        })
    })

    it('should update status of existing tasks in the dataset obj', (done) => {
        const data = {
            taskhead: "Foundation",
            id: 1
        };
        request(app).post('/progress/completeTask').send(data).expect(200).end((err, res) => {
            if (err) 
                return done(err)

            

            console.log(res.body.Discovery)
            done()
        })
    })

    it('should edit existing tasks in the dataset obj', (done) => {
        const data ={
            "taskhead":"Foundation",
            "taskDescription":"hello world1",
            "id":1
        }
        request(app).post('/progress/editTask').send(data).expect(200).end((err, res) => {
            if (err) 
                return done(err)

            

            console.log(res.body.Discovery)
            done()
        })
    })

    it('should return 200', (done) => {
        request(server).get('/progress/getAllTasks').expect(200).end((err, res) => {
            if (err) 
                return done(err)
            // expect(res.body).toMatchObject(dataSet)

            done()
        })
    });
});
