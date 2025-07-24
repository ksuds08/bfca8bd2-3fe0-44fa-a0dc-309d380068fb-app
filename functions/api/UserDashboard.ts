export async function UserDashboardHandler(req: Request): Promise<Response> {
  try {
    const userDashboardData = {
      message: 'Welcome to your dashboard!',
      features: [
        'AI-powered resume analysis',
        'Automatic job matching',
        'Personalized career advice'
      ],
      theme: {
        colors: {
          primary: '#014F43', // Deep Teal
          accent: '#FFD700',  // Vibrant Gold
          background: '#FFFFFF' // White
        }
      }
    };

    return new Response(JSON.stringify(userDashboardData), {
      headers: { 'Content-Type': 'application/json' },
      status: 200
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Failed to load dashboard data' }), {
      headers: { 'Content-Type': 'application/json' },
      status: 500
    });
  }
}