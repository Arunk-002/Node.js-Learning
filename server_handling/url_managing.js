const http = require('http');
const fs = require('fs');
const url  = require('url');// This method is used to manage and perform operation on the query parameters. This also provides more mehtods 
// to operate on the url received.

const myServer = http.createServer((req,res)=>{
    console.log('requested');
    if (req.url==='/favicon.ico') {
        return res.end() //this bit of code ignores the default  refresh of browser
    }
    fs.appendFile('url_log.txt',`${Date.now()},${req.url}: request made \n`,(err)=>{
        const myurl= url.parse(req.url,true)// in this the 1 parameter is the path to be parsed and the second boolean is given so that 
        // it returns the query parameters as objects.
        console.log(myurl);
        switch (myurl.pathname) {// this now fosuses only on the path name and hence doesnot go to default when query parameters are given.
            case '/':
                res.end('Home Page'); 
                break;
            case '/about':
                const username =myurl.query.name// extracts the 'name' parameter from the query when inside the /about path.          
                res.end(`Hi Iam ${username}`); 
                break;
            case '/search':
                const search= myurl.query.search_p// extracts the values entered to search in the /search path.
                res.end(`Your results for ${search} are :`)
                break;
            default:
                res.end('404'); 
                break;
        }
    })
})
myServer.listen(8000,(err)=>{console.log('server Started !');
})