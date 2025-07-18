# Fisheye - Professional Photographer Portfolios

## Description

Fisheye is a modern web platform that showcases professional photographer portfolios. The application allows users to discover talented artists and find the ideal photographer for their projects.

## Features

- **Homepage** : Display of all available photographers
- **Photographer pages** : Individual galleries with media (photos/videos)
- **Modern interface** : Responsive and accessible design
- **Intuitive navigation** : Smooth user experience

## Project Structure

```
fisheye-frontend/
├── assets/           # Images, icons and resources
├── css/             # CSS styles
├── data/            # Photographer JSON data
├── scripts/         # JavaScript code
│   ├── api/         # API management
│   ├── factories/   # Factories to create objects
│   ├── models/      # Data models
│   ├── templates/   # Display templates
│   └── utils/       # Utilities
├── index.html       # Homepage
└── photographer.html # Photographer page
```

## Installation and Usage

1. **Clone the project** (if applicable)
2. **Open the file** `index.html` in your browser
3. **Navigate** on the site to discover photographers

## Technologies Used

- **HTML5** : Semantic structure
- **CSS3** : Responsive styles and layout
- **JavaScript ES6+** : Business logic and interactions
- **WebP** : Optimized image format

## Compatibility

- ✅ Chrome
- ✅ Firefox
- ✅ Safari
- ✅ Edge

## Architecture

The application follows a modular architecture:
- **API** : Data management via fetch
- **Factories** : Creation of photographer and media objects
- **Templates** : Dynamic HTML generation
- **Utils** : Utility features (lightbox, forms)
