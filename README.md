# TO DO Tasks
This project is a web application that allows users to CRUD their tasks
## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
  - [Create a Note](#create-a-note)
  - [Get All Notes](#get-all-notes)
  - [Get a Single Note](#get-note-by-id)
  - [Update a Note](#update-a-note)
  - [Delete a Note](#delete-a-note-by-id)
## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/username/project-name.git
2. Install dependencies and start project:
   ```bash
   npm i
   npm start
## Usage
- Navigate to `http://localhost:3000` to access the application.

## API Endpoints 
### Create a note
* Endpoint: `POST /createNote`
* Request body:
  ```bash
  {
  "name": "Sample Note",
  "description": "This is a sample note."
  }
* Description: Create a new note
* Response:
  ```bash
  {
    "message": "Note created successfully",
    "data": {
        "name": "Sample Note",
        "description": "This is a sample note.",
        "_id": "66d137399d2be935d6e2fb5f",
        "createdAt": "2024-08-30T03:06:33.930Z",
        "updatedAt": "2024-08-30T03:06:33.930Z",
        "__v": 0
    }
  }
### Get all notes
* Endpoint: `GET /getAll`
* Description: Get all notes
* Response:
  ```bash
  {
    "message": "Get all notes",
    "data": [
        {
            "_id": "66d1263ab349f1d37621aacd",
            "name": "TEST4",
            "description": "description4",
            "createdAt": "2024-08-30T01:49:58.689Z",
            "__v": 0
        },
        {
            "_id": "66d137399d2be935d6e2fb5f",
            "name": "ABCBCBCBCB",
            "description": "description11",
            "createdAt": "2024-08-30T03:06:33.930Z",
            "updatedAt": "2024-08-30T03:10:30.259Z",
            "__v": 0
        }
    ]
  }
### Get note by ID
* Endpoint: `GET /getsingleNote/:id`
* Parameters: `id`: The ID of the note to retrieve
* Description: Get note by ID
* Response:
  ```bash
  {
      "message": "FOUND",
      "data": {
          "_id": "66d1263ab349f1d37621aacd",
          "name": "TEST4",
          "description": "description4",
          "createdAt": "2024-08-30T01:49:58.689Z",
          "__v": 0
      }
  }
### Update a note
* Endpoint: `PATCH /updateNote/id`
* Parameters: `id`: The ID of the note to retrieve
* Request body:
  ```bash
  {
  "name": "UPDATE Sample Note",
  "description": "This is a UPDATE sample note."
  }
* Description: Update a note by id
* Response:
  ```bash
  {
      "message": "UPDATED",
      "data": {
          "_id": "66d137399d2be935d6e2fb5f",
          "name": "ABCBCBCBCB",
          "description": "description11",
          "createdAt": "2024-08-30T03:06:33.930Z",
          "updatedAt": "2024-08-30T03:09:34.744Z",
          "__v": 0
      }
  }
### Delete a note by ID
* Endpoint: `DELETE /deleteNote/:id`
* Parameters: `id`: The ID of the note to retrieve
* Description: Delete note
* Response:
  ```bash
  {
      "message": "DELETED",
      "data": {
          "_id": "66d137399d2be935d6e2fb5f",
          "name": "ABCBCBCBCB",
          "description": "description11",
          "createdAt": "2024-08-30T03:06:33.930Z",
          "updatedAt": "2024-08-30T03:10:30.259Z",
          "__v": 0
      }
  }
