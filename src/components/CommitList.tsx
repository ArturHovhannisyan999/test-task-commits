'use client';
import '../styles/globals.css';
import { useEffect, useState } from 'react';
import { useCommitsStore } from '../store/useCommitsStore';
import { CommitItem } from './CommitItem';
import { Commit } from '@/types';

const CommitList = () => {
  const { commits, error, loading, fetchCommits } = useCommitsStore();
  const [filteredCommits, setFilteredCommits] = useState<Commit[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [refreshing, setRefreshing] = useState<boolean>(false);

  useEffect(() => {
    fetchCommits();
  }, [fetchCommits]);

  useEffect(() => {
    const filtered = commits.filter((commit) =>
      commit.commit.message.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredCommits(filtered);
  }, [searchTerm, commits]);

  if (loading) {
    return <div className="container mx-auto p-4 text-center">Loading...</div>;
  }

  if (error) {
    return <div className="container mx-auto p-4 ">{error}</div>;
  }

  const handleRefresh = async () => {
    setRefreshing(true);
    try {
      await fetchCommits();
    } catch (err) {
      throw new Error('Something went wrong');  
    } finally {
      setRefreshing(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-5 font-sans">
      <h1 className="text-3xl text-center mb-6">
        <span className="text-blue-400">There are </span>
        <span className="text-black">{filteredCommits.length} commits</span>
      </h1>
      <div className="flex justify-center mb-6">
        <input
          type="text"
          placeholder="Search commits..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="p-2 w-80 border border-gray-300 rounded"
        />
      </div>
      <div className="flex justify-center mb-6">
        <button
          onClick={handleRefresh}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Refresh
        </button>
        {refreshing && <div className="ml-4 text-blue-500">Refreshing...</div>}
      </div>
      <ul className="list-none">
        {filteredCommits.map((commit) => (
            <CommitItem key={commit.sha} commit={commit} />
        ))}
      </ul>
    </div>
  );
};

export default CommitList;
