import Fastify from 'fastify'
import cors from '@fastify/cors'
import jwt from '@fastify/jwt'
import dotenv from 'dotenv'

// Middleware
import { authenticate, requireAdmin } from './middleware/auth'

// Routes
import authRoutes from './routes/auth'
import campaignRoutes from './routes/campaigns'

dotenv.config()

const server = Fastify({
  logger: {
    level: 'info',
    transport: {
      target: 'pino-pretty',
      options: {
        translateTime: 'HH:MM:ss Z',
        ignore: 'pid,hostname',
      },
    },
  }
})

// Register plugins
server.register(cors, {
  origin: process.env.FRONTEND_URL || 'http://localhost:3000',
  credentials: true
})

server.register(jwt, {
  secret: process.env.JWT_SECRET || 'your-secret-key-change-this'
})

// Decorate server with auth methods
server.decorate('authenticate', authenticate)
server.decorate('requireAdmin', requireAdmin)

// Health check
server.get('/health', async () => {
  return { 
    status: 'ok', 
    timestamp: new Date().toISOString(),
    service: 'Hope Family Clinic API'
  }
})

// API info
server.get('/', async () => {
  return {
    name: 'Hope Family Clinic API',
    version: '1.0.0',
    endpoints: {
      auth: '/api/auth',
      campaigns: '/api/campaigns',
      health: '/health'
    }
  }
})

// Register routes
server.register(authRoutes, { prefix: '/api/auth' })
server.register(campaignRoutes, { prefix: '/api/campaigns' })

const start = async () => {
  try {
    const port = parseInt(process.env.PORT || '3001')
    await server.listen({ port, host: '0.0.0.0' })
    console.log(`
🚀 Server running on http://localhost:${port}
📊 Health check: http://localhost:${port}/health
🔐 Auth endpoint: http://localhost:${port}/api/auth/login
📋 Campaigns: http://localhost:${port}/api/campaigns
    `)
  } catch (err) {
    server.log.error(err)
    process.exit(1)
  }
}

start()
