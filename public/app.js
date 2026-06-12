let editbtn = document.querySelectorAll('#Edit');
let deletebtn = document.querySelectorAll('#Delete');

editbtn.forEach((btn) => {
    btn.addEventListener('click', () => {
        alert('you are editing this message?');
    });
});

deletebtn.forEach((btn) => {
    btn.addEventListener('click', () => {
        alert('you are deleting this message?');
    });
});