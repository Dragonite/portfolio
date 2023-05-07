import { NextRequest } from 'next/server';

export async function POST(request: NextRequest) {
    const body = await request.json();
    if (!body.name || !body.email || !body.reason) {
        return new Response('Wrong body parameters.', { status: 400 })
    }
    if (body.name.length > 1000 || body.email.length > 1000 || body.reason.length > 1000) {
        return new Response('Data exceeds maximum length.', { status: 400 })
    }
    const response = await fetch(process.env.CONTACT_WEBHOOK ?? '', {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            embeds: [
                {
                    title: 'Contact request',
                    color: 15769390,
                    timestamp: new Date(Date.now()).toISOString(),
                    fields: [
                        {
                            name: 'Name',
                            value: body.name
                        },
                        {
                            name: 'Email',
                            value: `\`${body.email}\``
                        },
                        {
                            name: 'Reason',
                            value: body.reason
                        }
                    ]
                }
            ]
        }),
    });
    if (response.ok) {
        return new Response('Successfully sent contact information.', { status: 200 })
    } else {
        return new Response('Something went wrong.', { status: 500 })
    }
}