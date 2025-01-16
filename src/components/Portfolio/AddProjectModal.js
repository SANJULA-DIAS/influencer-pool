import React, { useState } from 'react';

const AddProjectModal = ({ closeModal }) => {
  const [formData, setFormData] = useState({
    projectName: '',
    brandName: '',
    projectType: '',
    startDate: '',
    endDate: '',
    description: '',
    photo: null,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, photo: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('New Project:', formData);
    closeModal();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-lg w-full">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-medium text-gray-900">Add A New Project</h2>
          <button onClick={closeModal} className="text-gray-500 hover:text-red-500">×</button>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">Project Name</label>
            <input
              type="text"
              name="projectName"
              value={formData.projectName}
              onChange={handleInputChange}
              className="w-full border rounded-lg p-3"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Brand Name</label>
            <input
              type="text"
              name="brandName"
              value={formData.brandName}
              onChange={handleInputChange}
              className="w-full border rounded-lg p-3"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Project Type</label>
            <input
              type="text"
              name="projectType"
              value={formData.projectType}
              onChange={handleInputChange}
              className="w-full border rounded-lg p-3"
            />
          </div>
          <div className="flex gap-4">
            <div>
              <label className="block text-sm font-medium mb-2">Start Date</label>
              <input
                type="date"
                name="startDate"
                value={formData.startDate}
                onChange={handleInputChange}
                className="w-full border rounded-lg p-3"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">End Date</label>
              <input
                type="date"
                name="endDate"
                value={formData.endDate}
                onChange={handleInputChange}
                className="w-full border rounded-lg p-3"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Upload Photo</label>
            <div className="border-dashed border-2 border-gray-200 rounded-lg p-6 text-center">
              <input
                type="file"
                onChange={handleFileChange}
                className="hidden"
                id="file-upload"
              />
              <label
                htmlFor="file-upload"
                className="text-sm text-gray-500 cursor-pointer hover:text-red-500"
              >
                Drag and Drop or <span className="text-red-500">Choose File</span>
              </label>
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              className="w-full border rounded-lg p-3 h-24"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-red-500 text-white rounded-lg py-3 font-medium hover:bg-red-600"
          >
            Save
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddProjectModal;
