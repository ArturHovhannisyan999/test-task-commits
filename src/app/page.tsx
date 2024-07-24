// src/app/page.tsx
import { fetchCommits } from '../lib/github';

interface Commit {
  sha: string;
  commit: {
    message: string;
    author: {
      name: string;
      date: string;
    };
  };
  html_url: string;
}

const Home = async () => {
  let commits: Commit[] = [];
  try {
    commits = await fetchCommits();
  } catch (error) {
    console.error('Error fetching commits:', error);
  }

  if (commits.length === 0) {
    return <div className="container mx-auto p-4">No commits found or an error occurred while fetching commits.</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Commits</h1>
      <ul>
        {commits.map((commit) => (
          <li key={commit.sha} className="mb-2">
            <a href={commit.html_url} target="_blank" rel="noopener noreferrer" className="text-blue-600">
              {commit.commit.message}
            </a>
            <p>
              <span className="font-semibold">{commit.commit.author.name}</span> -{' '}
              {new Date(commit.commit.author.date).toLocaleString()}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
