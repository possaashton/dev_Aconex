"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
console.log("test44");
var axios = require('axios');
var parseString = require('xml2js').parseString;
//https://ea1.aconex.com/api/projects/1879048400/register?search_query=trackingid:271341877549075211&return_fields=current,trackingid,versionnumber,registered";
//https://ea1.aconex.com/api/projects/1879048400/register/schema
var link = "https://ea1.aconex.com/api/projects/1879048400/register?search_query=trackingid:271341877549075211&return_fields=current,trackingid,versionnumber";
function parseXml(xmlData) {
    parseString(xmlData, function (error, result) {
        if (error) {
            console.log("Error occured while parsing");
        }
        console.log(JSON.stringify(result));
    });
}
function getQuotes() {
    return __awaiter(this, void 0, void 0, function () {
        var url, response, xmlData, result, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    url = link;
                    return [4 /*yield*/, axios.get(url, {
                            headers: {
                                Accept: 'application/xml',
                                Authorization: 'Basic ' + 'cG9sZWFyeTpBdXRoM250MWM=',
                            },
                            responseType: 'text', // Set the response type to plain text
                        })];
                case 1:
                    response = _a.sent();
                    xmlData = response.data;
                    return [4 /*yield*/, parseXml(xmlData)];
                case 2:
                    result = _a.sent();
                    console.log(xmlData.length);
                    return [3 /*break*/, 4];
                case 3:
                    error_1 = _a.sent();
                    console.error(error_1);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
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
