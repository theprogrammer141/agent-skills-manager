import Link from "next/link";
import { getSkills } from "./SKILLS";

export default async function SkillsPage() {
	const skill = await getSkills()
	return <section className="p-4 flex flex-col gap-4 max-w-md mx-auto">
		<h1>Skills</h1>
		<Link href="/skills/create" className="btn btn-primary self-end">Create Skill</Link>
		<ul className="menu">
			{skill.map((skill) => {
				return (
					<li key={skill.id}>
						<Link href={`/skills/${skill.id}`}>
							{skill.name}
						</Link>
					</li>
				)
			})}
		</ul>
	</section>;
}