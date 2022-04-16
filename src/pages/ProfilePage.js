import Layout from "../Layout/Layout";
import { useAuth } from "../Providers/AuthProvider";
import styles from "./profilePage.module.css";

const ProfilePage = () => {
    const userInfo = useAuth();

  const logoutHandler = () => {
    localStorage.removeItem("auth token");
    window.location.reload();
  };
    return ( 

       <>
        <Layout/>
        <div className={styles.profileContainer}>
            <h1>Your Profile</h1>
            < div>
                <p className={styles.welcomeMsg}> Welcome {userInfo.name}</p>
                <p className={styles.emailP}>Email : {userInfo.email}</p>
                <p>{userInfo.isAdmin ? "You are an admin" : "You are not an admin"}</p>
            </div>
            {userInfo ? (
            <button className={styles.logoutBtn} onClick={logoutHandler}>
                Logout
            </button>
      ) : null}
    </div>
       </>
     );
}
 
export default ProfilePage;