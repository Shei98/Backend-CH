const socket = io.connect();
socket.on('messages', data =>{
    console.log(data);
})
const render = (data) => {
  const html = data.map((element, index) => {
    return `<div>
    <strong>${element.author} </strong>
    <em>${element.text}</em>
    </div> `;
  }).join(" ");
  document.getElementById("messages").innerHTML = html;
};

function addMessage(e) {
    const mensaje = {
        author: document.getElementById('username').value,
        text: document.getElementById('texto').value
    };
    socket.emit('new-message', mensaje);
    document.getElementById('username').value = ''
    document.getElementById('texto').value = ''
    return false;
}


socket.on("messages", function(data) {render(data)});