import { FastifyInstance } from 'fastify'
import { authenticate, requireAdmin } from '../middleware/auth'
import { query } from '../config/database'

export default async function campaignRoutes(server: FastifyInstance) {
  // Get all campaigns (public)
  server.get('/', async (request, reply) => {
    try {
      const result = await query(
        `SELECT * FROM campaigns 
         WHERE status = 'active' 
         ORDER BY created_at DESC`
      )
      return result.rows
    } catch (error) {
      server.log.error(error)
      return reply.code(500).send({ error: 'Internal server error' })
    }
  })

  // Get single campaign (public)
  server.get('/:id', async (request, reply) => {
    try {
      const { id } = request.params as any
      const result = await query(
        'SELECT * FROM campaigns WHERE id = $1',
        [id]
      )
      
      if (result.rows.length === 0) {
        return reply.code(404).send({ error: 'Campaign not found' })
      }
      
      return result.rows[0]
    } catch (error) {
      server.log.error(error)
      return reply.code(500).send({ error: 'Internal server error' })
    }
  })

  // Create campaign (admin only)
  server.post('/', {
    preHandler: [requireAdmin]
  }, async (request, reply) => {
    try {
      const {
        title, description, goal, currency, start_date,
        end_date, category, impact_story, image_url
      } = request.body as any

      const result = await query(
        `INSERT INTO campaigns (
          title, description, goal, currency, start_date,
          end_date, category, impact_story, image_url
        ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)
        RETURNING *`,
        [title, description, goal, currency, start_date,
         end_date, category, impact_story, image_url]
      )

      return result.rows[0]
    } catch (error) {
      server.log.error(error)
      return reply.code(500).send({ error: 'Internal server error' })
    }
  })

  // Update campaign (admin only)
  server.put('/:id', {
    preHandler: [requireAdmin]
  }, async (request, reply) => {
    try {
      const { id } = request.params as any
      const {
        title, description, goal, raised, currency,
        start_date, end_date, category, impact_story,
        image_url, status, donors
      } = request.body as any

      const result = await query(
        `UPDATE campaigns SET
          title = $1, description = $2, goal = $3, raised = $4,
          currency = $5, start_date = $6, end_date = $7,
          category = $8, impact_story = $9, image_url = $10,
          status = $11, donors = $12, updated_at = NOW()
        WHERE id = $13
        RETURNING *`,
        [title, description, goal, raised, currency, start_date,
         end_date, category, impact_story, image_url, status, donors, id]
      )

      if (result.rows.length === 0) {
        return reply.code(404).send({ error: 'Campaign not found' })
      }

      return result.rows[0]
    } catch (error) {
      server.log.error(error)
      return reply.code(500).send({ error: 'Internal server error' })
    }
  })

  // Delete campaign (admin only)
  server.delete('/:id', {
    preHandler: [requireAdmin]
  }, async (request, reply) => {
    try {
      const { id } = request.params as any
      const result = await query('DELETE FROM campaigns WHERE id = $1 RETURNING id', [id])
      
      if (result.rows.length === 0) {
        return reply.code(404).send({ error: 'Campaign not found' })
      }
      
      return { success: true, id: result.rows[0].id }
    } catch (error) {
      server.log.error(error)
      return reply.code(500).send({ error: 'Internal server error' })
    }
  })
}
