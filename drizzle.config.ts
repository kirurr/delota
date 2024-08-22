import { defineConfig } from 'drizzle-kit'
import 'dotenv/config'

export default defineConfig({
    dialect: 'postgresql',
    schema: './server/database/schema.ts',
    out: './server/database/migrations',
    dbCredentials: {
        url: process.env.POSTGRES_URL!
    }
})
