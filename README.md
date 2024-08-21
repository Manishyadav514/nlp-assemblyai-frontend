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

I have deployed this app on github pages. One thing to be noticed that I have converted this into 




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
