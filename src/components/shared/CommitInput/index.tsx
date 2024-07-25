import React from 'react';
import { CommitInputProps } from "@/types";

export const CommitInput: React.FC<CommitInputProps> = ({ searchTerm, setSearchTerm }) => {
  return (
    <input
      type="text"
      placeholder="Search commits..."
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      className="p-2 w-80 border border-gray-300 rounded"
    />
  );
}
