import { SYSTEM_PROMPT, LANDING_KNOWLEDGE } from '@/lib/assistant';
import Anthropic from '@anthropic-ai/sdk';

const client = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

export async function POST(req: Request) {
  try {
    const { messages, sessionId } = await req.json();

    if (!process.env.ANTHROPIC_API_KEY) {
      return new Response('API key not configured', { status: 500 });
    }

    if (!Array.isArray(messages) || messages.length === 0) {
      return new Response('Invalid messages', { status: 400 });
    }

    // Rate limiting: simple check (in production, use Vercel KV or Redis)
    // For now, we'll just allow it to proceed

    const stream = await client.messages.stream({
      model: 'claude-haiku-4-5-20251001',
      max_tokens: 500,
      temperature: 0.4,
      system: `${SYSTEM_PROMPT}\n\n${LANDING_KNOWLEDGE}`,
      messages: messages.map((msg: any) => ({
        role: msg.role,
        content: msg.content,
      })),
    });

    // Log conversation (simple logging - in production, use proper DB)
    if (process.env.NODE_ENV === 'development') {
      console.log(`[Consulta] Session ${sessionId}:`, {
        userMessage: messages[messages.length - 1]?.content,
        timestamp: new Date().toISOString(),
      });
    }

    // Return readable stream
    return new Response(stream.toReadableStream(), {
      headers: {
        'Content-Type': 'text/event-stream',
        'Cache-Control': 'no-cache',
        Connection: 'keep-alive',
        'Access-Control-Allow-Origin': '*',
      },
    });
  } catch (error) {
    console.error('Consulta API error:', error);
    return new Response('Internal server error', { status: 500 });
  }
}
