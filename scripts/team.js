let teamData =  [
  {
    Name: "Atul Upadhyay",
    Position: "Vice President",
    Image: "./assets/team/atul.jpeg",
    Facebook: "",
    Linkedin: ""
  },

  {
    Name: "Atul Upadhyay",
    Position: "sfsf President",
    Image: "./assets/team/atul.jpeg",
    Facebook: "",
    Linkedin: ""
  },

  {
    Name: "Atul Upadhyay",
    Position: "Vice TEST",
    Image: "./assets/team/atul.jpeg",
    Facebook: "",
    Linkedin: ""
  },
  {
    Name: "Atul Upadhyay",
    Position: "sfsf President",
    Image: "./assets/team/atul.jpeg",
    Facebook: "",
    Linkedin: ""
  },
  {
    Name: "Atul Upadhyay",
    Position: "sfsf President",
    Image: "./assets/team/atul.jpeg",
    Facebook: "",
    Linkedin: ""
  },
  {
    Name: "Atul Upadhyay",
    Position: "sfsf President",
    Image: "./assets/team/atul.jpeg",
    Facebook: "",
    Linkedin: ""
  },
  {
    Name: "Atul Upadhyay",
    Position: "sfsf President",
    Image: "./assets/team/atul.jpeg",
    Facebook: "",
    Linkedin: ""
  }

]
teamDiv = document.getElementsByClassName("teamImageDiv")[0]

for(var i=0;i<teamData.length;i++){


text = 

`
<div class="teamMember">
<div class="teamSocialHandle">
<img class="teamImage" src="${teamData[i].Image}" alt="">
<div class="teamSocialLinks">
  <a href="#"><img  class="facebook" src="./assets/facebook-logo.svg"/></a>
  <a href="#"><img  class="linkedin" src="./assets/linkedin-logo.svg"/></a>
</div>
</div>
<div class="teamDetails">
  <h5><b>${teamData[i].Name}</b></h5>
  <h5>${teamData[i].Position}</h5>
</div>
</div>
`




teamDiv.innerHTML = teamDiv.innerHTML + text


}