import { useEffect, useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db, auth } from "../FirebaseConfige";
import { useNavigate } from "react-router-dom";

const CreatePost = ({ isAuth }) => {
  const [inputText, setInputText] = useState({
    title: "",
    content: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setInputText((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  };

  const postCollectionRef = collection(db, "posts");

  const navigate = useNavigate();

  const createPost = async () => {
    await addDoc(postCollectionRef, {
      title: inputText.title,
      post: inputText.content,
      author: { name: auth.currentUser.displayName, id: auth.currentUser.uid },
    });

    navigate("/");
  };

  useEffect(() => {
    if (!isAuth) {
      navigate("/login");
    }
  }, []);

  return (
    <div className="createPostPage">
      <div className="cpContainer">
        <h1>Create A Post</h1>
        <div className="inputGp">
          <label> Title:</label>
          <input
            type="text"
            placeholder="Title..."
            value={inputText.title}
            onChange={handleChange}
            name="title"
          />
        </div>
        <div className="inputGp">
          <label> Post:</label>
          <textarea
            placeholder="Post..."
            onChange={handleChange}
            value={inputText.content}
            name="content"
          />
        </div>
        <button onClick={createPost}> Submit Post</button>
      </div>
    </div>
  );
};

export default CreatePost;
