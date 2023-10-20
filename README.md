# Video Earnings Feature Backend 

## Overview

Follow these steps to set up and run the backend:

### Prerequisites

- Node.js and npm should be installed on your system.
- Obtain the necessary API credentials for the YouTube API.
- requirements
-  1. nodemailer
   2. express
   3. axios
   4. cors
   5. googleapis
   6. nodemon

### Installation

1. Clone this repository to your local machine:

   ```shell
   git clone https://github.com/MVKarthikReddy/AnchorsAssignmentBackend.git
   ```

2. Navigate to the project directory:

   ```shell
   cd backend
   ```

3. Install the project dependencies:

   ```shell
   npm install 
   ```

4. Configure your environment variables:

   Create a `.env` file in the root directory of your project and add the following variables:

   ```shell
   PORT=5000                 # Specify the port for the server
   YOUTUBE_API_KEY=YOUR_API_KEY # Your YouTube API key
   EMAIL_SERVICE=your-email-service
   EMAIL_USER=your-email-username
   EMAIL_PASS=your-email-password
   ```

5. Start the server:

   ```shell
   npm start (or) npm run dev
   ```

## API Endpoints

The following endpoints are available:

- **POST /api/videos**: Upload a video link and retrieve its details.

   Example request body:
   ```json
   {
     "videoLink": "https://www.youtube.com/watch?v=your-video-id"
   }
   ```

   Example response:
   ```json
   {
     "statistics" : {
        "videoId": "your-video-id",
        "likes": 50000,
        "comments": 10000,
        "views": 1000000,
     }
     "title": "Your Video Title",
     "subscriberCount": 1000000,
   }
   ```

## Pages and Email Notification

1. **Upload Video Link Page**: This page allows users to input the video link.

2. **Earnings Details Page**: Display the video details.

3. **Email Notification**: Implement a feature to send email notifications to users. You can use Nodemailer for this purpose. The email should contain the video details and earnings.
