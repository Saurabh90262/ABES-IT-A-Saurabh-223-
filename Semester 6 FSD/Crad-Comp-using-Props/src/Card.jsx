import { useState } from "react";

function Card() {
  const [width, setWidth] = useState(300);
  const [height, setHeight] = useState(200);

  return (
    <div><center>
      <h1>This is a Card...!</h1>

      <div>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcrInaVoaBromsVvRzfmerBqs1TPz-bCp2Ww&s"
          alt="Mountain Lake"
          style={{
            width: `${width}px`,
            height: `${height}px`,
            objectFit: "cover",
            transition: "0.3s"
          }}
        />
      </div>

      <br />

      <button onClick={() => setWidth(width + 20)}>+ Col</button>
      <button onClick={() => setWidth(width - 20)}>- Col</button>
      <button onClick={() => setHeight(height + 20)}>+ Row</button>
      <button onClick={() => setHeight(height - 20)}>- Row</button>
      </center>
    </div>
  );
}

export default Card;
