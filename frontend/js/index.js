/**
 * 
 * All pages have handlers
 */

var state = {}

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('about_handler').addEventListener('click', AboutHandler);
    document.getElementById('job_handler').addEventListener('click', JobHandler);
    document.getElementById('competition_handler').addEventListener('click', CompetitionHandler);
});

async function AboutHandler(){
    fetch('http://127.0.0.1:8000/about/')
        .then(function(response) {
            return response.json();
        })
        .then(function(result) {
            // console.log(JSON.stringify(result));
            document.getElementById('content').innerHTML = 
            "<div>"+
            "<h2>" + result["the_short"] + "</h2>"+
            "<p>" + result["the_long"] + "</p>"+
            "</div>";
        });
}

async function JobHandler(){
    fetch('http://127.0.0.1:8000/viewjobs/')
        .then(function(response) {
            return response.json();
        })
        .then(function(result) {
            // console.log(JSON.stringify(result));
            var html_job = "<div class='container_slim'>";
            for (let idx in result) {
                var job_posting = result[idx];
                var temp = "<div class='job_card'>";
                temp += "<p class='job_header'>" + job_posting["job_header"] + "</p>";
                temp += "<p class='job_body'>" + job_posting["job_body"] + "</p>";
                temp += "<p class='company'>" + job_posting["company"] + "</p>";
                temp += "<p class='category'>" + job_posting["category"] + "</p>";
                temp += "<p class='amount'>" + job_posting["amount"] + "</p>";
                temp += "<p class='location'>" + job_posting["location"] + "</p>";
                temp += "<p class='contact_me'>" + job_posting["contact_me"] + "</p>";
                temp += "<p class='date'>" + job_posting["date"] + "</p>";
                temp += "<p class='applied'>" + job_posting["applied"] + "</p>";
                temp += "</div>";
                html_job += temp;
            };
            document.getElementById('content').innerHTML = html_job;
        });
}

async function CompetitionHandler(){
    fetch('http://127.0.0.1:8000/viewcompetitions/')
        .then(function(response) {
            return response.json();
        })
        .then(function(result) {
            // console.log(JSON.stringify(result));
            var html_comp = "<div>";
            for (let idx in result) {
                var job_posting = result[idx];
                var temp = "<div>";
                temp += "<p>" + job_posting["title"] + "</p>";
                temp += "<p>" + job_posting["platform"] + "</p>";
                temp += "<p>" + job_posting["specialization"] + "</p>";
                temp += "<p>" + job_posting["prize"] + "</p>";
                temp += "<p>" + job_posting["start"] + "</p>";
                temp += "<p>" + job_posting["end"] + "</p>";
                temp += "<p>" + job_posting["url"] + "</p>";
                temp += "<p>" + job_posting["applied"] + "</p>";
                temp += "</div>";
                html_comp += temp;
            };
            document.getElementById('content').innerHTML = html_comp;
        });
}

// async function $get(url) {
//     fetch('http://example.com/movies.json')
//         .then(function(response) {
//             return response.json();
//         })
//         .then(function(myJson) {
//             console.log(JSON.stringify(myJson));
//         });
// }

// // Example POST method implementation:
// async function $post(url = "", data = {}) {
//     const response = await fetch(url, {
//       method: "POST",
//       mode: "cors", // no-cors, *cors, same-origin
//       cache: "no-cache",
//       credentials: "same-origin",
//       headers: {
//         "Content-Type": "application/json",
//         // 'Content-Type': 'application/x-www-form-urlencoded',
//       },
//       redirect: "follow",
//       referrerPolicy: "no-referrer",
//       body: JSON.stringify(data),
//     });
//     return response.json();
//   }
  
// postData("https://example.com/answer", { answer: 42 }).then((data) => {
//     console.log(data); // JSON data parsed by `data.json()` call
// });

// $get("http://127.0.0.1:8000/about/").then((data) => {
//     console.log(data); // JSON data parsed by `data.json()` call
// });