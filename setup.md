# Project Setup

## 1. Firebase Setup

### Client SDK (`.env.local`)
1. Go to [Firebase Console](https://console.firebase.google.com/) > Create project
2. Add a web app (`</>` icon) > Copy the config values
3. Enable **Email/Password** auth: Project > Authentication > Sign-in method > Email/Password > Enable
4. Create Firestore database: Project > Firestore Database > Create database > Start in test mode

### Admin SDK
1. Firebase Console > Project Settings > Service accounts > **Generate new private key**
2. From the downloaded JSON, extract `project_id`, `client_email`, `private_key`

### Firestore Indexes
The app requires composite indexes. On first run, the error logs will contain direct links to create them. Click each link and wait 2-3 minutes for them to build.

## 2. Google Gemini API Key
1. Go to [Google AI Studio](https://aistudio.google.com/apikey)
2. Click **Create API Key**
3. Set as `GOOGLE_GENERATIVE_AI_API_KEY` in `.env.local`

## 3. Vapi Setup

### Get API Keys
1. Go to [Vapi Dashboard](https://dashboard.vapi.ai)
2. Navigate to [API Keys](https://dashboard.vapi.ai/api-keys)
3. Copy your **Public Key** > Set as `NEXT_PUBLIC_VAPI_WEB_TOKEN` in `.env.local`

### Create Assistant (for interview generation)
1. Go to [Assistants](https://dashboard.vapi.ai/assistants) > Create Assistant
2. Set **First Message**:
   ```
   Hello {{username}}! Welcome to PrepWise. I'm here to help you set up a mock interview. What job role are you preparing for?
   ```
3. Set **System Prompt**:
   ```
   You are a friendly interview preparation assistant. Your job is to collect information from the user to set up a personalized mock interview. You need to gather the following details one at a time, in a conversational manner:

   1. Job Role (e.g., Frontend Developer, Backend Developer, Full Stack Developer, Data Scientist, etc.)
   2. Experience Level (entry, mid, senior)
   3. Tech Stack (e.g., React, Node.js, Python, AWS, etc. - can be multiple)
   4. Interview Type - whether they want more behavioral questions, technical questions, or a mix of both
   5. Number of questions they'd like (suggest 5-10)

   Guidelines:
   - Ask for ONE piece of information at a time.
   - Be conversational and encouraging.
   - If the user gives vague answers, ask a clarifying follow-up.
   - Once you have ALL the information, summarize what they told you and confirm before proceeding.
   - After confirmation, call the createInterview function with the collected data.
   ```

### Add Function Tool
1. In the assistant, go to **Tools** > Add tool > Select **Function**
2. Name: `createInterview`
3. Description: `Creates a mock interview with the collected parameters`
4. Server URL: `<your-ngrok-or-deployed-url>/api/vapi/generate`
5. For parameters, select the **JSON** option and paste:
```json
{
  "type": "object",
  "properties": {
    "role": {
      "type": "string",
      "description": "The job role the user is preparing for, e.g. Frontend Developer, Backend Developer, Full Stack Developer"
    },
    "level": {
      "type": "string",
      "enum": ["entry", "mid", "senior"],
      "description": "The experience level of the user"
    },
    "techstack": {
      "type": "string",
      "description": "Comma-separated list of technologies, e.g. React,Node.js,TypeScript"
    },
    "type": {
      "type": "string",
      "enum": ["behavioral", "technical", "mixed"],
      "description": "The type of interview questions to focus on"
    },
    "amount": {
      "type": "string",
      "description": "Number of questions to generate, e.g. 5"
    }
  },
  "required": ["role", "level", "techstack", "type", "amount"]
}
```
6. Save and copy the **Assistant ID** from the URL > Set as `NEXT_PUBLIC_VAPI_WORKFLOW_ID` in `.env.local`

## 4. ngrok (for local development)

Vapi needs a public URL to call your API. ngrok exposes your localhost.

```bash
brew install ngrok
ngrok http 3000
```

Copy the `https://...ngrok-free.dev` URL and update the Vapi function tool's **Server URL** to:
```
https://<your-ngrok-url>/api/vapi/generate
```

**Important:** The ngrok URL changes every time you restart ngrok. Each time it changes, you must update the **Server URL** in the Vapi assistant's `createInterview` function tool with the new URL. For production, deploy to Vercel and use that permanent URL instead.

## 5. `.env.local`

```
NEXT_PUBLIC_FIREBASE_API_KEY=
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=
NEXT_PUBLIC_FIREBASE_PROJECT_ID=
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=
NEXT_PUBLIC_FIREBASE_APP_ID=
NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=

FIREBASE_PROJECT_ID=
FIREBASE_CLIENT_EMAIL=
FIREBASE_PRIVATE_KEY=

NEXT_PUBLIC_VAPI_WEB_TOKEN=
NEXT_PUBLIC_VAPI_WORKFLOW_ID=

GOOGLE_GENERATIVE_AI_API_KEY=
```

## 6. Run

```bash
npm install
npm run dev
```
