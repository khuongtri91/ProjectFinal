module.exports = {
    config: {
        server: 'DESKTOP-89OPHIE\\TRI',
        user: 'sa',
        password: '123456',
        database: 'HelloDoctor',
        options: {
            trustedConnection: true,
            trustServerCertificate: true
        },
        connectionTimeout: 150000,
        pool: {
            max: 10,
            min: 0,
            idleTimeoutMillis: 30000
        }
    }
};