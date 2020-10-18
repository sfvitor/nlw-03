import { ConnectionOptions, createConnection } from 'typeorm';
import path from 'path';

const url = process.env.DATABASE_URL;

const config = {
    type: url ? 'postgres' : 'sqlite',
    database: url ? undefined : path.join(__dirname, 'database.sqlite'),
    url,
    migrations: [
        path.join(__dirname, 'migrations', '*.ts'),
    ],
    entities: [
        path.join(__dirname, '..', 'models', '*.ts'),
    ],
    cli: {
        migrationsDir: path.join(__dirname, 'migrations'),
    }
};

createConnection(config as ConnectionOptions);
