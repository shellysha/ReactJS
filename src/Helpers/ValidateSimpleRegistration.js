const getElemVal = (id) => document.getElementById(id).value;

export default function ValidateSimpleRegistration(
  idName,
  idEmail,
  idPassword
) {
  let error = "";
  var data = {
    name: getElemVal(idName),
    email: getElemVal(idEmail),
    password: getElemVal(idPassword),
    // biz: getElemVal(idBiz),
  };

  if (!data.password || data.password.length < 6) {
    error = `*Password must have at least 6 characters  *`;
  }

  if (data.email) {
    var reges =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var res = reges.test(data.email);
    if (!res) {
      error += "Must enter a valid email adress   *";
    }
  } else {
    error += "Must enter a valid email adress   *";
  }
  if (!data.name || data.name.length < 2) {
    error += "Full name must be at least 2 characters";
  }

  return error || data;
}
