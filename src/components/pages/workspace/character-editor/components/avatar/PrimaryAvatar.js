import * as React from "react";

export default function PrimaryAvatar(props) {
  const { url } = props;
  return (
    <div className="w-[120px] h-[120px] rounded-full overflow-hidden">
      <img src={url} alt="avatar" width={120} height={120} />
    </div>
  );
}
