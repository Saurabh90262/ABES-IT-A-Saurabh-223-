const http = require('http');
fs = require('fs');
const home = fs.readFileSync('abes.html');


const server = http.createServer((req,res)=>{
  res.statusCode=200;
  res.setHeader("Content-Type", "text/html");
  res.write(
      `<html>
        <head>
          <title>Flipkart Shopping</title>
         <style>
        body {
            font-family: Arial, sans-serif;
            background: #c4e7ff;
            margin: 0;
            padding: 40px;
        }

        .card-container {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
            gap: 25px;
        }

        .card {
            background: #fff;
            border-radius: 12px;
            overflow: hidden;
            box-shadow: 0 4px 10px rgba(0,0,0,0.2);
            transition: 0.3s;
            text-align: center;
        }

        .card:hover {
            transform: translateY(-8px);
            box-shadow: 0 8px 20px rgba(0,0,0,0.3);
        }

        .card img {
            width: 100%;
            height: 180px;
            object-fit: cover;
        }

        .card h3 {
            padding: 15px;
            margin: 0;
            color: #333;
        }

        .card a {
            text-decoration: none;
            color: inherit;
            display: block;
        }
    </style>
        </head>
        <body>
          <h1>Welcome to Flipkart</h1>
          <h3>Browse different Sections</h3>
        <div class="card-container">

    <!-- Fashion -->
    <div class="card">
        <a href="https://www.flipkart.com/aw-men-ub-at-store?param=74893&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InRpdGxlIjp7Im11bHRpVmFsdWVkQXR0cmlidXRlIjp7ImtleSI6InRpdGxlIiwiaW5mZXJlbmNlVHlwZSI6IlRJVExFIiwidmFsdWVzIjpbIkZhc2hpb24iXSwidmFsdWVUeXBlIjoiTVVMVElfVkFMVUVEIn19fX19&ov_redirect=true&pageUID=1771225180541" target="_blank">
            <img src="https://static.fibre2fashion.com//articleresources/images/74/7396/SAdobeStock_867375684_Small.jpg" alt="Fashion">
            <h3>Fashion</h3>
        </a>
    </div>

    <!-- Appliances -->
    <div class="card">
        <a href="https://www.flipkart.com/tvs-and-appliances-new-clp-store?param=534&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InRpdGxlIjp7Im11bHRpVmFsdWVkQXR0cmlidXRlIjp7ImtleSI6InRpdGxlIiwiaW5mZXJlbmNlVHlwZSI6IlRJVExFIiwidmFsdWVzIjpbIkFwcGxpYW5jZXMiXSwidmFsdWVUeXBlIjoiTVVMVElfVkFMVUVEIn19fX19&ov_redirect=true&pageUID=1771225255646" target="_blank">
            <img src="https://img.etimg.com/thumb/width-1200,height-900,imgsize-295890,resizemode-75,msid-110870361/industry/cons-products/durables/havells-india-partners-with-jumbo-group-for-kitchen-appliances-in-uae.jpg" alt="Appliances">
            <h3>Appliances</h3>
        </a>
    </div>

    <!-- Grocery -->
    <div class="card">
        <a href="https://www.flipkart.com/grocery-supermart-store?marketplace=GROCERY&param=98765476&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InRpdGxlIjp7Im11bHRpVmFsdWVkQXR0cmlidXRlIjp7ImtleSI6InRpdGxlIiwiaW5mZXJlbmNlVHlwZSI6IlRJVExFIiwidmFsdWVzIjpbIkdyb2NlcnkiXSwidmFsdWVUeXBlIjoiTVVMVElfVkFMVUVEIn19fX19" target="_blank">
            <img src="https://www.foodandwine.com/thmb/Xl9Rxl5Aq8wWQSO-1g1_W05YDjY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Whats-Really-Going-on-With-Food-Prices-FT-BLOG0324-02-b2a25858f5b54e4190a0bdd96e2e0974.jpg" alt="Grocery">
            <h3>Grocery Store</h3>
        </a>
    </div>

    <!-- Beauty -->
    <div class="card">
        <a href="https://www.flipkart.com/bpc-bau-new-at-store?ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InRpdGxlIjp7Im11bHRpVmFsdWVkQXR0cmlidXRlIjp7ImtleSI6InRpdGxlIiwiaW5mZXJlbmNlVHlwZSI6IlRJVExFIiwidmFsdWVzIjpbIkJlYXV0eSJdLCJ2YWx1ZVR5cGUiOiJNVUxUSV9WQUxVRUQifX19fX0%3D" target="_blank">
            <img src="https://cdn.britannica.com/35/222035-050-C68AD682/makeup-cosmetics.jpg" alt="Beauty">
            <h3>Beauty</h3>
        </a>
    </div>

</div>

          

        </body>
      </html>`
    );
    res.end();
})



server.listen(5000, () => {
  console.log("✅ Server running on http://localhost:5000");
});
