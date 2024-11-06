



export const swaggerOptions = {
    swaggerDefinition: {
        openapi: '3.0.0',
        info: {
            title: 'Blog API',
            version: '1.0.0',
            description: 'API documentation for the Blog API',
        },
        servers: [
            {
                url: 'http://localhost:3000',
                description: 'Local server',
            },
        ],
    },
    apis: ['./Controller/*.ts'], 
};


