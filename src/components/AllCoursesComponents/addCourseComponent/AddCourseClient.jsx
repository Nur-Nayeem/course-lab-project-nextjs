"use client";

import { useTransition } from "react";
import toast from "react-hot-toast";

const AddCourseClient = ({ handlePublish, children }) => {
  const [isPending, startTransition] = useTransition();

  const onSubmit = async (formData) => {
    startTransition(async () => {
      const result = await handlePublish(formData);

      if (result?.success) {
        toast.success("Course published successfully!");
      } else {
        toast.error(result?.message || "Something went wrong!");
      }
    });
  };

  return <form action={onSubmit}>{children}</form>;
};

export default AddCourseClient;
