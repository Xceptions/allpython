/**
 * 
 * All pages have handlers
 */

var state = {}

document.addEventListener('DOMContentLoaded', function() {
    // document.getElementById('about_handler').addEventListener('click', AboutHandler);
    document.getElementById('job_handler').addEventListener('click', JobHandler);
    // document.getElementById('competition_handler').addEventListener('click', CompetitionHandler);

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
                "<div>" + result["the_long"] + "</div>"+
                "</div>";
            });
    }
    
    async function JobHandler(){
        fetch('http://127.0.0.1:8000/viewjobs/')
            .then(function(response) {
                return response.json();
            })
            .then(function(result) {
                console.log(JSON.stringify(result));
                var html_job = "<div class='job_container'>";
                // html_job += "<div id='python_jobs_header'>Python Jobs</div>";
                for (let idx in result) {
                    var job_posting = result[idx];
                    var temp = "<div class='job_card'>";
                    temp += "<div class='company'>" + job_posting["company"] + "</div>";
                    temp += "<div class='job_header'>" + job_posting["job_header"] + "</div>";
                    temp += "<div class='job_body'>" + job_posting["job_body"].slice(0,50) + "...</div>";
                    // temp += "<div class='category'>" + job_posting["category"] + "</div>";
                    // temp += "<div class='amount'>" + job_posting["amount"] + "</div>";
                    temp += "<div class='job_location'>" + job_posting["location"] + "</div>";
                    temp += "<div class='job_contact_me'>" + job_posting["contact_me"] + "</div>";
                    // temp += "<div class='date'>" + job_posting["date"] + "</div>";
                    // temp += "<div class='applied'>" + job_posting["applied"] + "</div>";
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
                    temp += "<div>" + job_posting["title"] + "</div>";
                    temp += "<div>" + job_posting["platform"] + "</div>";
                    temp += "<div>" + job_posting["specialization"] + "</div>";
                    temp += "<div>" + job_posting["prize"] + "</div>";
                    temp += "<div>" + job_posting["start"] + "</div>";
                    temp += "<div>" + job_posting["end"] + "</div>";
                    temp += "<div>" + job_posting["url"] + "</div>";
                    temp += "<div>" + job_posting["applied"] + "</div>";
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
});

