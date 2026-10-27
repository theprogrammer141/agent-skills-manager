import { getSkills } from "../SKILLS";
import { notFound } from "next/navigation";

export default async function SkillPage({ params }: { params: { id: string } }) {
  const skills = await getSkills();
  const {id} = await params;
  const skill = skills.find((skill) => skill.id === id);

  if (!skill) {
    return notFound();
  }

  return (
    <article className="p-4 max-w-md mx-auto flex flex-col gap-4">
      <h1>{skill.name}</h1>
      <p>{skill.description}</p>
      <p>{skill.category}</p>
      <p>{skill.createdAt.toString()}</p>
      <p>{skill.updatedAt.toString()}</p>
    </article>
  );
}
