import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const SubmitPage = () => {
  const formData = useSelector((state) => state.form.formData);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const addInfo = () => {
    navigate('/')
  }
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="border p-8 max-w-md">
        <h1 className="text-3xl font-bold mb-4 text-center">Form Data</h1>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <h1 className="text-lg font-semibold mb-2">Id: {formData.id}</h1>
            <h2 className="text-lg font-semibold mb-2">
              Name: {formData.name}
            </h2>
            <h2 className="text-lg font-semibold mb-2">
              Email: {formData.email}
            </h2>
            <h2 className="text-lg font-semibold mb-2">
              Mobile: {formData.mobile}
            </h2>
            <h2 className="text-lg font-semibold mb-2">
              Password: {formData.password}
            </h2>
            <h2 className="text-lg font-semibold mb-2">
              Username: {formData.username}
            </h2>
            <h2 className="text-lg font-semibold mb-2">
              College: {formData.college}
            </h2>
            <h2 className="text-lg font-semibold mb-2">
              Skill: {formData.skill}
            </h2>
            <h2 className="text-lg font-semibold mb-2">
              Hobby: {formData.hobby}
            </h2>
            <h2 className="text-lg font-semibold mb-2">
              Language: {formData.language}
            </h2>
            <div className="flex space-x-4">
              <button onClick={addInfo} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Add StudentInfo
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubmitPage;
