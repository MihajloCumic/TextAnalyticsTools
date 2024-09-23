# TextAnalyticsTools

## Overview
This project is a web application that allows users to perform text analysis using the [Dandelion API](https://dandelion.eu/). The application supports several Dandelion tools such as:
- **Entity Extraction**: Identifies key entities (e.g., places, famous people, brands, events) in a given text.
- **Text Similarity**: Measures the semantic similarity between two texts.
- **Language Detection**: Detects the language of a given text.
- **Sentiment Analysis**: Analyzes the sentiment of a given text.

## Scenario
The application provides a graphical user interface (GUI) for interacting with the Dandelion API. The user is required to register on [Dandelion](https://dandelion.eu/) to obtain an API token. This token is necessary for making API requests and should be saved within the browser, so it doesn’t need to be re-entered each time the app is opened.

### Key Features
1. **Token Management**: 
   - A configuration page where users can input or update their Dandelion API token. 
   - The token is stored in the browser to persist between sessions.
   - All API requests use the stored token, and access to other features is restricted if no token is set.

2. **Entity Extraction**: 
   - A page where users can input text to extract entities. 
   - Supports optional parameters like `min_confidence` (via a slider between 0 and 1) and `include` (checkboxes for `image`, `abstract`, `categories`).
   - The results display the extracted entities and any additional information based on the `include` parameter.

3. **Text Similarity**:
   - A page where users can input two texts to compare their semantic similarity. 
   - The similarity score is displayed after submitting the input.

4. **Language Detection**:
   - A page where users can input a text to detect its language.
   - An optional `clean` parameter (checkbox) to remove links, email addresses, and hashtags before processing.
   - The result shows detected languages along with confidence levels.

5. **Sentiment Analysis**:
   - A page for performing sentiment analysis on a given text.
   - Supports the optional `lang` parameter (`en`, `it`, `auto`).
   - Displays the sentiment score (-1 to 1) and type (`positive`, `neutral`, `negative`). 
   - Sentiment type is color-coded: red for negative (-1), brown for neutral (0), and green for positive (1), with a gradient for values in between.

6. **History Tracking**:
   - Every API request is logged, displaying the request details (URL, date, and time).
   - The history is shown in a dedicated page and is cleared upon refreshing the app.

## Pages Structure
- **Token Configuration**: Allows the user to enter/update their API token.
- **Entity Extraction**: Input text, set parameters, and display extracted entities.
- **Text Similarity**: Compare the similarity between two texts.
- **Language Detection**: Detect the language of the input text.
- **Sentiment Analysis**: Perform sentiment analysis with optional language specification.
- **History**: View the history of all API requests made during the current session.

## Requirements
- Register at [Dandelion](https://dandelion.eu/) to obtain the API token.
- Store the token in the browser to avoid re-entry for each request.
- Ensure that token management and API request tracking are implemented correctly.



This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.6.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
