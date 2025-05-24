import { NextRequest } from 'next/server';
import { saveAppConfig } from '../../../../lib/config';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    saveAppConfig(body);

    return new Response(JSON.stringify({ ok: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Failed to save config' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
