//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyCt0lM4rvYCcIW-zWHlMlurLQbrW-a_qmE",
      authDomain: "kwitter-c1ba4.firebaseapp.com",
      databaseURL: "https://kwitter-c1ba4-default-rtdb.firebaseio.com",
      projectId: "kwitter-c1ba4",
      storageBucket: "kwitter-c1ba4.appspot.com",
      messagingSenderId: "1033229262598",
      appId: "1:1033229262598:web:20d30fbdf1a68fb9e34887",
      measurementId: "G-TM695JFHW1"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome" + user_name + "!";


function add_room() {
      Room_names = document.getElementById("Room_names").value;
      firebase.database().ref("/").child(Room_names).update({
            purpose: "adding room name"
      });
      localStorage.setItem("Room_names", Room_names);

      window.location = "kwitter_page.html";


}













function getData() {
      firebase.database()
            .ref("/").on('value', function (snapshot) {
                  document.getElementById("output").innerHTML = "";
                  snapshot.forEach(function (childSnapshot) {
                        childKey = childSnapshot.key;
                        Room_names = childKey;
                        //Start code
                        console.log("Room Name-" + Room_names);
                        row = "<div class='room_name'id=" + Room_names + " onclick='redirectToRoomName(this.id)'>#" + Room_names + "</div>"
                        document.getElementById("output").innerHTML+=row;
                        
                        //End code



                  });
            });
}
getData();


function redirectToRoomName(name){
console.log(name);
localStorage.setItem("room_name",name);
window.location="kwitter_page.html";
}
