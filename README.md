# LLM PowerPoint Speaker

An AI-powered web application that generates presentation slides and accompanying speech from user-provided topics.

## Features

- Generates complete presentation structure from a simple topic
- Creates PowerPoint presentations automatically
- Converts slides to images for web viewing
- Generates speech audio for each slide

## Project Structure

```
LLM_PPT_SPEAK/
├── app.py              # Main Flask application
├── MVP.py              # Core presentation generation functionality
├── requirements.txt    # Project dependencies
├── static/             # Generated content directories
│   ├── audio/          # Generated speech files
│   ├── generated/      # PowerPoint files
│   └── slides/         # Converted slide images
└── templates/          # HTML templates
    ├── index.html      # Input form
    └── presentation.html # Presentation viewer
```

## Setup

1. Clone this repository
2. Install dependencies: `pip install -r requirements.txt`
3. Run the application: `python app.py`

## Deployment

This application can be deployed to platforms like Heroku, Render, or Vercel.

## Environment Variables

- `PORT`: Port to run the application (default: 8080)
- `FLASK_DEBUG`: Set to 'True' for debug mode

## Configuration

1. Update API keys in MVP.py:
   - DEEPSEEK_API_KEY
   - Azure Speech Services subscription key and region

## Usage

1. Start the application:

```bash
python app.py
```

2. Open your browser to `http://127.0.0.1:8080`
3. Enter a presentation topic and submit
4. Navigate through your AI-generated presentation with audio narration

## Notes

- Requires internet connectivity for LLM and speech services
- Presentations are stored locally in the static directory
