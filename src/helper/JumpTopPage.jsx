import { useEffect } from "react";
import { useParams } from "react-router-dom";

const JumpTopPage = () => {
  const { slug } = useParams();
  useEffect(() => {
    scroll(0, 0);
  }, [slug]);
};

export { JumpTopPage };
