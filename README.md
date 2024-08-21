# Audio-to-Text Conversion Application

This project is a Next-based web application that allows users to upload MP3 audio files and converts them to text using the AssemblyAI API.

## Features

- Upload MP3 audio files.
- Convert uploaded audio to text using AssemblyAI API.
- Display the transcribed text on the webpage.

## Getting Started

Follow these instructions to set up and run the project on your local machine.

### Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v14 or higher)
- [npm](https://www.npmjs.com/) (comes with Node.js)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Manishyadav514/nlp-assemblyai-frontend.git
   cd nlp-assemblyai-frontend
   npm install
   ```

### API Endpoint

Check backend repo, [nlp-assemblyai-backend](https://nodejs.org/), for API endpoint.

Example Response

```
{
  s"transcript": "This is the transcribed text from the audio file."
}
```

## **Deployment**

I have deployed Next.js app on GitHub Pages which involves a few steps, as GitHub Pages is primarily for static sites, whereas Next.js apps often require a server. However, you can deploy a static export of your Next.js app to GitHub Pages. Here’s how you can do it:

### Step 1: Configure Next.js for Static Export

1. Open your `next.config.js` file (create one if it doesn't exist) and add the following configuration to export your Next.js app as static HTML:

   ```javascript
   /** @type {import('next').NextConfig} */
   const nextConfig = {
     output: 'export',
     images: {
       unoptimized: true, // Disable Image Optimization if needed
     },
     trailingSlash: true, // Adds trailing slash to all routes
     basePath: '/your-repo-name', // Replace with your GitHub repository name
   }

   module.exports = nextConfig;
   ```

   - `output: 'export'` tells Next.js to generate a static site.
   - `images: { unoptimized: true }` is necessary if you're using Next.js image optimization features that are not compatible with static hosting.
   - `basePath` is important if your GitHub Pages site will not be served from the root of a domain (e.g., `username.github.io/your-repo-name`).

### Step 2: Build and Export the Static Site

1. Update your `package.json` scripts to include a build command for static export:

   ```json
   {
     "scripts": {
       "build": "next build",
       "export": "next export",
       "deploy": "npm run build && npm run export && gh-pages -d out"
     }
   }
   ```

   - The `export` command will generate the static files in an `out` directory.
   - The `deploy` script will build, export, and deploy your site to GitHub Pages.

### Step 3: Install `gh-pages` Package

1. Install the `gh-pages` package to handle deployment to GitHub Pages:

   ```bash
   npm install gh-pages --save-dev
   ```
2. Add a `homepage` field in your `package.json` to point to your GitHub Pages URL:

   ```json
   {
     "homepage": "https://username.github.io/your-repo-name"
   }
   ```

### Step 4: Deploy to GitHub Pages

1. Run the following command to build, export, and deploy your Next.js app to GitHub Pages:

   ```bash
   npm run deploy
   ```

   This command will create a new branch named `gh-pages` in your GitHub repository and push the contents of the `out` directory there. GitHub Pages will automatically serve the files from this branch.

### Step 5: Configure GitHub Repository

1. Go to your GitHub repository.
2. Navigate to **Settings** > **Pages**.
3. Under **Source**, select the `gh-pages` branch.

Your Next.js app should now be deployed and accessible via `https://username.github.io/your-repo-name`.

### Important Considerations

- **Dynamic Routes**: Since GitHub Pages is a static hosting solution, dynamic routes that rely on server-side functionality won't work. Ensure your app can be fully pre-rendered or use client-side rendering for dynamic content.
- **Custom Domain**: If you’re using a custom domain, ensure your DNS is configured correctly and update the `homepage` field in `package.json` accordingly.


## **Converting this Website to PWA**

Progressive Web Application’s notable advantages, such as higher discoverability, reduction of memory usage, cost-effective development, and notably fast offline performance.

any given web application can be converted into a PWA with relative ease. This is true regardless of the type or complexity of your app. Turning a website into a Progressive Web App (PWA) involves adding a few features and modifying some code to make the website behave like an app on mobile devices. Here are the general steps to turn website into PWA.

### **1. Build a Basic Website**

* Secure connection to PWA through HTTPS will help users feel more protected.
* website must be responsive

### **2. Create a Web App Manifest File**

It describes your PWA, including its name, icons, and other details. To create the web app manifest, you can use a tool like PWA Builder or create it manually. Once you have the manifest file, add it to your website’s root directory. If you don’t have a structured system for your templates, add these lines to get started:

```
<head>

<meta name= “viewport” content=”width=device-width, user-scalable=no” />

<link rel= “manifest” href= “manifest.json” />

</head>

```

Your manifest.json should be like this;

```
{
  "name": "Sample PWA",
  "short_name": "nlp_pwa",
  "start_url": "index.html?utm_source=homescreen",
  "scope": "./",
  "icons": [
    {
      "src": "./196.png",
      "sizes": "192x192",
      "type": "image/png"
    },
    {
      "src": "./512.png",
      "sizes": "512x512",
      "type": "image/png"
    }
  ],
  "theme_color": "#ffee00",
  "background_color": "#ffee00",
  "display": "standalone"
}


```

### **3. Add a Service Worker**

A service worker is a JavaScript file that runs in the background and intercepts network requests, and it is the core element of modern PWA technology. The Service Worker will be responsible for all file caching, server pushing notifications, content updates, data manipulation, etc., by listening to network requests on the server and placing as .js files on user devices. The Service Worker will then monitor these events and return the appropriate response.

In addition, the displayed content is customized based on the cached cache even when the user is offline. Besides, you can also use cache data as variables and parameters. This means that although the first load takes a few seconds, subsequent times by leveraging service workers should be faster. Therefore, this allows a PWA to work offline and load quickly.

You can add a service worker to your website by writing the code yourself or using a tool like Workbox. You can copy the code below. To use this code, create a new file and name it *sw.js* before saving your changes.
