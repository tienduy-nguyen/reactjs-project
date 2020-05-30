export default function getNameFromEmail(email) {
  let name = email.match(/.+(?=@)/g);
  return capitalizeFirstLetter(name[0]);
}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
