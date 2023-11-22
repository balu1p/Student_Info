
import { useDispatch, useSelector } from "react-redux";
import { addInfo } from "./redux/infoSlice";
import { useNavigate } from "react-router-dom";

const StudenInfo = () => {
    
  const formData = useSelector((state) => state.form.formData);
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const handleChange = (e) => {
      const { name, value } = e.target;
      dispatch(addInfo({ [name]: value }));
      
    };
    

    const onSubmitHandler = (e) => {
        e.preventDefault();
        dispatch(addInfo(formData));
    };
    const onClickHandler = () =>{
      navigate('/submit-page')
    }
    return(
        <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl text-center font-semibold my-7">Student Information</h1>
      <form className="flex flex-col gap-4" onSubmit={onSubmitHandler}>
      <input
          type="text"
          placeholder="id"
          className="border p-3 rounded-lg"
          id="id"
          name="id"
          onChange={handleChange}
            
        />
      <input
          type="text"
          placeholder="name"
          className="border p-3 rounded-lg"
          id="name"
          name="name"
          onChange={handleChange}
          
        />
        <input
          type="email"
          placeholder="email"
          className="border p-3 rounded-lg"
          id="email"
          name="email"
          onChange={handleChange}
          
        />
        <input
          type="password"
          placeholder="password"
          className="border p-3 rounded-lg"
          id="password"
          name="password"
          onChange={handleChange}
          
        />
        <input
          type="text"
          placeholder="mobile no"
          className="border p-3 rounded-lg"
          id="mobile"
          name="mobile"
          onChange={handleChange}
          
        />
        <input
          type="text"
          placeholder="username"
          className="border p-3 rounded-lg"
          id="username"
          name="username"
          onChange={handleChange}
          
        />
        <input
          type="text"
          placeholder="college name"
          className="border p-3 rounded-lg"
          id="college"
          name="college"
          onChange={handleChange}
          
        />
        <input
          type="text"
          placeholder="hobby"
          className="border p-3 rounded-lg"
          id="hobby"
          name="hobby"
          onChange={handleChange}
          
        />
        <input
          type="text"
          placeholder="skill"
          className="border p-3 rounded-lg"
          id="skill"
          name="skill"
          onChange={handleChange}
          
        />
        <input
          type="text"
          placeholder="favourite language"
          className="border p-3 rounded-lg"
          id="lang"
          name="language"
          onChange={handleChange}
          
        />
        <button className="bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80" onClick={onClickHandler}>Submit</button>
        </form>
        </div>
    )
}

export default StudenInfo;