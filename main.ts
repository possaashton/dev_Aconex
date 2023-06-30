import axios from './lib/axios/axios';
async function connectToAPI(apiId: string): Promise<void> {
    const url = `https://ea1.aconex.com/html/includes/js/api.js?id=${apiId}`;
  
    try {
      const response = await axios.get(url);
      console.log(response.data);
      // Handle the response data as needed
    } catch (error) {
      console.error('An error occurred while connecting to the API:', error);
      // Handle the error appropriately
    }
  }
  const apiId = '1687445908773';
  connectToAPI(apiId);
    
