export interface Commit {
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

export interface CommitsStore {
    commits: Commit[];
    error: string | null;
    loading: boolean;
    fetchCommits: () => Promise<void>;
}