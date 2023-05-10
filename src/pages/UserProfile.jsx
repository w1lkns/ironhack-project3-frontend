import AuthButton from "../components/AuthButton"
function UserProfile() {
  return (
    <div>
        <h1>UserProfile</h1>
        <AuthButton type="signout" link="http://localhost:5173/guestpage"/>

    </div>
  )
}

// use the Cognito Hosted UI to allow users to log out of your application
// https://barinbounce.auth.eu-west-2.amazoncognito.com/logout?client_id=5976tgt5sclg499iilodbkstoc&logout_uri=http%3A%2F%2Flocalhost%3A5173%2Fguestpage

export default UserProfile