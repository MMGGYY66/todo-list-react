import { useAuthContext } from 'context/AuthContext';

const Profile = () => {
  const { user } = useAuthContext();
  return (
    <div>
      <h1>profile.</h1>
      <div className="profile">
        <h2>
          Hello,
          {' '}
          {user}
        </h2>
      </div>
    </div>
  );
};
export default Profile;
