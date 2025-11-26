import DeleteCourseComponent from "@/components/actionsComponents/DeleteCourseComponent";
import axios from "axios";
import { revalidatePath } from "next/cache";
import Link from "next/link";
import React from "react";

export const dynamic = "force-dynamic";

const ManageCourse = async () => {
  async function deleteCourse(id) {
    "use server";
    await axios.delete(`https://server-course-lab.vercel.app/courses/${id}`);

    revalidatePath("/manage-courses");
    revalidatePath("/");
    revalidatePath("/courses");
    return { success: true };
  }

  let courses = [];
  try {
    const data = await axios.get(
      "https://server-course-lab.vercel.app/courses"
    );
    courses = data.data;
  } catch (error) {
    console.log(error);
  }

  return (
    <div className="container mx-auto py-20">
      <h2 className="text-center text-3xl font-bold secondary-text my-4">
        Available Courses:{" "}
        <span className="text-red-400">{courses.length}</span>
      </h2>
      <div>
        <div className="overflow-x-auto glass-blur rounded-lg w-full">
          <table className="table">
            <thead>
              <tr>
                <th>SL No</th>
                <th>Title</th>
                <th>level</th>
                <th>Instructor</th>
                <th>Price</th>
                <th className="text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {courses.map((course, index) => (
                <tr key={index}>
                  <th>{index + 1}</th>
                  <td>{course.title}</td>
                  <td>{course.level}</td>
                  <td>{course.instructor}</td>
                  <td>{course.price}</td>
                  <td className="flex space-x-2 justify-center">
                    <Link
                      href={`/courses/${course._id}`}
                      className="btn bg-base-100 rounded-lg border-primary text-primary"
                    >
                      View
                    </Link>
                    <DeleteCourseComponent
                      key={course._id}
                      id={course._id}
                      deleteAction={deleteCourse}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageCourse;
