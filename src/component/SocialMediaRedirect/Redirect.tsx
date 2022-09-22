import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useAuth } from "../../context";

function SocialRedirect() {
  const history = useHistory();
  const { socialLogin } = useAuth()!;

  async function validateToken(token: string) {
    try {
      const nextPage = await socialLogin(token);
      if (nextPage) history.push("/auth/" + nextPage);
    } catch (err) {
      console.error(err);
    }
  }

  useEffect(() => {
    // check for token
    try {
      const search = window.location.search;
      const params = new URLSearchParams(search);
      const token = params.get("token");
      if (token) validateToken(token);
    } catch (err) {
      console.error(err);
    }
  }, []);

  return <>handle Token ...</>;
}

export default SocialRedirect;
