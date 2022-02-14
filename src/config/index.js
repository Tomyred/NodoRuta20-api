const config = {
    BaseDomain: process.env.BACKEND_BASE_DOMAIN
        ? process.env.BACKEND_BASE_DOMAIN
        : "http://localhost:8080",
    MongoDbConnection: process.env.BACKEND_DB_CONNECTION
        ? // process.env.BACKEND_DB_CONNECTION : "mongodb+srv://senado-azure:senado@1@cluster0-ecned.azure.mongodb.net/desarrollo",
          process.env.BACKEND_DB_CONNECTION
        : "mongodb+srv://Tred:charlyelaguantesucks@ruta20db.nmffy.mongodb.net/Ruta20DB?retryWrites=true&w=majority",
};

export default config;
