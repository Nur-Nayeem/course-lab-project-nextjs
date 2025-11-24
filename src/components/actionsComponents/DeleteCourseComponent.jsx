"use client";

const DeleteCourseComponent = ({ id, deleteAction }) => {
  const handleDelete = async () => {
    await deleteAction(id);
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
