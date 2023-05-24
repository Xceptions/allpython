/**
 * 
 * All pages have handlers
 */

var state = {}

function loader_spinner() {
    return '<br><div class="text-center" role="status"><svg aria-hidden="true" class="inline w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-purple-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/><path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/></svg><span class="sr-only">Loading...</span></div>';
}

function subscription_successful() {
    return '<br><div class="text-center p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400" role="alert"><span class="font-medium">Success!</span> You are now subscribed to receive alerts</div>';
}

function contactus_successful() {
    return '<br><div class="text-center p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400" role="alert"><span class="font-medium">Message received!</span> We will get back to you soon!</div>';
}

function goToPosting(post_link) {
    // used in the dynamically created buttons
    window.open(post_link);
}

document.addEventListener('DOMContentLoaded', function() {
    
    JobHandler(); // default, when the homepage loads
    
    document.getElementById('job_handler').addEventListener('click', JobHandler);
    document.getElementById('competition_handler').addEventListener('click', CompetitionHandler);
    document.getElementById('about_handler').addEventListener('click', AboutHandler);
    document.getElementById('learn_handler').addEventListener('click', LearnHandler);
    document.getElementById('subscribe_btn').addEventListener('click', SubscribeHandler);
    document.getElementById('contact_us_btn').addEventListener('click', ContactUsHandler);

    async function AboutHandler(){
        fetch('/about/')
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
        // start by showing a loader spinner
        document.getElementById('content').innerHTML = loader_spinner();

        // make request
        fetch('/viewjobs/')
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
                    temp += '<button onclick=goToPosting("' + job_posting["contact_me"] + '") class="bg-blue-700 text-white font-medium px-4 py-2 rounded-md flex gap-1 items-center">Go to job <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg></svg></button></div></div>';
                    temp += "</div>";
                    html_job += temp;
                };
                html_job += '</div>';
                document.getElementById('content').innerHTML = html_job;
            });
    }

    async function CompetitionHandler(){
        document.getElementById('content').innerHTML = loader_spinner();

        fetch('/viewcompetitions/')
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
                    temp += '<button onclick=goToPosting("' + comp_posting["url"] + '") class="bg-blue-700 text-white font-medium px-4 py-2 rounded-md flex gap-1 items-center"> Go to comp <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg></svg></button></div></div>';
                    temp += "</div>";
                    html_comp += temp;
                };
                html_comp += '</div>';
                document.getElementById('content').innerHTML = html_comp;
            });
        }

    async function LearnHandler(){
        document.getElementById('content').innerHTML = loader_spinner();
        
        fetch('/learn/')
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
        let subscription_status = document.getElementById('subscription_status');
        subscription_status.innerHTML = loader_spinner();

        function getCookie(name) {
            var cookieValue = null;
            if (document.cookie && document.cookie !== '') {
                var cookies = document.cookie.split(';');
                for (var i = 0; i < cookies.length; i++) {
                    var cookie = cookies[i].trim();
                    // Does this cookie string begin with the name we want?
                    if (cookie.substring(0, name.length + 1) === (name + '=')) {
                        cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                        break;
                    }
                }
            }
            return cookieValue;
        }

        fetch('/subscribe/', {
     
                method: "POST",
                body: JSON.stringify({
                    email: userInput
                }),
                headers: {
                    "Content-type": "application/json; charset=UTF-8",
                    "X-CSRFToken": getCookie("csrftoken")
                }
            })
            .then(function(response) {
                return response.json();
            })
            .then(function(result) {
                // console.log(JSON.stringify(result));
                subscription_status.innerHTML = subscription_successful(); // stop showing the loader
                setTimeout(function(){subscription_status.innerHTML = '';}, 4000);
            });
    }

    async function ContactUsHandler(e){
        e.preventDefault();
        var userEmail = document.getElementById('email_contactus').value;
        var userMessage = document.getElementById('message_contactus').value;
        let contactus_status = document.getElementById('contactus_status');
        contactus_status.innerHTML = loader_spinner();

        function getCookie(name) {
            var cookieValue = null;
            if (document.cookie && document.cookie !== '') {
                var cookies = document.cookie.split(';');
                for (var i = 0; i < cookies.length; i++) {
                    var cookie = cookies[i].trim();
                    // Does this cookie string begin with the name we want?
                    if (cookie.substring(0, name.length + 1) === (name + '=')) {
                        cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                        break;
                    }
                }
            }
            return cookieValue;
        }

        fetch('/contactus/', {
     
                method: "POST",
                body: JSON.stringify({
                    email: userEmail,
                    message: userMessage
                }),
                headers: {
                    "Content-type": "application/json; charset=UTF-8",
                    "X-CSRFToken": getCookie("csrftoken")
                }
            })
            .then(function(response) {
                return response.json();
            })
            .then(function(result) {
                contactus_status.innerHTML = contactus_successful(); // stop showing the loader
                setTimeout(function(){contactus_status.innerHTML = '';}, 4000);
            });
    }
    
});

