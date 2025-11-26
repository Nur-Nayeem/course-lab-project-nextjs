import Categories from "@/components/AllCoursesComponents/Categories/Categories";
import CouresCard from "@/components/AllCoursesComponents/CourseCard/CouresCard";
import SearchCourse from "@/components/AllCoursesComponents/SearchCOurse/SearchCourse";
import axios from "axios";

const AllCourses = async ({ searchParams }) => {
  const params = await searchParams;

  const category = params.category || "All";
  const search = params.search || "";

  let url = "http://localhost:4000/courses";

  if (category !== "All" && search) {
    url += `?category=${category}&search=${search}`;
  } else if (category !== "All") {
    url += `?category=${category}`;
  } else if (search) {
    url += `?search=${search}`;
  }

  let courses = [];

  try {
    const { data } = await axios.get(url);
    courses = data;
  } catch (error) {
    console.log(error);
  }

  return (
    <div className="grow">
      <div className="container mx-auto py-24">
        <div className="text-center mb-10">
          <h1 className="secondary-text text-4xl md:text-5xl font-black mb-3">
            All Courses
          </h1>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            Explore our curated selection of courses to kickstart your learning
            journey today.
          </p>
        </div>

        {/* Search + Categories */}
        <div className="mb-10 space-y-6">
          <SearchCourse searchValue={search} />
          <Categories currentCategory={category} />
        </div>

        {/* Courses */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course, index) => (
            <CouresCard key={index} course={course} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllCourses;
