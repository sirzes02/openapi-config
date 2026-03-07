# Backend API 🚀

Backend API built with **Node.js + TypeScript** using a modern
development setup focused on code quality, consistency, and automation.

---

## ✨ Stack

- Node.js (ES Modules)
- TypeScript
- ESLint --- code linting
- Prettier --- automatic formatting
- Husky --- Git hooks
- lint-staged --- format only staged files
- commitlint --- conventional commits
- Ready for Swagger / OpenAPI integration

---

## 📦 Installation

Clone the repository and install dependencies:

```bash
git clone <repo-url>
cd backend-api
npm install
```

Husky hooks are installed automatically via the `prepare` script.

---

## 🧑‍💻 Development

Run development server:

Run the docker files and then:

```bash
docker compose exec api npx prisma db push
```

This is going to join prisma with your database

---

## 🧹 Code Quality

### Lint code

```bash
npm run lint
```

### Auto-fix lint issues

```bash
npm run lint:fix
```

### Format project

```bash
npm run format
```

---

## ✅ Git Workflow (Automatic)

Before every commit:

- ESLint runs automatically
- Prettier formats staged files
- Invalid commits are rejected

Just commit normally:

```bash
git add .
git commit -m "feat: add user endpoint"
```

---

## 📝 Commit Convention

This project uses **Conventional Commits**.

Examples:

    feat: add authentication module
    fix: correct validation error
    refactor: simplify service logic
    chore: update dependencies

Invalid commit messages will be rejected automatically.

---

## 📁 Project Structure

    backend-api/
    ├── src/                # Application source code
    ├── dist/               # Compiled output
    ├── .husky/             # Git hooks
    ├── eslint.config.ts    # ESLint configuration
    ├── tsconfig.json
    ├── package.json
    └── README.md

---

## 🔐 SSH Setup (Recommended)

Verify GitHub SSH authentication:

```bash
ssh -T git@github.com
```

If successful, pushes will work without passwords.

---

## 📌 Scripts

Script Description

---

npm run dev Start dev server
npm run build Compile TypeScript
npm start Run compiled app
npm run lint Run ESLint
npm run lint:fix Fix lint issues
npm run format Format with Prettier

---

## 🤝 Contributing

1.  Create a branch
2.  Make your changes
3.  Commit using conventional commits
4.  Open a Pull Request

---

## 📄 License

MIT
