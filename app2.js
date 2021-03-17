const http = require('http')    //Pull in a useful node package
                                
const hostname = process.env.hostname || '127.0.0.1'    //get our ip address from the environment
const port = process.env.port || 3001               //and the port

const server =
  http.createServer(            //Creates the response loop
    (req,res)=> {               //Anonymous function to handle the request
      res.statusCode = 200      //code for OK
      res.setHeader('Content-Type', 'text/html') //Set the mime type HTML

      res.write('<html> <head><style>table { margin-top:30px;margin-left:50px; border: solid 4px rgb(105, 26, 26); }th {background-color: rgb(76, 143, 206);border: solid 1px ;text-align: center;font-size: larger;padding: 15px;}td{border: solid 1px ;text-align: center;font-size: medium;padding: 15px;}tr:nth-child(even){background-color: #ddd1d1;}</style> <title> Table </title> </head>')
      res.write('<body>')
      res.write('<table>')
      res.write('<tr><th> Location </th> <th> Number of hours that a<br> visitor should spend </th><th> Amount of money someone<br> should expect to pay </th></tr>')
      res.write('<tr><td> Ooty </td><td> 48hrs </td><td> $500 </td></tr>')
      res.write('<tr><td> Lonavla </td><td> 10hrs </td><td> $150 </td></tr>')
      res.write('<tr><td> Lavasa </td><td> 5hrs </td><td> $100 </td> </tr>')
      res.write('<tr><td> Alibag Beach </td><td> 8hrs </td><td> $300 </td></tr>')
      res.write('<tr><td> Ellora Caves </td><td> 4hrs </td><td> $200 </td> </tr>')
      res.write(' </table>')  
      res.end('</body></html>')
      //Close the response
    }                           
)

server.listen(port, hostname, () => {   //Start the server
  console.log(`Server running at http://${hostname}:${port}/`)  //Log the request
})