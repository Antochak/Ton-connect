import {NextResponse} from 'next/server';

export async function GET() {
  const res = await fetch('https://antochak.github.io/Ton-connect/public/tonconnect-manifest.json');
  const data = await res.json();

  const response = NextResponse.json(data);
  response.headers.set('Access-Control-Allow-Origin', '*');
  return response;
}
