import MongoDataSource from ".";

export class MongoConnection {
    async connect() {
        return MongoDataSource.initialize();
    }
}