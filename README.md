# Intern Portal

A MERN stack web application for managing interns, tracking donations, and displaying a leaderboard.

## Features

- **User Authentication:** Dummy login/logout system with session stored in localStorage.
- **Dashboard:** Personalized dashboard showing user info, referral code, total donations, and rewards/unlockables.
- **Leaderboard:** Displays a ranked list of top donors, reading data from a JSON file.
- **API Routes:** RESTful API endpoints for user and leaderboard data, reading from JSON files.
- **Mock Data Storage:** All mock data is stored in JSON files under the `/data` directory.
- **Responsive UI:** Modern, responsive design using Tailwind CSS.
- **Navigation Bar:** Sticky navbar with navigation links and logout option.
- **Protected Routes:** Dashboard and leaderboard pages are protected and require login.
- **Easy Customization:** Easily update mock data by editing JSON files.
- **Dark Text:** All pages use dark text for readability.
- **Deployment Ready:** Simple to run locally or deploy to Vercel/Netlify.

## Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- npm or yarn

### Installation

```bash
git clone https://github.com/your-username/intern-portal.git
cd intern-portal
npm install
```

### Running the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
  app/
    dashboard/
    leaderboard/
    login/
    api/
      leaderboard/
      user/
    components/
      Navbar.tsx
  styles/
  utils/
    auth.ts
data/
  leaderboard.json
```

## Customization

- Update API routes in `src/app/api/` for backend logic.
- Edit dashboard and leaderboard pages in their respective folders.
- Update mock data in `data/leaderboard.json`.

## License

MIT
