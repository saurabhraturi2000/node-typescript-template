# Node TypeScript Template

A starter template for building Node.js APIs with TypeScript and Express.

## Stack

- Node.js
- TypeScript
- Express
- dotenv
- nodemon + tsc-watch for development

## Prerequisites

- Node.js 20+ (recommended)
- npm 10+

## Getting Started

```bash
npm install
```

Create your environment file:

```bash
cp .env.example .env
```

Set values in `.env` (see Environment Variables section).

## Run

Development (watch + restart):

```bash
npm run dev
```

Build:

```bash
npm run build
```

Start compiled app:

```bash
npm start
```

## Scripts

- `npm run clean`: Remove `dist`
- `npm run build`: Clean + compile TypeScript
- `npm run dev`: Watch TypeScript and restart server on changes
- `npm start`: Run compiled output from `dist/src/index.js`
- `npm run prisma:generate`: Run `prisma generate`
- `npm run prisma:migrate`: Run `prisma migrate dev`

## Environment Variables

Current config supports:

- `PORT`: Server port (number). Default: `5000` in `src/config/config.ts`, while `src/index.ts` currently falls back to `3000`.
- `NODE_ENV`: `development` | `production` | `test`
- `MONGO_URI`: Optional MongoDB connection string

Example `.env`:

```env
PORT=5000
NODE_ENV=development
MONGO_URI=
```

## Project Structure

```text
src/
  app/
    index.ts
  config/
    config.ts
    index.ts
  constants/
    index.ts
  controllers/
    index.ts
  database/
    index.ts
  errors/
    index.ts
  interfaces/
    index.ts
  middlewares/
    index.ts
  models/
    index.ts
  modules/
    index.ts
    health/
      index.ts
  repositories/
    index.ts
  routes/
    index.ts
  services/
    index.ts
  types/
    index.ts
  utils/
    index.ts
  validators/
    index.ts
  index.ts
```

## Default Endpoint

Current app includes:

- `GET /` -> `Hello, TypeScript with Express!`

## Notes

- `package-lock.json` is currently listed in `.gitignore`.
- The folder structure is scaffolded for layered architecture; you can progressively move logic into modules/controllers/services/repositories.
