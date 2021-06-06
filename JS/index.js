let data = [];
let user = new UserDetails(
  "John Doe",
  "Johndoe@gmail.com",
  "https://www.google.com",
  "./avtar.jpeg",
  "Male",
  "JAVA"
);
data.push(user);
user.renderDetails();
user = new UserDetails(
  "Tony Doe",
  "Tonydoe@gmail.com",
  "https://www.google.com",
  "./avtar.jpeg",
  "Male",
  "JAVA, HTML"
);
data.push(user);
user.renderDetails();

// user registor form handler
function registerUser(event) {
  event.preventDefault();
  let gender;
  let skills = [];
  // fetching values from registration form
  const name = document.getElementById("InputName").value;
  const emailID = document.getElementById("InputEmail").value;
  const websiteURL = document.getElementById("InputWebsite").value;
  const imageURL = document.getElementById("InputImage").value;
  const gen = document.getElementsByName("gender");
  const ele = document.getElementsByName("skills");

  for (let i = 0; i < gen.length; i++) {
    if (gen[i].checked) {
      gender = gen[i].value;
    }
  }

  for (let i = 0; i < ele.length; i++) {
    if (ele[i].checked) {
      skills.push(ele[i].value);
    }
  }
  skills.toString();
  let emailFlag = true;
  // console.log(data);

  // email id validation
  data.forEach((element) => {
    if (element.emailId === emailID) {
      console.log(element);
      emailFlag = false;
    }
  });

  // if email is not found in already registered user then new user is created
  if (emailFlag === true) {
    const user = new UserDetails(
      name,
      emailID,
      websiteURL,
      imageURL,
      gender,
      skills
    );
    data.push(user);
    user.renderDetails();
  } else {
    alert("email already registered");
  }
}
