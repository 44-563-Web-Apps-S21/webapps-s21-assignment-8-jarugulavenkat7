const http = require('http')    //Pull in a useful node package
                                
const hostname = process.env.hostname || '127.0.0.1'    //get our ip address from the environment
const port = process.env.port || 3001               //and the port

const server =
  http.createServer(            //Creates the response loop
    (req,res)=> {               //Anonymous function to handle the request
      res.statusCode = 200      //code for OK
      res.setHeader('Content-Type', 'text/html') //Set the mime type HTML
const fortuneStrings=["You will go to a party soon.",
                "Someone will call you today.",
                "You will be rich.",
                "Good fortune will be yours.",
                "You will have many friends.",
                "You will have very good luck today."
            ];
            var randomIndex=Math.floor(Math.random()*6);
            res.write(`${fortuneStrings[randomIndex]}`)
            res.end()
      //Close the response
    }                           
)

server.listen(port, hostname, () => {   //Start the server
  console.log(`Server running at http://${hostname}:${port}/`)  //Log the request
})