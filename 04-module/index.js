let http = require('http')
let fs = require('fs') 
            
http.createServer((req,res)=>{    
    fs.readFile('index.html', function(err, data) {
        res.write(data);
        res.end();
      });
}).listen(8000)   