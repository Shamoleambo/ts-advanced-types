interface ErrorContainer {
  [prop: string]: string //Don't know which properties might be in the received object but Iknow they could be read as a string and their property value is a string
}

const errorBag: ErrorContainer = {
  email: 'Not a valid email',
  username: 'Must start with a capital character',
}
