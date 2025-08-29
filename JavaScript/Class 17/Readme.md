# 🚀 Deploying Your Project on Surge

This guide will help you **deploy your project on [Surge](https://surge.sh/)** step by step.  
Follow these simple instructions carefully 👇

---

## 📌 Step 1: Install Node.js (One Time Only)

- Go to the official Node.js website: [https://nodejs.org/](https://nodejs.org/)  
- Download and install the **LTS (Long Term Support)** version ✅  
- This is required only **once** on your system.  

---

## 📌 Step 2: Install Surge (One Time Only)

Open your **Command Prompt / Terminal** and run this command:  

```bash
npm install -g surge
```

👉 This command installs Surge **globally** on your system. You only need to run it once.  

---

## 📌 Step 3: First Time Surge Login

After installation, type this command in the terminal:  

```bash
surge
```

- It will ask for your **Email** 📧 and **Password** 🔑 (only the first time).  
- Once you log in, Surge will remember your credentials.  

---

## 📌 Step 4: Deploy Your Project

1. Navigate to the folder where your project’s **build / final files** are located.  
   Example:  

   ```bash
   cd my-project
   ```

2. Then run:  

   ```bash
   surge
   ```

3. Surge will automatically give you a **default URL** 🌍.  
   - If you’re okay with it → just press **Enter**.  
   - If you want a custom URL → type your desired URL (e.g., `myproject.surge.sh`).  

✨ Boom! Your website is now **live on Surge**.  

---

## 📌 Step 5: Redeploy After Changes

If you make changes in your code and want to redeploy:  

- Just run the same command again in your project folder:  

```bash
surge
```

- Enter the **same URL** you used before, and Surge will redeploy your project with the latest updates 🔄.  

---

## 🎉 Congratulations!  
Your project is now successfully deployed on **Surge Hosting** 🚀🔥  

---
