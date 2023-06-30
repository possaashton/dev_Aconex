// Define the API endpoint URL
const apiUrl = 'https://api.example.com';

// Define the function to fetch data from the API
async function fetchDataFromAPI() {
  try {
    // Make a GET request to the API endpoint
    const response = await fetch(apiUrl);
    
    // Check if the response is successful
    if (!response.ok) {
      throw new Error('Request failed');
    }
    
    // Parse the response as JSON
    const data = await response.json();
    
    // Process the data
    console.log('API response:', data);
    
    // Return the data or perform additional operations
    return data;
  } catch (error) {
    console.error('Error:', error);
  }
}

// Call the function to fetch data from the API
fetchDataFromAPI();
