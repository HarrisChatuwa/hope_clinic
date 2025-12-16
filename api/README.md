# Hope Family Clinic - Backend API

Backend API for Hope Family Clinic built with Fastify, PostgreSQL, and JWT authentication.

## Tech Stack

- **Framework**: Fastify
- **Database**: PostgreSQL (raw SQL)
- **Authentication**: @fastify/jwt
- **Password Hashing**: bcrypt
- **Language**: TypeScript

## Prerequisites

- Node.js 18+
- PostgreSQL 14+

## Setup

1. **Install dependencies**:
```bash
npm install
```

2. **Configure environment**:
Create a `.env` file:
```env
DATABASE_URL=postgresql://postgres:password@localhost:5432/hope_clinic
JWT_SECRET=your-super-secret-jwt-key
PORT=3001
NODE_ENV=development
FRONTEND_URL=http://localhost:3000
```

3. **Create database**:
```bash
createdb hope_clinic
```

Or using Docker:
```bash
docker run --name hope-clinic-db \
  -e POSTGRES_PASSWORD=password \
  -e POSTGRES_DB=hope_clinic \
  -p 5432:5432 \
  -d postgres:16
```

4. **Run migrations**:
```bash
npm run migrate
```

5. **Start development server**:
```bash
npm run dev
```

## Default Admin Credentials

After running migrations, use these credentials to login:

- **Email**: admin@hopefamilyclinic.org
- **Password**: admin123

⚠️ **Change this password immediately in production!**

## API Endpoints

### Authentication
- `POST /api/auth/login` - Login
- `GET /api/auth/me` - Get current user (requires auth)

### Campaigns
- `GET /api/campaigns` - Get all active campaigns (public)
- `GET /api/campaigns/:id` - Get single campaign (public)
- `POST /api/campaigns` - Create campaign (admin only)
- `PUT /api/campaigns/:id` - Update campaign (admin only)
- `DELETE /api/campaigns/:id` - Delete campaign (admin only)

### Health
- `GET /health` - Health check

## Development

```bash
# Start dev server with hot reload
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## Database Schema

See `src/db/migrations/` for complete schema.

### Core Tables:
- `admin_users` - Admin authentication
- `campaigns` - Fundraising campaigns
- `donations` - Transaction tracking
- `team_members` - Staff profiles
- `services` - Service offerings
- `volunteer_roles` - Open positions
- `volunteer_applications` - Applications
- `testimonials` - Stories
- `faqs` - Q&A
- `contact_submissions` - Inquiries
- `impact_metrics` - Statistics

## Project Structure

```
api/
├── src/
│   ├── config/          # Database connection
│   ├── routes/          # API endpoints
│   ├── middleware/      # Auth middleware
│   ├── db/
│   │   ├── queries/     # SQL queries
│   │   └── migrations/  # Database migrations
│   ├── types/           # TypeScript types
│   ├── utils/           # Utilities
│   └── server.ts        # Main server
├── scripts/
│   └── migrate.js       # Migration runner
└── package.json
```

## License

MIT
