const { Pool } = require('pg')
const fs = require('fs')
const path = require('path')
require('dotenv').config()

const pool = new Pool({
  connectionString: process.env.DATABASE_URL
})

async function runMigrations() {
  const client = await pool.connect()
  
  try {
    console.log('🔄 Running database migrations...\n')
    
    const migrationsDir = path.join(__dirname, '../src/db/migrations')
    const files = fs.readdirSync(migrationsDir).sort()
    
    for (const file of files) {
      if (file.endsWith('.sql')) {
        console.log(`📝 Running migration: ${file}`)
        const sql = fs.readFileSync(path.join(migrationsDir, file), 'utf8')
        await client.query(sql)
        console.log(`✅ Completed: ${file}\n`)
      }
    }
    
    console.log('🎉 All migrations completed successfully!')
  } catch (error) {
    console.error('❌ Migration failed:', error)
    process.exit(1)
  } finally {
    client.release()
    await pool.end()
  }
}

runMigrations()
