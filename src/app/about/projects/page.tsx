import { Suspense } from "react";
import ProjectListPage from "./components/projectList";
import ProjectListLoading from "./components/project-list-loading";

export const dynamic = "force-dynamic";

export default async function ProjectsPage() {
  return (
    <div className="p-20">
      <h1 className="mb-8 text-xl">Projects</h1>
      <div className="mb-8">Hellom This is the list of my repos</div>
      <Suspense fallback={<ProjectListLoading />}>
        <ProjectListPage />
      </Suspense>
    </div>
  );
}
