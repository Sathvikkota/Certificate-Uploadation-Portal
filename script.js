function uploadFile() {
    var studentID = document.getElementById('studentID').value;
    var studentName = document.getElementById('studentName').value;
    var studentEmail = document.getElementById('studentEmail').value;
    var program = document.getElementById('program').value;
    var year = document.getElementById('year').value;
    var certificationName = document.getElementById('certificationName').value;
    var vendorName = document.getElementById('vendorName').value;
    var certificationURL = document.getElementById('certificationURL').value;
    var fileInput = document.getElementById('pdfFile');
    var file = fileInput.files[0];

    var reader = new FileReader();
    reader.onload = function(event) {
        var fileData = event.target.result;

        // Prepare data to be sent to Lambda function
        var params = {
            studentID: studentID,
            studentName: studentName,
            studentEmail: studentEmail,
            program: program,
            year: year,
            certificationName: certificationName,
            vendorName: vendorName,
            certificationURL: certificationURL,
            fileName: file.name,
            fileData: fileData
        };

        // Call the Lambda function to store data in DynamoDB and upload PDF to S3
        invokeLambdaFunction(params);
    };
    reader.readAsDataURL(file);
}

function invokeLambdaFunction(params) {
    // Replace 'YOUR_API_GATEWAY_URL' with the actual URL of your deployed API Gateway
    var apiGatewayUrl = 'https://2qnv4a1etd.execute-api.us-east-1.amazonaws.com/prod';

    fetch(apiGatewayUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(params),
    })
    .then(response => response.json())
    .then(data => {
        console.log("Data uploaded successfully. Response: ", data);
        document.getElementById('message').innerHTML = "Data uploaded successfully!";
    })
    .catch((error) => {
        console.error("Error uploading data: ", error);
        document.getElementById('message').innerHTML = "Error uploading data!";
    });
}
