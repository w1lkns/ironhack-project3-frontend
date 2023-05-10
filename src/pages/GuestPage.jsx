import AuthButton from "../components/AuthButton"
function GuestPage() {
  return (
    <div>
        <h1>GuestPage</h1>
        <AuthButton type="signin" link="https://brainbounce.auth.eu-west-2.amazoncognito.com/login?client_id=5976tgt5sclg499iilodbkstoc&response_type=code&scope=email+openid+phone&redirect_uri=http%3A%2F%2Flocalhost%3A5173%2Fuserprofile"/>
        <AuthButton type="signup" link="https://brainbounce.auth.eu-west-2.amazoncognito.com/signup?client_id=5976tgt5sclg499iilodbkstoc&response_type=code&scope=email+openid+phone&redirect_uri=http%3A%2F%2Flocalhost%3A5173%2Fuserprofile"/>
    </div>
  )
}

export default GuestPage