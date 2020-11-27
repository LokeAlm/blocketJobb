loadEventlistener();

function loadEventlistener(){
    const form = document.querySelector('.form');
    form.addEventListener('submit', addJob);
}


function addJob(e){
    e.preventDefault();

    const title = document.querySelector('.job-input').value;
    const place = document.querySelector('.location').value;

    if(title != '' && place != ''){
        
        const job = new Job(title, place);

        UI.renderToDOM(job);
        UI.clearForm();
    }
}


class Job{

    constructor(title, place){
        this.title = title;
        this.place = place;
    }
}


class UI{

    static renderToDOM(jobObj){
        const list = document.querySelector('.list');

        let html = `
            <div class="card">
                <img src="">
                <h5>${jobObj.title}</h5>
                <p>${jobObj.place}</p>
            </div>
        `
        list.innerHTML += html;
    }

    static clearForm(){
        document.querySelector('.job-input').value = '';
        document.querySelector('.location').value = '';  
    }
}