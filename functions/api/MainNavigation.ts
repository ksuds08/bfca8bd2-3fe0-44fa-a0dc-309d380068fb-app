import { Request, Response } from 'express';

export async function MainNavigationHandler(req: Request): Promise<Response> {
    const navigationItems = [
        { name: 'Home', link: '/' },
        { name: 'About', link: '/about' },
        { name: 'Services', link: '/services' },
        { name: 'Contact', link: '/contact' }
    ];

    return new Response(JSON.stringify(navigationItems), {
        headers: { 'Content-Type': 'application/json' }
    });
}
