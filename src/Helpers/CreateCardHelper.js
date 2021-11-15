export default function CreateCardHelper(
  idbizName,
  idDescription,
  idAddress,
  idPhone
) {
  let error = "";
  let cardData = {
    bizName: document.getElementById(idbizName).value,
    bizDescription: document.getElementById(idDescription).value,
    bizAddress: document.getElementById(idAddress).value,
    bizPhone: document.getElementById(idPhone).value,
  };

  if (!cardData.bizName || cardData.bizName.length < 2) {
    error = `*Please provide business name with at least 2 characters  `;
  }

  if (!cardData.bizDescription || cardData.bizDescription.length < 1) {
    error = `*Your business Description is empty. Help us know about your business  `;
  }
  if (!cardData.bizAddress || cardData.bizAddress.length < 1) {
    error = `*Please provide your business a location adress  `;
  }

  var reges = /^0(5[^7]|[2-4]|[8-9]|7[0-9])[0-9]{7}$/;
  var res = reges.test(cardData.bizPhone);
  if (!res) {
    error += "*Please enter a valid phone number  ";
  }

  return error || cardData;
}
