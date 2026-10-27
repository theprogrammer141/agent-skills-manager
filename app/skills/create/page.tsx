"use client";

import { createSkill } from "@/app/actions/skills";
import { useActionState } from "react";

const initialState = {
    message: "",
}

export default function NewSkillPage(){
    const [state, formAction, pending] = useActionState(createSkill, initialState);
    
    return(
        <form action={formAction} className="p-4 form flex flex-col gap-4">
            <input placeholder="Skill Name" name="name" className="input input-bordered w-full" />
            <textarea placeholder="Description" name="description" rows={3} className="textarea textarea-bordered w-full"></textarea>
            <input placeholder="Category" name="category" className="input input-borderd w-full" />

            <p aria-live="polite" className="text-red-500">{state?.message}</p>
            <button className="btn btn-primary" disabled={pending}>
                {pending ? "Creating..." : "Create Skill"}
            </button>
        </form>
    )
}