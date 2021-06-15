import React from "react";
import { Button } from "react-bootstrap";

export default function SignedOut({signIn}) {
  return (
    <div>
      <div>
        <Button onClick={signIn} variant="primary" size="sm">
          Giriş Yap
        </Button>{" "}
        <Button variant="secondary" size="sm">
          Kayıt Ol
        </Button>
      </div>
    </div>
  );
}
