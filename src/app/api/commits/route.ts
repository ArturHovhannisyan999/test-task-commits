import { NextRequest, NextResponse } from 'next/server';
import axios from 'axios';

export async function GET(req: NextRequest) {
  const username = process.env.NEXT_PUBLIC_GITHUB_USERNAME;  
  const repo = process.env.NEXT_PUBLIC_GITHUB_REPO;  
  const token = process.env.NEXT_PUBLIC_GITHUB_TOKEN;
  
  try {
      
      const response = await fetch(
          `https://api.github.com/repos/${username}/${repo}/commits`,
          {
              headers: {
                  Authorization: `token ${token}`,
                },
            }
        );
        const data = await response.json();
        console.log(data);
        
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch commits' }, { status: 500 });
  }
}
