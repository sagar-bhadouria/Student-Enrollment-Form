// users data
class UserDetails {
  constructor(name, emailId, websiteURL, imageURL, gender, skills) {
    this.name = name;
    this.emailId = emailId;
    this.websiteURL = websiteURL;
    this.imageURL = imageURL;
    this.gender = gender;
    this.skills = skills;
  }
  //create usercard in DOM
  renderDetails() {
    const details = document.getElementById("UsersList");
    let newUser = document.createElement("div");
    newUser.className = "user-card";
    newUser.innerHTML = `
    <div id="user-description" class="user-description-card">
      <p class="text-wrap text-break">${this.name}</p>
      <p>${this.gender}</p>
      <p class="text-wrap text-break">${this.emailId}</p>
      <a
        href="${this.websiteURL}"
        target="_blank"
        rel="noopener noreferrer"
        >${this.websiteURL}</a
      >
      <p>${this.skills}</p>
    </div>
    <div id="user-image" class="user-image-card">
      <img
        src="${this.imageURL}"
        alt="${this.name}"
        onerror="this.src='./avtar.jpeg'"
      />
    </div>`;

    details.prepend(newUser);
    setTimeout(() => {
      const userStyle = document.querySelectorAll(".user-card");

      userStyle.forEach((element) => {
        element.style.opacity = 1;
      });
    }, 1000);
  }
}
