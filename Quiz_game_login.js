function Adduser() {
    player1name=document.getElementById("player-1-name").value;
    player2name=document.getElementById("player-2-name").value;
    localStorage.setItem("player-1-name",player1name);
    localStorage.setItem("player-2-name",player2name);
    window.location="quiz_game_page.html";
    
}