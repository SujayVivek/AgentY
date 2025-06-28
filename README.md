# 🐦 AI Twitter Bot

A modular, extensible NestJS application that leverages AI to generate, post, and manage tweets (with or without code snippets) on Twitter—fully automated and highly configurable.

---

## ✨ Features

- **AI-Powered Content Generation**  
  Generates insightful tweets and advanced code snippets using OpenAI, tailored to various tech topics and user professions.

- **Automated Tweet Scheduling**  
  Posts tweets at customizable intervals, supporting both text-only and code-snippet (with image) formats.

- **Dynamic Code Snippet Rendering**  
  Converts code snippets into visually appealing images for enhanced engagement.

- **Email Notifications**  
  Sends notifications after each successful tweet, keeping you informed of bot activity.

- **Environment-Based Configuration**  
  All credentials, API keys, and operational settings are managed securely via environment variables.

---

## 🏗️ Architecture Overview

- **Abstraction & Modularity**  
  The application is built on a clean separation of concerns:
  - **API Integrations**: Handles all external API communications (OpenAI, Twitter).
  - **Tweet Management**: Orchestrates content generation, posting, and notifications.
  - **Mailer**: Manages email delivery with templated content.
  - **Commons & Constants**: Houses utility functions and prompt definitions for easy extension.

- **Scheduling**  
  Uses robust, cron-based scheduling to automate tweet creation and posting.

- **Validation & Safety**  
  Employs strong validation and environment checks to ensure reliability and security.

---

## 🚀 Getting Started

1. **Clone the repository**
2. **Install dependencies**
