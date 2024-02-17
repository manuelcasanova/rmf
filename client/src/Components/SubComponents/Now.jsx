export default function Now() {

  const timestamp = Date.now();
  const dateCreatedAt = new Date(timestamp).toLocaleDateString("en-GB")
  const timeCreatedAt = new Date(timestamp).toLocaleTimeString("en-GB")
  const createdAt = dateCreatedAt + ` ${timeCreatedAt}`

  return (

    createdAt
  )
}