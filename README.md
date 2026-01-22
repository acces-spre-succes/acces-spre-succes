# Acces spre Succes Website

Website-ul oficial al Asociației Acces spre Succes, construit cu Next.js, TailwindCSS și shadcn/ui.

## 🚀 Cum să rulezi proiectul

1.  **Clonează repo-ul:**
    ```bash
    git clone <repo-url>
    cd acces-spre-succes
    ```

2.  **Instalează dependențele:**
    ```bash
    npm install
    ```

3.  **Pornește serverul de dezvoltare:**
    ```bash
    npm run dev
    ```
    Accesează [http://localhost:3000](http://localhost:3000).

## 🛠️ Tehnologii Folosite

-   **Framework:** [Next.js 14+](https://nextjs.org/) (App Router)
-   **Styling:** [TailwindCSS](https://tailwindcss.com/)
-   **UI Components:** [shadcn/ui](https://ui.shadcn.com/)
-   **Internationalization:** [next-intl](https://next-intl-docs.vercel.app/)
-   **Animations:** [Framer Motion](https://www.framer.com/motion/)
-   **Icons:** [Lucide React](https://lucide.dev/)

## 📂 Structura Proiectului

-   `src/app/[locale]`: Rutele aplicației (localizate).
-   `src/components`: Componente UI reutilizabile.
-   `src/data`: Date mock (proiecte, blog, etc.).
-   `src/messages`: Fișierele de traducere (ro.json, en.json).

## 📝 Cum să editezi conținutul

-   **Texte statice:** Editează fișierele din `src/messages/`.
-   **Proiecte/Blog:** Editează `src/data/mock.ts`.
-   **Pagini:** Modifică fișierele din `src/app/[locale]/`.

## ✅ TODO pentru viitor

-   [ ] Integrare backend (Supabase/Firebase) pentru formulare.
-   [ ] Implementare CMS (Sanity/Contentful) pentru blog și proiecte.
-   [ ] Generare automată PDF pentru formularul 230.
-   [ ] Integrare procesator de plăți pentru donații online.

## 📄 Licență

Acest proiect este licențiat sub MIT License.
