function Profile() {
  return (
    <div>
      <h1>Profile Card Challenage</h1>
      <ProfileCard
        name="Ankit"
        age={30}
        greeting={
          <div>
            <strong>Hi Ankit</strong>
            <div />
          </div>
        }>
        <p>Hobbies: Cricket</p>
        <button>Contact</button>
      </ProfileCard>
    </div>
  );
}

export default Profile;

function ProfileCard({name,age,greeting,children}) {
  // const {name,age,greeting,children}=props
  return (
    <>
      <h1>Name:{name}</h1>
      <p>{age}</p>
      <p>{greeting}</p>
      <div>{children}</div>
    </>
  );
}
/* function ProfileCard(props) {
  return (
    <>
      <h1>Name:{props.name}</h1>
      <p>{props.age}</p>
      <p>{props.greeting}</p>
      <div>{props.children}</div>
    </>
  );
} */
