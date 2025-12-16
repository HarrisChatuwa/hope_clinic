import { FastifyRequest, FastifyReply } from 'fastify'

declare module 'fastify' {
  interface FastifyRequest {
    user?: {
      id: string
      email: string
      role: string
    }
  }
}

export async function authenticate(
  request: FastifyRequest,
  reply: FastifyReply
) {
  try {
    await request.jwtVerify()
  } catch (err) {
    reply.code(401).send({ error: 'Unauthorized' })
  }
}

export async function requireAdmin(
  request: FastifyRequest,
  reply: FastifyReply
) {
  try {
    await request.jwtVerify()
    const user = request.user
    
    if (!user || (user.role !== 'admin' && user.role !== 'super_admin')) {
      reply.code(403).send({ error: 'Forbidden - Admin access required' })
    }
  } catch (err) {
    reply.code(401).send({ error: 'Unauthorized' })
  }
}
