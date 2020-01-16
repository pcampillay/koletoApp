import Firebase, { db } from "../core/config"

export const logoutUser = () => {
  Firebase.auth().signOut();
};

export const signInUser = async ({ name, email, password }) => {
  try {
    let response = await Firebase.auth().createUserWithEmailAndPassword(email, password);
    // firebase.auth().currentUser.updateProfile({
    //   displayName: name
    // });
    if (response.user.uid) {
      const user = {
        uid: response.user.uid,
        nombre: name,
        email: email
      }

      db.collection('usuarios')
        .doc(response.user.uid)
        .set(user)
    }

    return {};
  } catch (error) {
    switch (error.code) {
      case "auth/email-already-in-use":
        return {
          error: "E-mail already in use."
        };
      case "auth/invalid-email":
        return {
          error: "Invalid e-mail address format."
        };
      case "auth/weak-password":
        return {
          error: "Password is too weak."
        };
      case "auth/too-many-requests":
        return {
          error: "Too many request. Try again in a minute."
        };
      default:
        return {
          error: "Check your internet connection."
        };
    }
  }
};

export const loginUser = async ({ email, password, state, actions }) => {
  try {
    const response =  await Firebase.auth().signInWithEmailAndPassword(email, password);
    getUser(response.user.uid,state, actions);
    return {};
  } catch (error) {
    switch (error.code) {
      case "auth/invalid-email":
        return {
          error: "Invalid email address format."
        };
      case "auth/user-not-found":
      case "auth/wrong-password":
        return {
          error: "Invalid email address or password."
        };
      case "auth/too-many-requests":
        return {
          error: "Too many request. Try again in a minute."
        };
      default:
        return {
          error: "Check your internet connection."
        };
    }
  }
};

export const getUser = async (uid, state, actions ) => {
  
	// return async (dispatch, getState) => {
		try {
			const user = await db.collection('usuarios').doc(uid)
      user.get().then(function(doc) {
        if (doc.exists) {
            console.log("Document data:", doc.data());
            actions.userActions.setUserValue(doc.data());
        } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
        }
      }).catch(function(error) {
          console.log("Error getting document:", error);
      });
    

			//dispatch({ type: LOGIN, payload: user.data() })
		} catch (e) {
			console(e)
		}
//	}
}

export const sendEmailWithPassword = async email => {
  try {
    await Firebase.auth().sendPasswordResetEmail(email);
    return {};
  } catch (error) {
    switch (error.code) {
      case "auth/invalid-email":
        return {
          error: "Invalid email address format."
        };
      case "auth/user-not-found":
        return {
          error: "User with this email does not exist."
        };
      case "auth/too-many-requests":
        return {
          error: "Too many request. Try again in a minute."
        };
      default:
        return {
          error: "Check your internet connection."
        };
    }
  }
};
