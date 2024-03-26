# Certification Uploadation Portal

This project is a Certification Uploadation Portal built using HTML, JavaScript, and AWS services including IAM, S3, DynamoDB, API Gateway, and Lambda.
The portal allows users to upload their certification files and store associated details in DynamoDB. The file is stored in an S3 bucket, and its location is recorded in DynamoDB for easy retrieval.

## Features

- **User-friendly Interface:** Simple and intuitive web interface for users to upload their certification files.
- **File Upload:** Users can upload their certification files directly through the portal.
- **Data Storage:** User details and file locations are stored in DynamoDB for efficient retrieval.
- **Reliability:** Utilizes AWS infrastructure for high availability and reliability.

## Setup

1. **AWS Account Setup:** Create an AWS account and configure IAM roles with appropriate permissions for S3, DynamoDB, API Gateway, and Lambda.
2. **S3 Bucket Creation:** Create an S3 bucket to store certification files uploaded by users.
3. **DynamoDB Table Creation:** Set up a DynamoDB table to store user details and file locations.
4. **Lambda Function Deployment:** Deploy Lambda functions for handling file uploads and database operations.
5. **API Gateway Configuration:** Configure API Gateway to expose endpoints for uploading files and storing data.
6. **Frontend Deployment:** Host the HTML and JavaScript files on a web server or AWS S3 for user interaction.

## Usage

2. **File Upload:** After logging in, users can navigate to the upload section and select the certification file they want to upload.
3. **Data Storage:** Upon successful file upload, the portal stores user details (e.g., username, timestamp) and file location in DynamoDB.

## Future Enhancements

- **Email Notifications:** Implement email notifications for users upon successful file upload or if any issues occur during the process.
- **File Validation:** Add validation checks to ensure uploaded files meet specific criteria (e.g., file type, size).
