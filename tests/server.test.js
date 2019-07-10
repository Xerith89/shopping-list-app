const request = require('supertest');
const chai = require('chai');
const chaiHttp = require('chai-http');
const should = chai.should();

process.env.ENV = "test";

const app = require('../server');
chai.use(chaiHttp);
/**
 * Testing get all items 
 */
describe('GET /api/items/', function () {
    it('respond with json containing a list of all items', function (done) {
        request(app)
            .get('/api/items/')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done);
    });
});

    
/**
 * Testing add an item 
 */
describe('POST /api/items/', function () {
    it('Insert an item', function (done) {
        let item = {
            name: "test item",
        }
        request(app)
            .post('/api/items')
            .send(item)
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.have.property('name');
            done();
        });
    });
});

/**
 * Testing update an item 
 */
describe('PUT /api/items/:id', function () {
    it('Update a item given the ID', function (done) {
        let item = new Item( {
            name: "test item"
        });
        item.save((err,item) => {
        request(app)
            .put('/api/items/' + item.id)
            .send({ name: "updated item"
        })
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.have.property('name').eql("updated item");
            done();
            });
        });
    });
});

/**
 * Testing deleting an item 
 */
describe('DELETE /api/items/:id', function () {
    it('DELETE an item given the ID', function (done) {
        let item = new Item( {
           name: "test item"
        });
        item.save((err,item) => {
        request(app)
            .delete('/api/items/' + item.id)
            .end((err, res) => {
                res.should.have.status(200);
            done();
            });
        });
    });
});
