The Registration Wizard

A multi-step onboarding wizard built with **React + Vite**.  
This project demonstrates modern SaaS/FinTech style onboarding flows where data collection is segmented into smaller steps instead of one large form.

---

Features
- **Step Segmentation**: 3-step wizard (Personal Info → Account Details → Review & Submit).
- **State Lifting**: Data persists across navigation (Back/Next).
- **Validation**:
  - Email must contain `@`.
  - Password must be at least 8 characters.
  - Confirm Password must match.
- **UX Enhancements**:
  - Real-time validation on input change.
  - Disabled "Next" button until fields are valid.
  - Show/Hide password toggle.
  - Dynamic progress bar.
- **Submission**: Logs final payload to console and shows success state.

---

Project Structure
```
registration-wizard/
├── index.html
├── src/
│   ├── App.jsx
│   ├── App.css
│   ├── RegistrationWizard.jsx
│   └── main.jsx
```

---

Setup Instructions

1. Create project with Vite
```bash
npm create vite@latest registration-wizard --template react
cd registration-wizard
npm install
```

2. Add the Wizard Component
Create `src/RegistrationWizard.jsx` and paste the wizard code.


4. Run the App
```bash
npm run dev
```
Visit:   https://registration-liart-phi.vercel.app/ 

Push to GitHub
```bash
git init
git add .
git commit -m "Initial commit - Registration Wizard"
git branch -M main
git remote add origin https://github.com/Ragavika/registration.git
git push -u origin main
```


here are the screenshots

<img width="1920" height="1020" alt="Image" src="https://github.com/user-attachments/assets/e4e0cead-0107-47df-bd71-ffa8e7da8bd1" />

<img width="1920" height="1020" alt="Image" src="https://github.com/user-attachments/assets/31cdedeb-bf9e-4eaa-b4fb-7226afe746e5" />

<img width="1920" height="1020" alt="Image" src="https://github.com/user-attachments/assets/28930b0f-4d46-445e-a9e4-d3df61e0c8e2" />
