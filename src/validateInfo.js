export default function validateInfo(values) {
  let errors = {};

  
  if (!values.firstname) {
    errors.firstname = "Firstname required";
  }
  if (values.firstname.trim().length < 5) {
    errors.firstname = "First name is too short";
  }
  if (values.firstname.trim().length > 10) {
    errors.firstname = "First name is too long";
  }
  if (!values.lastname.includes("123")) {
    errors.lastname = "Last name must have 123";
  }
  if (!values.lastname) {
    errors.lastname = "Lastname required";
  }

  /* if (!values.username.trim()) {
    errors.username = "Username required";
  } else if (!/^[A-Za-z]+/.test(values.name.trim())) {
    errors.name = "Enter a valid name";
  } */
  /* 
  if (!values.lastname.trim()) {
    errors.lastname = "Lastname required";
  } else if (!/^[A-Za-z]+/.test(values.name.trim())) {
    errors.name = "Enter a valid lastname";
  } */

  if (!values.email) {
    errors.email = "Email required";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "Email address is invalid";
  }
  if (!values.phone) {
    errors.phone = "email is required";
  } else if (values.phone.length < 10) {
    errors.phone = "Phone number must have 10 numbers";
  }

  if (!values.date) {
    errors.date = "Password is required";
  } else if (values.date.length < 8) {
    errors.date = "Please enter valid date";
  }
  return errors;
}
