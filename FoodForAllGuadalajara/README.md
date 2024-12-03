# Food For All GDL - Web Project

This project is a web application developed for the "Food For All GDL" initiative, aiming to provide digital tools to support their mission of fighting hunger and promoting healthy eating habits.

The application offers various features that allow users to learn more about the organization, discover recipes based on available food items, sponsor families in need, explore events, and locate food bank branches using the Google Maps API. It also includes an authentication system to manage access to specific sections of the site.

---

## Key Features

### 1. **Landing Page**
   A welcoming homepage designed to grab visitors' attention and provide a brief overview of the organization's mission and values.

### 2. **About Us Page**
   A detailed section to learn more about:
   - What the organization does.
   - Key partners and allies.
   - Highlighted projects.

### 3. **Recipes Page**
   - Discover recipes based on the food currently available in the food bank.
   - Recipes are dynamically fetched from a Supabase database.

### 4. **Family Sponsorship**
   - Users can sponsor families listed in the database.
   - Authentication is required to access this functionality.

### 5. **Events**
   - Explore events organized by the food bank.
   - Event information is managed and retrieved from the database.

### 6. **Location Finder**
   - Locate food bank branches with an interactive map powered by the Google Maps API.

### 7. **Authentication**
   - Authentication implemented using Supabase Auth.
   - Users can log in with Google or GitHub to access private sections (Sponsorship, Events, and Recipes).

---

## Technologies Used

- **Frontend**: React with Vite
- **Styling**: Tailwind CSS
- **Database and Authentication**: Supabase
- **Interactive Maps**: Google Maps API

---

## Prerequisites

Before starting, ensure you have the following installed:

- Node.js (version 16 or higher)
- npm or yarn

---

## Installation

Follow these steps to set up the project locally:

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/your-repo.git
## Installation

2. Navigate to the project directory:

   ```bash
   cd your-repo

3. Install dependencies:

   ```bash
   npm install

4. Create a `.env` file in the project's root directory and add your configuration keys (e.g., Supabase credentials and Google Maps API key).

---

## Running the Project

To start the project in development mode, run:

   ```bash
   npm run dev
