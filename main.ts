console.log("test44");

declare var require:any;
const axios = require('axios');
const parseString  = require('xml2js').parseString;
//https://ea1.aconex.com/api/projects/1879048400/register?search_query=trackingid:271341877549075211&return_fields=current,trackingid,versionnumber,registered";
//https://ea1.aconex.com/api/projects/1879048400/register/schema
const link = "https://ea1.aconex.com/api/projects/1879048400/register?search_query=trackingid:271341877549075211&return_fields=current,trackingid,versionnumber";
export{}
function parseXml(xmlData: string){
 parseString(xmlData, function(error:any, result:any) {
  if(error){
    console.log("Error occured while parsing");
  }
  console.log(JSON.stringify(result));
  
 });
}
async function getQuotes(){
  try {
    const url = link; // Replace with your API endpoint

    const response = await axios.get(url, {
      headers: {
        Accept: 'application/xml', // Request XML response
        Authorization: 'Basic ' + 'cG9sZWFyeTpBdXRoM250MWM=',
      },
      responseType: 'text', // Set the response type to plain text
    });
    const xmlData = response.data;
    const result = await parseXml(xmlData);
    console.log(xmlData.length);
  
  } catch (error) {
    console.error(error);
  }
}

getQuotes();

console.log("Testing out ");







/*  .then(response => {
    if (response.ok) {
      //return response.json();
      console.log("Testing response "+ response.status);      
    } else {
      throw new Error("Error: " + response.status);
    }
  })
  .then(data => {
    // Handle the retrieved data
    console.log("Data coming"+data);
  })
  .catch(error => {
    console.log(error);
  });
*/
/*** basic get call without AXIOS
const hdr = new Headers();
var xmlData;



hdr.set("Authorization", "Basic " + "cG9sZWFyeTpBdXRoM250MWM=");

fetch(link, {
  headers: hdr
})
.then(function(resp){
  return resp.text();
})
.then(function(data){
  console.log("Testing here" + data.length);
  xmlData = data;
})
***/