/**
 * 
 * All pages have handlers
 */

var state = {}

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('about_handler').addEventListener('click', AboutHandler);
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
                var temp = '<div class="relative flex flex-col jus items-center justify-center overflow-hidden bg-gray-50 p-2 "><div class="bg-white  shadow-xl shadow-gray-100 w-full max-w-4xl flex flex-col sm:flex-row gap-3 sm:items-center  justify-between px-5 py-4 rounded-md"><div>';
                temp += '<span class="text-purple-800 text-sm">' + job_posting["company"] + '</span>';
                temp += '<h3 class="font-bold text-gray-500 mt-px">' + job_posting["job_header"] + '</h3><div class="flex items-center gap-3 mt-2">';
                temp += '<span class="bg-purple-100 text-purple-700 rounded-full px-3 py-1 text-sm">' + job_posting["category"] + '</span>';
                temp += '<span class="text-slate-600 text-sm flex gap-1 items-center"> <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path stroke-linecap="round" stroke-linejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />';
                temp += '</svg>' + job_posting["location"] + '</span></div></div><div>';
                temp += '<button class="bg-blue-700 text-white font-medium px-4 py-2 rounded-md flex gap-1 items-center"><a href="' + job_posting["contact_me"] + '"> Apply Now <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg></svg></a></button></div></div>';
                // temp += "<div class='job_contact_me'>" + job_posting["contact_me"] + "</div>";
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

