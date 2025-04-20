# ✨ Interactive 3D Portfolio - Kaustuv Mohapatra] ✨

Welcome to the repository for my personal portfolio website! This project showcases my skills and projects through a highly interactive and visually engaging experience, built with modern web technologies including Next.js, Tailwind CSS, Three.js, React Three Fiber, and Framer Motion. The design aims for a clean, sleek aesthetic, drawing inspiration from macOS interfaces, combined with immersive 3D elements.

---

**🚀 Live Demo:** [**Coming Soon**]([Coming_Soon]) 

## 🌟 Project Overview

This portfolio is more than just a static page; it's a dynamic representation of my journey as a web developer. The core goal was to create a memorable user experience using:

*   **Immersive 3D Graphics:** Leveraging Three.js and React Three Fiber for animated models, interactive elements, and unique section backgrounds.
*   **Fluid Animations:** Utilizing Framer Motion for smooth page transitions, scroll-triggered effects, and micro-interactions that enhance usability.
*   **Modern Tech Stack:** Built with Next.js for performance and features, styled with the utility-first approach of Tailwind CSS.
*   **Responsive Design:** Ensuring a seamless experience across all devices, from desktops to mobile phones.
*   **Clean Aesthetics:** Inspired by macOS design principles for clarity and visual appeal.

---

## 🎨 Key Features

*   **🏠 Hero Section:**
    *   Engaging 3D animated model (e.g., custom character, abstract object).
    *   Dynamic background (e.g., animated stars, gradient shifts).
    *   Animated introductory text with Framer Motion effects.
    *   Clear Call-to-Action button.
    *   (Optional) Typewriter effect for headline text.
*   **🧑‍💻 About Me Section:**
    *   Scroll-triggered animations for text and images.
    *   Interactive 3D avatar representation.
    *   Concise biography detailing experience, education, and passion.
    *   Tech stack display with interactive hover effects (e.g., revealing proficiency).
*   **📂 Projects Section:**
    *   Responsive grid layout using Tailwind CSS.
    *   Unique 3D card effect for each project showcase (e.g., rotation on hover).
    *   Modal pop-up for detailed project descriptions, tech stack, and challenges.
    *   Direct links to Live Previews and GitHub repositories.
*   **✨ Skills Section:**
    *   Visually appealing animated skill bars or gauges.
    *   Floating/Interactive 3D icons representing different technologies (React Three Fiber).
    *   Hover effects on icons to enlarge and potentially show descriptions.
*   **📞 Contact Section:**
    *   Clean, interactive contact form (consider integrating with EmailJS, Formspree, or Netlify Forms).
    *   Subtle animations on input fields and icons.
    *   Animated social media links.
    *   Feedback animation on the "Send Message" button (e.g., shake on submit).
*   **🎮 Bonus Features (Implemented/Planned):**
    *   Smooth parallax scrolling effects on certain elements.
    *   Dark Mode toggle for user preference.
    *   (Optional) 3D rotating globe for location visualization or visual flair.

---

## 🛠️ Technologies Used

*   **Framework:** [Next.js](https://nextjs.org/) (React Framework)
*   **Styling:** [Tailwind CSS](https://tailwindcss.com/)
*   **3D Graphics:** [Three.js](https://threejs.org/)
*   **React Renderer for Three.js:** [React Three Fiber](https://docs.pmnd.rs/react-three-fiber/)
*   **Three.js Helpers for R3F:** [React Three Drei](https://github.com/pmndrs/drei)
*   **Animation:** [Framer Motion](https://www.framer.com/motion/)
*   **Version Control:** [Git](https://git-scm.com/) & [GitHub](https://github.com/)
*   **Package Manager:** [npm](https://www.npmjs.com/) / [yarn](https://yarnpkg.com/) / [bun](https://bun.sh/) *(Based on your `bun.lock` file)*
*   **(Optional) Deployment:** [Vercel](https://vercel.com/), [Netlify](https://www.netlify.com/)
*   **(Optional) Form Handling:** [EmailJS](https://www.emailjs.com/), [Formspree](https://formspree.io/), etc.
*   **(Optional) Linting/Formatting:** ESLint, Prettier / Biome *(Based on your `biome.json`)*

---

## 🚀 Getting Started

Follow these instructions to set up and run the project locally.

### Prerequisites

*   [Node.js](https://nodejs.org/) (Version 18.x or later recommended for Next.js)
*   [Git](https://git-scm.com/)
*   One of the following package managers:
    *   [npm](https://www.npmjs.com/get-npm) (comes with Node.js)
    *   [Yarn](https://yarnpkg.com/getting-started/install)
    *   [Bun](https://bun.sh/docs/installation)

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/[YourGitHubUsername]/[YourRepositoryName].git
    cd [YourRepositoryName]
    ```

2.  **Install dependencies:**
    *   Using bun (recommended based on your `bun.lock`):
        ```bash
        bun install
        ```
    *   Or using npm:
        ```bash
        npm install
        ```
    *   Or using yarn:
        ```bash
        yarn install
        ```

3.  **Set up Environment Variables:**
    *   Create a `.env.local` file in the root of the project.
    *   Copy the contents of `.env.example` (if you create one) or add the necessary environment variables. This might include API keys for form handling services (like EmailJS).
    *   Example `.env.local`:
        ```env
        # Example for EmailJS
        # NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
        # NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
        # NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
        ```
    *   **Note:** Ensure `NEXT_PUBLIC_` prefix is used for variables needed on the client-side in Next.js.

---

## 🏃 Running the Project

1.  **Start the development server:**
    *   Using bun:
        ```bash
        bun run dev
        ```
    *   Or using npm:
        ```bash
        npm run dev
        ```
    *   Or using yarn:
        ```bash
        yarn dev
        ```
    *   Open [http://localhost:3000](http://localhost:3000) (or the specified port) in your browser.

2.  **Build for production:**
    *   Using bun:
        ```bash
        bun run build
        ```
    *   Or using npm:
        ```bash
        npm run build
        ```
    *   Or using yarn:
        ```bash
        yarn build
        ```

3.  **Run the production build locally:**
    *   Using bun:
        ```bash
        bun run start
        ```
    *   Or using npm:
        ```bash
        npm run start
        ```
    *   Or using yarn:
        ```bash
        yarn start
        ```

---
## 📁 Project Structure (Simplified)
├── public/ # Static assets (images, 3D models .glb/.gltf)
├── src/ # Main source code (depends on Next.js setup: app or pages dir)
│ ├── app/ # Next.js App Router structure (if used)
│ │ ├── layout.jsx
│ │ └── page.jsx
│ ├── components/ # Reusable UI components (Buttons, Cards, Loaders)
│ │ └── canvas/ # React Three Fiber specific components (Models, Stars, Lights)
│ ├── sections/ # Major page sections (Hero, About, Projects, Contact)
│ ├── constants/ # Static data (navigation links, project details, skills)
│ ├── hooks/ # Custom React hooks
│ ├── lib/ # Utility functions, library configs
│ ├── styles/ # Global styles (e.g., globals.css)
│ └── ... # Other potential folders (contexts, etc.)
├── .env.local # Local environment variables (!!! NOT committed)
├── .gitignore # Files/folders ignored by Git
├── next.config.js # Next.js configuration
├── package.json # Project metadata and dependencies
├── tailwind.config.ts # Tailwind CSS configuration
├── tsconfig.json # TypeScript configuration
└── README.md # This file
---


---

## ☁️ Deployment

This Next.js application is optimized for deployment on platforms like:

*   **[Vercel](https://vercel.com/):** The creators of Next.js, offering seamless integration. Connect your GitHub repository for automatic deployments.
*   **[Netlify](https://www.netlify.com/):** Another excellent platform for static and dynamic site hosting.

Refer to the [Next.js Deployment Documentation](https://nextjs.org/docs/deployment) for more options and detailed instructions.

---

## 🙌 Acknowledgements & Contact

*   Inspiration from various creative portfolios and macOS design language.
*   Thanks to the communities behind Three.js, React Three Fiber, Framer Motion, and Next.js.
*   3D Models sourced from [mention source, e.g., Sketchfab, Poly Haven, or 'custom made'].
*   Icons from [mention source, e.g., React Icons, FontAwesome].

---

Feel free to connect with me:

*   **Portfolio:** [YOUR_LIVE_DEMO_URL]
*   **LinkedIn:** [Your LinkedIn Profile URL]
*   **GitHub:** [https://github.com/KaustuvMohapatra]

---
