function downloadReport(callback){
    console.log("Downloading Report.....");

    setTimeout(() => {
    console.log("Report downloaded");
    callback();
}, 3000);
}

function sendEmail(){
    console.log("Email sent to client");
}

// downloadReport(sendEmail);
downloadReport(()=>{
    sendEmail();
}
)