# Hope Family Clinic Website

This is the repository for the Hope Family Clinic website.

## Project Structure

- `web/`: Next.js application (Frontend).
- `docker-compose.yml`: Docker orchestration for local development.
- `Dockerfile`: Production Dockerfile (for Render/cloud deployment).

## Prerequisites

- [Docker](https://docs.docker.com/get-docker/) installed.
- [Node.js](https://nodejs.org/) 20+ (optional, if running without Docker).

## Getting Started

### Using Docker (Recommended)

1. **Build and Run:**
   ```bash
   docker-compose up --build
   ```
2. **Access the site:**
   Open [http://localhost:3000](http://localhost:3000) in your browser.

### Local Development (Without Docker)

1. Navigate to the web directory:
   ```bash
   cd web
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```
4. Access the site at [http://localhost:3000](http://localhost:3000).

## Tech Stack

- **Framework:** [Next.js](https://nextjs.org/) (App Router)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Icons:** [Lucide React](https://lucide.dev/)

## Deployment

### Render.com

1. Connect your GitHub repository to Render.
2. Create a new **Web Service**.
3. Render will automatically detect the `Dockerfile` in the root.
4. Set the following:
   - **Build Command:** (leave empty, Docker handles it)
   - **Start Command:** (leave empty, Docker handles it)
5. Deploy!

### Docker (Self-hosted)

1. Ensure Docker is installed on the server.
2. Clone the repository.
3. Run `docker-compose up -d --build`.

## Directory Layout

```
.
├── Dockerfile          # Production Dockerfile (for Render)
├── docker-compose.yml  # Local development
├── README.md
└── web/                # Next.js Application
    ├── public/         # Static assets
    ├── src/            # Source code
    │   ├── app/        # App Router pages
    │   ├── components/ # Reusable components
    │   └── ...
    ├── Dockerfile      # Alternative Dockerfile
    ├── next.config.ts
    └── ...
```
