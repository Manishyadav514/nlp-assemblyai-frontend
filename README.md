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
   git clone https://github.com/yourusername/audio-to-text-app.git
   cd audio-to-text-app
   ```

### API Endpoint

Check backend repo, [nlp-assemblyai-backend](https://nodejs.org/), for API endpoint.

Example Response

```
{
  s"transcript": "This is the transcribed text from the audio file."
}
```
