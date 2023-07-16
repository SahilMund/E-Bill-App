# Optical Character Recognition (OCR) for E-bills - React App

This application allows users to upload e-bill PDFs and then uses a mock API to perform Optical Character Recognition (OCR). This is a starter template for uploading the files and later can be used with actual APIs to perform OCR.

## Project Overview

The project is built using React and utilizes several libraries and components to achieve the desired functionality. The application includes the following features:

1. <b>Form for Uploading e-bill PDF Files: </b>Form for uploading e-bill PDF files
2. <b> Validation for PDF Files: </b> The upload functionality is equipped with validation to ensure that only PDF files can be selected and uploaded.
3. <b>Mock API for OCR: </b> After the file is uploaded, a mock API will be called to simulate the OCR process. This mock API utilizes setTimeout and Promise to mimic the asynchronous nature of real API calls.
4. <b>File Storage on Firebase:</b> Once the mock API call is resolved, the file will be stored in Firebase storage to be accessed and managed securely.
5. <b>Display Upload Status: </b>The application will display the upload status using a progress bar, providing visual feedback to users about the ongoing file upload process.
6. <b>Preview Using Framer Motion: </b> A preview of the uploaded PDF will be displayed to the user, and Framer Motion animations will be used to create an engaging and interactive experience.
7. <b>Error Handling:</b> The application is equipped with error handling mechanisms to show appropriate error messages in case of failed file uploads or other issues.

This web app aims to deliver a seamless user experience by leveraging React, Framer Motion for animations, Firebase for secure file storage, and a simulated mock API for OCR functionality.

## Library Used:-

```
React
Firebase
Framer Motion
Material Icons
```

## Getting Started :-
To run the application locally, follow these steps:

1. Clone this repository to your local machine (or) download the source code as a ZIP file.

```
git clone https://github.com/SahilMund/E-Bill-App.git
```

2. Open the project in your preferred code editor.

3. Install the dependencies by running the following command:

```
npm install
```

4. Start the development server with the following command:

```
npm start
```

5. Open your web browser and visit http://localhost:3000 to view the blog creation page.


