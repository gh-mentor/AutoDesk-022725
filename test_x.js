const mysql = require('mysql');
const VulnerableLoginManager = require('./security-issue');

// filepath: /C:/Users/ascop/Documents/Training/AutoDesk-022725/security-issue.test.js

jest.mock('mysql');

describe('VulnerableLoginManager', () => {
    let dbConfig;
    let loginManager;
    let mockConnection;

    beforeEach(() => {
        dbConfig = {
            host: 'localhost',
            user: 'root',
            password: 'password',
            database: 'testdb'
        };
        mockConnection = {
            connect: jest.fn()
        };
        mysql.createConnection.mockReturnValue(mockConnection);
        loginManager = new VulnerableLoginManager(dbConfig);
    });

    test('connectToDb should log "Connected to the database" on successful connection', () => {
        console.log = jest.fn();
        mockConnection.connect.mockImplementation((callback) => callback(null));

        loginManager.connectToDb();

        expect(console.log).toHaveBeenCalledWith('Connected to the database');
    });

    test('connectToDb should log error message on connection error', () => {
        console.error = jest.fn();
        const error = new Error('Connection error');
        mockConnection.connect.mockImplementation((callback) => callback(error));

        loginManager.connectToDb();

        expect(console.error).toHaveBeenCalledWith('Error connecting to the database:', error.stack);
    });
});