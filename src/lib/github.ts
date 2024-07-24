export const fetchCommits = async () => {
    try {
        const response = await fetch('/api/commits');
        const data = await response.json();
        return data;
    } catch (err) {
        throw new Error ('Failed to fetch commits');
    }
};
  