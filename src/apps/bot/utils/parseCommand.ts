
export function parseCommand (str:  string)  {
  const command = str.substring(1, str.indexOf(' '))
  const params = str.substring(str.indexOf(' ') + 1).split(' ')

  return {
    command,
    params,
  }
}
