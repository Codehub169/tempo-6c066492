import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    // Basic validation
    if (!name || !email || !message) {
      return NextResponse.json({ message: 'Missing required fields.' }, { status: 400 });
    }

    // Simulate email sending logic (as per user instruction to not use a real email service)
    console.log('Received contact form submission:');
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);

    // Simulate a delay as if an email was being sent
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Return a success response
    return NextResponse.json({ message: 'Your message has been sent successfully!' }, { status: 200 });

  } catch (error) {
    console.error('Error processing contact form:', error);
    return NextResponse.json({ message: 'An unexpected error occurred. Please try again later.' }, { status: 500 });
  }
}
