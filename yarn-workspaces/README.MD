Let's start by setting up Yarn Workspaces with your desired configuration. Here's a step-by-step guide to get started:

### Step 1: Initialize the Repo

1. **Create the repository**:

   ```bash
   mkdir my-monorepo
   cd my-monorepo
   git init
   ```

2. **Initialize Yarn**:
   ```bash
   yarn init -y
   ```

### Step 2: Enable Yarn Workspaces

Edit the `package.json` to configure Yarn Workspaces:

```json
{
  "name": "my-monorepo",
  "private": true,
  "workspaces": ["apps/*", "packages/*"]
}
```

### Step 3: Set Up the Folder Structure

Create the folder structure:

```bash
mkdir -p apps/web-chat apps/tickets packages/ui
```

### Step 4: Set Up Global Dependencies

Install the global tools (ESLint, TypeScript, Prettier, Jest, etc.) in the root `package.json`.

1. **Install global dependencies**:
   ```bash
   yarn add -W typescript eslint prettier jest @testing-library/react @testing-library/dom@^10.0.0 storybook styled-components react react-dom vite swc @vitejs/plugin-react @types/react @types/react-dom
   ```

### Step 5: Create `button.tsx` in `packages/ui`

Create the button component in `packages/ui/button.tsx`:

```tsx
// packages/ui/button.tsx
import React from 'react';

const Button = () => {
  return <button className='button'>Click me!</button>;
};

export default Button;
```

### Step 6: Set Up the Apps (`web-chat` and `tickets`)

1. **Initialize the apps** (using Vite with React template):

   ```bash
   cd apps/web-chat
   yarn create vite@latest . --template react-swc-ts
   cd ../tickets
   yarn create vite@latest . --template react-swc-ts
   ```

2. **Install the shared UI package**:
   In both `web-chat` and `tickets` directories, run:
   ```bash
   yarn add ui@workspace:*
   ```

### Step 7: Configure Vite for React & SWC & Typescript

Make sure each app’s Vite configuration supports SWC and React:

1. In `apps/web-chat/vite.config.ts` and `apps/tickets/vite.config.ts`, add the SWC plugin configuration:

   ```ts
   import { defineConfig } from 'vite';
   import react from '@vitejs/plugin-react';

   // https://vitejs.dev/config/
   export default defineConfig({
     base: './',
     plugins: [react()],
     optimizeDeps: {
       esbuildOptions: {
         target: 'esnext',
       },
     },
   });
   ```

2. in root `tsconfig.json` add:

```json
{
  "compilerOptions": {
    "composite": true,
    "moduleResolution": "node",
    "esModuleInterop": true,
    "skipLibCheck": true,
    "module": "ESNext",
    "target": "ESNext",
    "lib": ["ESNext", "DOM"],
    "jsx": "react-jsx",
    "strict": true,
    "baseUrl": "."
  },
  "include": ["packages", "apps"],
  "references": [
    { "path": "packages/ui" },
    { "path": "apps/web-chat" },
    { "path": "apps/tickets" }
  ]
}
```

### Step 8: Share Button Component

To share the `Button` component between `web-chat` and `tickets`, just import it from the `ui` package in the apps:

For example, in `apps/web-chat/src/App.tsx`:

```tsx
import React from 'react';
import Button from 'ui/button';

const App = () => {
  return (
    <div>
      <h1>Web Chat App</h1>
      <Button />
    </div>
  );
};

export default App;
```

Repeat the same in `apps/tickets/src/App.tsx`.

### Step 9: Start the Apps

1. **Run the apps**:
   In `apps/web-chat`, run:

   ```bash
   yarn dev
   ```

   In `apps/tickets`, run:

   ```bash
   yarn dev
   ```

Both apps should now share the `Button` component from the `ui` package.

---

That’s the basic setup for Yarn Workspaces. When you're ready, we can test the setup or move on to other tools. Let me know how it goes!
