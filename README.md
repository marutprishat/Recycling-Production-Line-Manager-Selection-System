# Recycling-Production-Line-Manager-Selection-System

A standalone dashboard for ranking and evaluating candidates for a Recycling Production Line Manager role. This system features a MySQL database design, synthetic candidate generation, structured AI evaluation prompts, and a React-based leaderboard.

## 🚀 Features

* [cite_start]**Database Design:** Optimized MySQL schema for candidates, evaluations, and rankings[cite: 9].
* [cite_start]**Data Generation:** Script to generate 40 realistic candidate profiles using Faker.js[cite: 16].
* [cite_start]**AI Evaluation:** Structured prompts to assess Crisis Management, Sustainability, and Team Motivation[cite: 18].
* [cite_start]**Interactive Dashboard:** Built with **React + Vite** and **Mantine UI** to visualize skill heatmaps and leaderboards[cite: 24, 26].

---

## 🛠️ Tech Stack

* **Frontend:** React, Vite, Mantine UI
* **Database:** MySQL (Schema provided)
* **Data:** JSON / Faker.js for simulation

---

## 📂 Project Structure

```text
/
├── database/
│   ├── schema.sql         # SQL commands to create tables
│   └── sample_data.sql    # 40 generated candidates
├── src/
│   ├── App.jsx            # Main Dashboard Component
│   ├── candidates.json    # Candidate data with AI scores
│   └── main.jsx           # Entry point
├── AI_PROMPTS.md          # Evaluation strategy & prompts
├── index.html             # App entry HTML
├── package.json           # Dependencies
└── vite.config.js         # Vite configuration

⚙️ Setup Instructions
1. Frontend Setup
Navigate to the project directory:

Bash

cd recycling-project
Install the required dependencies:

Bash

npm install
Start the development server:

Bash

npm run dev
Open your browser and navigate to the local URL provided (usually http://localhost:5173).

2. Database Setup (Optional)
If you wish to run the SQL backend:

Open your MySQL client (e.g., Workbench).

Create a new database named recycling_db.

Import the schema:

Run the script in database/schema.sql.

Load the data:

Run the script in database/sample_data.sql.

📊 Usage
Leaderboard: The dashboard automatically ranks the top 10 candidates based on their total average score.

Candidate Cards: Scroll down to view detailed cards for all 40 candidates.


Skill Heatmap: Visual progress bars indicate proficiency in Crisis Management, Sustainability, and Team Motivation.

📝 Evaluation Criteria Met
Database Design: Efficient schema with foreign keys and indexes.

AI Prompting: Creativity and depth in scoring rubrics.

Dashboard: Usability and visual clarity using Mantine UI.

Random Data: Realistic profiles generated via code.
