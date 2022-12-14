import { CircularProgress, Container } from "@mui/material";
import { useEffect, useState } from "react";
import NotFound from "./components/NotFound";
import Searcher from "./components/Searcher";
import Title from "./components/Title";
import UserCard from "./containers/UserCard";
import { getGithubUser } from "./services/users";

function App() {
  const [inputUser, setInputUser] = useState("octocat");
  const [userState, setUserState] = useState("inputUser");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const gettingUser = async (user) => {
    try {
      setLoading(true)
      setError(false)
      const userResponse = await getGithubUser(user != '' ? user : 'octocat')
      setUserState(userResponse.data)
    } catch (error) {
      setError(true)
    }
    setLoading(false)
  }

  useEffect(() => {
    gettingUser(inputUser)
  }, [inputUser]);

  return (
    <Container
      sx={{
        background: "whitesmoke",
        width: "90vw",
        borderRadius: "16px",
        marginY: "40px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: '20px'
      }}
    >
      <Title/>
      <Searcher inputUser={inputUser} setInputUser={setInputUser} />
      {loading && <div className="mt-12"><CircularProgress/></div>}
      {!loading && !error && <UserCard userState={userState}/>}
      {error && <NotFound/>}
    </Container>
  );
}

export default App;
