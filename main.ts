console.log("test44");
//https://ea1.aconex.com/api/projects/1879048400/register?search_query=trackingid:271341877549075211&return_fields=current,trackingid,versionnumber,registered";
const link = "https://ea1.aconex.com/api/projects/1879048400/register/schema?search_query=trackingid:271341877549075211&return_fields=current,trackingid,versionnumber,registered";
const hdr = new Headers();
export{}
hdr.set("Authorization", "Basic " + "cG9sZWFyeTpBdXRoM250MWM=");
fetch(link, {
  headers: hdr
})
  .then(function(resp){
    return resp.text();
  })
  .then(function(data){
    //console.log("Testing here" + data);
    console.log("JSON Data = " +JSON.stringify(data));
    
  })
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