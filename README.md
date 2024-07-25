This project is a Next.js application that displays the commit history of a specified GitHub repository. It leverages TypeScript, Tailwind CSS, and uses server actions for performance and user experience.

## Getting Started

To get started with this project, you need to set up a few environment variables in a `.env.local` file at the root of the project.

### Required Environment Variables

1. **GITHUB_USERNAME**: Your GitHub username.
2. **GITHUB_REPO**: The name of your GitHub repository.
3. **GITHUB_TOKEN**: Your GitHub Personal Access Token (PAT).

### Setting Up the `.env.local` File

Create a `.env.local` file in the root directory of your project and add the following variables:

```dotenv
GITHUB_USERNAME=your_github_username
GITHUB_REPO=your_github_repository_name
GITHUB_TOKEN=your_personal_access_token

Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deploy on Vercel

After deploying the project, you need to add the environment variables to Vercel:

1.  In your Vercel dashboard, go to the project you just deployed.
2.  Click on the Settings tab.
3.  In the left sidebar, click on Environment Variables.
4.  Add the following environment variables by clicking the Add button for each:
        GITHUB_USERNAME: Your GitHub username.
        GITHUB_REPO: The name of your GitHub repository.
        GITHUB_TOKEN: Your GitHub Personal Access Token (PAT).
5.  Click the Save button to apply the environment variables.

## Redeploying the Project

After adding the environment variables, redeploy the project to ensure the changes take effect:
1. Go to the Deployments tab in your Vercel dashboard.
2. Click the Redeploy button next to your latest deployment.

### Notes:

- The `README.md` includes instructions for adding environment variables in Vercel after deploying the project.
- It provides clear steps for redeploying the project to ensure environment variables are applied.
