const namePara = document.getElementById('info-primary');
const restPara = document.getElementById('info-secondary');

alert("Help me!");

fetch('website/static/dswg.json')
    .then(res => res.json())
    .then(data => {
        for (let i = 0; i<data.Member.length; i++){
            let name = data.Member[i].Name;
            let position = data.Member[i].Position;
            let department = data.Member[i].Department;
            let campus = data.Member[i].Campus;
                document.getElementById('info-primary').innerHTML += `${name}`;
                document.getElementById('info-secondary').innerHTML += `${position}, ${department}, ${campus}`;
        }
    })
    