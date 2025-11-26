"use client";

import toast from "react-hot-toast";

const DeleteCourseComponent = ({ id, deleteAction }) => {
  const handleDelete = async () => {
    const res = await deleteAction(id);
    if (res?.success) {
      toast.success("Course deleted successfully!");
    } else {
      toast.error("Failed to delete course!");
    }
  };

  return (
    <button
      onClick={handleDelete}
      className="btn bg-base-100 rounded-lg border-red-600 text-rose-600"
    >
      Delete
    </button>
  );
};

export default DeleteCourseComponent;
