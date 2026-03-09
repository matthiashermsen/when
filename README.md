# When

> Simple, free & open source group scheduling — without the noise.

**When** helps you find the best date for a group — fast.  
Create a schedule, mark the days you’re available, and instantly see what works best for everyone.

No time slots. No premium plans. No hidden costs.

---

## ✨ Why When?

Scheduling shouldn’t feel like project management.

**When** takes a deliberately minimal approach:

- 🗓️ Select **days only** — no specific time slots  
- 🚀 Create unlimited schedules  
- 👥 Invite unlimited participants  
- 💸 100% free & Open Source  
- ⚡ Clean, focused and distraction-free  

Instead of micromanaging hours and minutes, you simply mark the days you're available. That’s it.

---

## 🧠 What makes it different?

Most scheduling tools ask you to define exact time slots.

**When** does the opposite.

You only select the **days you’re available**.  
No hours. No complexity. Just clarity.

This keeps planning:

- Faster  
- Easier  
- More flexible  
- Perfect for casual meetups, team events, or group planning  

---

## 🔐 Why do I need an account?

An account ensures:

- You can edit your availability anytime  
- Nobody can vote in your name  

Authentication currently supports:

- Google OAuth
- GitHub OAuth

---

## 👥 Does it work for large groups?

Yes.

There are **no limits** on:

- Participants  
- Selectable days  
- Number of schedules

Whether you're planning with 5 or 50 people — it works the same.

---

## 🌍 Live Version

The project is currently hosted on **Vercel** and uses **Neon** as its database.

Check it out at https://when-sepia.vercel.app/

---

## 🚀 Running Your Own Instance

You can easily run your own instance of **When**.

There are two ways to do this:

- **Build from source** (recommended for development)
- **Docker** (recommended for production)

Please make sure to set the environment variables:

| Variable                          | Description                                   | Example                                                                 |
| --------------------------------- | --------------------------------------------- | ----------------------------------------------------------------------- |
| `NUXT_SESSION_PASSWORD`           | Secret used to encrypt user sessions.         | `NUXT_SESSION_PASSWORD=3c9c6c7a7c0f8f5d9e4f8a7c6d5b4a3e`                |
| `NUXT_OAUTH_GOOGLE_CLIENT_ID`     | Google OAuth client ID.                       | `NUXT_OAUTH_GOOGLE_CLIENT_ID=123456789012-abc123def456.apps.googleusercontent.com` |
| `NUXT_OAUTH_GOOGLE_CLIENT_SECRET` | Google OAuth client secret.                   | `NUXT_OAUTH_GOOGLE_CLIENT_SECRET=GOCSPX-abc123def456ghi789`             |
| `NUXT_OAUTH_GOOGLE_REDIRECT_URL`  | Redirect URL for Google OAuth login.          | `NUXT_OAUTH_GOOGLE_REDIRECT_URL=https://example.com/auth/google`        |
| `NUXT_OAUTH_GITHUB_CLIENT_ID`     | GitHub OAuth client ID.                       | `NUXT_OAUTH_GITHUB_CLIENT_ID=Iv1.1a2b3c4d5e6f7g8h`                      |
| `NUXT_OAUTH_GITHUB_CLIENT_SECRET` | GitHub OAuth client secret.                   | `NUXT_OAUTH_GITHUB_CLIENT_SECRET=gho_1234567890abcdef1234567890abcdef`  |
| `NUXT_OAUTH_GITHUB_REDIRECT_URL`  | Redirect URL for GitHub OAuth login.          | `NUXT_OAUTH_GITHUB_REDIRECT_URL=https://example.com/auth/github`        |
| `DATABASE_URL`                    | PostgreSQL database connection string.        | `DATABASE_URL=postgresql://postgres:password@localhost:5432/mydb`       |

Example .env file

```bash
NUXT_SESSION_PASSWORD=3c9c6c7a7c0f8f5d9e4f8a7c6d5b4a3e

NUXT_OAUTH_GOOGLE_CLIENT_ID=123456789012-abc123def456.apps.googleusercontent.com
NUXT_OAUTH_GOOGLE_CLIENT_SECRET=GOCSPX-abc123def456ghi789
NUXT_OAUTH_GOOGLE_REDIRECT_URL=https://example.com/auth/google

NUXT_OAUTH_GITHUB_CLIENT_ID=Iv1.1a2b3c4d5e6f7g8h
NUXT_OAUTH_GITHUB_CLIENT_SECRET=gho_1234567890abcdef1234567890abcdef
NUXT_OAUTH_GITHUB_REDIRECT_URL=https://example.com/auth/github

DATABASE_URL=postgresql://postgres:password@localhost:5432/mydb
```

### Build From Source

#### 1. Clone the repository

```bash
git clone https://github.com/matthiashermsen/when.git
cd when
```

#### 2. Install the dependencies

```bash
npm install
```

#### 3. Build the application

```bash
npm run build
```

#### 4. Make sure the environment variables are set

Before starting the application, make sure you have configured the required environment variables as described above.

#### 5. Run the build

```bash
node .output/server/index.mjs
```

### Docker

#### 1. Pull the Docker image

```bash
docker pull ghcr.io/matthiashermsen/when:latest
```

#### 2. Start the container

Start the container and provide the required environment variables as described above

```bash
docker run -p 8080:3000 \
  -e NUXT_SESSION_PASSWORD=your-secret \
  -e ... \
  ghcr.io/matthiashermsen/when:latest
```

---

## 💡 Feature Status

**When is currently feature complete.**

That means:

* The core idea is fully implemented
* It works as intended
* It is usable in production

However:

> This is still an MVP.

The architecture, UI, or implementation details may evolve in the future.
Additional features are possible.

---

## 🤝 Contributing

Pull Requests are very welcome.

If you have:

* Feature ideas
* UX improvements
* Bug reports
* Performance suggestions

Please open an issue or PR on GitHub.

Since this is a hobby project, immediate implementation cannot be guaranteed — but every idea is appreciated.

---

## ❤️ Philosophy

**when** started as a personal project.
It’s intentionally simple.

No growth hacking.
No paywalls.
No feature overload.

Just a small, focused tool that solves one problem well:

Finding a date that works for everyone.

---

## 📜 License

MIT - Feel free to use, modify, and improve.

---

Happy scheduling.