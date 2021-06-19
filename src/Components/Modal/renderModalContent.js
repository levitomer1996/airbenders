import React from "react";
import InviteByWhatsapp from "./Comps/InviteByWhatsapp";
import InvatationMessage from "./Comps/InvatationMessage";
import ShareModal from "./Comps/ShareModal";
export default (content, params) => {
  switch (content) {
    case "invitebywhatsapp":
      return <InviteByWhatsapp params={params} />;
    case "invatationmessage":
      return <InvatationMessage params={params} />;
    case "sharemodal":
      return <ShareModal params={params} />;
  }
};
