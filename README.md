# IPL T20 Live Dashboard

A responsive and interactive React application that displays IPL 2025 match details, live scores, points table, and full schedule — all with team logos and scorecards.

## 🚀 Features

- 🏏 **Match Cards**: View schedule and results of IPL 2025 matches.
- 📊 **Points Table**: See updated standings with NRR, wins/losses, and recent form.
- 📅 **Match Schedule**: All upcoming fixtures with venues and timings.
- 📋 **Scorecards**: Click any match to view batting and bowling performance.
- 🔍 **Mobile-first Design**: Smooth animations and collapse/expand tabs for a seamless experience.

## 🛠️ Tech Stack

- **React 19** with **TypeScript**
- **Material UI** for UI components
- **React Router v7** for routing
- **Notistack** for snackbars
- **Jest** and **React Testing Library** for testing
- **JSON** files for mock IPL data

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/alok7023/CrickBoard.git
   cd ipl-t20-dashboard
   ```

2. **Install dependencies for the frontend**
   ```bash
   cd frontend
   npm install
   ```

3. **Start the frontend application**
   ```bash
   cd ../frontend
   npm start
   ```

## 📂 Project Structure

```
ipl-t20-dashboard/
├── backend/
│   ├── server.js          # Backend server for scraping IPL data
│   └── package.json       # Backend dependencies
├── frontend/
│   ├── public/            # Static assets (HTML, images, etc.)
│   ├── src/               # React source code
│   │   ├── components/    # Reusable React components
│   │   ├── context/       # Context API for authentication
│   │   ├── models/        # TypeScript interfaces for data models
│   │   ├── utils/         # JSON data and utility files
│   │   ├── App.tsx        # Main application component
│   │   └── index.tsx      # Entry point for React
│   ├── package.json       # Frontend dependencies
│   └── tsconfig.json      # TypeScript configuration
```

## 🧪 Testing

Run the following command to execute tests:
```bash
npm test
```

## 🌐 Live Demo

[Live Demo Link](#) (Add your deployed link here)
