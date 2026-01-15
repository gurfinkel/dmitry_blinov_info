# dmitryblinov.dev

Personal portfolio website built with Next.js, SST, shadcn/ui, and Tailwind CSS.

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Deployment:** SST (AWS)
- **Styling:** Tailwind CSS + shadcn/ui
- **Images:** Cloudinary

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Deployment

### Prerequisites

1. AWS account with credentials configured
2. Route 53 hosted zone for `dmitryblinov.dev`
3. Cloudinary account

### Manual Deploy

```bash
npx sst deploy --stage production
```

### GitHub Actions

Set the following secrets in your GitHub repository:

- `AWS_ACCESS_KEY_ID`
- `AWS_SECRET_ACCESS_KEY`
- `CLOUDINARY_CLOUD_NAME`

Pushes to `main` branch automatically trigger deployment.

## Environment Variables

Create `.env.local` for local development:

```
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=your_cloud_name
```
