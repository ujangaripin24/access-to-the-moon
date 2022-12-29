module.exports = {
    port: 3030,
    db: {
        databse: process.env.DB_NAME || 'express_to_the_moon',
        user: process.env.DB_USER || 'necronomicon',
        password: process.env.DB_PASS || '123456789',
        option: {
            dialect: process.env.DIALCET || 'sqlite',
            host: process.env.HOST || 'localhost',
            storage: './database'
        }
    }
}
