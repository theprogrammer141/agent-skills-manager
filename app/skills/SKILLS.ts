import { resolve } from "path";

export type Skill = {
    id: string;
    name: string;
    description: string;
    category: string;
    createdAt: Date;
    updatedAt: Date;
}

export let SKILLS: Skill[] = [
    {
        id: "1",
        name: "Skill 1",
        description: "Description 1",
        category: "Category 1",
        createdAt: new Date(),
        updatedAt: new Date(),
    },
    {
        id: "2",
        name: "Skill 2",
        description: "Description 2",
        category: "Category 2",
        createdAt: new Date(),
        updatedAt: new Date(),
    },
]

export async function getSkills(){
    await new Promise(resolve => {
        setTimeout(() => {
            resolve(null);
        }, 3000)
    });
    return [...SKILLS];
}

export function addSkill(skill:Skill){
    SKILLS = [...SKILLS, skill];
    console.log("Skills updated", SKILLS);
}