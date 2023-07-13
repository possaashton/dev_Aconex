import { AsyncResource } from "async_hooks";
import { log } from "console";


console.log("test44");

declare var require:any;
const axios = require('axios');
const fs = require('fs');
const parseString  = require('xml2js').parseString;
//https://ea1.aconex.com/api/projects/1879048400/register?search_query=trackingid:271341877549075211&return_fields=current,trackingid,versionnumber,registered";
//https://ea1.aconex.com/api/projects/1879048400/register/schema
const link = "https://ea1.aconex.com/api/projects/1879048422/register?search_query=trackingid:271341877549245596&return_fields=current,trackingid,versionnumber,docno,doctype";
export{}

function parseXml(xmlData: string){
 parseString(xmlData, function(error:any, result:any) {
  if(error){
    console.log("Error occured while parsing the XML file");
  }
  //console.log(JSON.stringify(result));   
  postDatatoAPI();
 });
}

async function postDatatoAPI(){
  const xmlString: string = `<?xml version="1.0" encoding="utf-8" standalone="yes"?>
  <Document>
  <DocumentNumber>161195</DocumentNumber>
  <DocumentType>Report</DocumentType>
  <Revision>1</Revision>
  <Title>Test Document</Title>
  <Current>true</Current>
  <Discipline>Computer Engg</Discipline>
  <VersionNumber>1</VersionNumber>
  <HasFile>false</HasFile>
  </Document>`;
  const post_url = 'https://ea1.aconex.com/api/projects/1879048422/register';
  // Read the file as Base64
  const fileData = fs.readFileSync('C:/Users/Ashton Possa/VisualStudioCode/gh-repos/dev_Aconex/file.pdf', 'base64');
  const boundary = '-------------------------' + Date.now().toString(16);

// Set the headers and boundary
  const headers = {
  'Content-Type': 'application/xml',
  }
  // Build the multipart/form-data body
  let  data = '';
  data += `--${boundary}\r\n`;
  data += `Content-Disposition: form-data; name="xmlString"\r\n\r\n`;
  data += xmlString;
  data += `\r\n--${boundary}\r\n`;
  data += `Content-Disposition: form-data; name="file"; filename="file.pdf"\r\n`;
  data += 'Content-Type: application/pdf\r\n\r\n';
  data += fileData;
  data += `\r\n--${boundary}--`;
  //console.log(data);
  
  try {
      const response = await axios.post(post_url, xmlString, {
      headers: {
        Authorization: 'Basic ' + 'cG9sZWFyeTpBdXRoM250MWM=',
        headers,
      },
      responseType: 'text', // Set the response type to plain text
    });
    if(response.status == 200){
      console.log("In success" + response.status);  
    }
    else{
    console.log("Error code while posting Data111 : " + response.status);
    
    }
    
  } catch (error) {
    console.error("Error code while posting Data222 : " +error);
  }

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
    if(response.status == 200){
      const xmlData = response.data;
      console.log(xmlData);
      const result = await parseXml(xmlData);
      
    }
    else{
    console.log("Error code while Fetching Data : " + response.status);
    
    }
    
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