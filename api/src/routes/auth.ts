import { FastifyInstance } from 'fastify'
import { query } from '../config/database'
import { comparePassword } from '../utils/hash'

export default async function authRoutes(server: FastifyInstance) {
  // Login
  server.post('/login', async (request, reply) => {
    const { email, password } = request.body as any

    if (!email || !password) {
      return reply.code(400).send({ error: 'Email and password are required' })
    }

    try {
      // Get user
      const result = await query(
        'SELECT * FROM admin_users WHERE email = $1 AND is_active = true',
        [email]
      )

      if (result.rows.length === 0) {
        return reply.code(401).send({ error: 'Invalid credentials' })
      }

      const user = result.rows[0]

      // Verify password
      const valid = await comparePassword(password, user.password_hash)
      if (!valid) {
        return reply.code(401).send({ error: 'Invalid credentials' })
      }

      // Update last login
      await query(
        'UPDATE admin_users SET last_login = NOW() WHERE id = $1',
        [user.id]
      )

      // Generate token
      const token = server.jwt.sign({
        id: user.id,
        email: user.email,
        role: user.role
      })

      return {
        token,
        user: {
          id: user.id,
          name: user.name,
          email: user.email,
          role: user.role
        }
      }
    } catch (error) {
      server.log.error(error)
      return reply.code(500).send({ error: 'Internal server error' })
    }
  })

  // Get current user
  server.get('/me', {
    preHandler: [server.authenticate]
  }, async (request, reply) => {
    try {
      const user = request.user
      
      const result = await query(
        'SELECT id, name, email, role, created_at FROM admin_users WHERE id = $1',
        [user!.id]
      )

      if (result.rows.length === 0) {
        return reply.code(404).send({ error: 'User not found' })
      }

      return result.rows[0]
    } catch (error) {
      server.log.error(error)
      return reply.code(500).send({ error: 'Internal server error' })
    }
  })
}
