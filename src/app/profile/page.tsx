const Profile = async() => {
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve("intentional delay");
    }, 2000);
  });
  return (
    <div className="text-white">
      <h2>This is the Profile route</h2>
    </div>
  );
};

export default Profile;
