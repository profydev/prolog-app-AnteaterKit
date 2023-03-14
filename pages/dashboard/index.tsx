import type { NextPage } from "next";
import { PageContainer } from "@features/ui";
import { ProjectList } from "@features/projects";
import { Select } from "@features/ui/select";

const Home: NextPage = () => {
  return (
    <PageContainer
      title="Projects"
      info="Overview of your projects sorted by alert level."
    >
      <ProjectList />
      <Select></Select>
    </PageContainer>
  );
};

export default Home;
