/**
 * 
 * All pages have handlers
 */

var state = {}

document.addEventListener('DOMContentLoaded', function() {
    JobHandler(); // default, when the homepage loads
    
    document.getElementById('job_handler').addEventListener('click', JobHandler);
    document.getElementById('competition_handler').addEventListener('click', CompetitionHandler);
    document.getElementById('about_handler').addEventListener('click', AboutHandler);
    document.getElementById('learn_handler').addEventListener('click', LearnHandler);
    document.getElementById('subscribe_btn').addEventListener('click', SubscribeHandler);
    document.getElementById('contact_us_btn').addEventListener('click', ContactUsHandler);

    async function AboutHandler(){
        fetch('http://127.0.0.1:8000/about/')
            .then(function(response) {
                return response.json();
            })
            .then(function(result) {
                // console.log(JSON.stringify(result));
                var html_about = '<div class="mt-4 mx-auto max-w-screen-sm px-4 sm:px-6 py-24 bg-white text-gray-700" style="border-radius: 2rem;"><div class="text-center">';
                var temp = '<p class="text-4xl tracking-tight leading-10 font-normal sm:text-5xl sm:leading-none md:text-6xl">';
                temp += result["the_short"];
                temp += '</p>';
                temp += '<br><hr><br>';
                temp += '</div><p class="mt-3 max-w-md mx-auto text-base sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">';
                temp += result["the_long"];
                temp += '</p></div></div>';
                html_about += temp;
                document.getElementById('content').innerHTML = html_about;
            });
    }

    async function JobHandler(){
        fetch('http://127.0.0.1:8000/viewjobs/')
            .then(function(response) {
                return response.json();
            })
            .then(function(result) {
                // console.log(JSON.stringify(result));
                var html_job = "<div class='job_container'>";
                for (let idx in result) {
                    var job_posting = result[idx];
                    var temp = '<div class="relative flex flex-col jus items-center justify-center overflow-hidden bg-gray-50 p-2 "><div class="bg-white  shadow-xl shadow-gray-100 w-full max-w-4xl flex flex-col sm:flex-row gap-3 sm:items-center  justify-between px-5 py-4 rounded-md"><div>';
                    temp += '<span class="text-purple-800 text-sm">' + job_posting["company"] + '</span>';
                    temp += '<h3 class="font-bold text-gray-500 mt-px">' + job_posting["job_header"] + '</h3><div class="flex items-center gap-3 mt-2">';
                    temp += '<span class="bg-purple-100 text-purple-700 rounded-full px-3 py-1 text-sm">' + job_posting["category"] + '</span>';
                    temp += '<span class="text-slate-600 text-sm flex gap-1 items-center"> <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path stroke-linecap="round" stroke-linejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />';
                    temp += '</svg>' + job_posting["location"] + '</span></div></div><div>';
                    temp += '<button class="bg-blue-700 text-white font-medium px-4 py-2 rounded-md flex gap-1 items-center"><a href="' + job_posting["contact_me"] + '"> Apply Now <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg></svg></a></button></div></div>';
                    temp += "</div>";
                    html_job += temp;
                };
                html_job += '</div>';
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
                var html_comp = "<div class='competition_container'>";
                for (let idx in result) {
                    var comp_posting = result[idx];
                    var temp = '<div class="relative flex flex-col jus items-center justify-center overflow-hidden bg-gray-50 p-2 "><div class="bg-white  shadow-xl shadow-gray-100 w-full max-w-4xl flex flex-col sm:flex-row gap-3 sm:items-center  justify-between px-5 py-4 rounded-md"><div>';
                    temp += '<span class="text-purple-800 text-sm">' + comp_posting["start"] + '</span>';
                    temp += '<h3 class="font-bold text-gray-500 mt-px">' + comp_posting["title"] + "  -  " + comp_posting["prize"] + '</h3><div class="flex items-center gap-3 mt-2">';
                    temp += '<span class="bg-purple-100 text-purple-700 rounded-full px-3 py-1 text-sm">' + comp_posting["specialization"] + '</span>';
                    temp += '<span class="text-slate-600 text-sm flex gap-1 items-center"> <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path stroke-linecap="round" stroke-linejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />';
                    temp += '</svg>' + comp_posting["platform"] + '</span></div></div><div>';
                    temp += '<button class="bg-blue-700 text-white font-medium px-4 py-2 rounded-md flex gap-1 items-center"><a href="' + comp_posting["url"] + '"> Go To Comp <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg></svg></a></button></div></div>';
                    temp += "</div>";
                    html_comp += temp;
                };
                html_comp += '</div>';
                document.getElementById('content').innerHTML = html_comp;
            });
        }

    async function LearnHandler(){
        fetch('http://127.0.0.1:8000/learn/')
            .then(function(response) {
                return response.json();
            })
            .then(function(result) {
                // console.log(JSON.stringify(result));
                var html_learn = "<div class='learn_container'>";
                // html_learn += "<div id='python_jobs_header'>Python Jobs</div>";
                for (let idx in result) {
                    var learn_posting = result[idx];
                    var temp = '<div class="mt-4 mx-auto max-w-screen-sm px-4 sm:px-6 py-24 bg-white text-gray-700" style="border-radius: 2rem;"><div class="text-center">';
                    temp += '<p class="text-4xl tracking-tight leading-10 font-normal sm:text-5xl sm:leading-none md:text-6xl">';
                    temp += learn_posting["title"];
                    temp += '</p>';
                    temp += '<br><hr><br>';
                    temp += '</div><p class="mt-3 max-w-md mx-auto text-base sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">';
                    var learn_posting_detail = JSON.parse(learn_posting["detail"])
                    var inner_temp = "<ul class='list-disc'>";
                    for (let jdx in learn_posting_detail) {
                        inner_temp += '<li><b>' + jdx + '</b>: ' + learn_posting_detail[jdx] + '</li><br>';
                    }
                    inner_temp += "</ul>";
                    // temp += learn_posting["detail"];
                    temp += inner_temp;
                    temp += '</p></div></div>';
                    temp += "</div>";
                    html_learn += temp;
                };
                html_learn += '</div>';
                document.getElementById('content').innerHTML = html_learn;
            });
        }

    async function SubscribeHandler(e){
        e.preventDefault();
        var userInput = document.getElementById('subscribe_id').value;
        console.log(userInput);
        fetch('http://127.0.0.1:8000/subscribe/', {
     
                method: "POST",
                body: JSON.stringify({
                    email: userInput
                }),
                headers: {
                    "Content-type": "application/json; charset=UTF-8"
                }
            })
            .then(function(response) {
                return response.json();
            })
            .then(function(result) {
                console.log(JSON.stringify(result));
                // document.getElementById('content').innerHTML = html_job;
            });
    }

    async function ContactUsHandler(e){
        e.preventDefault();
        var userEmail = document.getElementById('email_contactus').value;
        var userMessage = document.getElementById('message_contactus').value;
        fetch('http://127.0.0.1:8000/contactus/', {
     
                method: "POST",
                body: JSON.stringify({
                    email: userEmail,
                    message: userMessage
                }),
                headers: {
                    "Content-type": "application/json; charset=UTF-8"
                }
            })
            .then(function(response) {
                return response.json();
            })
            .then(function(result) {
                console.log(JSON.stringify(result));
            });
    }
    
});

