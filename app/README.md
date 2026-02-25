# Daily Motivation Dashboard 🌟

A simple, interactive React application that fetches and displays inspirational quotes to keep your motivation high. Users can request new quotes dynamically and curate a personal list of their favorite quotes, which persists across browser sessions using local storage.

## Features

- **Live Data Fetching**: Asynchronously fetches random quotes from an external JSON API.
- **Dynamic State Management**: Utilizes React's `useState` hook to handle active quotes, author names, loading states, and the user's liked quote collection.
- **Persistent Storage**: Employs the `useEffect` hook combined with browser `localStorage` to save liked quotes, ensuring they aren't lost when the page refreshes.
- **Interactive UI**:
  - **Loading States**: Displays user-friendly feedback while waiting for API responses.
  - **Like/Unlike Functionality**: Allows users to toggle their "Liked" status for quotes. Calculates derived state dynamically to automatically swap the button from "Like ❤️" to "Unlike 💔" if a quote is already saved.
- **List Rendering**: Beautifully maps over the collection of liked quotes to render a dynamic list, demonstrating React's key-based list rendering.
- **Modern React Architecture**: Built entirely with React Functional Components and standard React hooks.

## Technologies Used

- **React.js**: Frontend UI library (Bootstrapped with Create React App).
- **JavaScript (ES6+)**: Core logic including `async/await` and array methods (`.map`, `.filter`, `.some`).
- **CSS3**: Custom styling for a clean, card-based interface.
- **DummyJSON Quotes API**: RESTful API used for fetching quote data.

## How It Works (Technical Overview)

1. **Initialization**: On component mount, an empty dependency array in `useEffect` triggers the initial API call (`fetchQuote()`) to display the first quote.
2. **State Updates**: When the API returns data, `setQuote` and `setAuthor` update the UI. During this process, an `isLoading` flag prevents the user from spamming the fetch button.
3. **Like functionality**: When the "Like" button is clicked, the `handleLikeToggle` function checks if the quote exists in the array. 
   - If it does, it utilizes `.filter()` to remove it. 
   - If it doesn't, it uses the spread operator (`...`) to append the new quote.
4. **Local Storage Synchronization**: A second `useEffect` listens for any changes to the `likedQuotes` array and immediately writes the changes to `localStorage` using `JSON.stringify()`.

## Getting Started

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed on your machine.

### Installation

1. Clone or download this repository.
2. Open your terminal and navigate to the project folder (`app` directory):
   ```bash
   cd app
