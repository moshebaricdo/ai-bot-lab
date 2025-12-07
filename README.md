
  # AI Bot Character Generator
  
  This is a code bundle for AI Bot Character Generator. The original project is available at https://www.figma.com/design/ptwpRADUWTpo5lqVb5rqOT/AI-Bot-Character-Generator.
  
  ## Requirements
  
  - Node.js 20+ (see `.nvmrc`)
  - npm 10+
  
  ## Install
  
  ```bash
  npm i
  ```
  
  ## Scripts
  
  - `npm run dev`: Start Vite dev server (port 3000 per `vite.config.ts`).
  - `npm start`: Alias for dev.
  - `npm run build`: Production build to `build/`.
  - `npm run preview`: Preview the production build locally.
  
  ## Notes
  
  - Dark mode toggle is limited to the preview area background only; the rest of the UI is not themed globally.
  - Node and npm versions are enforced via `.nvmrc`, `.npmrc` and the `engines` field in `package.json`.
  