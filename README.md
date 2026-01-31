# ✈️ Flight Tracker App

<div align="center">
  <img src="public/assets/plane_dark.png" alt="Logo" width="120" />
  <br />
  <h3>Real-Time Flight Tracking dashboard with Cyberpunk Aesthetics</h3>
  <br />

  ![Next.js](https://img.shields.io/badge/Next.js-black?style=for-the-badge&logo=next.js&logoColor=white)
  ![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
  ![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
  ![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
</div>

<br />

## ✨ Overview

**Flight Tracker** is a modern, responsive web application designed to simulate real-time flight status monitoring. Built with **Next.js 16** (App Router), it features a stunning **Glassmorphism UI**, a custom **Cyberpunk Dark Theme**, and a simulated **Backend API** for realistic data polling.

The app provides a seamless user experience with smooth animations, dynamic live updates, and detailed flight routing information.

## 🚀 Features

- **🌑 Cyberpunk Dark Mode**: A deep navy aesthetic with neon glows and high-contrast typography.
- **🔴 Live Updates**: Real-time polling system that automatically updates flight Gates and Times every 5 seconds.
- **🎨 Glassmorphism UI**: Premium frosted glass cards and floating elements using advanced CSS backdrop filters.
- **📱 Fully Responsive**: Optimized for desktop, tablet, and mobile devices.
- **🔌 Serverless Backend**: Integrated Next.js API Routes (`/api/search`) handling business logic and data simulation.
- **✈️ 3D Assets**: Custom-generated 3D assets for a unique visual identity.
- **🏙️ Detailed Data**: Displays full city and country names for departure and arrival airports.

## 🛠️ Tech Stack

| Category | Technology |
|----------|------------|
| **Framework** | [Next.js 16 (App Router)](https://nextjs.org/) |
| **Language** | [TypeScript](https://www.typescriptlang.org/) |
| **Styling** | Vanilla CSS Variables, CSS Modules |
| **Icons & Assets** | Custom 3D Renders, SVGs |
| **State Management** | React Hooks (useState, useEffect) |



## � How to Use

1.  **Search**: Enter a flight number in the search bar (e.g., **AA123**, **BA456**, **DL789**).
2.  **Monitor**: Watch the flight details card.
3.  **Live Changes**: Wait ~10-20 seconds to witness automatic updates to the **Gate** (e.g., changing from A1 to B5) or **Arrival Time**.

## 📂 Project Structure

```
├── app/
│   ├── api/            # Serverless API Routes
│   ├── layout.tsx      # Root Layout & Fonts
│   ├── page.tsx        # Main UI & Logic
│   └── globals.css     # Global Styles & Variables
├── components/         # Reusable UI Components
│   ├── FlightCard.tsx  # Glassmorphism Details Card
│   ├── Header.tsx      # 3D Animated Header
│   ├── SearchForm.tsx  # Styled Input
│   └── TopBackground.tsx # Starry Night Animation
├── public/
│   └── assets/         # 3D Images & Icons
└── data/               # Mock Data & Types
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).
