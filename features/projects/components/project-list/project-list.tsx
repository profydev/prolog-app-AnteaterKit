import styled from "styled-components";
import { breakpoint, space } from "@styles/theme";
import { ProjectCard } from "../project-card";
import { useProjects } from "../../api/use-projects";
import { Loader } from "@features/ui/loader";
import { ProjectsError } from "../projects-error";

const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: ${space(6)};

  // reset list styles
  list-style: none;
  padding: 0;
  margin: 0;

  @media (min-width: ${breakpoint("desktop")}) {
    grid-template-columns: repeat(auto-fit, 400px);
  }
`;

const LoaderWrap = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 100px;
`;

export function ProjectList() {
  const { data, isLoading, isError, error, refetch } = useProjects();

  const reload = () => {
    console.log("reload");
    refetch();
  };

  if (isLoading) {
    return (
      <LoaderWrap>
        <Loader></Loader>;
      </LoaderWrap>
    );
  }

  if (isError) {
    console.error(error);
    return <ProjectsError reload={reload}></ProjectsError>;
  }

  return (
    <List>
      {data?.map((project) => (
        <li key={project.id}>
          <ProjectCard project={project} />
        </li>
      ))}
    </List>
  );
}
